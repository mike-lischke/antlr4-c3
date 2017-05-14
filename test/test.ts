/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2017 Mike Lischke
 *
 * See LICENSE file for more info.
 */

"use strict";

import { expect, should, assert } from 'chai';
import { ExprParser } from "./ExprParser";
import { ExprLexer } from "./ExprLexer";
import { CPP14Parser } from "./CPP14Parser";
import { CPP14Lexer } from "./CPP14Lexer";

import * as c3 from "../index";

import { ANTLRInputStream, CommonTokenStream, BaseErrorListener, ParserRuleContext, Token, Recognizer, RecognitionException } from 'antlr4ts';

// Some helper functions + types to create certain setups.

export class ErrorListener extends BaseErrorListener {
  errorCount = 0;

  syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
    charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
    ++this.errorCount;
  }
};

// Creates a single symbol table setup with a simple base structure:
// - [0] classes with [1] methods and [2] fields
// - two blocks in each mdethod and 1 variable in each block.
// In addition to that some global symbols are added ([3] variables, [4] literals).
// If namespaces are given then the classes are distributed among them in a round-robin fashion.
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
      let block1 = symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined, "block1"); // Block at top level.
      symbolTable.addNewSymbolOfType(c3.VariableSymbol, block1, "var1", 17, c3.FundamentalType.integerType);
      let block2 = symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined, "block2");
      symbolTable.addNewSymbolOfType(c3.VariableSymbol, block2, "var1", 3.142, c3.FundamentalType.floatType);

      // Now move the blocks from global level to the method.
      method.addSymbol(block1);
      method.addSymbol(block2);
    }

    ++nsIndex;
    if (nsIndex == nsCount)
      nsIndex = 0;
  }

  for (let i = 0; i < counts[3]; ++i) {
    symbolTable.addNewSymbolOfType(c3.VariableSymbol, undefined, "var" + i, 42, c3.FundamentalType.integerType);
  }

  for (let i = 0; i < counts[4]; ++i) {
    symbolTable.addNewSymbolOfType(c3.LiteralSymbol, undefined, "const" + i, "string constant", c3.FundamentalType.stringType);
  }

  return symbolTable;
}

// Begin of the tests.
describe('antlr4-c3', function () {

  describe('Symbol table tests', function () {
    it("Single table base tests", function (done) {
      let symbolTable = createClassSymbolTable("main", [3, 3, 4, 5, 5]);
      let info = symbolTable.getInfo();
      expect(info.dependencyCount, "Test 1.1").to.equal(0);
      expect(info.symbolCount, "Test 1.2").to.equal(13); // 5 + 5 top level symbols + 3 classes.

      try {
        symbolTable.addNewSymbolOfType(c3.VariableSymbol, undefined, "var3");
        assert(false);
      } catch (e) {
        if (e instanceof c3.DuplicateSymbolError) {
          expect(e.message, "Test 1.3").to.equal("Attempt to add duplicate symbol 'var3'");
        } else {
          assert(false);
        }
      }

      let class1 = symbolTable.resolve("class1");
      expect(class1, "Test 1.4").is.instanceof(c3.ClassSymbol);
      let method2 = (class1 as c3.ClassSymbol).resolve("method2");
      expect(method2, "Test 1.5").is.instanceof(c3.MethodSymbol);
      let scopes = (method2 as c3.MethodSymbol).getDirectScopes();
      expect(scopes.length, "Test 1.6").equals(2); // 2 anonymous blocks.
      expect(scopes[0], "Test 1.7").is.instanceof(c3.ScopedSymbol);

      let block1 = scopes[0] as c3.ScopedSymbol;
      try {
        let duplicateMethod = symbolTable.addNewSymbolOfType(c3.MethodSymbol, undefined, "method2");
        (class1 as c3.ClassSymbol).addSymbol(duplicateMethod); // Must throw.
        assert(false);
      } catch (e) {
        if (e instanceof c3.DuplicateSymbolError) {
          expect(e.message, "Test 1.8").to.equal("Attempt to add duplicate symbol 'method2'");
        } else {
          assert(false);
        }
      }

      let variable = scopes[0].resolve("var3"); // Resolves to the global var 3.
      expect(variable, "Test 1.9").to.be.instanceof(c3.VariableSymbol);
      expect(variable!.getRoot(), "Test 1.10").to.equal(symbolTable);

      variable = scopes[0].resolve("var3", true); // Try only local vars.
      expect(variable, "Test 1.11").to.equal(undefined);

      variable = scopes[0].resolve("var1"); // Now resolves to local var.
      expect(variable!.getRoot(), "Test 1.12").to.equal(class1);
      expect(variable!.getParentOfType(c3.MethodSymbol), "Test 1.13").to.equal(method2);
      expect((class1 as c3.ClassSymbol).getSymbolsOfType(c3.MethodSymbol).length, "Test 1.14").to.equal(3);
      expect((method2 as c3.MethodSymbol).getSymbolsOfType(c3.ScopedSymbol).length, "Test 1.15").to.equal(2);
      expect(block1.resolve("class1", false), "Test 1.16").to.equal(class1);

      let path = variable!.getSymbolPath();
      expect(path.length, "Test 1.17").to.equal(5);
      expect(path[0].name, "Test 1.18").to.equal("var1");
      expect(path[1].name, "Test 1.19").to.equal("block1");
      expect(path[2].name, "Test 1.20").to.equal("method2");
      expect(path[3].name, "Test 1.21").to.equal("class1");
      expect(path[4].name, "Test 1.22").to.equal("main");

      expect(method2!.qualifiedName(), "Test 1.23").to.equal("class1.method2");
      expect(method2!.qualifiedName("-", true), "Test 1.24").to.equal("main-class1-method2");
      expect(variable!.qualifiedName(), "Test 1.25").to.equal("block1.var1");
      expect(variable!.qualifiedName("#"), "Test 1.26").to.equal("block1#var1");
      expect(variable!.qualifiedName(".", false, true), "Test 1.27").to.equal("block1.var1");
      expect(variable!.qualifiedName(".", true, false), "Test 1.28").to.equal("main.class1.method2.block1.var1");
      expect(variable!.qualifiedName(".", true, true), "Test 1.29").to.equal("main.class1.method2.block1.var1");

      let allSymbols = symbolTable.getAllNestedSymbols();
      expect(allSymbols.length, "Test 1.30").to.equal(70);

      let symbolPath = allSymbols[59].qualifiedName(".", true);
      expect(symbolPath, "Test 1.31").to.equal("main.class2.method2.block2.var1");
      expect(symbolTable.symbolFromPath("main.class2.method2.block2.var1"), "Test 1.32").to.equal(allSymbols[59]);

      expect(symbolTable, "Test 1.33").to.equal(symbolTable.getSymbolTable());

      done();
    });

    it("Single table type checks", function (done) {
      // Create a symbol table with all the symbols we have in the lib and query it for some collections.
      // Start with a standard table containing a class with a single method, a global var and a global literal symbol.
      // Hierarchy is not really important here.
      let symbolTable = createClassSymbolTable("main", [1, 1, 1, 1, 1]);

      // Now add all the other symbols.
      let alias = symbolTable.addNewSymbolOfType(c3.TypeAlias, undefined, "newBool", c3.FundamentalType.boolType);
      let routine = symbolTable.addNewSymbolOfType(c3.RoutineSymbol, undefined, "routine1", c3.FundamentalType.integerType);
      let field = symbolTable.addNewSymbolOfType(c3.FieldSymbol, undefined, "field1", c3.FundamentalType.floatType);

      // Database symbols
      let catalog = symbolTable.addNewSymbolOfType(c3.CatalogSymbol, undefined, "catalog1");
      let schema = symbolTable.addNewSymbolOfType(c3.SchemaSymbol, undefined, "schema1");
      let table = symbolTable.addNewSymbolOfType(c3.TableSymbol, undefined, "table1");
      let view = symbolTable.addNewSymbolOfType(c3.ViewSymbol, undefined, "view1");
      let event = symbolTable.addNewSymbolOfType(c3.EventSymbol, undefined, "event1");
      let column = symbolTable.addNewSymbolOfType(c3.ColumnSymbol, undefined, "column1");
      let index = symbolTable.addNewSymbolOfType(c3.IndexSymbol, undefined, "index1");
      let pk = symbolTable.addNewSymbolOfType(c3.PrimaryKeySymbol, undefined, "pk1");
      let fk = symbolTable.addNewSymbolOfType(c3.ForeignKeySymbol, undefined, "fk1");
      let storedRoutine = symbolTable.addNewSymbolOfType(c3.StoredRoutineSymbol, undefined, "routine2");
      let trigger = symbolTable.addNewSymbolOfType(c3.TriggerSymbol, undefined, "trigger1");
      let udf = symbolTable.addNewSymbolOfType(c3.UdfSymbol, undefined, "udf1");
      let engine = symbolTable.addNewSymbolOfType(c3.EngineSymbol, undefined, "engine1");
      let tableSpace = symbolTable.addNewSymbolOfType(c3.TableSpaceSymbol, undefined, "space1");
      let logfileGroup = symbolTable.addNewSymbolOfType(c3.LogfileGroupSymbol, undefined, "group1");
      let charset = symbolTable.addNewSymbolOfType(c3.CharsetSymbol, undefined, "charset1");
      let collation = symbolTable.addNewSymbolOfType(c3.CollationSymbol, undefined, "collation1");
      let userVariable = symbolTable.addNewSymbolOfType(c3.UserVariableSymbol, undefined, "var1");
      let systemVariable = symbolTable.addNewSymbolOfType(c3.SystemVariableSymbol, undefined, "sysvar1");

      expect(symbolTable.getAllNestedSymbols().length, "Test 2.1").to.equal(31);
      expect(symbolTable.getNestedSymbolsOfType(c3.Symbol).length, "Test 2.2").to.equal(31);
      expect(symbolTable.getNestedSymbolsOfType(c3.ScopedSymbol).length, "Test 2.3").to.equal(12);
      expect(symbolTable.getNestedSymbolsOfType(c3.TypedSymbol).length, "Test 2.4").to.equal(8);
      expect(symbolTable.getNestedSymbolsOfType(c3.RoutineSymbol).length, "Test 2.5").to.equal(3);
      expect(symbolTable.getNestedSymbolsOfType(c3.VariableSymbol).length, "Test 2.6").to.equal(6);

      done();
    });

    it("Single table stress test", function (done) {
      let symbolTable = createClassSymbolTable("table", [300, 30, 20, 1000, 1000]);
      expect(symbolTable.getAllNestedSymbols().length, "Test 3.1").to.equal(53300);
      expect(symbolTable.getNestedSymbolsOfType(c3.ClassSymbol).length, "Test 3.2").to.equal(300);
      expect(symbolTable.getNestedSymbolsOfType(c3.MethodSymbol).length, "Test 3.3").to.equal(9000);
      expect(symbolTable.getNestedSymbolsOfType(c3.ScopedSymbol).length, "Test 3.4").to.equal(27300);
      expect(symbolTable.getNestedSymbolsOfType(c3.VariableSymbol).length, "Test 3.5").to.equal(25000); // Includes class fields.
      expect(symbolTable.getNestedSymbolsOfType(c3.FieldSymbol).length, "Test 3.6").to.equal(6000);
      expect(symbolTable.getNestedSymbolsOfType(c3.LiteralSymbol).length, "Test 3.7").to.equal(1000);

      done();
    });

    it("Single table namespace tests", function (done) {
      let symbolTable = createClassSymbolTable("main", [30, 10, 10, 100, 100], ["ns1", "ns2", "ns1.ns3.ns5", "ns1.ns4.ns6.ns8"]);

      let namespaces = symbolTable.getNestedSymbolsOfType(c3.NamespaceSymbol);
      expect(namespaces.length, "Test 4.1").to.equal(7);

      // This call does a depth-first search, so all the deeper nested namespaces appear at the lower indexes
      //  and the less nested ones at the end of the list.
      let methods = symbolTable.getNestedSymbolsOfType(c3.MethodSymbol);
      expect(methods.length, "Test 4.2").to.equal(300);
      expect(methods[2].qualifiedName(".", true), "Test 4.3").to.equal("main.ns1.ns3.ns5.class2.method2");
      expect(methods[299].qualifiedName(".", true), "Test 4.4").to.equal("main.ns2.class29.method9");

      done();
    });

    it("Multi table tests", function (done) {
      // Interactions between linked symbol tables. We use 5 tables here:
      // - the main table as in the single table tests.
      // - a system functions table
      // - a table with variables, which has 2 other dependencies (functions in same namespace as system functions and one in a different ns)
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
        libFunctions.addNewSymbolOfType(c3.RoutineSymbol, namespace2, "func" + i); // Same names as in the system funcs but different namespace.
      }

      let libVariables = new c3.SymbolTable("library variables", { allowDuplicateSymbols: false });
      let namespace3 = libVariables.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1"); // Like for the system functions.
      for (let i = 0; i < 555; ++i) {
        libVariables.addNewSymbolOfType(c3.VariableSymbol, namespace3, "var" + i);
      }

      let libFunctions2 = new c3.SymbolTable("library functions 2", { allowDuplicateSymbols: false });
      let namespace4 = libFunctions2.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
      for (let i = 0; i < 666; ++i) {
        libFunctions2.addNewSymbolOfType(c3.RoutineSymbol, namespace4, "func" + i); // Same names as in the system funcs but different namespace.
      }

      libVariables.addDependencies(libFunctions, libFunctions2);
      main.addDependencies(systemFunctions, libVariables);

      // Note: namespaces are handled in the context of their parent. Symbols in a namespace/module/library are accessible from their parent.
      expect(main.getAllSymbols().length, "Test 3.1").to.equal(2232);
      expect(systemFunctions.getAllSymbols().length, "Test 3.2").to.equal(334); // System functions alone + the namespace.
      expect(libFunctions.getAllSymbols().length, "Test 3.3").to.equal(445); // Lib functions alone + the namespace.
      expect(libVariables.getAllSymbols().length, "Test 3.4").to.equal(1668); // Lib variables + lib functions + namespaces.
      expect(libFunctions2.getAllSymbols().length, "Test 3.5").to.equal(667); // Lib functions in ns1 only + the namespace.

      done();
    });

  });

  describe('Simple expression parser', function () {
    it("Most simple setup", function (done) {
      // No customization happens here, so the c3 engine only returns lexer tokens.
      let inputStream = new ANTLRInputStream("var c = a + b()");
      let lexer = new ExprLexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);

      let parser = new ExprParser(tokenStream);
      let errorListener = new ErrorListener();
      parser.addErrorListener(errorListener);
      let tree = parser.expression();
      expect(errorListener.errorCount, "Test 4.1").equals(0);

      let core = new c3.CodeCompletionCore(parser);

      // 1) At the input start.
      let candidates = core.collectCandidates(0);

      expect(candidates.tokens.size, "Test 4.2").to.equal(3);
      expect(candidates.tokens.has(ExprLexer.VAR), "Test 4.3").to.equal(true);
      expect(candidates.tokens.has(ExprLexer.LET), "Test 4.4").to.equal(true);
      expect(candidates.tokens.has(ExprLexer.ID), "Test 4.5").to.equal(true);

      expect(candidates.tokens.get(ExprLexer.VAR), "Test 4.6").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);
      expect(candidates.tokens.get(ExprLexer.LET), "Test 4.7").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);
      expect(candidates.tokens.get(ExprLexer.ID), "Test 4.8").to.eql([]);

      // 2) On the first whitespace. In real implementations you would do some additional checks where in the whitespace
      //    the caret is, as the outcome is different depending on that position.
      candidates = core.collectCandidates(1);
      expect(candidates.tokens.size, "Test 4.9").to.equal(1);
      expect(candidates.tokens.has(ExprLexer.ID), "Test 4.10").to.equal(true);

      // 3) On the variable name ('c').
      candidates = core.collectCandidates(2);
      expect(candidates.tokens.size, "Test 4.11").to.equal(1);
      expect(candidates.tokens.has(ExprLexer.ID), "Test 4.12").to.equal(true);

      // 4) On the equal sign (ignoring whitespace positions from now on).
      candidates = core.collectCandidates(4);
      expect(candidates.tokens.size, "Test 4.13").to.equal(1);
      expect(candidates.tokens.has(ExprLexer.EQUAL), "Test 4.14").to.equal(true);

      // 5) On the variable reference 'a'. But since we have not configure the c3 engine to return us var refs
      //    (or function refs for that matter) we only get an ID here.
      candidates = core.collectCandidates(6);
      expect(candidates.tokens.size, "Test 4.15").to.equal(1);
      expect(candidates.tokens.has(ExprLexer.ID), "Test 4.16").to.equal(true);

      // 6) On the '+' operator. Usually you would not show operators as candidates, but we have not set up the c3 engine
      //    yet to not return them.
      candidates = core.collectCandidates(8);
      expect(candidates.tokens.size, "Test 4.17").to.equal(5);
      expect(candidates.tokens.has(ExprLexer.PLUS), "Test 4.18").to.equal(true);
      expect(candidates.tokens.has(ExprLexer.MINUS), "Test 4.19").to.equal(true);
      expect(candidates.tokens.has(ExprLexer.MULTIPLY), "Test 4.20").to.equal(true);
      expect(candidates.tokens.has(ExprLexer.DIVIDE), "Test 4.21").to.equal(true);
      expect(candidates.tokens.has(ExprLexer.OPEN_PAR), "Test 4.22").to.equal(true);

      done();
    });

    it("Typical setup", function (done) {
      let inputStream = new ANTLRInputStream("var c = a + b");
      let lexer = new ExprLexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);

      let parser = new ExprParser(tokenStream);
      let errorListener = new ErrorListener();
      parser.addErrorListener(errorListener);
      let tree = parser.expression();
      expect(errorListener.errorCount, "Test 5.1").equals(0);

      let core = new c3.CodeCompletionCore(parser);

      // Ignore operators and the generic ID token.
      core.ignoredTokens = new Set([ExprLexer.ID, ExprLexer.PLUS, ExprLexer.MINUS, ExprLexer.MULTIPLY, ExprLexer.DIVIDE, ExprLexer.EQUAL]);

      // Tell the engine to return certain rules to us, which we could use to look up values in a symbol table.
      core.preferredRules = new Set([ExprParser.RULE_functionRef, ExprParser.RULE_variableRef]);

      // 1) At the input start.
      let candidates = core.collectCandidates(0);

      expect(candidates.tokens.size, "Test 5.2").to.equal(2);
      expect(candidates.tokens.has(ExprLexer.VAR), "Test 5.3").to.equal(true);
      expect(candidates.tokens.has(ExprLexer.LET), "Test 5.4").to.equal(true);

      expect(candidates.tokens.get(ExprLexer.VAR), "Test 5.5").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);
      expect(candidates.tokens.get(ExprLexer.LET), "Test 5.6").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);

      // 2) On the variable name ('c').
      candidates = core.collectCandidates(2);
      expect(candidates.tokens.size, "Test 5.7").to.equal(0);

      // 4) On the equal sign.
      candidates = core.collectCandidates(4);
      expect(candidates.tokens.size, "Test 5.8").to.equal(0);

      // 5) On the variable reference 'a'.
      candidates = core.collectCandidates(6);
      expect(candidates.tokens.size, "Test 5.9").to.equal(0);
      expect(candidates.rules.size, "Test 5.10").to.equal(2);

      // Here we get 2 rule indexes, derived from 2 different IDs possible at this caret position.
      // These are what we told the engine above to be preferred rules for us.
      let i = 0;
      for (let candidate of candidates.rules) {
        switch (candidate[0]) {
          case ExprParser.RULE_functionRef: {
            expect(candidate[1], "Test 5.11." + i).to.eql([ExprParser.RULE_expression, ExprParser.RULE_assignment, ExprParser.RULE_simpleExpression]);
            break;
          }

          case ExprParser.RULE_variableRef: {
            expect(candidate[1], "Test 5.11." + i).to.eql([ExprParser.RULE_expression, ExprParser.RULE_assignment, ExprParser.RULE_simpleExpression]);
            break;
          }

          default:
            assert(false);
        }
        ++i;
      }

      done();
    });
  });

  describe('C++14 parser', function () {
    it('Warmup for C++ parser', function (done) {
      // No testing here, just the warmup, so we don't have that time counted in our following tests.
      let inputStream = new ANTLRInputStream("");
      let lexer = new CPP14Lexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);
      let parser = new CPP14Parser(tokenStream);

      done();
    });

    it('C++ example', function (done) {
      // We are trying here to get useful code completion candidates without adjusting the grammar in any way.
      // We use the grammar as downloaded from the antlr grammar directory and set up the c3 engine
      // instead in a way that still returns useful info. This limits us somewhat.
      let inputStream = new ANTLRInputStream("class A {\n" +
        "public:\n" +
        "  void test() {\n" +
        "  }\n" +
        "};\n"
      );
      let lexer = new CPP14Lexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);

      let parser = new CPP14Parser(tokenStream);
      let errorListener = new ErrorListener();
      parser.addErrorListener(errorListener);
      let tree = parser.translationunit();
      expect(errorListener.errorCount, "Test 6.1").equals(0);

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

      // For a C++ grammar you can of course get many candidates of all kind. For testing we focus only on a few,
      // namely namespace, class and variable references. For variable references there is no own rule, only an idexpression
      // as part of the primary expression.
      core.preferredRules = new Set([CPP14Parser.RULE_classname, CPP14Parser.RULE_namespacename, CPP14Parser.RULE_idexpression]);

      // 1) At the input start.
      let candidates = core.collectCandidates(0);

      expect(candidates.tokens.size, "Test 6.2").to.equal(40);
      expect(candidates.tokens.has(CPP14Lexer.Extern), "Test 6.3").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Mutable), "Test 6.4").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Register), "Test 6.5").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Static), "Test 6.6").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Thread_local), "Test 6.7").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Decltype), "Test 6.8").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Char), "Test 6.9").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Char16), "Test 6.10").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Char32), "Test 6.11").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Wchar), "Test 6.12").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Bool), "Test 6.13").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Short), "Test 6.14").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Int), "Test 6.15").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Long), "Test 6.16").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Signed), "Test 6.17").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Unsigned), "Test 6.18").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Float), "Test 6.19").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Double), "Test 6.20").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Void), "Test 6.21").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Auto), "Test 6.22").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Class), "Test 6.23").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Struct), "Test 6.24").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Union), "Test 6.25").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Enum), "Test 6.26").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Typename), "Test 6.27").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Const), "Test 6.28").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Volatile), "Test 6.29").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Explicit), "Test 6.30").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Inline), "Test 6.31").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Virtual), "Test 6.32").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Friend), "Test 6.33").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Typedef), "Test 6.34").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Constexpr), "Test 6.35").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Alignas), "Test 6.36").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Asm), "Test 6.37").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Namespace), "Test 6.38").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Using), "Test 6.39").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Static_assert), "Test 6.40").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Template), "Test 6.41").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.EOF), "Test 6.42").to.equal(true);

      expect(candidates.tokens.has(CPP14Lexer.Identifier), "Test 6.43").to.equal(false);

      // The returned list can contain more than one entry for a particular rule, if there are multiple
      // parser rule paths leading to it.
      expect(candidates.rules.size, "Test 6.44").to.equal(3);
      expect(candidates.rules.get(CPP14Parser.RULE_namespacename), "Test 6.45").to.eql([
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
      expect(candidates.rules.get(CPP14Parser.RULE_classname), "Test 6.46").to.eql([
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

      expect(candidates.rules.size, "Test 6.47").to.equal(1);
      expect(candidates.rules.get(CPP14Parser.RULE_idexpression), "Test 6.48").to.eql([
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
      ]);

      // We are starting a primary expression in a function body, so everything related to expressions and control flow is allowed here.
      // We only check for a few possible keywords.
      expect(candidates.tokens.size, "Test 6.49").to.equal(81);
      expect(candidates.tokens.has(CPP14Lexer.If), "Test 6.50").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.This), "Test 6.51").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.New), "Test 6.52").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Case), "Test 6.53").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.While), "Test 6.54").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Throw), "Test 6.55").to.equal(true);

      expect(candidates.tokens.has(CPP14Lexer.Override), "Test 6.56").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.Export), "Test 6.57").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.Private), "Test 6.58").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.Protected), "Test 6.59").to.equal(false);

      done();
    });

    it('C++ example with errors in input', function (done) {
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
      expect(errorListener.errorCount, "Test 7.1").equals(3);

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

      expect(candidates.tokens.size, "Test 7.2").to.equal(1);
      expect(candidates.tokens.has(CPP14Lexer.LeftParen), "Test 7.3").to.equal(true);

      candidates = core.collectCandidates(12); // At the closing parenthesis -> again everything in an expression allowed (no control flow this time, tho).

      expect(candidates.tokens.size, "Test 7.4").to.equal(64);
      expect(candidates.tokens.has(CPP14Lexer.If), "Test 7.5").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.This), "Test 7.6").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.New), "Test 7.7").to.equal(true);
      expect(candidates.tokens.has(CPP14Lexer.Case), "Test 7.8").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.While), "Test 7.9").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.Throw), "Test 7.10").to.equal(true);

      expect(candidates.tokens.has(CPP14Lexer.Override), "Test 7.11").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.Export), "Test 7.12").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.Private), "Test 7.13").to.equal(false);
      expect(candidates.tokens.has(CPP14Lexer.Protected), "Test 7.14").to.equal(false);

      candidates = core.collectCandidates(13); // After the error position -> no suggestions.
      expect(candidates.tokens.size, "Test 7.15").to.equal(0);
      expect(candidates.rules.size, "Test 7.16").to.equal(0);

      done();
    });
  });


});
