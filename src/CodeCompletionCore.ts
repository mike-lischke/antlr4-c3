/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2020, Mike Lischke
 *
 * See LICENSE file for more info.
 */

'use strict';

import { Parser, Vocabulary, Token, TokenStream, ParserRuleContext } from 'antlr4ts';
import {
    ATN, ATNState, ATNStateType, Transition, TransitionType, PredicateTransition, RuleTransition, RuleStartState,
    PrecedencePredicateTransition
} from 'antlr4ts/atn';
import { IntervalSet } from 'antlr4ts/misc/IntervalSet';

export type TokenList = number[];

export type CandidateRule = {
    startTokenIndex: number,
    ruleList: RuleList,
}

export type RuleWithStartToken = {
    startTokenIndex: number,
    ruleIndex: number;
}

export type RuleWithStartTokenList = RuleWithStartToken[];
export type RuleList = number[];

// All the candidates which have been found. Tokens and rules are separated.
// Token entries include a list of tokens that directly follow them (see also the "following" member in the
// FollowSetWithPath class).
// Rule entries include the index of the starting token within the evaluated rule, along with a call stack of rules
// found during evaluation.
export class CandidatesCollection {
    public tokens: Map<number, TokenList> = new Map();
    public rules: Map<number, CandidateRule> = new Map();
};

// A record for a follow set along with the path at which this set was found.
// If there is only a single symbol in the interval set then we also collect and store tokens which follow
// this symbol directly in its rule (i.e. there is no intermediate rule transition). Only single label transitions
// are considered. This is useful if you have a chain of tokens which can be suggested as a whole, because there is
// a fixed sequence in the grammar.
class FollowSetWithPath {
    public intervals: IntervalSet;
    public path: RuleList = [];
    public following: TokenList = [];
};

// A list of follow sets (for a given state number) + all of them combined for quick hit tests.
// This data is static in nature (because the used ATN states are part of a static struct: the ATN).
// Hence it can be shared between all C3 instances, however it depends on the actual parser class (type).
class FollowSetsHolder {
    public sets: FollowSetWithPath[];
    public combined: IntervalSet;
};

type FollowSetsPerState = Map<number, FollowSetsHolder>;

// Token stream position info after a rule was processed.
type RuleEndStatus = Set<number>;

class PipelineEntry {
    state: ATNState;
    tokenListIndex: number;
};

// The main class for doing the collection process.
export class CodeCompletionCore {
    // Debugging options. Print human readable ATN state and other info.
    public showResult = false;                 // Not dependent on showDebugOutput. Prints the collected rules + tokens
    // to terminal.
    public showDebugOutput = false;            // Enables printing ATN state info to terminal.
    public debugOutputWithTransitions = false; // Only relevant when showDebugOutput is true. Enables transition
    // printing for a state.
    public showRuleStack = false;              // Also depends on showDebugOutput. Enables call stack printing for each
    // rule recursion.

    // Tailoring of the result.
    public ignoredTokens: Set<number>;        // Tokens which should not appear in the candidates set.
    public preferredRules: Set<number>;       // Rules which replace any candidate token they contain.
                                              // This allows to return descriptive rules (e.g. className, instead of ID/identifier).
    public translateRulesTopDown = false;     // Specify if preferred rules should translated top-down (higher index rule returns first)
                                              // or bottom-up (lower index rule returns first).

    private parser: Parser;
    private atn: ATN;
    private vocabulary: Vocabulary;
    private ruleNames: string[];
    private tokens: Token[];
    private precedenceStack: Array<number>;

    private tokenStartIndex: number = 0;
    private statesProcessed: number = 0;

    // A mapping of rule index + token stream position to end token positions.
    // A rule which has been visited before with the same input position will always produce the same output positions.
    private shortcutMap: Map<number, Map<number, RuleEndStatus>> = new Map();
    private candidates: CandidatesCollection = new CandidatesCollection(); // The collected candidates (rules and tokens).

    private static followSetsByATN: Map<string, FollowSetsPerState> = new Map();

    constructor(parser: Parser) {
        this.parser = parser;
        this.atn = parser.atn;
        this.vocabulary = parser.vocabulary;
        this.ruleNames = parser.ruleNames;
        this.ignoredTokens = new Set();
        this.preferredRules = new Set();
    }

    /**
     * This is the main entry point. The caret token index specifies the token stream index for the token which currently
     * covers the caret (or any other position you want to get code completion candidates for).
     * Optionally you can pass in a parser rule context which limits the ATN walk to only that or called rules.
     * This can significantly speed up the retrieval process but might miss some candidates (if they are outside of
     * the given context).
     */
    public collectCandidates(caretTokenIndex: number, context?: ParserRuleContext): CandidatesCollection {
        this.shortcutMap.clear();
        this.candidates.rules.clear();
        this.candidates.tokens.clear();
        this.statesProcessed = 0;
        this.precedenceStack = [];

        this.tokenStartIndex = context ? context.start.tokenIndex : 0;
        let tokenStream: TokenStream = this.parser.inputStream;

        let currentIndex = tokenStream.index;
        tokenStream.seek(this.tokenStartIndex);
        this.tokens = [];
        let offset = 1;
        while (true) {
            let token = tokenStream.LT(offset++);
            this.tokens.push(token);
            if (token.tokenIndex >= caretTokenIndex || token.type == Token.EOF)
                break;
        }
        tokenStream.seek(currentIndex);

        let callStack: RuleWithStartTokenList = [];
        let startRule = context ? context.ruleIndex : 0;
        this.processRule(this.atn.ruleToStartState[startRule], 0, callStack, 0, 0);

        if (this.showResult) {
            console.log("States processed: " + this.statesProcessed);
            console.log("\n\nCollected rules:\n");
            for (let rule of this.candidates.rules) {
                let path = "";
                for (let token of rule[1].ruleList) {
                    path += this.ruleNames[token] + " ";
                }
                console.log(this.ruleNames[rule[0]] + ", path: ", path);
            }

            let sortedTokens: Set<string> = new Set();
            for (let token of this.candidates.tokens) {
                let value: string = this.vocabulary.getDisplayName(token[0]);
                for (let following of token[1])
                    value += " " + this.vocabulary.getDisplayName(following);
                sortedTokens.add(value);
            }

            console.log("\n\nCollected tokens:\n");
            for (let symbol of sortedTokens) {
                console.log(symbol);
            }
            console.log("\n\n");
        }

        return this.candidates;
    }

    /**
     * Checks if the predicate associated with the given transition evaluates to true.
     */
    private checkPredicate(transition: PredicateTransition): boolean {
        return transition.predicate.eval(this.parser, ParserRuleContext.emptyContext());
    }

    /**
     * Walks the rule chain upwards or downwards (depending on translateRulesTopDown) to see if that matches any of the
     * preferred rules. If found, that rule is added to the collection candidates and true is returned.
     */
    private translateStackToRuleIndex(ruleWithStartTokenList: RuleWithStartTokenList): boolean {
        if (this.preferredRules.size == 0)
            return false;

        // Change the direction we iterate over the rule stack
        if (this.translateRulesTopDown) {
            // Loop over the rule stack from lowest to highest rule level. This will prioritize a lower preferred rule
            // if it is a child of a higher one that is also a preferred rule.
            for (let i = ruleWithStartTokenList.length - 1; i >= 0; i--) {
                if (this.translateToRuleIndex(i, ruleWithStartTokenList)) {
                    return true;
                }
            }
        } else {
            // Loop over the rule stack from highest to lowest rule level. This will prioritize a higher preferred rule
            // if it contains a lower one that is also a preferred rule.
            for (let i = 0; i < ruleWithStartTokenList.length; i++) {
                if (this.translateToRuleIndex(i, ruleWithStartTokenList)) {
                    return true;
                }
            }
        }


        return false;
    }

    /**
     * Given the index of a rule from a rule chain, check if that matches any of the preferred rules. If it matches,
     * that rule is added to the collection candidates and true is returned.
     */
    private translateToRuleIndex(i: number, ruleWithStartTokenList: RuleWithStartTokenList): boolean {
        const { ruleIndex, startTokenIndex } = ruleWithStartTokenList[i];
        if (this.preferredRules.has(ruleIndex)) {
            // Add the rule to our candidates list along with the current rule path,
            // but only if there isn't already an entry like that.
            let path = ruleWithStartTokenList.slice(0, i).map(({ ruleIndex }) => ruleIndex);
            let addNew = true;
            for (let rule of this.candidates.rules) {
                if (rule[0] != ruleIndex || rule[1].ruleList.length != path.length)
                    continue;
                // Found an entry for this rule. Same path? If so don't add a new (duplicate) entry.
                if (path.every((v, j) => v === rule[1].ruleList[j])) {
                    addNew = false;
                    break;
                }
            }

            if (addNew) {
                this.candidates.rules.set(ruleIndex, {
                    startTokenIndex,
                    ruleList: path,
                });
                if (this.showDebugOutput)
                    console.log("=====> collected: ", this.ruleNames[ruleIndex]);
            }
            return true;
        }

        return false;
    }

    /**
     * This method follows the given transition and collects all symbols within the same rule that directly follow it
     * without intermediate transitions to other rules and only if there is a single symbol for a transition.
     */
    private getFollowingTokens(transition: Transition): number[] {
        let result: number[] = [];

        let seen: ATNState[] = [];
        let pipeline: ATNState[] = [transition.target];

        while (pipeline.length > 0) {
            let state = pipeline.pop();

            for (let transition of state!.getTransitions()) {
                if (transition.serializationType == TransitionType.ATOM) {
                    if (!transition.isEpsilon) {
                        let list = transition.label!.toArray();
                        if (list.length == 1 && !this.ignoredTokens.has(list[0])) {
                            result.push(list[0]);
                            pipeline.push(transition.target);
                        }
                    } else {
                        pipeline.push(transition.target);
                    }
                }
            }
        }

        return result;
    }

    /**
     * Entry point for the recursive follow set collection function.
     */
    private determineFollowSets(start: ATNState, stop: ATNState): FollowSetWithPath[] {
        let result: FollowSetWithPath[] = [];
        let seen: Set<ATNState> = new Set();
        let ruleStack: number[] = [];
        this.collectFollowSets(start, stop, result, seen, ruleStack);

        return result;
    }

    /**
     * Collects possible tokens which could be matched following the given ATN state. This is essentially the same
     * algorithm as used in the LL1Analyzer class, but here we consider predicates also and use no parser rule context.
     */
    private collectFollowSets(s: ATNState, stopState: ATNState, followSets: FollowSetWithPath[], seen: Set<ATNState>,
        ruleStack: number[]) {

        if (seen.has(s))
            return;

        seen.add(s);

        if (s == stopState || s.stateType == ATNStateType.RULE_STOP) {
            let set = new FollowSetWithPath();
            set.intervals = IntervalSet.of(Token.EPSILON);
            set.path = ruleStack.slice();
            followSets.push(set);
            return;
        }

        for (let transition of s.getTransitions()) {
            if (transition.serializationType == TransitionType.RULE) {
                let ruleTransition: RuleTransition = transition as RuleTransition;
                if (ruleStack.indexOf(ruleTransition.target.ruleIndex) != -1)
                    continue;

                ruleStack.push(ruleTransition.target.ruleIndex);
                this.collectFollowSets(transition.target, stopState, followSets, seen, ruleStack);
                ruleStack.pop();

            } else if (transition.serializationType == TransitionType.PREDICATE) {
                if (this.checkPredicate(transition as PredicateTransition))
                    this.collectFollowSets(transition.target, stopState, followSets, seen, ruleStack);
            } else if (transition.isEpsilon) {
                this.collectFollowSets(transition.target, stopState, followSets, seen, ruleStack);
            } else if (transition.serializationType == TransitionType.WILDCARD) {
                let set = new FollowSetWithPath();
                set.intervals = IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                set.path = ruleStack.slice();
                followSets.push(set);
            } else {
                let label = transition.label;
                if (label && label.size > 0) {
                    if (transition.serializationType == TransitionType.NOT_SET) {
                        label = label.complement(IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
                    }
                    let set = new FollowSetWithPath();
                    set.intervals = label;
                    set.path = ruleStack.slice();
                    set.following = this.getFollowingTokens(transition);
                    followSets.push(set);
                }
            }
        }
    }

    /**
     * Walks the ATN for a single rule only. It returns the token stream position for each path that could be matched
     * in this rule.
     * The result can be empty in case we hit only non-epsilon transitions that didn't match the current input or if we
     * hit the caret position.
     */
    private processRule(startState: RuleStartState, tokenListIndex: number, callStack: RuleWithStartTokenList, precedence: number,
        indentation: number): RuleEndStatus {

        // Start with rule specific handling before going into the ATN walk.

        // Check first if we've taken this path with the same input before.
        let positionMap = this.shortcutMap.get(startState.ruleIndex);
        if (!positionMap) {
            positionMap = new Map();
            this.shortcutMap.set(startState.ruleIndex, positionMap);
        } else {
            if (positionMap.has(tokenListIndex)) {
                if (this.showDebugOutput) {
                    console.log("=====> shortcut");
                }
                return positionMap.get(tokenListIndex)!;
            }
        }

        let result: RuleEndStatus = new Set<number>();

        // For rule start states we determine and cache the follow set, which gives us 3 advantages:
        // 1) We can quickly check if a symbol would be matched when we follow that rule. We can so check in advance
        //    and can save us all the intermediate steps if there is no match.
        // 2) We'll have all symbols that are collectable already together when we are at the caret when entering a rule.
        // 3) We get this lookup for free with any 2nd or further visit of the same rule, which often happens
        //    in non trivial grammars, especially with (recursive) expressions and of course when invoking code
        //    completion multiple times.
        let setsPerState = CodeCompletionCore.followSetsByATN.get(this.parser.constructor.name);
        if (!setsPerState) {
            setsPerState = new Map();
            CodeCompletionCore.followSetsByATN.set(this.parser.constructor.name, setsPerState);
        }

        let followSets = setsPerState.get(startState.stateNumber);
        if (!followSets) {
            followSets = new FollowSetsHolder();
            setsPerState.set(startState.stateNumber, followSets);
            let stop = this.atn.ruleToStopState[startState.ruleIndex];
            followSets.sets = this.determineFollowSets(startState, stop);

            // Sets are split by path to allow translating them to preferred rules. But for quick hit tests
            // it is also useful to have a set with all symbols combined.
            let combined = new IntervalSet();
            for (let set of followSets.sets)
                combined.addAll(set.intervals);
            followSets.combined = combined;
        }

        // Get the token index where our rule starts from our (possibly filtered) token list
        const startTokenIndex = this.tokens[tokenListIndex].tokenIndex;

        callStack.push({
            startTokenIndex,
            ruleIndex: startState.ruleIndex,
        });

        if (tokenListIndex >= this.tokens.length - 1) { // At caret?
            if (this.preferredRules.has(startState.ruleIndex)) {
                // No need to go deeper when collecting entries and we reach a rule that we want to collect anyway.
                this.translateStackToRuleIndex(callStack);
            } else {
                // Convert all follow sets to either single symbols or their associated preferred rule and add
                // the result to our candidates list.
                for (let set of followSets.sets) {
                    let fullPath = callStack.slice();

                    // Rules derived from our followSet will always start at the same token as our current rule
                    const followSetPath = set.path.map(path => ({
                        startTokenIndex,
                        ruleIndex: path,
                    }));

                    fullPath.push(...followSetPath);
                    if (!this.translateStackToRuleIndex(fullPath)) {
                        for (let symbol of set.intervals.toArray())
                            if (!this.ignoredTokens.has(symbol)) {
                                if (this.showDebugOutput) {
                                    console.log("=====> collected: ", this.vocabulary.getDisplayName(symbol));
                                }
                                if (!this.candidates.tokens.has(symbol))
                                    // Following is empty if there is more than one entry in the set.
                                    this.candidates.tokens.set(symbol, set.following);
                                else {
                                    // More than one following list for the same symbol.
                                    if (this.candidates.tokens.get(symbol) != set.following)
                                        this.candidates.tokens.set(symbol, []);
                                }
                            }
                    }
                }
            }

            callStack.pop();
            return result;

        } else {
            // Process the rule if we either could pass it without consuming anything (epsilon transition)
            // or if the current input symbol will be matched somewhere after this entry point.
            // Otherwise stop here.
            let currentSymbol = this.tokens[tokenListIndex].type;
            if (!followSets.combined.contains(Token.EPSILON) && !followSets.combined.contains(currentSymbol)) {
                callStack.pop();
                return result;
            }
        }

        if (startState.isPrecedenceRule) {
            this.precedenceStack.push(precedence);
        }

        // The current state execution pipeline contains all yet-to-be-processed ATN states in this rule.
        // For each such state we store the token index + a list of rules that lead to it.
        let statePipeline: PipelineEntry[] = [];
        let currentEntry;

        // Bootstrap the pipeline.
        statePipeline.push({ state: startState, tokenListIndex: tokenListIndex });

        while (statePipeline.length > 0) {
            currentEntry = statePipeline.pop()!;
            ++this.statesProcessed;

            let currentSymbol = this.tokens[currentEntry.tokenListIndex].type;

            let atCaret = currentEntry.tokenListIndex >= this.tokens.length - 1;
            if (this.showDebugOutput) {
                this.printDescription(indentation, currentEntry.state, this.generateBaseDescription(currentEntry.state),
                    currentEntry.tokenListIndex);
                if (this.showRuleStack)
                    this.printRuleState(callStack);
            }

            if (currentEntry.state.stateType == ATNStateType.RULE_STOP) {
                // Record the token index we are at, to report it to the caller.
                result.add(currentEntry.tokenListIndex);
                continue;
            }

            let transitions = currentEntry.state.getTransitions();

            // We simulate here the same precedence handling as the parser does, which uses hard coded values.
            // For rules that are not left recursive this value is ignored (since there is no precedence transition).
            for (let transition of transitions) {
                switch (transition.serializationType) {
                    case TransitionType.RULE: {
                        let ruleTransition = transition as RuleTransition;
                        let endStatus = this.processRule(transition.target as RuleStartState, currentEntry.tokenListIndex,
                            callStack, ruleTransition.precedence, indentation + 1);
                        for (let position of endStatus) {
                            statePipeline.push({ state: (<RuleTransition>transition).followState, tokenListIndex: position });
                        }
                        break;
                    }

                    case TransitionType.PREDICATE: {
                        if (this.checkPredicate(transition as PredicateTransition))
                            statePipeline.push({ state: transition.target, tokenListIndex: currentEntry.tokenListIndex });
                        break;
                    }

                    case TransitionType.PRECEDENCE: {
                        const predTransition = transition as PrecedencePredicateTransition;
                        if (predTransition.precedence >= this.precedenceStack[this.precedenceStack.length - 1])
                            statePipeline.push({ state: transition.target, tokenListIndex: currentEntry.tokenListIndex });

                        break;
                    }

                    case TransitionType.WILDCARD: {
                        if (atCaret) {
                            if (!this.translateStackToRuleIndex(callStack)) {
                                for (let token of IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)
                                    .toArray()) {
                                    if (!this.ignoredTokens.has(token))
                                        this.candidates.tokens.set(token, []);
                                }
                            }
                        } else {
                            statePipeline.push({ state: transition.target, tokenListIndex: currentEntry.tokenListIndex + 1 });
                        }
                        break;
                    }

                    default: {
                        if (transition.isEpsilon) {
                            // Jump over simple states with a single outgoing epsilon transition.
                            statePipeline.push({ state: transition.target, tokenListIndex: currentEntry.tokenListIndex });
                            continue;
                        }

                        let set = transition.label;
                        if (set && set.size > 0) {
                            if (transition.serializationType == TransitionType.NOT_SET) {
                                set = set.complement(IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
                            }
                            if (atCaret) {
                                if (!this.translateStackToRuleIndex(callStack)) {
                                    let list = set.toArray();
                                    let addFollowing = list.length == 1;
                                    for (let symbol of list)
                                        if (!this.ignoredTokens.has(symbol)) {
                                            if (this.showDebugOutput)
                                                console.log("=====> collected: ", this.vocabulary.getDisplayName(symbol));

                                            if (addFollowing)
                                                this.candidates.tokens.set(symbol, this.getFollowingTokens(transition));
                                            else
                                                this.candidates.tokens.set(symbol, []);
                                        }
                                }
                            } else {
                                if (set.contains(currentSymbol)) {
                                    if (this.showDebugOutput)
                                        console.log("=====> consumed: ", this.vocabulary.getDisplayName(currentSymbol));
                                    statePipeline.push({
                                        state: transition.target,
                                        tokenListIndex: currentEntry.tokenListIndex + 1
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }

        callStack.pop();
        if (startState.isPrecedenceRule) {
            this.precedenceStack.pop();
        }

        // Cache the result, for later lookup to avoid duplicate walks.
        positionMap.set(tokenListIndex, result);

        return result;
    }

    private atnStateTypeMap: string[] = [
        "invalid",
        "basic",
        "rule start",
        "block start",
        "plus block start",
        "star block start",
        "token start",
        "rule stop",
        "block end",
        "star loop back",
        "star loop entry",
        "plus loop back",
        "loop end"
    ]

    private generateBaseDescription(state: ATNState): string {
        let stateValue = state.stateNumber == ATNState.INVALID_STATE_NUMBER ? "Invalid" : state.stateNumber;
        return "[" + stateValue + " " + this.atnStateTypeMap[state.stateType] + "] in " + this.ruleNames[state.ruleIndex];
    }

    private printDescription(indentation: number, state: ATNState, baseDescription: string, tokenIndex: number) {

        const indent = "  ".repeat(indentation);
        let output = indent;

        let transitionDescription = "";
        if (this.debugOutputWithTransitions) {
            for (let transition of state.getTransitions()) {
                let labels = "";
                let symbols: number[] = transition.label ? transition.label.toArray() : [];
                if (symbols.length > 2) {
                    // Only print start and end symbols to avoid large lists in debug output.
                    labels = this.vocabulary.getDisplayName(symbols[0]) + " .. " +
                        this.vocabulary.getDisplayName(symbols[symbols.length - 1]);
                } else {
                    for (let symbol of symbols) {
                        if (labels.length > 0)
                            labels += ", ";
                        labels += this.vocabulary.getDisplayName(symbol);
                    }
                }
                if (labels.length == 0)
                    labels = "ε";
                transitionDescription += "\n" + indent + "\t(" + labels + ") " + "[" +
                    transition.target.stateNumber + " " + this.atnStateTypeMap[transition.target.stateType] + "] in " +
                    this.ruleNames[transition.target.ruleIndex];
            }
        }

        if (tokenIndex >= this.tokens.length - 1)
            output += "<<" + this.tokenStartIndex + tokenIndex + ">> ";
        else
            output += "<" + this.tokenStartIndex + tokenIndex + "> ";
        console.log(output + "Current state: " + baseDescription + transitionDescription);
    }

    private printRuleState(stack: RuleWithStartTokenList) {
        if (stack.length == 0) {
            console.log("<empty stack>");
            return;
        }

        for (let rule of stack)
            console.log(this.ruleNames[rule.ruleIndex]);
    }

}
