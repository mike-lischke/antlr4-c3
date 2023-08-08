/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

export const longestCommonPrefix = <T>(arr1: T[] | undefined, arr2: T[] | undefined): T[] => {
    if (!arr1 || !arr2) {
        return [];
    }

    let i;
    for (i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        if (arr1[i] !== arr2[i]) {
            break;
        }
    }

    return arr1.slice(0, i);
};
