/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { IType, ReferenceKind, TypeKind } from "./types.js";

import { BaseSymbol } from "./BaseSymbol.js";

export class ArrayType extends BaseSymbol implements IType {

    public readonly elementType: IType;
    public readonly size: number; // > 0 if fixed length.

    private referenceKind: ReferenceKind;

    public constructor(name: string, referenceKind: ReferenceKind, elemType: IType, size = 0) {
        super(name);
        this.referenceKind = referenceKind;
        this.elementType = elemType;
        this.size = size;
    }

    public get baseTypes(): IType[] { return []; }
    public get kind(): TypeKind { return TypeKind.Array; }
    public get reference(): ReferenceKind { return this.referenceKind; }
}
