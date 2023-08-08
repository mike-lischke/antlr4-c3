/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { MethodSymbol } from "./MethodSymbol";
import { VariableSymbol } from "./VariableSymbol";

/** A field which belongs to a class or other outer container structure. */
export class FieldSymbol extends VariableSymbol {
    public setter?: MethodSymbol;
    public getter?: MethodSymbol;
}
