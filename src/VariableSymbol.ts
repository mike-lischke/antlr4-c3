/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { TypedSymbol } from "./TypedSymbol";
import { IType } from "./types";

export class VariableSymbol extends TypedSymbol {
    public value: unknown;

    public constructor(name: string, value: unknown, type?: IType) {
        super(name, type);

        this.value = value;
    }
}
