set(ANTLR4_WITH_STATIC_CRT OFF)
set(ANTLR4_ZIP_REPOSITORY https://github.com/antlr/antlr4/archive/refs/tags/${ANTLR4_TAG}.zip)
add_definitions(-DANTLR4CPP_STATIC)
include(ExternalAntlr4Cpp)

set(ANTLR4C3_ANTLR4_STATIC antlr4_static)
