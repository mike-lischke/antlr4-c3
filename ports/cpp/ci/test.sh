#!/bin/sh

set -e

cd "$(dirname "$0")"/../build/test

ctest
if [ $? -ne 0 ]; then
    cat Testing/Temporary/LastTest.log
    exit 1
fi

set -e

TESTS="
whitebox
expr
cpp14
"

for test in $TESTS; do
    for i in $(seq 5); do
        (cd "./$test" && "./antlr4-c3-test-$test" --gtest_shuffle)
    done
done
