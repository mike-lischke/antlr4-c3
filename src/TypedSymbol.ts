/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { IType } from "./types";
import { BaseSymbol } from "./BaseSymbol";

/** A symbol with an attached type (variables, fields etc.). */
export class TypedSymbol extends BaseSymbol {
    public type: IType | undefined;

    public constructor(name: string, type?: IType) {
        super(name);
        this.type = type;
    }
}
