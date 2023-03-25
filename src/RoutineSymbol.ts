/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { ParameterSymbol } from "./ParameterSymbol";
import { ScopedSymbol } from "./ScopedSymbol";
import { VariableSymbol } from "./VariableSymbol";
import { Type } from "./types";

/** A standalone function/procedure/rule. */
export class RoutineSymbol extends ScopedSymbol {
    public returnType?: Type; // Can be null if result is void.

    public constructor(name: string, returnType?: Type) {
        super(name);
        this.returnType = returnType;
    }

    public getVariables(localOnly = true): Promise<VariableSymbol[]> {
        return this.getSymbolsOfType(VariableSymbol);
    }

    public getParameters(localOnly = true): Promise<ParameterSymbol[]> {
        return this.getSymbolsOfType(ParameterSymbol);
    }
}
