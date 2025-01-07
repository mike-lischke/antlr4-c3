/*
 * Copyright © 2024 VMware, Inc & dudu.ltd. All Rights Reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * See LICENSE file for more info.
 */

import 'package:antlr4/antlr4.dart';
import 'package:antlr4_c3/antlr4_c3.dart';
import 'package:test/test.dart';

import '../example/gen/ExprLexer.dart';
import '../example/gen/ExprParser.dart';

class CountingErrorListener extends BaseErrorListener {
  int errorCount = 0;

  @override
  void syntaxError(
    Recognizer<ATNSimulator> recognizer,
    Object? offendingSymbol,
    int? line,
    int charPositionInLine,
    String msg,
    RecognitionException? e,
  ) {
    super.syntaxError(
        recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    errorCount++;
  }
}

void main() {
  test('simpleExpressionTest', () {
    print('\nsimpleExpressionTest');

    var expression = 'var c = a + b()';
    var lexer = ExprLexer(InputStream.fromString(expression));
    var tokens = CommonTokenStream(lexer);
    var parser = ExprParser(tokens);

    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    var errorListener = CountingErrorListener();
    parser.addErrorListener(errorListener);

    parser.expression();

    expect(errorListener.errorCount, 0);

    var core = CodeCompletionCore(parser, null, null);

    var candidates = core.collectCandidates(0, null);

    expect(candidates.tokens.length, 3);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_VAR), isTrue);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_LET), isTrue);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_ID), isTrue);

    // expect(candidates.tokens[ExprLexer.TOKEN_VAR], []);
    // expect(candidates.tokens[ExprLexer.TOKEN_LET], []);
    expect(candidates.tokens[ExprLexer.TOKEN_ID], []);

    candidates = core.collectCandidates(1, null);
    expect(candidates.tokens.length, 1);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_ID), isTrue);

    candidates = core.collectCandidates(2, null);
    expect(candidates.tokens.length, 1);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_ID), isTrue);

    candidates = core.collectCandidates(4, null);
    expect(candidates.tokens.length, 1);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_EQUAL), isTrue);

    candidates = core.collectCandidates(6, null);
    expect(candidates.tokens.length, 1);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_ID), isTrue);

    candidates = core.collectCandidates(8, null);
    expect(candidates.tokens.length, 5);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_PLUS), isTrue);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_MINUS), isTrue);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_MULTIPLY), isTrue);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_DIVIDE), isTrue);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_OPEN_PAR), isTrue);
  });

  test('typicalExpressionTest', () {
    print('\ntypicalExpressionTest');

    var expression = 'var c = a + b';
    var lexer = ExprLexer(InputStream.fromString(expression));
    var tokens = CommonTokenStream(lexer);
    var parser = ExprParser(tokens);
    parser.interpreter?.predictionMode =
        PredictionMode.LL_EXACT_AMBIG_DETECTION;

    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    var errorListener = CountingErrorListener();
    parser.addErrorListener(errorListener);

    parser.expression();

    expect(errorListener.errorCount, 0);

    var preferredRules = {RULE_functionRef, RULE_variableRef};
    var ignoredTokens = {
      ExprLexer.TOKEN_ID,
      ExprLexer.TOKEN_PLUS,
      ExprLexer.TOKEN_MINUS,
      ExprLexer.TOKEN_MULTIPLY,
      ExprLexer.TOKEN_DIVIDE,
      ExprLexer.TOKEN_EQUAL
    };

    var core = CodeCompletionCore(parser, preferredRules, ignoredTokens);

    var candidates = core.collectCandidates(0, null);

    expect(candidates.tokens.length, 2);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_VAR), isTrue);
    expect(candidates.tokens.containsKey(ExprLexer.TOKEN_LET), isTrue);

    // expect(candidates.tokens[ExprLexer.TOKEN_VAR], []);
    // expect(candidates.tokens[ExprLexer.TOKEN_LET], []);

    candidates = core.collectCandidates(2, null);
    expect(candidates.tokens.length, 0);

    candidates = core.collectCandidates(4, null);
    expect(candidates.tokens.length, 0);

    candidates = core.collectCandidates(6, null);
    expect(candidates.tokens.length, 0);
    expect(candidates.rules.length, 2);

    var found = 0;
    candidates.rules.forEach((key, value) {
      if (key == RULE_functionRef || key == RULE_variableRef) {
        found++;
      }
    });
    expect(found, 2);

    candidates = core.collectCandidates(7, null);
    expect(candidates.tokens.length, 0);
    expect(candidates.rules.length, 1);

    found = 0;
    candidates.rules.forEach((key, value) {
      if (key == RULE_functionRef || key == RULE_variableRef) {
        found++;
      }
    });
    expect(found, 1);
  });
}
