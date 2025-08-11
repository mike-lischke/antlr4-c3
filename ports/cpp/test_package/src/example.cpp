#include <ANTLRInputStream.h>
#include <CommonTokenStream.h>
#include <Vocabulary.h>

#include <CodeCompletionCore.hpp>
#include <iostream>

#include "ExprLexer.h"
#include "ExprParser.h"

int main() {
  antlr4::ANTLRInputStream chars("var c = a + b()");
  ExprLexer lexer(&chars);
  antlr4::CommonTokenStream tokens(&lexer);
  ExprParser parser(&tokens);
  c3::CodeCompletionCore c3(&parser);

  parser.expression();
  c3::CandidatesCollection candidates = c3.collectCandidates(8);

  std::cout << "Candidates:" << std::endl;
  for (const auto& [token, _] : candidates.tokens) {
    const antlr4::dfa::Vocabulary& vocab = lexer.getVocabulary();
    std::cout << "[" << vocab.getLiteralName(token) << "]" << std::endl;
  }
}
