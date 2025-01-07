<h1 align="center"> Antlr4 Code Completion Core </h1>

<p align="center">
  <a title="Pub" href="https://pub.dev/packages/antlr_c3" >
      <img src="https://img.shields.io/badge/Pub-v1.x-red?style=popout" />
  </a>
</p>

<p align="center">
  <a title="中文" 
    href="https://github.com/CorvusYe/antlr4-c3/tree/main/ports/dart/README.md">
    中文
  </a>丨
    English
</p>

This is the Dart version of the antlr4-c3 library. Translated from: [antlr4-c3 java](https://github.com/mike-lischke/antlr4-c3/tree/main/ports/java)

## Usage

Write or obtain an antlr4 grammar file, then use antlr4 to generate Dart code.

```shell
# Expr.g4 is an antlr4 grammar file, which you can write yourself or obtain from the internet
# 4.13.2 is determined by the antlr4 version in pubspec.yaml
# ../example/gen is the directory for the generated code, please modify according to your actual situation
antlr4 -v 4.13.2 -Dlanguage=Dart Expr.g4 -o ../example/gen
```

Then use the generated code in your project.

```dart
import 'dart:math';

import 'package:antlr4/antlr4.dart';
import 'package:antlr4_c3/antlr4_c3.dart';

import 'gen/ExprLexer.dart';
import 'gen/ExprParser.dart';

void main() {
  var expression = 'var c = a + b()';
  var lexer = ExprLexer(InputStream.fromString(expression));
  var tokens = CommonTokenStream(lexer);
  var parser = ExprParser(tokens);

  lexer.removeErrorListeners();
  parser.removeErrorListeners();

  parser.expression();
  var core = CodeCompletionCore(parser, null, null);

  var candidates = core.collectCandidates(max(0, tokens.size), null);
  print(candidates);
}
```

## License

antlr4_c3 is licensed under the MIT License.
