/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { TypedSymbol } from "./TypedSymbol";
import { Type } from "./types";

export class LiteralSymbol extends TypedSymbol {
    public readonly value: unknown;

    public constructor(name: string, value: unknown, type?: Type) {
        super(name, type);

        this.value = value;
    }
}
