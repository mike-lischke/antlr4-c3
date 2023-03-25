/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { IScopedSymbol, ScopedSymbol } from "./ScopedSymbol";

export interface INamespaceSymbol extends IScopedSymbol {
    readonly inline: boolean;
    readonly attributes: string[];
}

export class NamespaceSymbol extends ScopedSymbol implements INamespaceSymbol {
    public readonly inline: boolean;
    public readonly attributes: string[];

    public constructor(name: string, inline = false, attributes: string[] = []) {
        super(name);

        this.inline = inline;
        this.attributes = attributes;
    }
}
