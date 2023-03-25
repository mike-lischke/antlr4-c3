/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { MethodSymbol } from "./MethodSymbol";
import { VariableSymbol } from "./VariableSymbol";

/** A field which belongs to a class or other outer container structure. */
export class FieldSymbol extends VariableSymbol {
    public setter?: MethodSymbol;
    public getter?: MethodSymbol;
}
