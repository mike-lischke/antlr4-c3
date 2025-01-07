// Generated from Expr.g4 by ANTLR 4.13.2
// ignore_for_file: unused_import, unused_local_variable, prefer_single_quotes
import 'package:antlr4/antlr4.dart';

import 'ExprParser.dart';

/// This abstract class defines a complete listener for a parse tree produced by
/// [ExprParser].
abstract class ExprListener extends ParseTreeListener {
  /// Enter a parse tree produced by [ExprParser.expression].
  /// [ctx] the parse tree
  void enterExpression(ExpressionContext ctx);
  /// Exit a parse tree produced by [ExprParser.expression].
  /// [ctx] the parse tree
  void exitExpression(ExpressionContext ctx);

  /// Enter a parse tree produced by [ExprParser.assignment].
  /// [ctx] the parse tree
  void enterAssignment(AssignmentContext ctx);
  /// Exit a parse tree produced by [ExprParser.assignment].
  /// [ctx] the parse tree
  void exitAssignment(AssignmentContext ctx);

  /// Enter a parse tree produced by [ExprParser.simpleExpression].
  /// [ctx] the parse tree
  void enterSimpleExpression(SimpleExpressionContext ctx);
  /// Exit a parse tree produced by [ExprParser.simpleExpression].
  /// [ctx] the parse tree
  void exitSimpleExpression(SimpleExpressionContext ctx);

  /// Enter a parse tree produced by [ExprParser.variableRef].
  /// [ctx] the parse tree
  void enterVariableRef(VariableRefContext ctx);
  /// Exit a parse tree produced by [ExprParser.variableRef].
  /// [ctx] the parse tree
  void exitVariableRef(VariableRefContext ctx);

  /// Enter a parse tree produced by [ExprParser.functionRef].
  /// [ctx] the parse tree
  void enterFunctionRef(FunctionRefContext ctx);
  /// Exit a parse tree produced by [ExprParser.functionRef].
  /// [ctx] the parse tree
  void exitFunctionRef(FunctionRefContext ctx);
}