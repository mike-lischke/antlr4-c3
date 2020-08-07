/*
 * This file is released under the MIT license.
 * Copyright (c) 2017, 2020, Mike Lischke
 *
 * See LICENSE file for more info.
 */

'use strict';

import { ParseTree } from 'antlr4ts/tree/ParseTree';

export class DuplicateSymbolError extends Error { };

export enum MemberVisibility {
    Invalid = -1,
    Public = 0,
    Protected,
    Private,
    Library,
};

export enum TypeKind {
    Integer,
    Float,
    String,
    Boolean,
    Date,

    Class,
    Array,
    Alias,
};

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
};

export interface SymbolTableOptions {
    allowDuplicateSymbols?: boolean;
}

// A single class for all fundamental types. They are distinguished via the kind field.
export class FundamentalType implements Type {
    public name: string;

    public get baseTypes(): Type[] { return []; }
    public get kind(): TypeKind { return this.typeKind; }
    public get reference(): ReferenceKind { return this.referenceKind; }

    public static readonly integerType: FundamentalType = new FundamentalType("int", TypeKind.Integer, ReferenceKind.Instance);
    public static readonly floatType: FundamentalType = new FundamentalType("float", TypeKind.Float, ReferenceKind.Instance);
    public static readonly stringType: FundamentalType = new FundamentalType("string", TypeKind.String, ReferenceKind.Instance);
    public static readonly boolType: FundamentalType = new FundamentalType("bool", TypeKind.Boolean, ReferenceKind.Instance);
    public static readonly dateType: FundamentalType = new FundamentalType("date", TypeKind.Date, ReferenceKind.Instance);

    constructor(name: string, typeKind: TypeKind, referenceKind: ReferenceKind) {
        this.name = name;
        this.typeKind = typeKind;
        this.referenceKind = referenceKind;
    }

    private typeKind: TypeKind;
    private referenceKind: ReferenceKind;
}

// The root of the symbol table class hierarchy: a symbol can be any manageable entity (like a block), not only
// things like variables or classes.
// We are using a class hierarchy here, instead of an enum or similar, to allow for easy extension and certain
// symbols can so provide additional APIs for simpler access to their sub elements, if needed.
export class Symbol {
    public name: string = ""; // The name of the scope or empty if anonymous.
    public context: ParseTree | undefined; // Reference to the parse tree which contains this symbol.

    constructor(name: string = "") {
        this.name = name;
    }

    /**
     * The parent is usually a scoped symbol as only those can have children, but we allow
     * any symbol here for special scenarios.
     * This is rather an internal method and should rarely be used by external code.
     */
    public setParent(parent: Symbol | undefined) {
        this._parent = parent;
    }

    public get parent(): Symbol | undefined {
        return this._parent;
    }

    public get firstSibling(): Symbol {
        if (this._parent instanceof ScopedSymbol) {
            return this._parent.firstChild!;
        }

        return this;
    }

    /**
     * Returns the symbol before this symbol in its scope.
     */
    public get previousSibling(): Symbol | undefined {
        if (!(this._parent instanceof ScopedSymbol)) {
            return this;
        }

        let result = this._parent.previousSiblingOf(this);
        if (result) {
            return result;
        }
    }

    /**
     * Returns the symbol following this symbol in its scope.
     */
    public get nextSibling(): Symbol | undefined {
        if (!(this._parent instanceof ScopedSymbol)) {
            return this;
        }

        let result = this._parent.nextSiblingOf(this);
        if (result) {
            return result;
        }
    }

    public get lastSibling(): Symbol {
        if (this._parent instanceof ScopedSymbol) {
            return this._parent.lastChild!;
        }

        return this;
    }

    /**
     * Returns the next symbol in definition order, regardless of the scope.
     */
    public get next(): Symbol | undefined {
        if (this.parent instanceof ScopedSymbol) {
            return this.parent.nextOf(this);
        }
    }

    public removeFromParent() {
        if (this._parent instanceof ScopedSymbol) {
            this._parent.removeSymbol(this);
            this._parent = undefined;
        }
    }

    /**
     * Returns the first symbol with a given name, in the order of appearance in this scope
     * or any of the parent scopes (conditionally).
     */
    public resolve(name: string, localOnly = false): Symbol | undefined {
        if (this._parent instanceof ScopedSymbol) {
            return this._parent.resolve(name, localOnly);
        }
    }

    /**
     * Get the outermost entity (below the symbol table) that holds us.
     */
    public get root(): Symbol | undefined {
        let run = this._parent;
        while (run) {
            if (!run._parent || (run._parent instanceof SymbolTable))
                return run;
            run = run._parent;
        }
        return run;
    }

    /**
     * Returns the symbol table we belong too or undefined if we are not yet assigned.
     */
    public get symbolTable(): SymbolTable | undefined {
        if (this instanceof SymbolTable) {
            return this;
        }

        let run = this._parent;
        while (run) {
            if (run instanceof SymbolTable)
                return run;
            run = run._parent;
        }
        return undefined;
    }

    /**
     * Returns the next enclosing parent of the given type.
     */
    public getParentOfType<T extends Symbol>(t: new (...args: any[]) => T): T | undefined {
        let run = this._parent;
        while (run) {
            if (run instanceof t)
                return <T>run;
            run = run._parent;
        }
        return undefined;
    }

    /**
     * The list of symbols from this one up to root.
     */
    public get symbolPath(): Symbol[] {
        let result: Symbol[] = [];
        let run: Symbol = this;
        while (run) {
            result.push(run);
            if (!run._parent)
                break;
            run = run._parent;
        }
        return result;
    }

    /**
     * Creates a qualified identifier from this symbol and its parent.
     * If `full` is true then all parents are traversed in addition to this instance.
     */
    public qualifiedName(separator = ".", full = false, includeAnonymous = false): string {
        if (!includeAnonymous && this.name.length == 0)
            return "";

        let result: string = this.name.length == 0 ? "<anonymous>" : this.name;
        let run = this._parent;
        while (run) {
            if (includeAnonymous || run.name.length > 0) {
                result = (run.name.length == 0 ? "<anonymous>" : run.name) + separator + result;
                if (!full || !run._parent)
                    break;
            }
            run = run._parent;
        }
        return result;
    }

    protected _parent: Symbol | undefined;
};

// A symbol with an attached type (variables, fields etc.).
export class TypedSymbol extends Symbol {
    public type: Type | undefined;

    constructor(name: string, type?: Type) {
        super(name);
        this.type = type;
    }
};

// An alias for another type.
export class TypeAlias extends Symbol implements Type {
    public get baseTypes(): Type[] { return [this.targetType]; }
    public get kind(): TypeKind { return TypeKind.Alias; }
    public get reference(): ReferenceKind { return ReferenceKind.Irrelevant; }

    constructor(name: string, target: Type) {
        super(name);
        this.targetType = target;
    }

    private targetType: Type;
};

// A symbol with a scope (so it can have child symbols).
export class ScopedSymbol extends Symbol {
    constructor(name = "") {
        super(name)
    }

    public get children() {
        return this._children;
    }

    public clear() {
        this._children = [];
    }

    /**
     * Adds the given symbol to this scope. If it belongs already to a different scope
     * it is removed from that before adding it here.
     */
    public addSymbol(symbol: Symbol) {
        symbol.removeFromParent();

        // Check for duplicates first.
        let symbolTable = this.symbolTable;
        if (!symbolTable || !symbolTable.options.allowDuplicateSymbols) {
            for (let child of this._children) {
                if (child == symbol || (symbol.name.length > 0 && child.name == symbol.name)) {
                    let name = symbol.name;
                    if (name.length == 0)
                        name = "<anonymous>";
                    throw new DuplicateSymbolError("Attempt to add duplicate symbol '" + name + "'");
                }
            }
        }

        this._children.push(symbol);
        symbol.setParent(this);
    }

    public removeSymbol(symbol: Symbol) {
        let index = this._children.indexOf(symbol);
        if (index > -1) {
            this._children.splice(index, 1);
            symbol.setParent(undefined);
        }
    }

    /**
     * Returns all (nested) children of a given type.
     */
    public getNestedSymbolsOfType<T extends Symbol>(t: new (...args: any[]) => T): T[] {
        let result: T[] = [];

        for (let child of this._children) {
            if (child instanceof t)
                result.push(child);
            if (child instanceof ScopedSymbol)
                result.push(...child.getNestedSymbolsOfType(t));
        }

        return result;
    }

    /**
     * Returns symbols from this and all nested scopes in the order they were defined.
     * @param name If given only returns symbols with that name.
     */
    public getAllNestedSymbols(name?: string): Symbol[] {
        let result: Symbol[] = [];

        for (let child of this._children) {
            if (!name || child.name == name) {
                result.push(child);
            }
            if (child instanceof ScopedSymbol)
                result.push(...child.getAllNestedSymbols(name));
        }

        return result;
    }

    /**
     * Returns direct children of a given type.
     */
    public getSymbolsOfType<T extends Symbol>(t: new (...args: any[]) => T): T[] {
        let result: T[] = [];
        for (let child of this._children) {
            if (child instanceof t)
                result.push(<T>child);
        }

        return result;
    }

    /**
     * Returns all symbols of the the given type, accessible from this scope (if localOnly is false),
     * within the owning symbol table.
     * TODO: add optional position dependency (only symbols defined before a given caret pos are viable).
     */
    public getAllSymbols<T extends Symbol>(t: new (...args: any[]) => T, localOnly = false): Set<Symbol> {
        let result: Set<Symbol> = new Set();

        // Special handling for namespaces, which act like grouping symbols in this scope,
        // so we show them as available in this scope.
        for (let child of this._children) {
            if (child instanceof t) {
                result.add(child);
            }
            if (child instanceof NamespaceSymbol) {
                child.getAllSymbols(t, true).forEach(result.add, result);
            }
        }

        if (!localOnly) {
            if (this._parent instanceof ScopedSymbol) {
                this._parent.getAllSymbols(t, true).forEach(result.add, result);
            }
        }

        return result;
    }

    /**
     * Returns the first symbol with a given name, in the order of appearance in this scope
     * or any of the parent scopes (conditionally).
     */
    public resolve(name: string, localOnly = false): Symbol | undefined {
        for (let child of this._children) {
            if (child.name == name)
                return child;
        }

        // Nothing found locally. Let the parent continue.
        if (!localOnly) {
            if (this._parent instanceof ScopedSymbol)
                return this._parent.resolve(name, false);
        }

        return undefined;
    }

    /**
     * Returns all accessible symbols that have a type assigned.
     */
    public getTypedSymbols(localOnly = true): TypedSymbol[] {
        let result: TypedSymbol[] = []

        for (let child of this._children) {
            if (child instanceof TypedSymbol) {
                result.push(child);
            }
        }

        if (!localOnly) {
            if (this._parent instanceof ScopedSymbol) {
                let localList = (this._parent as ScopedSymbol).getTypedSymbols(true);
                result.push(...localList);
            }
        }

        return result;
    }

    /**
     * The names of all accessible symbols with a type.
     */
    public getTypedSymbolNames(localOnly = true): string[] {
        let result: string[] = [];
        for (let child of this._children) {
            if (child instanceof TypedSymbol) {
                result.push(child.name);
            }
        }

        if (!localOnly) {
            if (this._parent instanceof ScopedSymbol) {
                let localList = (this._parent as ScopedSymbol).getTypedSymbolNames(true);
                result.push(...localList);
            }
        }

        return result;
    }

    /**
     * Returns all direct child symbols with a scope (e.g. classes in a module).
     */
    public get directScopes(): ScopedSymbol[] {
        return this.getSymbolsOfType(ScopedSymbol);
    }

    /**
     * Returns the symbol located at the given path through the symbol hierarchy.
     * @param path The path consisting of symbol names separator by `separator`.
     * @param separator The character to separate path segments.
     */
    public symbolFromPath(path: string, separator: string = "."): Symbol | undefined {
        let elements = path.split(separator);
        let index = 0;
        if (elements[0] == this.name || elements[0].length == 0)
            ++index;

        let result: Symbol = this;
        while (index < elements.length) {
            if (!(result instanceof ScopedSymbol)) // Some parts left but found a non-scoped symbol?
                return undefined;

            let child = result._children.find(child => child.name == elements[index]);
            if (!child)
                return undefined;
            result = child;
            ++index;
        }
        return result;
    }

    /**
     * Returns the index of the given child symbol in the child list or -1 if it couldn't be found.
     */
    public indexOfChild(child: Symbol): number {
        return this._children.findIndex((value: Symbol, index: number) => {
            return value == child;
        });
    }

    /**
     * Returns the sibling symbol after the given child symbol, if one exists.
     */
    public nextSiblingOf(child: Symbol): Symbol | undefined {
        let index = this.indexOfChild(child);
        if (index == -1 || index >= this._children.length - 1) {
            return;
        }
        return this._children[index + 1];
    }

    /**
     * Returns the sibling symbol before the given child symbol, if one exists.
     */
    public previousSiblingOf(child: Symbol): Symbol | undefined {
        let index = this.indexOfChild(child);
        if (index < 1) {
            return;
        }
        return this._children[index - 1];
    }

    public get firstChild(): Symbol | undefined {
        if (this._children.length > 0) {
            return this._children[0];
        }
    }

    public get lastChild(): Symbol | undefined {
        if (this._children.length > 0) {
            return this._children[this._children.length - 1];
        }
    }

    /**
     * Returns the next symbol in definition order, regardless of the scope.
     */
    public nextOf(child: Symbol): Symbol | undefined {
        if (!(child.parent instanceof ScopedSymbol)) {
            return;
        }
        if (child.parent != this) {
            return child.parent.nextOf(child);
        }

        if (child instanceof ScopedSymbol && child.children.length > 0) {
            return child.children[0];
        }

        let sibling = this.nextSiblingOf(child);
        if (sibling) {
            return sibling;
        }

        return (this.parent as ScopedSymbol).nextOf(this);
    }

    private _children: Symbol[] = []; // All child symbols in definition order.
};

export class NamespaceSymbol extends ScopedSymbol {
}

export class BlockSymbol extends ScopedSymbol {
}

export class VariableSymbol extends TypedSymbol {
    constructor(name: string, value: any, type?: Type) {
        super(name, type);
        this.value = value;
    }

    value: any;
};

export class LiteralSymbol extends TypedSymbol {
    constructor(name: string, value: any, type?: Type) {
        super(name, type);
        this.value = value;
    }

    readonly value: any;
};

export class ParameterSymbol extends VariableSymbol { };

// A standalone function/procedure/rule.
export class RoutineSymbol extends ScopedSymbol {
    returnType: Type | undefined; // Can be null if result is void.

    constructor(name: string, returnType: Type) {
        super(name);
        this.returnType = returnType;
    }

    public getVariables(localOnly = true): VariableSymbol[] {
        return this.getSymbolsOfType(VariableSymbol);
    }

    public getParameters(localOnly = true): ParameterSymbol[] {
        return this.getSymbolsOfType(ParameterSymbol);
    }
};

export enum MethodFlags {
    None = 0,
    Virtual = 1,
    Const = 2,
    Overwritten = 4,
    SetterOrGetter = 8, // Distinguished by the return type.
    Explicit = 16,      // Special flag used e.g. in C++ for explicit c-tors.
};

// A routine which belongs to a class or other outer container structure.
export class MethodSymbol extends RoutineSymbol {
    public methodFlags = MethodFlags.None;
    public visibility = MemberVisibility.Invalid;

    constructor(name: string, returnType: Type) {
        super(name, returnType);
    }
};

export class FieldSymbol extends VariableSymbol {
    public visibility = MemberVisibility.Invalid;

    public setter: MethodSymbol | undefined;
    public getter: MethodSymbol | undefined;

    constructor(name: string, type: Type) {
        super(name, type);
    }
};

// Classes and structs.
export class ClassSymbol extends ScopedSymbol implements Type {

    public get baseTypes(): Type[] { return this.superClasses; };
    public get kind(): TypeKind { return TypeKind.Class; }
    public get reference(): ReferenceKind { return this.referenceKind; }

    public isStruct = false;

    /**
     * Usually only one member, unless the language supports multiple inheritance.
     */
    public readonly superClasses: ClassSymbol[] = [];

    constructor(name: string, referenceKind: ReferenceKind, ...superClass: ClassSymbol[]) {
        super(name);
        this.referenceKind = referenceKind;
        this.superClasses.push(...superClass); // Standard case: a single super class.
    }

    /**
     * Returns a list of all methods.
     */
    public getMethods(includeInherited = false): MethodSymbol[] {
        return this.getSymbolsOfType(MethodSymbol);
    }

    /**
     * Returns all fields.
     */
    public getFields(includeInherited = false): FieldSymbol[] {
        return this.getSymbolsOfType(FieldSymbol);
    }

    private referenceKind: ReferenceKind;
};

export class ArrayType extends Symbol implements Type {

    public get baseTypes(): Type[] { return []; };
    public get kind(): TypeKind { return TypeKind.Array; }
    public get reference(): ReferenceKind { return this.referenceKind; }

    public readonly elementType: Type;
    public readonly size: number; // > 0 if fixed length.

    constructor(name: string, referenceKind: ReferenceKind, elemType: Type, size = 0) {
        super(name);
        this.referenceKind = referenceKind;
        this.elementType = elemType;
        this.size = size;
    }

    private referenceKind: ReferenceKind;
};

// The main class managing all the symbols for a top level entity like a file, library or similar.
export class SymbolTable extends ScopedSymbol {
    constructor(name: string, public readonly options: SymbolTableOptions) {
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
     * Returns instance informations, mostly relevant for unit testing.
     */
    public get info() {
        return {
            dependencyCount: this.dependencies.size,
            symbolCount: this.children.length
        };
    }

    public addNewSymbolOfType<T extends Symbol>(t: new (...args: any[]) => T,
        parent: ScopedSymbol | undefined, ...args: any[]): T {

        let result = new t(...args);
        if (!parent || parent == this) {
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
     */
    public addNewNamespaceFromPath(parent: ScopedSymbol | undefined, path: string, delimiter = "."): NamespaceSymbol {
        let parts = path.split(delimiter);
        let i = 0;
        let currentParent = (parent == undefined) ? this : parent;
        while (i < parts.length - 1) {
            let namespace = currentParent.resolve(parts[i], true) as NamespaceSymbol;
            if (namespace == undefined) {
                namespace = this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[i]);
            }
            currentParent = namespace;
            ++i;
        }
        return this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[parts.length - 1]);
    }

    public getAllSymbols<T extends Symbol>(t?: new (...args: any[]) => T, localOnly: boolean = false): Set<Symbol> {
        let type = t ? t : Symbol;
        let result = super.getAllSymbols(type, localOnly);

        if (!localOnly) {
            for (let dependency of this.dependencies) {
                dependency.getAllSymbols(t, localOnly).forEach(result.add, result);
            }
        }

        return result;
    }

    public symbolWithContext(context: ParseTree): Symbol | undefined {

        function findRecursive(symbol: Symbol): Symbol | undefined {
            if (symbol.context == context) {
                return symbol;
            }

            if (symbol instanceof ScopedSymbol) {
                for (let child of symbol.children) {
                    let result = findRecursive(child);
                    if (result) {
                        return result;
                    }
                }
            }
        }

        let symbols = this.getAllSymbols(Symbol);
        for (let symbol of symbols) {
            let result = findRecursive(symbol);
            if (result) {
                return result;
            }
        }

        for (let dependency of this.dependencies) {
            symbols = dependency.getAllSymbols(Symbol);
            for (let symbol of symbols) {
                let result = findRecursive(symbol);
                if (result) {
                    return result;
                }
            }
        }
    }

    public resolve(name: string, localOnly = false): Symbol | undefined {
        let result = super.resolve(name, localOnly);

        if (!result && !localOnly) {
            for (let dependency of this.dependencies) {
                result = dependency.resolve(name, false);
                if (result)
                    break;
            }
        }

        return result;
    }

    // Other symbol information available to this instance.
    protected dependencies: Set<SymbolTable> = new Set();
};
