
<h1 align="center"> Antlr4 Code Completion Core </h1>

<p align="center">
  <a title="Pub" href="https://pub.dev/packages/antlr4_c3" >
      <img src="https://img.shields.io/badge/Pub-v1.x-red?style=popout" />
  </a>
</p>

<p align="center">
  中文丨
  <a title="English" 
    href="https://github.com/CorvusYe/antlr4-c3/tree/main/ports/dart/README-EN.md">
    English
  </a>
</p>

这是antlr4-c3库的Dart版本。翻译自：[antlr4-c3 java](https://github.com/mike-lischke/antlr4-c3/tree/main/ports/java)

## 用法

编写或者获取一个antlr4的语法文件，然后使用antlr4生成Dart代码。

```shell
# Expr.g4 为 antlr4 语法文件，可以自己编写或者从网上获取
# 4.13.2 由 pubspec.yaml 中的 antlr4 版本决定
# ../example/gen 为生成的代码目录，请根据实际情况修改
antlr4 -v 4.13.2 -Dlanguage=Dart Expr.g4 -o ../example/gen
```

然后在你的代码中使用生成的代码。

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


## 开源协议

antlr4_c3 使用 MIT 协议。



