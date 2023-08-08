/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ParseTree } from "antlr4ts/tree/ParseTree";

import { MemberVisibility, Modifier, SymbolConstructor } from "./types";

import { type IScopedSymbol } from "./ScopedSymbol";
import { type ISymbolTable } from "./SymbolTable";

/**
 * The root of the symbol table class hierarchy: a symbol can be any manageable entity (like a block), not only
 * things like variables or classes.
 * We are using a class hierarchy here, instead of an enum or similar, to allow for easy extension and certain
 * symbols can so provide additional APIs for simpler access to their sub elements, if needed.
 */
export class BaseSymbol {
    /** The name of the symbol or empty if anonymous. */
    public name;

    /** Reference to the parse tree which contains this symbol. */
    public context?: ParseTree;

    public readonly modifiers = new Set<Modifier>();
    public visibility = MemberVisibility.Unknown;

    #parent?: IScopedSymbol;

    public constructor(name = "") {
        this.name = name;
    }

    public get parent(): IScopedSymbol | undefined {
        return this.#parent;
    }

    public get firstSibling(): BaseSymbol | undefined {
        if (!this.#parent) {
            return undefined;
        }

        return this.#parent?.firstChild;
    }

    /**
     * @returns the symbol before this symbol in its scope.
     */
    public get previousSibling(): BaseSymbol | undefined {
        if (!this.#parent) {
            return undefined;
        }

        if (!this.#parent) {
            return this;
        }

        return this.#parent.previousSiblingOf(this);
    }

    /**
     * @returns the symbol following this symbol in its scope.
     */
    public get nextSibling(): BaseSymbol | undefined {
        return this.#parent?.nextSiblingOf(this);
    }

    public get lastSibling(): BaseSymbol | undefined {
        return this.#parent?.lastChild;
    }

    /**
     * @returns the next symbol in definition order, regardless of the scope.
     */
    public get next(): BaseSymbol | undefined {
        return this.#parent?.nextOf(this);
    }

    /**
     * @returns the outermost entity (below the symbol table) that holds us.
     */
    public get root(): BaseSymbol | undefined {
        let run = this.#parent;
        while (run) {
            if (!run.parent || this.isSymbolTable(run.parent)) {
                return run;
            }
            run = run.parent;
        }

        return run;
    }

    /**
     * @returns the symbol table we belong too or undefined if we are not yet assigned.
     */
    public get symbolTable(): ISymbolTable | undefined {
        if (this.isSymbolTable(this)) {
            return this;
        }

        let run = this.#parent;
        while (run) {
            if (this.isSymbolTable(run)) {
                return run;
            }
            run = run.parent;
        }

        return undefined;
    }

    /**
     * @returns the list of symbols from this one up to root.
     */
    public get symbolPath(): BaseSymbol[] {
        const result: BaseSymbol[] = [];

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let run: BaseSymbol = this;
        while (run) {
            result.push(run);
            if (!run.parent) {
                break;
            }
            run = run.parent;
        }

        return result;
    }

    /**
     * This is rather an internal method and should rarely be used by external code.
     *
     * @param parent The new parent to use.
     */
    public setParent(parent?: IScopedSymbol): void {
        this.#parent = parent;
    }

    /**
     * Remove this symbol from its parent scope.
     */
    public removeFromParent(): void {
        this.#parent?.removeSymbol(this);
        this.#parent = undefined;
    }

    /**
     * Asynchronously looks up a symbol with a given name, in a bottom-up manner.
     *
     * @param name The name of the symbol to find.
     * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
     *                  (recursively).
     *
     * @returns A promise resolving to the first symbol with a given name, in the order of appearance in this scope
     *          or any of the parent scopes (conditionally).
     */
    public async resolve(name: string, localOnly = false): Promise<BaseSymbol | undefined> {
        return this.#parent?.resolve(name, localOnly);
    }

    /**
     * Synchronously looks up a symbol with a given name, in a bottom-up manner.
     *
     * @param name The name of the symbol to find.
     * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
     *                  (recursively).
     *
     * @returns the first symbol with a given name, in the order of appearance in this scope
     *          or any of the parent scopes (conditionally).
     */
    public resolveSync(name: string, localOnly = false): BaseSymbol | undefined {
        return this.#parent?.resolveSync(name, localOnly);
    }

    /**
     * @param t The type of objects to return.
     *
     * @returns the next enclosing parent of the given type.
     */
    public getParentOfType<T extends BaseSymbol>(t: SymbolConstructor<T, unknown[]>): T | undefined {
        let run = this.#parent;
        while (run) {
            if (run instanceof t) {
                return run;
            }
            run = run.parent;
        }

        return undefined;
    }

    /**
     * Creates a qualified identifier from this symbol and its parent.
     * If `full` is true then all parents are traversed in addition to this instance.
     *
     * @param separator The string to be used between the parts.
     * @param full A flag indicating if the full path is to be returned.
     * @param includeAnonymous Use a special string for empty scope names.
     *
     * @returns the constructed qualified identifier.
     */
    public qualifiedName(separator = ".", full = false, includeAnonymous = false): string {
        if (!includeAnonymous && this.name.length === 0) {
            return "";
        }

        let result: string = this.name.length === 0 ? "<anonymous>" : this.name;
        let run = this.#parent;
        while (run) {
            if (includeAnonymous || run.name.length > 0) {
                result = (run.name.length === 0 ? "<anonymous>" : run.name) + separator + result;
            }

            if (!full || !run.parent) {
                break;
            }
            run = run.parent;
        }

        return result;
    }

    /**
     * Type guard to check for ISymbolTable.
     *
     * @param candidate The object to check.
     *
     * @returns true if the object is a symbol table.
     */
    private isSymbolTable(candidate: unknown): candidate is ISymbolTable {
        return (candidate as ISymbolTable).info !== undefined;
    }
}
