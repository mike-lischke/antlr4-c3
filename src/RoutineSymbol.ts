/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ParameterSymbol } from "./ParameterSymbol";
import { ScopedSymbol } from "./ScopedSymbol";
import { VariableSymbol } from "./VariableSymbol";
import { IType } from "./types";

/** A standalone function/procedure/rule. */
export class RoutineSymbol extends ScopedSymbol {
    public returnType?: IType; // Can be null if result is void.

    public constructor(name: string, returnType?: IType) {
        super(name);
        this.returnType = returnType;
    }

    public getVariables(_localOnly = true): Promise<VariableSymbol[]> {
        return this.getSymbolsOfType(VariableSymbol);
    }

    public getParameters(_localOnly = true): Promise<ParameterSymbol[]> {
        return this.getSymbolsOfType(ParameterSymbol);
    }
}
