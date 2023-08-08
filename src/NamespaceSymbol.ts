/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
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
