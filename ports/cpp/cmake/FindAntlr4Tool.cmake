file(
    DOWNLOAD 
    https://www.antlr.org/download/antlr-${ANTLR4_TAG}-complete.jar 
    ${CMAKE_BINARY_DIR}/antlr-${ANTLR4_TAG}-complete.jar
)
set(ANTLR_EXECUTABLE ${CMAKE_BINARY_DIR}/antlr-${ANTLR4_TAG}-complete.jar)

function(antlr_generate grammar directory)
    message(STATUS "antlr_generate ${grammar} ${directory}")
    execute_process(
        COMMAND bash -c "java \
            -jar ${ANTLR_EXECUTABLE} \
            -o ${directory} \
            -listener -visitor -Dlanguage=Cpp \
            ${grammar} \
            ${grammar}"
    )
endfunction()
