using System.Collections.Generic;
using Antlr4.Runtime;
using Antlr4.Runtime.Atn;
using Antlr4CodeCompletion.Core.CodeCompletion;
using Antlr4CodeCompletion.CoreUnitTest.Grammar;
using Antlr4CodeCompletion.CoreUnitTest.Utils;
using NFluent;
using Xunit;

namespace Antlr4CodeCompletion.CoreUnitTest.CodeCompletion
{
    /// <summary>
    /// </summary>
    /// <remarks>
    /// Port of antlr-c3 java unit test library to c#
    /// The c3 engine is able to provide code completion candidates useful for
    /// editors with ANTLR generated parsers, independent of the actual
    /// language/grammar used for the generation.
    /// https://github.com/mike-lischke/antlr4-c3
    /// </remarks>
    public class CodeCompletionCoreUnitTests
    {
        [Fact]
        public void Completion_Grammar_SimpleExpression()
        {
            // arrange
            var input = "var c = a + b()";
            var inputStream = new AntlrInputStream(input);
            var lexer = new ExprLexer(inputStream);
            var tokenStream = new CommonTokenStream(lexer);
            var parser = new ExprParser(tokenStream);

            lexer.RemoveErrorListeners();
            parser.RemoveErrorListeners();

            var errorListener = new CountingErrorListener();
            parser.AddErrorListener(errorListener);

            // act
            // assert

            // Specify our entry point
            var tree = parser.expression();

            Check.That(errorListener.ErrorCount).IsEqualTo(0);

            var core = new CodeCompletionCore(parser, null, null);

            // 1) At the input start.
            var candidates = core.CollectCandidates(0, null);

            Check.That(candidates.Tokens).HasSize(3);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.VAR);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.LET);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.ID);

            Check.That(candidates.Tokens[ExprLexer.VAR]).IsEqualTo(new[] { ExprLexer.ID, ExprLexer.EQUAL });
            Check.That(candidates.Tokens[ExprLexer.LET]).IsEqualTo(new[] { ExprLexer.ID, ExprLexer.EQUAL });
            Check.That(candidates.Tokens[ExprLexer.ID]).HasSize(0);

            // 2) On the first whitespace. In real implementations you would do some additional checks where in the whitespace
            //    the caret is, as the outcome is different depending on that position.
            candidates = core.CollectCandidates(1, null);
            Check.That(candidates.Tokens).HasSize(1);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.ID);

            // 3) On the variable name ('c').
            candidates = core.CollectCandidates(2, null);
            Check.That(candidates.Tokens).HasSize(1);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.ID);

            // 4) On the equal sign (ignoring whitespace positions from now on).
            candidates = core.CollectCandidates(4, null);
            Check.That(candidates.Tokens).HasSize(1);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.EQUAL);

            // 5) On the variable reference 'a'. But since we have not configure the c3 engine to return us var refs
            //    (or function refs for that matter) we only get an ID here.
            candidates = core.CollectCandidates(6, null);
            Check.That(candidates.Tokens).HasSize(1);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.ID);

            // 6) On the '+' operator. Usually you would not show operators as candidates, but we have not set up the c3 engine
            //    yet to not return them.
            candidates = core.CollectCandidates(8, null);
            Check.That(candidates.Tokens).HasSize(5);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.PLUS);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.MINUS);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.MULTIPLY);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.DIVIDE);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.OPEN_PAR);
        }

        [Fact]
        public void Completion_Grammar_TypicalExpression()
        {
            // arrange
            var expression = "var c = a + b";
            var inputStream = new AntlrInputStream(expression);
            var lexer = new ExprLexer(inputStream);
            var tokenStream = new CommonTokenStream(lexer);
            var parser = new ExprParser(tokenStream);
            parser.Interpreter.PredictionMode = PredictionMode.LlExactAmbigDetection;

            lexer.RemoveErrorListeners();
            parser.RemoveErrorListeners();

            var errorListener = new CountingErrorListener();
            parser.AddErrorListener(errorListener);

            // act
            // assert

            // Specify our entry point
            var tree = parser.expression();

            Check.That(errorListener.ErrorCount).IsEqualTo(0);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            var preferredRules = new HashSet<int>() { ExprParser.RULE_functionRef, ExprParser.RULE_variableRef };

            // Ignore operators and the generic ID token.
            var ignoredTokens = new HashSet<int>() { ExprLexer.PLUS, ExprLexer.MINUS,
                 ExprLexer.MULTIPLY, ExprLexer.DIVIDE };

            var core = new CodeCompletionCore(parser, preferredRules, ignoredTokens);

            // 1) At the input start.
            var candidates = core.CollectCandidates(0, null);

            Check.That(candidates.Tokens).HasSize(2);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.VAR);
            Check.That(candidates.Tokens).ContainsKey(ExprLexer.LET);

            Check.That(candidates.Tokens
                .TryGetValue(ExprLexer.VAR, out var varCandidates))
                .IsTrue();
            Check.That(candidates.Tokens
                .TryGetValue(ExprLexer.LET, out var letCandidates))
                .IsTrue();

            Check.That(varCandidates).HasSize(2);
            Check.That(letCandidates).HasSize(2);

            Check.That(varCandidates).IsEqualTo(new[] { ExprLexer.ID, ExprLexer.EQUAL });
            Check.That(letCandidates).IsEqualTo(new[] { ExprLexer.ID, ExprLexer.EQUAL });

            // 2) On the variable name ('c').
            ignoredTokens = new HashSet<int>() { ExprLexer.ID, ExprLexer.PLUS, ExprLexer.MINUS,
                 ExprLexer.MULTIPLY, ExprLexer.DIVIDE, ExprLexer.EQUAL };
            core = new CodeCompletionCore(parser, preferredRules, ignoredTokens);
            candidates = core.CollectCandidates(2, null);
            Check.That(candidates.Tokens).HasSize(0);

            // 4) On the equal sign (ignoring whitespace positions from now on).
            candidates = core.CollectCandidates(4, null);
            Check.That(candidates.Tokens).HasSize(0);

            // 5) On the variable reference 'a'.
            candidates = core.CollectCandidates(6, null);
            Check.That(candidates.Tokens).HasSize(0);
            Check.That(candidates.Rules).HasSize(2);

            // Here we get 2 rule indexes, derived from 2 different IDs possible at this caret position.
            // These are what we told the engine above to be preferred rules for us.
            var found = 0;
            foreach (var candidate in candidates.Rules)
            {
                switch (candidate.Key)
                {
                    case ExprParser.RULE_functionRef:
                    {
                        found++;
                        break;
                    }

                    case ExprParser.RULE_variableRef:
                    {
                        found++;
                        break;
                    }
                }
            }

            Check.That(found).Equals(2);

            // 6) On the whitespace after the 'a'
            candidates = core.CollectCandidates(7, null);
            Check.That(candidates.Tokens).HasSize(0);
            Check.That(candidates.Rules).HasSize(1);

            // Here we get 2 rule indexes
            found = 0;
            foreach (var candidate in candidates.Rules)
            {
                switch (candidate.Key)
                {
                    case ExprParser.RULE_functionRef:
                    {
                        found++;
                        break;
                    }

                    case ExprParser.RULE_variableRef:
                    {
                        found++;
                        break;
                    }
                }
            }

            Check.That(found).Equals(1);
        }
    }
}
