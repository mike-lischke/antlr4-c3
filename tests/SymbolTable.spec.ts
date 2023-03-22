/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2023 Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { ExprParser } from "./generated/ExprParser";
import { ExprLexer } from "./generated/ExprLexer";

import * as c3 from "../index";

import {
    ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token,
} from "antlr4ts";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

// Some helper functions + types to create certain setups.

class ErrorListener implements ANTLRErrorListener<CommonToken> {
    public errorCount = 0;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
}

const dummyNode = new TerminalNode(new CommonToken(-2, "Dummy", undefined, 0, 10, 20));

/**
 * Creates a single symbol table setup with a simple base structure:
 *   - [0] classes and interfaces, with [1] methods and [2] fields
 *   - two blocks in each method and 1 variable in each block.
 * In addition to that some global symbols are added ([3] variables, [4] literals).
 * If namespaces are given then the classes are distributed among them in a round-robin fashion.
 *
 * @param name The name of the new symbol table.
 * @param counts An array containing the numbers for the objects to create.
 * @param namespaces A list of namespace names to create.
 * @returns A promise resolving to the created symbol table.
 */
const createClassSymbolTable = async (name: string, counts: number[],
    namespaces?: string[]): Promise<c3.SymbolTable> => {
    const symbolTable = new c3.SymbolTable(name, { allowDuplicateSymbols: false });

    const nsSymbols: Array<c3.NamespaceSymbol | undefined> = [undefined];
    let nsIndex = 0;
    let nsCount = 1;
    if (namespaces && namespaces.length > 0) {
        nsCount = namespaces.length;
        for (let i = 0; i < nsCount; ++i) {
            nsSymbols[i] = await symbolTable.addNewNamespaceFromPath(undefined, namespaces[i]);
        }
    }

    for (let i = 0; i < counts[0]; ++i) {
        const classSymbol = symbolTable.addNewSymbolOfType(c3.ClassSymbol, nsSymbols[nsIndex], `class${i}`, [], []);
        const interfaceSymbol = symbolTable.addNewSymbolOfType(c3.InterfaceSymbol, undefined, `interface${i}`, []);

        for (let j = 0; j < counts[2]; ++j) {
            symbolTable.addNewSymbolOfType(c3.FieldSymbol, classSymbol, `field${j}`);
            symbolTable.addNewSymbolOfType(c3.FieldSymbol, interfaceSymbol, `field${j}`);
        }

        for (let j = 0; j < counts[1]; ++j) {
            const method = symbolTable.addNewSymbolOfType(c3.MethodSymbol, classSymbol, `method${j}`);
            symbolTable.addNewSymbolOfType(c3.MethodSymbol, interfaceSymbol, `method${j}`);

            // Blocks are created and added in an alternative way (only for classes).
            const block1 = symbolTable.addNewSymbolOfType(c3.BlockSymbol, undefined, "block1"); // Block at top level.
            symbolTable.addNewSymbolOfType(c3.VariableSymbol, block1, "var1", 17, c3.FundamentalType.integerType);
            const block2 = symbolTable.addNewSymbolOfType(c3.BlockSymbol, undefined, "block2");
            const symbol = symbolTable.addNewSymbolOfType(c3.VariableSymbol, block2, "var1", 3.142,
                c3.FundamentalType.floatType);
            if (j === 1) {
                symbol.context = dummyNode;
            }

            // Now move the blocks from global level to the method.
            method.addSymbol(block1);
            method.addSymbol(block2);
        }

        ++nsIndex;
        if (nsIndex === nsCount) { nsIndex = 0; }
    }

    for (let i = 0; i < counts[3]; ++i) {
        symbolTable.addNewSymbolOfType(c3.VariableSymbol, undefined, `globalVar${i}`, 42,
            c3.FundamentalType.integerType);
    }

    for (let i = 0; i < counts[4]; ++i) {
        symbolTable.addNewSymbolOfType(c3.LiteralSymbol, undefined, `globalConst${i}`, "string constant",
            c3.FundamentalType.stringType);
    }

    return symbolTable;
};

// Begin of the tests.
describe("antlr4-c3:", () => {
    describe("Symbol table tests:", () => {
        it("Single table base tests", async () => {
            const symbolTable = await createClassSymbolTable("main", [3, 3, 4, 5, 5]);
            const info = symbolTable.info;
            expect(info.dependencyCount).toEqual(0);
            expect(info.symbolCount).toEqual(16); // 5 + 5 top level symbols + 3 classes + 3 interfaces.

            try {
                symbolTable.addNewSymbolOfType(c3.VariableSymbol, undefined, "globalVar3");
                fail();
            } catch (e) {
                if (e instanceof c3.DuplicateSymbolError) {
                    expect(e.message).toEqual("Attempt to add duplicate symbol 'globalVar3'");
                } else {
                    fail();
                }
            }

            const class1 = await symbolTable.resolve("class1");
            expect(class1).toBeInstanceOf(c3.ClassSymbol);
            expect(class1).toBeInstanceOf(c3.ClassSymbol);
            const method2 = await (class1 as c3.ClassSymbol).resolve("method2");
            expect(method2).toBeInstanceOf(c3.MethodSymbol);
            const scopes = await (method2 as c3.MethodSymbol).directScopes;
            expect(scopes.length).toEqual(2); // 2 anonymous blocks.
            expect(scopes[0]).toBeInstanceOf(c3.ScopedSymbol);

            const block1 = scopes[0];
            try {
                const duplicateMethod = symbolTable.addNewSymbolOfType(c3.MethodSymbol, undefined, "method2");
                (class1 as c3.ClassSymbol).addSymbol(duplicateMethod); // Must throw.
                fail();
            } catch (e) {
                if (e instanceof c3.DuplicateSymbolError) {
                    expect(e.message).toEqual("Attempt to add duplicate symbol 'method2'");
                } else {
                    fail();
                }
            }

            let variable = await scopes[0].resolve("globalVar3"); // Resolves to the global var 3.
            expect(variable).toBeInstanceOf(c3.VariableSymbol);
            expect(variable!.root).toEqual(symbolTable);

            variable = await scopes[0].resolve("globalVar3", true); // Try only local vars.
            expect(variable).toEqual(undefined);

            variable = await scopes[0].resolve("var1"); // Now resolves to local var.
            expect(variable!.root).toEqual(class1);
            expect(variable!.getParentOfType(c3.MethodSymbol)).toEqual(method2);

            const methods = await (class1 as c3.ClassSymbol).getSymbolsOfType(c3.MethodSymbol);
            expect(methods.length).toEqual(3);
            const symbols = await (method2 as c3.MethodSymbol).getSymbolsOfType(c3.ScopedSymbol);
            expect(symbols.length).toEqual(2);
            expect(await block1.resolve("class1", false)).toEqual(class1);

            const symbolPaths = variable!.symbolPath;
            expect(symbolPaths.length).toEqual(5);
            expect(symbolPaths[0].name).toEqual("var1");
            expect(symbolPaths[1].name).toEqual("block1");
            expect(symbolPaths[2].name).toEqual("method2");
            expect(symbolPaths[3].name).toEqual("class1");
            expect(symbolPaths[4].name).toEqual("main");

            expect(method2!.qualifiedName()).toEqual("class1.method2");
            expect(method2!.qualifiedName("-", true)).toEqual("main-class1-method2");
            expect(variable!.qualifiedName()).toEqual("block1.var1");
            expect(variable!.qualifiedName("#")).toEqual("block1#var1");
            expect(variable!.qualifiedName(".", false, true)).toEqual("block1.var1");
            expect(variable!.qualifiedName(".", true, false)).toEqual("main.class1.method2.block1.var1");
            expect(variable!.qualifiedName(".", true, true)).toEqual("main.class1.method2.block1.var1");

            const allSymbols = await symbolTable.getAllNestedSymbols();
            expect(allSymbols.length).toEqual(94);

            const symbolPath = allSymbols[59].qualifiedName(".", true);
            expect(symbolPath).toEqual("main.class1.method2.block1.var1");

            const foundSymbol = symbolTable.symbolFromPath("main.class2.method0.block2.var1");
            expect(foundSymbol).toEqual(allSymbols[78]);

            expect(symbolTable).toEqual(symbolTable.symbolTable);
        });

        it("Single table type checks", async () => {
            // Create a symbol table with all the symbols we have in the lib and query it for some collections.
            // Start with a standard table containing a class with a single method, a global var and a global
            // literal symbol. Hierarchy is not really important here.
            const symbolTable = await createClassSymbolTable("main", [1, 1, 1, 1, 1]);

            // Now add all the other symbols.
            symbolTable.addNewSymbolOfType(c3.TypeAlias, undefined, "newBool", c3.FundamentalType.boolType);
            symbolTable.addNewSymbolOfType(c3.RoutineSymbol, undefined, "routine1", c3.FundamentalType.integerType);
            symbolTable.addNewSymbolOfType(c3.FieldSymbol, undefined, "field1", c3.FundamentalType.floatType);

            // TODO: finish this test.
        });

        it("Single table stress test", async () => {
            const symbolTable = await createClassSymbolTable("table", [300, 30, 20, 1000, 1000]);

            let symbols = await symbolTable.getAllNestedSymbols();
            expect(symbols.length).toEqual(68600);
            symbols = await symbolTable.getNestedSymbolsOfType(c3.ClassSymbol);
            expect(symbols.length).toEqual(300);
            symbols = await symbolTable.getNestedSymbolsOfType(c3.MethodSymbol);
            expect(symbols.length).toEqual(18000);
            symbols = await symbolTable.getNestedSymbolsOfType(c3.ScopedSymbol);
            expect(symbols.length).toEqual(36600);

            // Includes class fields.
            symbols = await symbolTable.getNestedSymbolsOfType(c3.VariableSymbol);
            expect(symbols.length).toEqual(31000);
            symbols = await symbolTable.getNestedSymbolsOfType(c3.FieldSymbol);
            expect(symbols.length).toEqual(12000);
            symbols = await symbolTable.getNestedSymbolsOfType(c3.LiteralSymbol);
            expect(symbols.length).toEqual(1000);
        });

        it("Single table namespace tests", async () => {
            const symbolTable = await createClassSymbolTable("main", [30, 10, 10, 100, 100], ["ns1", "ns2",
                "ns1.ns3.ns5", "ns1.ns4.ns6.ns8"]);

            const namespaces = await symbolTable.getNestedSymbolsOfType(c3.NamespaceSymbol);
            expect(namespaces.length).toEqual(7);

            // This call does a depth-first search, so all the deeper nested namespaces appear at the lower indexes
            // and the less nested ones at the end of the list.
            const methods = await symbolTable.getNestedSymbolsOfType(c3.MethodSymbol);
            expect(methods.length).toEqual(600);
            expect(methods[2].qualifiedName(".", true)).toEqual("main.ns1.ns3.ns5.class2.method2");
            expect(methods[299].qualifiedName(".", true)).toEqual("main.ns2.class29.method9");
        });

        it("Multi table tests", async () => {
            // Interactions between linked symbol tables. We use 5 tables here:
            // - the main table as in the single table tests.
            // - a system functions table
            // - a table with variables, which has 2 other dependencies (functions in same namespace as system
            //   functions and one in a different namespace)
            const main = await createClassSymbolTable("main", [30, 10, 10, 100, 100]);
            const systemFunctions = new c3.SymbolTable("system functions", { allowDuplicateSymbols: false });
            const namespace1 = systemFunctions.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (let i = 0; i < 333; ++i) {
                systemFunctions.addNewSymbolOfType(c3.RoutineSymbol, namespace1, `func${i}`);
            }
            main.addDependencies(systemFunctions);

            const libFunctions = new c3.SymbolTable("library functions", { allowDuplicateSymbols: false });
            const namespace2 = libFunctions.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns2");
            for (let i = 0; i < 444; ++i) {
                // Same names as in the system functions but different namespace.
                libFunctions.addNewSymbolOfType(c3.RoutineSymbol, namespace2, `func${i}`);
            }

            const libVariables = new c3.SymbolTable("library variables", { allowDuplicateSymbols: false });

            // Like for the system functions.
            const namespace3 = libVariables.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (let i = 0; i < 555; ++i) {
                libVariables.addNewSymbolOfType(c3.VariableSymbol, namespace3, `var${i}`);
            }

            const libFunctions2 = new c3.SymbolTable("library functions 2", { allowDuplicateSymbols: false });
            const namespace4 = libFunctions2.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (let i = 0; i < 666; ++i) {
                // Same names as in the system functions but different namespace.
                libFunctions2.addNewSymbolOfType(c3.RoutineSymbol, namespace4, `func${i}`);
            }

            libVariables.addDependencies(libFunctions, libFunctions2);
            main.addDependencies(systemFunctions, libVariables);

            // Note: namespaces are handled in the context of their parent.
            // Symbols in a namespace/module/library are accessible from their parent.
            let allSymbols = await main.getAllSymbols(c3.Symbol);
            expect(allSymbols.length).toEqual(2262);

            allSymbols = await main.getAllSymbols(c3.RoutineSymbol);
            expect(allSymbols.length).toEqual(1443);

            // System functions alone + the namespace.
            expect((await systemFunctions.getAllSymbols(c3.Symbol)).length).toEqual(334);

            // Lib functions alone + the namespace.
            expect((await libFunctions.getAllSymbols(c3.Symbol)).length).toEqual(445);

            // Lib variables + lib functions + namespaces.
            expect((await libVariables.getAllSymbols(c3.Symbol)).length).toEqual(1668);

            // Lib functions in "ns1" only + the namespace.
            expect((await libFunctions2.getAllSymbols(c3.RoutineSymbol)).length).toEqual(666);
        });

        it("Symbol navigation", async () => {
            const symbolTable = await createClassSymbolTable("main", [10, 10, 10, 20, 34], []);

            const namespaces = await symbolTable.getNestedSymbolsOfType(c3.NamespaceSymbol);
            expect(namespaces.length).toEqual(0);

            // Does not include constant values (which are literals). Still such variables may appear in
            // below navigation methods and are compared by name, instead of reference.
            const variables = await symbolTable.getNestedSymbolsOfType(c3.VariableSymbol);
            expect(variables.length).toEqual(420);

            // A class member.
            const field7 = variables[211];
            expect(field7).not.toBeUndefined();
            expect(field7.firstSibling).toEqual(variables[210]);
            expect(field7.lastSibling.name).toEqual("method9");
            expect(field7.previousSibling).toEqual(variables[210]);
            expect(field7.nextSibling).toEqual(variables[212]);

            expect(field7.firstSibling.firstSibling.firstSibling.firstSibling).toEqual(field7.firstSibling);
            expect(field7.lastSibling.lastSibling.lastSibling.lastSibling).toEqual(field7.lastSibling);
            expect(field7.firstSibling.lastSibling.firstSibling.firstSibling).toEqual(field7.firstSibling);
            expect(field7.lastSibling.firstSibling.firstSibling.lastSibling).toEqual(field7.lastSibling);

            expect(field7.parent).toBeInstanceOf(c3.InterfaceSymbol);

            const parent7 = field7.parent as c3.InterfaceSymbol;
            expect(parent7.indexOfChild(field7)).toEqual(1);
            expect(parent7.firstChild).toEqual(field7.firstSibling);
            expect(parent7.lastChild).toEqual(field7.lastSibling);

            // A local variable (a single one in a block).
            const var1 = variables[286];
            expect(var1).not.toBeUndefined();
            expect(var1.firstSibling).toEqual(var1);
            expect(var1.lastSibling.name).toEqual("var1");
            expect(var1.previousSibling).toBeUndefined();
            expect(var1.nextSibling).toBeUndefined();

            expect(var1.firstSibling.firstSibling.firstSibling.firstSibling).toEqual(var1.firstSibling);
            expect(var1.lastSibling.lastSibling.lastSibling.lastSibling).toEqual(var1.lastSibling);
            expect(var1.firstSibling.lastSibling.firstSibling.firstSibling).toEqual(var1.firstSibling);
            expect(var1.lastSibling.firstSibling.firstSibling.lastSibling).toEqual(var1.lastSibling);

            const block1 = var1.parent as c3.ScopedSymbol;
            expect(block1.indexOfChild(field7)).toEqual(-1);
            expect(block1.indexOfChild(var1)).toEqual(0);
            expect(block1.firstChild).toEqual(var1.firstSibling);
            expect(block1.lastChild).toEqual(var1.lastSibling);

            // A global variable.
            const var15 = variables[19];
            expect(var15).not.toBeUndefined();
            expect(var15.firstSibling).toEqual(symbolTable.firstChild);
            expect(var15.lastSibling.name).toEqual("globalConst33");
            expect(var15.previousSibling).toEqual(variables[18]);
            expect(var15.nextSibling?.name).toEqual("globalConst0");

            expect(var15.parent).toBeInstanceOf(c3.SymbolTable);

            const st1 = var15.parent as c3.ScopedSymbol;
            expect(st1.indexOfChild(var15)).toEqual(39);
            expect(st1.firstChild).toEqual(var15.firstSibling);
            expect(st1.lastChild).toEqual(var15.lastSibling);

            const next = variables[284].next;
            expect(next).not.toBeUndefined();
            expect(next!.qualifiedName(".", true)).toEqual("main.class6.method7.block1.var1");

            const symbol = await symbolTable.symbolWithContext(dummyNode);
            expect(symbol).not.toBeUndefined();
            expect(symbol!.qualifiedName(".", true)).toEqual("main.class0.method1.block2.var1");
        });
    });

    describe("Simple expression parser:", () => {
        it("Most simple setup", () => {
            // No customization happens here, so the c3 engine only returns lexer tokens.
            const inputStream = CharStreams.fromString("var c = a + b()");
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            const errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            parser.expression();
            expect(errorListener.errorCount).toEqual(0);

            const core = new c3.CodeCompletionCore(parser);

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
            const inputStream = CharStreams.fromString("var c = a + b");
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            const errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            parser.expression();
            expect(errorListener.errorCount).toEqual(0);

            const core = new c3.CodeCompletionCore(parser);

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

            // 6) On the whitespace just after the variable reference 'a' (but it could still be a function reference!)
            candidates = core.collectCandidates(7);
            expect(candidates.tokens.size).toEqual(0);
            expect(candidates.rules.size).toEqual(1);

            // Our function rule should start at the ID reference of token 'a'
            expect(candidates.rules.get(ExprParser.RULE_functionRef)?.startTokenIndex).toEqual(6);
        });

        it("Recursive preferred rule", () => {
            const inputStream = CharStreams.fromString("var c = a + b");
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            const errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            parser.expression();
            expect(errorListener.errorCount).toEqual(0);

            const core = new c3.CodeCompletionCore(parser);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            core.preferredRules = new Set([ExprParser.RULE_simpleExpression]);

            // 1) On the variable reference 'a'.
            let candidates = core.collectCandidates(6);
            expect(candidates.rules.size).toEqual(1);
            // The start token of the simpleExpression rule begins at token 'a'
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
            const inputStream = CharStreams.fromString("var c = a + b");
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            const errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            parser.expression();
            expect(errorListener.errorCount).toEqual(0);

            const core = new c3.CodeCompletionCore(parser);

            // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
            core.preferredRules = new Set([ExprParser.RULE_assignment, ExprParser.RULE_variableRef]);

            // Return higher index rules first, meaning we could get both assignment and variableRef rules as candidates
            core.translateRulesTopDown = true;

            // 1) On the token 'var'.
            let candidates = core.collectCandidates(0);
            expect(candidates.rules.size).toEqual(2);
            // // The start token of the assignment and variableRef rules begin at token 'var'
            expect(candidates.rules.get(ExprParser.RULE_assignment)?.startTokenIndex).toEqual(0);
            expect(candidates.rules.get(ExprParser.RULE_variableRef)?.startTokenIndex).toEqual(0);

            // 2) On the variable reference 'a'.
            candidates = core.collectCandidates(6);
            expect(candidates.rules.size).toEqual(2);
            // The start token of the assignment rule begins at token 'var'
            expect(candidates.rules.get(ExprParser.RULE_assignment)?.startTokenIndex).toEqual(0);
            // The start token of the variableRef rule begins at token 'a'
            expect(candidates.rules.get(ExprParser.RULE_variableRef)?.startTokenIndex).toEqual(6);
        });
    });
});
