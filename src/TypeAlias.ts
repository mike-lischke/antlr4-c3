/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { ReferenceKind, Type, TypeKind } from "./types";

import { BaseSymbol } from "./BaseSymbol";

/** An alias for another type. */
export class TypeAlias extends BaseSymbol implements Type {
    private targetType: Type;

    public constructor(name: string, target: Type) {
        super(name);
        this.targetType = target;
    }

    public get baseTypes(): Type[] {
        return [this.targetType];
    }

    public get kind(): TypeKind {
        return TypeKind.Alias;
    }

    public get reference(): ReferenceKind {
        return ReferenceKind.Irrelevant;
    }
}
