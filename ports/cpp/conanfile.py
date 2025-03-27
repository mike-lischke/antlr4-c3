from conan import ConanFile


class ANTLR4C3Conan(ConanFile):
    settings = "os", "compiler", "build_type", "arch"
    requires = (
        "antlr4/4.13.1",
        "antlr4-cppruntime/4.13.1",
    )
    generators = {
        "CMakeDeps",
        "CMakeToolchain",
    }
