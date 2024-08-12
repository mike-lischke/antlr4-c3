#include <ParserRuleContext.h>
#include <WhiteboxLexer.h>
#include <WhiteboxParser.h>
#include <gmock/gmock.h>
#include <gtest/gtest.h>

#include <antlr4-c3/CodeCompletionCore.hpp>
#include <cstdlib>
#include <utility/AntlrPipeline.hpp>
#include <utility/Collections.hpp>
#include <utility/Testing.hpp>

namespace c3::test {

struct WhiteboxGrammar {
  using Lexer = WhiteboxLexer;
  using Parser = WhiteboxParser;
};

/// (optional tokens)
TEST(WhiteboxGrammarTests, CaretAtTransitionToRuleWithNonExhaustiveFollowSet) {
  AntlrPipeline<WhiteboxGrammar> pipeline("LOREM ");
  auto* ctx = pipeline.parser.test1();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 1);

  c3::CodeCompletionCore completion(&pipeline.parser);
  auto candidates = completion.collectCandidates(1, {ctx});

  EXPECT_THAT(
      Keys(candidates.tokens),
      UnorderedElementsAre(
          WhiteboxLexer::IPSUM,
          WhiteboxLexer::DOLOR,
          WhiteboxLexer::SIT,
          WhiteboxLexer::AMET,
          WhiteboxLexer::CONSECTETUR
      )
  );
}

/// (epsilon-only transition to rule end)
TEST(WhiteboxGrammarTests, CaretAtTransitionToRuleWithEmptyFollowSet) {
  AntlrPipeline<WhiteboxGrammar> pipeline("LOREM ");
  auto* ctx = pipeline.parser.test2();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 1);

  c3::CodeCompletionCore completion(&pipeline.parser);
  auto candidates = completion.collectCandidates(1, {ctx});

  EXPECT_THAT(
      Keys(candidates.tokens),
      UnorderedElementsAre(
          WhiteboxLexer::IPSUM,
          WhiteboxLexer::DOLOR,
          WhiteboxLexer::SIT,
          WhiteboxLexer::AMET,
          WhiteboxLexer::CONSECTETUR
      )
  );
}

TEST(WhiteboxGrammarTests, CaretAtOneOfMultiplePossibleStates) {
  for (const auto index : {4, 5, 6, 7}) {
    AntlrPipeline<WhiteboxGrammar> pipeline("LOREM IPSUM ");

    auto* ctx = [&]() -> antlr4::ParserRuleContext* {
      switch (index) {
        case 4:
          return pipeline.parser.test4();
        case 5:  // NOLINT: magic
          return pipeline.parser.test5();
        case 6:  // NOLINT: magic
          return pipeline.parser.test6();
        case 7:  // NOLINT: magic
          return pipeline.parser.test7();
        default:
          std::abort();
      }
    }();

    c3::CodeCompletionCore completion(&pipeline.parser);
    auto candidates = completion.collectCandidates(2, {ctx});

    EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(WhiteboxLexer::DOLOR));
    EXPECT_THAT(candidates.tokens[WhiteboxLexer::DOLOR], ElementsAre());
  }
}

TEST(WhiteboxGrammarTests, CaretAtOneOfMultiplePossibleStatesWithCommonFollowList) {
  AntlrPipeline<WhiteboxGrammar> pipeline("LOREM IPSUM ");

  auto* ctx = pipeline.parser.test8();

  c3::CodeCompletionCore completion(&pipeline.parser);
  auto candidates = completion.collectCandidates(2, {ctx});

  EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(WhiteboxLexer::DOLOR));
  EXPECT_THAT(candidates.tokens[WhiteboxLexer::DOLOR], ElementsAre(WhiteboxLexer::SIT));
}

}  // namespace c3::test
