#!/bin/sh

set -e

CLANG_TIDY="clang-tidy"
if command -v clang-tidy-18 > /dev/null 2>&1; then
    CLANG_TIDY="clang-tidy-18"
fi

find source -iname '*.hpp' -o -iname '*.cpp' \
| xargs "$CLANG_TIDY" -p build/compile_commands.json
