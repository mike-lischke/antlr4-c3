/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2023 Mike Lischke
 *
 * See LICENSE file for more info.
 */

// spell-checker: disable

import * as fs from "fs";

import { CPP14Parser } from "./generated/CPP14Parser";
import { CPP14Lexer } from "./generated/CPP14Lexer";
import { WhiteboxParser } from "./generated/WhiteboxParser";
import { WhiteboxLexer } from "./generated/WhiteboxLexer";

import * as c3 from "../index";

import {
    ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token,
} from "antlr4ts";

// Some helper functions + types to create certain setups.

export class ErrorListener implements ANTLRErrorListener<CommonToken> {
    public errorCount = 0;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
}

describe("antlr4-c3:", () => {
    describe("Whitebox grammar tests:", () => {

        // Whitespace tokens are skipped
        it("Caret at transition to rule with non-exhaustive follow set (optional tokens)", () => {
            const inputStream = CharStreams.fromString("LOREM ");
            const lexer = new WhiteboxLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new WhiteboxParser(tokenStream);
            const errorListener = new ErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            const ctx = parser.test1();
            expect(errorListener.errorCount).toEqual(1);

            const core = new c3.CodeCompletionCore(parser);
            const candidates = core.collectCandidates(1, ctx); // caret on EOF

            expect(candidates.tokens.size).toEqual(5);
            expect(candidates.tokens.has(WhiteboxLexer.IPSUM)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.DOLOR)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.SIT)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.AMET)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.CONSECTETUR)).toEqual(true);
        });

        it("Caret at transition to rule with empty follow set (epsilon-only transition to rule end)", () => {
            const inputStream = CharStreams.fromString("LOREM ");
            const lexer = new WhiteboxLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new WhiteboxParser(tokenStream);
            const errorListener = new ErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            const ctx = parser.test2();
            expect(errorListener.errorCount).toEqual(1);

            const core = new c3.CodeCompletionCore(parser);
            const candidates = core.collectCandidates(1, ctx); // caret on EOF

            expect(candidates.tokens.size).toEqual(5);
            expect(candidates.tokens.has(WhiteboxLexer.IPSUM)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.DOLOR)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.SIT)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.AMET)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.CONSECTETUR)).toEqual(true);
        });

        it("Caret at optional token", () => {
            const inputStream = CharStreams.fromString("LOREM ");
            const lexer = new WhiteboxLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new WhiteboxParser(tokenStream);
            const errorListener = new ErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            const ctx = parser.test3();
            expect(errorListener.errorCount).toEqual(1);

            const core = new c3.CodeCompletionCore(parser);
            const candidates = core.collectCandidates(1, ctx); // caret on EOF

            expect(candidates.tokens.size).toEqual(4);
            expect(candidates.tokens.has(WhiteboxLexer.IPSUM)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.DOLOR)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.SIT)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.AMET)).toEqual(true);
        });
    });

    describe("C++14 parser:", () => {
        it("Simple C++ example", () => {
            // We are trying here to get useful code completion candidates without adjusting the grammar in any way.
            // We use the grammar as downloaded from the ANTLR grammar directory and set up the c3 engine
            // instead in a way that still returns useful info. This limits us somewhat.
            const inputStream = CharStreams.fromString("class A {\n" +
                "public:\n" +
                "  void test() {\n" +
                "  }\n" +
                "};\n",
            );
            const lexer = new CPP14Lexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            /*
            tokenStream.fill();
            for (let token of tokenStream.getTokens())
              console.log(token.toString());
            */

            const parser = new CPP14Parser(tokenStream);
            const errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            parser.translationunit();
            expect(errorListener.errorCount).toEqual(0);

            const core = new c3.CodeCompletionCore(parser);

            // Ignore operators and the generic ID token.
            core.ignoredTokens = new Set([
                CPP14Lexer.Identifier,
                CPP14Lexer.LeftParen, CPP14Lexer.RightParen,
                CPP14Lexer.Operator, CPP14Lexer.Star, CPP14Lexer.And, CPP14Lexer.AndAnd,
                CPP14Lexer.LeftBracket,
                CPP14Lexer.Ellipsis,
                CPP14Lexer.Doublecolon, CPP14Lexer.Semi,
            ]);

            // For a C++ grammar you can of course get many candidates of all kind. For this test we focus only on a
            // few, namely namespace, class and variable references. For variable references there is no own rule, only
            // an "idexpression" as part of the primary expression.
            core.preferredRules = new Set([
                CPP14Parser.RULE_classname, CPP14Parser.RULE_namespacename, CPP14Parser.RULE_idexpression,
            ]);

            // 1) At the input start.
            let candidates = core.collectCandidates(0);

            expect(candidates.tokens.size).toEqual(40);
            expect(candidates.tokens.has(CPP14Lexer.Extern)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Mutable)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Register)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Static)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Thread_local)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Decltype)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Char)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Char16)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Char32)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Wchar)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Bool)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Short)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Int)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Long)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Signed)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Unsigned)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Float)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Double)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Void)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Auto)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Class)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Struct)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Union)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Enum)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Typename)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Const)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Volatile)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Explicit)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Inline)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Virtual)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Friend)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Typedef)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Constexpr)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Alignas)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Asm)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Namespace)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Using)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Static_assert)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Template)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.EOF)).toEqual(true);

            expect(candidates.tokens.has(CPP14Lexer.Identifier)).toEqual(false);

            // The returned list can contain more than one entry for a particular rule, if there are multiple
            // parser rule paths leading to it.
            expect(candidates.rules.size).toEqual(3);
            expect(candidates.rules.get(CPP14Parser.RULE_namespacename)?.ruleList).toEqual([
                CPP14Parser.RULE_translationunit,
                CPP14Parser.RULE_declarationseq,
                CPP14Parser.RULE_declaration,
                CPP14Parser.RULE_functiondefinition,
                CPP14Parser.RULE_declarator,
                CPP14Parser.RULE_ptrdeclarator,
                CPP14Parser.RULE_ptroperator,
                CPP14Parser.RULE_nestednamespecifier,
            ]);
            //Same as above
            expect(candidates.rules.get(CPP14Parser.RULE_classname)?.ruleList).toEqual([
                CPP14Parser.RULE_translationunit,
                CPP14Parser.RULE_declarationseq,
                CPP14Parser.RULE_declaration,
                CPP14Parser.RULE_functiondefinition,
                CPP14Parser.RULE_declarator,
                CPP14Parser.RULE_ptrdeclarator,
                CPP14Parser.RULE_ptroperator,
                CPP14Parser.RULE_nestednamespecifier,
                CPP14Parser.RULE_typename,
            ]);

            // 2) Within the method body.
            //    Note when counting token indexes: the C++14 grammar skips all whitespaces,
            //    hence there are no tokens for them.
            candidates = core.collectCandidates(10);

            const idexpressionStack = [
                CPP14Parser.RULE_translationunit,
                CPP14Parser.RULE_declarationseq,
                CPP14Parser.RULE_declaration,
                CPP14Parser.RULE_functiondefinition,
                CPP14Parser.RULE_declspecifierseq,
                CPP14Parser.RULE_declspecifier,
                CPP14Parser.RULE_typespecifier,
                CPP14Parser.RULE_classspecifier,
                CPP14Parser.RULE_memberspecification,
                CPP14Parser.RULE_memberspecification,
                CPP14Parser.RULE_memberdeclaration,

                CPP14Parser.RULE_memberdeclaratorlist,
                CPP14Parser.RULE_memberdeclarator,
                CPP14Parser.RULE_braceorequalinitializer,
                CPP14Parser.RULE_bracedinitlist,
                CPP14Parser.RULE_initializerlist,
                CPP14Parser.RULE_initializerclause,

                CPP14Parser.RULE_assignmentexpression,
                CPP14Parser.RULE_logicalorexpression,
                CPP14Parser.RULE_logicalandexpression,
                CPP14Parser.RULE_inclusiveorexpression,
                CPP14Parser.RULE_exclusiveorexpression,
                CPP14Parser.RULE_andexpression,
                CPP14Parser.RULE_equalityexpression,
                CPP14Parser.RULE_relationalexpression,
                CPP14Parser.RULE_shiftexpression,
                CPP14Parser.RULE_additiveexpression,
                CPP14Parser.RULE_multiplicativeexpression,
                CPP14Parser.RULE_pmexpression,
                CPP14Parser.RULE_castexpression,
                CPP14Parser.RULE_unaryexpression,
                CPP14Parser.RULE_postfixexpression,
                CPP14Parser.RULE_primaryexpression,
            ];

            expect(candidates.rules.size).toEqual(3);
            expect(candidates.rules.get(CPP14Parser.RULE_idexpression)?.ruleList).toEqual(idexpressionStack);
            expect(candidates.rules.get(CPP14Parser.RULE_classname)?.ruleList).toEqual([
                ...idexpressionStack.slice(0, idexpressionStack.length - 1),
                CPP14Parser.RULE_simpletypespecifier,
                CPP14Parser.RULE_nestednamespecifier,
                CPP14Parser.RULE_typename,
            ]);
            expect(candidates.rules.get(CPP14Parser.RULE_namespacename)?.ruleList).toEqual([
                ...idexpressionStack.slice(0, idexpressionStack.length - 1),
                CPP14Parser.RULE_simpletypespecifier,
                CPP14Parser.RULE_nestednamespecifier,
            ]);

            // We should receive more specific rules when translating top down.
            core.translateRulesTopDown = true;
            candidates = core.collectCandidates(10);

            expect(candidates.rules.size).toEqual(3);
            expect(candidates.rules.get(CPP14Parser.RULE_idexpression)?.ruleList).toEqual(idexpressionStack);
            expect(candidates.rules.get(CPP14Parser.RULE_classname)?.ruleList).toEqual([
                ...idexpressionStack.slice(0, idexpressionStack.length - 1),
                CPP14Parser.RULE_simpletypespecifier,
                CPP14Parser.RULE_nestednamespecifier,
                CPP14Parser.RULE_typename,
            ]);
            expect(candidates.rules.get(CPP14Parser.RULE_namespacename)?.ruleList).toEqual([
                ...idexpressionStack.slice(0, idexpressionStack.length - 1),
                CPP14Parser.RULE_simpletypespecifier,
                CPP14Parser.RULE_nestednamespecifier,
            ]);

            // We are starting a primary expression in a function body, so everything related to expressions and
            // control flow is allowed here. We only check for a few possible keywords.
            expect(candidates.tokens.size).toEqual(82);
            expect(candidates.tokens.has(CPP14Lexer.If)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.This)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.New)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Case)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.While)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Throw)).toEqual(true);

            expect(candidates.tokens.has(CPP14Lexer.Override)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Export)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Private)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Protected)).toEqual(false);

            //Fixing issue #12 causes this to be included that was previously not returned
            expect(candidates.tokens.has(CPP14Lexer.Decltype)).toEqual(true);
        });

        it("Simple C++ example with errors in input", () => {
            const inputStream = CharStreams.fromString("class A {\n" +
                "public:\n" +
                "  void test() {\n" +
                "    if ()" +
                "  }\n" +
                "};\n",
            );
            const lexer = new CPP14Lexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new CPP14Parser(tokenStream);
            parser.removeErrorListeners();
            const errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            parser.translationunit();
            expect(errorListener.errorCount).toEqual(3);

            const core = new c3.CodeCompletionCore(parser);

            // Ignore operators and the generic ID token.
            core.ignoredTokens = new Set([
                CPP14Lexer.Identifier,
                //CPP14Lexer.LeftParen, CPP14Lexer.RightParen, Let parentheses show up in this test
                CPP14Lexer.Operator, CPP14Lexer.Star, CPP14Lexer.And, CPP14Lexer.AndAnd,
                CPP14Lexer.LeftBracket,
                CPP14Lexer.Ellipsis,
                CPP14Lexer.Doublecolon, CPP14Lexer.Semi,
            ]);

            core.preferredRules = new Set([
                CPP14Parser.RULE_classname, CPP14Parser.RULE_namespacename, CPP14Parser.RULE_idexpression,
            ]);

            core.showDebugOutput = false;
            core.showRuleStack = false;
            let candidates = core.collectCandidates(11); // At the opening parenthesis.

            expect(candidates.tokens.size).toEqual(1);
            expect(candidates.tokens.has(CPP14Lexer.LeftParen)).toEqual(true);

            // At the closing parenthesis -> again everything in an expression allowed
            // (no control flow this time, though).
            candidates = core.collectCandidates(12);

            expect(candidates.tokens.size).toEqual(65);
            expect(candidates.tokens.has(CPP14Lexer.If)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.This)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.New)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Case)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.While)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Throw)).toEqual(true);

            expect(candidates.tokens.has(CPP14Lexer.Override)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Export)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Private)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Protected)).toEqual(false);

            //Fixing issue #12 causes this to be included that was previously not returned
            expect(candidates.tokens.has(CPP14Lexer.Decltype)).toEqual(true);

            candidates = core.collectCandidates(13); // After the error position -> no suggestions.
            expect(candidates.tokens.size).toEqual(0);
            expect(candidates.rules.size).toEqual(0);
        });

        it("Real C++ file", () => {
            const source = fs.readFileSync("tests/Parser.cpp").toString();
            const inputStream = CharStreams.fromString(source);
            const lexer = new CPP14Lexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            /*
            tokenStream.fill();
            for (let token of tokenStream.getTokens())
              console.log(token.toString());
            */

            const parser = new CPP14Parser(tokenStream);
            const errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            parser.translationunit();
            expect(errorListener.errorCount).toEqual(0);

            const core = new c3.CodeCompletionCore(parser);

            // Ignore operators and the generic ID token.
            core.ignoredTokens = new Set([
                CPP14Lexer.Identifier,
                CPP14Lexer.LeftParen, CPP14Lexer.RightParen,
                CPP14Lexer.Operator, CPP14Lexer.Star, CPP14Lexer.And, CPP14Lexer.AndAnd,
                CPP14Lexer.LeftBracket,
                CPP14Lexer.Ellipsis,
                CPP14Lexer.Doublecolon, CPP14Lexer.Semi,
            ]);

            core.preferredRules = new Set([
                CPP14Parser.RULE_classname, CPP14Parser.RULE_namespacename, CPP14Parser.RULE_idexpression,
            ]);

            let candidates = core.collectCandidates(3469);

            const idexpressionStack = [
                CPP14Parser.RULE_translationunit,
                CPP14Parser.RULE_declarationseq,
                CPP14Parser.RULE_declaration,
                CPP14Parser.RULE_functiondefinition,
                CPP14Parser.RULE_functionbody,
                CPP14Parser.RULE_compoundstatement,
                CPP14Parser.RULE_statementseq,
                CPP14Parser.RULE_statement,
                CPP14Parser.RULE_declarationstatement,
                CPP14Parser.RULE_blockdeclaration,
                CPP14Parser.RULE_simpledeclaration,
                CPP14Parser.RULE_initdeclaratorlist,
                CPP14Parser.RULE_initdeclarator,
                CPP14Parser.RULE_declarator,
                CPP14Parser.RULE_noptrdeclarator,
                CPP14Parser.RULE_declaratorid,
            ];

            expect(candidates.rules.size).toEqual(3);
            expect(candidates.rules.get(CPP14Parser.RULE_idexpression)?.ruleList).toEqual(idexpressionStack);

            // We should receive more specific rules when translating top down.
            core.translateRulesTopDown = true;
            candidates = core.collectCandidates(3469);

            expect(candidates.rules.size).toEqual(3);
            expect(candidates.rules.get(CPP14Parser.RULE_idexpression)?.ruleList).toEqual(idexpressionStack);
            expect(candidates.rules.get(CPP14Parser.RULE_classname)?.ruleList).toEqual([
                ...idexpressionStack,
                CPP14Parser.RULE_idexpression,
                CPP14Parser.RULE_qualifiedid,
                CPP14Parser.RULE_nestednamespecifier,
                CPP14Parser.RULE_typename,
            ]);
            expect(candidates.rules.get(CPP14Parser.RULE_namespacename)?.ruleList).toEqual([
                ...idexpressionStack,
                CPP14Parser.RULE_idexpression,
                CPP14Parser.RULE_qualifiedid,
                CPP14Parser.RULE_nestednamespecifier,
            ]);

            // We are starting a primary expression in a function body, so everything related to expressions and
            // control flow is allowed here. We only check for a few possible keywords.
            expect(candidates.tokens.size).toEqual(82);
            expect(candidates.tokens.has(CPP14Lexer.If)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.This)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.New)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Case)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.While)).toEqual(true);
            expect(candidates.tokens.has(CPP14Lexer.Throw)).toEqual(true);

            expect(candidates.tokens.has(CPP14Lexer.Override)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Export)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Private)).toEqual(false);
            expect(candidates.tokens.has(CPP14Lexer.Protected)).toEqual(false);

            // Fixing issue #12 causes this to be included that was previously not returned.
            expect(candidates.tokens.has(CPP14Lexer.Decltype)).toEqual(true);
        });
    });

});
