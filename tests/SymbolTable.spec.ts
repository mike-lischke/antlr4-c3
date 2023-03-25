/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2023 Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { CommonToken } from "antlr4ts";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

import { BaseSymbol } from "../src/BaseSymbol";
import { BlockSymbol } from "../src/BlockSymbol";
import { ClassSymbol } from "../src/ClassSymbol";
import { DuplicateSymbolError } from "../src/DuplicateSymbolError";
import { FieldSymbol } from "../src/FieldSymbol";
import { FundamentalType } from "../src/FundamentalType";
import { InterfaceSymbol } from "../src/InterfaceSymbol";
import { LiteralSymbol } from "../src/LiteralSymbol";
import { MethodSymbol } from "../src/MethodSymbol";
import { NamespaceSymbol } from "../src/NamespaceSymbol";
import { RoutineSymbol } from "../src/RoutineSymbol";
import { ScopedSymbol } from "../src/ScopedSymbol";
import { SymbolTable } from "../src/SymbolTable";
import { TypeAlias } from "../src/TypeAlias";
import { VariableSymbol } from "../src/VariableSymbol";

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
    namespaces?: string[]): Promise<SymbolTable> => {
    const symbolTable = new SymbolTable(name, { allowDuplicateSymbols: false });

    const nsSymbols: Array<NamespaceSymbol | undefined> = [undefined];
    let nsIndex = 0;
    let nsCount = 1;

    if (namespaces && namespaces.length > 0) {
        nsCount = namespaces.length;
        for (let i = 0; i < nsCount; ++i) {
            nsSymbols[i] = await symbolTable.addNewNamespaceFromPath(undefined, namespaces[i]);
        }
    }

    for (let i = 0; i < counts[0]; ++i) {
        const classSymbol = symbolTable.addNewSymbolOfType(ClassSymbol, nsSymbols[nsIndex], `class${i}`, [], []);
        const interfaceSymbol = symbolTable.addNewSymbolOfType(InterfaceSymbol, undefined, `interface${i}`, []);

        for (let j = 0; j < counts[2]; ++j) {
            symbolTable.addNewSymbolOfType(FieldSymbol, classSymbol, `field${j}`, undefined);
            symbolTable.addNewSymbolOfType(FieldSymbol, interfaceSymbol, `field${j}`, undefined);
        }

        for (let j = 0; j < counts[1]; ++j) {
            const method = symbolTable.addNewSymbolOfType(MethodSymbol, classSymbol, `method${j}`);
            symbolTable.addNewSymbolOfType(MethodSymbol, interfaceSymbol, `method${j}`);

            // Blocks are created and added in an alternative way (only for classes).
            const block1 = symbolTable.addNewSymbolOfType(BlockSymbol, undefined, "block1"); // Block at top level.
            symbolTable.addNewSymbolOfType(VariableSymbol, block1, "var1", 17, FundamentalType.integerType);
            const block2 = symbolTable.addNewSymbolOfType(BlockSymbol, undefined, "block2");
            const symbol = symbolTable.addNewSymbolOfType(VariableSymbol, block2, "var1", 3.142,
                FundamentalType.floatType);
            if (j === counts[1] - 1) {
                symbol.context = dummyNode;
            }

            // Now move the blocks from global level to the method.
            method.addSymbol(block1);
            method.addSymbol(block2);
        }

        ++nsIndex;
        if (nsIndex === nsCount) {
            nsIndex = 0;
        }
    }

    for (let i = 0; i < counts[3]; ++i) {
        symbolTable.addNewSymbolOfType(VariableSymbol, undefined, `globalVar${i}`, 42,
            FundamentalType.integerType);
    }

    for (let i = 0; i < counts[4]; ++i) {
        symbolTable.addNewSymbolOfType(LiteralSymbol, undefined, `globalConst${i}`, "string constant",
            FundamentalType.stringType);
    }

    return symbolTable;
};

// Begin of the tests.
describe("Symbol Table Tests", () => {
    it("Single table base tests", async () => {
        const symbolTable = await createClassSymbolTable("main", [3, 3, 4, 5, 5]);
        const info = symbolTable.info;
        expect(info.dependencyCount).toEqual(0);
        expect(info.symbolCount).toEqual(16); // 5 + 5 top level symbols + 3 classes + 3 interfaces.

        try {
            symbolTable.addNewSymbolOfType(VariableSymbol, undefined, "globalVar3", undefined);
            fail();
        } catch (e) {
            if (e instanceof DuplicateSymbolError) {
                expect(e.message).toEqual("Attempt to add duplicate symbol 'globalVar3'");
            } else {
                fail();
            }
        }

        const class1 = await symbolTable.resolve("class1");
        expect(class1).toBeInstanceOf(ClassSymbol);
        expect(class1).toBeInstanceOf(ClassSymbol);
        const method2 = await (class1 as ClassSymbol).resolve("method2");
        expect(method2).toBeInstanceOf(MethodSymbol);
        const scopes = await (method2 as MethodSymbol).directScopes;
        expect(scopes.length).toEqual(2); // 2 anonymous blocks.
        expect(scopes[0]).toBeInstanceOf(ScopedSymbol);

        const block1 = scopes[0];
        try {
            const duplicateMethod = symbolTable.addNewSymbolOfType(MethodSymbol, undefined, "method2");
            (class1 as ClassSymbol).addSymbol(duplicateMethod); // Must throw.
            fail();
        } catch (e) {
            if (e instanceof DuplicateSymbolError) {
                expect(e.message).toEqual("Attempt to add duplicate symbol 'method2'");
            } else {
                fail();
            }
        }

        let variable = await scopes[0].resolve("globalVar3"); // Resolves to the global var 3.
        expect(variable).toBeInstanceOf(VariableSymbol);
        expect(variable!.root).toEqual(symbolTable);

        variable = await scopes[0].resolve("globalVar3", true); // Try only local vars.
        expect(variable).toEqual(undefined);

        variable = await scopes[0].resolve("var1"); // Now resolves to local var.
        expect(variable!.root).toEqual(class1);
        expect(variable!.getParentOfType(MethodSymbol)).toEqual(method2);

        const methods = await (class1 as ClassSymbol).getSymbolsOfType(MethodSymbol);
        expect(methods.length).toEqual(3);
        const symbols = await (method2 as MethodSymbol).getSymbolsOfType(ScopedSymbol);
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
        symbolTable.addNewSymbolOfType(TypeAlias, undefined, "newBool", FundamentalType.boolType);
        symbolTable.addNewSymbolOfType(RoutineSymbol, undefined, "routine1", FundamentalType.integerType);
        symbolTable.addNewSymbolOfType(FieldSymbol, undefined, "field1", FundamentalType.floatType);

        // TODO: finish this test.
    });

    it("Single table stress test", async () => {
        const symbolTable = await createClassSymbolTable("table", [300, 30, 20, 1000, 1000]);

        let symbols = await symbolTable.getAllNestedSymbols();
        expect(symbols.length).toEqual(68600);
        symbols = await symbolTable.getNestedSymbolsOfType(ClassSymbol);
        expect(symbols.length).toEqual(300);
        symbols = await symbolTable.getNestedSymbolsOfType(MethodSymbol);
        expect(symbols.length).toEqual(18000);
        symbols = await symbolTable.getNestedSymbolsOfType(ScopedSymbol);
        expect(symbols.length).toEqual(36600);

        // Includes class fields.
        symbols = await symbolTable.getNestedSymbolsOfType(VariableSymbol);
        expect(symbols.length).toEqual(31000);
        symbols = await symbolTable.getNestedSymbolsOfType(FieldSymbol);
        expect(symbols.length).toEqual(12000);
        symbols = await symbolTable.getNestedSymbolsOfType(LiteralSymbol);
        expect(symbols.length).toEqual(1000);
    });

    it("Single table namespace tests", async () => {
        const symbolTable = await createClassSymbolTable("main", [30, 10, 10, 100, 100], ["ns1", "ns2",
            "ns1.ns3.ns5", "ns1.ns4.ns6.ns8"]);

        const namespaces = await symbolTable.getNestedSymbolsOfType(NamespaceSymbol);
        expect(namespaces.length).toEqual(7);

        // This call does a depth-first search, so all the deeper nested namespaces appear at the lower indexes
        // and the less nested ones at the end of the list.
        const methods = await symbolTable.getNestedSymbolsOfType(MethodSymbol);
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
        const systemFunctions = new SymbolTable("system functions", { allowDuplicateSymbols: false });
        const namespace1 = systemFunctions.addNewSymbolOfType(NamespaceSymbol, undefined, "ns1");
        for (let i = 0; i < 333; ++i) {
            systemFunctions.addNewSymbolOfType(RoutineSymbol, namespace1, `func${i}`);
        }
        main.addDependencies(systemFunctions);

        const libFunctions = new SymbolTable("library functions", { allowDuplicateSymbols: false });
        const namespace2 = libFunctions.addNewSymbolOfType(NamespaceSymbol, undefined, "ns2");
        for (let i = 0; i < 444; ++i) {
            // Same names as in the system functions but different namespace.
            libFunctions.addNewSymbolOfType(RoutineSymbol, namespace2, `func${i}`);
        }

        const libVariables = new SymbolTable("library variables", { allowDuplicateSymbols: false });

        // Like for the system functions.
        const namespace3 = libVariables.addNewSymbolOfType(NamespaceSymbol, undefined, "ns1");
        for (let i = 0; i < 555; ++i) {
            libVariables.addNewSymbolOfType(VariableSymbol, namespace3, `var${i}`, undefined);
        }

        const libFunctions2 = new SymbolTable("library functions 2", { allowDuplicateSymbols: false });
        const namespace4 = libFunctions2.addNewSymbolOfType(NamespaceSymbol, undefined, "ns1");
        for (let i = 0; i < 666; ++i) {
            // Same names as in the system functions but different namespace.
            libFunctions2.addNewSymbolOfType(RoutineSymbol, namespace4, `func${i}`);
        }

        libVariables.addDependencies(libFunctions, libFunctions2);
        main.addDependencies(systemFunctions, libVariables);

        // Note: namespaces are handled in the context of their parent.
        // Symbols in a namespace/module/library are accessible from their parent.
        let allSymbols = await main.getAllSymbols(BaseSymbol);
        expect(allSymbols.length).toEqual(2262);

        allSymbols = await main.getAllSymbols(RoutineSymbol);
        expect(allSymbols.length).toEqual(1443);

        // System functions alone + the namespace.
        expect((await systemFunctions.getAllSymbols(BaseSymbol)).length).toEqual(334);

        // Lib functions alone + the namespace.
        expect((await libFunctions.getAllSymbols(BaseSymbol)).length).toEqual(445);

        // Lib variables + lib functions + namespaces.
        expect((await libVariables.getAllSymbols(BaseSymbol)).length).toEqual(1668);

        // Lib functions in "ns1" only + the namespace.
        expect((await libFunctions2.getAllSymbols(RoutineSymbol)).length).toEqual(666);
    });

    it("Symbol navigation", async () => {
        const symbolTable = await createClassSymbolTable("main", [10, 10, 10, 20, 34], []);

        const namespaces = await symbolTable.getNestedSymbolsOfType(NamespaceSymbol);
        expect(namespaces.length).toEqual(0);

        // Does not include constant values (which are literals). Still such variables may appear in
        // below navigation methods and are compared by name, instead of reference.
        const variables = await symbolTable.getNestedSymbolsOfType(VariableSymbol);
        expect(variables.length).toEqual(420);

        // A class member.
        const field7 = variables[211];
        expect(field7).toBeDefined();
        expect(field7.firstSibling).toEqual(variables[210]);
        expect(field7.lastSibling!.name).toEqual("method9");
        expect(field7.previousSibling).toEqual(variables[210]);
        expect(field7.nextSibling).toEqual(variables[212]);

        expect(field7.firstSibling!.firstSibling!.firstSibling!.firstSibling).toEqual(field7.firstSibling);
        expect(field7.lastSibling!.lastSibling!.lastSibling!.lastSibling).toEqual(field7.lastSibling);
        expect(field7.firstSibling!.lastSibling!.firstSibling!.firstSibling).toEqual(field7.firstSibling);
        expect(field7.lastSibling!.firstSibling!.firstSibling!.lastSibling).toEqual(field7.lastSibling);

        expect(field7.parent).toBeInstanceOf(InterfaceSymbol);

        const parent7 = field7.parent as InterfaceSymbol;
        expect(parent7.indexOfChild(field7)).toEqual(1);
        expect(parent7.firstChild).toEqual(field7.firstSibling);
        expect(parent7.lastChild).toEqual(field7.lastSibling);

        // A local variable (a single one in a block).
        const var1 = variables[286];
        expect(var1).toBeDefined();
        expect(var1.firstSibling).toEqual(var1);
        expect(var1.lastSibling!.name).toEqual("var1");
        expect(var1.previousSibling).toBeUndefined();
        expect(var1.nextSibling).toBeUndefined();

        expect(var1.firstSibling!.firstSibling!.firstSibling!.firstSibling).toEqual(var1.firstSibling);
        expect(var1.lastSibling!.lastSibling!.lastSibling!.lastSibling).toEqual(var1.lastSibling);
        expect(var1.firstSibling!.lastSibling!.firstSibling!.firstSibling).toEqual(var1.firstSibling);
        expect(var1.lastSibling!.firstSibling!.firstSibling!.lastSibling).toEqual(var1.lastSibling);

        const block1 = var1.parent as ScopedSymbol;
        expect(block1.indexOfChild(field7)).toEqual(-1);
        expect(block1.indexOfChild(var1)).toEqual(0);
        expect(block1.firstChild).toEqual(var1.firstSibling);
        expect(block1.lastChild).toEqual(var1.lastSibling);

        // A global variable.
        const var15 = variables[19];
        expect(var15).toBeDefined();
        expect(var15.firstSibling).toEqual(symbolTable.firstChild);
        expect(var15.lastSibling!.name).toEqual("globalConst33");
        expect(var15.previousSibling).toEqual(variables[18]);
        expect(var15.nextSibling?.name).toEqual("globalConst0");

        expect(var15.parent).toBeInstanceOf(SymbolTable);

        const st1 = var15.parent as ScopedSymbol;
        expect(st1.indexOfChild(var15)).toEqual(39);
        expect(st1.firstChild).toEqual(var15.firstSibling);
        expect(st1.lastChild).toEqual(var15.lastSibling);

        const next = variables[284].next;
        expect(next).toBeDefined();
        expect(next!.qualifiedName(".", true)).toEqual("main.class6.method7.block1.var1");

        const symbol = await symbolTable.symbolWithContext(dummyNode);
        expect(symbol).toBeDefined();
        expect(symbol!.qualifiedName(".", true)).toEqual("main.class0.method9.block2.var1");
    });

    it("Search context in large single field list", async () => {
        const symbolTable = await createClassSymbolTable("main", [1, 1, 100000], []);

        const symbol = symbolTable.symbolWithContextSync(dummyNode);
        expect(symbol).toBeDefined();
        expect(symbol!.qualifiedName(".", true)).toEqual("main.class0.method0.block2.var1");
    });
});
