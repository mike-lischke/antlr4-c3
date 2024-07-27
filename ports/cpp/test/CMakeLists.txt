# ANTLR4 Tool generates such files
add_compile_options(-Wno-unused-parameter)

enable_testing()
add_subdirectory(expr)
add_subdirectory(whitebox)
add_subdirectory(cpp14)
