// Generated from tests/Expr.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class ExprParser extends antlr.Parser {
    public static readonly VAR = 1;
    public static readonly LET = 2;
    public static readonly PLUS = 3;
    public static readonly MINUS = 4;
    public static readonly MULTIPLY = 5;
    public static readonly DIVIDE = 6;
    public static readonly EQUAL = 7;
    public static readonly OPEN_PAR = 8;
    public static readonly CLOSE_PAR = 9;
    public static readonly ID = 10;
    public static readonly WS = 11;
    public static readonly RULE_expression = 0;
    public static readonly RULE_assignment = 1;
    public static readonly RULE_simpleExpression = 2;
    public static readonly RULE_variableRef = 3;
    public static readonly RULE_functionRef = 4;
    public static readonly RULE_identifier = 5;

    public static readonly literalNames = [
        null, null, null, "'+'", "'-'", "'*'", "'/'", "'='", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL", 
        "OPEN_PAR", "CLOSE_PAR", "ID", "WS"
    ];
    public static readonly ruleNames = [
        "expression", "assignment", "simpleExpression", "variableRef", "functionRef", 
        "identifier",
    ];

    public get grammarFileName(): string { return "Expr.g4"; }
    public get literalNames(): (string | null)[] { return ExprParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return ExprParser.symbolicNames; }
    public get ruleNames(): string[] { return ExprParser.ruleNames; }
    public get serializedATN(): number[] { return ExprParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, ExprParser._ATN, ExprParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 0, ExprParser.RULE_expression);
        try {
            this.state = 14;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ExprParser.VAR:
            case ExprParser.LET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 12;
                this.assignment();
                }
                break;
            case ExprParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 13;
                this.simpleExpression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignment(): AssignmentContext {
        let localContext = new AssignmentContext(this.context, this.state);
        this.enterRule(localContext, 2, ExprParser.RULE_assignment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 16;
            _la = this.tokenStream.LA(1);
            if(!(_la === 1 || _la === 2)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 17;
            this.match(ExprParser.ID);
            this.state = 18;
            this.match(ExprParser.EQUAL);
            this.state = 19;
            this.simpleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public simpleExpression(): SimpleExpressionContext;
    public simpleExpression(_p: number): SimpleExpressionContext;
    public simpleExpression(_p?: number): SimpleExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new SimpleExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 4;
        this.enterRecursionRule(localContext, 4, ExprParser.RULE_simpleExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 24;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                {
                this.state = 22;
                this.variableRef();
                }
                break;
            case 2:
                {
                this.state = 23;
                this.functionRef();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 34;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 32;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
                    case 1:
                        {
                        localContext = new SimpleExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, ExprParser.RULE_simpleExpression);
                        this.state = 26;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 27;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 3 || _la === 4)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 28;
                        this.simpleExpression(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new SimpleExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, ExprParser.RULE_simpleExpression);
                        this.state = 29;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 30;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 31;
                        this.simpleExpression(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 36;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public variableRef(): VariableRefContext {
        let localContext = new VariableRefContext(this.context, this.state);
        this.enterRule(localContext, 6, ExprParser.RULE_variableRef);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 37;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionRef(): FunctionRefContext {
        let localContext = new FunctionRefContext(this.context, this.state);
        this.enterRule(localContext, 8, ExprParser.RULE_functionRef);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 39;
            this.identifier();
            this.state = 40;
            this.match(ExprParser.OPEN_PAR);
            this.state = 41;
            this.match(ExprParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 10, ExprParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 43;
            this.match(ExprParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 2:
            return this.simpleExpression_sempred(localContext as SimpleExpressionContext, predIndex);
        }
        return true;
    }
    private simpleExpression_sempred(localContext: SimpleExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 4);
        case 1:
            return this.precpred(this.context, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,11,46,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,
        0,3,0,15,8,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,25,8,2,1,2,1,2,
        1,2,1,2,1,2,1,2,5,2,33,8,2,10,2,12,2,36,9,2,1,3,1,3,1,4,1,4,1,4,
        1,4,1,5,1,5,1,5,0,1,4,6,0,2,4,6,8,10,0,3,1,0,1,2,1,0,3,4,1,0,5,6,
        43,0,14,1,0,0,0,2,16,1,0,0,0,4,24,1,0,0,0,6,37,1,0,0,0,8,39,1,0,
        0,0,10,43,1,0,0,0,12,15,3,2,1,0,13,15,3,4,2,0,14,12,1,0,0,0,14,13,
        1,0,0,0,15,1,1,0,0,0,16,17,7,0,0,0,17,18,5,10,0,0,18,19,5,7,0,0,
        19,20,3,4,2,0,20,3,1,0,0,0,21,22,6,2,-1,0,22,25,3,6,3,0,23,25,3,
        8,4,0,24,21,1,0,0,0,24,23,1,0,0,0,25,34,1,0,0,0,26,27,10,4,0,0,27,
        28,7,1,0,0,28,33,3,4,2,5,29,30,10,3,0,0,30,31,7,2,0,0,31,33,3,4,
        2,4,32,26,1,0,0,0,32,29,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,
        1,0,0,0,35,5,1,0,0,0,36,34,1,0,0,0,37,38,3,10,5,0,38,7,1,0,0,0,39,
        40,3,10,5,0,40,41,5,8,0,0,41,42,5,9,0,0,42,9,1,0,0,0,43,44,5,10,
        0,0,44,11,1,0,0,0,4,14,24,32,34
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ExprParser.__ATN) {
            ExprParser.__ATN = new antlr.ATNDeserializer().deserialize(ExprParser._serializedATN);
        }

        return ExprParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ExprParser.literalNames, ExprParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ExprParser.vocabulary;
    }

    private static readonly decisionsToDFA = ExprParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignment(): AssignmentContext | null {
        return this.getRuleContext(0, AssignmentContext);
    }
    public simpleExpression(): SimpleExpressionContext | null {
        return this.getRuleContext(0, SimpleExpressionContext);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_expression;
    }
}


export class AssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(ExprParser.ID, 0)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(ExprParser.EQUAL, 0)!;
    }
    public simpleExpression(): SimpleExpressionContext {
        return this.getRuleContext(0, SimpleExpressionContext)!;
    }
    public VAR(): antlr.TerminalNode | null {
        return this.getToken(ExprParser.VAR, 0);
    }
    public LET(): antlr.TerminalNode | null {
        return this.getToken(ExprParser.LET, 0);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_assignment;
    }
}


export class SimpleExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableRef(): VariableRefContext | null {
        return this.getRuleContext(0, VariableRefContext);
    }
    public functionRef(): FunctionRefContext | null {
        return this.getRuleContext(0, FunctionRefContext);
    }
    public simpleExpression(): SimpleExpressionContext[];
    public simpleExpression(i: number): SimpleExpressionContext | null;
    public simpleExpression(i?: number): SimpleExpressionContext[] | SimpleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SimpleExpressionContext);
        }

        return this.getRuleContext(i, SimpleExpressionContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ExprParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(ExprParser.MINUS, 0);
    }
    public MULTIPLY(): antlr.TerminalNode | null {
        return this.getToken(ExprParser.MULTIPLY, 0);
    }
    public DIVIDE(): antlr.TerminalNode | null {
        return this.getToken(ExprParser.DIVIDE, 0);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_simpleExpression;
    }
}


export class VariableRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_variableRef;
    }
}


export class FunctionRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(ExprParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(ExprParser.CLOSE_PAR, 0)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_functionRef;
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(ExprParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_identifier;
    }
}
