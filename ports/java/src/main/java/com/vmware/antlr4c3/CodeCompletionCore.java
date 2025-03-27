/*
 * Copyright © 2017 VMware, Inc. All Rights Reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * See LICENSE file for more info.
 */
package com.vmware.antlr4c3;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.misc.IntervalSet;

import java.util.*;
import java.util.stream.Collectors;

public class CodeCompletionCore {
    private static Map<String, Map<Integer, FollowSetsHolder>> followSetsByATN = new HashMap<>();

    private static String[] atnStateTypeMap = {
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
    };

    // Debugging options
    public boolean showResult = false;
    public boolean showDebugOutput = false;
    public boolean debugOutputWithTransitions = false;
    public boolean showRuleStack = false;

    public Set<Integer> ignoredTokens = new HashSet<>();
    public Set<Integer> preferredRules = new HashSet<>();
    public boolean translateRulesTopDown = false;

    private Parser parser;
    private ATN atn;
    private Vocabulary vocabulary;
    private String[] ruleNames;
    private List<Token> tokens;
    private List<Integer> precedenceStack;

    private int tokenStartIndex = 0;
    private int statesProcessed = 0;

    private Map<Integer, Map<Integer, Set<Integer>>> shortcutMap = new HashMap<>();
    private CandidatesCollection candidates = new CandidatesCollection();

    public CodeCompletionCore(Parser parser) {
        this.parser = parser;
        this.atn = parser.getATN();
        this.vocabulary = parser.getVocabulary();
        this.ruleNames = parser.getRuleNames();
    }

    public CandidatesCollection collectCandidates(int caretTokenIndex, ParserRuleContext context) {
        shortcutMap.clear();
        candidates.rules.clear();
        candidates.tokens.clear();
        statesProcessed = 0;
        precedenceStack = new ArrayList<>();

        this.tokenStartIndex = context != null && context.start != null ? context.start.getTokenIndex() : 0;
        TokenStream tokenStream = parser.getTokenStream();

        tokens = new ArrayList<>();
        int offset = tokenStartIndex;
        while (true) {
            Token token = tokenStream.get(offset++);
            if (token == null) {
                break;
            }
            if (token.getChannel() == Token.DEFAULT_CHANNEL) {
                tokens.add(token);

                if (token.getTokenIndex() >= caretTokenIndex || token.getType() == Token.EOF) {
                    break;
                }
            }

            if (token.getType() == Token.EOF) {
                break;
            }
        }

        List<RuleWithStartToken> callStack = new ArrayList<>();
        int startRule = context != null ? context.getRuleIndex() : 0;
        processRule((RuleStartState) atn.ruleToStartState[startRule], 0, callStack, 0, 0);

        if (showResult) {
            System.out.println("States processed: " + statesProcessed);
            System.out.println("\n\nCollected rules:\n");
            for (Map.Entry<Integer, CandidateRule> entry : candidates.rules.entrySet()) {
                String path = entry.getValue().ruleList.stream()
                        .map(ruleIndex -> ruleNames[ruleIndex])
                        .collect(Collectors.joining(" "));
                System.out.println(ruleNames[entry.getKey()] + ", path: " + path);
            }

            Set<String> sortedTokens = new TreeSet<>();
            for (Map.Entry<Integer, List<Integer>> entry : candidates.tokens.entrySet()) {
                String value = vocabulary.getDisplayName(entry.getKey());
                for (int following : entry.getValue()) {
                    value += " " + vocabulary.getDisplayName(following);
                }
                sortedTokens.add(value);
            }

            System.out.println("\n\nCollected tokens:\n");
            for (String symbol : sortedTokens) {
                System.out.println(symbol);
            }
            System.out.println("\n\n");
        }

        return candidates;
    }

    private boolean checkPredicate(PredicateTransition transition) {
        return transition.getPredicate().eval(parser, ParserRuleContext.EMPTY);
    }

    private boolean translateStackToRuleIndex(List<RuleWithStartToken> ruleWithStartTokenList) {
        if (preferredRules.isEmpty()) {
            return false;
        }

        if (translateRulesTopDown) {
            for (int i = ruleWithStartTokenList.size() - 1; i >= 0; i--) {
                if (translateToRuleIndex(i, ruleWithStartTokenList)) {
                    return true;
                }
            }
        } else {
            for (int i = 0; i < ruleWithStartTokenList.size(); i++) {
                if (translateToRuleIndex(i, ruleWithStartTokenList)) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean translateToRuleIndex(int i, List<RuleWithStartToken> ruleWithStartTokenList) {
        RuleWithStartToken ruleWithStartToken = ruleWithStartTokenList.get(i);
        int ruleIndex = ruleWithStartToken.ruleIndex;
        if (preferredRules.contains(ruleIndex)) {
            int startTokenIndex = ruleWithStartToken.startTokenIndex;
            List<Integer> path = ruleWithStartTokenList.subList(0, i).stream()
                    .map(r -> r.ruleIndex)
                    .collect(Collectors.toList());

            boolean addNew = true;
            for (Map.Entry<Integer, CandidateRule> entry : candidates.rules.entrySet()) {
                if (!entry.getKey().equals(ruleIndex) || entry.getValue().ruleList.size() != path.size()) {
                    continue;
                }

                boolean samePath = true;
                for (int j = 0; j < path.size(); j++) {
                    if (!path.get(j).equals(entry.getValue().ruleList.get(j))) {
                        samePath = false;
                        break;
                    }
                }

                if (samePath) {
                    addNew = false;
                    break;
                }
            }

            if (addNew) {
                candidates.rules.put(ruleIndex, new CandidateRule(startTokenIndex, path));
                if (showDebugOutput) {
                    System.out.println("=====> collected: " + ruleNames[ruleIndex]);
                }
            }

            return true;
        }

        return false;
    }

    private List<Integer> getFollowingTokens(Transition transition) {
        List<Integer> result = new ArrayList<>();
        Stack<ATNState> pipeline = new Stack<>();
        pipeline.push(transition.target);

        while (!pipeline.isEmpty()) {
            ATNState state = pipeline.pop();

            for (Transition outgoing : state.getTransitions()) {
                if (outgoing.getSerializationType() == Transition.ATOM) {
                    if (!outgoing.isEpsilon()) {
                        IntervalSet label = outgoing.label();
                        if (label != null && label.size() == 1 && !ignoredTokens.contains(label.getMinElement())) {
                            result.add(label.getMinElement());
                            pipeline.push(outgoing.target);
                        }
                    } else {
                        pipeline.push(outgoing.target);
                    }
                }
            }
        }

        return result;
    }

    private FollowSetsHolder determineFollowSets(ATNState start, ATNState stop) {
        List<FollowSetWithPath> sets = new ArrayList<>();
        Stack<ATNState> stateStack = new Stack<>();
        Stack<Integer> ruleStack = new Stack<>();
        boolean isExhaustive = collectFollowSets(start, stop, sets, stateStack, ruleStack);

        IntervalSet combined = new IntervalSet();
        for (FollowSetWithPath set : sets) {
            combined.addAll(set.intervals);
        }

        return new FollowSetsHolder(sets, combined, isExhaustive);
    }

    private boolean collectFollowSets(ATNState s, ATNState stopState, List<FollowSetWithPath> followSets,
            Stack<ATNState> stateStack, Stack<Integer> ruleStack) {
        if (stateStack.contains(s)) {
            return true;
        }
        stateStack.push(s);

        if (s == stopState || s.getStateType() == ATNState.RULE_STOP) {
            stateStack.pop();
            return false;
        }

        boolean isExhaustive = true;
        for (Transition transition : s.getTransitions()) {
            if (transition.getSerializationType() == Transition.RULE) {
                RuleTransition ruleTransition = (RuleTransition) transition;
                if (ruleStack.contains(ruleTransition.target.ruleIndex)) {
                    continue;
                }

                ruleStack.push(ruleTransition.target.ruleIndex);
                boolean ruleFollowSetsIsExhaustive = collectFollowSets(
                        transition.target, stopState, followSets, stateStack, ruleStack);
                ruleStack.pop();

                if (!ruleFollowSetsIsExhaustive) {
                    boolean nextStateFollowSetsIsExhaustive = collectFollowSets(
                            ruleTransition.followState, stopState, followSets, stateStack, ruleStack);
                    isExhaustive &= nextStateFollowSetsIsExhaustive;
                }

            } else if (transition.getSerializationType() == Transition.PREDICATE) {
                if (checkPredicate((PredicateTransition) transition)) {
                    boolean nextStateFollowSetsIsExhaustive = collectFollowSets(
                            transition.target, stopState, followSets, stateStack, ruleStack);
                    isExhaustive &= nextStateFollowSetsIsExhaustive;
                }
            } else if (transition.isEpsilon()) {
                boolean nextStateFollowSetsIsExhaustive = collectFollowSets(
                        transition.target, stopState, followSets, stateStack, ruleStack);
                isExhaustive &= nextStateFollowSetsIsExhaustive;
            } else if (transition.getSerializationType() == Transition.WILDCARD) {
                FollowSetWithPath set = new FollowSetWithPath();
                set.intervals = IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, atn.maxTokenType);
                set.path = new ArrayList<>(ruleStack);
                followSets.add(set);
            } else {
                IntervalSet label = transition.label();
                if (label != null && label.size() != 0) {
                    if (transition.getSerializationType() == Transition.NOT_SET) {
                        label = label.complement(Token.MIN_USER_TOKEN_TYPE, atn.maxTokenType);
                    }
                    FollowSetWithPath set = new FollowSetWithPath();
                    set.intervals = label;
                    set.path = new ArrayList<>(ruleStack);
                    set.following = getFollowingTokens(transition);
                    followSets.add(set);
                }
            }
        }
        stateStack.pop();

        return isExhaustive;
    }

    private Set<Integer> processRule(RuleStartState startState, int tokenListIndex,
            List<RuleWithStartToken> callStack, int precedence, int indentation) {
        Map<Integer, Set<Integer>> positionMap = shortcutMap.computeIfAbsent(
                startState.ruleIndex, k -> new HashMap<>());

        if (positionMap.containsKey(tokenListIndex)) {
            if (showDebugOutput) {
                System.out.println("=====> shortcut");
            }
            return positionMap.get(tokenListIndex);
        }

        Set<Integer> result = new HashSet<>();

        Map<Integer, FollowSetsHolder> setsPerState = followSetsByATN.computeIfAbsent(
                parser.getClass().getName(), k -> new HashMap<>());

        FollowSetsHolder followSets = setsPerState.get(startState.stateNumber);
        if (followSets == null) {
            RuleStopState stop = atn.ruleToStopState[startState.ruleIndex];
            followSets = determineFollowSets(startState, stop);
            setsPerState.put(startState.stateNumber, followSets);
        }

        int startTokenIndex = tokens.get(tokenListIndex).getTokenIndex();
        callStack.add(new RuleWithStartToken(startTokenIndex, startState.ruleIndex));

        if (tokenListIndex >= tokens.size() - 1) {
            if (preferredRules.contains(startState.ruleIndex)) {
                translateStackToRuleIndex(callStack);
            } else {
                for (FollowSetWithPath set : followSets.sets) {
                    List<RuleWithStartToken> fullPath = new ArrayList<>(callStack);
                    List<RuleWithStartToken> followSetPath = set.path.stream()
                            .map(ruleIndex -> new RuleWithStartToken(startTokenIndex, ruleIndex))
                            .collect(Collectors.toList());
                    fullPath.addAll(followSetPath);

                    if (!translateStackToRuleIndex(fullPath)) {
                        for (int symbol : set.intervals.toList()) {
                            if (!ignoredTokens.contains(symbol)) {
                                if (showDebugOutput) {
                                    System.out.println("=====> collected: " + vocabulary.getDisplayName(symbol));
                                }
                                if (!candidates.tokens.containsKey(symbol)) {
                                    candidates.tokens.put(symbol, set.following);
                                } else {
                                    if (!candidates.tokens.get(symbol).equals(set.following)) {
                                        candidates.tokens.put(symbol, Collections.emptyList());
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (!followSets.isExhaustive) {
                result.add(tokenListIndex);
            }

            callStack.remove(callStack.size() - 1);
            return result;
        } else {
            int currentSymbol = tokens.get(tokenListIndex).getType();
            if (followSets.isExhaustive && !followSets.combined.contains(currentSymbol)) {
                callStack.remove(callStack.size() - 1);
                return result;
            }
        }

        if (startState.isLeftRecursiveRule) {
            precedenceStack.add(precedence);
        }

        Stack<PipelineEntry> statePipeline = new Stack<>();
        statePipeline.push(new PipelineEntry(startState, tokenListIndex));

        while (!statePipeline.isEmpty()) {
            PipelineEntry currentEntry = statePipeline.pop();
            statesProcessed++;

            int currentSymbol = tokens.get(currentEntry.tokenListIndex).getType();
            boolean atCaret = currentEntry.tokenListIndex >= tokens.size() - 1;

            if (showDebugOutput) {
                printDescription(indentation, currentEntry.state,
                        generateBaseDescription(currentEntry.state), currentEntry.tokenListIndex);
                if (showRuleStack) {
                    printRuleState(callStack);
                }
            }

            if (currentEntry.state.getStateType() == ATNState.RULE_STOP) {
                result.add(currentEntry.tokenListIndex);
                continue;
            }

            for (Transition transition : currentEntry.state.getTransitions()) {
                switch (transition.getSerializationType()) {
                    case Transition.RULE: {
                        RuleTransition ruleTransition = (RuleTransition) transition;
                        Set<Integer> endStatus = processRule((RuleStartState) transition.target,
                                currentEntry.tokenListIndex, callStack, ruleTransition.precedence, indentation + 1);
                        for (int position : endStatus) {
                            statePipeline.push(new PipelineEntry(ruleTransition.followState, position));
                        }
                        break;
                    }

                    case Transition.PREDICATE: {
                        if (checkPredicate((PredicateTransition) transition)) {
                            statePipeline.push(new PipelineEntry(transition.target, currentEntry.tokenListIndex));
                        }
                        break;
                    }

                    case Transition.PRECEDENCE: {
                        PrecedencePredicateTransition predTransition = (PrecedencePredicateTransition) transition;
                        if (predTransition.precedence >= precedenceStack.get(precedenceStack.size() - 1)) {
                            statePipeline.push(new PipelineEntry(transition.target, currentEntry.tokenListIndex));
                        }
                        break;
                    }

                    case Transition.WILDCARD: {
                        if (atCaret) {
                            if (!translateStackToRuleIndex(callStack)) {
                                for (int token : IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, atn.maxTokenType).toList()) {
                                    if (!ignoredTokens.contains(token)) {
                                        candidates.tokens.put(token, Collections.emptyList());
                                    }
                                }
                            }
                        } else {
                            statePipeline.push(new PipelineEntry(transition.target, currentEntry.tokenListIndex + 1));
                        }
                        break;
                    }

                    default: {
                        if (transition.isEpsilon()) {
                            statePipeline.push(new PipelineEntry(transition.target, currentEntry.tokenListIndex));
                            continue;
                        }

                        IntervalSet set = transition.label();
                        if (set != null && set.size() != 0) {
                            if (transition.getSerializationType() == Transition.NOT_SET) {
                                set = set.complement(Token.MIN_USER_TOKEN_TYPE, atn.maxTokenType);
                            }
                            if (atCaret) {
                                if (!translateStackToRuleIndex(callStack)) {
                                    List<Integer> list = set.toList();
                                    boolean hasTokenSequence = list.size() == 1;
                                    for (int symbol : list) {
                                        if (!ignoredTokens.contains(symbol)) {
                                            if (showDebugOutput) {
                                                System.out.println("=====> collected: " +
                                                        vocabulary.getDisplayName(symbol));
                                            }

                                            List<Integer> followingTokens = hasTokenSequence
                                                    ? getFollowingTokens(transition)
                                                    : Collections.emptyList();
                                            if (!candidates.tokens.containsKey(symbol)) {
                                                candidates.tokens.put(symbol, followingTokens);
                                            } else {
                                                candidates.tokens.put(symbol,
                                                        longestCommonPrefix(followingTokens,
                                                                candidates.tokens.get(symbol)));
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (set.contains(currentSymbol)) {
                                    if (showDebugOutput) {
                                        System.out.println("=====> consumed: " +
                                                vocabulary.getDisplayName(currentSymbol));
                                    }
                                    statePipeline.push(new PipelineEntry(transition.target,
                                            currentEntry.tokenListIndex + 1));
                                }
                            }
                        }
                    }
                }
            }
        }

        callStack.remove(callStack.size() - 1);
        if (startState.isLeftRecursiveRule) {
            precedenceStack.remove(precedenceStack.size() - 1);
        }

        positionMap.put(tokenListIndex, result);
        return result;
    }

    private String generateBaseDescription(ATNState state) {
        String stateValue = state.stateNumber == ATNState.INVALID_STATE_NUMBER ? "Invalid"
                : String.valueOf(state.stateNumber);
        String typeName = atnStateTypeMap[state.getStateType()];

        return "[" + stateValue + " " + typeName + "] in " + ruleNames[state.ruleIndex];
    }

    private void printDescription(int indentation, ATNState state, String baseDescription, int tokenIndex) {
        String indent = String.join("", Collections.nCopies(indentation, "  "));
        StringBuilder output = new StringBuilder(indent);

        StringBuilder transitionDescription = new StringBuilder();
        if (debugOutputWithTransitions) {
            for (Transition transition : state.getTransitions()) {
                StringBuilder labels = new StringBuilder();
                IntervalSet label = transition.label();
                List<Integer> symbols = label != null ? label.toList() : Collections.emptyList();

                if (symbols.size() > 2) {
                    labels.append(vocabulary.getDisplayName(symbols.get(0)))
                            .append(" .. ")
                            .append(vocabulary.getDisplayName(symbols.get(symbols.size() - 1)));
                } else {
                    for (int symbol : symbols) {
                        if (labels.length() > 0) {
                            labels.append(", ");
                        }
                        labels.append(vocabulary.getDisplayName(symbol));
                    }
                }

                if (labels.length() == 0) {
                    labels.append("ε");
                }

                String typeName = atnStateTypeMap[transition.target.getStateType()];
                transitionDescription.append("\n").append(indent).append("\t(").append(labels)
                        .append(") [").append(transition.target.stateNumber).append(" ")
                        .append(typeName).append("] in ").append(ruleNames[transition.target.ruleIndex]);
            }
        }

        if (tokenIndex >= tokens.size() - 1) {
            output.append("<<").append(tokenStartIndex + tokenIndex).append(">> ");
        } else {
            output.append("<").append(tokenStartIndex + tokenIndex).append("> ");
        }
        System.out.println(output.toString() + "Current state: " + baseDescription + transitionDescription);
    }

    private void printRuleState(List<RuleWithStartToken> stack) {
        if (stack.isEmpty()) {
            System.out.println("<empty stack>");
            return;
        }

        for (RuleWithStartToken rule : stack) {
            System.out.println(ruleNames[rule.ruleIndex]);
        }
    }

    private static List<Integer> longestCommonPrefix(List<Integer> a, List<Integer> b) {
        int minLength = Math.min(a.size(), b.size());
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < minLength; i++) {
            if (a.get(i).equals(b.get(i))) {
                result.add(a.get(i));
            } else {
                break;
            }
        }

        return result;
    }

    // Supporting classes
    public static class CandidatesCollection {
        public Map<Integer, List<Integer>> tokens = new HashMap<>();
        public Map<Integer, CandidateRule> rules = new HashMap<>();
    }

    public static class CandidateRule {
        public int startTokenIndex;
        public List<Integer> ruleList;

        public CandidateRule(int startTokenIndex, List<Integer> ruleList) {
            this.startTokenIndex = startTokenIndex;
            this.ruleList = ruleList;
        }
    }

    public static class RuleWithStartToken {
        public int startTokenIndex;
        public int ruleIndex;

        public RuleWithStartToken(int startTokenIndex, int ruleIndex) {
            this.startTokenIndex = startTokenIndex;
            this.ruleIndex = ruleIndex;
        }
    }

    private static class FollowSetWithPath {
        public IntervalSet intervals;
        public List<Integer> path = new ArrayList<>();
        public List<Integer> following = new ArrayList<>();
    }

    private static class FollowSetsHolder {
        public List<FollowSetWithPath> sets;
        public IntervalSet combined;
        public boolean isExhaustive;

        public FollowSetsHolder(List<FollowSetWithPath> sets, IntervalSet combined, boolean isExhaustive) {
            this.sets = sets;
            this.combined = combined;
            this.isExhaustive = isExhaustive;
        }
    }

    private static class PipelineEntry {
        public ATNState state;
        public int tokenListIndex;

        public PipelineEntry(ATNState state, int tokenListIndex) {
            this.state = state;
            this.tokenListIndex = tokenListIndex;
        }
    }
}