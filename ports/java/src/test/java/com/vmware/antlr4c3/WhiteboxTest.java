package com.vmware.antlr4c3;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Set;

import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;
import org.junit.Test;

public class WhiteboxTest {
    @Test
    public void caretAtTransitionToRuleWithNonExhaustiveFollowSetTest() {
        CharStream inputStream = CharStreams.fromString("LOREM ");

        WhiteboxLexer lexer = new WhiteboxLexer(inputStream);
        CommonTokenStream tokenStream = new CommonTokenStream(lexer);

        WhiteboxParser parser = new WhiteboxParser(tokenStream);
        CountingErrorListener errorListener = new CountingErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        ParserRuleContext ctx = parser.test1();

        assertEquals(1, errorListener.errorCount);

        CodeCompletionCore core = new CodeCompletionCore(parser, null, null);
        CodeCompletionCore.CandidatesCollection candidates = core.collectCandidates(1, ctx);

        assertEquals(5, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.IPSUM));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.DOLOR));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.SIT));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.AMET));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.CONSECTETUR));
    }

    @Test
    public void caretAtTransitionToRuleWithEmptyFollowSetTest() {
        CharStream inputStream = CharStreams.fromString("LOREM ");
        WhiteboxLexer lexer = new WhiteboxLexer(inputStream);
        CommonTokenStream tokenStream = new CommonTokenStream(lexer);

        WhiteboxParser parser = new WhiteboxParser(tokenStream);
        CountingErrorListener errorListener = new CountingErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        ParserRuleContext ctx = parser.test2();
        assertEquals(1, errorListener.errorCount);

        CodeCompletionCore core = new CodeCompletionCore(parser, null, null);
        CodeCompletionCore.CandidatesCollection candidates = core.collectCandidates(1, ctx);

        assertEquals(5, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.IPSUM));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.DOLOR));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.SIT));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.AMET));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.CONSECTETUR));
    }

    @Test
    public void caretAtOptionalTokenTest() {
        CharStream inputStream = CharStreams.fromString("LOREM ");
        WhiteboxLexer lexer = new WhiteboxLexer(inputStream);
        CommonTokenStream tokenStream = new CommonTokenStream(lexer);

        WhiteboxParser parser = new WhiteboxParser(tokenStream);
        CountingErrorListener errorListener = new CountingErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        ParserRuleContext ctx = parser.test3();
        assertEquals(1, errorListener.errorCount);

        CodeCompletionCore core = new CodeCompletionCore(parser, null, null);
        CodeCompletionCore.CandidatesCollection candidates = core.collectCandidates(1, ctx);

        assertEquals(4, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.IPSUM));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.DOLOR));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.SIT));
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.AMET));
    }

    @Test
    public void caretAtOneOfMultiplePossibleStatesTest() {
        for (int index : new int[] { 4, 5, 6, 7 }) {
            CharStream inputStream = CharStreams.fromString("LOREM IPSUM ");
            WhiteboxLexer lexer = new WhiteboxLexer(inputStream);
            CommonTokenStream tokenStream = new CommonTokenStream(lexer);

            WhiteboxParser parser = new WhiteboxParser(tokenStream);
            ParserRuleContext ctx;
            switch (index) {
                case 4:
                    ctx = parser.test4();
                    break;
                case 5:
                    ctx = parser.test5();
                    break;
                case 6:
                    ctx = parser.test6();
                    break;
                case 7:
                    ctx = parser.test7();
                    break;
                default:
                    throw new IllegalStateException();
            }

            CodeCompletionCore core = new CodeCompletionCore(parser, null, null);
            CodeCompletionCore.CandidatesCollection candidates = core.collectCandidates(2, ctx);

            assertEquals(Set.of(WhiteboxLexer.DOLOR), candidates.tokens.keySet());
            assertTrue(candidates.tokens.get(WhiteboxLexer.DOLOR).isEmpty());
        }
    }

    @Test
    public void caretAtOneOfMultiplePossibleStatesWithCommonFollowListTest() {
        CharStream inputStream = CharStreams.fromString("LOREM IPSUM ");
        WhiteboxLexer lexer = new WhiteboxLexer(inputStream);
        CommonTokenStream tokenStream = new CommonTokenStream(lexer);

        WhiteboxParser parser = new WhiteboxParser(tokenStream);
        ParserRuleContext ctx = parser.test8();

        CodeCompletionCore core = new CodeCompletionCore(parser, null, null);
        CodeCompletionCore.CandidatesCollection candidates = core.collectCandidates(2, ctx);

        assertEquals(1, candidates.tokens.size());
        assertTrue(candidates.tokens.containsKey(WhiteboxLexer.DOLOR));
        assertEquals(List.of(WhiteboxLexer.SIT), candidates.tokens.get(WhiteboxLexer.DOLOR));
    }
}
