/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { IType, ReferenceKind, TypeKind } from "./types.js";

import { ClassSymbol } from "./ClassSymbol.js";
import { FieldSymbol } from "./FieldSymbol.js";
import { MethodSymbol } from "./MethodSymbol.js";
import { ScopedSymbol } from "./ScopedSymbol.js";

export class InterfaceSymbol extends ScopedSymbol implements IType {
    public reference = ReferenceKind.Irrelevant;

    /** Typescript allows an interface to extend a class, not only interfaces. */
    // eslint-disable-next-line no-use-before-define
    public readonly extends: Array<ClassSymbol | InterfaceSymbol>;

    public constructor(name: string, ext: Array<ClassSymbol | InterfaceSymbol>) {
        super(name);
        this.extends = ext;
    }

    public get baseTypes(): IType[] { return this.extends; }
    public get kind(): TypeKind { return TypeKind.Interface; }

    /**
     * @param _includeInherited not used
     *
     * @returns a list of all methods.
     */
    public getMethods(_includeInherited = false): Promise<MethodSymbol[]> {
        return this.getSymbolsOfType(MethodSymbol);
    }

    /**
     * @param _includeInherited Not used.
     *
     * @returns all fields.
     */
    public getFields(_includeInherited = false): Promise<FieldSymbol[]> {
        return this.getSymbolsOfType(FieldSymbol);
    }
}
