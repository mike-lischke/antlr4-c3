grammar Whitebox;

@eader {
/* eslint-disable @typescript-eslint/no-unused-vars, no-useless-escape */
}

test1: rule1 ADIPISCING ;
rule1: rule2 CONSECTETUR ;
rule2: LOREM rule3 rule5 SIT* AMET? ;
rule3: rule4 DOLOR? ;
rule4: IPSUM? ;
rule5: ;

test2: rule7 ADIPISCING ;
rule7: rule8 CONSECTETUR ;
rule8: LOREM rule11 rule9 SIT* AMET? ;
rule9: rule10 DOLOR? ;
rule10: IPSUM? ;
rule11: ;

test3: LOREM IPSUM? rule13 AMET+ CONSECTETUR ;
rule13: (DOLOR | SIT)* ;

LOREM: 'LOREM';
IPSUM: 'IPSUM';
DOLOR: 'DOLOR';
SIT: 'SIT';
AMET: 'AMET';
CONSECTETUR: 'CONSECTETUR';
ADIPISCING: 'ADIPISCING';
WS: [ \n\r\t] -> skip;
