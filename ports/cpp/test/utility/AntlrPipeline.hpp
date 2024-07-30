#pragma once

#include <ANTLRInputStream.h>
#include <BaseErrorListener.h>
#include <CommonTokenStream.h>
#include <Recognizer.h>
#include <Token.h>

#include <cstddef>
#include <exception>
#include <string>
#include <string_view>

namespace c3::test {

class CountingErrorListener final : public antlr4::BaseErrorListener {
public:
  void syntaxError(
      antlr4::Recognizer* /*recognizer*/, antlr4::Token* /*offendingSymbol*/, std::size_t /*line*/,
      std::size_t /*charPositionInLine*/, const std::string& /*msg*/, std::exception_ptr /*e*/
  ) override {
    errorCount += 1;
  }

  [[nodiscard]] std::size_t GetErrorCount() const {
    return errorCount;
  }

private:
  std::size_t errorCount = 0;
};

template <class Grammar>
struct AntlrPipeline {
  explicit AntlrPipeline(std::string_view text)
      : chars(text), lexer(&chars), tokens(&lexer), parser(&tokens) {
    parser.removeErrorListeners();
    parser.addErrorListener(&listener);
  }

  antlr4::ANTLRInputStream chars;    // NOLINT: public
  Grammar::Lexer lexer;              // NOLINT: public
  antlr4::CommonTokenStream tokens;  // NOLINT: public
  Grammar::Parser parser;            // NOLINT: public
  CountingErrorListener listener;    // NOLINT: public
};

}  // namespace c3::test
