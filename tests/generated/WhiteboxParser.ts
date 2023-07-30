// Generated from tests/Whitebox.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class WhiteboxParser extends Parser {
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"test1", "rule1", "rule2", "rule3", "rule4", "rule5", "test2", "rule7", 
		"rule8", "rule9", "rule10", "rule11", "test3", "rule13", "test4", "rule15", 
		"rule16", "test5", "rule18", "rule19", "test6", "rule21", "rule22", "test7", 
		"test8",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'LOREM'", "'IPSUM'", "'DOLOR'", "'SIT'", "'AMET'", "'CONSECTETUR'", 
		"'ADIPISCING'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSECTETUR", "ADIPISCING", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WhiteboxParser._LITERAL_NAMES, WhiteboxParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WhiteboxParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Whitebox.g4"; }

	// @Override
	public get ruleNames(): string[] { return WhiteboxParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WhiteboxParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WhiteboxParser._ATN, this);
	}
	// @RuleVersion(0)
	public test1(): Test1Context {
		let _localctx: Test1Context = new Test1Context(this._ctx, this.state);
		this.enterRule(_localctx, 0, WhiteboxParser.RULE_test1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.rule1();
			this.state = 51;
			this.match(WhiteboxParser.ADIPISCING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule1(): Rule1Context {
		let _localctx: Rule1Context = new Rule1Context(this._ctx, this.state);
		this.enterRule(_localctx, 2, WhiteboxParser.RULE_rule1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.rule2();
			this.state = 54;
			this.match(WhiteboxParser.CONSECTETUR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule2(): Rule2Context {
		let _localctx: Rule2Context = new Rule2Context(this._ctx, this.state);
		this.enterRule(_localctx, 4, WhiteboxParser.RULE_rule2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(WhiteboxParser.LOREM);
			this.state = 57;
			this.rule3();
			this.state = 58;
			this.rule5();
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WhiteboxParser.SIT) {
				{
				{
				this.state = 59;
				this.match(WhiteboxParser.SIT);
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.AMET) {
				{
				this.state = 65;
				this.match(WhiteboxParser.AMET);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule3(): Rule3Context {
		let _localctx: Rule3Context = new Rule3Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, WhiteboxParser.RULE_rule3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.rule4();
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.DOLOR) {
				{
				this.state = 69;
				this.match(WhiteboxParser.DOLOR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule4(): Rule4Context {
		let _localctx: Rule4Context = new Rule4Context(this._ctx, this.state);
		this.enterRule(_localctx, 8, WhiteboxParser.RULE_rule4);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.IPSUM) {
				{
				this.state = 72;
				this.match(WhiteboxParser.IPSUM);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule5(): Rule5Context {
		let _localctx: Rule5Context = new Rule5Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, WhiteboxParser.RULE_rule5);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test2(): Test2Context {
		let _localctx: Test2Context = new Test2Context(this._ctx, this.state);
		this.enterRule(_localctx, 12, WhiteboxParser.RULE_test2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.rule7();
			this.state = 78;
			this.match(WhiteboxParser.ADIPISCING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule7(): Rule7Context {
		let _localctx: Rule7Context = new Rule7Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, WhiteboxParser.RULE_rule7);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.rule8();
			this.state = 81;
			this.match(WhiteboxParser.CONSECTETUR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule8(): Rule8Context {
		let _localctx: Rule8Context = new Rule8Context(this._ctx, this.state);
		this.enterRule(_localctx, 16, WhiteboxParser.RULE_rule8);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(WhiteboxParser.LOREM);
			this.state = 84;
			this.rule11();
			this.state = 85;
			this.rule9();
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WhiteboxParser.SIT) {
				{
				{
				this.state = 86;
				this.match(WhiteboxParser.SIT);
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.AMET) {
				{
				this.state = 92;
				this.match(WhiteboxParser.AMET);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule9(): Rule9Context {
		let _localctx: Rule9Context = new Rule9Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, WhiteboxParser.RULE_rule9);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.rule10();
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.DOLOR) {
				{
				this.state = 96;
				this.match(WhiteboxParser.DOLOR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule10(): Rule10Context {
		let _localctx: Rule10Context = new Rule10Context(this._ctx, this.state);
		this.enterRule(_localctx, 20, WhiteboxParser.RULE_rule10);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.IPSUM) {
				{
				this.state = 99;
				this.match(WhiteboxParser.IPSUM);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule11(): Rule11Context {
		let _localctx: Rule11Context = new Rule11Context(this._ctx, this.state);
		this.enterRule(_localctx, 22, WhiteboxParser.RULE_rule11);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test3(): Test3Context {
		let _localctx: Test3Context = new Test3Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, WhiteboxParser.RULE_test3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(WhiteboxParser.LOREM);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.IPSUM) {
				{
				this.state = 105;
				this.match(WhiteboxParser.IPSUM);
				}
			}

			this.state = 108;
			this.rule13();
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 109;
				this.match(WhiteboxParser.AMET);
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === WhiteboxParser.AMET);
			this.state = 114;
			this.match(WhiteboxParser.CONSECTETUR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule13(): Rule13Context {
		let _localctx: Rule13Context = new Rule13Context(this._ctx, this.state);
		this.enterRule(_localctx, 26, WhiteboxParser.RULE_rule13);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WhiteboxParser.DOLOR || _la === WhiteboxParser.SIT) {
				{
				{
				this.state = 116;
				_la = this._input.LA(1);
				if (!(_la === WhiteboxParser.DOLOR || _la === WhiteboxParser.SIT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test4(): Test4Context {
		let _localctx: Test4Context = new Test4Context(this._ctx, this.state);
		this.enterRule(_localctx, 28, WhiteboxParser.RULE_test4);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(WhiteboxParser.LOREM);
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule15(): Rule15Context {
		let _localctx: Rule15Context = new Rule15Context(this._ctx, this.state);
		this.enterRule(_localctx, 30, WhiteboxParser.RULE_rule15);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule16(): Rule16Context {
		let _localctx: Rule16Context = new Rule16Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, WhiteboxParser.RULE_rule16);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test5(): Test5Context {
		let _localctx: Test5Context = new Test5Context(this._ctx, this.state);
		this.enterRule(_localctx, 34, WhiteboxParser.RULE_test5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(WhiteboxParser.LOREM);
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule18(): Rule18Context {
		let _localctx: Rule18Context = new Rule18Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, WhiteboxParser.RULE_rule18);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(WhiteboxParser.IPSUM);
			this.state = 141;
			this.match(WhiteboxParser.DOLOR);
			this.state = 142;
			_la = this._input.LA(1);
			if (!(_la === WhiteboxParser.SIT || _la === WhiteboxParser.CONSECTETUR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule19(): Rule19Context {
		let _localctx: Rule19Context = new Rule19Context(this._ctx, this.state);
		this.enterRule(_localctx, 38, WhiteboxParser.RULE_rule19);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test6(): Test6Context {
		let _localctx: Test6Context = new Test6Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, WhiteboxParser.RULE_test6);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(WhiteboxParser.LOREM);
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule21(): Rule21Context {
		let _localctx: Rule21Context = new Rule21Context(this._ctx, this.state);
		this.enterRule(_localctx, 42, WhiteboxParser.RULE_rule21);
		try {
			this.enterOuterAlt(_localctx, 1);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule22(): Rule22Context {
		let _localctx: Rule22Context = new Rule22Context(this._ctx, this.state);
		this.enterRule(_localctx, 44, WhiteboxParser.RULE_rule22);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(WhiteboxParser.IPSUM);
			this.state = 158;
			this.match(WhiteboxParser.DOLOR);
			this.state = 159;
			_la = this._input.LA(1);
			if (!(_la === WhiteboxParser.AMET || _la === WhiteboxParser.CONSECTETUR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test7(): Test7Context {
		let _localctx: Test7Context = new Test7Context(this._ctx, this.state);
		this.enterRule(_localctx, 46, WhiteboxParser.RULE_test7);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(WhiteboxParser.LOREM);
			this.state = 168;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test8(): Test8Context {
		let _localctx: Test8Context = new Test8Context(this._ctx, this.state);
		this.enterRule(_localctx, 48, WhiteboxParser.RULE_test8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(WhiteboxParser.LOREM);
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n\xB8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04?\n\x04\f\x04" +
		"\x0E\x04B\v\x04\x03\x04\x05\x04E\n\x04\x03\x05\x03\x05\x05\x05I\n\x05" +
		"\x03\x06\x05\x06L\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x07\nZ\n\n\f\n\x0E\n]\v\n\x03\n\x05\n`" +
		"\n\n\x03\v\x03\v\x05\vd\n\v\x03\f\x05\fg\n\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x05\x0Em\n\x0E\x03\x0E\x03\x0E\x06\x0Eq\n\x0E\r\x0E\x0E\x0Er\x03\x0E" +
		"\x03\x0E\x03\x0F\x07\x0Fx\n\x0F\f\x0F\x0E\x0F{\v\x0F\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\x80\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\x8D\n\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\x9A\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\xAB\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\xB6\n\x1A\x03\x1A\x02\x02\x02\x1B\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x02\x02\x05\x03\x02\x05\x06\x04\x02\x06\x06\b\b\x03\x02\x07" +
		"\b\x02\xAE\x024\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06:\x03\x02\x02" +
		"\x02\bF\x03\x02\x02\x02\nK\x03\x02\x02\x02\fM\x03\x02\x02\x02\x0EO\x03" +
		"\x02\x02\x02\x10R\x03\x02\x02\x02\x12U\x03\x02\x02\x02\x14a\x03\x02\x02" +
		"\x02\x16f\x03\x02\x02\x02\x18h\x03\x02\x02\x02\x1Aj\x03\x02\x02\x02\x1C" +
		"y\x03\x02\x02\x02\x1E|\x03\x02\x02\x02 \x81\x03\x02\x02\x02\"\x85\x03" +
		"\x02\x02\x02$\x89\x03\x02\x02\x02&\x8E\x03\x02\x02\x02(\x92\x03\x02\x02" +
		"\x02*\x96\x03\x02\x02\x02,\x9B\x03\x02\x02\x02.\x9F\x03\x02\x02\x020\xA3" +
		"\x03\x02\x02\x022\xAC\x03\x02\x02\x0245\x05\x04\x03\x0256\x07\t\x02\x02" +
		"6\x03\x03\x02\x02\x0278\x05\x06\x04\x0289\x07\b\x02\x029\x05\x03\x02\x02" +
		"\x02:;\x07\x03\x02\x02;<\x05\b\x05\x02<@\x05\f\x07\x02=?\x07\x06\x02\x02" +
		">=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02" +
		"AD\x03\x02\x02\x02B@\x03\x02\x02\x02CE\x07\x07\x02\x02DC\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02E\x07\x03\x02\x02\x02FH\x05\n\x06\x02GI\x07\x05\x02" +
		"\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02I\t\x03\x02\x02\x02JL\x07\x04" +
		"\x02\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02L\v\x03\x02\x02\x02MN\x03" +
		"\x02\x02\x02N\r\x03\x02\x02\x02OP\x05\x10\t\x02PQ\x07\t\x02\x02Q\x0F\x03" +
		"\x02\x02\x02RS\x05\x12\n\x02ST\x07\b\x02\x02T\x11\x03\x02\x02\x02UV\x07" +
		"\x03\x02\x02VW\x05\x18\r\x02W[\x05\x14\v\x02XZ\x07\x06\x02\x02YX\x03\x02" +
		"\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\_\x03" +
		"\x02\x02\x02][\x03\x02\x02\x02^`\x07\x07\x02\x02_^\x03\x02\x02\x02_`\x03" +
		"\x02\x02\x02`\x13\x03\x02\x02\x02ac\x05\x16\f\x02bd\x07\x05\x02\x02cb" +
		"\x03\x02\x02\x02cd\x03\x02\x02\x02d\x15\x03\x02\x02\x02eg\x07\x04\x02" +
		"\x02fe\x03\x02\x02\x02fg\x03\x02\x02\x02g\x17\x03\x02\x02\x02hi\x03\x02" +
		"\x02\x02i\x19\x03\x02\x02\x02jl\x07\x03\x02\x02km\x07\x04\x02\x02lk\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mn\x03\x02\x02\x02np\x05\x1C\x0F\x02oq\x07" +
		"\x07\x02\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03" +
		"\x02\x02\x02st\x03\x02\x02\x02tu\x07\b\x02\x02u\x1B\x03\x02\x02\x02vx" +
		"\t\x02\x02\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02y" +
		"z\x03\x02\x02\x02z\x1D\x03\x02\x02\x02{y\x03\x02\x02\x02|\x7F\x07\x03" +
		"\x02\x02}\x80\x05 \x11\x02~\x80\x05\"\x12\x02\x7F}\x03\x02\x02\x02\x7F" +
		"~\x03\x02\x02\x02\x80\x1F\x03\x02\x02\x02\x81\x82\x07\x04\x02\x02\x82" +
		"\x83\x07\x05\x02\x02\x83\x84\x07\x06\x02\x02\x84!\x03\x02\x02\x02\x85" +
		"\x86\x07\x04\x02\x02\x86\x87\x07\x05\x02\x02\x87\x88\x07\x07\x02\x02\x88" +
		"#\x03\x02\x02\x02\x89\x8C\x07\x03\x02\x02\x8A\x8D\x05 \x11\x02\x8B\x8D" +
		"\x05\"\x12\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D%\x03" +
		"\x02\x02\x02\x8E\x8F\x07\x04\x02\x02\x8F\x90\x07\x05\x02\x02\x90\x91\t" +
		"\x03\x02\x02\x91\'\x03\x02\x02\x02\x92\x93\x07\x04\x02\x02\x93\x94\x07" +
		"\x05\x02\x02\x94\x95\x07\x07\x02\x02\x95)\x03\x02\x02\x02\x96\x99\x07" +
		"\x03\x02\x02\x97\x9A\x05 \x11\x02\x98\x9A\x05\"\x12\x02\x99\x97\x03\x02" +
		"\x02\x02\x99\x98\x03\x02\x02\x02\x9A+\x03\x02\x02\x02\x9B\x9C\x07\x04" +
		"\x02\x02\x9C\x9D\x07\x05\x02\x02\x9D\x9E\x07\x06\x02\x02\x9E-\x03\x02" +
		"\x02\x02\x9F\xA0\x07\x04\x02\x02\xA0\xA1\x07\x05\x02\x02\xA1\xA2\t\x04" +
		"\x02\x02\xA2/\x03\x02\x02\x02\xA3\xAA\x07\x03\x02\x02\xA4\xA5\x07\x04" +
		"\x02\x02\xA5\xA6\x07\x05\x02\x02\xA6\xAB\x07\x06\x02\x02\xA7\xA8\x07\x04" +
		"\x02\x02\xA8\xA9\x07\x05\x02\x02\xA9\xAB\x07\x07\x02\x02\xAA\xA4\x03\x02" +
		"\x02\x02\xAA\xA7\x03\x02\x02\x02\xAB1\x03\x02\x02\x02\xAC\xB5\x07\x03" +
		"\x02\x02\xAD\xAE\x07\x04\x02\x02\xAE\xAF\x07\x05\x02\x02\xAF\xB0\x07\x06" +
		"\x02\x02\xB0\xB6\x07\x07\x02\x02\xB1\xB2\x07\x04\x02\x02\xB2\xB3\x07\x05" +
		"\x02\x02\xB3\xB4\x07\x06\x02\x02\xB4\xB6\x07\b\x02\x02\xB5\xAD\x03\x02" +
		"\x02\x02\xB5\xB1\x03\x02\x02\x02\xB63\x03\x02\x02\x02\x12@DHK[_cflry\x7F" +
		"\x8C\x99\xAA\xB5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WhiteboxParser.__ATN) {
			WhiteboxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WhiteboxParser._serializedATN));
		}

		return WhiteboxParser.__ATN;
	}

}

export class Test1Context extends ParserRuleContext {
	public rule1(): Rule1Context {
		return this.getRuleContext(0, Rule1Context);
	}
	public ADIPISCING(): TerminalNode { return this.getToken(WhiteboxParser.ADIPISCING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_test1; }
}


export class Rule1Context extends ParserRuleContext {
	public rule2(): Rule2Context {
		return this.getRuleContext(0, Rule2Context);
	}
	public CONSECTETUR(): TerminalNode { return this.getToken(WhiteboxParser.CONSECTETUR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule1; }
}


export class Rule2Context extends ParserRuleContext {
	public LOREM(): TerminalNode { return this.getToken(WhiteboxParser.LOREM, 0); }
	public rule3(): Rule3Context {
		return this.getRuleContext(0, Rule3Context);
	}
	public rule5(): Rule5Context {
		return this.getRuleContext(0, Rule5Context);
	}
	public SIT(): TerminalNode[];
	public SIT(i: number): TerminalNode;
	public SIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhiteboxParser.SIT);
		} else {
			return this.getToken(WhiteboxParser.SIT, i);
		}
	}
	public AMET(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.AMET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule2; }
}


export class Rule3Context extends ParserRuleContext {
	public rule4(): Rule4Context {
		return this.getRuleContext(0, Rule4Context);
	}
	public DOLOR(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.DOLOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule3; }
}


export class Rule4Context extends ParserRuleContext {
	public IPSUM(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.IPSUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule4; }
}


export class Rule5Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule5; }
}


export class Test2Context extends ParserRuleContext {
	public rule7(): Rule7Context {
		return this.getRuleContext(0, Rule7Context);
	}
	public ADIPISCING(): TerminalNode { return this.getToken(WhiteboxParser.ADIPISCING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_test2; }
}


export class Rule7Context extends ParserRuleContext {
	public rule8(): Rule8Context {
		return this.getRuleContext(0, Rule8Context);
	}
	public CONSECTETUR(): TerminalNode { return this.getToken(WhiteboxParser.CONSECTETUR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule7; }
}


export class Rule8Context extends ParserRuleContext {
	public LOREM(): TerminalNode { return this.getToken(WhiteboxParser.LOREM, 0); }
	public rule11(): Rule11Context {
		return this.getRuleContext(0, Rule11Context);
	}
	public rule9(): Rule9Context {
		return this.getRuleContext(0, Rule9Context);
	}
	public SIT(): TerminalNode[];
	public SIT(i: number): TerminalNode;
	public SIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhiteboxParser.SIT);
		} else {
			return this.getToken(WhiteboxParser.SIT, i);
		}
	}
	public AMET(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.AMET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule8; }
}


export class Rule9Context extends ParserRuleContext {
	public rule10(): Rule10Context {
		return this.getRuleContext(0, Rule10Context);
	}
	public DOLOR(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.DOLOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule9; }
}


export class Rule10Context extends ParserRuleContext {
	public IPSUM(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.IPSUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule10; }
}


export class Rule11Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule11; }
}


export class Test3Context extends ParserRuleContext {
	public LOREM(): TerminalNode { return this.getToken(WhiteboxParser.LOREM, 0); }
	public rule13(): Rule13Context {
		return this.getRuleContext(0, Rule13Context);
	}
	public CONSECTETUR(): TerminalNode { return this.getToken(WhiteboxParser.CONSECTETUR, 0); }
	public IPSUM(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.IPSUM, 0); }
	public AMET(): TerminalNode[];
	public AMET(i: number): TerminalNode;
	public AMET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhiteboxParser.AMET);
		} else {
			return this.getToken(WhiteboxParser.AMET, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_test3; }
}


export class Rule13Context extends ParserRuleContext {
	public DOLOR(): TerminalNode[];
	public DOLOR(i: number): TerminalNode;
	public DOLOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhiteboxParser.DOLOR);
		} else {
			return this.getToken(WhiteboxParser.DOLOR, i);
		}
	}
	public SIT(): TerminalNode[];
	public SIT(i: number): TerminalNode;
	public SIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WhiteboxParser.SIT);
		} else {
			return this.getToken(WhiteboxParser.SIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule13; }
}


export class Test4Context extends ParserRuleContext {
	public LOREM(): TerminalNode { return this.getToken(WhiteboxParser.LOREM, 0); }
	public rule15(): Rule15Context | undefined {
		return this.tryGetRuleContext(0, Rule15Context);
	}
	public rule16(): Rule16Context | undefined {
		return this.tryGetRuleContext(0, Rule16Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_test4; }
}


export class Rule15Context extends ParserRuleContext {
	public IPSUM(): TerminalNode { return this.getToken(WhiteboxParser.IPSUM, 0); }
	public DOLOR(): TerminalNode { return this.getToken(WhiteboxParser.DOLOR, 0); }
	public SIT(): TerminalNode { return this.getToken(WhiteboxParser.SIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule15; }
}


export class Rule16Context extends ParserRuleContext {
	public IPSUM(): TerminalNode { return this.getToken(WhiteboxParser.IPSUM, 0); }
	public DOLOR(): TerminalNode { return this.getToken(WhiteboxParser.DOLOR, 0); }
	public AMET(): TerminalNode { return this.getToken(WhiteboxParser.AMET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule16; }
}


export class Test5Context extends ParserRuleContext {
	public LOREM(): TerminalNode { return this.getToken(WhiteboxParser.LOREM, 0); }
	public rule15(): Rule15Context | undefined {
		return this.tryGetRuleContext(0, Rule15Context);
	}
	public rule16(): Rule16Context | undefined {
		return this.tryGetRuleContext(0, Rule16Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_test5; }
}


export class Rule18Context extends ParserRuleContext {
	public IPSUM(): TerminalNode { return this.getToken(WhiteboxParser.IPSUM, 0); }
	public DOLOR(): TerminalNode { return this.getToken(WhiteboxParser.DOLOR, 0); }
	public SIT(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.SIT, 0); }
	public CONSECTETUR(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.CONSECTETUR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule18; }
}


export class Rule19Context extends ParserRuleContext {
	public IPSUM(): TerminalNode { return this.getToken(WhiteboxParser.IPSUM, 0); }
	public DOLOR(): TerminalNode { return this.getToken(WhiteboxParser.DOLOR, 0); }
	public AMET(): TerminalNode { return this.getToken(WhiteboxParser.AMET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule19; }
}


export class Test6Context extends ParserRuleContext {
	public LOREM(): TerminalNode { return this.getToken(WhiteboxParser.LOREM, 0); }
	public rule15(): Rule15Context | undefined {
		return this.tryGetRuleContext(0, Rule15Context);
	}
	public rule16(): Rule16Context | undefined {
		return this.tryGetRuleContext(0, Rule16Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_test6; }
}


export class Rule21Context extends ParserRuleContext {
	public IPSUM(): TerminalNode { return this.getToken(WhiteboxParser.IPSUM, 0); }
	public DOLOR(): TerminalNode { return this.getToken(WhiteboxParser.DOLOR, 0); }
	public SIT(): TerminalNode { return this.getToken(WhiteboxParser.SIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule21; }
}


export class Rule22Context extends ParserRuleContext {
	public IPSUM(): TerminalNode { return this.getToken(WhiteboxParser.IPSUM, 0); }
	public DOLOR(): TerminalNode { return this.getToken(WhiteboxParser.DOLOR, 0); }
	public AMET(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.AMET, 0); }
	public CONSECTETUR(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.CONSECTETUR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_rule22; }
}


export class Test7Context extends ParserRuleContext {
	public LOREM(): TerminalNode { return this.getToken(WhiteboxParser.LOREM, 0); }
	public IPSUM(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.IPSUM, 0); }
	public DOLOR(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.DOLOR, 0); }
	public SIT(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.SIT, 0); }
	public AMET(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.AMET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_test7; }
}


export class Test8Context extends ParserRuleContext {
	public LOREM(): TerminalNode { return this.getToken(WhiteboxParser.LOREM, 0); }
	public IPSUM(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.IPSUM, 0); }
	public DOLOR(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.DOLOR, 0); }
	public SIT(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.SIT, 0); }
	public AMET(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.AMET, 0); }
	public CONSECTETUR(): TerminalNode | undefined { return this.tryGetToken(WhiteboxParser.CONSECTETUR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WhiteboxParser.RULE_test8; }
}


