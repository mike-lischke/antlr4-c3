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
        this._interp = new antlr.ParserATNSimulator(this, ExprParser._ATN, ExprParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public expression(): ExpressionContext {
        let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, ExprParser.RULE_expression);
        try {
            this.state = 14;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ExprParser.VAR:
                case ExprParser.LET:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 12;
                        this.assignment();
                    }
                    break;
                case ExprParser.ID:
                    this.enterOuterAlt(localctx, 2);
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
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public assignment(): AssignmentContext {
        let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, ExprParser.RULE_assignment);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 16;
                _la = this._input.LA(1);
                if (!(_la === 1 || _la === 2)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
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
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public simpleExpression(): SimpleExpressionContext;
    public simpleExpression(_p: number): SimpleExpressionContext;
    public simpleExpression(_p?: number): SimpleExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new SimpleExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 4;
        this.enterRecursionRule(localctx, 4, ExprParser.RULE_simpleExpression, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 24;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
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
                this._ctx.stop = this._input.LT(-1);
                this.state = 34;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 32;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new SimpleExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_simpleExpression);
                                        this.state = 26;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 27;
                                        _la = this._input.LA(1);
                                        if (!(_la === 3 || _la === 4)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 28;
                                        this.simpleExpression(5);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new SimpleExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_simpleExpression);
                                        this.state = 29;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 30;
                                        _la = this._input.LA(1);
                                        if (!(_la === 5 || _la === 6)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
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
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public variableRef(): VariableRefContext {
        let localctx: VariableRefContext = new VariableRefContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, ExprParser.RULE_variableRef);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 37;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public functionRef(): FunctionRefContext {
        let localctx: FunctionRefContext = new FunctionRefContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, ExprParser.RULE_functionRef);
        try {
            this.enterOuterAlt(localctx, 1);
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
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public identifier(): IdentifierContext {
        let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, ExprParser.RULE_identifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 43;
                this.match(ExprParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public override sempred(localctx: antlr.RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
            case 2:
                return this.simpleExpression_sempred(localctx as SimpleExpressionContext, predIndex);
        }
        return true;
    }
    private simpleExpression_sempred(localctx: SimpleExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 4);
            case 1:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4, 1, 11, 46, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 1, 0, 1,
        0, 3, 0, 15, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 3, 2, 25, 8, 2, 1, 2, 1, 2,
        1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 33, 8, 2, 10, 2, 12, 2, 36, 9, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4,
        1, 4, 1, 5, 1, 5, 1, 5, 0, 1, 4, 6, 0, 2, 4, 6, 8, 10, 0, 3, 1, 0, 1, 2, 1, 0, 3, 4, 1, 0, 5, 6,
        43, 0, 14, 1, 0, 0, 0, 2, 16, 1, 0, 0, 0, 4, 24, 1, 0, 0, 0, 6, 37, 1, 0, 0, 0, 8, 39, 1, 0,
        0, 0, 10, 43, 1, 0, 0, 0, 12, 15, 3, 2, 1, 0, 13, 15, 3, 4, 2, 0, 14, 12, 1, 0, 0, 0, 14, 13,
        1, 0, 0, 0, 15, 1, 1, 0, 0, 0, 16, 17, 7, 0, 0, 0, 17, 18, 5, 10, 0, 0, 18, 19, 5, 7, 0, 0,
        19, 20, 3, 4, 2, 0, 20, 3, 1, 0, 0, 0, 21, 22, 6, 2, -1, 0, 22, 25, 3, 6, 3, 0, 23, 25, 3,
        8, 4, 0, 24, 21, 1, 0, 0, 0, 24, 23, 1, 0, 0, 0, 25, 34, 1, 0, 0, 0, 26, 27, 10, 4, 0, 0, 27,
        28, 7, 1, 0, 0, 28, 33, 3, 4, 2, 5, 29, 30, 10, 3, 0, 0, 30, 31, 7, 2, 0, 0, 31, 33, 3, 4,
        2, 4, 32, 26, 1, 0, 0, 0, 32, 29, 1, 0, 0, 0, 33, 36, 1, 0, 0, 0, 34, 32, 1, 0, 0, 0, 34, 35,
        1, 0, 0, 0, 35, 5, 1, 0, 0, 0, 36, 34, 1, 0, 0, 0, 37, 38, 3, 10, 5, 0, 38, 7, 1, 0, 0, 0, 39,
        40, 3, 10, 5, 0, 40, 41, 5, 8, 0, 0, 41, 42, 5, 9, 0, 0, 42, 9, 1, 0, 0, 0, 43, 44, 5, 10,
        0, 0, 44, 11, 1, 0, 0, 0, 4, 14, 24, 32, 34
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ExprParser.__ATN) {
            ExprParser.__ATN = new antlr.ATNDeserializer().deserialize(ExprParser._serializedATN);
        }

        return ExprParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ExprParser.literalNames, ExprParser.symbolicNames, []);

    public override getVocabulary(): antlr.Vocabulary {
        return ExprParser.vocabulary;
    }

    private static readonly decisionsToDFA = ExprParser._ATN.decisionToState.map((ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index));
}

export class ExpressionContext extends antlr.ParserRuleContext {
    constructor(parser?: ExprParser, parent?: antlr.ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }
    public assignment(): AssignmentContext {
        return this.getTypedRuleContext(AssignmentContext, 0);
    }
    public simpleExpression(): SimpleExpressionContext {
        return this.getTypedRuleContext(SimpleExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_expression;
    }
}


export class AssignmentContext extends antlr.ParserRuleContext {
    constructor(parser?: ExprParser, parent?: antlr.ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(ExprParser.ID, 0);
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(ExprParser.EQUAL, 0);
    }
    public simpleExpression(): SimpleExpressionContext {
        return this.getTypedRuleContext(SimpleExpressionContext, 0);
    }
    public VAR(): antlr.TerminalNode {
        return this.getToken(ExprParser.VAR, 0);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(ExprParser.LET, 0);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_assignment;
    }
}


export class SimpleExpressionContext extends antlr.ParserRuleContext {
    constructor(parser?: ExprParser, parent?: antlr.ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }
    public variableRef(): VariableRefContext {
        return this.getTypedRuleContext(VariableRefContext, 0);
    }
    public functionRef(): FunctionRefContext {
        return this.getTypedRuleContext(FunctionRefContext, 0);
    }
    public simpleExpression__list(): SimpleExpressionContext[] {
        return this.getTypedRuleContexts(SimpleExpressionContext);
    }
    public simpleExpression(i: number): SimpleExpressionContext {
        return this.getTypedRuleContext(SimpleExpressionContext, i);
    }
    public PLUS(): antlr.TerminalNode {
        return this.getToken(ExprParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(ExprParser.MINUS, 0);
    }
    public MULTIPLY(): antlr.TerminalNode {
        return this.getToken(ExprParser.MULTIPLY, 0);
    }
    public DIVIDE(): antlr.TerminalNode {
        return this.getToken(ExprParser.DIVIDE, 0);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_simpleExpression;
    }
}


export class VariableRefContext extends antlr.ParserRuleContext {
    constructor(parser?: ExprParser, parent?: antlr.ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_variableRef;
    }
}


export class FunctionRefContext extends antlr.ParserRuleContext {
    constructor(parser?: ExprParser, parent?: antlr.ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(ExprParser.OPEN_PAR, 0);
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(ExprParser.CLOSE_PAR, 0);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_functionRef;
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    constructor(parser?: ExprParser, parent?: antlr.ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(ExprParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_identifier;
    }
}
