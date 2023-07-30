/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
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
