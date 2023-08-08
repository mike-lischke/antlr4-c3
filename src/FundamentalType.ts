/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { IType, TypeKind, ReferenceKind } from "./types";

/** A single class for all fundamental types. They are distinguished via the kind field. */
export class FundamentalType implements IType {
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

    public get baseTypes(): IType[] {
        return [];
    }

    public get kind(): TypeKind {
        return this.typeKind;
    }

    public get reference(): ReferenceKind {
        return this.referenceKind;
    }
}
