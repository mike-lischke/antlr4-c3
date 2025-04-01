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

function(antlr_generate grammar directory)
    message(STATUS "antlr_generate ${grammar} ${directory}")
    execute_process(
        COMMAND bash -c "${ANTLR4C3_JAVA_PATH}/java \
            -classpath ${ANTLR_COMPLETE} org.antlr.v4.Tool \
            -o ${directory} \
            -listener -visitor -Dlanguage=Cpp \
            ${grammar} \
            ${grammar}"
    )
endfunction()
