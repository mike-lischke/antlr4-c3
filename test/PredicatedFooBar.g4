grammar PredicatedFooBar;
@members {
    public hasBar = false;
}
nonEmptyExpression: expression
                  | EOF /* workaround for empty input */
                  ;

expression:                foo
          | {this.hasBar}? bar
          ;

foo: FOO ;
bar: BAR ;

FOO: [fF] [oO] [oO];
BAR: [bB] [aA] [rR];

ID: [a-zA-Z] [a-zA-Z0-9_]*;
WS: [ \n\r\t] -> channel(HIDDEN);
