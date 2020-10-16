/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2017 Mike Lischke
 *
 * See LICENSE file for more info.
 */

"use strict";

import * as fs from "fs"
import * as path from "path"

import { expect, assert } from 'chai';
import { ExprParser } from "./ExprParser";
import { ExprLexer } from "./ExprLexer";
import { CPP14Parser } from "./CPP14Parser";
import { CPP14Lexer } from "./CPP14Lexer";

import * as c3 from "../index";

import {
    ANTLRErrorListener,
    ANTLRInputStream,
    CommonToken,
    CommonTokenStream,
    RecognitionException,
    Recognizer,
    Token
} from 'antlr4ts';
import { Override } from "antlr4ts/Decorators";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

// Some helper functions + types to create certain setups.

export class ErrorListener implements ANTLRErrorListener<CommonToken> {
    errorCount = 0;

    @Override
    syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
};

const dummyNode = new TerminalNode(new CommonToken(-2, "Dummy", undefined, 0, 10, 20));

/**
 * Creates a single symbol table setup with a simple base structure:
 *   - [0] classes with [1] methods and [2] fields
 *   - two blocks in each method and 1 variable in each block.
 * In addition to that some global symbols are added ([3] variables, [4] literals).
 * If namespaces are given then the classes are distributed among them in a round-robin fashion.
 */
function createClassSymbolTable(name: string, counts: number[], namespaces?: string[]): c3.SymbolTable {
    let symbolTable = new c3.SymbolTable(name, { allowDuplicateSymbols: false });

    let nsSymbols: (c3.NamespaceSymbol | undefined)[] = [undefined];
    let nsIndex = 0;
    let nsCount = 1;
    if (namespaces && namespaces.length > 0) {
        nsCount = namespaces.length;
        for (let i = 0; i < nsCount; ++i) {
            nsSymbols[i] = symbolTable.addNewNamespaceFromPath(undefined, namespaces[i]);
        }
    }

    for (let i = 0; i < counts[0]; ++i) {
        let classSymbol = symbolTable.addNewSymbolOfType(c3.ClassSymbol, nsSymbols[nsIndex], "class" + i);

        for (let j = 0; j < counts[2]; ++j) {
            let field = symbolTable.addNewSymbolOfType(c3.FieldSymbol, classSymbol, "field" + j);
        }

        for (let j = 0; j < counts[1]; ++j) {
            let method = symbolTable.addNewSymbolOfType(c3.MethodSymbol, classSymbol, "method" + j);

            // Blocks are created and added in an alternative way.
            let block1 = symbolTable.addNewSymbolOfType(c3.BlockSymbol, undefined, "block1"); // Block at top level.
            symbolTable.addNewSymbolOfType(c3.VariableSymbol, block1, "var1", 17, c3.FundamentalType.integerType);
            let block2 = symbolTable.addNewSymbolOfType(c3.BlockSymbol, undefined, "block2");
            let symbol = symbolTable.addNewSymbolOfType(c3.VariableSymbol, block2, "var1", 3.142, c3.FundamentalType.floatType);
            if (j == 1) {
                symbol.context = dummyNode;
            }

            // Now move the blocks from global level to the method.
            method.addSymbol(block1);
            method.addSymbol(block2);
        }

        ++nsIndex;
        if (nsIndex == nsCount)
            nsIndex = 0;
    }

    for (let i = 0; i < counts[3]; ++i) {
        symbolTable.addNewSymbolOfType(c3.VariableSymbol, undefined, "globalVar" + i, 42, c3.FundamentalType.integerType);
    }

    for (let i = 0; i < counts[4]; ++i) {
        symbolTable.addNewSymbolOfType(c3.LiteralSymbol, undefined, "globalConst" + i, "string constant", c3.FundamentalType.stringType);
    }

    return symbolTable;
}

// Begin of the tests.
describe('antlr4-c3:', function () {
    this.slow(1000);

    describe('Symbol table tests:', function () {
        it("Single table base tests", function () {
            let symbolTable = createClassSymbolTable("main", [3, 3, 4, 5, 5]);
            let info = symbolTable.info;
            expect(info.dependencyCount, "Test 1").to.equal(0);
            expect(info.symbolCount, "Test 2").to.equal(13); // 5 + 5 top level symbols + 3 classes.

            try {
                symbolTable.addNewSymbolOfType(c3.VariableSymbol, undefined, "globalVar3");
                assert(false);
            } catch (e) {
                if (e instanceof c3.DuplicateSymbolError) {
                    expect(e.message, "Test 3").to.equal("Attempt to add duplicate symbol 'globalVar3'");
                } else {
                    assert(false, "Test 3");
                }
            }

            let class1 = symbolTable.resolve("class1");
            expect(class1, "Test 4").is.instanceof(c3.ClassSymbol);
            let method2 = (class1 as c3.ClassSymbol).resolve("method2");
            expect(method2, "Test 5").is.instanceof(c3.MethodSymbol);
            let scopes = (method2 as c3.MethodSymbol).directScopes;
            expect(scopes.length, "Test 6").equals(2); // 2 anonymous blocks.
            expect(scopes[0], "Test 7").is.instanceof(c3.ScopedSymbol);

            let block1 = scopes[0] as c3.ScopedSymbol;
            try {
                let duplicateMethod = symbolTable.addNewSymbolOfType(c3.MethodSymbol, undefined, "method2");
                (class1 as c3.ClassSymbol).addSymbol(duplicateMethod); // Must throw.
                assert(false);
            } catch (e) {
                if (e instanceof c3.DuplicateSymbolError) {
                    expect(e.message, "Test 8").to.equal("Attempt to add duplicate symbol 'method2'");
                } else {
                    assert(false);
                }
            }

            let variable = scopes[0].resolve("globalVar3"); // Resolves to the global var 3.
            expect(variable, "Test 9").to.be.instanceof(c3.VariableSymbol);
            expect(variable!.root, "Test 10").to.equal(symbolTable);

            variable = scopes[0].resolve("globalVar3", true); // Try only local vars.
            expect(variable, "Test 11").to.equal(undefined);

            variable = scopes[0].resolve("var1"); // Now resolves to local var.
            expect(variable!.root, "Test 12").to.equal(class1);
            expect(variable!.getParentOfType(c3.MethodSymbol), "Test 13").to.equal(method2);
            expect((class1 as c3.ClassSymbol).getSymbolsOfType(c3.MethodSymbol).length, "Test 14").to.equal(3);
            expect((method2 as c3.MethodSymbol).getSymbolsOfType(c3.ScopedSymbol).length, "Test 15").to.equal(2);
            expect(block1.resolve("class1", false), "Test 16").to.equal(class1);

            let path = variable!.symbolPath;
            expect(path.length, "Test 17").to.equal(5);
            expect(path[0].name, "Test 18").to.equal("var1");
            expect(path[1].name, "Test 19").to.equal("block1");
            expect(path[2].name, "Test 20").to.equal("method2");
            expect(path[3].name, "Test 21").to.equal("class1");
            expect(path[4].name, "Test 22").to.equal("main");

            expect(method2!.qualifiedName(), "Test 23").to.equal("class1.method2");
            expect(method2!.qualifiedName("-", true), "Test 24").to.equal("main-class1-method2");
            expect(variable!.qualifiedName(), "Test 25").to.equal("block1.var1");
            expect(variable!.qualifiedName("#"), "Test 26").to.equal("block1#var1");
            expect(variable!.qualifiedName(".", false, true), "Test 27").to.equal("block1.var1");
            expect(variable!.qualifiedName(".", true, false), "Test 28").to.equal("main.class1.method2.block1.var1");
            expect(variable!.qualifiedName(".", true, true), "Test 29").to.equal("main.class1.method2.block1.var1");

            let allSymbols = symbolTable.getAllNestedSymbols();
            expect(allSymbols.length, "Test 30").to.equal(70);

            let symbolPath = allSymbols[59].qualifiedName(".", true);
            expect(symbolPath, "Test 31").to.equal("main.class2.method2.block2.var1");
            expect(symbolTable.symbolFromPath("main.class2.method2.block2.var1"), "Test 32").to.equal(allSymbols[59]);

            expect(symbolTable, "Test 33").to.equal(symbolTable.symbolTable);
        });

        it("Single table type checks", function () {
            // Create a symbol table with all the symbols we have in the lib and query it for some collections.
            // Start with a standard table containing a class with a single method, a global var and a global literal symbol.
            // Hierarchy is not really important here.
            let symbolTable = createClassSymbolTable("main", [1, 1, 1, 1, 1]);

            // Now add all the other symbols.
            let alias = symbolTable.addNewSymbolOfType(c3.TypeAlias, undefined, "newBool", c3.FundamentalType.boolType);
            let routine = symbolTable.addNewSymbolOfType(c3.RoutineSymbol, undefined, "routine1", c3.FundamentalType.integerType);
            let field = symbolTable.addNewSymbolOfType(c3.FieldSymbol, undefined, "field1", c3.FundamentalType.floatType);

        });

        it("Single table stress test", function () {
            let symbolTable = createClassSymbolTable("table", [300, 30, 20, 1000, 1000]);
            expect(symbolTable.getAllNestedSymbols().length, "Test 1").to.equal(53300);
            expect(symbolTable.getNestedSymbolsOfType(c3.ClassSymbol).length, "Test 2").to.equal(300);
            expect(symbolTable.getNestedSymbolsOfType(c3.MethodSymbol).length, "Test 3").to.equal(9000);
            expect(symbolTable.getNestedSymbolsOfType(c3.ScopedSymbol).length, "Test 4").to.equal(27300);
            expect(symbolTable.getNestedSymbolsOfType(c3.VariableSymbol).length, "Test 5").to.equal(25000); // Includes class fields.
            expect(symbolTable.getNestedSymbolsOfType(c3.FieldSymbol).length, "Test 6").to.equal(6000);
            expect(symbolTable.getNestedSymbolsOfType(c3.LiteralSymbol).length, "Test 7").to.equal(1000);
        }).timeout(20000);

        it("Single table namespace tests", function () {
            let symbolTable = createClassSymbolTable("main", [30, 10, 10, 100, 100], ["ns1", "ns2", "ns1.ns3.ns5", "ns1.ns4.ns6.ns8"]);

            let namespaces = symbolTable.getNestedSymbolsOfType(c3.NamespaceSymbol);
            expect(namespaces.length, "Test 1").to.equal(7);

            // This call does a depth-first search, so all the deeper nested namespaces appear at the lower indexes
            // and the less nested ones at the end of the list.
            let methods = symbolTable.getNestedSymbolsOfType(c3.MethodSymbol);
            expect(methods.length, "Test 2").to.equal(300);
            expect(methods[2].qualifiedName(".", true), "Test 3").to.equal("main.ns1.ns3.ns5.class2.method2");
            expect(methods[299].qualifiedName(".", true), "Test 4").to.equal("main.ns2.class29.method9");
        });

        it("Multi table tests", function () {
            // Interactions between linked symbol tables. We use 5 tables here:
            // - the main table as in the single table tests.
            // - a system functions table
            // - a table with variables, which has 2 other dependencies (functions in same namespace as system
            //   functions and one in a different namespace)
            let main = createClassSymbolTable("main", [30, 10, 10, 100, 100]);
            let systemFunctions = new c3.SymbolTable("system functions", { allowDuplicateSymbols: false });
            let namespace1 = systemFunctions.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (let i = 0; i < 333; ++i) {
                systemFunctions.addNewSymbolOfType(c3.RoutineSymbol, namespace1, "func" + i);
            }
            main.addDependencies(systemFunctions);

            let libFunctions = new c3.SymbolTable("library functions", { allowDuplicateSymbols: false });
            let namespace2 = libFunctions.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns2");
            for (let i = 0; i < 444; ++i) {
                // Same names as in the system functions but different namespace.
                libFunctions.addNewSymbolOfType(c3.RoutineSymbol, namespace2, "func" + i);
            }

            let libVariables = new c3.SymbolTable("library variables", { allowDuplicateSymbols: false });

            // Like for the system functions.
            let namespace3 = libVariables.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (let i = 0; i < 555; ++i) {
                libVariables.addNewSymbolOfType(c3.VariableSymbol, namespace3, "var" + i);
            }

            let libFunctions2 = new c3.SymbolTable("library functions 2", { allowDuplicateSymbols: false });
            let namespace4 = libFunctions2.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (let i = 0; i < 666; ++i) {
                // Same names as in the system functions but different namespace.
                libFunctions2.addNewSymbolOfType(c3.RoutineSymbol, namespace4, "func" + i);
            }

            libVariables.addDependencies(libFunctions, libFunctions2);
            main.addDependencies(systemFunctions, libVariables);

            // Note: namespaces are handled in the context of their parent.
            // Symbols in a namespace/module/library are accessible from their parent.
            expect(main.getAllSymbols().size, "Test 1").to.equal(2232);
            expect(systemFunctions.getAllSymbols().size, "Test 2").to.equal(334); // System functions alone + the namespace.
            expect(libFunctions.getAllSymbols().size, "Test 3").to.equal(445); // Lib functions alone + the namespace.
            expect(libVariables.getAllSymbols().size, "Test 4").to.equal(1668); // Lib variables + lib functions + namespaces.
            expect(libFunctions2.getAllSymbols().size, "Test 5").to.equal(667); // Lib functions in "ns1" only + the namespace.
        });

        it("Symbol navigation", function() {
            let symbolTable = createClassSymbolTable("main", [10, 10, 10, 20, 34], []);

            let namespaces = symbolTable.getNestedSymbolsOfType(c3.NamespaceSymbol);
            expect(namespaces.length, "Test 1").to.equal(0);

            let variables = symbolTable.getNestedSymbolsOfType(c3.VariableSymbol);
            expect(variables.length, "Test 2").to.equal(320);

            // A class member.
            let field7 = variables[217];
            expect(field7, "Test 3").not.to.be.undefined;
            expect(field7.firstSibling, "Test 4").to.equal(variables[210]);
            expect(field7.lastSibling.name, "Test 5").to.equal("method9");
            expect(field7.previousSibling, "Test 6").to.equal(variables[216]);
            expect(field7.nextSibling, "Test 7").to.equal(variables[218]);

            expect(field7.firstSibling.firstSibling.firstSibling.firstSibling, "Test 8").to.equal(field7.firstSibling);
            expect(field7.lastSibling.lastSibling.lastSibling.lastSibling, "Test 9").to.equal(field7.lastSibling);
            expect(field7.firstSibling.lastSibling.firstSibling.firstSibling, "Test 10").to.equal(field7.firstSibling);
            expect(field7.lastSibling.firstSibling.firstSibling.lastSibling, "Test 11").to.equal(field7.lastSibling);

            expect(field7.parent, "Test 12").to.be.instanceof(c3.ClassSymbol);

            let parent7 = field7.parent as c3.ClassSymbol;
            expect(parent7.indexOfChild(field7), "Test 13").to.equal(7);
            expect(parent7.firstChild, "Test 14").to.equal(field7.firstSibling);
            expect(parent7.lastChild, "Test 15").to.equal(field7.lastSibling);

            // A local variable (a single one in a block).
            let var1 = variables[286];
            expect(var1, "Test 16").not.to.be.undefined;
            expect(var1.firstSibling, "Test 17").to.equal(var1);
            expect(var1.lastSibling.name, "Test 18").to.equal("var1");
            expect(var1.previousSibling, "Test 19").to.be.undefined;
            expect(var1.nextSibling, "Test 20").to.undefined;

            expect(var1.firstSibling.firstSibling.firstSibling.firstSibling, "Test 21").to.equal(var1.firstSibling);
            expect(var1.lastSibling.lastSibling.lastSibling.lastSibling, "Test 22").to.equal(var1.lastSibling);
            expect(var1.firstSibling.lastSibling.firstSibling.firstSibling, "Test 23").to.equal(var1.firstSibling);
            expect(var1.lastSibling.firstSibling.firstSibling.lastSibling, "Test 24").to.equal(var1.lastSibling);

            let block1 = var1.parent as c3.ScopedSymbol;
            expect(block1.indexOfChild(field7), "Test 25").to.equal(-1);
            expect(block1.indexOfChild(var1), "Test 26").to.equal(0);
            expect(block1.firstChild, "Test 27").to.equal(var1.firstSibling);
            expect(block1.lastChild, "Test 28").to.equal(var1.lastSibling);

            // A global variable (a single one in a block).
            let var15 = variables[315];
            expect(var15, "Test 29").not.to.be.undefined;
            expect(var15.firstSibling, "Test 30").to.equal(symbolTable.firstChild);
            expect(var15.lastSibling.name, "Test 31").to.equal("globalConst33");
            expect(var15.previousSibling, "Test 32").to.equal(variables[314]);
            expect(var15.nextSibling, "Test 33").to.equal(variables[316]);

            expect(var15.parent, "Test 34").to.be.instanceof(c3.SymbolTable);

            let st1 = var15.parent as c3.ScopedSymbol;
            expect(st1.indexOfChild(var15), "Test 35").to.equal(25);
            expect(st1.firstChild, "Test 36").to.equal(var15.firstSibling);
            expect(st1.lastChild, "Test 37").to.equal(var15.lastSibling);

            let next = variables[284].next;
            expect(next, "Test 38").not.to.be.undefined;
            expect(next!.qualifiedName(".", true), "Test 39").to.equal("main.class9.method2.block1.var1");

            let symbol = symbolTable.symbolWithContext(dummyNode);
            expect(symbol, "Test 40").not.to.be.undefined;
            expect(symbol!.qualifiedName(".", true), "Test 41").to.equal("main.class0.method1.block2.var1");
        });
    });

    describe('Simple expression parser:', function () {
        it("Most simple setup", function () {
            // No customization happens here, so the c3 engine only returns lexer tokens.
            let inputStream = new ANTLRInputStream("var c = a + b()");
            let lexer = new ExprLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);

            let parser = new ExprParser(tokenStream);
            let errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            let tree = parser.expression();
            expect(errorListener.errorCount, "Test 1").equals(0);

            let core = new c3.CodeCompletionCore(parser);

            // 1) At the input start.
            let candidates = core.collectCandidates(0);

            expect(candidates.tokens.size, "Test 2").to.equal(3);
            expect(candidates.tokens.has(ExprLexer.VAR), "Test 3").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.LET), "Test 4").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.ID), "Test 5").to.equal(true);

            expect(candidates.tokens.get(ExprLexer.VAR), "Test 6").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);
            expect(candidates.tokens.get(ExprLexer.LET), "Test 7").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);
            expect(candidates.tokens.get(ExprLexer.ID), "Test 8").to.eql([]);

            // 2) On the first whitespace. In real implementations you would do some additional checks where in the whitespace
            //    the caret is, as the outcome is different depending on that position.
            candidates = core.collectCandidates(1);
            expect(candidates.tokens.size, "Test 9").to.equal(1);
            expect(candidates.tokens.has(ExprLexer.ID), "Test 10").to.equal(true);

            // 3) On the variable name ('c').
            candidates = core.collectCandidates(2);
            expect(candidates.tokens.size, "Test 11").to.equal(1);
            expect(candidates.tokens.has(ExprLexer.ID), "Test 12").to.equal(true);

            // 4) On the equal sign (ignoring whitespace positions from now on).
            candidates = core.collectCandidates(4);
            expect(candidates.tokens.size, "Test 13").to.equal(1);
            expect(candidates.tokens.has(ExprLexer.EQUAL), "Test 14").to.equal(true);

            // 5) On the variable reference 'a'. But since we have not configure the c3 engine to return us var refs
            //    (or function refs for that matter) we only get an ID here.
            candidates = core.collectCandidates(6);
            expect(candidates.tokens.size, "Test 15").to.equal(1);
            expect(candidates.tokens.has(ExprLexer.ID), "Test 16").to.equal(true);

            // 6) On the '+' operator. Usually you would not show operators as candidates, but we have not set up the c3 engine
            //    yet to not return them.
            candidates = core.collectCandidates(8);
            expect(candidates.tokens.size, "Test 17").to.equal(5);
            expect(candidates.tokens.has(ExprLexer.PLUS), "Test 18").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.MINUS), "Test 19").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.MULTIPLY), "Test 20").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.DIVIDE), "Test 21").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.OPEN_PAR), "Test 22").to.equal(true);
        });

        it("Typical setup", function () {
            let inputStream = new ANTLRInputStream("var c = a + b");
            let lexer = new ExprLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);

            let parser = new ExprParser(tokenStream);
            let errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            let tree = parser.expression();
            expect(errorListener.errorCount, "Test 1").equals(0);

            let core = new c3.CodeCompletionCore(parser);

            // Ignore operators and the generic ID token.
            core.ignoredTokens = new Set([ExprLexer.ID, ExprLexer.PLUS, ExprLexer.MINUS, ExprLexer.MULTIPLY, ExprLexer.DIVIDE, ExprLexer.EQUAL]);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            core.preferredRules = new Set([ExprParser.RULE_functionRef, ExprParser.RULE_variableRef]);

            // 1) At the input start.
            let candidates = core.collectCandidates(0);

            expect(candidates.tokens.size, "Test 2").to.equal(2);
            expect(candidates.tokens.has(ExprLexer.VAR), "Test 3").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.LET), "Test 4").to.equal(true);

            expect(candidates.tokens.get(ExprLexer.VAR), "Test 5").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);
            expect(candidates.tokens.get(ExprLexer.LET), "Test 6").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);

            // 2) On the variable name ('c').
            candidates = core.collectCandidates(2);
            expect(candidates.tokens.size, "Test 7").to.equal(0);

            // 4) On the equal sign.
            candidates = core.collectCandidates(4);
            expect(candidates.tokens.size, "Test 8").to.equal(0);

            // 5) On the variable reference 'a'.
            candidates = core.collectCandidates(6);
            expect(candidates.tokens.size, "Test 9").to.equal(0);
            expect(candidates.rules.size, "Test 10").to.equal(2);

            // Here we get 2 rule indexes, derived from 2 different IDs possible at this caret position.
            // These are what we told the engine above to be preferred rules for us.
            expect(candidates.rules.size, "Test 11").to.equal(2);
            expect(candidates.rules.get(ExprParser.RULE_functionRef)?.startTokenIndex, "Test 12").to.equal(6);
            expect(candidates.rules.get(ExprParser.RULE_variableRef)?.startTokenIndex, "Test 13").to.equal(6);

            // 6) On the whitespace just after the variable reference 'a' (but it could still be a function reference!)
            candidates = core.collectCandidates(7);
            expect(candidates.tokens.size, "Test 14").to.equal(0);
            expect(candidates.rules.size, "Test 15").to.equal(1);
            // Our function rule should start at the ID reference of token 'a'
            expect(candidates.rules.get(ExprParser.RULE_functionRef)?.startTokenIndex, "Test 16").to.equal(6);
        });

        it('Recursive preferred rule', function() {
            let inputStream = new ANTLRInputStream("var c = a + b");
            let lexer = new ExprLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);

            let parser = new ExprParser(tokenStream);
            let errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            let tree = parser.expression();
            expect(errorListener.errorCount, "Test 1").equals(0);

            let core = new c3.CodeCompletionCore(parser);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            core.preferredRules = new Set([ExprParser.RULE_simpleExpression]);

            // 1) On the variable reference 'a'.
            let candidates = core.collectCandidates(6);
            expect(candidates.rules.size, "Test 2").to.equal(1);
            // The start token of the simpleExpression rule begins at token 'a'
            expect(candidates.rules.get(ExprParser.RULE_simpleExpression)?.startTokenIndex, "Test 3").to.equal(6);

            // 2) On the variable reference 'b'.
            core.translateRulesTopDown = false;
            candidates = core.collectCandidates(10);
            expect(candidates.rules.size, "Test 4").to.equal(1);

            // When translateRulesTopDown is false, startTokenIndex should match the start token for the lower index
            // (less specific) rule in the expression, which is 'a'.
            expect(candidates.rules.get(ExprParser.RULE_simpleExpression)?.startTokenIndex, "Test 5").to.equal(6);

            // 3) On the variable reference 'b' topDown preferred rules.
            core.translateRulesTopDown = true;
            candidates = core.collectCandidates(10);
            expect(candidates.rules.size, "Test 6").to.equal(1);

            // When translateRulesTopDown is true, startTokenIndex should match the start token for the higher index
            // (more specific) rule in the expression, which is 'b'.
            expect(candidates.rules.get(ExprParser.RULE_simpleExpression)?.startTokenIndex, "Test 7").to.equal(10);
        })

        it('Candidate rules with different start tokens', () => {
            let inputStream = new ANTLRInputStream("var c = a + b");
            let lexer = new ExprLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);

            let parser = new ExprParser(tokenStream);
            let errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            let tree = parser.expression();
            expect(errorListener.errorCount, "Test 1").equals(0);

            let core = new c3.CodeCompletionCore(parser);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            core.preferredRules = new Set([ExprParser.RULE_assignment, ExprParser.RULE_variableRef]);

            // Return higher index rules first, meaning we could get both assignment and variableRef rules as candidates
            core.translateRulesTopDown = true;

            // 1) On the token 'var'.
            let candidates = core.collectCandidates(0);
            expect(candidates.rules.size, "Test 2").to.equal(2);
            // // The start token of the assignment and variableRef rules begin at token 'var'
            expect(candidates.rules.get(ExprParser.RULE_assignment)?.startTokenIndex, "Test 3").to.equal(0);
            expect(candidates.rules.get(ExprParser.RULE_variableRef)?.startTokenIndex, "Test 4").to.equal(0);

            // 2) On the variable reference 'a'.
            candidates = core.collectCandidates(6);
            expect(candidates.rules.size, "Test 5").to.equal(2);
            // The start token of the assignment rule begins at token 'var'
            expect(candidates.rules.get(ExprParser.RULE_assignment)?.startTokenIndex, "Test 6").to.equal(0);
            // The start token of the variableRef rule begins at token 'a'
            expect(candidates.rules.get(ExprParser.RULE_variableRef)?.startTokenIndex, "Test 7").to.equal(6);
        })
    });

    describe('C++14 parser:', function () {
        it('Simple C++ example', function () {
            // We are trying here to get useful code completion candidates without adjusting the grammar in any way.
            // We use the grammar as downloaded from the ANTLR grammar directory and set up the c3 engine
            // instead in a way that still returns useful info. This limits us somewhat.
            let inputStream = new ANTLRInputStream("class A {\n" +
                "public:\n" +
                "  void test() {\n" +
                "  }\n" +
                "};\n"
            );
            let lexer = new CPP14Lexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);

            /*
            tokenStream.fill();
            for (let token of tokenStream.getTokens())
              console.log(token.toString());
            */

            let parser = new CPP14Parser(tokenStream);
            let errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            let tree = parser.translationunit();
            expect(errorListener.errorCount, "Test 1").equals(0);

            let core = new c3.CodeCompletionCore(parser);

            // Ignore operators and the generic ID token.
            core.ignoredTokens = new Set([
                CPP14Lexer.Identifier,
                CPP14Lexer.LeftParen, CPP14Lexer.RightParen,
                CPP14Lexer.Operator, CPP14Lexer.Star, CPP14Lexer.And, CPP14Lexer.AndAnd,
                CPP14Lexer.LeftBracket,
                CPP14Lexer.Ellipsis,
                CPP14Lexer.Doublecolon, CPP14Lexer.Semi,
            ]);

            // For a C++ grammar you can of course get many candidates of all kind. For this test we focus only on a few,
            // namely namespace, class and variable references. For variable references there is no own rule, only an
            // "idexpression" as part of the primary expression.
            core.preferredRules = new Set([CPP14Parser.RULE_classname, CPP14Parser.RULE_namespacename, CPP14Parser.RULE_idexpression]);

            // 1) At the input start.
            let candidates = core.collectCandidates(0);

            expect(candidates.tokens.size, "Test 2").to.equal(40);
            expect(candidates.tokens.has(CPP14Lexer.Extern), "Test 3").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Mutable), "Test 4").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Register), "Test 5").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Static), "Test 6").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Thread_local), "Test 7").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Decltype), "Test 8").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Char), "Test 9").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Char16), "Test 10").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Char32), "Test 11").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Wchar), "Test 12").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Bool), "Test 13").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Short), "Test 14").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Int), "Test 15").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Long), "Test 16").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Signed), "Test 17").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Unsigned), "Test 18").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Float), "Test 19").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Double), "Test 20").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Void), "Test 21").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Auto), "Test 22").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Class), "Test 23").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Struct), "Test 24").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Union), "Test 25").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Enum), "Test 26").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Typename), "Test 27").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Const), "Test 28").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Volatile), "Test 29").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Explicit), "Test 30").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Inline), "Test 31").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Virtual), "Test 32").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Friend), "Test 33").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Typedef), "Test 34").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Constexpr), "Test 35").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Alignas), "Test 36").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Asm), "Test 37").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Namespace), "Test 38").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Using), "Test 39").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Static_assert), "Test 40").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Template), "Test 41").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.EOF), "Test 42").to.equal(true);

            expect(candidates.tokens.has(CPP14Lexer.Identifier), "Test 43").to.equal(false);

            // The returned list can contain more than one entry for a particular rule, if there are multiple
            // parser rule paths leading to it.
            expect(candidates.rules.size, "Test 44").to.equal(3);
            expect(candidates.rules.get(CPP14Parser.RULE_namespacename)?.ruleList, "Test 45").to.eql([
                CPP14Parser.RULE_translationunit,
                CPP14Parser.RULE_declarationseq,
                CPP14Parser.RULE_declaration,
                CPP14Parser.RULE_blockdeclaration,
                CPP14Parser.RULE_simpledeclaration,
                CPP14Parser.RULE_declspecifierseq,
                CPP14Parser.RULE_declspecifier,
                CPP14Parser.RULE_typespecifier,
                CPP14Parser.RULE_trailingtypespecifier,
                CPP14Parser.RULE_simpletypespecifier,
                CPP14Parser.RULE_nestednamespecifier,
            ]);
            expect(candidates.rules.get(CPP14Parser.RULE_classname)?.ruleList, "Test 46").to.eql([
                CPP14Parser.RULE_translationunit,
                CPP14Parser.RULE_declarationseq,
                CPP14Parser.RULE_declaration,
                CPP14Parser.RULE_blockdeclaration,
                CPP14Parser.RULE_simpledeclaration,
                CPP14Parser.RULE_declspecifierseq,
                CPP14Parser.RULE_declspecifier,
                CPP14Parser.RULE_typespecifier,
                CPP14Parser.RULE_trailingtypespecifier,
                CPP14Parser.RULE_simpletypespecifier,
                CPP14Parser.RULE_nestednamespecifier,
                CPP14Parser.RULE_typename,
            ]);

            // 2) Within the method body.
            //    Note when counting token indexes: the C++14 grammar skips all whitespaces, hence there are no tokens for them.
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
                CPP14Parser.RULE_conditionalexpression,
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

            expect(candidates.rules.size, "Test 47").to.equal(1);
            expect(candidates.rules.get(CPP14Parser.RULE_idexpression)?.ruleList, "Test 48").to.eql(idexpressionStack);

            // We should receive more specific rules when translating top down.
            core.translateRulesTopDown = true;
            candidates = core.collectCandidates(10);

            expect(candidates.rules.size, "Test 49").to.equal(3);
            expect(candidates.rules.get(CPP14Parser.RULE_idexpression)?.ruleList, "Test 50").to.eql(idexpressionStack);
            expect(candidates.rules.get(CPP14Parser.RULE_classname)?.ruleList, "Test 51").to.eql([
                ...idexpressionStack,
                CPP14Parser.RULE_idexpression,
                CPP14Parser.RULE_qualifiedid,
                CPP14Parser.RULE_nestednamespecifier,
                CPP14Parser.RULE_typename,
            ]);
            expect(candidates.rules.get(CPP14Parser.RULE_namespacename)?.ruleList, "Test 52").to.eql([
                ...idexpressionStack,
                CPP14Parser.RULE_idexpression,
                CPP14Parser.RULE_qualifiedid,
                CPP14Parser.RULE_nestednamespecifier,
            ]);

            // We are starting a primary expression in a function body, so everything related to expressions and control flow is allowed here.
            // We only check for a few possible keywords.
            expect(candidates.tokens.size, "Test 53").to.equal(81);
            expect(candidates.tokens.has(CPP14Lexer.If), "Test 54").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.This), "Test 55").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.New), "Test 56").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Case), "Test 57").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.While), "Test 58").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Throw), "Test 59").to.equal(true);

            expect(candidates.tokens.has(CPP14Lexer.Override), "Test 60").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Export), "Test 61").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Private), "Test 62").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Protected), "Test 63").to.equal(false);
        }).timeout(5000);

        it('Simple C++ example with errors in input', function () {
            let inputStream = new ANTLRInputStream("class A {\n" +
                "public:\n" +
                "  void test() {\n" +
                "    if ()" +
                "  }\n" +
                "};\n"
            );
            let lexer = new CPP14Lexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);

            let parser = new CPP14Parser(tokenStream);
            parser.removeErrorListeners();
            let errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            let tree = parser.translationunit();
            expect(errorListener.errorCount, "Test 1").equals(3);

            let core = new c3.CodeCompletionCore(parser);

            // Ignore operators and the generic ID token.
            core.ignoredTokens = new Set([
                CPP14Lexer.Identifier,
                //CPP14Lexer.LeftParen, CPP14Lexer.RightParen, Let parentheses show up in this test
                CPP14Lexer.Operator, CPP14Lexer.Star, CPP14Lexer.And, CPP14Lexer.AndAnd,
                CPP14Lexer.LeftBracket,
                CPP14Lexer.Ellipsis,
                CPP14Lexer.Doublecolon, CPP14Lexer.Semi,
            ]);

            core.preferredRules = new Set([CPP14Parser.RULE_classname, CPP14Parser.RULE_namespacename, CPP14Parser.RULE_idexpression]);

            core.showDebugOutput = false;
            core.showRuleStack = false;
            let candidates = core.collectCandidates(11); // At the opening parenthesis.

            expect(candidates.tokens.size, "Test 2").to.equal(1);
            expect(candidates.tokens.has(CPP14Lexer.LeftParen), "Test 3").to.equal(true);

            candidates = core.collectCandidates(12); // At the closing parenthesis -> again everything in an expression allowed (no control flow this time, tho).

            expect(candidates.tokens.size, "Test 4").to.equal(64);
            expect(candidates.tokens.has(CPP14Lexer.If), "Test 5").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.This), "Test 6").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.New), "Test 7").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Case), "Test 8").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.While), "Test 9").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Throw), "Test 10").to.equal(true);

            expect(candidates.tokens.has(CPP14Lexer.Override), "Test 11").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Export), "Test 12").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Private), "Test 13").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Protected), "Test 14").to.equal(false);

            candidates = core.collectCandidates(13); // After the error position -> no suggestions.
            expect(candidates.tokens.size, "Test 15").to.equal(0);
            expect(candidates.rules.size, "Test 16").to.equal(0);
        });

        it('Real C++ file', function () {
            this.slow(10000);

            let source = fs.readFileSync(path.join(__dirname, "../../test/Parser.cpp")).toString();
            let inputStream = new ANTLRInputStream(source);
            let lexer = new CPP14Lexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);

            /*
            tokenStream.fill();
            for (let token of tokenStream.getTokens())
              console.log(token.toString());
            */

            let parser = new CPP14Parser(tokenStream);
            let errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            let tree = parser.translationunit();
            expect(errorListener.errorCount, "Test 1").equals(0);

            let core = new c3.CodeCompletionCore(parser);

            // Ignore operators and the generic ID token.
            core.ignoredTokens = new Set([
                CPP14Lexer.Identifier,
                CPP14Lexer.LeftParen, CPP14Lexer.RightParen,
                CPP14Lexer.Operator, CPP14Lexer.Star, CPP14Lexer.And, CPP14Lexer.AndAnd,
                CPP14Lexer.LeftBracket,
                CPP14Lexer.Ellipsis,
                CPP14Lexer.Doublecolon, CPP14Lexer.Semi,
            ]);

            core.preferredRules = new Set([CPP14Parser.RULE_classname, CPP14Parser.RULE_namespacename, CPP14Parser.RULE_idexpression]);

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
                CPP14Parser.RULE_expressionstatement,
                CPP14Parser.RULE_expression,
                CPP14Parser.RULE_assignmentexpression,
                CPP14Parser.RULE_conditionalexpression,
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

            expect(candidates.rules.size, "Test 47").to.equal(1);
            expect(candidates.rules.get(CPP14Parser.RULE_idexpression)?.ruleList, "Test 48").to.eql(idexpressionStack);

            // We should receive more specific rules when translating top down.
            core.translateRulesTopDown = true;
            candidates = core.collectCandidates(3469);

            expect(candidates.rules.size, "Test 49").to.equal(3);
            expect(candidates.rules.get(CPP14Parser.RULE_idexpression)?.ruleList, "Test 50").to.eql(idexpressionStack);
            expect(candidates.rules.get(CPP14Parser.RULE_classname)?.ruleList, "Test 51").to.eql([
                ...idexpressionStack,
                CPP14Parser.RULE_idexpression,
                CPP14Parser.RULE_qualifiedid,
                CPP14Parser.RULE_nestednamespecifier,
                CPP14Parser.RULE_typename,
            ]);
            expect(candidates.rules.get(CPP14Parser.RULE_namespacename)?.ruleList, "Test 52").to.eql([
                ...idexpressionStack,
                CPP14Parser.RULE_idexpression,
                CPP14Parser.RULE_qualifiedid,
                CPP14Parser.RULE_nestednamespecifier,
            ]);

            // We are starting a primary expression in a function body, so everything related to expressions and control flow is allowed here.
            // We only check for a few possible keywords.
            expect(candidates.tokens.size, "Test 53").to.equal(81);
            expect(candidates.tokens.has(CPP14Lexer.If), "Test 54").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.This), "Test 55").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.New), "Test 56").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Case), "Test 57").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.While), "Test 58").to.equal(true);
            expect(candidates.tokens.has(CPP14Lexer.Throw), "Test 59").to.equal(true);

            expect(candidates.tokens.has(CPP14Lexer.Override), "Test 60").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Export), "Test 61").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Private), "Test 62").to.equal(false);
            expect(candidates.tokens.has(CPP14Lexer.Protected), "Test 63").to.equal(false);
        }).timeout(60000);
    });


});
