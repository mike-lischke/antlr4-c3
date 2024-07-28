#include <ExprLexer.h>
#include <ExprParser.h>
#include <gmock/gmock.h>
#include <gtest/gtest.h>

#include <antlr4-c3/CodeCompletionCore.hpp>
#include <utility/AntlrPipeline.hpp>
#include <utility/Collections.hpp>
#include <utility/Testing.hpp>

namespace c3::test {

struct ExprGrammar {
  using Lexer = ExprLexer;
  using Parser = ExprParser;
};

TEST(SimpleExpressionParser, MostSimpleSetup) {
  AntlrPipeline<ExprGrammar> pipeline("var c = a + b()");
  pipeline.parser.expression();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 0);

  c3::CodeCompletionCore completion(&pipeline.parser);

  {
    // 1) At the input start.
    auto candidates = completion.collectCandidates(0);
    EXPECT_THAT(
        Keys(candidates.tokens),
        UnorderedElementsAre(ExprLexer::VAR, ExprLexer::LET, ExprLexer::ID)
    );
    EXPECT_THAT(
        candidates.tokens[ExprLexer::VAR],
        ElementsAre(ExprLexer::ID, ExprLexer::EQUAL)
    );
    EXPECT_THAT(
        candidates.tokens[ExprLexer::LET],
        ElementsAre(ExprLexer::ID, ExprLexer::EQUAL)
    );
    EXPECT_THAT(candidates.tokens[ExprLexer::ID], ElementsAre());
  }
  {
    // 2) On the first whitespace. In real implementations you would do some
    // additional checks where in the whitespace the caret is, as the outcome is
    // different depending on that position.
    auto candidates = completion.collectCandidates(1);
    EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(ExprLexer::ID));
  }
  {
    // 3) On the variable name ('c').
    auto candidates = completion.collectCandidates(2);
    EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(ExprLexer::ID));
  }
  {
    // 4) On the equal sign (ignoring whitespace positions from now on).
    auto candidates = completion.collectCandidates(4);
    EXPECT_THAT(
        Keys(candidates.tokens), UnorderedElementsAre(ExprLexer::EQUAL)
    );
  }
  {
    // 5) On the variable reference 'a'. But since we have not configure the c3
    // engine to return us var refs (or function refs for that matter) we only
    // get an ID here.
    auto candidates = completion.collectCandidates(6);  // NOLINT: magic
    EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(ExprLexer::ID));
  }
  {
    // 6) On the '+' operator. Usually you would not show operators as
    // candidates, but we have not set up the c3 engine yet to not return them.
    auto candidates = completion.collectCandidates(8);  // NOLINT: magic
    EXPECT_THAT(
        Keys(candidates.tokens),
        UnorderedElementsAre(
            ExprLexer::PLUS, ExprLexer::MINUS, ExprLexer::MULTIPLY,
            ExprLexer::DIVIDE, ExprLexer::OPEN_PAR
        )
    );
  }
}

TEST(SimpleExpressionParser, TypicalSetup) {
  AntlrPipeline<ExprGrammar> pipeline("var c = a + b()");
  pipeline.parser.expression();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 0);

  c3::CodeCompletionCore completion(&pipeline.parser);
  completion.ignoredTokens = {
      ExprLexer::ID,       ExprLexer::PLUS,   ExprLexer::MINUS,
      ExprLexer::MULTIPLY, ExprLexer::DIVIDE, ExprLexer::EQUAL,
  };
  completion.preferredRules = {
      ExprParser::RuleFunctionRef,
      ExprParser::RuleVariableRef,
  };

  {
    // 1) At the input start.
    auto candidates = completion.collectCandidates(0);
    EXPECT_THAT(
        Keys(candidates.tokens),
        UnorderedElementsAre(ExprLexer::VAR, ExprLexer::LET)
    );

    // NOTE: Behaviour differs from TypeScript version
    EXPECT_THAT(candidates.tokens[ExprLexer::VAR], UnorderedElementsAre());
    EXPECT_THAT(candidates.tokens[ExprLexer::LET], UnorderedElementsAre());
  }
  {
    // 2) On the variable name ('c').
    auto candidates = completion.collectCandidates(2);
    EXPECT_EQ(candidates.tokens.size(), 0);
  }
  {
    // 4) On the equal sign.
    auto candidates = completion.collectCandidates(4);
    EXPECT_EQ(candidates.tokens.size(), 0);
  }
  {
    // 5) On the variable reference 'a'.
    auto candidates = completion.collectCandidates(6);  // NOLINT: magic
    EXPECT_EQ(candidates.tokens.size(), 0);
    // Here we get 2 rule indexes, derived from 2 different IDs possible at this
    // caret position. These are what we told the engine above to be preferred
    // rules for us.
    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(
            ExprParser::RuleFunctionRef, ExprParser::RuleVariableRef
        )
    );
    EXPECT_EQ(candidates.rules[ExprParser::RuleFunctionRef].startTokenIndex, 6);
    EXPECT_EQ(candidates.rules[ExprParser::RuleVariableRef].startTokenIndex, 6);
  }
  {
    // 6) On the whitespace just after the variable reference 'a' (but it could
    // still be a function reference!).
    auto candidates = completion.collectCandidates(7);  // NOLINT: magic
    EXPECT_EQ(candidates.tokens.size(), 0);
    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(ExprParser::RuleFunctionRef)
    );
    EXPECT_EQ(candidates.rules[ExprParser::RuleFunctionRef].startTokenIndex, 6);
  }
}

TEST(SimpleExpressionParser, RecursivePreferredRule) {
  AntlrPipeline<ExprGrammar> pipeline("var c = a + b");
  pipeline.parser.expression();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 0);

  c3::CodeCompletionCore completion(&pipeline.parser);
  completion.preferredRules = {ExprParser::RuleSimpleExpression};

  {
    // 1) On the variable reference 'a'.
    auto candidates = completion.collectCandidates(6);  // NOLINT: magic
    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(ExprParser::RuleSimpleExpression)
    );
    // The start token of the simpleExpression rule begins at token 'a'.
    EXPECT_EQ(
        candidates.rules[ExprParser::RuleSimpleExpression].startTokenIndex, 6
    );
  }
  {
    // 2) On the variable reference 'b'.
    completion.translateRulesTopDown = false;
    auto candidates = completion.collectCandidates(10);  // NOLINT: magic
    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(ExprParser::RuleSimpleExpression)
    );
    // When translateRulesTopDown is false, startTokenIndex should match the
    // start token for the lower index (less specific) rule in the expression,
    // which is 'a'.
    EXPECT_EQ(
        candidates.rules[ExprParser::RuleSimpleExpression].startTokenIndex, 6
    );
  }
  {
    // 3) On the variable reference 'b' topDown preferred rules.
    completion.translateRulesTopDown = true;
    auto candidates = completion.collectCandidates(10);  // NOLINT: magic
    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(ExprParser::RuleSimpleExpression)
    );
    // When translateRulesTopDown is true, startTokenIndex should match the
    // start token for the higher index (more specific) rule in the expression,
    // which is 'b'.
    EXPECT_EQ(
        candidates.rules[ExprParser::RuleSimpleExpression].startTokenIndex, 10
    );
  }
}

TEST(SimpleExpressionParser, CandidateRulesWithDifferentStartTokens) {
  AntlrPipeline<ExprGrammar> pipeline("var c = a + b");
  pipeline.parser.expression();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 0);

  c3::CodeCompletionCore completion(&pipeline.parser);
  completion.preferredRules = {
      ExprParser::RuleAssignment,
      ExprParser::RuleVariableRef,
  };
  completion.translateRulesTopDown = true;

  {
    // 1) On the token 'var'.
    auto candidates = completion.collectCandidates(0);
    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(
            ExprParser::RuleAssignment, ExprParser::RuleVariableRef
        )
    );
    // The start token of the assignment and variableRef rules begin at token
    // 'var'.
    EXPECT_EQ(candidates.rules[ExprParser::RuleAssignment].startTokenIndex, 0);
    EXPECT_EQ(candidates.rules[ExprParser::RuleVariableRef].startTokenIndex, 0);
  }
  {
    // 2) On the variable reference 'a'.
    auto candidates = completion.collectCandidates(6);  // NOLINT: magic
    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(
            ExprParser::RuleAssignment, ExprParser::RuleVariableRef
        )
    );
    // The start token of the assignment rule begins at token 'var'.
    EXPECT_EQ(candidates.rules[ExprParser::RuleAssignment].startTokenIndex, 0);
    // The start token of the variableRef rule begins at token 'a'.
    EXPECT_EQ(candidates.rules[ExprParser::RuleVariableRef].startTokenIndex, 6);
  }
}

}  // namespace c3::test
