cmake_minimum_required(VERSION 3.7)
project(antlr4-c3 VERSION 2.0.0)

if(NOT DEFINED CONAN_GENERATOR_IS_RUNNING)
    find_package(antlr4-runtime REQUIRED)

    set(ANTLR4C3_DIR "source/antlr4-c3")
    add_library(${PROJECT_NAME} ${ANTLR4C3_DIR}/CodeCompletionCore.cpp)
    target_include_directories(${PROJECT_NAME} PUBLIC source)
    target_link_libraries(${PROJECT_NAME} PUBLIC antlr4_static)
    set_target_properties(${PROJECT_NAME} PROPERTIES PUBLIC_HEADER ${ANTLR4C3_DIR}/CodeCompletionCore.hpp)

    install(TARGETS ${PROJECT_NAME})
else()
    option(ANTLR4C3_DEVELOPER "Enable ${PROJECT_NAME} developer mode" OFF)

    list(APPEND CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake")

    include(cmake/CompileOptions.cmake)
    include(cmake/Sanitize.cmake)

    set(ANTLR4_TAG 4.13.1)

    find_package(Antlr4Cpp REQUIRED)

    add_subdirectory(source)

    if(ANTLR4C3_DEVELOPER)
        include(cmake/Testing.cmake)

        find_package(Antlr4Tool REQUIRED)
        find_package(GTest REQUIRED)

        add_subdirectory(test)
    endif()
endif()
