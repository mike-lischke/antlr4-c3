/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ReferenceKind, IType, TypeKind } from "./types.js";

import { BaseSymbol } from "./BaseSymbol.js";

/** An alias for another type. */
export class TypeAlias extends BaseSymbol implements IType {
    private targetType: IType;

    public constructor(name: string, target: IType) {
        super(name);
        this.targetType = target;
    }

    public get baseTypes(): IType[] {
        return [this.targetType];
    }

    public get kind(): TypeKind {
        return TypeKind.Alias;
    }

    public get reference(): ReferenceKind {
        return ReferenceKind.Irrelevant;
    }
}
