grammar Expr;

@eader {
/* eslint-disable @typescript-eslint/no-unused-vars, no-useless-escape */
}

expression: assignment | simpleExpression;

assignment: (VAR | LET) ID EQUAL simpleExpression;

simpleExpression:
    simpleExpression (PLUS | MINUS) simpleExpression
    | simpleExpression (MULTIPLY | DIVIDE) simpleExpression
    | variableRef
    | functionRef
;

variableRef: identifier;

functionRef: identifier OPEN_PAR CLOSE_PAR;

identifier: ID;

VAR: [vV] [aA] [rR];
LET: [lL] [eE] [tT];

PLUS:      '+';
MINUS:     '-';
MULTIPLY:  '*';
DIVIDE:    '/';
EQUAL:     '=';
OPEN_PAR:  '(';
CLOSE_PAR: ')';
ID:        [a-zA-Z] [a-zA-Z0-9_]*;
WS:        [ \n\r\t] -> channel(HIDDEN);
