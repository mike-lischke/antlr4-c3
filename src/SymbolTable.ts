/*
 * This file is released under the MIT license.
 * Copyright (c) 2017, 2020, Mike Lischke
 *
 * See LICENSE file for more info.
 */

/* eslint-disable max-classes-per-file */

import { ParseTree } from "antlr4ts/tree/ParseTree";

export class DuplicateSymbolError extends Error { }

export enum MemberVisibility {
    Invalid = -1,
    Public = 0,
    Protected,
    Private,
    Library,
}

export enum TypeKind {
    Integer,
    Float,
    String,
    Boolean,
    Date,

    Class,
    Array,
    Alias,
}

export enum ReferenceKind {
    Irrelevant,
    Pointer,   // Default for most languages for dynamically allocated memory ("Type*" in C++).
    Reference, // "Type&" in C++
    Instance,  // "Type" as such and default for all value types.
}

// The root type interface. Used for typed symbols and type aliases.
export interface Type {
    name: string;

    // The super type of this type or empty if this is a fundamental type.
    // Also used as the target type for type aliases.
    baseTypes: Type[];
    kind: TypeKind;
    reference: ReferenceKind;
}

export interface SymbolTableOptions {
    allowDuplicateSymbols?: boolean;
}

// A single class for all fundamental types. They are distinguished via the kind field.
export class FundamentalType implements Type {
    public static readonly integerType = new FundamentalType("int", TypeKind.Integer, ReferenceKind.Instance);
    public static readonly floatType = new FundamentalType("float", TypeKind.Float, ReferenceKind.Instance);
    public static readonly stringType = new FundamentalType("string", TypeKind.String, ReferenceKind.Instance);
    public static readonly boolType = new FundamentalType("bool", TypeKind.Boolean, ReferenceKind.Instance);
    public static readonly dateType = new FundamentalType("date", TypeKind.Date, ReferenceKind.Instance);

    public name: string;

    private typeKind: TypeKind;
    private referenceKind: ReferenceKind;

    public constructor(name: string, typeKind: TypeKind, referenceKind: ReferenceKind) {
        this.name = name;
        this.typeKind = typeKind;
        this.referenceKind = referenceKind;
    }

    public get baseTypes(): Type[] {
        return [];
    }

    public get kind(): TypeKind {
        return this.typeKind;
    }

    public get reference(): ReferenceKind {
        return this.referenceKind;
    }

}

// The root of the symbol table class hierarchy: a symbol can be any manageable entity (like a block), not only
// things like variables or classes.
// We are using a class hierarchy here, instead of an enum or similar, to allow for easy extension and certain
// symbols can so provide additional APIs for simpler access to their sub elements, if needed.
export class Symbol {
    public name = "";           // The name of the scope or empty if anonymous.
    public context?: ParseTree; // Reference to the parse tree which contains this symbol.

    private theParent?: Symbol;

    public constructor(name = "") {
        this.name = name;
    }

    /**
     * The parent is usually a scoped symbol as only those can have children, but we allow
     * any symbol here for special scenarios.
     * This is rather an internal method and should rarely be used by external code.
     *
     * @param parent The new parent to use.
     */
    public setParent(parent: Symbol | undefined): void {
        this.theParent = parent;
    }

    public get parent(): Symbol | undefined {
        return this.theParent;
    }

    public get firstSibling(): Symbol {
        if (this.theParent instanceof ScopedSymbol) {
            return this.theParent.firstChild!;
        }

        return this;
    }

    /**
     * @returns the symbol before this symbol in its scope.
     */
    public get previousSibling(): Symbol | undefined {
        if (!(this.theParent instanceof ScopedSymbol)) {
            return this;
        }

        return this.theParent.previousSiblingOf(this);
    }

    /**
     * @returns the symbol following this symbol in its scope.
     */
    public get nextSibling(): Symbol | undefined {
        if (!(this.theParent instanceof ScopedSymbol)) {
            return this;
        }

        return this.theParent.nextSiblingOf(this);
    }

    public get lastSibling(): Symbol {
        if (this.theParent instanceof ScopedSymbol) {
            return this.theParent.lastChild!;
        }

        return this;
    }

    /**
     * @returns the next symbol in definition order, regardless of the scope.
     */
    public get next(): Symbol | undefined {
        if (this.theParent instanceof ScopedSymbol) {
            return this.theParent.nextOf(this);
        }

        return undefined;
    }

    public removeFromParent(): void {
        if (this.theParent instanceof ScopedSymbol) {
            this.theParent.removeSymbol(this);
            this.theParent = undefined;
        }
    }

    /**
     *
     * @param name The name of the symbol to find.
     * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
     *                  (recursively).
     * @returns the first symbol with a given name, in the order of appearance in this scope
     *          or any of the parent scopes (conditionally).
     */
    public async resolve(name: string, localOnly = false): Promise<Symbol | undefined> {
        if (this.theParent instanceof ScopedSymbol) {
            return this.theParent.resolve(name, localOnly);
        }

        return Promise.resolve(undefined);
    }

    /**
     * @returns the outermost entity (below the symbol table) that holds us.
     */
    public get root(): Symbol | undefined {
        let run = this.theParent;
        while (run) {
            if (!run.theParent || (run.theParent instanceof SymbolTable)) {
                return run;
            }
            run = run.theParent;
        }

        return run;
    }

    /**
     * @returns the symbol table we belong too or undefined if we are not yet assigned.
     */
    public get symbolTable(): SymbolTable | undefined {
        if (this instanceof SymbolTable) {
            return this;
        }

        let run = this.theParent;
        while (run) {
            if (run instanceof SymbolTable) { return run; }
            run = run.theParent;
        }

        return undefined;
    }

    /**
     * @param t The type of objects to return.
     * @returns the next enclosing parent of the given type.
     */
    public getParentOfType<T extends Symbol>(t: new (...args: any[]) => T): T | undefined {
        let run = this.theParent;
        while (run) {
            if (run instanceof t) { return run; }
            run = run.theParent;
        }

        return undefined;
    }

    /**
     * @returns the list of symbols from this one up to root.
     */
    public get symbolPath(): Symbol[] {
        const result: Symbol[] = [];

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let run: Symbol = this;
        while (run) {
            result.push(run);
            if (!run.theParent) { break; }
            run = run.theParent;
        }

        return result;
    }

    /**
     * Creates a qualified identifier from this symbol and its parent.
     * If `full` is true then all parents are traversed in addition to this instance.
     *
     * @param separator The string to be used between the parts.
     * @param full A flag indicating if the full path is to be returned.
     * @param includeAnonymous Use a special string for empty scope names.
     * @returns the constructed qualified identifier.
     */
    public qualifiedName(separator = ".", full = false, includeAnonymous = false): string {
        if (!includeAnonymous && this.name.length === 0) {
            return "";
        }

        let result: string = this.name.length === 0 ? "<anonymous>" : this.name;
        let run = this.theParent;
        while (run) {
            if (includeAnonymous || run.name.length > 0) {
                result = (run.name.length === 0 ? "<anonymous>" : run.name) + separator + result;
            }

            if (!full || !run.theParent) {
                break;
            }
            run = run.theParent;
        }

        return result;
    }

}

// A symbol with an attached type (variables, fields etc.).
export class TypedSymbol extends Symbol {
    public type: Type | undefined;

    public constructor(name: string, type?: Type) {
        super(name);
        this.type = type;
    }
}

// An alias for another type.
export class TypeAlias extends Symbol implements Type {
    public get baseTypes(): Type[] { return [this.targetType]; }
    public get kind(): TypeKind { return TypeKind.Alias; }
    public get reference(): ReferenceKind { return ReferenceKind.Irrelevant; }

    private targetType: Type;

    public constructor(name: string, target: Type) {
        super(name);
        this.targetType = target;
    }
}

// A symbol with a scope (so it can have child symbols).
export class ScopedSymbol extends Symbol {

    private _children: Symbol[] = []; // All child symbols in definition order.

    public constructor(name = "") {
        super(name);
    }

    public get children(): Symbol[] {
        // eslint-disable-next-line no-underscore-dangle
        return this._children;
    }

    public clear(): void {
        // eslint-disable-next-line no-underscore-dangle
        this._children = [];
    }

    /**
     * Adds the given symbol to this scope. If it belongs already to a different scope
     * it is removed from that before adding it here.
     *
     * @param symbol The symbol to add as a child.
     */
    public addSymbol(symbol: Symbol): void {
        symbol.removeFromParent();

        // Check for duplicates first.
        const symbolTable = this.symbolTable;
        if (!symbolTable || !symbolTable.options.allowDuplicateSymbols) {
            this.children.forEach((child) => {
                if (child === symbol || (symbol.name.length > 0 && child.name === symbol.name)) {
                    let name = symbol.name;
                    if (name.length === 0) {
                        name = "<anonymous>";
                    }

                    throw new DuplicateSymbolError("Attempt to add duplicate symbol '" + name + "'");
                }
            });
        }

        this.children.push(symbol);
        symbol.setParent(this);
    }

    public removeSymbol(symbol: Symbol): void {
        const index = this.children.indexOf(symbol);
        if (index > -1) {
            this.children.splice(index, 1);
            symbol.setParent(undefined);
        }
    }

    /**
     * @param t The type of of the objects to return.
     * @returns A promise resolving to all (nested) children of the given type.
     */
    public async getNestedSymbolsOfType<T extends Symbol>(t: new (...args: any[]) => T): Promise<T[]> {
        const result: T[] = [];

        const childPromises: Array<Promise<T[]>> = [];
        this.children.forEach((child) => {
            if (child instanceof t) {
                result.push(child);
            }

            if (child instanceof ScopedSymbol) {
                childPromises.push(child.getNestedSymbolsOfType(t));
            }
        });
        const childSymbols = await Promise.all(childPromises);
        childSymbols.forEach((entry) => {
            result.push(...entry);
        });

        return result;
    }

    /**
     * @param name If given only returns symbols with that name.
     * @returns A promise resolving to symbols from this and all nested scopes in the order they were defined.
     */
    public async getAllNestedSymbols(name?: string): Promise<Symbol[]> {
        const result: Symbol[] = [];

        const childPromises: Array<Promise<Symbol[]>> = [];
        this.children.forEach((child) => {
            if (!name || child.name === name) {
                result.push(child);
            }

            if (child instanceof ScopedSymbol) {
                childPromises.push(child.getAllNestedSymbols(name));
            }
        });
        const childSymbols = await Promise.all(childPromises);
        childSymbols.forEach((entry) => {
            result.push(...entry);
        });

        return result;
    }

    /**
     * @param t The type of of the objects to return.
     * @returns A promise resolving to direct children of a given type.
     */
    public getSymbolsOfType<T extends Symbol>(t: new (...args: any[]) => T): Promise<T[]> {
        return new Promise((resolve) => {
            const result: T[] = [];
            this.children.forEach((child) => {
                if (child instanceof t) {
                    result.push(child);
                }
            });

            resolve(result);
        });
    }

    /**
     * TODO: add optional position dependency (only symbols defined before a given caret pos are viable).
     *
     * @param t The type of the objects to return.
     * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
     *                  (recursively).
     * @returns A promise resolving to all symbols of the the given type, accessible from this scope (if localOnly is
     *          false), within the owning symbol table.
     */
    public async getAllSymbols<T extends Symbol>(t: new (...args: any[]) => T,
        localOnly = false): Promise<Symbol[]> {
        const result: Symbol[] = [];

        // Special handling for namespaces, which act like grouping symbols in this scope,
        // so we show them as available in this scope.
        for (const child of this.children) {
            if (child instanceof t) {
                result.push(child);
            }

            if (child instanceof NamespaceSymbol) {
                const childSymbols = await child.getAllSymbols(t, true);
                result.push(...childSymbols);
            }
        }

        if (!localOnly) {
            if (this.parent instanceof ScopedSymbol) {
                const childSymbols = await this.getAllSymbols(t, true);
                result.push(...childSymbols);
            }
        }

        return result;
    }

    /**
     * @param name The name of the symbol to resolve.
     * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
     *                  (recursively).
     * @returns the first symbol with a given name, in the order of appearance in this scope
     *          or any of the parent scopes (conditionally).
     */
    public async resolve(name: string, localOnly = false): Promise<Symbol | undefined> {
        return new Promise((resolve, reject) => {
            for (const child of this.children) {
                if (child.name === name) {
                    resolve(child);

                    return;
                }
            }

            // Nothing found locally. Let the parent continue.
            if (!localOnly) {
                if (this.parent instanceof ScopedSymbol) {
                    resolve(this.parent.resolve(name, false));

                    return;
                }
            }

            resolve(undefined);
        });
    }

    /**
     * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
     *                  (recursively).
     * @returns all accessible symbols that have a type assigned.
     */
    public getTypedSymbols(localOnly = true): TypedSymbol[] {
        const result: TypedSymbol[] = [];

        for (const child of this.children) {
            if (child instanceof TypedSymbol) {
                result.push(child);
            }
        }

        if (!localOnly) {
            if (this.parent instanceof ScopedSymbol) {
                const localList = this.parent.getTypedSymbols(true);
                result.push(...localList);
            }
        }

        return result;
    }

    /**
     * The names of all accessible symbols with a type.
     *
     * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
     *                  (recursively).
     * @returns A list of names.
     */
    public getTypedSymbolNames(localOnly = true): string[] {
        const result: string[] = [];
        for (const child of this.children) {
            if (child instanceof TypedSymbol) {
                result.push(child.name);
            }
        }

        if (!localOnly) {
            if (this.parent instanceof ScopedSymbol) {
                const localList = (this.parent).getTypedSymbolNames(true);
                result.push(...localList);
            }
        }

        return result;
    }

    /**
     * @returns A promise resolving to all direct child symbols with a scope (e.g. classes in a module).
     */
    public get directScopes(): Promise<ScopedSymbol[]> {
        return this.getSymbolsOfType(ScopedSymbol);
    }

    /**
     * @returns the symbol located at the given path through the symbol hierarchy.
     * @param path The path consisting of symbol names separator by `separator`.
     * @param separator The character to separate path segments.
     */
    public symbolFromPath(path: string, separator = "."): Symbol | undefined {
        const elements = path.split(separator);
        let index = 0;
        if (elements[0] === this.name || elements[0].length === 0) {
            ++index;
        }

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let result: Symbol = this;
        while (index < elements.length) {
            if (!(result instanceof ScopedSymbol)) {
                return undefined;
            }

            // eslint-disable-next-line no-loop-func
            const child = result.children.find((candidate) => candidate.name === elements[index]);
            if (!child) {
                return undefined;
            }

            result = child;
            ++index;
        }

        return result;
    }

    /**
     * @param child The child to search for.
     * @returns the index of the given child symbol in the child list or -1 if it couldn't be found.
     */
    public indexOfChild(child: Symbol): number {
        return this.children.findIndex((value: Symbol, index: number) => value === child);
    }

    /**
     * @param child The reference node.
     * @returns the sibling symbol after the given child symbol, if one exists.
     */
    public nextSiblingOf(child: Symbol): Symbol | undefined {
        const index = this.indexOfChild(child);
        if (index === -1 || index >= this.children.length - 1) {
            return;
        }

        return this.children[index + 1];
    }

    /**
     * @param child The reference node.
     * @returns the sibling symbol before the given child symbol, if one exists.
     */
    public previousSiblingOf(child: Symbol): Symbol | undefined {
        const index = this.indexOfChild(child);
        if (index < 1) {
            return;
        }

        return this.children[index - 1];
    }

    public get firstChild(): Symbol | undefined {
        if (this.children.length > 0) {
            return this.children[0];
        }

        return undefined;
    }

    public get lastChild(): Symbol | undefined {
        if (this.children.length > 0) {
            return this.children[this.children.length - 1];
        }

        return undefined;
    }

    /**
     * @param child The reference node.
     * @returns the next symbol in definition order, regardless of the scope.
     */
    public nextOf(child: Symbol): Symbol | undefined {
        if (!(child.parent instanceof ScopedSymbol)) {
            return;
        }

        if (child.parent !== this) {
            return child.parent.nextOf(child);
        }

        if (child instanceof ScopedSymbol && child.children.length > 0) {
            return child.children[0];
        }

        const sibling = this.nextSiblingOf(child);
        if (sibling) {
            return sibling;
        }

        return (this.parent as ScopedSymbol).nextOf(this);
    }
}

export class NamespaceSymbol extends ScopedSymbol {
}

export class BlockSymbol extends ScopedSymbol {
}

export class VariableSymbol extends TypedSymbol {

    public value: any;

    public constructor(name: string, value: any, type?: Type) {
        super(name, type);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.value = value;
    }
}

export class LiteralSymbol extends TypedSymbol {
    public readonly value: any;

    public constructor(name: string, value: any, type?: Type) {
        super(name, type);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.value = value;
    }
}

export class ParameterSymbol extends VariableSymbol { }

// A standalone function/procedure/rule.
export class RoutineSymbol extends ScopedSymbol {
    private returnType?: Type; // Can be null if result is void.

    public constructor(name: string, returnType: Type) {
        super(name);
        this.returnType = returnType;
    }

    public getVariables(localOnly = true): Promise<VariableSymbol[]> {
        return this.getSymbolsOfType(VariableSymbol);
    }

    public getParameters(localOnly = true): Promise<ParameterSymbol[]> {
        return this.getSymbolsOfType(ParameterSymbol);
    }
}

export enum MethodFlags {
    None = 0,
    Virtual = 1,
    Const = 2,
    Overwritten = 4,
    SetterOrGetter = 8, // Distinguished by the return type.
    Explicit = 16,      // Special flag used e.g. in C++ for explicit c-tors.
}

// A routine which belongs to a class or other outer container structure.
export class MethodSymbol extends RoutineSymbol {
    public methodFlags = MethodFlags.None;
    public visibility = MemberVisibility.Invalid;
}

export class FieldSymbol extends VariableSymbol {
    public visibility = MemberVisibility.Invalid;

    public setter?: MethodSymbol;
    public getter?: MethodSymbol;

}

// Classes and structs.
export class ClassSymbol extends ScopedSymbol implements Type {

    public get baseTypes(): Type[] { return this.superClasses; }
    public get kind(): TypeKind { return TypeKind.Class; }
    public get reference(): ReferenceKind { return this.referenceKind; }

    public isStruct = false;

    /**
     * Usually only one member, unless the language supports multiple inheritance.
     */
    public readonly superClasses: ClassSymbol[] = [];

    private referenceKind: ReferenceKind;

    public constructor(name: string, referenceKind: ReferenceKind, ...superClass: ClassSymbol[]) {
        super(name);
        this.referenceKind = referenceKind;
        this.superClasses.push(...superClass); // Standard case: a single super class.
    }

    /**
     * @param includeInherited Not used.
     * @returns a list of all methods.
     */
    public getMethods(includeInherited = false): Promise<MethodSymbol[]> {
        return this.getSymbolsOfType(MethodSymbol);
    }

    /**
     * @param includeInherited Not used.
     * @returns all fields.
     */
    public getFields(includeInherited = false): Promise<FieldSymbol[]> {
        return this.getSymbolsOfType(FieldSymbol);
    }

}

export class ArrayType extends Symbol implements Type {

    public get baseTypes(): Type[] { return []; }
    public get kind(): TypeKind { return TypeKind.Array; }
    public get reference(): ReferenceKind { return this.referenceKind; }

    public readonly elementType: Type;
    public readonly size: number; // > 0 if fixed length.

    private referenceKind: ReferenceKind;

    public constructor(name: string, referenceKind: ReferenceKind, elemType: Type, size = 0) {
        super(name);
        this.referenceKind = referenceKind;
        this.elementType = elemType;
        this.size = size;
    }
}

// The main class managing all the symbols for a top level entity like a file, library or similar.
export class SymbolTable extends ScopedSymbol {
    // Other symbol information available to this instance.
    protected dependencies: Set<SymbolTable> = new Set();

    public constructor(name: string, public readonly options: SymbolTableOptions) {
        super(name);
    }

    public clear() {
        super.clear();
        this.dependencies.clear();
    }

    public addDependencies(...tables: SymbolTable[]) {
        tables.forEach((value, key) => {
            this.dependencies.add(value);
        });
    }

    public removeDependency(table: SymbolTable) {
        if (this.dependencies.has(table)) {
            this.dependencies.delete(table);
        }
    }

    /**
     * @returns instance information, mostly relevant for unit testing.
     */
    public get info() {
        return {
            dependencyCount: this.dependencies.size,
            symbolCount: this.children.length,
        };
    }

    public addNewSymbolOfType<T extends Symbol>(t: new (...args: any[]) => T,
        parent: ScopedSymbol | undefined, ...args: any[]): T {

        const result = new t(...args);
        if (!parent || parent === this) {
            this.addSymbol(result);
        } else {
            parent.addSymbol(result);
        }

        return result;
    }

    /**
     * Adds a new namespace to the symbol table or the given parent. The path parameter specifies a single namespace
     * name or a chain of namespaces (which can be e.g. "outer.intermittent.inner.final").
     * If any of the parent namespaces is missing they are created implicitly. The final part must not exist however
     * or you'll get a duplicate symbol error.
     *
     * @param parent The parent to add the namespace to.
     * @param path The namespace path.
     * @param delimiter The delimiter used in the path.
     * @returns The new symbol.
     */
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

    public async getAllSymbols<T extends Symbol>(t?: new (...args: any[]) => T, localOnly = false): Promise<Symbol[]> {
        const result = await super.getAllSymbols(t ?? Symbol, localOnly);

        if (!localOnly) {
            const dependencyResults = await Promise.all([...this.dependencies].map((dependency) => (
                dependency.getAllSymbols(t, localOnly)
            )));

            dependencyResults.forEach((value) => {
                result.push(...value);
            });
        }

        return result;
    }

    /**
     * Looks for a symbol which is connected with a given parse tree context.
     *
     * @param context The context to search for.
     * @returns A promise resolving to the found symbol or undefined.
     */
    public async symbolWithContext(context: ParseTree): Promise<Symbol | undefined> {
        /**
         * Local function to find a symbol recursively.
         *
         * @param symbol The symbol to search through.
         * @returns The symbol with the given context, if found.
         */
        const findRecursive = (symbol: Symbol): Symbol | undefined => {
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
        };


        let symbols = await this.getAllSymbols(Symbol);
        for (const symbol of symbols) {
            const result = findRecursive(symbol);
            if (result) {
                return result;
            }
        }

        for (const dependency of this.dependencies) {
            symbols = await dependency.getAllSymbols(Symbol);
            for (const symbol of symbols) {
                const result = findRecursive(symbol);
                if (result) {
                    result;
                }
            }
        }
    }

    /**
     * Resolves a name to a symbol.
     *
     * @param name The name of the symbol to find.
     * @param localOnly A flag indicating if only this symbol table should be used or also its dependencies.
     * @returns The found symbol or undefined.
     */
    public async resolve(name: string, localOnly = false): Promise<Symbol | undefined> {
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

}
