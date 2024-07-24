cmake_minimum_required(VERSION 3.7)
project(antlr4-c3 VERSION 0.1.0)

option(ANTLR4C3_DEVELOPER "Enable ${PROJECT_NAME} developer mode" OFF)

list(APPEND CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake")

include(cmake/CompileOptions.cmake)
include(cmake/Sanitize.cmake)

set(ANTLR4_TAG 4.13.1)

find_package(Antlr4Cpp)

add_subdirectory(source)

if (ANTLR4C3_DEVELOPER)
    include(cmake/Testing.cmake)

    find_package(Antlr4Tool)
    find_package(GTest)

    add_subdirectory(test)
endif()
