find_package(Antlr4Tool)
find_package(GTest)

antlr_generate(
    ${CMAKE_CURRENT_LIST_DIR}/Expr.g4 
    ${CMAKE_BINARY_DIR}/test/expr
)

file(
    GLOB_RECURSE SOURCE CONFIGURE_DEPENDS 
    *.hpp *.cpp
    ${CMAKE_BINARY_DIR}/test/expr/*.hpp
    ${CMAKE_BINARY_DIR}/test/expr/*.cpp
)
add_executable(${PROJECT_NAME}-test ${SOURCE})
target_include_directories(
    ${PROJECT_NAME}-test PRIVATE
    ${CMAKE_BINARY_DIR}/test/expr
)
target_link_libraries(
    ${PROJECT_NAME}-test PRIVATE
    ${PROJECT_NAME}
    GTest::gtest_main
    GTest::gmock
)

gtest_discover_tests(${PROJECT_NAME}-test)
