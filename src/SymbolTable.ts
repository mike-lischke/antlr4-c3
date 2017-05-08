/*
 * This file is released under the MIT license.
 * Copyright (c) 2017, Mike Lischke
 *
 * See LICENSE file for more info.
 */

'use strict';

import { ParserRuleContext } from 'antlr4ts';

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
    name: string;

    get baseTypes(): Type[] { return []; }
    get kind(): TypeKind { return this.typeKind; }
    get reference(): ReferenceKind { return this.referenceKind; }

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

// The root of the symbol table class hierarchy: a symbol can be any managable entity (like a block), not only
// things like variables or classes.
// We are using a class hierarchy here, instead of an enum or similar, to allow for easy extension and certain
// symbols can so provide additional APIs for simpler access to their sub elements, if needed.
export class Symbol {
    name: string = ""; // The name of the scope or empty if anonymous.
    context: ParserRuleContext | undefined; // Reference to the parse tree which contains this symbol.

    protected parent: Symbol | undefined;

    constructor(name: string = "") {
        this.name = name;
    }

    // The parent is usually a scoped symbol as only those can have children, but we allow
    // any symbol here for special scenarios.
    // This is rather an internal method and should rarely be used by external code.
    setParent(parent: Symbol | undefined) {
        this.parent = parent;
    }

    getParent(): Symbol | undefined {
        return this.parent;
    }

    removeFromParent() {
        if (this.parent instanceof ScopedSymbol) {
            (this.parent as ScopedSymbol).removeSymbol(this);
            this.parent = undefined;
        }
    }

    // Get the outermost entity (below the symbol table) that holds us.
    getRoot(): Symbol | undefined {
        let run = this.parent;
        while (run) {
            if (!run.parent || (run.parent instanceof SymbolTable))
                return run;
            run = run.parent;
        }
        return run;
    }

    // Returns the symbol table we belong too or undefined if we are not yet assigned.
    getSymbolTable(): SymbolTable | undefined {
        if (this instanceof SymbolTable) {
            return this;
        }

        let run = this.parent;
        while (run) {
            if (run instanceof SymbolTable)
                return run;
            run = run.parent;
        }
        return undefined;
    }

    // Returns the next enclosing parent of the given type.
    getParentOfType<T extends Symbol>(t: new (...args: any[]) => T): T | undefined {
        let run = this.parent;
        while (run) {
            if (run instanceof t)
                return <T>run;
            run = run.parent;
        }
        return undefined;
    }

    // The list of symbols from this one up to root.
    getSymbolPath(): Symbol[] {
        let result: Symbol[] = [];
        let run: Symbol = this;
        while (run) {
            result.push(run);
            if (!run.parent)
                break;
            run = run.parent;
        }
        return result;
    }

    // Create a qualified identifier from this symbol and its parent.
    // If `full` is true then all parents are traversed in addition to this instance.
    qualifiedName(separator = ".", full = false, includeAnonymous = false): string {
        if (!includeAnonymous && this.name.length == 0)
            return "";

        let result: string = this.name.length == 0 ? "<anonymous>" : this.name;
        let run = this.parent;
        while (run) {
            if (includeAnonymous || run.name.length > 0) {
                result = (run.name.length == 0 ? "<anonymous>" : run.name) + separator + result;
                if (!full || !run.parent)
                    break;
            }
            run = run.parent;
        }
        return result;
    }

};

// A symbol with an attached type (variables, fields etc.).
export class TypedSymbol extends Symbol {
    type: Type | undefined;

    constructor(name: string, type?: Type) {
        super(name);
        this.type = type;
    }
};

// An alias for another type.
export class TypeAlias extends Symbol implements Type {
    get baseTypes(): Type[] { return [this.targetType]; }
    get kind(): TypeKind { return TypeKind.Alias; }
    get reference(): ReferenceKind { return ReferenceKind.Irrelevant; }

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

    // Adds the given symbol to this scope. If it belongs already to a different scope
    // it is removed from that before adding it here.
    addSymbol(symbol: Symbol) {
        symbol.removeFromParent();

        // Check for duplicates first.
        let symbolTable = this.getSymbolTable();
        if (!symbolTable || !symbolTable.options.allowDuplicateSymbols) {
            for (let child of this.children) {
                if (child == symbol || (symbol.name.length > 0 && child.name == symbol.name)) {
                    let name = symbol.name;
                    if (name.length == 0)
                        name = "<anonymous>";
                    throw new DuplicateSymbolError("Attempt to add duplicate symbol '" + name + "'");
                }
            }
        }

        this.children.push(symbol);
        symbol.setParent(this);
    }

    removeSymbol(symbol: Symbol) {
        let index = this.children.indexOf(symbol);
        if (index > -1) {
            this.children.splice(index, 1);
            symbol.setParent(undefined);
        }
    }

    // Returns direct children of a given type.
    getSymbolsOfType<T extends Symbol>(t: new (...args: any[]) => T): T[] {
        let result: T[] = [];
        for (let child of this.children) {
            if (child instanceof t)
                result.push(<T>child);
        }

        return result;
    }

    // Returns all (nested) children of a given type. Mostly useful for tests.
    getNestedSymbolsOfType<T extends Symbol>(t: new (...args: any[]) => T): T[] {
        let result: T[] = [];

        for (let child of this.children) {
            if (child instanceof t)
                result.push(child);
            if (child instanceof ScopedSymbol)
                result.push(...child.getNestedSymbolsOfType(t));
        }

        return result;
    }

    // Returns symbols from this and all nested scopes in the order they were defined.
    getAllNestedSymbols(): Symbol[] {
        let result: Symbol[] = [];

        for (let child of this.children) {
            result.push(child);
            if (child instanceof ScopedSymbol)
                result.push(...child.getAllNestedSymbols());
        }

        return result;
    }

    // Returns all symbols of the the given type accessible from this scope.
    // TODO: add optional position dependency (only symbols defined before a given caret pos are viable).
    getAllSymbols<T extends Symbol>(t: new (...args: any[]) => T, localOnly = false): Symbol[] {
        let result: Symbol[] = [];

        // Special handling for namespaces, which act like grouping symbols in this scope,
        // so we show them as available in this scope.
        for (let child of this.children) {
            if (child instanceof t) {
                result.push(child);
            }
            if (child instanceof NamespaceSymbol)
                result.push(...child.getAllSymbols(t, true));
        }

        if (!localOnly) {
            if (this.parent && this.parent instanceof ScopedSymbol)
                result.push(...this.parent.getAllSymbols(t));
        }

        return result;
    }

    // Returns the first symbol, from top to bottom, with a given name from this scope
    // or any of the parent scopes (conditionally).
    resolve(name: string, localOnly = false): Symbol | undefined {
        for (let child of this.children) {
            if (child.name == name)
                return child;
        }

        // Nothing found locally. Let the parent continue.
        if (!localOnly) {
            if (this.parent && this.parent instanceof ScopedSymbol)
                return (this.parent as ScopedSymbol).resolve(name, false);
        }

        return undefined;
    }

    // Returns all accessible symbols that have a type assigned.
    getTypedSymbols(localOnly = true): TypedSymbol[] {
        let result: TypedSymbol[] = []

        for (let child of this.children) {
            if (child instanceof TypedSymbol) {
                result.push(child);
            }
        }

        if (!localOnly) {
            if (this.parent instanceof ScopedSymbol) {
                let localList = (this.parent as ScopedSymbol).getTypedSymbols(true);
                result.push(...localList);
            }
        }

        return result;
    }

    // The names of all accessible symbols with a type.
    getTypedSymbolNames(localOnly = true): string[] {
        let result: string[] = [];
        for (let child of this.children) {
            if (child instanceof TypedSymbol) {
                result.push(child.name);
            }
        }

        if (!localOnly) {
            if (this.parent instanceof ScopedSymbol) {
                let localList = (this.parent as ScopedSymbol).getTypedSymbolNames(true);
                result.push(...localList);
            }
        }

        return result;
    }

    // Returns all direct child symbols with a scope (e.g. classes in a module).
    getDirectScopes(): ScopedSymbol[] {
        return this.getSymbolsOfType(ScopedSymbol);
    }

    symbolFromPath(path: string, separator: string = "."): Symbol | undefined {
        let elements = path.split(separator);
        let index = 0;
        if (elements[0] == this.name || elements[0].length == 0)
            ++index;

        let result: Symbol = this;
        while (index < elements.length) {
            if (!(result instanceof ScopedSymbol)) // Some parts left but found a non-scoped symbol?
                return undefined;

            let child = result.children.find(child => child.name == elements[index]);
            if (!child)
                return undefined;
            result = child;
            ++index;
        }
        return result;
    }

    protected children: Symbol[] = []; // All child symbols in definition order.
};

export class NamespaceSymbol extends ScopedSymbol {
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

    getVariables(localOnly = true): VariableSymbol[] {
        return this.getSymbolsOfType(VariableSymbol);
    }

    getParameters(localOnly = true): ParameterSymbol[] {
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
    methodFlags = MethodFlags.None;
    visibility = MemberVisibility.Invalid;

    constructor(name: string, returnType: Type) {
        super(name, returnType);
    }
};

export class FieldSymbol extends VariableSymbol {
    visibility = MemberVisibility.Invalid;

    setter: MethodSymbol | undefined;
    getter: MethodSymbol | undefined;

    constructor(name: string, type: Type) {
        super(name, type);
    }
};

// Classes and structs.
export class ClassSymbol extends ScopedSymbol implements Type {

    get baseTypes(): Type[] { return this.superClasses; };
    get kind(): TypeKind { return TypeKind.Class; }
    get reference(): ReferenceKind { return this.referenceKind; }

    isStruct = false;

    // Usually only one member, unless the language supports multiple inheritance.
    readonly superClasses: ClassSymbol[] = [];

    constructor(name: string, referenceKind: ReferenceKind, ...superClass: ClassSymbol[]) {
        super(name);
        this.referenceKind = referenceKind;
        this.superClasses.push(...superClass); // Standard case: a single super class.
    }

    // Returns a list of all methods.
    getMethods(includeInherited = false): MethodSymbol[] {
        return this.getSymbolsOfType(MethodSymbol);
    }

    // Returns all fields.
    getFields(includeInherited = false): FieldSymbol[] {
        return this.getSymbolsOfType(FieldSymbol);
    }

    private referenceKind: ReferenceKind;
};

export class ArrayType extends Symbol implements Type {

    get baseTypes(): Type[] { return []; };
    get kind(): TypeKind { return TypeKind.Array; }
    get reference(): ReferenceKind { return this.referenceKind; }

    readonly elementType: Type;
    readonly size: number; // > 0 if fixed length.

    constructor(name: string, referenceKind: ReferenceKind, elemType: Type, size = 0) {
        super(name);
        this.referenceKind = referenceKind;
        this.elementType = elemType;
        this.size = size;
    }

    private referenceKind: ReferenceKind;
};

// A few more types for databases.
export class CatalogSymbol extends ScopedSymbol {
};

export class SchemaSymbol extends ScopedSymbol {
};

export class TableSymbol extends ScopedSymbol {
};

export class ViewSymbol extends ScopedSymbol {
};

export class EventSymbol extends ScopedSymbol {
};

export class ColumnSymbol extends TypedSymbol {
};

export class IndexSymbol extends Symbol { // Made of columns, but doesn't contain them. Hence not a scope.
};

export class PrimaryKeySymbol extends Symbol { // ditto
};

export class ForeignKeySymbol extends Symbol { // ditto
};

export class StoredRoutineSymbol extends RoutineSymbol {
};

export class TriggerSymbol extends ScopedSymbol {
};

export class UdfSymbol extends Symbol { // No body nor parameter info.
};

export class EngineSymbol extends Symbol {
};

export class TableSpaceSymbol extends Symbol {
};

export class LogfileGroupSymbol extends Symbol {
};

export class CharsetSymbol extends Symbol {
};

export class CollationSymbol extends Symbol {
};

export class UserVariableSymbol extends VariableSymbol {
};

export class SystemVariableSymbol extends Symbol {
};

// The main class managing all the symbols for a top level entity like a file, library or similar.
export class SymbolTable extends ScopedSymbol {
    constructor(name: string, public readonly options: SymbolTableOptions) {
        super(name);
    }

    clear() {
        this.dependencies.clear();
        this.children = [];
    }

    addDependencies(...tables: SymbolTable[]) {
        tables.forEach((value, key) => {
            this.dependencies.add(value);
        });
    }

    removeDependency(table: SymbolTable) {
        if (this.dependencies.has(table)) {
            this.dependencies.delete(table);
        }
    }

    // Instance informations, mostly relevant for unit testing.
    getInfo() {
        return {
            dependencyCount: this.dependencies.size,
            symbolCount: this.children.length
        };
    }

    addNewSymbolOfType<T extends Symbol>(t: new (...args: any[]) => T, parent: ScopedSymbol | undefined, ...args: any[]): T {
        let result = new t(...args);
        if (!parent || parent == this) {
            this.addSymbol(result);
        } else {
            parent.addSymbol(result);
        }
        return result;
    }

    // Adds a new namespace to the symbol table or the given parent. The path parameter specifies a single namespace name
    // or a chain of namespaces (which can be e.g. "outer.intermittant.inner.final").
    // If any of the parent namespaces is missing they are created implicitly. The final part must not exist however
    // or you'll get a duplicate symbol error.
    addNewNamespaceFromPath(parent: ScopedSymbol | undefined, path: string, delimiter = "."): NamespaceSymbol {
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

    getAllSymbols<T extends Symbol>(t?: new (...args: any[]) => T, localOnly: boolean = false): Symbol[] {
        let type = t ? t : Symbol;
        let result = super.getAllSymbols(type, localOnly);

        if (!localOnly) {
            for (let dependency of this.dependencies) {
                result.push(...dependency.getAllSymbols(t, localOnly));
            }
        }

        return result;
    }

    resolve(name: string, localOnly = false): Symbol | undefined {
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
