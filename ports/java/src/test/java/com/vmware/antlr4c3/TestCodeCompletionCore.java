/*
 * Copyright © 2017 VMware, Inc. All Rights Reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * See LICENSE file for more info.
 */
package com.vmware.antlr4c3;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import org.antlr.v4.runtime.BaseErrorListener;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.RecognitionException;
import org.antlr.v4.runtime.Recognizer;
import org.antlr.v4.runtime.atn.PredictionMode;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import static org.junit.Assert.*;

/**
 * Unit tests for CodeCompletionCore
 */
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class TestCodeCompletionCore {

    private static final Logger logger = Logger.getLogger(TestCodeCompletionCore.class.getName());

    public static class CountingErrorListener extends BaseErrorListener {

        public int errorCount = 0;

        @Override
        public void syntaxError(Recognizer<?, ?> recognizer, Object offendingSymbol, int line, int charPositionInLine, String msg, RecognitionException e) {
            super.syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
            errorCount++;

        }
    }

    @Test
    public void test1_simpleExpressionTest() throws Exception {

        System.out.println();
        System.out.println("simpleExpressionTest");

        String expression = "var c = a + b()";
        ExprLexer lexer = new ExprLexer(CharStreams.fromString(expression));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ExprParser parser = new ExprParser(tokens);

        lexer.removeErrorListeners();
        parser.removeErrorListeners();
        CountingErrorListener errorListener = new CountingErrorListener();
        parser.addErrorListener(errorListener);

        // Specify our entry point
        ExprParser.ExpressionContext tree = parser.expression();

        assertEquals(0, errorListener.errorCount);

        CodeCompletionCore core = new CodeCompletionCore(parser, null, null);

        // 1) At the input start.

        CodeCompletionCore.CandidatesCollection candidates = core.collectCandidates(0, null);

        assertEquals(3, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(ExprLexer.VAR));
        assertTrue(candidates.tokens.containsKey(ExprLexer.LET));
        assertTrue(candidates.tokens.containsKey(ExprLexer.ID));

        assertEquals(Arrays.asList(new Integer[]{ExprLexer.ID, ExprLexer.EQUAL}), candidates.tokens.get(ExprLexer.VAR));
        assertEquals(Arrays.asList(new Integer[]{ExprLexer.ID, ExprLexer.EQUAL}), candidates.tokens.get(ExprLexer.LET));
        assertEquals(Arrays.asList(new Integer[]{}), candidates.tokens.get(ExprLexer.ID));

        // 2) On the first whitespace. In real implementations you would do some additional checks where in the whitespace
        //    the caret is, as the outcome is different depending on that position.
        candidates = core.collectCandidates(1, null);
        assertEquals(1, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(ExprLexer.ID));

        // 3) On the variable name ('c').
        candidates = core.collectCandidates(2, null);
        assertEquals(1, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(ExprLexer.ID));

        // 4) On the equal sign (ignoring whitespace positions from now on).
        candidates = core.collectCandidates(4, null);
        assertEquals(1, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(ExprLexer.EQUAL));

        // 5) On the variable reference 'a'. But since we have not configure the c3 engine to return us var refs
        //    (or function refs for that matter) we only get an ID here.
        candidates = core.collectCandidates(6, null);
        assertEquals(1, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(ExprLexer.ID));

        // 6) On the '+' operator. Usually you would not show operators as candidates, but we have not set up the c3 engine
        //    yet to not return them.
        candidates = core.collectCandidates(8, null);
        assertEquals(5, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(ExprLexer.PLUS));
        assertTrue(candidates.tokens.containsKey(ExprLexer.MINUS));
        assertTrue(candidates.tokens.containsKey(ExprLexer.MULTIPLY));
        assertTrue(candidates.tokens.containsKey(ExprLexer.DIVIDE));
        assertTrue(candidates.tokens.containsKey(ExprLexer.OPEN_PAR));
    }

    @Test
    public void test2_typicalExpressionTest() throws Exception {

        System.out.println();
        System.out.println("typicalExpressionTest");

        String expression = "var c = a + b";
        ExprLexer lexer = new ExprLexer(CharStreams.fromString(expression));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ExprParser parser = new ExprParser(tokens);
        parser.getInterpreter().setPredictionMode(PredictionMode.LL_EXACT_AMBIG_DETECTION);

        lexer.removeErrorListeners();
        parser.removeErrorListeners();
        CountingErrorListener errorListener = new CountingErrorListener();
        parser.addErrorListener(errorListener);

        // Specify our entry point
        ExprParser.ExpressionContext tree = parser.expression();

        assertEquals(0, errorListener.errorCount);

        // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
        Set<Integer> preferredRules = new HashSet<>(Arrays.asList(ExprParser.RULE_functionRef, ExprParser.RULE_variableRef));

        // Ignore operators and the generic ID token.
        Set<Integer> ignoredTokens = new HashSet<>(Arrays.asList(ExprLexer.ID,
                ExprLexer.PLUS, ExprLexer.MINUS, ExprLexer.MULTIPLY, ExprLexer.DIVIDE, ExprLexer.EQUAL));

        CodeCompletionCore core = new CodeCompletionCore(parser, preferredRules, ignoredTokens);

        // 1) At the input start.
        CodeCompletionCore.CandidatesCollection candidates = core.collectCandidates(0, null);

        assertEquals(2, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(ExprLexer.VAR));
        assertTrue(candidates.tokens.containsKey(ExprLexer.LET));

        assertEquals(Arrays.asList(new Integer[]{ExprLexer.ID, ExprLexer.EQUAL}), candidates.tokens.get(ExprLexer.VAR));
        assertEquals(Arrays.asList(new Integer[]{ExprLexer.ID, ExprLexer.EQUAL}), candidates.tokens.get(ExprLexer.LET));

        // 2) On the variable name ('c').
        candidates = core.collectCandidates(2, null);
        assertEquals(0, candidates.tokens.size());

        // 4) On the equal sign (ignoring whitespace positions from now on).
        candidates = core.collectCandidates(4, null);
        assertEquals(0, candidates.tokens.size());

        // 5) On the variable reference 'a'.
        candidates = core.collectCandidates(6, null);
        assertEquals(0, candidates.tokens.size());
        assertEquals(2, candidates.rules.size());

        // Here we get 2 rule indexes, derived from 2 different IDs possible at this caret position.
        // These are what we told the engine above to be preferred rules for us.
        int found = 0;
        for (Map.Entry<Integer, List<Integer>> candidate : candidates.rules.entrySet()) {
            switch (candidate.getKey()) {
                case ExprParser.RULE_functionRef: {
                    found++;
                    break;
                }

                case ExprParser.RULE_variableRef: {
                    found++;
                    break;
                }

                default:
                    assert (false);
            }
        }
        assertEquals(2, found);

        // 6) On the whitespace after the 'a'
        candidates = core.collectCandidates(7, null);
        assertEquals(0, candidates.tokens.size());
        assertEquals(1, candidates.rules.size());

        // Here we get 2 rule indexes
        found = 0;
        for (Map.Entry<Integer, List<Integer>> candidate : candidates.rules.entrySet()) {
            switch (candidate.getKey()) {
                case ExprParser.RULE_functionRef: {
                    found++;
                    break;
                }

                case ExprParser.RULE_variableRef: {
                    found++;
                    break;
                }

                default:
                    assert (false);
            }
        }
        assertEquals(1, found);
    }

}
