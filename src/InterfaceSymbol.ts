/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { Type, ReferenceKind, TypeKind } from "./types";

import { ClassSymbol } from "./ClassSymbol";
import { FieldSymbol } from "./FieldSymbol";
import { MethodSymbol } from "./MethodSymbol";
import { ScopedSymbol } from "./ScopedSymbol";

export class InterfaceSymbol extends ScopedSymbol implements Type {
    public reference = ReferenceKind.Irrelevant;

    /** Typescript allows an interface to extend a class, not only interfaces. */
    // eslint-disable-next-line no-use-before-define
    public readonly extends: Array<ClassSymbol | InterfaceSymbol>;

    public constructor(name: string, ext: Array<ClassSymbol | InterfaceSymbol>) {
        super(name);
        this.extends = ext;
    }

    public get baseTypes(): Type[] { return this.extends; }
    public get kind(): TypeKind { return TypeKind.Interface; }

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
