// Generated from test/Expr.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ExprLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL", "OPEN_PAR", 
		"CLOSE_PAR", "ID", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", "'='", "'('", 
		"')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL", 
		"OPEN_PAR", "CLOSE_PAR", "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExprLexer._LITERAL_NAMES, ExprLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExprLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ExprLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Expr.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExprLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExprLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ExprLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ExprLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r:\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03" +
		"\n\x03\n\x03\v\x03\v\x07\v2\n\v\f\v\x0E\v5\v\v\x03\f\x03\f\x03\f\x03\f" +
		"\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x03\x02\v\x04" +
		"\x02XXxx\x04\x02CCcc\x04\x02TTtt\x04\x02NNnn\x04\x02GGgg\x04\x02VVvv\x04" +
		"\x02C\\c|\x06\x022;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02:\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1D\x03\x02\x02" +
		"\x02\x07!\x03\x02\x02\x02\t#\x03\x02\x02\x02\v%\x03\x02\x02\x02\r\'\x03" +
		"\x02\x02\x02\x0F)\x03\x02\x02\x02\x11+\x03\x02\x02\x02\x13-\x03\x02\x02" +
		"\x02\x15/\x03\x02\x02\x02\x176\x03\x02\x02\x02\x19\x1A\t\x02\x02\x02\x1A" +
		"\x1B\t\x03\x02\x02\x1B\x1C\t\x04\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E" +
		"\t\x05\x02\x02\x1E\x1F\t\x06\x02\x02\x1F \t\x07\x02\x02 \x06\x03\x02\x02" +
		"\x02!\"\x07-\x02\x02\"\b\x03\x02\x02\x02#$\x07/\x02\x02$\n\x03\x02\x02" +
		"\x02%&\x07,\x02\x02&\f\x03\x02\x02\x02\'(\x071\x02\x02(\x0E\x03\x02\x02" +
		"\x02)*\x07?\x02\x02*\x10\x03\x02\x02\x02+,\x07*\x02\x02,\x12\x03\x02\x02" +
		"\x02-.\x07+\x02\x02.\x14\x03\x02\x02\x02/3\t\b\x02\x0202\t\t\x02\x021" +
		"0\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x02" +
		"4\x16\x03\x02\x02\x0253\x03\x02\x02\x0267\t\n\x02\x0278\x03\x02\x02\x02" +
		"89\b\f\x02\x029\x18\x03\x02\x02\x02\x04\x023\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprLexer.__ATN) {
			ExprLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExprLexer._serializedATN));
		}

		return ExprLexer.__ATN;
	}

}

