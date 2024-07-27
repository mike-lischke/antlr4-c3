#pragma once

#include <antlr4-c3/CodeCompletionCore.hpp>

namespace c3::test {

inline auto Candidates(CodeCompletionCore &completion,
                       std::size_t caretTokenIndex) {
  return completion.collectCandidates(caretTokenIndex,
                                      /*context=*/nullptr, /*size_t=*/0,
                                      /*cancel=*/nullptr);
}

inline auto Candidates(CodeCompletionCore &completion,
                       std::size_t caretTokenIndex,
                       antlr4::ParserRuleContext *context) {
  return completion.collectCandidates(caretTokenIndex,
                                      /*context=*/context, /*size_t=*/0,
                                      /*cancel=*/nullptr);
}

} // namespace c3::test