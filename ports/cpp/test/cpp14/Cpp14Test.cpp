#include <CPP14Lexer.h>
#include <CPP14Parser.h>
#include <gmock/gmock.h>
#include <gtest/gtest.h>

#include <antlr4-c3/CodeCompletionCore.hpp>
#include <filesystem>
#include <fstream>
#include <iterator>
#include <string>
#include <utility/AntlrPipeline.hpp>
#include <utility/Collections.hpp>
#include <utility/Testing.hpp>
#include <vector>

namespace c3::test {

struct Cpp14Grammar {
  using Lexer = CPP14Lexer;
  using Parser = CPP14Parser;
};

TEST(CPP14Parser, SimpleExample) {  // NOLINT: complexity
  // We are trying here to get useful code completion candidates without
  // adjusting the grammar in any way. We use the grammar as downloaded from the
  // ANTLR grammar directory and set up the c3 engine instead in a way that
  // still returns useful info. This limits us somewhat.
  const auto* source =
      "class A {\n"
      "public:\n"
      "  void test() {\n"
      "  }\n"
      "};\n";
  AntlrPipeline<Cpp14Grammar> pipeline(source);
  pipeline.parser.translationunit();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 0);

  CodeCompletionCore completion(&pipeline.parser);

  // Ignore operators and the generic ID token.
  completion.ignoredTokens = {
      CPP14Lexer::Identifier,
      CPP14Lexer::LeftParen,
      CPP14Lexer::RightParen,
      CPP14Lexer::Operator,
      CPP14Lexer::Star,
      CPP14Lexer::And,
      CPP14Lexer::AndAnd,
      CPP14Lexer::LeftBracket,
      CPP14Lexer::Ellipsis,
      CPP14Lexer::Doublecolon,
      CPP14Lexer::Semi,
  };

  // For a C++ grammar you can of course get many candidates of all kind. For
  // this test we focus only on a few, namely namespace, class and variable
  // references. For variable references there is no own rule, only an
  // "idexpression" as part of the primary expression.
  completion.preferredRules = {
      CPP14Parser::RuleClassname,
      CPP14Parser::RuleNamespacename,
      CPP14Parser::RuleIdexpression,
  };

  {
    // 1) At the input start.
    auto candidates = completion.collectCandidates(0);

    EXPECT_THAT(
        Keys(candidates.tokens),
        UnorderedElementsAre(
            CPP14Lexer::Extern,
            CPP14Lexer::Mutable,
            CPP14Lexer::Register,
            CPP14Lexer::Static,
            CPP14Lexer::Thread_local,
            CPP14Lexer::Decltype,
            CPP14Lexer::Char,
            CPP14Lexer::Char16,
            CPP14Lexer::Char32,
            CPP14Lexer::Wchar,
            CPP14Lexer::Bool,
            CPP14Lexer::Short,
            CPP14Lexer::Int,
            CPP14Lexer::Long,
            CPP14Lexer::Signed,
            CPP14Lexer::Unsigned,
            CPP14Lexer::Float,
            CPP14Lexer::Double,
            CPP14Lexer::Void,
            CPP14Lexer::Auto,
            CPP14Lexer::Class,
            CPP14Lexer::Struct,
            CPP14Lexer::Union,
            CPP14Lexer::Enum,
            CPP14Lexer::Typename,
            CPP14Lexer::Const,
            CPP14Lexer::Volatile,
            CPP14Lexer::Explicit,
            CPP14Lexer::Inline,
            CPP14Lexer::Virtual,
            CPP14Lexer::Friend,
            CPP14Lexer::Typedef,
            CPP14Lexer::Constexpr,
            CPP14Lexer::Alignas,
            CPP14Lexer::Asm,
            CPP14Lexer::Namespace,
            CPP14Lexer::Using,
            CPP14Lexer::Static_assert,
            CPP14Lexer::Template,
            CPP14Lexer::EOF
        )
    );

    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(
            CPP14Parser::RuleClassname,
            CPP14Parser::RuleNamespacename,
            CPP14Parser::RuleIdexpression
        )
    );

    EXPECT_THAT(
        candidates.rules[CPP14Parser::RuleNamespacename].ruleList,
        ElementsAre(
            CPP14Parser::RuleTranslationunit,
            CPP14Parser::RuleDeclarationseq,
            CPP14Parser::RuleDeclaration,
            CPP14Parser::RuleFunctiondefinition,
            CPP14Parser::RuleDeclarator,
            CPP14Parser::RulePtrdeclarator,
            CPP14Parser::RulePtroperator,
            CPP14Parser::RuleNestednamespecifier
        )
    );

    EXPECT_THAT(
        candidates.rules[CPP14Parser::RuleClassname].ruleList,
        ElementsAre(
            CPP14Parser::RuleTranslationunit,
            CPP14Parser::RuleDeclarationseq,
            CPP14Parser::RuleDeclaration,
            CPP14Parser::RuleFunctiondefinition,
            CPP14Parser::RuleDeclarator,
            CPP14Parser::RulePtrdeclarator,
            CPP14Parser::RulePtroperator,
            CPP14Parser::RuleNestednamespecifier,
            CPP14Parser::RuleTypename
        )
    );
  }
  for (auto translateRulesTopDown : {false, true}) {
    // 2) Within the method body.
    //    Note when counting token indexes: the C++14 grammar skips all
    //    whitespaces, hence there are no tokens for them.
    completion.translateRulesTopDown = translateRulesTopDown;
    auto candidates = completion.collectCandidates(10);  // NOLINT: magic

    const std::vector idexpressionStack = {
        CPP14Parser::RuleTranslationunit,
        CPP14Parser::RuleDeclarationseq,
        CPP14Parser::RuleDeclaration,
        CPP14Parser::RuleBlockdeclaration,   // TS: +- `RuleFunctiondefinition`
        CPP14Parser::RuleSimpledeclaration,  // TS: --
        CPP14Parser::RuleDeclspecifierseq,
        CPP14Parser::RuleDeclspecifier,
        CPP14Parser::RuleTypespecifier,
        CPP14Parser::RuleClassspecifier,
        CPP14Parser::RuleMemberspecification,
        CPP14Parser::RuleMemberspecification,
        CPP14Parser::RuleMemberdeclaration,

        CPP14Parser::RuleMemberdeclaratorlist,
        CPP14Parser::RuleMemberdeclarator,
        CPP14Parser::RuleBraceorequalinitializer,
        CPP14Parser::RuleBracedinitlist,
        CPP14Parser::RuleInitializerlist,
        CPP14Parser::RuleInitializerclause,

        CPP14Parser::RuleAssignmentexpression,
        CPP14Parser::RuleLogicalorexpression,
        CPP14Parser::RuleLogicalandexpression,
        CPP14Parser::RuleInclusiveorexpression,
        CPP14Parser::RuleExclusiveorexpression,
        CPP14Parser::RuleAndexpression,
        CPP14Parser::RuleEqualityexpression,
        CPP14Parser::RuleRelationalexpression,
        CPP14Parser::RuleShiftexpression,
        CPP14Parser::RuleAdditiveexpression,
        CPP14Parser::RuleMultiplicativeexpression,
        CPP14Parser::RulePmexpression,
        CPP14Parser::RuleCastexpression,
        CPP14Parser::RuleUnaryexpression,
        CPP14Parser::RulePostfixexpression,
        CPP14Parser::RulePrimaryexpression,
    };

    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(
            CPP14Parser::RuleClassname,
            CPP14Parser::RuleNamespacename,
            CPP14Parser::RuleIdexpression
        )
    );

    EXPECT_THAT(
        candidates.rules[CPP14Parser::RuleIdexpression].ruleList,
        ElementsAreArray(idexpressionStack)
    );

    EXPECT_THAT(candidates.rules[CPP14Parser::RuleClassname].ruleList, ElementsAreArray([&] {
                  auto stack = idexpressionStack;
                  stack.pop_back();
                  for (auto rule : {
                           CPP14Parser::RuleSimpletypespecifier,
                           CPP14Parser::RuleNestednamespecifier,
                           CPP14Parser::RuleTypename,
                       }) {
                    stack.emplace_back(rule);
                  }
                  return stack;
                }()));

    EXPECT_THAT(candidates.rules[CPP14Parser::RuleNamespacename].ruleList, ElementsAreArray([&] {
                  auto stack = idexpressionStack;
                  stack.pop_back();
                  for (auto rule : {
                           CPP14Parser::RuleSimpletypespecifier,
                           CPP14Parser::RuleNestednamespecifier,
                       }) {
                    stack.emplace_back(rule);
                  }
                  return stack;
                }()));
  }
  {
    // 2) Within the method body.
    //    Note when counting token indexes: the C++14 grammar skips all
    //    whitespaces, hence there are no tokens for them.
    completion.translateRulesTopDown = true;
    auto candidates = completion.collectCandidates(10);  // NOLINT: magic

    EXPECT_EQ(candidates.tokens.size(), 82);

    EXPECT_THAT(
        Keys(candidates.tokens),
        IsSupersetOf({
            CPP14Lexer::If,
            CPP14Lexer::This,
            CPP14Lexer::New,
            CPP14Lexer::Case,
            CPP14Lexer::While,
            CPP14Lexer::Throw,
            // Fixing issue #12 causes this to be included that was
            // previously not returned
            CPP14Lexer::Decltype,
        })
    );

    EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Override));
    EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Export));
    EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Private));
    EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Protected));
  }
}

TEST(CPP14Parser, SimpleCppExampleWithErrorsInInput) {
  const auto* source =
      "class A {\n"
      "public:\n"
      "  void test() {\n"
      "    if ()"
      "  }\n"
      "};\n";
  AntlrPipeline<Cpp14Grammar> pipeline(source);
  pipeline.parser.translationunit();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 3);

  CodeCompletionCore completion(&pipeline.parser);

  // Ignore operators and the generic ID token.
  completion.ignoredTokens = {
      CPP14Lexer::Identifier,
      // Let parentheses show up in this test, so
      //   CPP14Lexer.LeftParen,
      //   CPP14Lexer.RightParen,
      CPP14Lexer::Operator,
      CPP14Lexer::Star,
      CPP14Lexer::And,
      CPP14Lexer::AndAnd,
      CPP14Lexer::LeftBracket,
      CPP14Lexer::Ellipsis,
      CPP14Lexer::Doublecolon,
      CPP14Lexer::Semi,
  };

  completion.preferredRules = {
      CPP14Parser::RuleClassname,
      CPP14Parser::RuleNamespacename,
      CPP14Parser::RuleIdexpression,
  };

  {
    // At the opening parenthesis.
    auto candidates = completion.collectCandidates(11);  // NOLINT: magic

    EXPECT_THAT(Keys(candidates.tokens), UnorderedElementsAre(CPP14Lexer::LeftParen));
  }
  {
    // At the closing parenthesis -> again everything in an expression allowed
    // (no control flow this time, though).
    auto candidates = completion.collectCandidates(12);  // NOLINT: magic

    EXPECT_EQ(candidates.tokens.size(), 65);

    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::If), false);
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::This), true);
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::New), true);
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::Case), false);
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::While), false);
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::Throw), true);

    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::Override), false);
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::Export), false);
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::Private), false);
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::Protected), false);

    // Fixing issue #12 causes this to be included that
    // was previously not returned
    EXPECT_EQ(candidates.tokens.contains(CPP14Lexer::Decltype), true);
  }
  {
    // After the error position -> no suggestions.
    auto candidates = completion.collectCandidates(13);  // NOLINT: magic

    EXPECT_EQ(candidates.tokens.size(), 0);
    EXPECT_EQ(candidates.rules.size(), 0);
  }
}

TEST(CPP14Parser, RealCppFile) {  // NOLINT: complexity
  {
    const auto path = std::filesystem::current_path().string();
    EXPECT_TRUE(path.ends_with("ports/cpp/build/test/cpp14"));
  }

  const auto source = [] {
    // Assume we are at antlr4-c3/ports/cpp/build
    std::ifstream file("../../../tests/Parser.cpp");
    std::string content((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
    return content;
  }();

  AntlrPipeline<Cpp14Grammar> pipeline(source);
  pipeline.parser.translationunit();
  EXPECT_EQ(pipeline.listener.GetErrorCount(), 0);

  CodeCompletionCore completion(&pipeline.parser);

  // Ignore operators and the generic ID token.
  completion.ignoredTokens = {
      CPP14Lexer::Identifier,
      CPP14Lexer::LeftParen,
      CPP14Lexer::RightParen,
      CPP14Lexer::Operator,
      CPP14Lexer::Star,
      CPP14Lexer::And,
      CPP14Lexer::AndAnd,
      CPP14Lexer::LeftBracket,
      CPP14Lexer::Ellipsis,
      CPP14Lexer::Doublecolon,
      CPP14Lexer::Semi,
  };

  completion.preferredRules = {
      CPP14Parser::RuleClassname,
      CPP14Parser::RuleNamespacename,
      CPP14Parser::RuleIdexpression,
  };

  const std::vector idexpressionStack = {
      CPP14Parser::RuleTranslationunit,
      CPP14Parser::RuleDeclarationseq,
      CPP14Parser::RuleDeclaration,
      CPP14Parser::RuleFunctiondefinition,
      // These are in TypeScript version, but not in C++ port
      // CPP14Parser::RuleFunctionbody,
      // CPP14Parser::RuleCompoundstatement,
      // CPP14Parser::RuleStatementseq,
      // CPP14Parser::RuleStatement,
      // CPP14Parser::RuleDeclarationstatement,
      // CPP14Parser::RuleBlockdeclaration,
      // CPP14Parser::RuleSimpledeclaration,
      // CPP14Parser::RuleInitdeclaratorlist,
      // CPP14Parser::RuleInitdeclarator,
      CPP14Parser::RuleDeclarator,
      CPP14Parser::RuleNoptrdeclarator,
      CPP14Parser::RuleDeclaratorid,
  };

  const std::vector classnameStack = Concat(
      idexpressionStack,
      {
          CPP14Parser::RuleIdexpression,
          CPP14Parser::RuleQualifiedid,
          CPP14Parser::RuleNestednamespecifier,
          CPP14Parser::RuleTypename,
      }
  );

  const std::vector namespacenameStack = Concat(
      idexpressionStack,
      {
          CPP14Parser::RuleIdexpression,
          CPP14Parser::RuleQualifiedid,
          CPP14Parser::RuleNestednamespecifier,
      }
  );

  {
    auto candidates = completion.collectCandidates(3469);  // NOLINT: magic

    EXPECT_THAT(
        Keys(candidates.rules),
        UnorderedElementsAre(
            CPP14Parser::RuleClassname,
            CPP14Parser::RuleNamespacename,
            CPP14Parser::RuleIdexpression
        )
    );

    EXPECT_THAT(
        candidates.rules[CPP14Parser::RuleIdexpression].ruleList,
        ElementsAreArray(idexpressionStack)
    );
  }
  {
    // We should receive more specific rules when translating top down.

    completion.translateRulesTopDown = true;
    auto candidates = completion.collectCandidates(3469);  // NOLINT: magic

    EXPECT_THAT(
        candidates.rules[CPP14Parser::RuleClassname].ruleList, ElementsAreArray(classnameStack)
    );

    EXPECT_THAT(
        candidates.rules[CPP14Parser::RuleNamespacename].ruleList,
        ElementsAreArray(namespacenameStack)
    );

    // We are starting a primary expression in a function body, so everything
    // related to expressions and control flow is allowed here. We only check
    // for a few possible keywords.
    EXPECT_EQ(candidates.tokens.size(), 40);  // TS: 82

    {  // TS: at each statement in this block must be EXPECT_TRUE
      EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::If));
      EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::This));
      EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::New));
      EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Case));
      EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::While));
      EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Throw));
    }

    // Fixing issue #12 causes this to be included that
    // was previously not returned.
    EXPECT_TRUE(candidates.tokens.contains(CPP14Lexer::Decltype));

    EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Override));
    EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Export));
    EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Private));
    EXPECT_FALSE(candidates.tokens.contains(CPP14Lexer::Protected));
  }
}

}  // namespace c3::test
