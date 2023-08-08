/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ISymbolTableOptions, SymbolConstructor } from "./types";

import { BaseSymbol } from "./BaseSymbol";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { IScopedSymbol, ScopedSymbol } from "./ScopedSymbol";
import { NamespaceSymbol } from "./NamespaceSymbol";

export interface ISymbolTable extends IScopedSymbol {
    options: ISymbolTableOptions;

    /**
     * @returns instance information, mostly relevant for unit testing.
     */
    info: { dependencyCount: number, symbolCount: number; };

    clear(): void;
    addDependencies(...tables: SymbolTable[]): void;
    removeDependency(table: SymbolTable): void;
    addNewSymbolOfType<T extends BaseSymbol, Args extends unknown[]>(t: SymbolConstructor<T, Args>,
        parent: ScopedSymbol | undefined, ...args: Args): T;

    /**
     * Asynchronously adds a new namespace to the symbol table or the given parent. The path parameter specifies a
     * single namespace name or a chain of namespaces (which can be e.g. "outer.intermittent.inner.final").
     * If any of the parent namespaces is missing they are created implicitly. The final part must not exist however
     * or you'll get a duplicate symbol error.
     *
     * @param parent The parent to add the namespace to.
     * @param path The namespace path.
     * @param delimiter The delimiter used in the path.
     *
     * @returns The new symbol.
     */
    addNewNamespaceFromPath(parent: ScopedSymbol | undefined, path: string,
        delimiter?: string): Promise<NamespaceSymbol>;

    /**
     * Synchronously adds a new namespace to the symbol table or the given parent. The path parameter specifies a
     * single namespace name or a chain of namespaces (which can be e.g. "outer.intermittent.inner.final").
     * If any of the parent namespaces is missing they are created implicitly. The final part must not exist however
     * or you'll get a duplicate symbol error.
     *
     * @param parent The parent to add the namespace to.
     * @param path The namespace path.
     * @param delimiter The delimiter used in the path.
     *
     * @returns The new symbol.
     */
    addNewNamespaceFromPathSync(parent: ScopedSymbol | undefined, path: string,
        delimiter?: string): NamespaceSymbol;

    /**
     * Asynchronously returns all symbols from this scope (and optionally those from dependencies) of a specific type.
     *
     * @param t The type of the symbols to return.
     * @param localOnly If true do not search dependencies.
     *
     * @returns A promise which resolves when all symbols are collected.
     */
    getAllSymbols<T extends BaseSymbol, Args extends unknown[]>(t: SymbolConstructor<T, Args>,
        localOnly: boolean): Promise<T[]>;

    /**
     * Synchronously returns all symbols from this scope (and optionally those from dependencies) of a specific type.
     *
     * @param t The type of the symbols to return.
     * @param localOnly If true do not search dependencies.
     *
     * @returns A list with all symbols.
     */
    getAllSymbolsSync<T extends BaseSymbol, Args extends unknown[]>(t: SymbolConstructor<T, Args>,
        localOnly: boolean): T[];

    /**
     * Asynchronously looks for a symbol which is connected with a given parse tree context.
     *
     * @param context The context to search for.
     *
     * @returns A promise resolving to the found symbol or undefined.
     */
    symbolWithContext(context: ParseTree): Promise<BaseSymbol | undefined>;

    /**
     * Synchronously looks for a symbol which is connected with a given parse tree context.
     *
     * @param context The context to search for.
     *
     * @returns The found symbol or undefined.
     */
    symbolWithContextSync(context: ParseTree): BaseSymbol | undefined;

    /**
     * Asynchronously resolves a name to a symbol.
     *
     * @param name The name of the symbol to find.
     * @param localOnly A flag indicating if only this symbol table should be used or also its dependencies.
     *
     * @returns A promise resolving to the found symbol or undefined.
     */
    resolve(name: string, localOnly: boolean): Promise<BaseSymbol | undefined>;

    /**
     * Synchronously resolves a name to a symbol.
     *
     * @param name The name of the symbol to find.
     * @param localOnly A flag indicating if only this symbol table should be used or also its dependencies.
     *
     * @returns The found symbol or undefined.
     */
    resolveSync(name: string, localOnly: boolean): BaseSymbol | undefined;
}

/** The main class managing all the symbols for a top level entity like a file, library or similar. */
export class SymbolTable extends ScopedSymbol implements ISymbolTable {
    /**  Other symbol information available to this instance. */
    protected dependencies: Set<SymbolTable> = new Set();

    public constructor(name: string, public readonly options: ISymbolTableOptions) {
        super(name);
    }

    public get info(): { dependencyCount: number, symbolCount: number; } {
        return {
            dependencyCount: this.dependencies.size,
            symbolCount: this.children.length,
        };
    }

    public override clear(): void {
        super.clear();
        this.dependencies.clear();
    }

    public addDependencies(...tables: SymbolTable[]): void {
        tables.forEach((value) => {
            this.dependencies.add(value);
        });
    }

    public removeDependency(table: SymbolTable): void {
        if (this.dependencies.has(table)) {
            this.dependencies.delete(table);
        }
    }

    public addNewSymbolOfType<T extends BaseSymbol, Args extends unknown[]>(t: SymbolConstructor<T, Args>,
        parent: ScopedSymbol | undefined, ...args: Args): T {

        const result = new t(...args);
        if (!parent || parent === this) {
            this.addSymbol(result);
        } else {
            parent.addSymbol(result);
        }

        return result;
    }

    public async addNewNamespaceFromPath(parent: ScopedSymbol | undefined, path: string,
        delimiter = "."): Promise<NamespaceSymbol> {
        const parts = path.split(delimiter);
        let i = 0;
        let currentParent = (parent === undefined) ? this : parent;
        while (i < parts.length - 1) {
            let namespace = await currentParent.resolve(parts[i], true) as NamespaceSymbol;
            if (namespace === undefined) {
                namespace = this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[i]);
            }
            currentParent = namespace;
            ++i;
        }

        return this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[parts.length - 1]);
    }

    public addNewNamespaceFromPathSync(parent: ScopedSymbol | undefined, path: string,
        delimiter = "."): NamespaceSymbol {
        const parts = path.split(delimiter);
        let i = 0;
        let currentParent = (parent === undefined) ? this : parent;

        while (i < parts.length - 1) {
            let namespace = currentParent.resolveSync(parts[i], true) as NamespaceSymbol;
            if (namespace === undefined) {
                namespace = this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[i]);
            }
            currentParent = namespace;
            ++i;
        }

        return this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[parts.length - 1]);
    }

    public override async getAllSymbols<T extends BaseSymbol, Args extends unknown[]>(t: SymbolConstructor<T, Args>,
        localOnly = false): Promise<T[]> {
        const result: T[] = await super.getAllSymbols(t, localOnly);

        if (!localOnly) {
            const dependencyResults = await Promise.all([...this.dependencies].map((dependency) => {
                return (
                    dependency.getAllSymbols(t, localOnly)
                );
            }));

            dependencyResults.forEach((value) => {
                result.push(...value);
            });
        }

        return result;
    }

    public override getAllSymbolsSync<T extends BaseSymbol, Args extends unknown[]>(t: SymbolConstructor<T, Args>,
        localOnly = false): T[] {
        const result: T[] = super.getAllSymbolsSync(t, localOnly);

        if (!localOnly) {
            this.dependencies.forEach((dependency) => {
                result.push(...dependency.getAllSymbolsSync(t, localOnly));
            });
        }

        return result;
    }

    public async symbolWithContext(context: ParseTree): Promise<BaseSymbol | undefined> {
        /**
         * Local function to find a symbol recursively.
         *
         * @param symbol The symbol to search through.
         *
         * @returns The symbol with the given context, if found.
         */
        const findRecursive = (symbol: BaseSymbol): BaseSymbol | undefined => {
            if (symbol.context === context) {
                return symbol;
            }

            if (symbol instanceof ScopedSymbol) {
                for (const child of symbol.children) {
                    const result = findRecursive(child);
                    if (result) {
                        return result;
                    }
                }
            }

            return undefined;
        };

        let symbols = await this.getAllSymbols(BaseSymbol);
        for (const symbol of symbols) {
            const result = findRecursive(symbol);
            if (result) {
                return result;
            }
        }

        for (const dependency of this.dependencies) {
            symbols = await dependency.getAllSymbols(BaseSymbol);
            for (const symbol of symbols) {
                const result = findRecursive(symbol);
                if (result) {
                    return result;
                }
            }
        }

        return undefined;
    }

    public symbolWithContextSync(context: ParseTree): BaseSymbol | undefined {
        /**
         * Local function to find a symbol recursively.
         *
         * @param symbol The symbol to search through.
         *
         * @returns The symbol with the given context, if found.
         */
        const findRecursive = (symbol: BaseSymbol): BaseSymbol | undefined => {
            if (symbol.context === context) {
                return symbol;
            }

            if (symbol instanceof ScopedSymbol) {
                for (const child of symbol.children) {
                    const result = findRecursive(child);
                    if (result) {
                        return result;
                    }
                }
            }

            return undefined;
        };

        let symbols = this.getAllSymbolsSync(BaseSymbol);
        for (const symbol of symbols) {
            const result = findRecursive(symbol);
            if (result) {
                return result;
            }
        }

        for (const dependency of this.dependencies) {
            symbols = dependency.getAllSymbolsSync(BaseSymbol);
            for (const symbol of symbols) {
                const result = findRecursive(symbol);
                if (result) {
                    return result;
                }
            }
        }

        return undefined;
    }

    public override async resolve(name: string, localOnly = false): Promise<BaseSymbol | undefined> {
        let result = await super.resolve(name, localOnly);
        if (!result && !localOnly) {
            for (const dependency of this.dependencies) {
                result = await dependency.resolve(name, false);
                if (result) {
                    return result;
                }
            }
        }

        return result;
    }

    public override resolveSync(name: string, localOnly = false): BaseSymbol | undefined {
        let result = super.resolveSync(name, localOnly);
        if (!result && !localOnly) {
            for (const dependency of this.dependencies) {
                result = dependency.resolveSync(name, false);
                if (result) {
                    return result;
                }
            }
        }

        return result;
    }
}
