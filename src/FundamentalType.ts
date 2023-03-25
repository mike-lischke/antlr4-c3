/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { Type, TypeKind, ReferenceKind } from "./types";

/** A single class for all fundamental types. They are distinguished via the kind field. */
export class FundamentalType implements Type {
    public static readonly integerType = new FundamentalType("int", TypeKind.Integer, ReferenceKind.Instance);
    public static readonly floatType = new FundamentalType("float", TypeKind.Float, ReferenceKind.Instance);
    public static readonly stringType = new FundamentalType("string", TypeKind.String, ReferenceKind.Instance);
    public static readonly boolType = new FundamentalType("bool", TypeKind.Boolean, ReferenceKind.Instance);

    public name: string;

    private typeKind: TypeKind;
    private referenceKind: ReferenceKind;

    public constructor(name: string, typeKind = TypeKind.Unknown, referenceKind = ReferenceKind.Irrelevant) {
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
