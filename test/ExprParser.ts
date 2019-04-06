// Generated from test/Expr.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class ExprParser extends Parser {
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "assignment", "simpleExpression", "variableRef", "functionRef",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", "'='", "'('", 
		"')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL", 
		"OPEN_PAR", "CLOSE_PAR", "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExprParser._LITERAL_NAMES, ExprParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExprParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Expr.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExprParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExprParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExprParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ExprParser.RULE_expression);
		try {
			this.state = 12;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExprParser.VAR:
			case ExprParser.LET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 10;
				this.assignment();
				}
				break;
			case ExprParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.simpleExpression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ExprParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			_la = this._input.LA(1);
			if (!(_la === ExprParser.VAR || _la === ExprParser.LET)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 15;
			this.match(ExprParser.ID);
			this.state = 16;
			this.match(ExprParser.EQUAL);
			this.state = 17;
			this.simpleExpression(0);
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

	public simpleExpression(): SimpleExpressionContext;
	public simpleExpression(_p: number): SimpleExpressionContext;
	// @RuleVersion(0)
	public simpleExpression(_p?: number): SimpleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SimpleExpressionContext = new SimpleExpressionContext(this._ctx, _parentState);
		let _prevctx: SimpleExpressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, ExprParser.RULE_simpleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 20;
				this.variableRef();
				}
				break;

			case 2:
				{
				this.state = 21;
				this.functionRef();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 32;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 30;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new SimpleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_simpleExpression);
						this.state = 24;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 25;
						_la = this._input.LA(1);
						if (!(_la === ExprParser.PLUS || _la === ExprParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 26;
						this.simpleExpression(5);
						}
						break;

					case 2:
						{
						_localctx = new SimpleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_simpleExpression);
						this.state = 27;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 28;
						_la = this._input.LA(1);
						if (!(_la === ExprParser.MULTIPLY || _la === ExprParser.DIVIDE)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 29;
						this.simpleExpression(4);
						}
						break;
					}
					}
				}
				this.state = 34;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableRef(): VariableRefContext {
		let _localctx: VariableRefContext = new VariableRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ExprParser.RULE_variableRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(ExprParser.ID);
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
	public functionRef(): FunctionRefContext {
		let _localctx: FunctionRefContext = new FunctionRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ExprParser.RULE_functionRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.match(ExprParser.ID);
			this.state = 38;
			this.match(ExprParser.OPEN_PAR);
			this.state = 39;
			this.match(ExprParser.CLOSE_PAR);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.simpleExpression_sempred(_localctx as SimpleExpressionContext, predIndex);
		}
		return true;
	}
	private simpleExpression_sempred(_localctx: SimpleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r,\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03" +
		"\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\x19\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04!\n\x04\f\x04\x0E\x04$\v\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x02\x02\x03\x06\x07\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\x02\x05\x03\x02\x03\x04\x03\x02\x05\x06\x03\x02\x07\b" +
		"\x02*\x02\x0E\x03\x02\x02\x02\x04\x10\x03\x02\x02\x02\x06\x18\x03\x02" +
		"\x02\x02\b%\x03\x02\x02\x02\n\'\x03\x02\x02\x02\f\x0F\x05\x04\x03\x02" +
		"\r\x0F\x05\x06\x04\x02\x0E\f\x03\x02\x02\x02\x0E\r\x03\x02\x02\x02\x0F" +
		"\x03\x03\x02\x02\x02\x10\x11\t\x02\x02\x02\x11\x12\x07\f\x02\x02\x12\x13" +
		"\x07\t\x02\x02\x13\x14\x05\x06\x04\x02\x14\x05\x03\x02\x02\x02\x15\x16" +
		"\b\x04\x01\x02\x16\x19\x05\b\x05\x02\x17\x19\x05\n\x06\x02\x18\x15\x03" +
		"\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\"\x03\x02\x02\x02\x1A\x1B\f\x06" +
		"\x02\x02\x1B\x1C\t\x03\x02\x02\x1C!\x05\x06\x04\x07\x1D\x1E\f\x05\x02" +
		"\x02\x1E\x1F\t\x04\x02\x02\x1F!\x05\x06\x04\x06 \x1A\x03\x02\x02\x02 " +
		"\x1D\x03\x02\x02\x02!$\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02" +
		"\x02#\x07\x03\x02\x02\x02$\"\x03\x02\x02\x02%&\x07\f\x02\x02&\t\x03\x02" +
		"\x02\x02\'(\x07\f\x02\x02()\x07\n\x02\x02)*\x07\v\x02\x02*\v\x03\x02\x02" +
		"\x02\x06\x0E\x18 \"";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprParser.__ATN) {
			ExprParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExprParser._serializedATN));
		}

		return ExprParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public simpleExpression(): SimpleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SimpleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_expression; }
}


export class AssignmentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ExprParser.ID, 0); }
	public EQUAL(): TerminalNode { return this.getToken(ExprParser.EQUAL, 0); }
	public simpleExpression(): SimpleExpressionContext {
		return this.getRuleContext(0, SimpleExpressionContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(ExprParser.VAR, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(ExprParser.LET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_assignment; }
}


export class SimpleExpressionContext extends ParserRuleContext {
	public simpleExpression(): SimpleExpressionContext[];
	public simpleExpression(i: number): SimpleExpressionContext;
	public simpleExpression(i?: number): SimpleExpressionContext | SimpleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleExpressionContext);
		} else {
			return this.getRuleContext(i, SimpleExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ExprParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ExprParser.MINUS, 0); }
	public MULTIPLY(): TerminalNode | undefined { return this.tryGetToken(ExprParser.MULTIPLY, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(ExprParser.DIVIDE, 0); }
	public variableRef(): VariableRefContext | undefined {
		return this.tryGetRuleContext(0, VariableRefContext);
	}
	public functionRef(): FunctionRefContext | undefined {
		return this.tryGetRuleContext(0, FunctionRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_simpleExpression; }
}


export class VariableRefContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ExprParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_variableRef; }
}


export class FunctionRefContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ExprParser.ID, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(ExprParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(ExprParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExprParser.RULE_functionRef; }
}


