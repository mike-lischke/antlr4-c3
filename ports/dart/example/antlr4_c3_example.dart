/*
 * Copyright © 2024 VMware, Inc & dudu.ltd. All Rights Reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * See LICENSE file for more info.
 */

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
