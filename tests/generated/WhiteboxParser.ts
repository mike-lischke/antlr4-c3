// Generated from tests/Whitebox.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class WhiteboxParser extends antlr.Parser {
    public static readonly LOREM = 1;
    public static readonly IPSUM = 2;
    public static readonly DOLOR = 3;
    public static readonly SIT = 4;
    public static readonly AMET = 5;
    public static readonly CONSECTETUR = 6;
    public static readonly ADIPISCING = 7;
    public static readonly WS = 8;
    public static readonly RULE_test1 = 0;
    public static readonly RULE_rule1 = 1;
    public static readonly RULE_rule2 = 2;
    public static readonly RULE_rule3 = 3;
    public static readonly RULE_rule4 = 4;
    public static readonly RULE_rule5 = 5;
    public static readonly RULE_test2 = 6;
    public static readonly RULE_rule7 = 7;
    public static readonly RULE_rule8 = 8;
    public static readonly RULE_rule9 = 9;
    public static readonly RULE_rule10 = 10;
    public static readonly RULE_rule11 = 11;
    public static readonly RULE_test3 = 12;
    public static readonly RULE_rule13 = 13;
    public static readonly RULE_test4 = 14;
    public static readonly RULE_rule15 = 15;
    public static readonly RULE_rule16 = 16;
    public static readonly RULE_test5 = 17;
    public static readonly RULE_rule18 = 18;
    public static readonly RULE_rule19 = 19;
    public static readonly RULE_test6 = 20;
    public static readonly RULE_rule21 = 21;
    public static readonly RULE_rule22 = 22;
    public static readonly RULE_test7 = 23;
    public static readonly RULE_test8 = 24;

    public static readonly literalNames = [
        null, "'LOREM'", "'IPSUM'", "'DOLOR'", "'SIT'", "'AMET'", "'CONSECTETUR'", 
        "'ADIPISCING'"
    ];

    public static readonly symbolicNames = [
        null, "LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSECTETUR", "ADIPISCING", 
        "WS"
    ];
    public static readonly ruleNames = [
        "test1", "rule1", "rule2", "rule3", "rule4", "rule5", "test2", "rule7", 
        "rule8", "rule9", "rule10", "rule11", "test3", "rule13", "test4", 
        "rule15", "rule16", "test5", "rule18", "rule19", "test6", "rule21", 
        "rule22", "test7", "test8",
    ];

    public get grammarFileName(): string { return "Whitebox.g4"; }
    public get literalNames(): (string | null)[] { return WhiteboxParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return WhiteboxParser.symbolicNames; }
    public get ruleNames(): string[] { return WhiteboxParser.ruleNames; }
    public get serializedATN(): number[] { return WhiteboxParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, WhiteboxParser._ATN, WhiteboxParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public test1(): Test1Context {
        let localContext = new Test1Context(this._ctx, this.state);
        this.enterRule(localContext, 0, WhiteboxParser.RULE_test1);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 50;
            this.rule1();
            this.state = 51;
            this.match(WhiteboxParser.ADIPISCING);
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
    public rule1(): Rule1Context {
        let localContext = new Rule1Context(this._ctx, this.state);
        this.enterRule(localContext, 2, WhiteboxParser.RULE_rule1);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 53;
            this.rule2();
            this.state = 54;
            this.match(WhiteboxParser.CONSECTETUR);
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
    public rule2(): Rule2Context {
        let localContext = new Rule2Context(this._ctx, this.state);
        this.enterRule(localContext, 4, WhiteboxParser.RULE_rule2);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 56;
            this.match(WhiteboxParser.LOREM);
            this.state = 57;
            this.rule3();
            this.state = 58;
            this.rule5();
            this.state = 62;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 59;
                this.match(WhiteboxParser.SIT);
                }
                }
                this.state = 64;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 66;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 65;
                this.match(WhiteboxParser.AMET);
                }
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
            this.exitRule();
        }
        return localContext;
    }
    public rule3(): Rule3Context {
        let localContext = new Rule3Context(this._ctx, this.state);
        this.enterRule(localContext, 6, WhiteboxParser.RULE_rule3);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 68;
            this.rule4();
            this.state = 70;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 69;
                this.match(WhiteboxParser.DOLOR);
                }
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
            this.exitRule();
        }
        return localContext;
    }
    public rule4(): Rule4Context {
        let localContext = new Rule4Context(this._ctx, this.state);
        this.enterRule(localContext, 8, WhiteboxParser.RULE_rule4);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 73;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 72;
                this.match(WhiteboxParser.IPSUM);
                }
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
            this.exitRule();
        }
        return localContext;
    }
    public rule5(): Rule5Context {
        let localContext = new Rule5Context(this._ctx, this.state);
        this.enterRule(localContext, 10, WhiteboxParser.RULE_rule5);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
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
    public test2(): Test2Context {
        let localContext = new Test2Context(this._ctx, this.state);
        this.enterRule(localContext, 12, WhiteboxParser.RULE_test2);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.rule7();
            this.state = 78;
            this.match(WhiteboxParser.ADIPISCING);
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
    public rule7(): Rule7Context {
        let localContext = new Rule7Context(this._ctx, this.state);
        this.enterRule(localContext, 14, WhiteboxParser.RULE_rule7);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 80;
            this.rule8();
            this.state = 81;
            this.match(WhiteboxParser.CONSECTETUR);
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
    public rule8(): Rule8Context {
        let localContext = new Rule8Context(this._ctx, this.state);
        this.enterRule(localContext, 16, WhiteboxParser.RULE_rule8);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
            this.match(WhiteboxParser.LOREM);
            this.state = 84;
            this.rule11();
            this.state = 85;
            this.rule9();
            this.state = 89;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 86;
                this.match(WhiteboxParser.SIT);
                }
                }
                this.state = 91;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 93;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 92;
                this.match(WhiteboxParser.AMET);
                }
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
            this.exitRule();
        }
        return localContext;
    }
    public rule9(): Rule9Context {
        let localContext = new Rule9Context(this._ctx, this.state);
        this.enterRule(localContext, 18, WhiteboxParser.RULE_rule9);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 95;
            this.rule10();
            this.state = 97;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 96;
                this.match(WhiteboxParser.DOLOR);
                }
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
            this.exitRule();
        }
        return localContext;
    }
    public rule10(): Rule10Context {
        let localContext = new Rule10Context(this._ctx, this.state);
        this.enterRule(localContext, 20, WhiteboxParser.RULE_rule10);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 100;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 99;
                this.match(WhiteboxParser.IPSUM);
                }
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
            this.exitRule();
        }
        return localContext;
    }
    public rule11(): Rule11Context {
        let localContext = new Rule11Context(this._ctx, this.state);
        this.enterRule(localContext, 22, WhiteboxParser.RULE_rule11);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
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
    public test3(): Test3Context {
        let localContext = new Test3Context(this._ctx, this.state);
        this.enterRule(localContext, 24, WhiteboxParser.RULE_test3);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 104;
            this.match(WhiteboxParser.LOREM);
            this.state = 106;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 105;
                this.match(WhiteboxParser.IPSUM);
                }
            }

            this.state = 108;
            this.rule13();
            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 109;
                this.match(WhiteboxParser.AMET);
                }
                }
                this.state = 112;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 5);
            this.state = 114;
            this.match(WhiteboxParser.CONSECTETUR);
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
    public rule13(): Rule13Context {
        let localContext = new Rule13Context(this._ctx, this.state);
        this.enterRule(localContext, 26, WhiteboxParser.RULE_rule13);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 119;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3 || _la === 4) {
                {
                {
                this.state = 116;
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 4)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 121;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    public test4(): Test4Context {
        let localContext = new Test4Context(this._ctx, this.state);
        this.enterRule(localContext, 28, WhiteboxParser.RULE_test4);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.match(WhiteboxParser.LOREM);
            this.state = 125;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this._ctx) ) {
            case 1:
                {
                this.state = 123;
                this.rule15();
                }
                break;
            case 2:
                {
                this.state = 124;
                this.rule16();
                }
                break;
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
            this.exitRule();
        }
        return localContext;
    }
    public rule15(): Rule15Context {
        let localContext = new Rule15Context(this._ctx, this.state);
        this.enterRule(localContext, 30, WhiteboxParser.RULE_rule15);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 127;
            this.match(WhiteboxParser.IPSUM);
            this.state = 128;
            this.match(WhiteboxParser.DOLOR);
            this.state = 129;
            this.match(WhiteboxParser.SIT);
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
    public rule16(): Rule16Context {
        let localContext = new Rule16Context(this._ctx, this.state);
        this.enterRule(localContext, 32, WhiteboxParser.RULE_rule16);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 131;
            this.match(WhiteboxParser.IPSUM);
            this.state = 132;
            this.match(WhiteboxParser.DOLOR);
            this.state = 133;
            this.match(WhiteboxParser.AMET);
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
    public test5(): Test5Context {
        let localContext = new Test5Context(this._ctx, this.state);
        this.enterRule(localContext, 34, WhiteboxParser.RULE_test5);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            this.match(WhiteboxParser.LOREM);
            this.state = 138;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this._ctx) ) {
            case 1:
                {
                this.state = 136;
                this.rule15();
                }
                break;
            case 2:
                {
                this.state = 137;
                this.rule16();
                }
                break;
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
            this.exitRule();
        }
        return localContext;
    }
    public rule18(): Rule18Context {
        let localContext = new Rule18Context(this._ctx, this.state);
        this.enterRule(localContext, 36, WhiteboxParser.RULE_rule18);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 140;
            this.match(WhiteboxParser.IPSUM);
            this.state = 141;
            this.match(WhiteboxParser.DOLOR);
            this.state = 142;
            _la = this.tokenStream.LA(1);
            if(!(_la === 4 || _la === 6)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
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
            this.exitRule();
        }
        return localContext;
    }
    public rule19(): Rule19Context {
        let localContext = new Rule19Context(this._ctx, this.state);
        this.enterRule(localContext, 38, WhiteboxParser.RULE_rule19);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 144;
            this.match(WhiteboxParser.IPSUM);
            this.state = 145;
            this.match(WhiteboxParser.DOLOR);
            this.state = 146;
            this.match(WhiteboxParser.AMET);
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
    public test6(): Test6Context {
        let localContext = new Test6Context(this._ctx, this.state);
        this.enterRule(localContext, 40, WhiteboxParser.RULE_test6);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 148;
            this.match(WhiteboxParser.LOREM);
            this.state = 151;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this._ctx) ) {
            case 1:
                {
                this.state = 149;
                this.rule15();
                }
                break;
            case 2:
                {
                this.state = 150;
                this.rule16();
                }
                break;
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
            this.exitRule();
        }
        return localContext;
    }
    public rule21(): Rule21Context {
        let localContext = new Rule21Context(this._ctx, this.state);
        this.enterRule(localContext, 42, WhiteboxParser.RULE_rule21);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 153;
            this.match(WhiteboxParser.IPSUM);
            this.state = 154;
            this.match(WhiteboxParser.DOLOR);
            this.state = 155;
            this.match(WhiteboxParser.SIT);
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
    public rule22(): Rule22Context {
        let localContext = new Rule22Context(this._ctx, this.state);
        this.enterRule(localContext, 44, WhiteboxParser.RULE_rule22);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 157;
            this.match(WhiteboxParser.IPSUM);
            this.state = 158;
            this.match(WhiteboxParser.DOLOR);
            this.state = 159;
            _la = this.tokenStream.LA(1);
            if(!(_la === 5 || _la === 6)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
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
            this.exitRule();
        }
        return localContext;
    }
    public test7(): Test7Context {
        let localContext = new Test7Context(this._ctx, this.state);
        this.enterRule(localContext, 46, WhiteboxParser.RULE_test7);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            this.match(WhiteboxParser.LOREM);
            this.state = 168;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this._ctx) ) {
            case 1:
                {
                this.state = 162;
                this.match(WhiteboxParser.IPSUM);
                this.state = 163;
                this.match(WhiteboxParser.DOLOR);
                this.state = 164;
                this.match(WhiteboxParser.SIT);
                }
                break;
            case 2:
                {
                this.state = 165;
                this.match(WhiteboxParser.IPSUM);
                this.state = 166;
                this.match(WhiteboxParser.DOLOR);
                this.state = 167;
                this.match(WhiteboxParser.AMET);
                }
                break;
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
            this.exitRule();
        }
        return localContext;
    }
    public test8(): Test8Context {
        let localContext = new Test8Context(this._ctx, this.state);
        this.enterRule(localContext, 48, WhiteboxParser.RULE_test8);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.match(WhiteboxParser.LOREM);
            this.state = 179;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this._ctx) ) {
            case 1:
                {
                this.state = 171;
                this.match(WhiteboxParser.IPSUM);
                this.state = 172;
                this.match(WhiteboxParser.DOLOR);
                this.state = 173;
                this.match(WhiteboxParser.SIT);
                this.state = 174;
                this.match(WhiteboxParser.AMET);
                }
                break;
            case 2:
                {
                this.state = 175;
                this.match(WhiteboxParser.IPSUM);
                this.state = 176;
                this.match(WhiteboxParser.DOLOR);
                this.state = 177;
                this.match(WhiteboxParser.SIT);
                this.state = 178;
                this.match(WhiteboxParser.CONSECTETUR);
                }
                break;
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
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,8,182,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,1,0,1,0,1,1,1,1,
        1,1,1,2,1,2,1,2,1,2,5,2,61,8,2,10,2,12,2,64,9,2,1,2,3,2,67,8,2,1,
        3,1,3,3,3,71,8,3,1,4,3,4,74,8,4,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,
        1,8,1,8,1,8,1,8,5,8,88,8,8,10,8,12,8,91,9,8,1,8,3,8,94,8,8,1,9,1,
        9,3,9,98,8,9,1,10,3,10,101,8,10,1,11,1,11,1,12,1,12,3,12,107,8,12,
        1,12,1,12,4,12,111,8,12,11,12,12,12,112,1,12,1,12,1,13,5,13,118,
        8,13,10,13,12,13,121,9,13,1,14,1,14,1,14,3,14,126,8,14,1,15,1,15,
        1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,3,17,139,8,17,1,18,
        1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,3,20,152,8,20,
        1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
        1,23,1,23,3,23,169,8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,3,24,180,8,24,1,24,0,0,25,0,2,4,6,8,10,12,14,16,18,20,22,24,
        26,28,30,32,34,36,38,40,42,44,46,48,0,3,1,0,3,4,2,0,4,4,6,6,1,0,
        5,6,172,0,50,1,0,0,0,2,53,1,0,0,0,4,56,1,0,0,0,6,68,1,0,0,0,8,73,
        1,0,0,0,10,75,1,0,0,0,12,77,1,0,0,0,14,80,1,0,0,0,16,83,1,0,0,0,
        18,95,1,0,0,0,20,100,1,0,0,0,22,102,1,0,0,0,24,104,1,0,0,0,26,119,
        1,0,0,0,28,122,1,0,0,0,30,127,1,0,0,0,32,131,1,0,0,0,34,135,1,0,
        0,0,36,140,1,0,0,0,38,144,1,0,0,0,40,148,1,0,0,0,42,153,1,0,0,0,
        44,157,1,0,0,0,46,161,1,0,0,0,48,170,1,0,0,0,50,51,3,2,1,0,51,52,
        5,7,0,0,52,1,1,0,0,0,53,54,3,4,2,0,54,55,5,6,0,0,55,3,1,0,0,0,56,
        57,5,1,0,0,57,58,3,6,3,0,58,62,3,10,5,0,59,61,5,4,0,0,60,59,1,0,
        0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,66,1,0,0,0,64,62,
        1,0,0,0,65,67,5,5,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,5,1,0,0,0,68,
        70,3,8,4,0,69,71,5,3,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,7,1,0,0,
        0,72,74,5,2,0,0,73,72,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,0,75,76,1,
        0,0,0,76,11,1,0,0,0,77,78,3,14,7,0,78,79,5,7,0,0,79,13,1,0,0,0,80,
        81,3,16,8,0,81,82,5,6,0,0,82,15,1,0,0,0,83,84,5,1,0,0,84,85,3,22,
        11,0,85,89,3,18,9,0,86,88,5,4,0,0,87,86,1,0,0,0,88,91,1,0,0,0,89,
        87,1,0,0,0,89,90,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,92,94,5,5,0,
        0,93,92,1,0,0,0,93,94,1,0,0,0,94,17,1,0,0,0,95,97,3,20,10,0,96,98,
        5,3,0,0,97,96,1,0,0,0,97,98,1,0,0,0,98,19,1,0,0,0,99,101,5,2,0,0,
        100,99,1,0,0,0,100,101,1,0,0,0,101,21,1,0,0,0,102,103,1,0,0,0,103,
        23,1,0,0,0,104,106,5,1,0,0,105,107,5,2,0,0,106,105,1,0,0,0,106,107,
        1,0,0,0,107,108,1,0,0,0,108,110,3,26,13,0,109,111,5,5,0,0,110,109,
        1,0,0,0,111,112,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,114,
        1,0,0,0,114,115,5,6,0,0,115,25,1,0,0,0,116,118,7,0,0,0,117,116,1,
        0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,27,1,0,
        0,0,121,119,1,0,0,0,122,125,5,1,0,0,123,126,3,30,15,0,124,126,3,
        32,16,0,125,123,1,0,0,0,125,124,1,0,0,0,126,29,1,0,0,0,127,128,5,
        2,0,0,128,129,5,3,0,0,129,130,5,4,0,0,130,31,1,0,0,0,131,132,5,2,
        0,0,132,133,5,3,0,0,133,134,5,5,0,0,134,33,1,0,0,0,135,138,5,1,0,
        0,136,139,3,30,15,0,137,139,3,32,16,0,138,136,1,0,0,0,138,137,1,
        0,0,0,139,35,1,0,0,0,140,141,5,2,0,0,141,142,5,3,0,0,142,143,7,1,
        0,0,143,37,1,0,0,0,144,145,5,2,0,0,145,146,5,3,0,0,146,147,5,5,0,
        0,147,39,1,0,0,0,148,151,5,1,0,0,149,152,3,30,15,0,150,152,3,32,
        16,0,151,149,1,0,0,0,151,150,1,0,0,0,152,41,1,0,0,0,153,154,5,2,
        0,0,154,155,5,3,0,0,155,156,5,4,0,0,156,43,1,0,0,0,157,158,5,2,0,
        0,158,159,5,3,0,0,159,160,7,2,0,0,160,45,1,0,0,0,161,168,5,1,0,0,
        162,163,5,2,0,0,163,164,5,3,0,0,164,169,5,4,0,0,165,166,5,2,0,0,
        166,167,5,3,0,0,167,169,5,5,0,0,168,162,1,0,0,0,168,165,1,0,0,0,
        169,47,1,0,0,0,170,179,5,1,0,0,171,172,5,2,0,0,172,173,5,3,0,0,173,
        174,5,4,0,0,174,180,5,5,0,0,175,176,5,2,0,0,176,177,5,3,0,0,177,
        178,5,4,0,0,178,180,5,6,0,0,179,171,1,0,0,0,179,175,1,0,0,0,180,
        49,1,0,0,0,16,62,66,70,73,89,93,97,100,106,112,119,125,138,151,168,
        179
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!WhiteboxParser.__ATN) {
            WhiteboxParser.__ATN = new antlr.ATNDeserializer().deserialize(WhiteboxParser._serializedATN);
        }

        return WhiteboxParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(WhiteboxParser.literalNames, WhiteboxParser.symbolicNames, []);

    public override getVocabulary(): antlr.Vocabulary {
        return WhiteboxParser.vocabulary;
    }

    private static readonly decisionsToDFA = WhiteboxParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class Test1Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public rule1(): Rule1Context {
        return this.getRuleContext(0, Rule1Context)!;
    }
    public ADIPISCING(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.ADIPISCING, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_test1;
    }
}


export class Rule1Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public rule2(): Rule2Context {
        return this.getRuleContext(0, Rule2Context)!;
    }
    public CONSECTETUR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule1;
    }
}


export class Rule2Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOREM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.LOREM, 0);
    }
    public rule3(): Rule3Context {
        return this.getRuleContext(0, Rule3Context)!;
    }
    public rule5(): Rule5Context {
        return this.getRuleContext(0, Rule5Context)!;
    }
    public SIT(): antlr.TerminalNode[];
    public SIT(i: number): antlr.TerminalNode | null;
    public SIT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(WhiteboxParser.SIT);
    	} else {
    		return this.getToken(WhiteboxParser.SIT, i);
    	}
    }
    public AMET(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.AMET, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule2;
    }
}


export class Rule3Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public rule4(): Rule4Context {
        return this.getRuleContext(0, Rule4Context)!;
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule3;
    }
}


export class Rule4Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule4;
    }
}


export class Rule5Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule5;
    }
}


export class Test2Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public rule7(): Rule7Context {
        return this.getRuleContext(0, Rule7Context)!;
    }
    public ADIPISCING(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.ADIPISCING, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_test2;
    }
}


export class Rule7Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public rule8(): Rule8Context {
        return this.getRuleContext(0, Rule8Context)!;
    }
    public CONSECTETUR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule7;
    }
}


export class Rule8Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOREM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.LOREM, 0);
    }
    public rule11(): Rule11Context {
        return this.getRuleContext(0, Rule11Context)!;
    }
    public rule9(): Rule9Context {
        return this.getRuleContext(0, Rule9Context)!;
    }
    public SIT(): antlr.TerminalNode[];
    public SIT(i: number): antlr.TerminalNode | null;
    public SIT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(WhiteboxParser.SIT);
    	} else {
    		return this.getToken(WhiteboxParser.SIT, i);
    	}
    }
    public AMET(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.AMET, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule8;
    }
}


export class Rule9Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public rule10(): Rule10Context {
        return this.getRuleContext(0, Rule10Context)!;
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule9;
    }
}


export class Rule10Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule10;
    }
}


export class Rule11Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule11;
    }
}


export class Test3Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOREM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.LOREM, 0);
    }
    public rule13(): Rule13Context {
        return this.getRuleContext(0, Rule13Context)!;
    }
    public CONSECTETUR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public AMET(): antlr.TerminalNode[];
    public AMET(i: number): antlr.TerminalNode | null;
    public AMET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(WhiteboxParser.AMET);
    	} else {
    		return this.getToken(WhiteboxParser.AMET, i);
    	}
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_test3;
    }
}


export class Rule13Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOLOR(): antlr.TerminalNode[];
    public DOLOR(i: number): antlr.TerminalNode | null;
    public DOLOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(WhiteboxParser.DOLOR);
    	} else {
    		return this.getToken(WhiteboxParser.DOLOR, i);
    	}
    }
    public SIT(): antlr.TerminalNode[];
    public SIT(i: number): antlr.TerminalNode | null;
    public SIT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(WhiteboxParser.SIT);
    	} else {
    		return this.getToken(WhiteboxParser.SIT, i);
    	}
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule13;
    }
}


export class Test4Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOREM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.LOREM, 0);
    }
    public rule15(): Rule15Context | null {
        return this.getRuleContext(0, Rule15Context);
    }
    public rule16(): Rule16Context | null {
        return this.getRuleContext(0, Rule16Context);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_test4;
    }
}


export class Rule15Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public SIT(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.SIT, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule15;
    }
}


export class Rule16Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public AMET(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.AMET, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule16;
    }
}


export class Test5Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOREM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.LOREM, 0);
    }
    public rule15(): Rule15Context | null {
        return this.getRuleContext(0, Rule15Context);
    }
    public rule16(): Rule16Context | null {
        return this.getRuleContext(0, Rule16Context);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_test5;
    }
}


export class Rule18Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public SIT(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.SIT, 0);
    }
    public CONSECTETUR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule18;
    }
}


export class Rule19Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public AMET(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.AMET, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule19;
    }
}


export class Test6Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOREM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.LOREM, 0);
    }
    public rule15(): Rule15Context | null {
        return this.getRuleContext(0, Rule15Context);
    }
    public rule16(): Rule16Context | null {
        return this.getRuleContext(0, Rule16Context);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_test6;
    }
}


export class Rule21Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public SIT(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.SIT, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule21;
    }
}


export class Rule22Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public AMET(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.AMET, 0);
    }
    public CONSECTETUR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_rule22;
    }
}


export class Test7Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOREM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.LOREM, 0);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public SIT(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.SIT, 0);
    }
    public AMET(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.AMET, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_test7;
    }
}


export class Test8Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOREM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.LOREM, 0);
    }
    public IPSUM(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    }
    public DOLOR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    }
    public SIT(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.SIT, 0);
    }
    public AMET(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.AMET, 0);
    }
    public CONSECTETUR(): antlr.TerminalNode | null {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    }
    public override get ruleIndex(): number {
        return WhiteboxParser.RULE_test8;
    }
}
