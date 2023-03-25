/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { Type, ReferenceKind, TypeKind } from "./types";

import { FieldSymbol } from "./FieldSymbol";
import { InterfaceSymbol } from "./InterfaceSymbol";
import { MethodSymbol } from "./MethodSymbol";
import { ScopedSymbol } from "./ScopedSymbol";

/** Classes and structs. */
export class ClassSymbol extends ScopedSymbol implements Type {
    public isStruct = false;
    public reference = ReferenceKind.Irrelevant;

    /** Usually only one member, unless the language supports multiple inheritance (like C++). */
    // eslint-disable-next-line no-use-before-define
    public readonly extends: ClassSymbol[];

    /** Typescript allows a class to implement a class, not only interfaces. */
    // eslint-disable-next-line no-use-before-define
    public readonly implements: Array<ClassSymbol | InterfaceSymbol>;

    public constructor(name: string, ext: ClassSymbol[], impl: Array<ClassSymbol | InterfaceSymbol>) {
        super(name);
        this.extends = ext;
        this.implements = impl;
    }

    public get baseTypes(): Type[] { return this.extends; }
    public get kind(): TypeKind { return TypeKind.Class; }

    /**
     * @param includeInherited Not used.
     *
     * @returns a list of all methods.
     */
    public getMethods(includeInherited = false): Promise<MethodSymbol[]> {
        return this.getSymbolsOfType(MethodSymbol);
    }

    /**
     * @param includeInherited Not used.
     *
     * @returns all fields.
     */
    public getFields(includeInherited = false): Promise<FieldSymbol[]> {
        return this.getSymbolsOfType(FieldSymbol);
    }
}
