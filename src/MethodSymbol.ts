/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { RoutineSymbol } from "./RoutineSymbol.js";

export enum MethodFlags {
    None = 0,
    Virtual = 1,
    Const = 2,
    Overwritten = 4,

    /** Distinguished by the return type. */
    SetterOrGetter = 8,

    /** Special flag used e.g. in C++ for explicit c-tors. */
    Explicit = 16,
}

/** A function which belongs to a class or other outer container structure. */
export class MethodSymbol extends RoutineSymbol {
    public methodFlags = MethodFlags.None;
}
