if (CMAKE_VERSION VERSION_GREATER_EQUAL "3.24.0")
    # Avoid warning about DOWNLOAD_EXTRACT_TIMESTAMP
    cmake_policy(SET CMP0135 NEW)
endif()

set(ANTLR4_TAG 4.13.1)
set(ANTLR4_WITH_STATIC_CRT OFF)
set(ANTLR4_ZIP_REPOSITORY https://github.com/antlr/antlr4/archive/refs/tags/${ANTLR4_TAG}.zip)
add_definitions(-DANTLR4CPP_STATIC)
include(ExternalAntlr4Cpp)

set(ANTLR4C3_ANTLR4_STATIC antlr4_static)
