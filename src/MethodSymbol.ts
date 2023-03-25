/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { RoutineSymbol } from "./RoutineSymbol";

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
