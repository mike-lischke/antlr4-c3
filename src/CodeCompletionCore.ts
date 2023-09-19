/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/* eslint-disable max-classes-per-file */

import {
    ATN, ATNState, IntervalSet, Parser, ParserRuleContext, Token, TokenStream, Vocabulary, Transition,
    PredicateTransition, RuleTransition, RuleStartState, PrecedencePredicateTransition, TransitionType, ATNStateType,
} from "antlr4ng";

import { longestCommonPrefix } from "./utils.js";

export type TokenList = number[];
export type RuleList = number[];

export interface ICandidateRule {
    startTokenIndex: number;
    ruleList: RuleList;
}

export interface IRuleWithStartToken {
    startTokenIndex: number;
    ruleIndex: number;
}

export type RuleWithStartTokenList = IRuleWithStartToken[];

/**
 * All the candidates which have been found. Tokens and rules are separated.
 * Token entries include a list of tokens that directly follow them (see also the "following" member in the
 * FollowSetWithPath class).
 * Rule entries include the index of the starting token within the evaluated rule, along with a call stack of rules
 * found during evaluation.
 */
export class CandidatesCollection {
    public tokens: Map<number, TokenList> = new Map();
    public rules: Map<number, ICandidateRule> = new Map();
}

/**
 * A record for a follow set along with the path at which this set was found.
 * If there is only a single symbol in the interval set then we also collect and store tokens which follow
 * this symbol directly in its rule (i.e. there is no intermediate rule transition). Only single label transitions
 * are considered. This is useful if you have a chain of tokens which can be suggested as a whole, because there is
 * a fixed sequence in the grammar.
 */
class FollowSetWithPath {
    public intervals: IntervalSet;
    public path: RuleList = [];
    public following: TokenList = [];
}

/**
 * A list of follow sets (for a given state number) + all of them combined for quick hit tests + whether they are
 * exhaustive (false if subsequent yet-unprocessed rules could add further tokens to the follow set, true otherwise).
 * This data is static in nature (because the used ATN states are part of a static struct: the ATN).
 * Hence it can be shared between all C3 instances, however it depends on the actual parser class (type).
 */
class FollowSetsHolder {
    public sets: FollowSetWithPath[];
    public combined: IntervalSet;
    public isExhaustive: boolean;
}

type FollowSetsPerState = Map<number, FollowSetsHolder>;

/** Token stream position info after a rule was processed. */
type RuleEndStatus = Set<number>;

interface IPipelineEntry {
    state: ATNState;
    tokenListIndex: number;
}

/** The main class for doing the collection process. */
export class CodeCompletionCore {
    private static followSetsByATN = new Map<string, FollowSetsPerState>();

    private static atnStateTypeMap: string[] = [
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
        "loop end",
    ];

    // Debugging options. Print human readable ATN state and other info.

    /** Not dependent on showDebugOutput. Prints the collected rules + tokens to terminal. */
    public showResult = false;

    /** Enables printing ATN state info to terminal. */
    public showDebugOutput = false;

    /** Only relevant when showDebugOutput is true. Enables transition printing for a state. */
    public debugOutputWithTransitions = false;

    /** Also depends on showDebugOutput. Enables call stack printing for each rule recursion. */
    public showRuleStack = false;

    /**
     * Tailoring of the result:
     * Tokens which should not appear in the candidates set.
     */
    public ignoredTokens: Set<number>;

    /**
     * Rules which replace any candidate token they contain.
     * This allows to return descriptive rules (e.g. className, instead of ID/identifier).
     */
    public preferredRules: Set<number>;

    /**
     * Specify if preferred rules should translated top-down (higher index rule returns first) or
     * bottom-up (lower index rule returns first).
     */
    public translateRulesTopDown = false;

    private parser: Parser;
    private atn: ATN;
    private vocabulary: Vocabulary;
    private ruleNames: string[];
    private tokens: Token[];
    private precedenceStack: number[];

    private tokenStartIndex = 0;
    private statesProcessed = 0;

    /**
     * A mapping of rule index + token stream position to end token positions.
     * A rule which has been visited before with the same input position will always produce the same output positions.
     */
    private shortcutMap: Map<number, Map<number, RuleEndStatus>> = new Map();

    /** The collected candidates (rules and tokens). */
    private candidates: CandidatesCollection = new CandidatesCollection();

    public constructor(parser: Parser) {
        this.parser = parser;
        this.atn = parser.atn;
        this.vocabulary = parser.getVocabulary();
        this.ruleNames = parser.ruleNames;
        this.ignoredTokens = new Set();
        this.preferredRules = new Set();
    }

    /**
     * This is the main entry point. The caret token index specifies the token stream index for the token which
     * currently covers the caret (or any other position you want to get code completion candidates for).
     * Optionally you can pass in a parser rule context which limits the ATN walk to only that or called rules.
     * This can significantly speed up the retrieval process but might miss some candidates (if they are outside of
     * the given context).
     *
     * @param caretTokenIndex The index of the token at the caret position.
     * @param context An option parser rule context to limit the search space.
     * @returns The collection of completion candidates.
     */
    public collectCandidates(caretTokenIndex: number, context?: ParserRuleContext): CandidatesCollection {
        this.shortcutMap.clear();
        this.candidates.rules.clear();
        this.candidates.tokens.clear();
        this.statesProcessed = 0;
        this.precedenceStack = [];

        this.tokenStartIndex = context?.start ? context.start.tokenIndex : 0;
        // eslint-disable-next-line no-underscore-dangle
        const tokenStream: TokenStream = this.parser.tokenStream;

        this.tokens = [];
        let offset = this.tokenStartIndex;
        while (true) {
            const token = tokenStream.get(offset++);
            if (token.channel === Token.DEFAULT_CHANNEL) {
                this.tokens.push(token);

                if (token.tokenIndex >= caretTokenIndex || token.type === Token.EOF) {
                    break;
                }
            }

            // Do not check for the token index here, as we want to end with the first unhidden token on or after
            // the caret.
            if (token.type === Token.EOF) {
                break;
            }
        }

        const callStack: RuleWithStartTokenList = [];
        const startRule = context ? context.ruleIndex : 0;
        this.processRule(this.atn.ruleToStartState[startRule], 0, callStack, 0, 0);

        if (this.showResult) {
            console.log(`States processed: ${this.statesProcessed}`);
            console.log("\n\nCollected rules:\n");
            for (const rule of this.candidates.rules) {
                let path = "";
                for (const token of rule[1].ruleList) {
                    path += this.ruleNames[token] + " ";
                }
                console.log(this.ruleNames[rule[0]] + ", path: ", path);
            }

            const sortedTokens: Set<string> = new Set();
            for (const token of this.candidates.tokens) {
                let value = this.vocabulary.getDisplayName(token[0]) ?? "";
                for (const following of token[1]) {
                    value += " " + this.vocabulary.getDisplayName(following);
                }
                sortedTokens.add(value);
            }

            console.log("\n\nCollected tokens:\n");
            for (const symbol of sortedTokens) {
                console.log(symbol);
            }
            console.log("\n\n");
        }

        return this.candidates;
    }

    /**
     * Checks if the predicate associated with the given transition evaluates to true.
     *
     * @param transition The transition to check.
     * @returns the evaluation result of the predicate.
     */
    private checkPredicate(transition: PredicateTransition): boolean {
        return transition.getPredicate().evaluate(this.parser, ParserRuleContext.EMPTY);
    }

    /**
     * Walks the rule chain upwards or downwards (depending on translateRulesTopDown) to see if that matches any of the
     * preferred rules. If found, that rule is added to the collection candidates and true is returned.
     *
     * @param ruleWithStartTokenList The list to convert.
     * @returns true if any of the stack entries was converted.
     */
    private translateStackToRuleIndex(ruleWithStartTokenList: RuleWithStartTokenList): boolean {
        if (this.preferredRules.size === 0) {
            return false;
        }

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
     *
     * @param i The rule index.
     * @param ruleWithStartTokenList The list to check.
     * @returns true if the specified rule is in the list of preferred rules.
     */
    private translateToRuleIndex(i: number, ruleWithStartTokenList: RuleWithStartTokenList): boolean {
        const { ruleIndex, startTokenIndex } = ruleWithStartTokenList[i];
        if (this.preferredRules.has(ruleIndex)) {
            // Add the rule to our candidates list along with the current rule path,
            // but only if there isn't already an entry like that.
            const path = ruleWithStartTokenList.slice(0, i).map(({ ruleIndex: candidate }) => { return candidate; });
            let addNew = true;
            for (const rule of this.candidates.rules) {
                if (rule[0] !== ruleIndex || rule[1].ruleList.length !== path.length) {
                    continue;
                }

                // Found an entry for this rule. Same path? If so don't add a new (duplicate) entry.
                if (path.every((v, j) => { return v === rule[1].ruleList[j]; })) {
                    addNew = false;
                    break;
                }
            }

            if (addNew) {
                this.candidates.rules.set(ruleIndex, {
                    startTokenIndex,
                    ruleList: path,
                });
                if (this.showDebugOutput) {
                    console.log("=====> collected: ", this.ruleNames[ruleIndex]);
                }
            }

            return true;
        }

        return false;
    }

    /**
     * This method follows the given transition and collects all symbols within the same rule that directly follow it
     * without intermediate transitions to other rules and only if there is a single symbol for a transition.
     *
     * @param transition The transition from which to start.
     * @returns A list of toke types.
     */
    private getFollowingTokens(transition: Transition): number[] {
        const result: number[] = [];

        const pipeline: ATNState[] = [transition.target];

        while (pipeline.length > 0) {
            const state = pipeline.pop();

            if (state) {
                state.transitions.forEach((outgoing) => {
                    if (outgoing.serializationType === TransitionType.ATOM) {
                        if (!outgoing.isEpsilon) {
                            const list = outgoing.label!.toArray();
                            if (list.length === 1 && !this.ignoredTokens.has(list[0])) {
                                result.push(list[0]);
                                pipeline.push(outgoing.target);
                            }
                        } else {
                            pipeline.push(outgoing.target);
                        }
                    }
                });
            }
        }

        return result;
    }

    /**
     * Entry point for the recursive follow set collection function.
     *
     * @param start Start state.
     * @param stop Stop state.
     * @returns Follow sets.
     */
    private determineFollowSets(start: ATNState, stop: ATNState): FollowSetsHolder {
        const sets: FollowSetWithPath[] = [];
        const stateStack: ATNState[] = [];
        const ruleStack: number[] = [];
        const isExhaustive = this.collectFollowSets(start, stop, sets, stateStack, ruleStack);
        // Sets are split by path to allow translating them to preferred rules. But for quick hit tests
        // it is also useful to have a set with all symbols combined.
        const combined = new IntervalSet();
        for (const set of sets) {
            combined.addSet(set.intervals);
        }

        return { sets, isExhaustive, combined };
    }

    /**
     * Collects possible tokens which could be matched following the given ATN state. This is essentially the same
     * algorithm as used in the LL1Analyzer class, but here we consider predicates also and use no parser rule context.
     *
     * @param s The state to continue from.
     * @param stopState The state which ends the collection routine.
     * @param followSets A pass through parameter to add found sets to.
     * @param stateStack A stack to avoid endless recursions.
     * @param ruleStack The current rule stack.
     * @returns true if the follow sets is exhaustive, i.e. we terminated before the rule end was reached, so no
     * subsequent rules could add tokens
     */
    private collectFollowSets(s: ATNState, stopState: ATNState, followSets: FollowSetWithPath[], stateStack: ATNState[],
        ruleStack: number[]): boolean {

        if (stateStack.find((x) => { return x === s; })) {
            return true;
        }
        stateStack.push(s);

        if (s === stopState || s.stateType === ATNStateType.RULE_STOP) {
            stateStack.pop();

            return false;
        }

        let isExhaustive = true;
        for (const transition of s.transitions) {
            if (transition.serializationType === TransitionType.RULE) {
                const ruleTransition = transition as RuleTransition;
                if (ruleStack.indexOf(ruleTransition.target.ruleIndex) !== -1) {
                    continue;
                }

                ruleStack.push(ruleTransition.target.ruleIndex);
                const ruleFollowSetsIsExhaustive = this.collectFollowSets(
                    transition.target, stopState, followSets, stateStack, ruleStack);
                ruleStack.pop();

                // If the subrule had an epsilon transition to the rule end, the tokens added to
                // the follow set are non-exhaustive and we should continue processing subsequent transitions post-rule
                if (!ruleFollowSetsIsExhaustive) {
                    const nextStateFollowSetsIsExhaustive = this.collectFollowSets(
                        ruleTransition.followState, stopState, followSets, stateStack, ruleStack);
                    isExhaustive &&= nextStateFollowSetsIsExhaustive;
                }

            } else if (transition.serializationType === TransitionType.PREDICATE) {
                if (this.checkPredicate(transition as PredicateTransition)) {
                    const nextStateFollowSetsIsExhaustive = this.collectFollowSets(
                        transition.target, stopState, followSets, stateStack, ruleStack);
                    isExhaustive &&= nextStateFollowSetsIsExhaustive;
                }
            } else if (transition.isEpsilon) {
                const nextStateFollowSetsIsExhaustive = this.collectFollowSets(
                    transition.target, stopState, followSets, stateStack, ruleStack);
                isExhaustive &&= nextStateFollowSetsIsExhaustive;
            } else if (transition.serializationType === TransitionType.WILDCARD) {
                const set = new FollowSetWithPath();
                set.intervals = IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                set.path = ruleStack.slice();
                followSets.push(set);
            } else {
                let label = transition.label;
                if (label && label.length > 0) {
                    if (transition.serializationType === TransitionType.NOT_SET) {
                        label = label.complement(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                    }
                    const set = new FollowSetWithPath();
                    set.intervals = label ?? new IntervalSet();
                    set.path = ruleStack.slice();
                    set.following = this.getFollowingTokens(transition);
                    followSets.push(set);
                }
            }
        }
        stateStack.pop();

        return isExhaustive;
    }

    /**
     * Walks the ATN for a single rule only. It returns the token stream position for each path that could be matched
     * in this rule.
     * The result can be empty in case we hit only non-epsilon transitions that didn't match the current input or if we
     * hit the caret position.
     *
     * @param startState The start state.
     * @param tokenListIndex The token index we are currently at.
     * @param callStack The stack that indicates where in the ATN we are currently.
     * @param precedence The current precedence level.
     * @param indentation A value to determine the current indentation when doing debug prints.
     * @returns the set of token stream indexes (which depend on the ways that had to be taken).
     */
    private processRule(startState: RuleStartState, tokenListIndex: number, callStack: RuleWithStartTokenList,
        precedence: number, indentation: number): RuleEndStatus {

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

        const result: RuleEndStatus = new Set<number>();

        // For rule start states we determine and cache the follow set, which gives us 3 advantages:
        // 1) We can quickly check if a symbol would be matched when we follow that rule. We can so check in advance
        //    and can save us all the intermediate steps if there is no match.
        // 2) We'll have all symbols that are collectable already together when we are at the caret on rule enter.
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
            const stop = this.atn.ruleToStopState[startState.ruleIndex];
            followSets = this.determineFollowSets(startState, stop);
            setsPerState.set(startState.stateNumber, followSets);
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
                for (const set of followSets.sets) {
                    const fullPath = callStack.slice();

                    // Rules derived from our followSet will always start at the same token as our current rule.
                    const followSetPath = set.path.map((path) => {
                        return {
                            startTokenIndex,
                            ruleIndex: path,
                        };
                    });

                    fullPath.push(...followSetPath);
                    if (!this.translateStackToRuleIndex(fullPath)) {
                        for (const symbol of set.intervals.toArray()) {
                            if (!this.ignoredTokens.has(symbol)) {
                                if (this.showDebugOutput) {
                                    console.log("=====> collected: ", this.vocabulary.getDisplayName(symbol));
                                }
                                if (!this.candidates.tokens.has(symbol)) {
                                    // Following is empty if there is more than one entry in the set.
                                    this.candidates.tokens.set(symbol, set.following);
                                } else {
                                    // More than one following list for the same symbol.
                                    if (this.candidates.tokens.get(symbol) !== set.following) {
                                        this.candidates.tokens.set(symbol, []);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (!followSets.isExhaustive) {
                // If we're at the caret but the follow sets is non-exhaustive (empty or all tokens are optional),
                // we should continue to collect tokens following this rule
                result.add(tokenListIndex);
            }

            callStack.pop();

            return result;

        } else {
            // Process the rule if we either could pass it without consuming anything (epsilon transition)
            // or if the current input symbol will be matched somewhere after this entry point.
            // Otherwise stop here.
            const currentSymbol = this.tokens[tokenListIndex].type;
            if (followSets.isExhaustive && !followSets.combined.contains(currentSymbol)) {
                callStack.pop();

                return result;
            }
        }

        if (startState.isPrecedenceRule) {
            this.precedenceStack.push(precedence);
        }

        // The current state execution pipeline contains all yet-to-be-processed ATN states in this rule.
        // For each such state we store the token index + a list of rules that lead to it.
        const statePipeline: IPipelineEntry[] = [];
        let currentEntry;

        // Bootstrap the pipeline.
        statePipeline.push({ state: startState, tokenListIndex });

        while (statePipeline.length > 0) {
            currentEntry = statePipeline.pop()!;
            ++this.statesProcessed;

            const currentSymbol = this.tokens[currentEntry.tokenListIndex].type;

            const atCaret = currentEntry.tokenListIndex >= this.tokens.length - 1;
            if (this.showDebugOutput) {
                this.printDescription(indentation, currentEntry.state, this.generateBaseDescription(currentEntry.state),
                    currentEntry.tokenListIndex);
                if (this.showRuleStack) {
                    this.printRuleState(callStack);
                }
            }

            if (currentEntry.state.stateType === ATNStateType.RULE_STOP) {
                // Record the token index we are at, to report it to the caller.
                result.add(currentEntry.tokenListIndex);
                continue;
            }

            const transitions = currentEntry.state.transitions;

            // We simulate here the same precedence handling as the parser does, which uses hard coded values.
            // For rules that are not left recursive this value is ignored (since there is no precedence transition).
            for (const transition of transitions) {
                switch (transition.serializationType) {
                    case TransitionType.RULE: {
                        const ruleTransition = transition as RuleTransition;
                        const endStatus = this.processRule(transition.target as RuleStartState,
                            currentEntry.tokenListIndex, callStack, ruleTransition.precedence, indentation + 1);
                        for (const position of endStatus) {
                            statePipeline.push({
                                state: (<RuleTransition>transition).followState,
                                tokenListIndex: position,
                            });
                        }
                        break;
                    }

                    case TransitionType.PREDICATE: {
                        if (this.checkPredicate(transition as PredicateTransition)) {
                            statePipeline.push({
                                state: transition.target,
                                tokenListIndex: currentEntry.tokenListIndex,
                            });
                        }
                        break;
                    }

                    case TransitionType.PRECEDENCE: {
                        const predTransition = transition as PrecedencePredicateTransition;
                        if (predTransition.precedence >= this.precedenceStack[this.precedenceStack.length - 1]) {
                            statePipeline.push({
                                state: transition.target,
                                tokenListIndex: currentEntry.tokenListIndex,
                            });
                        }

                        break;
                    }

                    case TransitionType.WILDCARD: {
                        if (atCaret) {
                            if (!this.translateStackToRuleIndex(callStack)) {
                                for (const token of IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)
                                    .toArray()) {
                                    if (!this.ignoredTokens.has(token)) {
                                        this.candidates.tokens.set(token, []);
                                    }
                                }
                            }
                        } else {
                            statePipeline.push({
                                state: transition.target,
                                tokenListIndex: currentEntry.tokenListIndex + 1,
                            });
                        }
                        break;
                    }

                    default: {
                        if (transition.isEpsilon) {
                            // Jump over simple states with a single outgoing epsilon transition.
                            statePipeline.push({
                                state: transition.target,
                                tokenListIndex: currentEntry.tokenListIndex,
                            });
                            continue;
                        }

                        let set = transition.label;
                        if (set && set.length > 0) {
                            if (transition.serializationType === TransitionType.NOT_SET) {
                                set = set.complement(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                            }
                            if (atCaret) {
                                if (!this.translateStackToRuleIndex(callStack)) {
                                    const list = set.toArray();
                                    const hasTokenSequence = list.length === 1;
                                    for (const symbol of list) {
                                        if (!this.ignoredTokens.has(symbol)) {
                                            if (this.showDebugOutput) {
                                                console.log("=====> collected: ",
                                                    this.vocabulary.getDisplayName(symbol));
                                            }

                                            const followingTokens = hasTokenSequence
                                                ? this.getFollowingTokens(transition)
                                                : [];
                                            if (!this.candidates.tokens.has(symbol)) {
                                                this.candidates.tokens.set(symbol, followingTokens);
                                            } else {
                                                this.candidates.tokens.set(
                                                    symbol,
                                                    longestCommonPrefix(followingTokens,
                                                        this.candidates.tokens.get(symbol)));
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (set.contains(currentSymbol)) {
                                    if (this.showDebugOutput) {
                                        console.log("=====> consumed: ", this.vocabulary.getDisplayName(currentSymbol));
                                    }
                                    statePipeline.push({
                                        state: transition.target,
                                        tokenListIndex: currentEntry.tokenListIndex + 1,
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

    private generateBaseDescription(state: ATNState): string {
        const stateValue = state.stateNumber === ATNState.INVALID_STATE_NUMBER ? "Invalid" : state.stateNumber;

        return `[${stateValue} ${CodeCompletionCore.atnStateTypeMap[state.stateType]}] in ` +
            `${this.ruleNames[state.ruleIndex]}`;
    }

    private printDescription(indentation: number, state: ATNState, baseDescription: string, tokenIndex: number) {

        const indent = "  ".repeat(indentation);
        let output = indent;

        let transitionDescription = "";
        if (this.debugOutputWithTransitions) {
            for (const transition of state.transitions) {
                let labels = "";
                const symbols: number[] = transition.label ? transition.label.toArray() : [];
                if (symbols.length > 2) {
                    // Only print start and end symbols to avoid large lists in debug output.
                    labels = this.vocabulary.getDisplayName(symbols[0]) + " .. " +
                        this.vocabulary.getDisplayName(symbols[symbols.length - 1]);
                } else {
                    for (const symbol of symbols) {
                        if (labels.length > 0) {
                            labels += ", ";
                        }
                        labels += this.vocabulary.getDisplayName(symbol);
                    }
                }
                if (labels.length === 0) {
                    labels = "ε";
                }
                transitionDescription += `\n${indent}\t(${labels}) [${transition.target.stateNumber} ` +
                    `${CodeCompletionCore.atnStateTypeMap[transition.target.stateType]}] in ` +
                    `${this.ruleNames[transition.target.ruleIndex]}`;
            }
        }

        if (tokenIndex >= this.tokens.length - 1) {
            output += `<<${this.tokenStartIndex + tokenIndex}>> `;
        } else {
            output += `<${this.tokenStartIndex + tokenIndex}> `;
        }
        console.log(output + "Current state: " + baseDescription + transitionDescription);
    }

    private printRuleState(stack: RuleWithStartTokenList) {
        if (stack.length === 0) {
            console.log("<empty stack>");

            return;
        }

        for (const rule of stack) {
            console.log(this.ruleNames[rule.ruleIndex]);
        }
    }

}
