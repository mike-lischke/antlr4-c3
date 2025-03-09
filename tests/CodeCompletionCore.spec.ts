/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2023 Mike Lischke
 *
 * See LICENSE file for more info.
 */

// cspell: disable

import * as fs from "fs";

import {
    BaseErrorListener, CharStream, CommonTokenStream, ParserRuleContext, RecognitionException,
    Recognizer, Token, ATNSimulator,
} from "antlr4ng";
import { describe, expect, it } from "vitest";

import { CPP14Parser } from "./generated/CPP14Parser";
import { CPP14Lexer } from "./generated/CPP14Lexer";
import { WhiteboxParser } from "./generated/WhiteboxParser";
import { WhiteboxLexer } from "./generated/WhiteboxLexer";

import { ExprLexer } from "./generated/ExprLexer";
import { ExprParser } from "./generated/ExprParser";
import { CodeCompletionCore } from "../src/CodeCompletionCore";

export class TestErrorListener extends BaseErrorListener {
    public errorCount = 0;

    public override syntaxError<S extends Token, T extends ATNSimulator>(_recognizer: Recognizer<T>,
        _offendingSymbol: S | null, _line: number, _column: number, _msg: string,
        _e: RecognitionException | null): void {
        ++this.errorCount;
    }
}

describe("Code Completion Tests", () => {
    describe("Whitebox grammar tests:", () => {

        // Whitespace tokens are skipped
        it("Caret at transition to rule with non-exhaustive follow set (optional tokens)", () => {
            const inputStream = CharStream.fromString("LOREM ");
            const lexer = new WhiteboxLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new WhiteboxParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            const ctx = parser.test1();
            expect(errorListener.errorCount).toEqual(1);

            const core = new CodeCompletionCore(parser);
            const candidates = core.collectCandidates(1, ctx); // caret on EOF

            expect(candidates.tokens.size).toEqual(5);
            expect(candidates.tokens.has(WhiteboxLexer.IPSUM)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.DOLOR)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.SIT)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.AMET)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.CONSECTETUR)).toEqual(true);
        });

        it("Caret at transition to rule with empty follow set (epsilon-only transition to rule end)", () => {
            const inputStream = CharStream.fromString("LOREM ");
            const lexer = new WhiteboxLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new WhiteboxParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            const ctx = parser.test2();
            expect(errorListener.errorCount).toEqual(1);

            const core = new CodeCompletionCore(parser);
            const candidates = core.collectCandidates(1, ctx); // caret on EOF

            expect(candidates.tokens.size).toEqual(5);
            expect(candidates.tokens.has(WhiteboxLexer.IPSUM)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.DOLOR)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.SIT)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.AMET)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.CONSECTETUR)).toEqual(true);
        });

        it("Caret at optional token", () => {
            const inputStream = CharStream.fromString("LOREM ");
            const lexer = new WhiteboxLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new WhiteboxParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            const ctx = parser.test3();
            expect(errorListener.errorCount).toEqual(1);

            const core = new CodeCompletionCore(parser);
            const candidates = core.collectCandidates(1, ctx); // caret on EOF

            expect(candidates.tokens.size).toEqual(4);
            expect(candidates.tokens.has(WhiteboxLexer.IPSUM)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.DOLOR)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.SIT)).toEqual(true);
            expect(candidates.tokens.has(WhiteboxLexer.AMET)).toEqual(true);
        });

        it.each([
            "test4",
            "test5",
            "test6",
            "test7",
        ])("Caret at one of multiple possible states (%s)", (test) => {
            const inputStream = CharStream.fromString("LOREM IPSUM ");
            const lexer = new WhiteboxLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new WhiteboxParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);

            const ctx = (parser[test as keyof WhiteboxParser] as () => ParserRuleContext)();

            const core = new CodeCompletionCore(parser);
            const candidates = core.collectCandidates(2, ctx); // caret on EOF

            expect(candidates.tokens.size).toEqual(1);
            expect(candidates.tokens.has(WhiteboxLexer.DOLOR)).toEqual(true);
            expect(candidates.tokens.get(WhiteboxLexer.DOLOR)).toEqual([]);
        });

        it("Caret at one of multiple possible states with common follow list", () => {
            const inputStream = CharStream.fromString("LOREM IPSUM ");
            const lexer = new WhiteboxLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new WhiteboxParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);

            const ctx = parser.test8();

            const core = new CodeCompletionCore(parser);
            const candidates = core.collectCandidates(2, ctx); // caret on EOF

            expect(candidates.tokens.size).toEqual(1);
            expect(candidates.tokens.has(WhiteboxLexer.DOLOR)).toEqual(true);
            expect(candidates.tokens.get(WhiteboxLexer.DOLOR)).toEqual([WhiteboxLexer.SIT]);
        });
    });

    describe("C++14 parser:", () => {
        it("Simple C++ example", () => {
            // We are trying here to get useful code completion candidates without adjusting the grammar in any way.
            // We use the grammar as downloaded from the ANTLR grammar directory and set up the c3 engine
            // instead in a way that still returns useful info. This limits us somewhat.
            const inputStream = CharStream.fromString("class A {\n" +
                "public:\n" +
                "  void test() {\n" +
                "  }\n" +
                "};\n",
            );
            const lexer = new CPP14Lexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            /*tokenStream.fill();
            for (const token of tokenStream.tokens) {
                console.log(token.toString());
            }*/

            const parser = new CPP14Parser(tokenStream);
            parser.removeErrorListeners();
            const errorListener = new TestErrorListener();
            parser.addErrorListener(errorListener);
            parser.translationunit();
            expect(errorListener.errorCount).toEqual(0);

            const core = new CodeCompletionCore(parser);

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
            const inputStream = CharStream.fromString("class A {\n" +
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
            const errorListener = new TestErrorListener();
            parser.addErrorListener(errorListener);
            parser.translationunit();
            expect(errorListener.errorCount).toEqual(3);

            const core = new CodeCompletionCore(parser);

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
            const inputStream = CharStream.fromString(source);
            const lexer = new CPP14Lexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            /*
            tokenStream.fill();
            for (let token of tokenStream.getTokens())
              console.log(token.toString());
            */

            const parser = new CPP14Parser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.addErrorListener(errorListener);
            parser.translationunit();
            expect(errorListener.errorCount).toEqual(0);

            const core = new CodeCompletionCore(parser);

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
        }, 20000);
    });

    describe("Simple expression parser:", () => {
        it("Most simple setup", () => {
            // No customization happens here, so the c3 engine only returns lexer tokens.
            const inputStream = CharStream.fromString("var c = a + b()");
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.addErrorListener(errorListener);
            parser.expression();
            expect(errorListener.errorCount).toEqual(0);

            const core = new CodeCompletionCore(parser);

            // 1) At the input start.
            let candidates = core.collectCandidates(0);

            expect(candidates.tokens.size).toEqual(3);
            expect(candidates.tokens.has(ExprLexer.VAR)).toEqual(true);
            expect(candidates.tokens.has(ExprLexer.LET)).toEqual(true);
            expect(candidates.tokens.has(ExprLexer.ID)).toEqual(true);

            expect(candidates.tokens.get(ExprLexer.VAR)).toEqual([ExprLexer.ID, ExprLexer.EQUAL]);
            expect(candidates.tokens.get(ExprLexer.LET)).toEqual([ExprLexer.ID, ExprLexer.EQUAL]);
            expect(candidates.tokens.get(ExprLexer.ID)).toEqual([]);

            // 2) On the first whitespace. In real implementations you would do some additional checks where in the
            //    whitespace the caret is, as the outcome is different depending on that position.
            candidates = core.collectCandidates(1);
            expect(candidates.tokens.size).toEqual(1);
            expect(candidates.tokens.has(ExprLexer.ID)).toEqual(true);

            // 3) On the variable name ('c').
            candidates = core.collectCandidates(2);
            expect(candidates.tokens.size).toEqual(1);
            expect(candidates.tokens.has(ExprLexer.ID)).toEqual(true);

            // 4) On the equal sign (ignoring whitespace positions from now on).
            candidates = core.collectCandidates(4);
            expect(candidates.tokens.size).toEqual(1);
            expect(candidates.tokens.has(ExprLexer.EQUAL)).toEqual(true);

            // 5) On the variable reference 'a'. But since we have not configure the c3 engine to return us var refs
            //    (or function refs for that matter) we only get an ID here.
            candidates = core.collectCandidates(6);
            expect(candidates.tokens.size).toEqual(1);
            expect(candidates.tokens.has(ExprLexer.ID)).toEqual(true);

            // 6) On the '+' operator. Usually you would not show operators as candidates, but we have not set up the
            //    c3 engine yet to not return them.
            candidates = core.collectCandidates(8);
            expect(candidates.tokens.size).toEqual(5);
            expect(candidates.tokens.has(ExprLexer.PLUS)).toEqual(true);
            expect(candidates.tokens.has(ExprLexer.MINUS)).toEqual(true);
            expect(candidates.tokens.has(ExprLexer.MULTIPLY)).toEqual(true);
            expect(candidates.tokens.has(ExprLexer.DIVIDE)).toEqual(true);
            expect(candidates.tokens.has(ExprLexer.OPEN_PAR)).toEqual(true);
        });

        it("Typical setup", () => {
            const inputStream = CharStream.fromString("var c = a + b()");
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.addErrorListener(errorListener);
            parser.expression();
            expect(errorListener.errorCount).toEqual(0);

            const core = new CodeCompletionCore(parser);

            // Ignore operators and the generic ID token.
            core.ignoredTokens = new Set([
                ExprLexer.ID, ExprLexer.PLUS, ExprLexer.MINUS, ExprLexer.MULTIPLY, ExprLexer.DIVIDE, ExprLexer.EQUAL,
            ]);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            core.preferredRules = new Set([ExprParser.RULE_functionRef, ExprParser.RULE_variableRef]);

            // 1) At the input start.
            let candidates = core.collectCandidates(0);

            expect(candidates.tokens.size).toEqual(2);
            expect(candidates.tokens.has(ExprLexer.VAR)).toEqual(true);
            expect(candidates.tokens.has(ExprLexer.LET)).toEqual(true);

            expect(candidates.tokens.get(ExprLexer.VAR)).toEqual([ExprLexer.ID, ExprLexer.EQUAL]);
            expect(candidates.tokens.get(ExprLexer.LET)).toEqual([ExprLexer.ID, ExprLexer.EQUAL]);

            // 2) On the variable name ('c').
            candidates = core.collectCandidates(2);
            expect(candidates.tokens.size).toEqual(0);

            // 4) On the equal sign.
            candidates = core.collectCandidates(4);
            expect(candidates.tokens.size).toEqual(0);

            // 5) On the variable reference 'a'.
            candidates = core.collectCandidates(6);
            expect(candidates.tokens.size).toEqual(0);
            expect(candidates.rules.size).toEqual(2);

            // Here we get 2 rule indexes, derived from 2 different IDs possible at this caret position.
            // These are what we told the engine above to be preferred rules for us.
            expect(candidates.rules.size).toEqual(2);
            expect(candidates.rules.get(ExprParser.RULE_functionRef)?.startTokenIndex).toEqual(6);
            expect(candidates.rules.get(ExprParser.RULE_variableRef)?.startTokenIndex).toEqual(6);

            // 6) On the whitespace just after the variable reference 'a' (but it could still be a function reference!).
            candidates = core.collectCandidates(7);
            expect(candidates.tokens.size).toEqual(0);
            expect(candidates.rules.size).toEqual(1);

            // Our function rule should start at the ID reference of token 'a'.
            expect(candidates.rules.get(ExprParser.RULE_functionRef)?.startTokenIndex).toEqual(6);
        });

        it("Recursive preferred rule", () => {
            const inputStream = CharStream.fromString("var c = a + b"); // b is not a function here, but a variable.
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.addErrorListener(errorListener);
            parser.expression();
            expect(errorListener.errorCount).toEqual(0);

            const core = new CodeCompletionCore(parser);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            core.preferredRules = new Set([ExprParser.RULE_simpleExpression]);

            // 1) On the variable reference 'a'.
            let candidates = core.collectCandidates(6);
            expect(candidates.rules.size).toEqual(1);

            // The start token of the simpleExpression rule begins at token 'a'.
            expect(candidates.rules.get(ExprParser.RULE_simpleExpression)?.startTokenIndex).toEqual(6);

            // 2) On the variable reference 'b'.
            core.translateRulesTopDown = false;
            candidates = core.collectCandidates(10);
            expect(candidates.rules.size).toEqual(1);

            // When translateRulesTopDown is false, startTokenIndex should match the start token for the lower index
            // (less specific) rule in the expression, which is 'a'.
            expect(candidates.rules.get(ExprParser.RULE_simpleExpression)?.startTokenIndex).toEqual(6);

            // 3) On the variable reference 'b' topDown preferred rules.
            core.translateRulesTopDown = true;
            candidates = core.collectCandidates(10);
            expect(candidates.rules.size).toEqual(1);

            // When translateRulesTopDown is true, startTokenIndex should match the start token for the higher index
            // (more specific) rule in the expression, which is 'b'.
            expect(candidates.rules.get(ExprParser.RULE_simpleExpression)?.startTokenIndex).toEqual(10);
        });

        it("Candidate rules with different start tokens", () => {
            const inputStream = CharStream.fromString("var c = a + b");
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            const errorListener = new TestErrorListener();
            parser.addErrorListener(errorListener);
            parser.expression();
            expect(errorListener.errorCount).toEqual(0);

            const core = new CodeCompletionCore(parser);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            core.preferredRules = new Set([ExprParser.RULE_assignment, ExprParser.RULE_variableRef]);

            // Return higher index rules first, meaning we could get both assignment and variableRef rules
            // as candidates.
            core.translateRulesTopDown = true;

            // 1) On the token 'var'.
            let candidates = core.collectCandidates(0);
            expect(candidates.rules.size).toEqual(2);

            // The start token of the assignment and variableRef rules begin at token 'var'.
            expect(candidates.rules.get(ExprParser.RULE_assignment)?.startTokenIndex).toEqual(0);
            expect(candidates.rules.get(ExprParser.RULE_variableRef)?.startTokenIndex).toEqual(0);

            // 2) On the variable reference 'a'.
            candidates = core.collectCandidates(6);
            expect(candidates.rules.size).toEqual(2);

            // The start token of the assignment rule begins at token 'var'.
            expect(candidates.rules.get(ExprParser.RULE_assignment)?.startTokenIndex).toEqual(0);

            // The start token of the variableRef rule begins at token 'a'.
            expect(candidates.rules.get(ExprParser.RULE_variableRef)?.startTokenIndex).toEqual(6);
        });
    });
});
