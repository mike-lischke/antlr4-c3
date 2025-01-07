// Generated from Expr.g4 by ANTLR 4.13.2
// ignore_for_file: unused_import, unused_local_variable, prefer_single_quotes
import 'package:antlr4/antlr4.dart';

import 'ExprListener.dart';
import 'ExprBaseListener.dart';
const int RULE_expression = 0, RULE_assignment = 1, RULE_simpleExpression = 2, 
          RULE_variableRef = 3, RULE_functionRef = 4;
class ExprParser extends Parser {
  static final checkVersion = () => RuntimeMetaData.checkVersion('4.13.2', RuntimeMetaData.VERSION);
  static const int TOKEN_EOF = IntStream.EOF;

  static final List<DFA> _decisionToDFA = List.generate(
      _ATN.numberOfDecisions, (i) => DFA(_ATN.getDecisionState(i), i));
  static final PredictionContextCache _sharedContextCache = PredictionContextCache();
  static const int TOKEN_VAR = 1, TOKEN_LET = 2, TOKEN_PLUS = 3, TOKEN_MINUS = 4, 
                   TOKEN_MULTIPLY = 5, TOKEN_DIVIDE = 6, TOKEN_EQUAL = 7, 
                   TOKEN_OPEN_PAR = 8, TOKEN_CLOSE_PAR = 9, TOKEN_ID = 10, 
                   TOKEN_WS = 11;

  @override
  final List<String> ruleNames = [
    'expression', 'assignment', 'simpleExpression', 'variableRef', 'functionRef'
  ];

  static final List<String?> _LITERAL_NAMES = [
      null, null, null, "'+'", "'-'", "'*'", "'/'", "'='", "'('", "')'"
  ];
  static final List<String?> _SYMBOLIC_NAMES = [
      null, "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL", 
      "OPEN_PAR", "CLOSE_PAR", "ID", "WS"
  ];
  static final Vocabulary VOCABULARY = VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

  @override
  Vocabulary get vocabulary {
    return VOCABULARY;
  }

  @override
  String get grammarFileName => 'Expr.g4';

  @override
  List<int> get serializedATN => _serializedATN;

  @override
  ATN getATN() {
   return _ATN;
  }

  ExprParser(TokenStream input) : super(input) {
    interpreter = ParserATNSimulator(this, _ATN, _decisionToDFA, _sharedContextCache);
  }

  ExpressionContext expression() {
    dynamic _localctx = ExpressionContext(context, state);
    enterRule(_localctx, 0, RULE_expression);
    try {
      state = 12;
      errorHandler.sync(this);
      switch (tokenStream.LA(1)!) {
      case TOKEN_VAR:
      case TOKEN_LET:
        enterOuterAlt(_localctx, 1);
        state = 10;
        assignment();
        break;
      case TOKEN_ID:
        enterOuterAlt(_localctx, 2);
        state = 11;
        simpleExpression(0);
        break;
      default:
        throw NoViableAltException(this);
      }
    } on RecognitionException catch (re) {
      _localctx.exception = re;
      errorHandler.reportError(this, re);
      errorHandler.recover(this, re);
    } finally {
      exitRule();
    }
    return _localctx;
  }

  AssignmentContext assignment() {
    dynamic _localctx = AssignmentContext(context, state);
    enterRule(_localctx, 2, RULE_assignment);
    int _la;
    try {
      enterOuterAlt(_localctx, 1);
      state = 14;
      _la = tokenStream.LA(1)!;
      if (!(_la == TOKEN_VAR || _la == TOKEN_LET)) {
      errorHandler.recoverInline(this);
      } else {
        if ( tokenStream.LA(1)! == IntStream.EOF ) matchedEOF = true;
        errorHandler.reportMatch(this);
        consume();
      }
      state = 15;
      match(TOKEN_ID);
      state = 16;
      match(TOKEN_EQUAL);
      state = 17;
      simpleExpression(0);
    } on RecognitionException catch (re) {
      _localctx.exception = re;
      errorHandler.reportError(this, re);
      errorHandler.recover(this, re);
    } finally {
      exitRule();
    }
    return _localctx;
  }

  SimpleExpressionContext simpleExpression([int _p = 0]) {
    final _parentctx = context;
    final _parentState = state;
    dynamic _localctx = SimpleExpressionContext(context, _parentState);
    var _prevctx = _localctx;
    var _startState = 4;
    enterRecursionRule(_localctx, 4, RULE_simpleExpression, _p);
    int _la;
    try {
      int _alt;
      enterOuterAlt(_localctx, 1);
      state = 22;
      errorHandler.sync(this);
      switch (interpreter!.adaptivePredict(tokenStream, 1, context)) {
      case 1:
        state = 20;
        variableRef();
        break;
      case 2:
        state = 21;
        functionRef();
        break;
      }
      context!.stop = tokenStream.LT(-1);
      state = 32;
      errorHandler.sync(this);
      _alt = interpreter!.adaptivePredict(tokenStream, 3, context);
      while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
        if (_alt == 1) {
          if (parseListeners != null) triggerExitRuleEvent();
          _prevctx = _localctx;
          state = 30;
          errorHandler.sync(this);
          switch (interpreter!.adaptivePredict(tokenStream, 2, context)) {
          case 1:
            _localctx = SimpleExpressionContext(_parentctx, _parentState);
            pushNewRecursionContext(_localctx, _startState, RULE_simpleExpression);
            state = 24;
            if (!(precpred(context, 4))) {
              throw FailedPredicateException(this, "precpred(context, 4)");
            }
            state = 25;
            _la = tokenStream.LA(1)!;
            if (!(_la == TOKEN_PLUS || _la == TOKEN_MINUS)) {
            errorHandler.recoverInline(this);
            } else {
              if ( tokenStream.LA(1)! == IntStream.EOF ) matchedEOF = true;
              errorHandler.reportMatch(this);
              consume();
            }
            state = 26;
            simpleExpression(5);
            break;
          case 2:
            _localctx = SimpleExpressionContext(_parentctx, _parentState);
            pushNewRecursionContext(_localctx, _startState, RULE_simpleExpression);
            state = 27;
            if (!(precpred(context, 3))) {
              throw FailedPredicateException(this, "precpred(context, 3)");
            }
            state = 28;
            _la = tokenStream.LA(1)!;
            if (!(_la == TOKEN_MULTIPLY || _la == TOKEN_DIVIDE)) {
            errorHandler.recoverInline(this);
            } else {
              if ( tokenStream.LA(1)! == IntStream.EOF ) matchedEOF = true;
              errorHandler.reportMatch(this);
              consume();
            }
            state = 29;
            simpleExpression(4);
            break;
          } 
        }
        state = 34;
        errorHandler.sync(this);
        _alt = interpreter!.adaptivePredict(tokenStream, 3, context);
      }
    } on RecognitionException catch (re) {
      _localctx.exception = re;
      errorHandler.reportError(this, re);
      errorHandler.recover(this, re);
    } finally {
      unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  VariableRefContext variableRef() {
    dynamic _localctx = VariableRefContext(context, state);
    enterRule(_localctx, 6, RULE_variableRef);
    try {
      enterOuterAlt(_localctx, 1);
      state = 35;
      match(TOKEN_ID);
    } on RecognitionException catch (re) {
      _localctx.exception = re;
      errorHandler.reportError(this, re);
      errorHandler.recover(this, re);
    } finally {
      exitRule();
    }
    return _localctx;
  }

  FunctionRefContext functionRef() {
    dynamic _localctx = FunctionRefContext(context, state);
    enterRule(_localctx, 8, RULE_functionRef);
    try {
      enterOuterAlt(_localctx, 1);
      state = 37;
      match(TOKEN_ID);
      state = 38;
      match(TOKEN_OPEN_PAR);
      state = 39;
      match(TOKEN_CLOSE_PAR);
    } on RecognitionException catch (re) {
      _localctx.exception = re;
      errorHandler.reportError(this, re);
      errorHandler.recover(this, re);
    } finally {
      exitRule();
    }
    return _localctx;
  }

  @override
  bool sempred(RuleContext? _localctx, int ruleIndex, int predIndex) {
    switch (ruleIndex) {
    case 2:
      return _simpleExpression_sempred(_localctx as SimpleExpressionContext?, predIndex);
    }
    return true;
  }
  bool _simpleExpression_sempred(dynamic _localctx, int predIndex) {
    switch (predIndex) {
      case 0: return precpred(context, 4);
      case 1: return precpred(context, 3);
    }
    return true;
  }

  static const List<int> _serializedATN = [
      4,1,11,42,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,3,0,13,8,
      0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,23,8,2,1,2,1,2,1,2,1,2,1,2,1,
      2,5,2,31,8,2,10,2,12,2,34,9,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,0,1,4,5,
      0,2,4,6,8,0,3,1,0,1,2,1,0,3,4,1,0,5,6,40,0,12,1,0,0,0,2,14,1,0,0,0,
      4,22,1,0,0,0,6,35,1,0,0,0,8,37,1,0,0,0,10,13,3,2,1,0,11,13,3,4,2,0,
      12,10,1,0,0,0,12,11,1,0,0,0,13,1,1,0,0,0,14,15,7,0,0,0,15,16,5,10,
      0,0,16,17,5,7,0,0,17,18,3,4,2,0,18,3,1,0,0,0,19,20,6,2,-1,0,20,23,
      3,6,3,0,21,23,3,8,4,0,22,19,1,0,0,0,22,21,1,0,0,0,23,32,1,0,0,0,24,
      25,10,4,0,0,25,26,7,1,0,0,26,31,3,4,2,5,27,28,10,3,0,0,28,29,7,2,0,
      0,29,31,3,4,2,4,30,24,1,0,0,0,30,27,1,0,0,0,31,34,1,0,0,0,32,30,1,
      0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,32,1,0,0,0,35,36,5,10,0,0,36,7,
      1,0,0,0,37,38,5,10,0,0,38,39,5,8,0,0,39,40,5,9,0,0,40,9,1,0,0,0,4,
      12,22,30,32
  ];

  static final ATN _ATN =
      ATNDeserializer().deserialize(_serializedATN);
}
class ExpressionContext extends ParserRuleContext {
  AssignmentContext? assignment() => getRuleContext<AssignmentContext>(0);
  SimpleExpressionContext? simpleExpression() => getRuleContext<SimpleExpressionContext>(0);
  ExpressionContext([ParserRuleContext? parent, int? invokingState]) : super(parent, invokingState);
  @override
  int get ruleIndex => RULE_expression;
  @override
  void enterRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.enterExpression(this);
  }
  @override
  void exitRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.exitExpression(this);
  }
}

class AssignmentContext extends ParserRuleContext {
  TerminalNode? ID() => getToken(ExprParser.TOKEN_ID, 0);
  TerminalNode? EQUAL() => getToken(ExprParser.TOKEN_EQUAL, 0);
  SimpleExpressionContext? simpleExpression() => getRuleContext<SimpleExpressionContext>(0);
  TerminalNode? VAR() => getToken(ExprParser.TOKEN_VAR, 0);
  TerminalNode? LET() => getToken(ExprParser.TOKEN_LET, 0);
  AssignmentContext([ParserRuleContext? parent, int? invokingState]) : super(parent, invokingState);
  @override
  int get ruleIndex => RULE_assignment;
  @override
  void enterRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.enterAssignment(this);
  }
  @override
  void exitRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.exitAssignment(this);
  }
}

class SimpleExpressionContext extends ParserRuleContext {
  VariableRefContext? variableRef() => getRuleContext<VariableRefContext>(0);
  FunctionRefContext? functionRef() => getRuleContext<FunctionRefContext>(0);
  List<SimpleExpressionContext> simpleExpressions() => getRuleContexts<SimpleExpressionContext>();
  SimpleExpressionContext? simpleExpression(int i) => getRuleContext<SimpleExpressionContext>(i);
  TerminalNode? PLUS() => getToken(ExprParser.TOKEN_PLUS, 0);
  TerminalNode? MINUS() => getToken(ExprParser.TOKEN_MINUS, 0);
  TerminalNode? MULTIPLY() => getToken(ExprParser.TOKEN_MULTIPLY, 0);
  TerminalNode? DIVIDE() => getToken(ExprParser.TOKEN_DIVIDE, 0);
  SimpleExpressionContext([ParserRuleContext? parent, int? invokingState]) : super(parent, invokingState);
  @override
  int get ruleIndex => RULE_simpleExpression;
  @override
  void enterRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.enterSimpleExpression(this);
  }
  @override
  void exitRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.exitSimpleExpression(this);
  }
}

class VariableRefContext extends ParserRuleContext {
  TerminalNode? ID() => getToken(ExprParser.TOKEN_ID, 0);
  VariableRefContext([ParserRuleContext? parent, int? invokingState]) : super(parent, invokingState);
  @override
  int get ruleIndex => RULE_variableRef;
  @override
  void enterRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.enterVariableRef(this);
  }
  @override
  void exitRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.exitVariableRef(this);
  }
}

class FunctionRefContext extends ParserRuleContext {
  TerminalNode? ID() => getToken(ExprParser.TOKEN_ID, 0);
  TerminalNode? OPEN_PAR() => getToken(ExprParser.TOKEN_OPEN_PAR, 0);
  TerminalNode? CLOSE_PAR() => getToken(ExprParser.TOKEN_CLOSE_PAR, 0);
  FunctionRefContext([ParserRuleContext? parent, int? invokingState]) : super(parent, invokingState);
  @override
  int get ruleIndex => RULE_functionRef;
  @override
  void enterRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.enterFunctionRef(this);
  }
  @override
  void exitRule(ParseTreeListener listener) {
    if (listener is ExprListener) listener.exitFunctionRef(this);
  }
}

