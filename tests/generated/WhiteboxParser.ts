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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"test1", "rule1", "rule2", "rule3", "rule4", "rule5", "test2", "rule7", 
		"rule8", "rule9", "rule10", "rule11", "test3", "rule13",
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
			this.state = 28;
			this.rule1();
			this.state = 29;
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
			this.state = 31;
			this.rule2();
			this.state = 32;
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
			this.state = 34;
			this.match(WhiteboxParser.LOREM);
			this.state = 35;
			this.rule3();
			this.state = 36;
			this.rule5();
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WhiteboxParser.SIT) {
				{
				{
				this.state = 37;
				this.match(WhiteboxParser.SIT);
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.AMET) {
				{
				this.state = 43;
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
			this.state = 46;
			this.rule4();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.DOLOR) {
				{
				this.state = 47;
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
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.IPSUM) {
				{
				this.state = 50;
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
			this.state = 55;
			this.rule7();
			this.state = 56;
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
			this.state = 58;
			this.rule8();
			this.state = 59;
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
			this.state = 61;
			this.match(WhiteboxParser.LOREM);
			this.state = 62;
			this.rule11();
			this.state = 63;
			this.rule9();
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WhiteboxParser.SIT) {
				{
				{
				this.state = 64;
				this.match(WhiteboxParser.SIT);
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.AMET) {
				{
				this.state = 70;
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
			this.state = 73;
			this.rule10();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.DOLOR) {
				{
				this.state = 74;
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
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.IPSUM) {
				{
				this.state = 77;
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
			this.state = 82;
			this.match(WhiteboxParser.LOREM);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WhiteboxParser.IPSUM) {
				{
				this.state = 83;
				this.match(WhiteboxParser.IPSUM);
				}
			}

			this.state = 86;
			this.rule13();
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 87;
				this.match(WhiteboxParser.AMET);
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === WhiteboxParser.AMET);
			this.state = 92;
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
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WhiteboxParser.DOLOR || _la === WhiteboxParser.SIT) {
				{
				{
				this.state = 94;
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
				this.state = 99;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\ng\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
		"\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04)\n\x04\f\x04\x0E\x04,\v\x04\x03\x04" +
		"\x05\x04/\n\x04\x03\x05\x03\x05\x05\x053\n\x05\x03\x06\x05\x066\n\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x03\n\x07\nD\n\n\f\n\x0E\nG\v\n\x03\n\x05\nJ\n\n\x03\v\x03\v\x05\vN\n" +
		"\v\x03\f\x05\fQ\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0EW\n\x0E\x03\x0E" +
		"\x03\x0E\x06\x0E[\n\x0E\r\x0E\x0E\x0E\\\x03\x0E\x03\x0E\x03\x0F\x07\x0F" +
		"b\n\x0F\f\x0F\x0E\x0Fe\v\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x02\x03\x03\x02\x05\x06\x02c\x02\x1E\x03\x02\x02\x02" +
		"\x04!\x03\x02\x02\x02\x06$\x03\x02\x02\x02\b0\x03\x02\x02\x02\n5\x03\x02" +
		"\x02\x02\f7\x03\x02\x02\x02\x0E9\x03\x02\x02\x02\x10<\x03\x02\x02\x02" +
		"\x12?\x03\x02\x02\x02\x14K\x03\x02\x02\x02\x16P\x03\x02\x02\x02\x18R\x03" +
		"\x02\x02\x02\x1AT\x03\x02\x02\x02\x1Cc\x03\x02\x02\x02\x1E\x1F\x05\x04" +
		"\x03\x02\x1F \x07\t\x02\x02 \x03\x03\x02\x02\x02!\"\x05\x06\x04\x02\"" +
		"#\x07\b\x02\x02#\x05\x03\x02\x02\x02$%\x07\x03\x02\x02%&\x05\b\x05\x02" +
		"&*\x05\f\x07\x02\')\x07\x06\x02\x02(\'\x03\x02\x02\x02),\x03\x02\x02\x02" +
		"*(\x03\x02\x02\x02*+\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02" +
		"-/\x07\x07\x02\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/\x07\x03\x02\x02" +
		"\x0202\x05\n\x06\x0213\x07\x05\x02\x0221\x03\x02\x02\x0223\x03\x02\x02" +
		"\x023\t\x03\x02\x02\x0246\x07\x04\x02\x0254\x03\x02\x02\x0256\x03\x02" +
		"\x02\x026\v\x03\x02\x02\x0278\x03\x02\x02\x028\r\x03\x02\x02\x029:\x05" +
		"\x10\t\x02:;\x07\t\x02\x02;\x0F\x03\x02\x02\x02<=\x05\x12\n\x02=>\x07" +
		"\b\x02\x02>\x11\x03\x02\x02\x02?@\x07\x03\x02\x02@A\x05\x18\r\x02AE\x05" +
		"\x14\v\x02BD\x07\x06\x02\x02CB\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03" +
		"\x02\x02\x02EF\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02HJ\x07" +
		"\x07\x02\x02IH\x03\x02\x02\x02IJ\x03\x02\x02\x02J\x13\x03\x02\x02\x02" +
		"KM\x05\x16\f\x02LN\x07\x05\x02\x02ML\x03\x02\x02\x02MN\x03\x02\x02\x02" +
		"N\x15\x03\x02\x02\x02OQ\x07\x04\x02\x02PO\x03\x02\x02\x02PQ\x03\x02\x02" +
		"\x02Q\x17\x03\x02\x02\x02RS\x03\x02\x02\x02S\x19\x03\x02\x02\x02TV\x07" +
		"\x03\x02\x02UW\x07\x04\x02\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02WX\x03" +
		"\x02\x02\x02XZ\x05\x1C\x0F\x02Y[\x07\x07\x02\x02ZY\x03\x02\x02\x02[\\" +
		"\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02" +
		"^_\x07\b\x02\x02_\x1B\x03\x02\x02\x02`b\t\x02\x02\x02a`\x03\x02\x02\x02" +
		"be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d\x1D\x03\x02\x02" +
		"\x02ec\x03\x02\x02\x02\r*.25EIMPV\\c";
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


