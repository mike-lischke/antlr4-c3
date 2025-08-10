#!/bin/sh

set -e

CLANG_FORMAT="clang-format"
if command -v clang-format-18 > /dev/null 2>&1; then
    CLANG_FORMAT="clang-format-18"
fi

find source test test_package/src -iname '*.hpp' -o -iname '*.cpp' \
| xargs "$CLANG_FORMAT" -Werror --dry-run \
    --fallback-style=Google --verbose
