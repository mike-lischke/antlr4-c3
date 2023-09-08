/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/** Visibility (aka. accessibility) of a symbol member. */
export enum MemberVisibility {
    /** Not specified, default depends on the language and type. */
    Unknown,

    /** Used in Swift, member can be accessed outside of the defining module and extended. */
    Open,

    /** Like Open, but in Swift such a type cannot be extended. */
    Public,

    /** Member is only accessible in the defining class and any derived class. */
    Protected,

    /** Member can only be accessed from the defining class. */
    Private,

    /**
     * Used in Swift and Java, member can be accessed from everywhere in a defining module, not outside however.
     * Also known as package private.
     */
    FilePrivate,

    /** Custom enum for special usage. */
    Library,
}

/** The modifier of a symbol member. */
export enum Modifier {
    Static,
    Final,
    Sealed,
    Abstract,
    Deprecated,
    Virtual,
    Const,
    Overwritten,
}

/** Rough categorization of a type. */
export enum TypeKind {
    Unknown,

    Integer,
    Float,
    Number,

    String,
    Char,

    Boolean,

    Class,
    Interface,
    Array,
    Map,
    Enum,

    Alias,
}

/** Describes a reference to a type. */
export enum ReferenceKind {
    Irrelevant,

    /** Default for most languages for dynamically allocated memory ("Type*" in C++). */
    Pointer,

    /** "Type&" in C++, all non-primitive types in Java/Javascript/Typescript etc. */
    Reference,

    /** "Type" as such and default for all value types. */
    Instance,
}

/** The root type interface. Used for typed symbols and type aliases. */
export interface IType {
    name: string;

    /**
     * The super type of this type or empty if this is a fundamental type.
     * Also used as the target type for type aliases.
     */
    baseTypes: IType[];
    kind: TypeKind;
    reference: ReferenceKind;
}

export interface ISymbolTableOptions {
    allowDuplicateSymbols?: boolean;
}
