#pragma once

#include <antlr4-runtime.h>

#include <cstddef>
#include <string_view>

namespace c3::test {

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

template <class Grammar> struct AntlrPipeline {
  AntlrPipeline(std::string_view text)
      : chars(text), lexer(&chars), tokens(&lexer), parser(&tokens) {
    parser.removeErrorListeners();
    parser.addErrorListener(&listener);
  }

  antlr4::ANTLRInputStream chars;
  Grammar::Lexer lexer;
  antlr4::CommonTokenStream tokens;
  Grammar::Parser parser;
  CountingErrorListener listener;
};

} // namespace c3::test
