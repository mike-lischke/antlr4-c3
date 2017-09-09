# antlr4-c3 The ANTLR4 Code Completion Core

This is a port of the antlr4-c3 library to Java.

Please see the parent readme.md for an explanation of the library and for examples. 

The only changes with respect to the original typescript implementation are:

- use of Java logging framework for debug messages
- CandidatesCollection has a new field which returns information about encountered preferred rules

### Making releases

We use the nexus-staging maven plugin.

You will need authorization from nexus to release artifacts.

The nexus-staging maven plugin instructions are here:

http://central.sonatype.org/pages/apache-maven.html

