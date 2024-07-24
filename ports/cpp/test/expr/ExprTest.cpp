#include <antlr4-c3/CodeCompletionCore.hpp>
#include <antlr4-runtime.h>

#include <gmock/gmock.h>
#include <gtest/gtest.h>

#include <ExprLexer.h>
#include <ExprParser.h>

#include <cstddef>
#include <string_view>

class CountingErrorListener final : public antlr4::BaseErrorListener {
public:
  void syntaxError(antlr4::Recognizer *recognizer,
                   antlr4::Token *offendingSymbol, std::size_t line,
                   std::size_t charPositionInLine, const std::string &msg,
                   std::exception_ptr e) override {}

  std::size_t GetErrorCount() const { return errorCount; }

private:
  std::size_t errorCount = 0;
};

struct AntlrPipeline {
  AntlrPipeline(std::string_view text)
      : chars(text), lexer(&chars), tokens(&lexer), parser(&tokens) {}

  antlr4::ANTLRInputStream chars;
  ExprLexer lexer;
  antlr4::CommonTokenStream tokens;
  ExprParser parser;
};

template <class K, class V> std::vector<K> Keys(const std::map<K, V> &map) {
  std::vector<K> keys;
  for (const auto &[key, value] : map) {
    keys.emplace_back(key);
  }
  return keys;
}

using testing::ElementsAre;
using testing::UnorderedElementsAre;

TEST(SimpleExpressionParser, MostSimpleSetup) {
  CountingErrorListener listener;

  AntlrPipeline pipeline("var c = a + b()");
  pipeline.parser.addErrorListener(&listener);

  pipeline.parser.expression();
  EXPECT_EQ(listener.GetErrorCount(), 0);

  c3::CodeCompletionCore completion(&pipeline.parser);
  const auto collectCandidatesAt = [&](std::size_t tokenIndex) {
    return completion.collectCandidates(tokenIndex,
                                        /*context=*/nullptr, /*size_t=*/0,
                                        /*cancel=*/nullptr);
  };

  {
    // 1) At the input start.
    auto candidates = collectCandidatesAt(0);
    EXPECT_THAT(
        Keys(candidates.tokens),
        UnorderedElementsAre(ExprLexer::VAR, ExprLexer::LET, ExprLexer::ID));
    EXPECT_THAT(candidates.tokens[ExprLexer::VAR],
                ElementsAre(ExprLexer::ID, ExprLexer::EQUAL));
    EXPECT_THAT(candidates.tokens[ExprLexer::LET],
                ElementsAre(ExprLexer::ID, ExprLexer::EQUAL));
    EXPECT_THAT(candidates.tokens[ExprLexer::ID], ElementsAre());
  }
  {
    // 2) On the first whitespace. In real implementations you would do some
    // additional checks where in the whitespace the caret is, as the outcome is
    // different depending on that position.
    auto candidates = collectCandidatesAt(1);
    EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(ExprLexer::ID));
  }
  {
    // 3) On the variable name ('c').
    auto candidates = collectCandidatesAt(2);
    EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(ExprLexer::ID));
  }
  {
    // 4) On the equal sign (ignoring whitespace positions from now on).
    auto candidates = collectCandidatesAt(4);
    EXPECT_THAT(Keys(candidates.tokens),
                UnorderedElementsAre(ExprLexer::EQUAL));
  }
  {
    // 5) On the variable reference 'a'. But since we have not configure the c3
    // engine to return us var refs (or function refs for that matter) we only
    // get an ID here.
    auto candidates = collectCandidatesAt(6);
    EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(ExprLexer::ID));
  }
  {
    // 6) On the '+' operator. Usually you would not show operators as
    // candidates, but we have not set up the c3 engine yet to not return them.
    auto candidates = collectCandidatesAt(8);
    EXPECT_THAT(Keys(candidates.tokens),
                UnorderedElementsAre(ExprLexer::PLUS, ExprLexer::MINUS,
                                     ExprLexer::MULTIPLY, ExprLexer::DIVIDE,
                                     ExprLexer::OPEN_PAR));
  }
}

TEST(SimpleExpressionParser, TypicalSetup) {
  CountingErrorListener listener;

  AntlrPipeline pipeline("var c = a + b()");
  pipeline.parser.addErrorListener(&listener);

  pipeline.parser.expression();
  EXPECT_EQ(listener.GetErrorCount(), 0);

  c3::CodeCompletionCore completion(&pipeline.parser);
  completion.ignoredTokens = {
      ExprLexer::ID,       ExprLexer::PLUS,   ExprLexer::MINUS,
      ExprLexer::MULTIPLY, ExprLexer::DIVIDE, ExprLexer::EQUAL,
  };
  completion.preferredRules = {
      ExprParser::RuleFunctionRef,
      ExprParser::RuleVariableRef,
  };

  const auto collectCandidatesAt = [&](std::size_t tokenIndex) {
    return completion.collectCandidates(tokenIndex,
                                        /*context=*/nullptr, /*size_t=*/0,
                                        /*cancel=*/nullptr);
  };

  {
    // 1) At the input start.
    auto candidates = collectCandidatesAt(0);
    EXPECT_THAT(Keys(candidates.tokens),
                UnorderedElementsAre(ExprLexer::VAR, ExprLexer::LET));

    // NOTE: Behaviour differs from TypeScript version
    EXPECT_THAT(candidates.tokens[ExprLexer::VAR], UnorderedElementsAre());
    EXPECT_THAT(candidates.tokens[ExprLexer::LET], UnorderedElementsAre());
  }
  {
    // 2) On the variable name ('c').
    auto candidates = collectCandidatesAt(2);
    EXPECT_EQ(candidates.tokens.size(), 0);
  }
  {
    // 4) On the equal sign.
    auto candidates = collectCandidatesAt(4);
    EXPECT_EQ(candidates.tokens.size(), 0);
  }
  {
    // 5) On the variable reference 'a'.
    auto candidates = collectCandidatesAt(6);
    EXPECT_EQ(candidates.tokens.size(), 0);
    // Here we get 2 rule indexes, derived from 2 different IDs possible at this
    // caret position. These are what we told the engine above to be preferred
    // rules for us.
    EXPECT_THAT(Keys(candidates.rules),
                UnorderedElementsAre(ExprParser::RuleFunctionRef,
                                     ExprParser::RuleVariableRef));
    EXPECT_EQ(candidates.rules[ExprParser::RuleFunctionRef].startTokenIndex, 6);
    EXPECT_EQ(candidates.rules[ExprParser::RuleVariableRef].startTokenIndex, 6);
  }
  {
    // 6) On the whitespace just after the variable reference 'a' (but it could
    // still be a function reference!).
    auto candidates = collectCandidatesAt(7);
    EXPECT_EQ(candidates.tokens.size(), 0);
    EXPECT_THAT(Keys(candidates.rules),
                UnorderedElementsAre(ExprParser::RuleFunctionRef));
    EXPECT_EQ(candidates.rules[ExprParser::RuleFunctionRef].startTokenIndex, 6);
  }
}

TEST(SimpleExpressionParser, RecursivePreferredRule) {
  AntlrPipeline pipeline("var c = a + b");

  CountingErrorListener listener;
  pipeline.parser.addErrorListener(&listener);
  pipeline.parser.expression();
  EXPECT_EQ(listener.GetErrorCount(), 0);

  c3::CodeCompletionCore completion(&pipeline.parser);
  completion.preferredRules = {ExprParser::RuleSimpleExpression};

  const auto collectCandidatesAt = [&](std::size_t tokenIndex) {
    return completion.collectCandidates(tokenIndex,
                                        /*context=*/nullptr, /*size_t=*/0,
                                        /*cancel=*/nullptr);
  };

  {
    // 1) On the variable reference 'a'.
    auto candidates = collectCandidatesAt(6);
    EXPECT_THAT(Keys(candidates.rules),
                UnorderedElementsAre(ExprParser::RuleSimpleExpression));
    // The start token of the simpleExpression rule begins at token 'a'.
    EXPECT_EQ(
        candidates.rules[ExprParser::RuleSimpleExpression].startTokenIndex, 6);
  }
  {
    // 2) On the variable reference 'b'.
    completion.translateRulesTopDown = false;
    auto candidates = collectCandidatesAt(10);
    EXPECT_THAT(Keys(candidates.rules),
                UnorderedElementsAre(ExprParser::RuleSimpleExpression));
    // When translateRulesTopDown is false, startTokenIndex should match the
    // start token for the lower index (less specific) rule in the expression,
    // which is 'a'.
    EXPECT_EQ(
        candidates.rules[ExprParser::RuleSimpleExpression].startTokenIndex, 6);
  }
  {
    // 3) On the variable reference 'b' topDown preferred rules.
    completion.translateRulesTopDown = true;
    auto candidates = collectCandidatesAt(10);
    EXPECT_THAT(Keys(candidates.rules),
                UnorderedElementsAre(ExprParser::RuleSimpleExpression));
    // When translateRulesTopDown is true, startTokenIndex should match the
    // start token for the higher index (more specific) rule in the expression,
    // which is 'b'.
    EXPECT_EQ(
        candidates.rules[ExprParser::RuleSimpleExpression].startTokenIndex, 10);
  }
}

TEST(SimpleExpressionParser, CandidateRulesWithDifferentStartTokens) {
  AntlrPipeline pipeline("var c = a + b");

  CountingErrorListener listener;
  pipeline.parser.addErrorListener(&listener);
  pipeline.parser.expression();
  EXPECT_EQ(listener.GetErrorCount(), 0);

  c3::CodeCompletionCore completion(&pipeline.parser);
  completion.preferredRules = {
      ExprParser::RuleAssignment,
      ExprParser::RuleVariableRef,
  };
  completion.translateRulesTopDown = true;

  const auto collectCandidatesAt = [&](std::size_t tokenIndex) {
    return completion.collectCandidates(tokenIndex,
                                        /*context=*/nullptr, /*size_t=*/0,
                                        /*cancel=*/nullptr);
  };

  {
    // 1) On the token 'var'.
    auto candidates = collectCandidatesAt(0);
    EXPECT_THAT(Keys(candidates.rules),
                UnorderedElementsAre(ExprParser::RuleAssignment,
                                     ExprParser::RuleVariableRef));
    // The start token of the assignment and variableRef rules begin at token
    // 'var'.
    EXPECT_EQ(candidates.rules[ExprParser::RuleAssignment].startTokenIndex, 0);
    EXPECT_EQ(candidates.rules[ExprParser::RuleVariableRef].startTokenIndex, 0);
  }
  {
    // 2) On the variable reference 'a'.
    auto candidates = collectCandidatesAt(6);
    EXPECT_THAT(Keys(candidates.rules),
                UnorderedElementsAre(ExprParser::RuleAssignment,
                                     ExprParser::RuleVariableRef));
    // The start token of the assignment rule begins at token 'var'.
    EXPECT_EQ(candidates.rules[ExprParser::RuleAssignment].startTokenIndex, 0);
    // The start token of the variableRef rule begins at token 'a'.
    EXPECT_EQ(candidates.rules[ExprParser::RuleVariableRef].startTokenIndex, 6);
  }
}