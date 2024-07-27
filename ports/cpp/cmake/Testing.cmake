macro(define_grammar_test grammar)
    get_filename_component(
        ANTLR4C3_CURRENT_DIR_NAME
        ${CMAKE_CURRENT_LIST_DIR} NAME
    )

    antlr_generate(
        ${CMAKE_CURRENT_LIST_DIR}/${grammar}
        ${CMAKE_CURRENT_BINARY_DIR}
    )

    file(
        GLOB_RECURSE SOURCE CONFIGURE_DEPENDS 
        *.hpp *.cpp
        ${CMAKE_CURRENT_BINARY_DIR}/*.hpp
        ${CMAKE_CURRENT_BINARY_DIR}/*.cpp
    )

    set(
        ANTLR4C3_TEST_TARGET
        ${PROJECT_NAME}-test-${ANTLR4C3_CURRENT_DIR_NAME}
    )

    add_executable(${ANTLR4C3_TEST_TARGET} ${SOURCE})

    target_include_directories(
        ${ANTLR4C3_TEST_TARGET} PRIVATE
        ${CMAKE_CURRENT_BINARY_DIR}
        ${CMAKE_CURRENT_LIST_DIR}/..
    )

    target_link_libraries(
        ${ANTLR4C3_TEST_TARGET} PRIVATE
        ${PROJECT_NAME}
        GTest::gtest_main
        GTest::gmock
    )

    gtest_discover_tests(${ANTLR4C3_TEST_TARGET})
endmacro()
