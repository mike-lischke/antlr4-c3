// Generated from tests/Whitebox.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class WhiteboxLexer extends Lexer {
	public static readonly LOREM = 1;
	public static readonly IPSUM = 2;
	public static readonly DOLOR = 3;
	public static readonly SIT = 4;
	public static readonly AMET = 5;
	public static readonly CONSECTETUR = 6;
	public static readonly ADIPISCING = 7;
	public static readonly WS = 8;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSECTETUR", "ADIPISCING", 
		"WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'LOREM'", "'IPSUM'", "'DOLOR'", "'SIT'", "'AMET'", "'CONSECTETUR'", 
		"'ADIPISCING'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSECTETUR", "ADIPISCING", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WhiteboxLexer._LITERAL_NAMES, WhiteboxLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WhiteboxLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(WhiteboxLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Whitebox.g4"; }

	// @Override
	public get ruleNames(): string[] { return WhiteboxLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return WhiteboxLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return WhiteboxLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return WhiteboxLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\nI\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x02\x02\x02\n\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02H" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x03\x13\x03\x02\x02\x02\x05" +
		"\x19\x03\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t%\x03\x02\x02\x02\v)\x03" +
		"\x02\x02\x02\r.\x03\x02\x02\x02\x0F:\x03\x02\x02\x02\x11E\x03\x02\x02" +
		"\x02\x13\x14\x07N\x02\x02\x14\x15\x07Q\x02\x02\x15\x16\x07T\x02\x02\x16" +
		"\x17\x07G\x02\x02\x17\x18\x07O\x02\x02\x18\x04\x03\x02\x02\x02\x19\x1A" +
		"\x07K\x02\x02\x1A\x1B\x07R\x02\x02\x1B\x1C\x07U\x02\x02\x1C\x1D\x07W\x02" +
		"\x02\x1D\x1E\x07O\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \x07F\x02\x02 !" +
		"\x07Q\x02\x02!\"\x07N\x02\x02\"#\x07Q\x02\x02#$\x07T\x02\x02$\b\x03\x02" +
		"\x02\x02%&\x07U\x02\x02&\'\x07K\x02\x02\'(\x07V\x02\x02(\n\x03\x02\x02" +
		"\x02)*\x07C\x02\x02*+\x07O\x02\x02+,\x07G\x02\x02,-\x07V\x02\x02-\f\x03" +
		"\x02\x02\x02./\x07E\x02\x02/0\x07Q\x02\x0201\x07P\x02\x0212\x07U\x02\x02" +
		"23\x07G\x02\x0234\x07E\x02\x0245\x07V\x02\x0256\x07G\x02\x0267\x07V\x02" +
		"\x0278\x07W\x02\x0289\x07T\x02\x029\x0E\x03\x02\x02\x02:;\x07C\x02\x02" +
		";<\x07F\x02\x02<=\x07K\x02\x02=>\x07R\x02\x02>?\x07K\x02\x02?@\x07U\x02" +
		"\x02@A\x07E\x02\x02AB\x07K\x02\x02BC\x07P\x02\x02CD\x07I\x02\x02D\x10" +
		"\x03\x02\x02\x02EF\t\x02\x02\x02FG\x03\x02\x02\x02GH\b\t\x02\x02H\x12" +
		"\x03\x02\x02\x02\x03\x02\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WhiteboxLexer.__ATN) {
			WhiteboxLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WhiteboxLexer._serializedATN));
		}

		return WhiteboxLexer.__ATN;
	}

}

