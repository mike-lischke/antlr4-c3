add_library(${PROJECT_NAME} ${PROJECT_NAME}/CodeCompletionCore.cpp)
target_include_directories(${PROJECT_NAME} PUBLIC .)
target_link_libraries(
    ${PROJECT_NAME} PUBLIC 
    ${ANTLR4C3_ANTLR4_STATIC}
)
