cmake_minimum_required(VERSION 3.15)
project(PackageTest CXX)

find_package(antlr4-c3 REQUIRED)
find_package(antlr4-runtime REQUIRED)
find_package(antlr4 REQUIRED)

if(DEFINED antlr4_PACKAGE_FOLDER_DEBUG)
  set(ANTLR4C3_ANTLR4_TOOL_PATH ${antlr4_PACKAGE_FOLDER_DEBUG})
else()
  set(ANTLR4C3_ANTLR4_TOOL_PATH ${antlr4_PACKAGE_FOLDER_RELEASE})
endif()

if(DEFINED openjdk_BIN_DIRS_DEBUG)
  set(ANTLR4C3_JAVA_PATH ${openjdk_BIN_DIRS_DEBUG})
else()
  set(ANTLR4C3_JAVA_PATH ${openjdk_BIN_DIRS_RELEASE})
endif()

set(ANTLR_COMPLETE ${ANTLR4C3_ANTLR4_TOOL_PATH}/res/antlr-complete.jar)

configure_file(src/Expr.g4 ${CMAKE_CURRENT_BINARY_DIR}/Expr.g4 COPYONLY)

execute_process(
    COMMAND bash -c "${ANTLR4C3_JAVA_PATH}/java \
        -classpath ${ANTLR_COMPLETE} org.antlr.v4.Tool \
        -o ${CMAKE_CURRENT_BINARY_DIR} \
        -listener -visitor -Dlanguage=Cpp \
        ${CMAKE_CURRENT_BINARY_DIR}/Expr.g4 \
        ${CMAKE_CURRENT_BINARY_DIR}/Expr.g4"
)

add_executable(
    example
    src/example.cpp
    ${CMAKE_CURRENT_BINARY_DIR}/ExprLexer.cpp
    ${CMAKE_CURRENT_BINARY_DIR}/ExprParser.cpp
)

target_link_libraries(example antlr4-c3::antlr4-c3)

target_include_directories(example PRIVATE ${CMAKE_CURRENT_BINARY_DIR})
