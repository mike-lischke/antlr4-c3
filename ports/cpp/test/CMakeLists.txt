find_package(GTest)

add_executable(${PROJECT_NAME}-test HelloWorld.cpp)
target_link_libraries(
    ${PROJECT_NAME}-test PRIVATE 
    ${PROJECT_NAME} 
    GTest::gtest_main
)

gtest_discover_tests(${PROJECT_NAME}-test)
