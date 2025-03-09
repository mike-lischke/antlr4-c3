<p align="center">
<img src="https://raw.githubusercontent.com/mike-lischke/website-antlr-ng/main/src/assets/images/antlr-ng-logo6.svg" title="ANTLR Next Generation" alt="antlr-ng the parser generator" height="200"/><br/>
<label style="font-size: 90%">Part of the Next Generation ANTLR Project</label>
</p>
<hr />

# antlr4-c3 Release Notes

## 3.4.3

Upgraded dependencies.

## 3.4.1 - 3.4.2

- PR #80 Candidate token's follow TokenList is inaccurate when the candidate's origin is ambiguous
- PR #135 Add GitHub Workflow for Java port
- PR #137 Add Clang-Format and Clang-Tidy checks
- PR #140 C++ port light refactororing and bug fix
- PR #146 Change C++ port public API
- PR #147 Run C++ tests in random order
- PR #148 Make global mutable state thread_local 
- PR #149 Remove FollowSet cache dependency on ignoredTokens
- PR #160 Make C++ port debug output more like TS
- PR #161 Use grammars from the TS project for C++ port testing
- PR #163 Remove generated parsers
- PR #164 Provide support for Dart language
- PR #166 Replace isPrecedenceRule with isLeftRecursive

- Fixed Bug #94 Autocompleting empty string causes error (in PR #95)
- Fixed Bug #108 Java port-> NPE happen when followSets contains FollowSetWithPath with null following member (in PR #109)
- Fixed Bug #139 Make C++ port thread safe
- Fixed Bug #162 Grammar and generated files can be inconsistent (in PR #163)
- Fixed Bug #165 isPrecedenceRule is required to be required by CodeCompletionCore but seems to be missing from antlr4ng (in PR #166)

## 3.4.0

- Switched to a new major version of the antlr4ng runtime (3.0.0).
- Fixed issue #96 Add .cjs output to package

## 3.3.7

- Stop bundling 3rd party libraries in the own lib bundle. This is not only unnecessary (these deps are installed with all the other dependencies in a target project), but can cause trouble if a dependent project uses 2 different versions of such a bundled 3rd party lib.

## 3.3.6

- Fixed bug #93 Add command to esbuild (stop including 3rd party libs in bundle).
- Updated dependencies.

## 3.3.5

Updated dependencies.

## 3.3.1 - 3.3.4

Updated dependencies.

## 3.3.0

Now using esbuild for building the package.

## 3.2.4 - 3.2.5
- Last changes for the dependency switch (antlr4ts -> antlr4ng).
- Updated Jest settings to run ESM + TS tests.

## 3.2.3
- Completed switch away from antlr4ts.

## 3.2.0

- A new [TypeScript runtime](https://github.com/mike-lischke/antlr4ng) powers this package now (antlr4ng).
- The package is now published as ES module, which is supported by all modern browsers and Node.js.
- The contributors list has been moved to a separate file, because now contributions are tracked via git's signed-off commits.

## 3.1.1

- Renamed a few interfaces to follow the interface naming rules (a leading I).
- Merged PR #81 from Aaron Braunstein.
- Upgraded all dependencies to their latest version.
-
## 3.0.0

BREAKING CHANGES: With this major version release the API has been changed to make it more consistent and easier to use. The most important changes are:

- All the classes in the SymbolTable.ts file have been split into separate files.
- The main Symbol class has been renamed to `BaseSymbol` to avoid confusion and trouble with the Javascript `Symbol` class.
- The package works now with Typescript 5.0 and above.
- The tests have been organized into a separate sub project, which is no longer built with the main project. Instead tests files are transpiled on-the-fly (using `ts-jest`) when running the tests. These transpiled files are never written to disk.
- Symbol creation functions (like `SymbolTable.addNewSymbolOfType`) now allow Typescript to check the given parameters for the class type. You will now have to provide the correct parameter list for the symbol type you want to create. This is a breaking change, because the old version allowed you to pass any parameter list to any symbol creation function.

## 2.2.3

Upgraded dependencies, which includes a new major version of Typescript (5.0). With this version the `main` field in `package.json` apparently became necessary, because of the package organization, and has been set in this release.

## 2.2.2
- Some improvements in the symbol table implementation.
- Updated dependencies.
- PR #76 (fixes bug #23) Account for empty and fully-optional-body rules when collecting tokens, thanks to Aaron Braunstein.

## 2.2.1
Reverted changes from `any` to `unknown` for `SymbolTable.addNewSymbolOfType`. It works in the tests, but is not accepted by consumers of the node module.

## 2.2.0
- Added `InterfaceSymbol` to SymbolTable and enhanced `ClassSymbol` for interface implementations.
- Added a modifier and a visibility field to Symbol, so that's available for all symbols now. Removed the obsolete visibility field from method and field symbols.

## 2.1.0
- It turned out that synchronous symbol retrieval methods have their value, so I brought them back by adding `...Sync()` variants of all methods with an async behavior.
- Brought back and extended project tests on Github.
- Upgraded module dependencies.
- Cleaned up the code again, now with latest eslint settings.

## 2.0.2
- `getAllSymbols<T>` now returns symbols of type T (instead of `Symbol`), like all other enumeration methods.

## 2.0.1
- Breaking change: some of the methods in the symbol table implementation, which may require extra work return now promises (symbol collections and resolver methods). This allows also to override them and return asynchronous results which are constructed from external resources (like database symbols).

## 1.1.16
- Fixed an issue where wrong tokens were collected for code completion.

## 1.1.15
- Fixed a problem with seen states in the follow set determination.

## 1.1.13
- Added a C# port of the library (thanks to Jonathan Philipps)
- Optionally allow to walk the rule stack on matching a preferred rule either top-down or bottom-up (which changes how preference is given to multiple preferred rules in a single stack).
- Rule candidates now include the start token index of where they matched.

## 1.1.12
- Updated modules with known vulnerabilities.
- Better handling of recursive rules in code completion (via precedence).
- Updated to latest antlr4ts.

## 1.1.8
- Renamed a number of methods for improved consistency (`next` -> `nextSibling` etc.) and updated some tests.
- Also simple symbols can be used to resolve other symbols (by delegating this call to their parents, if there's one).
- Added a method to find a symbol by it's associated context + added a test for that.

## 1.1.6
- Added Java port from Nick Stephen.
- Added contributors.txt file.
- A symbol can now store a `ParseTree` reference (which allows for terminal symbols in addition to parser rules).
- Added navigation functions to `Symbol` and `ScopedSymbol` (first/last child, next/previous sibling) and added tests for that.
- Fixed formatting and spelling in tests + `SymbolTable`.
- Updated readme.

## 1.1.1
- Travis-CI integration
- Implemented completion optimizations

## 1.0.4
- First public release
- Added initial tests, `SymbolTable` and `CodeCompletionCore` classes
