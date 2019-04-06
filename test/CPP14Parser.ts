// Generated from test/CPP14.g4 by ANTLR 4.7.3-SNAPSHOT


	import { InputMismatchException } from 'antlr4ts/InputMismatchException';


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


export class CPP14Parser extends Parser {
	public static readonly MultiLineMacro = 1;
	public static readonly Directive = 2;
	public static readonly Alignas = 3;
	public static readonly Alignof = 4;
	public static readonly Asm = 5;
	public static readonly Auto = 6;
	public static readonly Bool = 7;
	public static readonly Break = 8;
	public static readonly Case = 9;
	public static readonly Catch = 10;
	public static readonly Char = 11;
	public static readonly Char16 = 12;
	public static readonly Char32 = 13;
	public static readonly Class = 14;
	public static readonly Const = 15;
	public static readonly Constexpr = 16;
	public static readonly Const_cast = 17;
	public static readonly Continue = 18;
	public static readonly Decltype = 19;
	public static readonly Default = 20;
	public static readonly Delete = 21;
	public static readonly Do = 22;
	public static readonly Double = 23;
	public static readonly Dynamic_cast = 24;
	public static readonly Else = 25;
	public static readonly Enum = 26;
	public static readonly Explicit = 27;
	public static readonly Export = 28;
	public static readonly Extern = 29;
	public static readonly False = 30;
	public static readonly Final = 31;
	public static readonly Float = 32;
	public static readonly For = 33;
	public static readonly Friend = 34;
	public static readonly Goto = 35;
	public static readonly If = 36;
	public static readonly Inline = 37;
	public static readonly Int = 38;
	public static readonly Long = 39;
	public static readonly Mutable = 40;
	public static readonly Namespace = 41;
	public static readonly New = 42;
	public static readonly Noexcept = 43;
	public static readonly Nullptr = 44;
	public static readonly Operator = 45;
	public static readonly Override = 46;
	public static readonly Private = 47;
	public static readonly Protected = 48;
	public static readonly Public = 49;
	public static readonly Register = 50;
	public static readonly Reinterpret_cast = 51;
	public static readonly Return = 52;
	public static readonly Short = 53;
	public static readonly Signed = 54;
	public static readonly Sizeof = 55;
	public static readonly Static = 56;
	public static readonly Static_assert = 57;
	public static readonly Static_cast = 58;
	public static readonly Struct = 59;
	public static readonly Switch = 60;
	public static readonly Template = 61;
	public static readonly This = 62;
	public static readonly Thread_local = 63;
	public static readonly Throw = 64;
	public static readonly True = 65;
	public static readonly Try = 66;
	public static readonly Typedef = 67;
	public static readonly Typeid = 68;
	public static readonly Typename = 69;
	public static readonly Union = 70;
	public static readonly Unsigned = 71;
	public static readonly Using = 72;
	public static readonly Virtual = 73;
	public static readonly Void = 74;
	public static readonly Volatile = 75;
	public static readonly Wchar = 76;
	public static readonly While = 77;
	public static readonly LeftParen = 78;
	public static readonly RightParen = 79;
	public static readonly LeftBracket = 80;
	public static readonly RightBracket = 81;
	public static readonly LeftBrace = 82;
	public static readonly RightBrace = 83;
	public static readonly Plus = 84;
	public static readonly Minus = 85;
	public static readonly Star = 86;
	public static readonly Div = 87;
	public static readonly Mod = 88;
	public static readonly Caret = 89;
	public static readonly And = 90;
	public static readonly Or = 91;
	public static readonly Tilde = 92;
	public static readonly Not = 93;
	public static readonly Assign = 94;
	public static readonly Less = 95;
	public static readonly Greater = 96;
	public static readonly PlusAssign = 97;
	public static readonly MinusAssign = 98;
	public static readonly StarAssign = 99;
	public static readonly DivAssign = 100;
	public static readonly ModAssign = 101;
	public static readonly XorAssign = 102;
	public static readonly AndAssign = 103;
	public static readonly OrAssign = 104;
	public static readonly LeftShift = 105;
	public static readonly LeftShiftAssign = 106;
	public static readonly Equal = 107;
	public static readonly NotEqual = 108;
	public static readonly LessEqual = 109;
	public static readonly GreaterEqual = 110;
	public static readonly AndAnd = 111;
	public static readonly OrOr = 112;
	public static readonly PlusPlus = 113;
	public static readonly MinusMinus = 114;
	public static readonly Comma = 115;
	public static readonly ArrowStar = 116;
	public static readonly Arrow = 117;
	public static readonly Question = 118;
	public static readonly Colon = 119;
	public static readonly Doublecolon = 120;
	public static readonly Semi = 121;
	public static readonly Dot = 122;
	public static readonly DotStar = 123;
	public static readonly Ellipsis = 124;
	public static readonly Identifier = 125;
	public static readonly Integerliteral = 126;
	public static readonly Decimalliteral = 127;
	public static readonly Octalliteral = 128;
	public static readonly Hexadecimalliteral = 129;
	public static readonly Binaryliteral = 130;
	public static readonly Integersuffix = 131;
	public static readonly Characterliteral = 132;
	public static readonly Floatingliteral = 133;
	public static readonly Stringliteral = 134;
	public static readonly Userdefinedintegerliteral = 135;
	public static readonly Userdefinedfloatingliteral = 136;
	public static readonly Userdefinedstringliteral = 137;
	public static readonly Userdefinedcharacterliteral = 138;
	public static readonly Whitespace = 139;
	public static readonly Newline = 140;
	public static readonly BlockComment = 141;
	public static readonly LineComment = 142;
	public static readonly RULE_translationunit = 0;
	public static readonly RULE_primaryexpression = 1;
	public static readonly RULE_idexpression = 2;
	public static readonly RULE_unqualifiedid = 3;
	public static readonly RULE_qualifiedid = 4;
	public static readonly RULE_nestednamespecifier = 5;
	public static readonly RULE_lambdaexpression = 6;
	public static readonly RULE_lambdaintroducer = 7;
	public static readonly RULE_lambdacapture = 8;
	public static readonly RULE_capturedefault = 9;
	public static readonly RULE_capturelist = 10;
	public static readonly RULE_capture = 11;
	public static readonly RULE_simplecapture = 12;
	public static readonly RULE_initcapture = 13;
	public static readonly RULE_lambdadeclarator = 14;
	public static readonly RULE_postfixexpression = 15;
	public static readonly RULE_expressionlist = 16;
	public static readonly RULE_pseudodestructorname = 17;
	public static readonly RULE_unaryexpression = 18;
	public static readonly RULE_unaryoperator = 19;
	public static readonly RULE_newexpression = 20;
	public static readonly RULE_newplacement = 21;
	public static readonly RULE_newtypeid = 22;
	public static readonly RULE_newdeclarator = 23;
	public static readonly RULE_noptrnewdeclarator = 24;
	public static readonly RULE_newinitializer = 25;
	public static readonly RULE_deleteexpression = 26;
	public static readonly RULE_noexceptexpression = 27;
	public static readonly RULE_castexpression = 28;
	public static readonly RULE_pmexpression = 29;
	public static readonly RULE_multiplicativeexpression = 30;
	public static readonly RULE_additiveexpression = 31;
	public static readonly RULE_shiftexpression = 32;
	public static readonly RULE_relationalexpression = 33;
	public static readonly RULE_equalityexpression = 34;
	public static readonly RULE_andexpression = 35;
	public static readonly RULE_exclusiveorexpression = 36;
	public static readonly RULE_inclusiveorexpression = 37;
	public static readonly RULE_logicalandexpression = 38;
	public static readonly RULE_logicalorexpression = 39;
	public static readonly RULE_conditionalexpression = 40;
	public static readonly RULE_assignmentexpression = 41;
	public static readonly RULE_assignmentoperator = 42;
	public static readonly RULE_expression = 43;
	public static readonly RULE_constantexpression = 44;
	public static readonly RULE_statement = 45;
	public static readonly RULE_labeledstatement = 46;
	public static readonly RULE_expressionstatement = 47;
	public static readonly RULE_compoundstatement = 48;
	public static readonly RULE_statementseq = 49;
	public static readonly RULE_selectionstatement = 50;
	public static readonly RULE_condition = 51;
	public static readonly RULE_iterationstatement = 52;
	public static readonly RULE_forinitstatement = 53;
	public static readonly RULE_forrangedeclaration = 54;
	public static readonly RULE_forrangeinitializer = 55;
	public static readonly RULE_jumpstatement = 56;
	public static readonly RULE_declarationstatement = 57;
	public static readonly RULE_declarationseq = 58;
	public static readonly RULE_declaration = 59;
	public static readonly RULE_blockdeclaration = 60;
	public static readonly RULE_aliasdeclaration = 61;
	public static readonly RULE_simpledeclaration = 62;
	public static readonly RULE_static_assertdeclaration = 63;
	public static readonly RULE_emptydeclaration = 64;
	public static readonly RULE_attributedeclaration = 65;
	public static readonly RULE_declspecifier = 66;
	public static readonly RULE_declspecifierseq = 67;
	public static readonly RULE_storageclassspecifier = 68;
	public static readonly RULE_functionspecifier = 69;
	public static readonly RULE_typedefname = 70;
	public static readonly RULE_typespecifier = 71;
	public static readonly RULE_trailingtypespecifier = 72;
	public static readonly RULE_typespecifierseq = 73;
	public static readonly RULE_trailingtypespecifierseq = 74;
	public static readonly RULE_simpletypespecifier = 75;
	public static readonly RULE_typename = 76;
	public static readonly RULE_decltypespecifier = 77;
	public static readonly RULE_elaboratedtypespecifier = 78;
	public static readonly RULE_enumname = 79;
	public static readonly RULE_enumspecifier = 80;
	public static readonly RULE_enumhead = 81;
	public static readonly RULE_opaqueenumdeclaration = 82;
	public static readonly RULE_enumkey = 83;
	public static readonly RULE_enumbase = 84;
	public static readonly RULE_enumeratorlist = 85;
	public static readonly RULE_enumeratordefinition = 86;
	public static readonly RULE_enumerator = 87;
	public static readonly RULE_namespacename = 88;
	public static readonly RULE_originalnamespacename = 89;
	public static readonly RULE_namespacedefinition = 90;
	public static readonly RULE_namednamespacedefinition = 91;
	public static readonly RULE_originalnamespacedefinition = 92;
	public static readonly RULE_extensionnamespacedefinition = 93;
	public static readonly RULE_unnamednamespacedefinition = 94;
	public static readonly RULE_namespacebody = 95;
	public static readonly RULE_namespacealias = 96;
	public static readonly RULE_namespacealiasdefinition = 97;
	public static readonly RULE_qualifiednamespacespecifier = 98;
	public static readonly RULE_usingdeclaration = 99;
	public static readonly RULE_usingdirective = 100;
	public static readonly RULE_asmdefinition = 101;
	public static readonly RULE_linkagespecification = 102;
	public static readonly RULE_attributespecifierseq = 103;
	public static readonly RULE_attributespecifier = 104;
	public static readonly RULE_alignmentspecifier = 105;
	public static readonly RULE_attributelist = 106;
	public static readonly RULE_attribute = 107;
	public static readonly RULE_attributetoken = 108;
	public static readonly RULE_attributescopedtoken = 109;
	public static readonly RULE_attributenamespace = 110;
	public static readonly RULE_attributeargumentclause = 111;
	public static readonly RULE_balancedtokenseq = 112;
	public static readonly RULE_balancedtoken = 113;
	public static readonly RULE_initdeclaratorlist = 114;
	public static readonly RULE_initdeclarator = 115;
	public static readonly RULE_declarator = 116;
	public static readonly RULE_ptrdeclarator = 117;
	public static readonly RULE_noptrdeclarator = 118;
	public static readonly RULE_parametersandqualifiers = 119;
	public static readonly RULE_trailingreturntype = 120;
	public static readonly RULE_ptroperator = 121;
	public static readonly RULE_cvqualifierseq = 122;
	public static readonly RULE_cvqualifier = 123;
	public static readonly RULE_refqualifier = 124;
	public static readonly RULE_declaratorid = 125;
	public static readonly RULE_typeid = 126;
	public static readonly RULE_abstractdeclarator = 127;
	public static readonly RULE_ptrabstractdeclarator = 128;
	public static readonly RULE_noptrabstractdeclarator = 129;
	public static readonly RULE_abstractpackdeclarator = 130;
	public static readonly RULE_noptrabstractpackdeclarator = 131;
	public static readonly RULE_parameterdeclarationclause = 132;
	public static readonly RULE_parameterdeclarationlist = 133;
	public static readonly RULE_parameterdeclaration = 134;
	public static readonly RULE_functiondefinition = 135;
	public static readonly RULE_functionbody = 136;
	public static readonly RULE_initializer = 137;
	public static readonly RULE_braceorequalinitializer = 138;
	public static readonly RULE_initializerclause = 139;
	public static readonly RULE_initializerlist = 140;
	public static readonly RULE_bracedinitlist = 141;
	public static readonly RULE_classname = 142;
	public static readonly RULE_classspecifier = 143;
	public static readonly RULE_classhead = 144;
	public static readonly RULE_classheadname = 145;
	public static readonly RULE_classvirtspecifier = 146;
	public static readonly RULE_classkey = 147;
	public static readonly RULE_memberspecification = 148;
	public static readonly RULE_memberdeclaration = 149;
	public static readonly RULE_memberdeclaratorlist = 150;
	public static readonly RULE_memberdeclarator = 151;
	public static readonly RULE_virtspecifierseq = 152;
	public static readonly RULE_virtspecifier = 153;
	public static readonly RULE_purespecifier = 154;
	public static readonly RULE_baseclause = 155;
	public static readonly RULE_basespecifierlist = 156;
	public static readonly RULE_basespecifier = 157;
	public static readonly RULE_classordecltype = 158;
	public static readonly RULE_basetypespecifier = 159;
	public static readonly RULE_accessspecifier = 160;
	public static readonly RULE_conversionfunctionid = 161;
	public static readonly RULE_conversiontypeid = 162;
	public static readonly RULE_conversiondeclarator = 163;
	public static readonly RULE_ctorinitializer = 164;
	public static readonly RULE_meminitializerlist = 165;
	public static readonly RULE_meminitializer = 166;
	public static readonly RULE_meminitializerid = 167;
	public static readonly RULE_operatorfunctionid = 168;
	public static readonly RULE_literaloperatorid = 169;
	public static readonly RULE_templatedeclaration = 170;
	public static readonly RULE_templateparameterlist = 171;
	public static readonly RULE_templateparameter = 172;
	public static readonly RULE_typeparameter = 173;
	public static readonly RULE_simpletemplateid = 174;
	public static readonly RULE_templateid = 175;
	public static readonly RULE_templatename = 176;
	public static readonly RULE_templateargumentlist = 177;
	public static readonly RULE_templateargument = 178;
	public static readonly RULE_typenamespecifier = 179;
	public static readonly RULE_explicitinstantiation = 180;
	public static readonly RULE_explicitspecialization = 181;
	public static readonly RULE_tryblock = 182;
	public static readonly RULE_functiontryblock = 183;
	public static readonly RULE_handlerseq = 184;
	public static readonly RULE_handler = 185;
	public static readonly RULE_exceptiondeclaration = 186;
	public static readonly RULE_throwexpression = 187;
	public static readonly RULE_exceptionspecification = 188;
	public static readonly RULE_dynamicexceptionspecification = 189;
	public static readonly RULE_typeidlist = 190;
	public static readonly RULE_noexceptspecification = 191;
	public static readonly RULE_rightShift = 192;
	public static readonly RULE_rightShiftAssign = 193;
	public static readonly RULE_operator = 194;
	public static readonly RULE_literal = 195;
	public static readonly RULE_booleanliteral = 196;
	public static readonly RULE_pointerliteral = 197;
	public static readonly RULE_userdefinedliteral = 198;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"translationunit", "primaryexpression", "idexpression", "unqualifiedid", 
		"qualifiedid", "nestednamespecifier", "lambdaexpression", "lambdaintroducer", 
		"lambdacapture", "capturedefault", "capturelist", "capture", "simplecapture", 
		"initcapture", "lambdadeclarator", "postfixexpression", "expressionlist", 
		"pseudodestructorname", "unaryexpression", "unaryoperator", "newexpression", 
		"newplacement", "newtypeid", "newdeclarator", "noptrnewdeclarator", "newinitializer", 
		"deleteexpression", "noexceptexpression", "castexpression", "pmexpression", 
		"multiplicativeexpression", "additiveexpression", "shiftexpression", "relationalexpression", 
		"equalityexpression", "andexpression", "exclusiveorexpression", "inclusiveorexpression", 
		"logicalandexpression", "logicalorexpression", "conditionalexpression", 
		"assignmentexpression", "assignmentoperator", "expression", "constantexpression", 
		"statement", "labeledstatement", "expressionstatement", "compoundstatement", 
		"statementseq", "selectionstatement", "condition", "iterationstatement", 
		"forinitstatement", "forrangedeclaration", "forrangeinitializer", "jumpstatement", 
		"declarationstatement", "declarationseq", "declaration", "blockdeclaration", 
		"aliasdeclaration", "simpledeclaration", "static_assertdeclaration", "emptydeclaration", 
		"attributedeclaration", "declspecifier", "declspecifierseq", "storageclassspecifier", 
		"functionspecifier", "typedefname", "typespecifier", "trailingtypespecifier", 
		"typespecifierseq", "trailingtypespecifierseq", "simpletypespecifier", 
		"typename", "decltypespecifier", "elaboratedtypespecifier", "enumname", 
		"enumspecifier", "enumhead", "opaqueenumdeclaration", "enumkey", "enumbase", 
		"enumeratorlist", "enumeratordefinition", "enumerator", "namespacename", 
		"originalnamespacename", "namespacedefinition", "namednamespacedefinition", 
		"originalnamespacedefinition", "extensionnamespacedefinition", "unnamednamespacedefinition", 
		"namespacebody", "namespacealias", "namespacealiasdefinition", "qualifiednamespacespecifier", 
		"usingdeclaration", "usingdirective", "asmdefinition", "linkagespecification", 
		"attributespecifierseq", "attributespecifier", "alignmentspecifier", "attributelist", 
		"attribute", "attributetoken", "attributescopedtoken", "attributenamespace", 
		"attributeargumentclause", "balancedtokenseq", "balancedtoken", "initdeclaratorlist", 
		"initdeclarator", "declarator", "ptrdeclarator", "noptrdeclarator", "parametersandqualifiers", 
		"trailingreturntype", "ptroperator", "cvqualifierseq", "cvqualifier", 
		"refqualifier", "declaratorid", "typeid", "abstractdeclarator", "ptrabstractdeclarator", 
		"noptrabstractdeclarator", "abstractpackdeclarator", "noptrabstractpackdeclarator", 
		"parameterdeclarationclause", "parameterdeclarationlist", "parameterdeclaration", 
		"functiondefinition", "functionbody", "initializer", "braceorequalinitializer", 
		"initializerclause", "initializerlist", "bracedinitlist", "classname", 
		"classspecifier", "classhead", "classheadname", "classvirtspecifier", 
		"classkey", "memberspecification", "memberdeclaration", "memberdeclaratorlist", 
		"memberdeclarator", "virtspecifierseq", "virtspecifier", "purespecifier", 
		"baseclause", "basespecifierlist", "basespecifier", "classordecltype", 
		"basetypespecifier", "accessspecifier", "conversionfunctionid", "conversiontypeid", 
		"conversiondeclarator", "ctorinitializer", "meminitializerlist", "meminitializer", 
		"meminitializerid", "operatorfunctionid", "literaloperatorid", "templatedeclaration", 
		"templateparameterlist", "templateparameter", "typeparameter", "simpletemplateid", 
		"templateid", "templatename", "templateargumentlist", "templateargument", 
		"typenamespecifier", "explicitinstantiation", "explicitspecialization", 
		"tryblock", "functiontryblock", "handlerseq", "handler", "exceptiondeclaration", 
		"throwexpression", "exceptionspecification", "dynamicexceptionspecification", 
		"typeidlist", "noexceptspecification", "rightShift", "rightShiftAssign", 
		"operator", "literal", "booleanliteral", "pointerliteral", "userdefinedliteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'alignas'", "'alignof'", "'asm'", "'auto'", 
		"'bool'", "'break'", "'case'", "'catch'", "'char'", "'char16_t'", "'char32_t'", 
		"'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'", "'decltype'", 
		"'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'", "'else'", 
		"'enum'", "'explicit'", "'export'", "'extern'", "'false'", "'final'", 
		"'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'", "'int'", 
		"'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'", "'nullptr'", 
		"'operator'", "'override'", "'private'", "'protected'", "'public'", "'register'", 
		"'reinterpret_cast'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'static_assert'", "'static_cast'", "'struct'", "'switch'", "'template'", 
		"'this'", "'thread_local'", "'throw'", "'true'", "'try'", "'typedef'", 
		"'typeid'", "'typename'", "'union'", "'unsigned'", "'using'", "'virtual'", 
		"'void'", "'volatile'", "'wchar_t'", "'while'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", 
		"'~'", "'!'", "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", "'%='", 
		"'^='", "'&='", "'|='", "'<<'", "'<<='", "'=='", "'!='", "'<='", "'>='", 
		"'&&'", "'||'", "'++'", "'--'", "','", "'->*'", "'->'", "'?'", "':'", 
		"'::'", "';'", "'.'", "'.*'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineMacro", "Directive", "Alignas", "Alignof", "Asm", 
		"Auto", "Bool", "Break", "Case", "Catch", "Char", "Char16", "Char32", 
		"Class", "Const", "Constexpr", "Const_cast", "Continue", "Decltype", "Default", 
		"Delete", "Do", "Double", "Dynamic_cast", "Else", "Enum", "Explicit", 
		"Export", "Extern", "False", "Final", "Float", "For", "Friend", "Goto", 
		"If", "Inline", "Int", "Long", "Mutable", "Namespace", "New", "Noexcept", 
		"Nullptr", "Operator", "Override", "Private", "Protected", "Public", "Register", 
		"Reinterpret_cast", "Return", "Short", "Signed", "Sizeof", "Static", "Static_assert", 
		"Static_cast", "Struct", "Switch", "Template", "This", "Thread_local", 
		"Throw", "True", "Try", "Typedef", "Typeid", "Typename", "Union", "Unsigned", 
		"Using", "Virtual", "Void", "Volatile", "Wchar", "While", "LeftParen", 
		"RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
		"Plus", "Minus", "Star", "Div", "Mod", "Caret", "And", "Or", "Tilde", 
		"Not", "Assign", "Less", "Greater", "PlusAssign", "MinusAssign", "StarAssign", 
		"DivAssign", "ModAssign", "XorAssign", "AndAssign", "OrAssign", "LeftShift", 
		"LeftShiftAssign", "Equal", "NotEqual", "LessEqual", "GreaterEqual", "AndAnd", 
		"OrOr", "PlusPlus", "MinusMinus", "Comma", "ArrowStar", "Arrow", "Question", 
		"Colon", "Doublecolon", "Semi", "Dot", "DotStar", "Ellipsis", "Identifier", 
		"Integerliteral", "Decimalliteral", "Octalliteral", "Hexadecimalliteral", 
		"Binaryliteral", "Integersuffix", "Characterliteral", "Floatingliteral", 
		"Stringliteral", "Userdefinedintegerliteral", "Userdefinedfloatingliteral", 
		"Userdefinedstringliteral", "Userdefinedcharacterliteral", "Whitespace", 
		"Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CPP14Parser._LITERAL_NAMES, CPP14Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CPP14Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CPP14.g4"; }

	// @Override
	public get ruleNames(): string[] { return CPP14Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CPP14Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CPP14Parser._ATN, this);
	}
	// @RuleVersion(0)
	public translationunit(): TranslationunitContext {
		let _localctx: TranslationunitContext = new TranslationunitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CPP14Parser.RULE_translationunit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
				{
				this.state = 398;
				this.declarationseq(0);
				}
			}

			this.state = 401;
			this.match(CPP14Parser.EOF);
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
	public primaryexpression(): PrimaryexpressionContext {
		let _localctx: PrimaryexpressionContext = new PrimaryexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CPP14Parser.RULE_primaryexpression);
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.False:
			case CPP14Parser.Nullptr:
			case CPP14Parser.True:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this.literal();
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 404;
				this.match(CPP14Parser.This);
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 405;
				this.match(CPP14Parser.LeftParen);
				this.state = 406;
				this.expression(0);
				this.state = 407;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 409;
				this.idexpression();
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 410;
				this.lambdaexpression();
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
	public idexpression(): IdexpressionContext {
		let _localctx: IdexpressionContext = new IdexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CPP14Parser.RULE_idexpression);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 413;
				this.unqualifiedid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 414;
				this.qualifiedid();
				}
				break;
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
	public unqualifiedid(): UnqualifiedidContext {
		let _localctx: UnqualifiedidContext = new UnqualifiedidContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CPP14Parser.RULE_unqualifiedid);
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 418;
				this.operatorfunctionid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 419;
				this.conversionfunctionid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 420;
				this.literaloperatorid();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 421;
				this.match(CPP14Parser.Tilde);
				this.state = 422;
				this.classname();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 423;
				this.match(CPP14Parser.Tilde);
				this.state = 424;
				this.decltypespecifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 425;
				this.templateid();
				}
				break;
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
	public qualifiedid(): QualifiedidContext {
		let _localctx: QualifiedidContext = new QualifiedidContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CPP14Parser.RULE_qualifiedid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.nestednamespecifier(0);
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Template) {
				{
				this.state = 429;
				this.match(CPP14Parser.Template);
				}
			}

			this.state = 432;
			this.unqualifiedid();
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

	public nestednamespecifier(): NestednamespecifierContext;
	public nestednamespecifier(_p: number): NestednamespecifierContext;
	// @RuleVersion(0)
	public nestednamespecifier(_p?: number): NestednamespecifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NestednamespecifierContext = new NestednamespecifierContext(this._ctx, _parentState);
		let _prevctx: NestednamespecifierContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, CPP14Parser.RULE_nestednamespecifier, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 435;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 2:
				{
				this.state = 436;
				this.typename();
				this.state = 437;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 3:
				{
				this.state = 439;
				this.namespacename();
				this.state = 440;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 4:
				{
				this.state = 442;
				this.decltypespecifier();
				this.state = 443;
				this.match(CPP14Parser.Doublecolon);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 459;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 457;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new NestednamespecifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
						this.state = 447;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 448;
						this.match(CPP14Parser.Identifier);
						this.state = 449;
						this.match(CPP14Parser.Doublecolon);
						}
						break;

					case 2:
						{
						_localctx = new NestednamespecifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
						this.state = 450;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 452;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPP14Parser.Template) {
							{
							this.state = 451;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 454;
						this.simpletemplateid();
						this.state = 455;
						this.match(CPP14Parser.Doublecolon);
						}
						break;
					}
					}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
	public lambdaexpression(): LambdaexpressionContext {
		let _localctx: LambdaexpressionContext = new LambdaexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CPP14Parser.RULE_lambdaexpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.lambdaintroducer();
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.LeftParen) {
				{
				this.state = 463;
				this.lambdadeclarator();
				}
			}

			this.state = 466;
			this.compoundstatement();
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
	public lambdaintroducer(): LambdaintroducerContext {
		let _localctx: LambdaintroducerContext = new LambdaintroducerContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CPP14Parser.RULE_lambdaintroducer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(CPP14Parser.LeftBracket);
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.This || _la === CPP14Parser.And || _la === CPP14Parser.Assign || _la === CPP14Parser.Identifier) {
				{
				this.state = 469;
				this.lambdacapture();
				}
			}

			this.state = 472;
			this.match(CPP14Parser.RightBracket);
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
	public lambdacapture(): LambdacaptureContext {
		let _localctx: LambdacaptureContext = new LambdacaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CPP14Parser.RULE_lambdacapture);
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 474;
				this.capturedefault();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 475;
				this.capturelist(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 476;
				this.capturedefault();
				this.state = 477;
				this.match(CPP14Parser.Comma);
				this.state = 478;
				this.capturelist(0);
				}
				break;
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
	public capturedefault(): CapturedefaultContext {
		let _localctx: CapturedefaultContext = new CapturedefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CPP14Parser.RULE_capturedefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.And || _la === CPP14Parser.Assign)) {
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

	public capturelist(): CapturelistContext;
	public capturelist(_p: number): CapturelistContext;
	// @RuleVersion(0)
	public capturelist(_p?: number): CapturelistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CapturelistContext = new CapturelistContext(this._ctx, _parentState);
		let _prevctx: CapturelistContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, CPP14Parser.RULE_capturelist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 485;
			this.capture();
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 486;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 497;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CapturelistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_capturelist);
					this.state = 489;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 490;
					this.match(CPP14Parser.Comma);
					this.state = 491;
					this.capture();
					this.state = 493;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						this.state = 492;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 499;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
	public capture(): CaptureContext {
		let _localctx: CaptureContext = new CaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CPP14Parser.RULE_capture);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this.simplecapture();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.initcapture();
				}
				break;
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
	public simplecapture(): SimplecaptureContext {
		let _localctx: SimplecaptureContext = new SimplecaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CPP14Parser.RULE_simplecapture);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 504;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.match(CPP14Parser.And);
				this.state = 506;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 507;
				this.match(CPP14Parser.This);
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
	public initcapture(): InitcaptureContext {
		let _localctx: InitcaptureContext = new InitcaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CPP14Parser.RULE_initcapture);
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 510;
				this.match(CPP14Parser.Identifier);
				this.state = 511;
				this.initializer();
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 512;
				this.match(CPP14Parser.And);
				this.state = 513;
				this.match(CPP14Parser.Identifier);
				this.state = 514;
				this.initializer();
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
	public lambdadeclarator(): LambdadeclaratorContext {
		let _localctx: LambdadeclaratorContext = new LambdadeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CPP14Parser.RULE_lambdadeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(CPP14Parser.LeftParen);
			this.state = 518;
			this.parameterdeclarationclause();
			this.state = 519;
			this.match(CPP14Parser.RightParen);
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Mutable) {
				{
				this.state = 520;
				this.match(CPP14Parser.Mutable);
				}
			}

			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Noexcept || _la === CPP14Parser.Throw) {
				{
				this.state = 523;
				this.exceptionspecification();
				}
			}

			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 526;
				this.attributespecifierseq(0);
				}
			}

			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Arrow) {
				{
				this.state = 529;
				this.trailingreturntype();
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

	public postfixexpression(): PostfixexpressionContext;
	public postfixexpression(_p: number): PostfixexpressionContext;
	// @RuleVersion(0)
	public postfixexpression(_p?: number): PostfixexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixexpressionContext = new PostfixexpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixexpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, CPP14Parser.RULE_postfixexpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 533;
				this.primaryexpression();
				}
				break;

			case 2:
				{
				this.state = 534;
				this.simpletypespecifier();
				this.state = 535;
				this.match(CPP14Parser.LeftParen);
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 536;
					this.expressionlist();
					}
				}

				this.state = 539;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 3:
				{
				this.state = 541;
				this.typenamespecifier();
				this.state = 542;
				this.match(CPP14Parser.LeftParen);
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 543;
					this.expressionlist();
					}
				}

				this.state = 546;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 4:
				{
				this.state = 548;
				this.simpletypespecifier();
				this.state = 549;
				this.bracedinitlist();
				}
				break;

			case 5:
				{
				this.state = 551;
				this.typenamespecifier();
				this.state = 552;
				this.bracedinitlist();
				}
				break;

			case 6:
				{
				this.state = 554;
				this.match(CPP14Parser.Dynamic_cast);
				this.state = 555;
				this.match(CPP14Parser.Less);
				this.state = 556;
				this.typeid();
				this.state = 557;
				this.match(CPP14Parser.Greater);
				this.state = 558;
				this.match(CPP14Parser.LeftParen);
				this.state = 559;
				this.expression(0);
				this.state = 560;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 7:
				{
				this.state = 562;
				this.match(CPP14Parser.Static_cast);
				this.state = 563;
				this.match(CPP14Parser.Less);
				this.state = 564;
				this.typeid();
				this.state = 565;
				this.match(CPP14Parser.Greater);
				this.state = 566;
				this.match(CPP14Parser.LeftParen);
				this.state = 567;
				this.expression(0);
				this.state = 568;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 8:
				{
				this.state = 570;
				this.match(CPP14Parser.Reinterpret_cast);
				this.state = 571;
				this.match(CPP14Parser.Less);
				this.state = 572;
				this.typeid();
				this.state = 573;
				this.match(CPP14Parser.Greater);
				this.state = 574;
				this.match(CPP14Parser.LeftParen);
				this.state = 575;
				this.expression(0);
				this.state = 576;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 9:
				{
				this.state = 578;
				this.match(CPP14Parser.Const_cast);
				this.state = 579;
				this.match(CPP14Parser.Less);
				this.state = 580;
				this.typeid();
				this.state = 581;
				this.match(CPP14Parser.Greater);
				this.state = 582;
				this.match(CPP14Parser.LeftParen);
				this.state = 583;
				this.expression(0);
				this.state = 584;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 10:
				{
				this.state = 586;
				this.match(CPP14Parser.Typeid);
				this.state = 587;
				this.match(CPP14Parser.LeftParen);
				this.state = 588;
				this.expression(0);
				this.state = 589;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 11:
				{
				this.state = 591;
				this.match(CPP14Parser.Typeid);
				this.state = 592;
				this.match(CPP14Parser.LeftParen);
				this.state = 593;
				this.typeid();
				this.state = 594;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 638;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 636;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 598;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 599;
						this.match(CPP14Parser.LeftBracket);
						this.state = 600;
						this.expression(0);
						this.state = 601;
						this.match(CPP14Parser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 603;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 604;
						this.match(CPP14Parser.LeftBracket);
						this.state = 605;
						this.bracedinitlist();
						this.state = 606;
						this.match(CPP14Parser.RightBracket);
						}
						break;

					case 3:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 608;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 609;
						this.match(CPP14Parser.LeftParen);
						this.state = 611;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
							{
							this.state = 610;
							this.expressionlist();
							}
						}

						this.state = 613;
						this.match(CPP14Parser.RightParen);
						}
						break;

					case 4:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 614;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 615;
						this.match(CPP14Parser.Dot);
						this.state = 617;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPP14Parser.Template) {
							{
							this.state = 616;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 619;
						this.idexpression();
						}
						break;

					case 5:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 620;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 621;
						this.match(CPP14Parser.Arrow);
						this.state = 623;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPP14Parser.Template) {
							{
							this.state = 622;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 625;
						this.idexpression();
						}
						break;

					case 6:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 626;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 627;
						this.match(CPP14Parser.Dot);
						this.state = 628;
						this.pseudodestructorname();
						}
						break;

					case 7:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 629;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 630;
						this.match(CPP14Parser.Arrow);
						this.state = 631;
						this.pseudodestructorname();
						}
						break;

					case 8:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 632;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 633;
						this.match(CPP14Parser.PlusPlus);
						}
						break;

					case 9:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 634;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 635;
						this.match(CPP14Parser.MinusMinus);
						}
						break;
					}
					}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	public expressionlist(): ExpressionlistContext {
		let _localctx: ExpressionlistContext = new ExpressionlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CPP14Parser.RULE_expressionlist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.initializerlist(0);
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
	public pseudodestructorname(): PseudodestructornameContext {
		let _localctx: PseudodestructornameContext = new PseudodestructornameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CPP14Parser.RULE_pseudodestructorname);
		let _la: number;
		try {
			this.state = 665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 644;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 643;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 646;
				this.typename();
				this.state = 647;
				this.match(CPP14Parser.Doublecolon);
				this.state = 648;
				this.match(CPP14Parser.Tilde);
				this.state = 649;
				this.typename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 651;
				this.nestednamespecifier(0);
				this.state = 652;
				this.match(CPP14Parser.Template);
				this.state = 653;
				this.simpletemplateid();
				this.state = 654;
				this.match(CPP14Parser.Doublecolon);
				this.state = 655;
				this.match(CPP14Parser.Tilde);
				this.state = 656;
				this.typename();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 658;
					this.nestednamespecifier(0);
					}
				}

				this.state = 661;
				this.match(CPP14Parser.Tilde);
				this.state = 662;
				this.typename();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 663;
				this.match(CPP14Parser.Tilde);
				this.state = 664;
				this.decltypespecifier();
				}
				break;
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
	public unaryexpression(): UnaryexpressionContext {
		let _localctx: UnaryexpressionContext = new UnaryexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CPP14Parser.RULE_unaryexpression);
		try {
			this.state = 695;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.postfixexpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 668;
				this.match(CPP14Parser.PlusPlus);
				this.state = 669;
				this.castexpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 670;
				this.match(CPP14Parser.MinusMinus);
				this.state = 671;
				this.castexpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 672;
				this.unaryoperator();
				this.state = 673;
				this.castexpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 675;
				this.match(CPP14Parser.Sizeof);
				this.state = 676;
				this.unaryexpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 677;
				this.match(CPP14Parser.Sizeof);
				this.state = 678;
				this.match(CPP14Parser.LeftParen);
				this.state = 679;
				this.typeid();
				this.state = 680;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 682;
				this.match(CPP14Parser.Sizeof);
				this.state = 683;
				this.match(CPP14Parser.Ellipsis);
				this.state = 684;
				this.match(CPP14Parser.LeftParen);
				this.state = 685;
				this.match(CPP14Parser.Identifier);
				this.state = 686;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 687;
				this.match(CPP14Parser.Alignof);
				this.state = 688;
				this.match(CPP14Parser.LeftParen);
				this.state = 689;
				this.typeid();
				this.state = 690;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 692;
				this.noexceptexpression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 693;
				this.newexpression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 694;
				this.deleteexpression();
				}
				break;
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
	public unaryoperator(): UnaryoperatorContext {
		let _localctx: UnaryoperatorContext = new UnaryoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CPP14Parser.RULE_unaryoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			_la = this._input.LA(1);
			if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CPP14Parser.Plus - 84)) | (1 << (CPP14Parser.Minus - 84)) | (1 << (CPP14Parser.Star - 84)) | (1 << (CPP14Parser.And - 84)) | (1 << (CPP14Parser.Or - 84)) | (1 << (CPP14Parser.Tilde - 84)) | (1 << (CPP14Parser.Not - 84)))) !== 0))) {
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
	public newexpression(): NewexpressionContext {
		let _localctx: NewexpressionContext = new NewexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CPP14Parser.RULE_newexpression);
		let _la: number;
		try {
			this.state = 723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Doublecolon) {
					{
					this.state = 699;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 702;
				this.match(CPP14Parser.New);
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.LeftParen) {
					{
					this.state = 703;
					this.newplacement();
					}
				}

				this.state = 706;
				this.newtypeid();
				this.state = 708;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 707;
					this.newinitializer();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Doublecolon) {
					{
					this.state = 710;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 713;
				this.match(CPP14Parser.New);
				this.state = 715;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 714;
					this.newplacement();
					}
					break;
				}
				this.state = 717;
				this.match(CPP14Parser.LeftParen);
				this.state = 718;
				this.typeid();
				this.state = 719;
				this.match(CPP14Parser.RightParen);
				this.state = 721;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 720;
					this.newinitializer();
					}
					break;
				}
				}
				break;
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
	public newplacement(): NewplacementContext {
		let _localctx: NewplacementContext = new NewplacementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CPP14Parser.RULE_newplacement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.match(CPP14Parser.LeftParen);
			this.state = 726;
			this.expressionlist();
			this.state = 727;
			this.match(CPP14Parser.RightParen);
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
	public newtypeid(): NewtypeidContext {
		let _localctx: NewtypeidContext = new NewtypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CPP14Parser.RULE_newtypeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.typespecifierseq();
			this.state = 731;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 730;
				this.newdeclarator();
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
	public newdeclarator(): NewdeclaratorContext {
		let _localctx: NewdeclaratorContext = new NewdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CPP14Parser.RULE_newdeclarator);
		try {
			this.state = 738;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 733;
				this.ptroperator();
				this.state = 735;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 734;
					this.newdeclarator();
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 737;
				this.noptrnewdeclarator(0);
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

	public noptrnewdeclarator(): NoptrnewdeclaratorContext;
	public noptrnewdeclarator(_p: number): NoptrnewdeclaratorContext;
	// @RuleVersion(0)
	public noptrnewdeclarator(_p?: number): NoptrnewdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrnewdeclaratorContext = new NoptrnewdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrnewdeclaratorContext = _localctx;
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, CPP14Parser.RULE_noptrnewdeclarator, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 741;
			this.match(CPP14Parser.LeftBracket);
			this.state = 742;
			this.expression(0);
			this.state = 743;
			this.match(CPP14Parser.RightBracket);
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 744;
				this.attributespecifierseq(0);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 756;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoptrnewdeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrnewdeclarator);
					this.state = 747;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 748;
					this.match(CPP14Parser.LeftBracket);
					this.state = 749;
					this.constantexpression();
					this.state = 750;
					this.match(CPP14Parser.RightBracket);
					this.state = 752;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						this.state = 751;
						this.attributespecifierseq(0);
						}
						break;
					}
					}
					}
				}
				this.state = 758;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
	public newinitializer(): NewinitializerContext {
		let _localctx: NewinitializerContext = new NewinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CPP14Parser.RULE_newinitializer);
		let _la: number;
		try {
			this.state = 765;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 759;
				this.match(CPP14Parser.LeftParen);
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 760;
					this.expressionlist();
					}
				}

				this.state = 763;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
				this.bracedinitlist();
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
	public deleteexpression(): DeleteexpressionContext {
		let _localctx: DeleteexpressionContext = new DeleteexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CPP14Parser.RULE_deleteexpression);
		let _la: number;
		try {
			this.state = 779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Doublecolon) {
					{
					this.state = 767;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 770;
				this.match(CPP14Parser.Delete);
				this.state = 771;
				this.castexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Doublecolon) {
					{
					this.state = 772;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 775;
				this.match(CPP14Parser.Delete);
				this.state = 776;
				this.match(CPP14Parser.LeftBracket);
				this.state = 777;
				this.match(CPP14Parser.RightBracket);
				this.state = 778;
				this.castexpression();
				}
				break;
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
	public noexceptexpression(): NoexceptexpressionContext {
		let _localctx: NoexceptexpressionContext = new NoexceptexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CPP14Parser.RULE_noexceptexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.match(CPP14Parser.Noexcept);
			this.state = 782;
			this.match(CPP14Parser.LeftParen);
			this.state = 783;
			this.expression(0);
			this.state = 784;
			this.match(CPP14Parser.RightParen);
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
	public castexpression(): CastexpressionContext {
		let _localctx: CastexpressionContext = new CastexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CPP14Parser.RULE_castexpression);
		try {
			this.state = 792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 786;
				this.unaryexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 787;
				this.match(CPP14Parser.LeftParen);
				this.state = 788;
				this.typeid();
				this.state = 789;
				this.match(CPP14Parser.RightParen);
				this.state = 790;
				this.castexpression();
				}
				break;
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

	public pmexpression(): PmexpressionContext;
	public pmexpression(_p: number): PmexpressionContext;
	// @RuleVersion(0)
	public pmexpression(_p?: number): PmexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PmexpressionContext = new PmexpressionContext(this._ctx, _parentState);
		let _prevctx: PmexpressionContext = _localctx;
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, CPP14Parser.RULE_pmexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 795;
			this.castexpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 805;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 803;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
					case 1:
						{
						_localctx = new PmexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_pmexpression);
						this.state = 797;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 798;
						this.match(CPP14Parser.DotStar);
						this.state = 799;
						this.castexpression();
						}
						break;

					case 2:
						{
						_localctx = new PmexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_pmexpression);
						this.state = 800;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 801;
						this.match(CPP14Parser.ArrowStar);
						this.state = 802;
						this.castexpression();
						}
						break;
					}
					}
				}
				this.state = 807;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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

	public multiplicativeexpression(): MultiplicativeexpressionContext;
	public multiplicativeexpression(_p: number): MultiplicativeexpressionContext;
	// @RuleVersion(0)
	public multiplicativeexpression(_p?: number): MultiplicativeexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeexpressionContext = new MultiplicativeexpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeexpressionContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, CPP14Parser.RULE_multiplicativeexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 809;
			this.pmexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 822;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 820;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 811;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 812;
						this.match(CPP14Parser.Star);
						this.state = 813;
						this.pmexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 814;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 815;
						this.match(CPP14Parser.Div);
						this.state = 816;
						this.pmexpression(0);
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 817;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 818;
						this.match(CPP14Parser.Mod);
						this.state = 819;
						this.pmexpression(0);
						}
						break;
					}
					}
				}
				this.state = 824;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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

	public additiveexpression(): AdditiveexpressionContext;
	public additiveexpression(_p: number): AdditiveexpressionContext;
	// @RuleVersion(0)
	public additiveexpression(_p?: number): AdditiveexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveexpressionContext = new AdditiveexpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveexpressionContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, CPP14Parser.RULE_additiveexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 826;
			this.multiplicativeexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 836;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 834;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveexpression);
						this.state = 828;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 829;
						this.match(CPP14Parser.Plus);
						this.state = 830;
						this.multiplicativeexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveexpression);
						this.state = 831;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 832;
						this.match(CPP14Parser.Minus);
						this.state = 833;
						this.multiplicativeexpression(0);
						}
						break;
					}
					}
				}
				this.state = 838;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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

	public shiftexpression(): ShiftexpressionContext;
	public shiftexpression(_p: number): ShiftexpressionContext;
	// @RuleVersion(0)
	public shiftexpression(_p?: number): ShiftexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftexpressionContext = new ShiftexpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftexpressionContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, CPP14Parser.RULE_shiftexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 840;
			this.additiveexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 851;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 849;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_shiftexpression);
						this.state = 842;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 843;
						this.match(CPP14Parser.LeftShift);
						this.state = 844;
						this.additiveexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new ShiftexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_shiftexpression);
						this.state = 845;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 846;
						this.rightShift();
						this.state = 847;
						this.additiveexpression(0);
						}
						break;
					}
					}
				}
				this.state = 853;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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

	public relationalexpression(): RelationalexpressionContext;
	public relationalexpression(_p: number): RelationalexpressionContext;
	// @RuleVersion(0)
	public relationalexpression(_p?: number): RelationalexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalexpressionContext = new RelationalexpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalexpressionContext = _localctx;
		let _startState: number = 66;
		this.enterRecursionRule(_localctx, 66, CPP14Parser.RULE_relationalexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 855;
			this.shiftexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 871;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 869;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 857;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 858;
						this.match(CPP14Parser.Less);
						this.state = 859;
						this.shiftexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 860;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 861;
						this.match(CPP14Parser.Greater);
						this.state = 862;
						this.shiftexpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 863;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 864;
						this.match(CPP14Parser.LessEqual);
						this.state = 865;
						this.shiftexpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 866;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 867;
						this.match(CPP14Parser.GreaterEqual);
						this.state = 868;
						this.shiftexpression(0);
						}
						break;
					}
					}
				}
				this.state = 873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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

	public equalityexpression(): EqualityexpressionContext;
	public equalityexpression(_p: number): EqualityexpressionContext;
	// @RuleVersion(0)
	public equalityexpression(_p?: number): EqualityexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityexpressionContext = new EqualityexpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityexpressionContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, CPP14Parser.RULE_equalityexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 875;
			this.relationalexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 885;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 883;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityexpression);
						this.state = 877;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 878;
						this.match(CPP14Parser.Equal);
						this.state = 879;
						this.relationalexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityexpression);
						this.state = 880;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 881;
						this.match(CPP14Parser.NotEqual);
						this.state = 882;
						this.relationalexpression(0);
						}
						break;
					}
					}
				}
				this.state = 887;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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

	public andexpression(): AndexpressionContext;
	public andexpression(_p: number): AndexpressionContext;
	// @RuleVersion(0)
	public andexpression(_p?: number): AndexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndexpressionContext = new AndexpressionContext(this._ctx, _parentState);
		let _prevctx: AndexpressionContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, CPP14Parser.RULE_andexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 889;
			this.equalityexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 896;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_andexpression);
					this.state = 891;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 892;
					this.match(CPP14Parser.And);
					this.state = 893;
					this.equalityexpression(0);
					}
					}
				}
				this.state = 898;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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

	public exclusiveorexpression(): ExclusiveorexpressionContext;
	public exclusiveorexpression(_p: number): ExclusiveorexpressionContext;
	// @RuleVersion(0)
	public exclusiveorexpression(_p?: number): ExclusiveorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveorexpressionContext = new ExclusiveorexpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveorexpressionContext = _localctx;
		let _startState: number = 72;
		this.enterRecursionRule(_localctx, 72, CPP14Parser.RULE_exclusiveorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 900;
			this.andexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 907;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveorexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_exclusiveorexpression);
					this.state = 902;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 903;
					this.match(CPP14Parser.Caret);
					this.state = 904;
					this.andexpression(0);
					}
					}
				}
				this.state = 909;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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

	public inclusiveorexpression(): InclusiveorexpressionContext;
	public inclusiveorexpression(_p: number): InclusiveorexpressionContext;
	// @RuleVersion(0)
	public inclusiveorexpression(_p?: number): InclusiveorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveorexpressionContext = new InclusiveorexpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveorexpressionContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, CPP14Parser.RULE_inclusiveorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 911;
			this.exclusiveorexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 918;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveorexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_inclusiveorexpression);
					this.state = 913;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 914;
					this.match(CPP14Parser.Or);
					this.state = 915;
					this.exclusiveorexpression(0);
					}
					}
				}
				this.state = 920;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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

	public logicalandexpression(): LogicalandexpressionContext;
	public logicalandexpression(_p: number): LogicalandexpressionContext;
	// @RuleVersion(0)
	public logicalandexpression(_p?: number): LogicalandexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalandexpressionContext = new LogicalandexpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalandexpressionContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, CPP14Parser.RULE_logicalandexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 922;
			this.inclusiveorexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 929;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalandexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalandexpression);
					this.state = 924;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 925;
					this.match(CPP14Parser.AndAnd);
					this.state = 926;
					this.inclusiveorexpression(0);
					}
					}
				}
				this.state = 931;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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

	public logicalorexpression(): LogicalorexpressionContext;
	public logicalorexpression(_p: number): LogicalorexpressionContext;
	// @RuleVersion(0)
	public logicalorexpression(_p?: number): LogicalorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalorexpressionContext = new LogicalorexpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalorexpressionContext = _localctx;
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, CPP14Parser.RULE_logicalorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 933;
			this.logicalandexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 940;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalorexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalorexpression);
					this.state = 935;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 936;
					this.match(CPP14Parser.OrOr);
					this.state = 937;
					this.logicalandexpression(0);
					}
					}
				}
				this.state = 942;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
	public conditionalexpression(): ConditionalexpressionContext {
		let _localctx: ConditionalexpressionContext = new ConditionalexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CPP14Parser.RULE_conditionalexpression);
		try {
			this.state = 950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 943;
				this.logicalorexpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 944;
				this.logicalorexpression(0);
				this.state = 945;
				this.match(CPP14Parser.Question);
				this.state = 946;
				this.expression(0);
				this.state = 947;
				this.match(CPP14Parser.Colon);
				this.state = 948;
				this.assignmentexpression();
				}
				break;
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
	public assignmentexpression(): AssignmentexpressionContext {
		let _localctx: AssignmentexpressionContext = new AssignmentexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CPP14Parser.RULE_assignmentexpression);
		try {
			this.state = 958;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 952;
				this.conditionalexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 953;
				this.logicalorexpression(0);
				this.state = 954;
				this.assignmentoperator();
				this.state = 955;
				this.initializerclause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 957;
				this.throwexpression();
				}
				break;
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
	public assignmentoperator(): AssignmentoperatorContext {
		let _localctx: AssignmentoperatorContext = new AssignmentoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CPP14Parser.RULE_assignmentoperator);
		try {
			this.state = 971;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 960;
				this.match(CPP14Parser.Assign);
				}
				break;
			case CPP14Parser.StarAssign:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 961;
				this.match(CPP14Parser.StarAssign);
				}
				break;
			case CPP14Parser.DivAssign:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 962;
				this.match(CPP14Parser.DivAssign);
				}
				break;
			case CPP14Parser.ModAssign:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 963;
				this.match(CPP14Parser.ModAssign);
				}
				break;
			case CPP14Parser.PlusAssign:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 964;
				this.match(CPP14Parser.PlusAssign);
				}
				break;
			case CPP14Parser.MinusAssign:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 965;
				this.match(CPP14Parser.MinusAssign);
				}
				break;
			case CPP14Parser.Greater:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 966;
				this.rightShiftAssign();
				}
				break;
			case CPP14Parser.LeftShiftAssign:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 967;
				this.match(CPP14Parser.LeftShiftAssign);
				}
				break;
			case CPP14Parser.AndAssign:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 968;
				this.match(CPP14Parser.AndAssign);
				}
				break;
			case CPP14Parser.XorAssign:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 969;
				this.match(CPP14Parser.XorAssign);
				}
				break;
			case CPP14Parser.OrAssign:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 970;
				this.match(CPP14Parser.OrAssign);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, CPP14Parser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 974;
			this.assignmentexpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 981;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_expression);
					this.state = 976;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 977;
					this.match(CPP14Parser.Comma);
					this.state = 978;
					this.assignmentexpression();
					}
					}
				}
				this.state = 983;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
	public constantexpression(): ConstantexpressionContext {
		let _localctx: ConstantexpressionContext = new ConstantexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CPP14Parser.RULE_constantexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 984;
			this.conditionalexpression();
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CPP14Parser.RULE_statement);
		let _la: number;
		try {
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 986;
				this.labeledstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 988;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 987;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 990;
				this.expressionstatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 991;
					this.attributespecifierseq(0);
					}
				}

				this.state = 994;
				this.compoundstatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 995;
					this.attributespecifierseq(0);
					}
				}

				this.state = 998;
				this.selectionstatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 999;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1002;
				this.iterationstatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1003;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1006;
				this.jumpstatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1007;
				this.declarationstatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1008;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1011;
				this.tryblock();
				}
				break;
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
	public labeledstatement(): LabeledstatementContext {
		let _localctx: LabeledstatementContext = new LabeledstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CPP14Parser.RULE_labeledstatement);
		let _la: number;
		try {
			this.state = 1034;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1014;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1017;
				this.match(CPP14Parser.Identifier);
				this.state = 1018;
				this.match(CPP14Parser.Colon);
				this.state = 1019;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1020;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1023;
				this.match(CPP14Parser.Case);
				this.state = 1024;
				this.constantexpression();
				this.state = 1025;
				this.match(CPP14Parser.Colon);
				this.state = 1026;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1028;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1031;
				this.match(CPP14Parser.Default);
				this.state = 1032;
				this.match(CPP14Parser.Colon);
				this.state = 1033;
				this.statement();
				}
				break;
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
	public expressionstatement(): ExpressionstatementContext {
		let _localctx: ExpressionstatementContext = new ExpressionstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CPP14Parser.RULE_expressionstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
				{
				this.state = 1036;
				this.expression(0);
				}
			}

			this.state = 1039;
			this.match(CPP14Parser.Semi);
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
	public compoundstatement(): CompoundstatementContext {
		let _localctx: CompoundstatementContext = new CompoundstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CPP14Parser.RULE_compoundstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1041;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Switch - 32)) | (1 << (CPP14Parser.This - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.PlusPlus - 111)) | (1 << (CPP14Parser.MinusMinus - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)) | (1 << (CPP14Parser.Integerliteral - 111)) | (1 << (CPP14Parser.Characterliteral - 111)) | (1 << (CPP14Parser.Floatingliteral - 111)) | (1 << (CPP14Parser.Stringliteral - 111)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 111)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 111)) | (1 << (CPP14Parser.Userdefinedstringliteral - 111)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 111)))) !== 0)) {
				{
				this.state = 1042;
				this.statementseq(0);
				}
			}

			this.state = 1045;
			this.match(CPP14Parser.RightBrace);
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

	public statementseq(): StatementseqContext;
	public statementseq(_p: number): StatementseqContext;
	// @RuleVersion(0)
	public statementseq(_p?: number): StatementseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StatementseqContext = new StatementseqContext(this._ctx, _parentState);
		let _prevctx: StatementseqContext = _localctx;
		let _startState: number = 98;
		this.enterRecursionRule(_localctx, 98, CPP14Parser.RULE_statementseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1048;
			this.statement();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1054;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new StatementseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_statementseq);
					this.state = 1050;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1051;
					this.statement();
					}
					}
				}
				this.state = 1056;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
	public selectionstatement(): SelectionstatementContext {
		let _localctx: SelectionstatementContext = new SelectionstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CPP14Parser.RULE_selectionstatement);
		try {
			this.state = 1077;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1057;
				this.match(CPP14Parser.If);
				this.state = 1058;
				this.match(CPP14Parser.LeftParen);
				this.state = 1059;
				this.condition();
				this.state = 1060;
				this.match(CPP14Parser.RightParen);
				this.state = 1061;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1063;
				this.match(CPP14Parser.If);
				this.state = 1064;
				this.match(CPP14Parser.LeftParen);
				this.state = 1065;
				this.condition();
				this.state = 1066;
				this.match(CPP14Parser.RightParen);
				this.state = 1067;
				this.statement();
				this.state = 1068;
				this.match(CPP14Parser.Else);
				this.state = 1069;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1071;
				this.match(CPP14Parser.Switch);
				this.state = 1072;
				this.match(CPP14Parser.LeftParen);
				this.state = 1073;
				this.condition();
				this.state = 1074;
				this.match(CPP14Parser.RightParen);
				this.state = 1075;
				this.statement();
				}
				break;
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CPP14Parser.RULE_condition);
		let _la: number;
		try {
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1079;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1080;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1083;
				this.declspecifierseq();
				this.state = 1084;
				this.declarator();
				this.state = 1085;
				this.match(CPP14Parser.Assign);
				this.state = 1086;
				this.initializerclause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1088;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1091;
				this.declspecifierseq();
				this.state = 1092;
				this.declarator();
				this.state = 1093;
				this.bracedinitlist();
				}
				break;
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
	public iterationstatement(): IterationstatementContext {
		let _localctx: IterationstatementContext = new IterationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CPP14Parser.RULE_iterationstatement);
		let _la: number;
		try {
			this.state = 1132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1097;
				this.match(CPP14Parser.While);
				this.state = 1098;
				this.match(CPP14Parser.LeftParen);
				this.state = 1099;
				this.condition();
				this.state = 1100;
				this.match(CPP14Parser.RightParen);
				this.state = 1101;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1103;
				this.match(CPP14Parser.Do);
				this.state = 1104;
				this.statement();
				this.state = 1105;
				this.match(CPP14Parser.While);
				this.state = 1106;
				this.match(CPP14Parser.LeftParen);
				this.state = 1107;
				this.expression(0);
				this.state = 1108;
				this.match(CPP14Parser.RightParen);
				this.state = 1109;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1111;
				this.match(CPP14Parser.For);
				this.state = 1112;
				this.match(CPP14Parser.LeftParen);
				this.state = 1113;
				this.forinitstatement();
				this.state = 1115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 1114;
					this.condition();
					}
				}

				this.state = 1117;
				this.match(CPP14Parser.Semi);
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 1118;
					this.expression(0);
					}
				}

				this.state = 1121;
				this.match(CPP14Parser.RightParen);
				this.state = 1122;
				this.statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1124;
				this.match(CPP14Parser.For);
				this.state = 1125;
				this.match(CPP14Parser.LeftParen);
				this.state = 1126;
				this.forrangedeclaration();
				this.state = 1127;
				this.match(CPP14Parser.Colon);
				this.state = 1128;
				this.forrangeinitializer();
				this.state = 1129;
				this.match(CPP14Parser.RightParen);
				this.state = 1130;
				this.statement();
				}
				break;
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
	public forinitstatement(): ForinitstatementContext {
		let _localctx: ForinitstatementContext = new ForinitstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CPP14Parser.RULE_forinitstatement);
		try {
			this.state = 1136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1134;
				this.expressionstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1135;
				this.simpledeclaration();
				}
				break;
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
	public forrangedeclaration(): ForrangedeclarationContext {
		let _localctx: ForrangedeclarationContext = new ForrangedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CPP14Parser.RULE_forrangedeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1138;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1141;
			this.declspecifierseq();
			this.state = 1142;
			this.declarator();
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
	public forrangeinitializer(): ForrangeinitializerContext {
		let _localctx: ForrangeinitializerContext = new ForrangeinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CPP14Parser.RULE_forrangeinitializer);
		try {
			this.state = 1146;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Alignof:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Decltype:
			case CPP14Parser.Delete:
			case CPP14Parser.Double:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.False:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Nullptr:
			case CPP14Parser.Operator:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static_cast:
			case CPP14Parser.This:
			case CPP14Parser.Throw:
			case CPP14Parser.True:
			case CPP14Parser.Typeid:
			case CPP14Parser.Typename:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.Not:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1144;
				this.expression(0);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1145;
				this.bracedinitlist();
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
	public jumpstatement(): JumpstatementContext {
		let _localctx: JumpstatementContext = new JumpstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CPP14Parser.RULE_jumpstatement);
		let _la: number;
		try {
			this.state = 1164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1148;
				this.match(CPP14Parser.Break);
				this.state = 1149;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1150;
				this.match(CPP14Parser.Continue);
				this.state = 1151;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1152;
				this.match(CPP14Parser.Return);
				this.state = 1154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 1153;
					this.expression(0);
					}
				}

				this.state = 1156;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1157;
				this.match(CPP14Parser.Return);
				this.state = 1158;
				this.bracedinitlist();
				this.state = 1159;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1161;
				this.match(CPP14Parser.Goto);
				this.state = 1162;
				this.match(CPP14Parser.Identifier);
				this.state = 1163;
				this.match(CPP14Parser.Semi);
				}
				break;
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
	public declarationstatement(): DeclarationstatementContext {
		let _localctx: DeclarationstatementContext = new DeclarationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CPP14Parser.RULE_declarationstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.blockdeclaration();
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

	public declarationseq(): DeclarationseqContext;
	public declarationseq(_p: number): DeclarationseqContext;
	// @RuleVersion(0)
	public declarationseq(_p?: number): DeclarationseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DeclarationseqContext = new DeclarationseqContext(this._ctx, _parentState);
		let _prevctx: DeclarationseqContext = _localctx;
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, CPP14Parser.RULE_declarationseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1169;
			this.declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1175;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclarationseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_declarationseq);
					this.state = 1171;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1172;
					this.declaration();
					}
					}
				}
				this.state = 1177;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CPP14Parser.RULE_declaration);
		try {
			this.state = 1187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1178;
				this.blockdeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1179;
				this.functiondefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1180;
				this.templatedeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1181;
				this.explicitinstantiation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1182;
				this.explicitspecialization();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1183;
				this.linkagespecification();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1184;
				this.namespacedefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1185;
				this.emptydeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1186;
				this.attributedeclaration();
				}
				break;
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
	public blockdeclaration(): BlockdeclarationContext {
		let _localctx: BlockdeclarationContext = new BlockdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CPP14Parser.RULE_blockdeclaration);
		try {
			this.state = 1197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1189;
				this.simpledeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1190;
				this.asmdefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1191;
				this.namespacealiasdefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1192;
				this.usingdeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1193;
				this.usingdirective();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1194;
				this.static_assertdeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1195;
				this.aliasdeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1196;
				this.opaqueenumdeclaration();
				}
				break;
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
	public aliasdeclaration(): AliasdeclarationContext {
		let _localctx: AliasdeclarationContext = new AliasdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CPP14Parser.RULE_aliasdeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1199;
			this.match(CPP14Parser.Using);
			this.state = 1200;
			this.match(CPP14Parser.Identifier);
			this.state = 1202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1201;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1204;
			this.match(CPP14Parser.Assign);
			this.state = 1205;
			this.typeid();
			this.state = 1206;
			this.match(CPP14Parser.Semi);
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
	public simpledeclaration(): SimpledeclarationContext {
		let _localctx: SimpledeclarationContext = new SimpledeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CPP14Parser.RULE_simpledeclaration);
		let _la: number;
		try {
			this.state = 1222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Float:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Operator:
			case CPP14Parser.Register:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Static:
			case CPP14Parser.Struct:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typename:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Tilde:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1209;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1208;
					this.declspecifierseq();
					}
					break;
				}
				this.state = 1212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)) | (1 << (CPP14Parser.Tilde - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 1211;
					this.initdeclaratorlist(0);
					}
				}

				this.state = 1214;
				this.match(CPP14Parser.Semi);
				}
				break;
			case CPP14Parser.Alignas:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1215;
				this.attributespecifierseq(0);
				this.state = 1217;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 1216;
					this.declspecifierseq();
					}
					break;
				}
				this.state = 1219;
				this.initdeclaratorlist(0);
				this.state = 1220;
				this.match(CPP14Parser.Semi);
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
	public static_assertdeclaration(): Static_assertdeclarationContext {
		let _localctx: Static_assertdeclarationContext = new Static_assertdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CPP14Parser.RULE_static_assertdeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			this.match(CPP14Parser.Static_assert);
			this.state = 1225;
			this.match(CPP14Parser.LeftParen);
			this.state = 1226;
			this.constantexpression();
			this.state = 1227;
			this.match(CPP14Parser.Comma);
			this.state = 1228;
			this.match(CPP14Parser.Stringliteral);
			this.state = 1229;
			this.match(CPP14Parser.RightParen);
			this.state = 1230;
			this.match(CPP14Parser.Semi);
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
	public emptydeclaration(): EmptydeclarationContext {
		let _localctx: EmptydeclarationContext = new EmptydeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CPP14Parser.RULE_emptydeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this.match(CPP14Parser.Semi);
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
	public attributedeclaration(): AttributedeclarationContext {
		let _localctx: AttributedeclarationContext = new AttributedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CPP14Parser.RULE_attributedeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.attributespecifierseq(0);
			this.state = 1235;
			this.match(CPP14Parser.Semi);
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
	public declspecifier(): DeclspecifierContext {
		let _localctx: DeclspecifierContext = new DeclspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CPP14Parser.RULE_declspecifier);
		try {
			this.state = 1243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Extern:
			case CPP14Parser.Mutable:
			case CPP14Parser.Register:
			case CPP14Parser.Static:
			case CPP14Parser.Thread_local:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1237;
				this.storageclassspecifier();
				}
				break;
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Struct:
			case CPP14Parser.Typename:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1238;
				this.typespecifier();
				}
				break;
			case CPP14Parser.Explicit:
			case CPP14Parser.Inline:
			case CPP14Parser.Virtual:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1239;
				this.functionspecifier();
				}
				break;
			case CPP14Parser.Friend:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1240;
				this.match(CPP14Parser.Friend);
				}
				break;
			case CPP14Parser.Typedef:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1241;
				this.match(CPP14Parser.Typedef);
				}
				break;
			case CPP14Parser.Constexpr:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1242;
				this.match(CPP14Parser.Constexpr);
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
	public declspecifierseq(): DeclspecifierseqContext {
		let _localctx: DeclspecifierseqContext = new DeclspecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CPP14Parser.RULE_declspecifierseq);
		try {
			this.state = 1252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1245;
				this.declspecifier();
				this.state = 1247;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 1246;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1249;
				this.declspecifier();
				this.state = 1250;
				this.declspecifierseq();
				}
				break;
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
	public storageclassspecifier(): StorageclassspecifierContext {
		let _localctx: StorageclassspecifierContext = new StorageclassspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CPP14Parser.RULE_storageclassspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Extern || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CPP14Parser.Mutable - 40)) | (1 << (CPP14Parser.Register - 40)) | (1 << (CPP14Parser.Static - 40)) | (1 << (CPP14Parser.Thread_local - 40)))) !== 0))) {
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
	public functionspecifier(): FunctionspecifierContext {
		let _localctx: FunctionspecifierContext = new FunctionspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CPP14Parser.RULE_functionspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1256;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Explicit || _la === CPP14Parser.Inline || _la === CPP14Parser.Virtual)) {
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
	public typedefname(): TypedefnameContext {
		let _localctx: TypedefnameContext = new TypedefnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CPP14Parser.RULE_typedefname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this.match(CPP14Parser.Identifier);
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
	public typespecifier(): TypespecifierContext {
		let _localctx: TypespecifierContext = new TypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CPP14Parser.RULE_typespecifier);
		try {
			this.state = 1263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1260;
				this.trailingtypespecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1261;
				this.classspecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1262;
				this.enumspecifier();
				}
				break;
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
	public trailingtypespecifier(): TrailingtypespecifierContext {
		let _localctx: TrailingtypespecifierContext = new TrailingtypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CPP14Parser.RULE_trailingtypespecifier);
		try {
			this.state = 1269;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1265;
				this.simpletypespecifier();
				}
				break;
			case CPP14Parser.Class:
			case CPP14Parser.Enum:
			case CPP14Parser.Struct:
			case CPP14Parser.Union:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1266;
				this.elaboratedtypespecifier();
				}
				break;
			case CPP14Parser.Typename:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1267;
				this.typenamespecifier();
				}
				break;
			case CPP14Parser.Const:
			case CPP14Parser.Volatile:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1268;
				this.cvqualifier();
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
	public typespecifierseq(): TypespecifierseqContext {
		let _localctx: TypespecifierseqContext = new TypespecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CPP14Parser.RULE_typespecifierseq);
		try {
			this.state = 1278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1271;
				this.typespecifier();
				this.state = 1273;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1272;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1275;
				this.typespecifier();
				this.state = 1276;
				this.typespecifierseq();
				}
				break;
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
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext {
		let _localctx: TrailingtypespecifierseqContext = new TrailingtypespecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CPP14Parser.RULE_trailingtypespecifierseq);
		try {
			this.state = 1287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1280;
				this.trailingtypespecifier();
				this.state = 1282;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1281;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1284;
				this.trailingtypespecifier();
				this.state = 1285;
				this.trailingtypespecifierseq();
				}
				break;
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
	public simpletypespecifier(): SimpletypespecifierContext {
		let _localctx: SimpletypespecifierContext = new SimpletypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CPP14Parser.RULE_simpletypespecifier);
		try {
			this.state = 1312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1290;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1289;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1292;
				this.typename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1293;
				this.nestednamespecifier(0);
				this.state = 1294;
				this.match(CPP14Parser.Template);
				this.state = 1295;
				this.simpletemplateid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1297;
				this.match(CPP14Parser.Char);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1298;
				this.match(CPP14Parser.Char16);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1299;
				this.match(CPP14Parser.Char32);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1300;
				this.match(CPP14Parser.Wchar);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1301;
				this.match(CPP14Parser.Bool);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1302;
				this.match(CPP14Parser.Short);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1303;
				this.match(CPP14Parser.Int);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1304;
				this.match(CPP14Parser.Long);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1305;
				this.match(CPP14Parser.Signed);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1306;
				this.match(CPP14Parser.Unsigned);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1307;
				this.match(CPP14Parser.Float);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1308;
				this.match(CPP14Parser.Double);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1309;
				this.match(CPP14Parser.Void);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1310;
				this.match(CPP14Parser.Auto);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1311;
				this.decltypespecifier();
				}
				break;
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
	public typename(): TypenameContext {
		let _localctx: TypenameContext = new TypenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CPP14Parser.RULE_typename);
		try {
			this.state = 1318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1314;
				this.classname();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1315;
				this.enumname();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1316;
				this.typedefname();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1317;
				this.simpletemplateid();
				}
				break;
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
	public decltypespecifier(): DecltypespecifierContext {
		let _localctx: DecltypespecifierContext = new DecltypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CPP14Parser.RULE_decltypespecifier);
		try {
			this.state = 1329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1320;
				this.match(CPP14Parser.Decltype);
				this.state = 1321;
				this.match(CPP14Parser.LeftParen);
				this.state = 1322;
				this.expression(0);
				this.state = 1323;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1325;
				this.match(CPP14Parser.Decltype);
				this.state = 1326;
				this.match(CPP14Parser.LeftParen);
				this.state = 1327;
				this.match(CPP14Parser.Auto);
				this.state = 1328;
				this.match(CPP14Parser.RightParen);
				}
				break;
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
	public elaboratedtypespecifier(): ElaboratedtypespecifierContext {
		let _localctx: ElaboratedtypespecifierContext = new ElaboratedtypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CPP14Parser.RULE_elaboratedtypespecifier);
		let _la: number;
		try {
			this.state = 1355;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1331;
				this.classkey();
				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1332;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1336;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1335;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1338;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1340;
				this.classkey();
				this.state = 1341;
				this.simpletemplateid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1343;
				this.classkey();
				this.state = 1344;
				this.nestednamespecifier(0);
				this.state = 1346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Template) {
					{
					this.state = 1345;
					this.match(CPP14Parser.Template);
					}
				}

				this.state = 1348;
				this.simpletemplateid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1350;
				this.match(CPP14Parser.Enum);
				this.state = 1352;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1351;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1354;
				this.match(CPP14Parser.Identifier);
				}
				break;
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
	public enumname(): EnumnameContext {
		let _localctx: EnumnameContext = new EnumnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CPP14Parser.RULE_enumname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1357;
			this.match(CPP14Parser.Identifier);
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
	public enumspecifier(): EnumspecifierContext {
		let _localctx: EnumspecifierContext = new EnumspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CPP14Parser.RULE_enumspecifier);
		let _la: number;
		try {
			this.state = 1372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1359;
				this.enumhead();
				this.state = 1360;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1361;
					this.enumeratorlist(0);
					}
				}

				this.state = 1364;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1366;
				this.enumhead();
				this.state = 1367;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1368;
				this.enumeratorlist(0);
				this.state = 1369;
				this.match(CPP14Parser.Comma);
				this.state = 1370;
				this.match(CPP14Parser.RightBrace);
				}
				break;
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
	public enumhead(): EnumheadContext {
		let _localctx: EnumheadContext = new EnumheadContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CPP14Parser.RULE_enumhead);
		let _la: number;
		try {
			this.state = 1393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1374;
				this.enumkey();
				this.state = 1376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1375;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1378;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 1382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1381;
					this.enumbase();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1384;
				this.enumkey();
				this.state = 1386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1385;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1388;
				this.nestednamespecifier(0);
				this.state = 1389;
				this.match(CPP14Parser.Identifier);
				this.state = 1391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1390;
					this.enumbase();
					}
				}

				}
				break;
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
	public opaqueenumdeclaration(): OpaqueenumdeclarationContext {
		let _localctx: OpaqueenumdeclarationContext = new OpaqueenumdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CPP14Parser.RULE_opaqueenumdeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1395;
			this.enumkey();
			this.state = 1397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1396;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1399;
			this.match(CPP14Parser.Identifier);
			this.state = 1401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 1400;
				this.enumbase();
				}
			}

			this.state = 1403;
			this.match(CPP14Parser.Semi);
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
	public enumkey(): EnumkeyContext {
		let _localctx: EnumkeyContext = new EnumkeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CPP14Parser.RULE_enumkey);
		try {
			this.state = 1410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1405;
				this.match(CPP14Parser.Enum);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1406;
				this.match(CPP14Parser.Enum);
				this.state = 1407;
				this.match(CPP14Parser.Class);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1408;
				this.match(CPP14Parser.Enum);
				this.state = 1409;
				this.match(CPP14Parser.Struct);
				}
				break;
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
	public enumbase(): EnumbaseContext {
		let _localctx: EnumbaseContext = new EnumbaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CPP14Parser.RULE_enumbase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this.match(CPP14Parser.Colon);
			this.state = 1413;
			this.typespecifierseq();
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

	public enumeratorlist(): EnumeratorlistContext;
	public enumeratorlist(_p: number): EnumeratorlistContext;
	// @RuleVersion(0)
	public enumeratorlist(_p?: number): EnumeratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EnumeratorlistContext = new EnumeratorlistContext(this._ctx, _parentState);
		let _prevctx: EnumeratorlistContext = _localctx;
		let _startState: number = 170;
		this.enterRecursionRule(_localctx, 170, CPP14Parser.RULE_enumeratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1416;
			this.enumeratordefinition();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new EnumeratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_enumeratorlist);
					this.state = 1418;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1419;
					this.match(CPP14Parser.Comma);
					this.state = 1420;
					this.enumeratordefinition();
					}
					}
				}
				this.state = 1425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
	public enumeratordefinition(): EnumeratordefinitionContext {
		let _localctx: EnumeratordefinitionContext = new EnumeratordefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CPP14Parser.RULE_enumeratordefinition);
		try {
			this.state = 1431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1426;
				this.enumerator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1427;
				this.enumerator();
				this.state = 1428;
				this.match(CPP14Parser.Assign);
				this.state = 1429;
				this.constantexpression();
				}
				break;
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
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CPP14Parser.RULE_enumerator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1433;
			this.match(CPP14Parser.Identifier);
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
	public namespacename(): NamespacenameContext {
		let _localctx: NamespacenameContext = new NamespacenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CPP14Parser.RULE_namespacename);
		try {
			this.state = 1437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1435;
				this.originalnamespacename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1436;
				this.namespacealias();
				}
				break;
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
	public originalnamespacename(): OriginalnamespacenameContext {
		let _localctx: OriginalnamespacenameContext = new OriginalnamespacenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CPP14Parser.RULE_originalnamespacename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1439;
			this.match(CPP14Parser.Identifier);
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
	public namespacedefinition(): NamespacedefinitionContext {
		let _localctx: NamespacedefinitionContext = new NamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CPP14Parser.RULE_namespacedefinition);
		try {
			this.state = 1443;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1441;
				this.namednamespacedefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1442;
				this.unnamednamespacedefinition();
				}
				break;
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
	public namednamespacedefinition(): NamednamespacedefinitionContext {
		let _localctx: NamednamespacedefinitionContext = new NamednamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CPP14Parser.RULE_namednamespacedefinition);
		try {
			this.state = 1447;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1445;
				this.originalnamespacedefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1446;
				this.extensionnamespacedefinition();
				}
				break;
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
	public originalnamespacedefinition(): OriginalnamespacedefinitionContext {
		let _localctx: OriginalnamespacedefinitionContext = new OriginalnamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CPP14Parser.RULE_originalnamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Inline) {
				{
				this.state = 1449;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1452;
			this.match(CPP14Parser.Namespace);
			this.state = 1453;
			this.match(CPP14Parser.Identifier);
			this.state = 1454;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1455;
			this.namespacebody();
			this.state = 1456;
			this.match(CPP14Parser.RightBrace);
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
	public extensionnamespacedefinition(): ExtensionnamespacedefinitionContext {
		let _localctx: ExtensionnamespacedefinitionContext = new ExtensionnamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CPP14Parser.RULE_extensionnamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Inline) {
				{
				this.state = 1458;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1461;
			this.match(CPP14Parser.Namespace);
			this.state = 1462;
			this.originalnamespacename();
			this.state = 1463;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1464;
			this.namespacebody();
			this.state = 1465;
			this.match(CPP14Parser.RightBrace);
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
	public unnamednamespacedefinition(): UnnamednamespacedefinitionContext {
		let _localctx: UnnamednamespacedefinitionContext = new UnnamednamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CPP14Parser.RULE_unnamednamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Inline) {
				{
				this.state = 1467;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1470;
			this.match(CPP14Parser.Namespace);
			this.state = 1471;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1472;
			this.namespacebody();
			this.state = 1473;
			this.match(CPP14Parser.RightBrace);
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
	public namespacebody(): NamespacebodyContext {
		let _localctx: NamespacebodyContext = new NamespacebodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CPP14Parser.RULE_namespacebody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
				{
				this.state = 1475;
				this.declarationseq(0);
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
	public namespacealias(): NamespacealiasContext {
		let _localctx: NamespacealiasContext = new NamespacealiasContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CPP14Parser.RULE_namespacealias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1478;
			this.match(CPP14Parser.Identifier);
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
	public namespacealiasdefinition(): NamespacealiasdefinitionContext {
		let _localctx: NamespacealiasdefinitionContext = new NamespacealiasdefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CPP14Parser.RULE_namespacealiasdefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1480;
			this.match(CPP14Parser.Namespace);
			this.state = 1481;
			this.match(CPP14Parser.Identifier);
			this.state = 1482;
			this.match(CPP14Parser.Assign);
			this.state = 1483;
			this.qualifiednamespacespecifier();
			this.state = 1484;
			this.match(CPP14Parser.Semi);
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
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		let _localctx: QualifiednamespacespecifierContext = new QualifiednamespacespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CPP14Parser.RULE_qualifiednamespacespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1486;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 1489;
			this.namespacename();
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
	public usingdeclaration(): UsingdeclarationContext {
		let _localctx: UsingdeclarationContext = new UsingdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CPP14Parser.RULE_usingdeclaration);
		let _la: number;
		try {
			this.state = 1504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1491;
				this.match(CPP14Parser.Using);
				this.state = 1493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Typename) {
					{
					this.state = 1492;
					this.match(CPP14Parser.Typename);
					}
				}

				this.state = 1495;
				this.nestednamespecifier(0);
				this.state = 1496;
				this.unqualifiedid();
				this.state = 1497;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1499;
				this.match(CPP14Parser.Using);
				this.state = 1500;
				this.match(CPP14Parser.Doublecolon);
				this.state = 1501;
				this.unqualifiedid();
				this.state = 1502;
				this.match(CPP14Parser.Semi);
				}
				break;
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
	public usingdirective(): UsingdirectiveContext {
		let _localctx: UsingdirectiveContext = new UsingdirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, CPP14Parser.RULE_usingdirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1506;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1509;
			this.match(CPP14Parser.Using);
			this.state = 1510;
			this.match(CPP14Parser.Namespace);
			this.state = 1512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1511;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 1514;
			this.namespacename();
			this.state = 1515;
			this.match(CPP14Parser.Semi);
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
	public asmdefinition(): AsmdefinitionContext {
		let _localctx: AsmdefinitionContext = new AsmdefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CPP14Parser.RULE_asmdefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1517;
			this.match(CPP14Parser.Asm);
			this.state = 1518;
			this.match(CPP14Parser.LeftParen);
			this.state = 1519;
			this.match(CPP14Parser.Stringliteral);
			this.state = 1520;
			this.match(CPP14Parser.RightParen);
			this.state = 1521;
			this.match(CPP14Parser.Semi);
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
	public linkagespecification(): LinkagespecificationContext {
		let _localctx: LinkagespecificationContext = new LinkagespecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CPP14Parser.RULE_linkagespecification);
		let _la: number;
		try {
			this.state = 1533;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1523;
				this.match(CPP14Parser.Extern);
				this.state = 1524;
				this.match(CPP14Parser.Stringliteral);
				this.state = 1525;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 1526;
					this.declarationseq(0);
					}
				}

				this.state = 1529;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1530;
				this.match(CPP14Parser.Extern);
				this.state = 1531;
				this.match(CPP14Parser.Stringliteral);
				this.state = 1532;
				this.declaration();
				}
				break;
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

	public attributespecifierseq(): AttributespecifierseqContext;
	public attributespecifierseq(_p: number): AttributespecifierseqContext;
	// @RuleVersion(0)
	public attributespecifierseq(_p?: number): AttributespecifierseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AttributespecifierseqContext = new AttributespecifierseqContext(this._ctx, _parentState);
		let _prevctx: AttributespecifierseqContext = _localctx;
		let _startState: number = 206;
		this.enterRecursionRule(_localctx, 206, CPP14Parser.RULE_attributespecifierseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1536;
			this.attributespecifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1542;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AttributespecifierseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributespecifierseq);
					this.state = 1538;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1539;
					this.attributespecifier();
					}
					}
				}
				this.state = 1544;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
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
	public attributespecifier(): AttributespecifierContext {
		let _localctx: AttributespecifierContext = new AttributespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CPP14Parser.RULE_attributespecifier);
		try {
			this.state = 1552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1545;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1546;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1547;
				this.attributelist(0);
				this.state = 1548;
				this.match(CPP14Parser.RightBracket);
				this.state = 1549;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.Alignas:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1551;
				this.alignmentspecifier();
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
	public alignmentspecifier(): AlignmentspecifierContext {
		let _localctx: AlignmentspecifierContext = new AlignmentspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CPP14Parser.RULE_alignmentspecifier);
		let _la: number;
		try {
			this.state = 1570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1554;
				this.match(CPP14Parser.Alignas);
				this.state = 1555;
				this.match(CPP14Parser.LeftParen);
				this.state = 1556;
				this.typeid();
				this.state = 1558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1557;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 1560;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1562;
				this.match(CPP14Parser.Alignas);
				this.state = 1563;
				this.match(CPP14Parser.LeftParen);
				this.state = 1564;
				this.constantexpression();
				this.state = 1566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1565;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 1568;
				this.match(CPP14Parser.RightParen);
				}
				break;
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

	public attributelist(): AttributelistContext;
	public attributelist(_p: number): AttributelistContext;
	// @RuleVersion(0)
	public attributelist(_p?: number): AttributelistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AttributelistContext = new AttributelistContext(this._ctx, _parentState);
		let _prevctx: AttributelistContext = _localctx;
		let _startState: number = 212;
		this.enterRecursionRule(_localctx, 212, CPP14Parser.RULE_attributelist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				{
				this.state = 1574;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1573;
					this.attribute();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1576;
				this.attribute();
				this.state = 1577;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1593;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1591;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
					case 1:
						{
						_localctx = new AttributelistContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributelist);
						this.state = 1581;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1582;
						this.match(CPP14Parser.Comma);
						this.state = 1584;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
						case 1:
							{
							this.state = 1583;
							this.attribute();
							}
							break;
						}
						}
						break;

					case 2:
						{
						_localctx = new AttributelistContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributelist);
						this.state = 1586;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 1587;
						this.match(CPP14Parser.Comma);
						this.state = 1588;
						this.attribute();
						this.state = 1589;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
				}
				this.state = 1595;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CPP14Parser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1596;
			this.attributetoken();
			this.state = 1598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1597;
				this.attributeargumentclause();
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
	public attributetoken(): AttributetokenContext {
		let _localctx: AttributetokenContext = new AttributetokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CPP14Parser.RULE_attributetoken);
		try {
			this.state = 1602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1600;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1601;
				this.attributescopedtoken();
				}
				break;
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
	public attributescopedtoken(): AttributescopedtokenContext {
		let _localctx: AttributescopedtokenContext = new AttributescopedtokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, CPP14Parser.RULE_attributescopedtoken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1604;
			this.attributenamespace();
			this.state = 1605;
			this.match(CPP14Parser.Doublecolon);
			this.state = 1606;
			this.match(CPP14Parser.Identifier);
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
	public attributenamespace(): AttributenamespaceContext {
		let _localctx: AttributenamespaceContext = new AttributenamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CPP14Parser.RULE_attributenamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1608;
			this.match(CPP14Parser.Identifier);
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
	public attributeargumentclause(): AttributeargumentclauseContext {
		let _localctx: AttributeargumentclauseContext = new AttributeargumentclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CPP14Parser.RULE_attributeargumentclause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1610;
			this.match(CPP14Parser.LeftParen);
			this.state = 1611;
			this.balancedtokenseq(0);
			this.state = 1612;
			this.match(CPP14Parser.RightParen);
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

	public balancedtokenseq(): BalancedtokenseqContext;
	public balancedtokenseq(_p: number): BalancedtokenseqContext;
	// @RuleVersion(0)
	public balancedtokenseq(_p?: number): BalancedtokenseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BalancedtokenseqContext = new BalancedtokenseqContext(this._ctx, _parentState);
		let _prevctx: BalancedtokenseqContext = _localctx;
		let _startState: number = 224;
		this.enterRecursionRule(_localctx, 224, CPP14Parser.RULE_balancedtokenseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1616;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1615;
				this.balancedtoken();
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1622;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BalancedtokenseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_balancedtokenseq);
					this.state = 1618;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1619;
					this.balancedtoken();
					}
					}
				}
				this.state = 1624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
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
	public balancedtoken(): BalancedtokenContext {
		let _localctx: BalancedtokenContext = new BalancedtokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, CPP14Parser.RULE_balancedtoken);
		try {
			this.state = 1637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1625;
				this.match(CPP14Parser.LeftParen);
				this.state = 1626;
				this.balancedtokenseq(0);
				this.state = 1627;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1629;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1630;
				this.balancedtokenseq(0);
				this.state = 1631;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1633;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1634;
				this.balancedtokenseq(0);
				this.state = 1635;
				this.match(CPP14Parser.RightBrace);
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

	public initdeclaratorlist(): InitdeclaratorlistContext;
	public initdeclaratorlist(_p: number): InitdeclaratorlistContext;
	// @RuleVersion(0)
	public initdeclaratorlist(_p?: number): InitdeclaratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitdeclaratorlistContext = new InitdeclaratorlistContext(this._ctx, _parentState);
		let _prevctx: InitdeclaratorlistContext = _localctx;
		let _startState: number = 228;
		this.enterRecursionRule(_localctx, 228, CPP14Parser.RULE_initdeclaratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1640;
			this.initdeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1647;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitdeclaratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_initdeclaratorlist);
					this.state = 1642;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1643;
					this.match(CPP14Parser.Comma);
					this.state = 1644;
					this.initdeclarator();
					}
					}
				}
				this.state = 1649;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
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
	public initdeclarator(): InitdeclaratorContext {
		let _localctx: InitdeclaratorContext = new InitdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, CPP14Parser.RULE_initdeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1650;
			this.declarator();
			this.state = 1652;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1651;
				this.initializer();
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, CPP14Parser.RULE_declarator);
		try {
			this.state = 1659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1654;
				this.ptrdeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1655;
				this.noptrdeclarator(0);
				this.state = 1656;
				this.parametersandqualifiers();
				this.state = 1657;
				this.trailingreturntype();
				}
				break;
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
	public ptrdeclarator(): PtrdeclaratorContext {
		let _localctx: PtrdeclaratorContext = new PtrdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CPP14Parser.RULE_ptrdeclarator);
		try {
			this.state = 1665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1661;
				this.noptrdeclarator(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1662;
				this.ptroperator();
				this.state = 1663;
				this.ptrdeclarator();
				}
				break;
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

	public noptrdeclarator(): NoptrdeclaratorContext;
	public noptrdeclarator(_p: number): NoptrdeclaratorContext;
	// @RuleVersion(0)
	public noptrdeclarator(_p?: number): NoptrdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrdeclaratorContext = new NoptrdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrdeclaratorContext = _localctx;
		let _startState: number = 236;
		this.enterRecursionRule(_localctx, 236, CPP14Parser.RULE_noptrdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				{
				this.state = 1668;
				this.declaratorid();
				this.state = 1670;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
				case 1:
					{
					this.state = 1669;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftParen:
				{
				this.state = 1672;
				this.match(CPP14Parser.LeftParen);
				this.state = 1673;
				this.ptrdeclarator();
				this.state = 1674;
				this.match(CPP14Parser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1691;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1689;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
						this.state = 1678;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1679;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
						this.state = 1680;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1681;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1683;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
							{
							this.state = 1682;
							this.constantexpression();
							}
						}

						this.state = 1685;
						this.match(CPP14Parser.RightBracket);
						this.state = 1687;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
						case 1:
							{
							this.state = 1686;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1693;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
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
	public parametersandqualifiers(): ParametersandqualifiersContext {
		let _localctx: ParametersandqualifiersContext = new ParametersandqualifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CPP14Parser.RULE_parametersandqualifiers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1694;
			this.match(CPP14Parser.LeftParen);
			this.state = 1695;
			this.parameterdeclarationclause();
			this.state = 1696;
			this.match(CPP14Parser.RightParen);
			this.state = 1698;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1697;
				this.cvqualifierseq();
				}
				break;
			}
			this.state = 1701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1700;
				this.refqualifier();
				}
				break;
			}
			this.state = 1704;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1703;
				this.exceptionspecification();
				}
				break;
			}
			this.state = 1707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1706;
				this.attributespecifierseq(0);
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
	public trailingreturntype(): TrailingreturntypeContext {
		let _localctx: TrailingreturntypeContext = new TrailingreturntypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CPP14Parser.RULE_trailingreturntype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1709;
			this.match(CPP14Parser.Arrow);
			this.state = 1710;
			this.trailingtypespecifierseq();
			this.state = 1712;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				{
				this.state = 1711;
				this.abstractdeclarator();
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
	public ptroperator(): PtroperatorContext {
		let _localctx: PtroperatorContext = new PtroperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, CPP14Parser.RULE_ptroperator);
		try {
			this.state = 1737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Star:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1714;
				this.match(CPP14Parser.Star);
				this.state = 1716;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
				case 1:
					{
					this.state = 1715;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 1719;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1718;
					this.cvqualifierseq();
					}
					break;
				}
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1721;
				this.match(CPP14Parser.And);
				this.state = 1723;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
				case 1:
					{
					this.state = 1722;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.AndAnd:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1725;
				this.match(CPP14Parser.AndAnd);
				this.state = 1727;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
				case 1:
					{
					this.state = 1726;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1729;
				this.nestednamespecifier(0);
				this.state = 1730;
				this.match(CPP14Parser.Star);
				this.state = 1732;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					this.state = 1731;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 1735;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1734;
					this.cvqualifierseq();
					}
					break;
				}
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
	public cvqualifierseq(): CvqualifierseqContext {
		let _localctx: CvqualifierseqContext = new CvqualifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CPP14Parser.RULE_cvqualifierseq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1739;
			this.cvqualifier();
			this.state = 1741;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				{
				this.state = 1740;
				this.cvqualifierseq();
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
	public cvqualifier(): CvqualifierContext {
		let _localctx: CvqualifierContext = new CvqualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CPP14Parser.RULE_cvqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1743;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Const || _la === CPP14Parser.Volatile)) {
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
	public refqualifier(): RefqualifierContext {
		let _localctx: RefqualifierContext = new RefqualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CPP14Parser.RULE_refqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1745;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.And || _la === CPP14Parser.AndAnd)) {
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
	public declaratorid(): DeclaratoridContext {
		let _localctx: DeclaratoridContext = new DeclaratoridContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CPP14Parser.RULE_declaratorid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1747;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1750;
			this.idexpression();
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
	public typeid(): TypeidContext {
		let _localctx: TypeidContext = new TypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, CPP14Parser.RULE_typeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1752;
			this.typespecifierseq();
			this.state = 1754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				this.state = 1753;
				this.abstractdeclarator();
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
	public abstractdeclarator(): AbstractdeclaratorContext {
		let _localctx: AbstractdeclaratorContext = new AbstractdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, CPP14Parser.RULE_abstractdeclarator);
		try {
			this.state = 1764;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1756;
				this.ptrabstractdeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1758;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1757;
					this.noptrabstractdeclarator(0);
					}
					break;
				}
				this.state = 1760;
				this.parametersandqualifiers();
				this.state = 1761;
				this.trailingreturntype();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1763;
				this.abstractpackdeclarator();
				}
				break;
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
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext {
		let _localctx: PtrabstractdeclaratorContext = new PtrabstractdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, CPP14Parser.RULE_ptrabstractdeclarator);
		try {
			this.state = 1771;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1766;
				this.noptrabstractdeclarator(0);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1767;
				this.ptroperator();
				this.state = 1769;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
				case 1:
					{
					this.state = 1768;
					this.ptrabstractdeclarator();
					}
					break;
				}
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

	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext;
	public noptrabstractdeclarator(_p: number): NoptrabstractdeclaratorContext;
	// @RuleVersion(0)
	public noptrabstractdeclarator(_p?: number): NoptrabstractdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrabstractdeclaratorContext = new NoptrabstractdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrabstractdeclaratorContext = _localctx;
		let _startState: number = 258;
		this.enterRecursionRule(_localctx, 258, CPP14Parser.RULE_noptrabstractdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				{
				this.state = 1774;
				this.parametersandqualifiers();
				}
				break;

			case 2:
				{
				this.state = 1775;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 1776;
					this.constantexpression();
					}
				}

				this.state = 1779;
				this.match(CPP14Parser.RightBracket);
				this.state = 1781;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
				case 1:
					{
					this.state = 1780;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 1783;
				this.match(CPP14Parser.LeftParen);
				this.state = 1784;
				this.ptrabstractdeclarator();
				this.state = 1785;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1802;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1800;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
						this.state = 1789;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 1790;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
						this.state = 1791;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1792;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1794;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
							{
							this.state = 1793;
							this.constantexpression();
							}
						}

						this.state = 1796;
						this.match(CPP14Parser.RightBracket);
						this.state = 1798;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
						case 1:
							{
							this.state = 1797;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1804;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
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
	public abstractpackdeclarator(): AbstractpackdeclaratorContext {
		let _localctx: AbstractpackdeclaratorContext = new AbstractpackdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CPP14Parser.RULE_abstractpackdeclarator);
		try {
			this.state = 1809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Ellipsis:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1805;
				this.noptrabstractpackdeclarator(0);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1806;
				this.ptroperator();
				this.state = 1807;
				this.abstractpackdeclarator();
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

	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext;
	public noptrabstractpackdeclarator(_p: number): NoptrabstractpackdeclaratorContext;
	// @RuleVersion(0)
	public noptrabstractpackdeclarator(_p?: number): NoptrabstractpackdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrabstractpackdeclaratorContext = new NoptrabstractpackdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrabstractpackdeclaratorContext = _localctx;
		let _startState: number = 262;
		this.enterRecursionRule(_localctx, 262, CPP14Parser.RULE_noptrabstractpackdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1812;
			this.match(CPP14Parser.Ellipsis);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1827;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1825;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
						this.state = 1814;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1815;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
						this.state = 1816;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1817;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1819;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
							{
							this.state = 1818;
							this.constantexpression();
							}
						}

						this.state = 1821;
						this.match(CPP14Parser.RightBracket);
						this.state = 1823;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
						case 1:
							{
							this.state = 1822;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1829;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
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
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		let _localctx: ParameterdeclarationclauseContext = new ParameterdeclarationclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CPP14Parser.RULE_parameterdeclarationclause);
		let _la: number;
		try {
			this.state = 1840;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftBracket - 67)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 1830;
					this.parameterdeclarationlist(0);
					}
				}

				this.state = 1834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1833;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1836;
				this.parameterdeclarationlist(0);
				this.state = 1837;
				this.match(CPP14Parser.Comma);
				this.state = 1838;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
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

	public parameterdeclarationlist(): ParameterdeclarationlistContext;
	public parameterdeclarationlist(_p: number): ParameterdeclarationlistContext;
	// @RuleVersion(0)
	public parameterdeclarationlist(_p?: number): ParameterdeclarationlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ParameterdeclarationlistContext = new ParameterdeclarationlistContext(this._ctx, _parentState);
		let _prevctx: ParameterdeclarationlistContext = _localctx;
		let _startState: number = 266;
		this.enterRecursionRule(_localctx, 266, CPP14Parser.RULE_parameterdeclarationlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1843;
			this.parameterdeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1850;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ParameterdeclarationlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_parameterdeclarationlist);
					this.state = 1845;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1846;
					this.match(CPP14Parser.Comma);
					this.state = 1847;
					this.parameterdeclaration();
					}
					}
				}
				this.state = 1852;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
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
	public parameterdeclaration(): ParameterdeclarationContext {
		let _localctx: ParameterdeclarationContext = new ParameterdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, CPP14Parser.RULE_parameterdeclaration);
		let _la: number;
		try {
			this.state = 1884;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1854;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1853;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1856;
				this.declspecifierseq();
				this.state = 1857;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1859;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1862;
				this.declspecifierseq();
				this.state = 1863;
				this.declarator();
				this.state = 1864;
				this.match(CPP14Parser.Assign);
				this.state = 1865;
				this.initializerclause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1867;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1870;
				this.declspecifierseq();
				this.state = 1872;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1871;
					this.abstractdeclarator();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1874;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1877;
				this.declspecifierseq();
				this.state = 1879;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.LeftBracket - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 1878;
					this.abstractdeclarator();
					}
				}

				this.state = 1881;
				this.match(CPP14Parser.Assign);
				this.state = 1882;
				this.initializerclause();
				}
				break;
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
	public functiondefinition(): FunctiondefinitionContext {
		let _localctx: FunctiondefinitionContext = new FunctiondefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CPP14Parser.RULE_functiondefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1886;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1890;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				{
				this.state = 1889;
				this.declspecifierseq();
				}
				break;
			}
			this.state = 1892;
			this.declarator();
			this.state = 1894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Final || _la === CPP14Parser.Override) {
				{
				this.state = 1893;
				this.virtspecifierseq(0);
				}
			}

			this.state = 1896;
			this.functionbody();
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
	public functionbody(): FunctionbodyContext {
		let _localctx: FunctionbodyContext = new FunctionbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CPP14Parser.RULE_functionbody);
		let _la: number;
		try {
			this.state = 1909;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1898;
					this.ctorinitializer();
					}
				}

				this.state = 1901;
				this.compoundstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1902;
				this.functiontryblock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1903;
				this.match(CPP14Parser.Assign);
				this.state = 1904;
				this.match(CPP14Parser.Default);
				this.state = 1905;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1906;
				this.match(CPP14Parser.Assign);
				this.state = 1907;
				this.match(CPP14Parser.Delete);
				this.state = 1908;
				this.match(CPP14Parser.Semi);
				}
				break;
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
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CPP14Parser.RULE_initializer);
		try {
			this.state = 1916;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1911;
				this.braceorequalinitializer();
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1912;
				this.match(CPP14Parser.LeftParen);
				this.state = 1913;
				this.expressionlist();
				this.state = 1914;
				this.match(CPP14Parser.RightParen);
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
	public braceorequalinitializer(): BraceorequalinitializerContext {
		let _localctx: BraceorequalinitializerContext = new BraceorequalinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CPP14Parser.RULE_braceorequalinitializer);
		try {
			this.state = 1921;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1918;
				this.match(CPP14Parser.Assign);
				this.state = 1919;
				this.initializerclause();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1920;
				this.bracedinitlist();
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
	public initializerclause(): InitializerclauseContext {
		let _localctx: InitializerclauseContext = new InitializerclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CPP14Parser.RULE_initializerclause);
		try {
			this.state = 1925;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Alignof:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Decltype:
			case CPP14Parser.Delete:
			case CPP14Parser.Double:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.False:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Nullptr:
			case CPP14Parser.Operator:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static_cast:
			case CPP14Parser.This:
			case CPP14Parser.Throw:
			case CPP14Parser.True:
			case CPP14Parser.Typeid:
			case CPP14Parser.Typename:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.Not:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1923;
				this.assignmentexpression();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1924;
				this.bracedinitlist();
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

	public initializerlist(): InitializerlistContext;
	public initializerlist(_p: number): InitializerlistContext;
	// @RuleVersion(0)
	public initializerlist(_p?: number): InitializerlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitializerlistContext = new InitializerlistContext(this._ctx, _parentState);
		let _prevctx: InitializerlistContext = _localctx;
		let _startState: number = 280;
		this.enterRecursionRule(_localctx, 280, CPP14Parser.RULE_initializerlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1928;
			this.initializerclause();
			this.state = 1930;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				this.state = 1929;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1940;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_initializerlist);
					this.state = 1932;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1933;
					this.match(CPP14Parser.Comma);
					this.state = 1934;
					this.initializerclause();
					this.state = 1936;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
					case 1:
						{
						this.state = 1935;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 1942;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
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
	public bracedinitlist(): BracedinitlistContext {
		let _localctx: BracedinitlistContext = new BracedinitlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CPP14Parser.RULE_bracedinitlist);
		let _la: number;
		try {
			this.state = 1952;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1943;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1944;
				this.initializerlist(0);
				this.state = 1946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 1945;
					this.match(CPP14Parser.Comma);
					}
				}

				this.state = 1948;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1950;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1951;
				this.match(CPP14Parser.RightBrace);
				}
				break;
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
	public classname(): ClassnameContext {
		let _localctx: ClassnameContext = new ClassnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, CPP14Parser.RULE_classname);
		try {
			this.state = 1956;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1954;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1955;
				this.simpletemplateid();
				}
				break;
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
	public classspecifier(): ClassspecifierContext {
		let _localctx: ClassspecifierContext = new ClassspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CPP14Parser.RULE_classspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1958;
			this.classhead();
			this.state = 1959;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Colon - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
				{
				this.state = 1960;
				this.memberspecification();
				}
			}

			this.state = 1963;
			this.match(CPP14Parser.RightBrace);
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
	public classhead(): ClassheadContext {
		let _localctx: ClassheadContext = new ClassheadContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CPP14Parser.RULE_classhead);
		let _la: number;
		try {
			this.state = 1983;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1965;
				this.classkey();
				this.state = 1967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1966;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1969;
				this.classheadname();
				this.state = 1971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Final) {
					{
					this.state = 1970;
					this.classvirtspecifier();
					}
				}

				this.state = 1974;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1973;
					this.baseclause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1976;
				this.classkey();
				this.state = 1978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1977;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1980;
					this.baseclause();
					}
				}

				}
				break;
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
	public classheadname(): ClassheadnameContext {
		let _localctx: ClassheadnameContext = new ClassheadnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CPP14Parser.RULE_classheadname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 1985;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 1988;
			this.classname();
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
	public classvirtspecifier(): ClassvirtspecifierContext {
		let _localctx: ClassvirtspecifierContext = new ClassvirtspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, CPP14Parser.RULE_classvirtspecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1990;
			this.match(CPP14Parser.Final);
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
	public classkey(): ClasskeyContext {
		let _localctx: ClasskeyContext = new ClasskeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CPP14Parser.RULE_classkey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1992;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Class || _la === CPP14Parser.Struct || _la === CPP14Parser.Union)) {
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
	public memberspecification(): MemberspecificationContext {
		let _localctx: MemberspecificationContext = new MemberspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CPP14Parser.RULE_memberspecification);
		let _la: number;
		try {
			this.state = 2003;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Alignas:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Float:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Operator:
			case CPP14Parser.Register:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Static:
			case CPP14Parser.Static_assert:
			case CPP14Parser.Struct:
			case CPP14Parser.Template:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typename:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Using:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Tilde:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Colon:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1994;
				this.memberdeclaration();
				this.state = 1996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Colon - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 1995;
					this.memberspecification();
					}
				}

				}
				break;
			case CPP14Parser.Private:
			case CPP14Parser.Protected:
			case CPP14Parser.Public:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1998;
				this.accessspecifier();
				this.state = 1999;
				this.match(CPP14Parser.Colon);
				this.state = 2001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.Explicit) | (1 << CPP14Parser.Extern))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.Template - 32)) | (1 << (CPP14Parser.Thread_local - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CPP14Parser.Typedef - 67)) | (1 << (CPP14Parser.Typename - 67)) | (1 << (CPP14Parser.Union - 67)) | (1 << (CPP14Parser.Unsigned - 67)) | (1 << (CPP14Parser.Using - 67)) | (1 << (CPP14Parser.Virtual - 67)) | (1 << (CPP14Parser.Void - 67)) | (1 << (CPP14Parser.Volatile - 67)) | (1 << (CPP14Parser.Wchar - 67)) | (1 << (CPP14Parser.LeftParen - 67)) | (1 << (CPP14Parser.LeftBracket - 67)) | (1 << (CPP14Parser.Star - 67)) | (1 << (CPP14Parser.And - 67)) | (1 << (CPP14Parser.Tilde - 67)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Colon - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Semi - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 2000;
					this.memberspecification();
					}
				}

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
	public memberdeclaration(): MemberdeclarationContext {
		let _localctx: MemberdeclarationContext = new MemberdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CPP14Parser.RULE_memberdeclaration);
		let _la: number;
		try {
			this.state = 2021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2006;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 2005;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 2009;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 2008;
					this.declspecifierseq();
					}
					break;
				}
				this.state = 2012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.LeftBracket - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)) | (1 << (CPP14Parser.Tilde - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Colon - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 2011;
					this.memberdeclaratorlist(0);
					}
				}

				this.state = 2014;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2015;
				this.functiondefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2016;
				this.usingdeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2017;
				this.static_assertdeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2018;
				this.templatedeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2019;
				this.aliasdeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2020;
				this.emptydeclaration();
				}
				break;
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

	public memberdeclaratorlist(): MemberdeclaratorlistContext;
	public memberdeclaratorlist(_p: number): MemberdeclaratorlistContext;
	// @RuleVersion(0)
	public memberdeclaratorlist(_p?: number): MemberdeclaratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MemberdeclaratorlistContext = new MemberdeclaratorlistContext(this._ctx, _parentState);
		let _prevctx: MemberdeclaratorlistContext = _localctx;
		let _startState: number = 300;
		this.enterRecursionRule(_localctx, 300, CPP14Parser.RULE_memberdeclaratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2024;
			this.memberdeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2031;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new MemberdeclaratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_memberdeclaratorlist);
					this.state = 2026;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2027;
					this.match(CPP14Parser.Comma);
					this.state = 2028;
					this.memberdeclarator();
					}
					}
				}
				this.state = 2033;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
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
	public memberdeclarator(): MemberdeclaratorContext {
		let _localctx: MemberdeclaratorContext = new MemberdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CPP14Parser.RULE_memberdeclarator);
		let _la: number;
		try {
			this.state = 2053;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2034;
				this.declarator();
				this.state = 2036;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
				case 1:
					{
					this.state = 2035;
					this.virtspecifierseq(0);
					}
					break;
				}
				this.state = 2039;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
				case 1:
					{
					this.state = 2038;
					this.purespecifier();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2041;
				this.declarator();
				this.state = 2043;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 2042;
					this.braceorequalinitializer();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 2045;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2049;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2048;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2051;
				this.match(CPP14Parser.Colon);
				this.state = 2052;
				this.constantexpression();
				}
				break;
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

	public virtspecifierseq(): VirtspecifierseqContext;
	public virtspecifierseq(_p: number): VirtspecifierseqContext;
	// @RuleVersion(0)
	public virtspecifierseq(_p?: number): VirtspecifierseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: VirtspecifierseqContext = new VirtspecifierseqContext(this._ctx, _parentState);
		let _prevctx: VirtspecifierseqContext = _localctx;
		let _startState: number = 304;
		this.enterRecursionRule(_localctx, 304, CPP14Parser.RULE_virtspecifierseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2056;
			this.virtspecifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2062;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new VirtspecifierseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_virtspecifierseq);
					this.state = 2058;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2059;
					this.virtspecifier();
					}
					}
				}
				this.state = 2064;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
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
	public virtspecifier(): VirtspecifierContext {
		let _localctx: VirtspecifierContext = new VirtspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CPP14Parser.RULE_virtspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2065;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Final || _la === CPP14Parser.Override)) {
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
	public purespecifier(): PurespecifierContext {
		let _localctx: PurespecifierContext = new PurespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CPP14Parser.RULE_purespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2067;
			this.match(CPP14Parser.Assign);
			this.state = 2068;
			_localctx._val = this.match(CPP14Parser.Octalliteral);
			if((_localctx._val != null ? _localctx._val.text : undefined) != "0") throw new InputMismatchException(this);
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
	public baseclause(): BaseclauseContext {
		let _localctx: BaseclauseContext = new BaseclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CPP14Parser.RULE_baseclause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2071;
			this.match(CPP14Parser.Colon);
			this.state = 2072;
			this.basespecifierlist(0);
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

	public basespecifierlist(): BasespecifierlistContext;
	public basespecifierlist(_p: number): BasespecifierlistContext;
	// @RuleVersion(0)
	public basespecifierlist(_p?: number): BasespecifierlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BasespecifierlistContext = new BasespecifierlistContext(this._ctx, _parentState);
		let _prevctx: BasespecifierlistContext = _localctx;
		let _startState: number = 312;
		this.enterRecursionRule(_localctx, 312, CPP14Parser.RULE_basespecifierlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2075;
			this.basespecifier();
			this.state = 2077;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				this.state = 2076;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2087;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BasespecifierlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_basespecifierlist);
					this.state = 2079;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2080;
					this.match(CPP14Parser.Comma);
					this.state = 2081;
					this.basespecifier();
					this.state = 2083;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
					case 1:
						{
						this.state = 2082;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 2089;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
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
	public basespecifier(): BasespecifierContext {
		let _localctx: BasespecifierContext = new BasespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CPP14Parser.RULE_basespecifier);
		let _la: number;
		try {
			this.state = 2111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 265, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2091;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2090;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2093;
				this.basetypespecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2094;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2097;
				this.match(CPP14Parser.Virtual);
				this.state = 2099;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CPP14Parser.Private - 47)) | (1 << (CPP14Parser.Protected - 47)) | (1 << (CPP14Parser.Public - 47)))) !== 0)) {
					{
					this.state = 2098;
					this.accessspecifier();
					}
				}

				this.state = 2101;
				this.basetypespecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2102;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2105;
				this.accessspecifier();
				this.state = 2107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Virtual) {
					{
					this.state = 2106;
					this.match(CPP14Parser.Virtual);
					}
				}

				this.state = 2109;
				this.basetypespecifier();
				}
				break;
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
	public classordecltype(): ClassordecltypeContext {
		let _localctx: ClassordecltypeContext = new ClassordecltypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CPP14Parser.RULE_classordecltype);
		try {
			this.state = 2118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2114;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
				case 1:
					{
					this.state = 2113;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 2116;
				this.classname();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2117;
				this.decltypespecifier();
				}
				break;
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
	public basetypespecifier(): BasetypespecifierContext {
		let _localctx: BasetypespecifierContext = new BasetypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, CPP14Parser.RULE_basetypespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2120;
			this.classordecltype();
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
	public accessspecifier(): AccessspecifierContext {
		let _localctx: AccessspecifierContext = new AccessspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CPP14Parser.RULE_accessspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2122;
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CPP14Parser.Private - 47)) | (1 << (CPP14Parser.Protected - 47)) | (1 << (CPP14Parser.Public - 47)))) !== 0))) {
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
	public conversionfunctionid(): ConversionfunctionidContext {
		let _localctx: ConversionfunctionidContext = new ConversionfunctionidContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, CPP14Parser.RULE_conversionfunctionid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2124;
			this.match(CPP14Parser.Operator);
			this.state = 2125;
			this.conversiontypeid();
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
	public conversiontypeid(): ConversiontypeidContext {
		let _localctx: ConversiontypeidContext = new ConversiontypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CPP14Parser.RULE_conversiontypeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2127;
			this.typespecifierseq();
			this.state = 2129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				{
				this.state = 2128;
				this.conversiondeclarator();
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
	public conversiondeclarator(): ConversiondeclaratorContext {
		let _localctx: ConversiondeclaratorContext = new ConversiondeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, CPP14Parser.RULE_conversiondeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2131;
			this.ptroperator();
			this.state = 2133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
			case 1:
				{
				this.state = 2132;
				this.conversiondeclarator();
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
	public ctorinitializer(): CtorinitializerContext {
		let _localctx: CtorinitializerContext = new CtorinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CPP14Parser.RULE_ctorinitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2135;
			this.match(CPP14Parser.Colon);
			this.state = 2136;
			this.meminitializerlist();
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
	public meminitializerlist(): MeminitializerlistContext {
		let _localctx: MeminitializerlistContext = new MeminitializerlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CPP14Parser.RULE_meminitializerlist);
		let _la: number;
		try {
			this.state = 2149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2138;
				this.meminitializer();
				this.state = 2140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 2139;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2142;
				this.meminitializer();
				this.state = 2144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 2143;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 2146;
				this.match(CPP14Parser.Comma);
				this.state = 2147;
				this.meminitializerlist();
				}
				break;
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
	public meminitializer(): MeminitializerContext {
		let _localctx: MeminitializerContext = new MeminitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CPP14Parser.RULE_meminitializer);
		let _la: number;
		try {
			this.state = 2161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2151;
				this.meminitializerid();
				this.state = 2152;
				this.match(CPP14Parser.LeftParen);
				this.state = 2154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid - 64)) | (1 << (CPP14Parser.Typename - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.And - 64)) | (1 << (CPP14Parser.Or - 64)) | (1 << (CPP14Parser.Tilde - 64)) | (1 << (CPP14Parser.Not - 64)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 2153;
					this.expressionlist();
					}
				}

				this.state = 2156;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2158;
				this.meminitializerid();
				this.state = 2159;
				this.bracedinitlist();
				}
				break;
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
	public meminitializerid(): MeminitializeridContext {
		let _localctx: MeminitializeridContext = new MeminitializeridContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CPP14Parser.RULE_meminitializerid);
		try {
			this.state = 2165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2163;
				this.classordecltype();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2164;
				this.match(CPP14Parser.Identifier);
				}
				break;
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
	public operatorfunctionid(): OperatorfunctionidContext {
		let _localctx: OperatorfunctionidContext = new OperatorfunctionidContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CPP14Parser.RULE_operatorfunctionid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2167;
			this.match(CPP14Parser.Operator);
			this.state = 2168;
			this.operator();
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
	public literaloperatorid(): LiteraloperatoridContext {
		let _localctx: LiteraloperatoridContext = new LiteraloperatoridContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CPP14Parser.RULE_literaloperatorid);
		try {
			this.state = 2175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2170;
				this.match(CPP14Parser.Operator);
				this.state = 2171;
				this.match(CPP14Parser.Stringliteral);
				this.state = 2172;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2173;
				this.match(CPP14Parser.Operator);
				this.state = 2174;
				this.match(CPP14Parser.Userdefinedstringliteral);
				}
				break;
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
	public templatedeclaration(): TemplatedeclarationContext {
		let _localctx: TemplatedeclarationContext = new TemplatedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CPP14Parser.RULE_templatedeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2177;
			this.match(CPP14Parser.Template);
			this.state = 2178;
			this.match(CPP14Parser.Less);
			this.state = 2179;
			this.templateparameterlist(0);
			this.state = 2180;
			this.match(CPP14Parser.Greater);
			this.state = 2181;
			this.declaration();
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

	public templateparameterlist(): TemplateparameterlistContext;
	public templateparameterlist(_p: number): TemplateparameterlistContext;
	// @RuleVersion(0)
	public templateparameterlist(_p?: number): TemplateparameterlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TemplateparameterlistContext = new TemplateparameterlistContext(this._ctx, _parentState);
		let _prevctx: TemplateparameterlistContext = _localctx;
		let _startState: number = 342;
		this.enterRecursionRule(_localctx, 342, CPP14Parser.RULE_templateparameterlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2184;
			this.templateparameter();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2191;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TemplateparameterlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_templateparameterlist);
					this.state = 2186;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2187;
					this.match(CPP14Parser.Comma);
					this.state = 2188;
					this.templateparameter();
					}
					}
				}
				this.state = 2193;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
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
	public templateparameter(): TemplateparameterContext {
		let _localctx: TemplateparameterContext = new TemplateparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CPP14Parser.RULE_templateparameter);
		try {
			this.state = 2196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2194;
				this.typeparameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2195;
				this.parameterdeclaration();
				}
				break;
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
	public typeparameter(): TypeparameterContext {
		let _localctx: TypeparameterContext = new TypeparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CPP14Parser.RULE_typeparameter);
		let _la: number;
		try {
			this.state = 2246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 288, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2198;
				this.match(CPP14Parser.Class);
				this.state = 2200;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 279, this._ctx) ) {
				case 1:
					{
					this.state = 2199;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2203;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
				case 1:
					{
					this.state = 2202;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2205;
				this.match(CPP14Parser.Class);
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 2206;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2209;
				this.match(CPP14Parser.Assign);
				this.state = 2210;
				this.typeid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2211;
				this.match(CPP14Parser.Typename);
				this.state = 2213;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
				case 1:
					{
					this.state = 2212;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2216;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
				case 1:
					{
					this.state = 2215;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2218;
				this.match(CPP14Parser.Typename);
				this.state = 2220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 2219;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2222;
				this.match(CPP14Parser.Assign);
				this.state = 2223;
				this.typeid();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2224;
				this.match(CPP14Parser.Template);
				this.state = 2225;
				this.match(CPP14Parser.Less);
				this.state = 2226;
				this.templateparameterlist(0);
				this.state = 2227;
				this.match(CPP14Parser.Greater);
				this.state = 2228;
				this.match(CPP14Parser.Class);
				this.state = 2230;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
				case 1:
					{
					this.state = 2229;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2233;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
				case 1:
					{
					this.state = 2232;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2235;
				this.match(CPP14Parser.Template);
				this.state = 2236;
				this.match(CPP14Parser.Less);
				this.state = 2237;
				this.templateparameterlist(0);
				this.state = 2238;
				this.match(CPP14Parser.Greater);
				this.state = 2239;
				this.match(CPP14Parser.Class);
				this.state = 2241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 2240;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2243;
				this.match(CPP14Parser.Assign);
				this.state = 2244;
				this.idexpression();
				}
				break;
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
	public simpletemplateid(): SimpletemplateidContext {
		let _localctx: SimpletemplateidContext = new SimpletemplateidContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CPP14Parser.RULE_simpletemplateid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2248;
			this.templatename();
			this.state = 2249;
			this.match(CPP14Parser.Less);
			this.state = 2251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
				{
				this.state = 2250;
				this.templateargumentlist(0);
				}
			}

			this.state = 2253;
			this.match(CPP14Parser.Greater);
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
	public templateid(): TemplateidContext {
		let _localctx: TemplateidContext = new TemplateidContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CPP14Parser.RULE_templateid);
		let _la: number;
		try {
			this.state = 2270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2255;
				this.simpletemplateid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2256;
				this.operatorfunctionid();
				this.state = 2257;
				this.match(CPP14Parser.Less);
				this.state = 2259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 2258;
					this.templateargumentlist(0);
					}
				}

				this.state = 2261;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2263;
				this.literaloperatorid();
				this.state = 2264;
				this.match(CPP14Parser.Less);
				this.state = 2266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Enum) | (1 << CPP14Parser.False))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static_cast - 32)) | (1 << (CPP14Parser.Struct - 32)) | (1 << (CPP14Parser.This - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.True - 65)) | (1 << (CPP14Parser.Typeid - 65)) | (1 << (CPP14Parser.Typename - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)) | (1 << (CPP14Parser.And - 65)) | (1 << (CPP14Parser.Or - 65)) | (1 << (CPP14Parser.Tilde - 65)) | (1 << (CPP14Parser.Not - 65)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (CPP14Parser.PlusPlus - 113)) | (1 << (CPP14Parser.MinusMinus - 113)) | (1 << (CPP14Parser.Doublecolon - 113)) | (1 << (CPP14Parser.Identifier - 113)) | (1 << (CPP14Parser.Integerliteral - 113)) | (1 << (CPP14Parser.Characterliteral - 113)) | (1 << (CPP14Parser.Floatingliteral - 113)) | (1 << (CPP14Parser.Stringliteral - 113)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 113)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 113)) | (1 << (CPP14Parser.Userdefinedstringliteral - 113)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 113)))) !== 0)) {
					{
					this.state = 2265;
					this.templateargumentlist(0);
					}
				}

				this.state = 2268;
				this.match(CPP14Parser.Greater);
				}
				break;
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
	public templatename(): TemplatenameContext {
		let _localctx: TemplatenameContext = new TemplatenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CPP14Parser.RULE_templatename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2272;
			this.match(CPP14Parser.Identifier);
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

	public templateargumentlist(): TemplateargumentlistContext;
	public templateargumentlist(_p: number): TemplateargumentlistContext;
	// @RuleVersion(0)
	public templateargumentlist(_p?: number): TemplateargumentlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TemplateargumentlistContext = new TemplateargumentlistContext(this._ctx, _parentState);
		let _prevctx: TemplateargumentlistContext = _localctx;
		let _startState: number = 354;
		this.enterRecursionRule(_localctx, 354, CPP14Parser.RULE_templateargumentlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2275;
			this.templateargument();
			this.state = 2277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
			case 1:
				{
				this.state = 2276;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2287;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TemplateargumentlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_templateargumentlist);
					this.state = 2279;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2280;
					this.match(CPP14Parser.Comma);
					this.state = 2281;
					this.templateargument();
					this.state = 2283;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
					case 1:
						{
						this.state = 2282;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 2289;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
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
	public templateargument(): TemplateargumentContext {
		let _localctx: TemplateargumentContext = new TemplateargumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CPP14Parser.RULE_templateargument);
		try {
			this.state = 2293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2290;
				this.typeid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2291;
				this.constantexpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2292;
				this.idexpression();
				}
				break;
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
	public typenamespecifier(): TypenamespecifierContext {
		let _localctx: TypenamespecifierContext = new TypenamespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CPP14Parser.RULE_typenamespecifier);
		let _la: number;
		try {
			this.state = 2306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2295;
				this.match(CPP14Parser.Typename);
				this.state = 2296;
				this.nestednamespecifier(0);
				this.state = 2297;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2299;
				this.match(CPP14Parser.Typename);
				this.state = 2300;
				this.nestednamespecifier(0);
				this.state = 2302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Template) {
					{
					this.state = 2301;
					this.match(CPP14Parser.Template);
					}
				}

				this.state = 2304;
				this.simpletemplateid();
				}
				break;
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
	public explicitinstantiation(): ExplicitinstantiationContext {
		let _localctx: ExplicitinstantiationContext = new ExplicitinstantiationContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CPP14Parser.RULE_explicitinstantiation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Extern) {
				{
				this.state = 2308;
				this.match(CPP14Parser.Extern);
				}
			}

			this.state = 2311;
			this.match(CPP14Parser.Template);
			this.state = 2312;
			this.declaration();
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
	public explicitspecialization(): ExplicitspecializationContext {
		let _localctx: ExplicitspecializationContext = new ExplicitspecializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CPP14Parser.RULE_explicitspecialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2314;
			this.match(CPP14Parser.Template);
			this.state = 2315;
			this.match(CPP14Parser.Less);
			this.state = 2316;
			this.match(CPP14Parser.Greater);
			this.state = 2317;
			this.declaration();
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
	public tryblock(): TryblockContext {
		let _localctx: TryblockContext = new TryblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CPP14Parser.RULE_tryblock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2319;
			this.match(CPP14Parser.Try);
			this.state = 2320;
			this.compoundstatement();
			this.state = 2321;
			this.handlerseq();
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
	public functiontryblock(): FunctiontryblockContext {
		let _localctx: FunctiontryblockContext = new FunctiontryblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CPP14Parser.RULE_functiontryblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2323;
			this.match(CPP14Parser.Try);
			this.state = 2325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 2324;
				this.ctorinitializer();
				}
			}

			this.state = 2327;
			this.compoundstatement();
			this.state = 2328;
			this.handlerseq();
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
	public handlerseq(): HandlerseqContext {
		let _localctx: HandlerseqContext = new HandlerseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CPP14Parser.RULE_handlerseq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2330;
			this.handler();
			this.state = 2332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
			case 1:
				{
				this.state = 2331;
				this.handlerseq();
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
	public handler(): HandlerContext {
		let _localctx: HandlerContext = new HandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, CPP14Parser.RULE_handler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2334;
			this.match(CPP14Parser.Catch);
			this.state = 2335;
			this.match(CPP14Parser.LeftParen);
			this.state = 2336;
			this.exceptiondeclaration();
			this.state = 2337;
			this.match(CPP14Parser.RightParen);
			this.state = 2338;
			this.compoundstatement();
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
	public exceptiondeclaration(): ExceptiondeclarationContext {
		let _localctx: ExceptiondeclarationContext = new ExceptiondeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, CPP14Parser.RULE_exceptiondeclaration);
		let _la: number;
		try {
			this.state = 2354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2340;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2343;
				this.typespecifierseq();
				this.state = 2344;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2346;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2349;
				this.typespecifierseq();
				this.state = 2351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CPP14Parser.LeftParen - 78)) | (1 << (CPP14Parser.LeftBracket - 78)) | (1 << (CPP14Parser.Star - 78)) | (1 << (CPP14Parser.And - 78)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (CPP14Parser.AndAnd - 111)) | (1 << (CPP14Parser.Doublecolon - 111)) | (1 << (CPP14Parser.Ellipsis - 111)) | (1 << (CPP14Parser.Identifier - 111)))) !== 0)) {
					{
					this.state = 2350;
					this.abstractdeclarator();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2353;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
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
	public throwexpression(): ThrowexpressionContext {
		let _localctx: ThrowexpressionContext = new ThrowexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CPP14Parser.RULE_throwexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2356;
			this.match(CPP14Parser.Throw);
			this.state = 2358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 306, this._ctx) ) {
			case 1:
				{
				this.state = 2357;
				this.assignmentexpression();
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
	public exceptionspecification(): ExceptionspecificationContext {
		let _localctx: ExceptionspecificationContext = new ExceptionspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CPP14Parser.RULE_exceptionspecification);
		try {
			this.state = 2362;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Throw:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2360;
				this.dynamicexceptionspecification();
				}
				break;
			case CPP14Parser.Noexcept:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2361;
				this.noexceptspecification();
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
	public dynamicexceptionspecification(): DynamicexceptionspecificationContext {
		let _localctx: DynamicexceptionspecificationContext = new DynamicexceptionspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, CPP14Parser.RULE_dynamicexceptionspecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2364;
			this.match(CPP14Parser.Throw);
			this.state = 2365;
			this.match(CPP14Parser.LeftParen);
			this.state = 2367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Enum))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Struct - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (CPP14Parser.Typename - 69)) | (1 << (CPP14Parser.Union - 69)) | (1 << (CPP14Parser.Unsigned - 69)) | (1 << (CPP14Parser.Void - 69)) | (1 << (CPP14Parser.Volatile - 69)) | (1 << (CPP14Parser.Wchar - 69)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 2366;
				this.typeidlist(0);
				}
			}

			this.state = 2369;
			this.match(CPP14Parser.RightParen);
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

	public typeidlist(): TypeidlistContext;
	public typeidlist(_p: number): TypeidlistContext;
	// @RuleVersion(0)
	public typeidlist(_p?: number): TypeidlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeidlistContext = new TypeidlistContext(this._ctx, _parentState);
		let _prevctx: TypeidlistContext = _localctx;
		let _startState: number = 380;
		this.enterRecursionRule(_localctx, 380, CPP14Parser.RULE_typeidlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2372;
			this.typeid();
			this.state = 2374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
			case 1:
				{
				this.state = 2373;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2384;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeidlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_typeidlist);
					this.state = 2376;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2377;
					this.match(CPP14Parser.Comma);
					this.state = 2378;
					this.typeid();
					this.state = 2380;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 310, this._ctx) ) {
					case 1:
						{
						this.state = 2379;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 2386;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
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
	public noexceptspecification(): NoexceptspecificationContext {
		let _localctx: NoexceptspecificationContext = new NoexceptspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CPP14Parser.RULE_noexceptspecification);
		try {
			this.state = 2393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 312, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2387;
				this.match(CPP14Parser.Noexcept);
				this.state = 2388;
				this.match(CPP14Parser.LeftParen);
				this.state = 2389;
				this.constantexpression();
				this.state = 2390;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2392;
				this.match(CPP14Parser.Noexcept);
				}
				break;
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
	public rightShift(): RightShiftContext {
		let _localctx: RightShiftContext = new RightShiftContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, CPP14Parser.RULE_rightShift);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2395;
			this.match(CPP14Parser.Greater);
			this.state = 2396;
			this.match(CPP14Parser.Greater);
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
	public rightShiftAssign(): RightShiftAssignContext {
		let _localctx: RightShiftAssignContext = new RightShiftAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, CPP14Parser.RULE_rightShiftAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2398;
			this.match(CPP14Parser.Greater);
			this.state = 2399;
			this.match(CPP14Parser.Greater);
			this.state = 2400;
			this.match(CPP14Parser.Assign);
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, CPP14Parser.RULE_operator);
		try {
			this.state = 2450;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2402;
				this.match(CPP14Parser.New);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2403;
				this.match(CPP14Parser.Delete);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2404;
				this.match(CPP14Parser.New);
				this.state = 2405;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2406;
				this.match(CPP14Parser.RightBracket);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2407;
				this.match(CPP14Parser.Delete);
				this.state = 2408;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2409;
				this.match(CPP14Parser.RightBracket);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2410;
				this.match(CPP14Parser.Plus);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2411;
				this.match(CPP14Parser.Minus);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2412;
				this.match(CPP14Parser.Star);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2413;
				this.match(CPP14Parser.Div);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2414;
				this.match(CPP14Parser.Mod);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2415;
				this.match(CPP14Parser.Caret);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2416;
				this.match(CPP14Parser.And);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2417;
				this.match(CPP14Parser.Or);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2418;
				this.match(CPP14Parser.Tilde);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2419;
				this.match(CPP14Parser.Not);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2420;
				this.match(CPP14Parser.Assign);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2421;
				this.match(CPP14Parser.Less);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2422;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2423;
				this.match(CPP14Parser.PlusAssign);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2424;
				this.match(CPP14Parser.MinusAssign);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2425;
				this.match(CPP14Parser.StarAssign);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2426;
				this.match(CPP14Parser.DivAssign);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 2427;
				this.match(CPP14Parser.ModAssign);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 2428;
				this.match(CPP14Parser.XorAssign);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 2429;
				this.match(CPP14Parser.AndAssign);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 2430;
				this.match(CPP14Parser.OrAssign);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 2431;
				this.match(CPP14Parser.LeftShift);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 2432;
				this.rightShift();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 2433;
				this.rightShiftAssign();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 2434;
				this.match(CPP14Parser.LeftShiftAssign);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 2435;
				this.match(CPP14Parser.Equal);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 2436;
				this.match(CPP14Parser.NotEqual);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 2437;
				this.match(CPP14Parser.LessEqual);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 2438;
				this.match(CPP14Parser.GreaterEqual);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 2439;
				this.match(CPP14Parser.AndAnd);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 2440;
				this.match(CPP14Parser.OrOr);
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 2441;
				this.match(CPP14Parser.PlusPlus);
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 2442;
				this.match(CPP14Parser.MinusMinus);
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 2443;
				this.match(CPP14Parser.Comma);
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 2444;
				this.match(CPP14Parser.ArrowStar);
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 2445;
				this.match(CPP14Parser.Arrow);
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 2446;
				this.match(CPP14Parser.LeftParen);
				this.state = 2447;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 2448;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2449;
				this.match(CPP14Parser.RightBracket);
				}
				break;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, CPP14Parser.RULE_literal);
		try {
			this.state = 2459;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Integerliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2452;
				this.match(CPP14Parser.Integerliteral);
				}
				break;
			case CPP14Parser.Characterliteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2453;
				this.match(CPP14Parser.Characterliteral);
				}
				break;
			case CPP14Parser.Floatingliteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2454;
				this.match(CPP14Parser.Floatingliteral);
				}
				break;
			case CPP14Parser.Stringliteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2455;
				this.match(CPP14Parser.Stringliteral);
				}
				break;
			case CPP14Parser.False:
			case CPP14Parser.True:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2456;
				this.booleanliteral();
				}
				break;
			case CPP14Parser.Nullptr:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2457;
				this.pointerliteral();
				}
				break;
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2458;
				this.userdefinedliteral();
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
	public booleanliteral(): BooleanliteralContext {
		let _localctx: BooleanliteralContext = new BooleanliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, CPP14Parser.RULE_booleanliteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2461;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.False || _la === CPP14Parser.True)) {
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
	public pointerliteral(): PointerliteralContext {
		let _localctx: PointerliteralContext = new PointerliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, CPP14Parser.RULE_pointerliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2463;
			this.match(CPP14Parser.Nullptr);
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
	public userdefinedliteral(): UserdefinedliteralContext {
		let _localctx: UserdefinedliteralContext = new UserdefinedliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, CPP14Parser.RULE_userdefinedliteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2465;
			_la = this._input.LA(1);
			if (!(((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (CPP14Parser.Userdefinedintegerliteral - 135)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 135)) | (1 << (CPP14Parser.Userdefinedstringliteral - 135)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 135)))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.nestednamespecifier_sempred(_localctx as NestednamespecifierContext, predIndex);

		case 10:
			return this.capturelist_sempred(_localctx as CapturelistContext, predIndex);

		case 15:
			return this.postfixexpression_sempred(_localctx as PostfixexpressionContext, predIndex);

		case 24:
			return this.noptrnewdeclarator_sempred(_localctx as NoptrnewdeclaratorContext, predIndex);

		case 29:
			return this.pmexpression_sempred(_localctx as PmexpressionContext, predIndex);

		case 30:
			return this.multiplicativeexpression_sempred(_localctx as MultiplicativeexpressionContext, predIndex);

		case 31:
			return this.additiveexpression_sempred(_localctx as AdditiveexpressionContext, predIndex);

		case 32:
			return this.shiftexpression_sempred(_localctx as ShiftexpressionContext, predIndex);

		case 33:
			return this.relationalexpression_sempred(_localctx as RelationalexpressionContext, predIndex);

		case 34:
			return this.equalityexpression_sempred(_localctx as EqualityexpressionContext, predIndex);

		case 35:
			return this.andexpression_sempred(_localctx as AndexpressionContext, predIndex);

		case 36:
			return this.exclusiveorexpression_sempred(_localctx as ExclusiveorexpressionContext, predIndex);

		case 37:
			return this.inclusiveorexpression_sempred(_localctx as InclusiveorexpressionContext, predIndex);

		case 38:
			return this.logicalandexpression_sempred(_localctx as LogicalandexpressionContext, predIndex);

		case 39:
			return this.logicalorexpression_sempred(_localctx as LogicalorexpressionContext, predIndex);

		case 43:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 49:
			return this.statementseq_sempred(_localctx as StatementseqContext, predIndex);

		case 58:
			return this.declarationseq_sempred(_localctx as DeclarationseqContext, predIndex);

		case 85:
			return this.enumeratorlist_sempred(_localctx as EnumeratorlistContext, predIndex);

		case 103:
			return this.attributespecifierseq_sempred(_localctx as AttributespecifierseqContext, predIndex);

		case 106:
			return this.attributelist_sempred(_localctx as AttributelistContext, predIndex);

		case 112:
			return this.balancedtokenseq_sempred(_localctx as BalancedtokenseqContext, predIndex);

		case 114:
			return this.initdeclaratorlist_sempred(_localctx as InitdeclaratorlistContext, predIndex);

		case 118:
			return this.noptrdeclarator_sempred(_localctx as NoptrdeclaratorContext, predIndex);

		case 129:
			return this.noptrabstractdeclarator_sempred(_localctx as NoptrabstractdeclaratorContext, predIndex);

		case 131:
			return this.noptrabstractpackdeclarator_sempred(_localctx as NoptrabstractpackdeclaratorContext, predIndex);

		case 133:
			return this.parameterdeclarationlist_sempred(_localctx as ParameterdeclarationlistContext, predIndex);

		case 140:
			return this.initializerlist_sempred(_localctx as InitializerlistContext, predIndex);

		case 150:
			return this.memberdeclaratorlist_sempred(_localctx as MemberdeclaratorlistContext, predIndex);

		case 152:
			return this.virtspecifierseq_sempred(_localctx as VirtspecifierseqContext, predIndex);

		case 156:
			return this.basespecifierlist_sempred(_localctx as BasespecifierlistContext, predIndex);

		case 171:
			return this.templateparameterlist_sempred(_localctx as TemplateparameterlistContext, predIndex);

		case 177:
			return this.templateargumentlist_sempred(_localctx as TemplateargumentlistContext, predIndex);

		case 190:
			return this.typeidlist_sempred(_localctx as TypeidlistContext, predIndex);
		}
		return true;
	}
	private nestednamespecifier_sempred(_localctx: NestednamespecifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private capturelist_sempred(_localctx: CapturelistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfixexpression_sempred(_localctx: PostfixexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 19);

		case 4:
			return this.precpred(this._ctx, 18);

		case 5:
			return this.precpred(this._ctx, 17);

		case 6:
			return this.precpred(this._ctx, 12);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 10);

		case 9:
			return this.precpred(this._ctx, 9);

		case 10:
			return this.precpred(this._ctx, 8);

		case 11:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private noptrnewdeclarator_sempred(_localctx: NoptrnewdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private pmexpression_sempred(_localctx: PmexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeexpression_sempred(_localctx: MultiplicativeexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 3);

		case 16:
			return this.precpred(this._ctx, 2);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveexpression_sempred(_localctx: AdditiveexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 2);

		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftexpression_sempred(_localctx: ShiftexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 2);

		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalexpression_sempred(_localctx: RelationalexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 4);

		case 23:
			return this.precpred(this._ctx, 3);

		case 24:
			return this.precpred(this._ctx, 2);

		case 25:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityexpression_sempred(_localctx: EqualityexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.precpred(this._ctx, 2);

		case 27:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andexpression_sempred(_localctx: AndexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveorexpression_sempred(_localctx: ExclusiveorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveorexpression_sempred(_localctx: InclusiveorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalandexpression_sempred(_localctx: LogicalandexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalorexpression_sempred(_localctx: LogicalorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private statementseq_sempred(_localctx: StatementseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private declarationseq_sempred(_localctx: DeclarationseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private enumeratorlist_sempred(_localctx: EnumeratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private attributespecifierseq_sempred(_localctx: AttributespecifierseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 37:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private attributelist_sempred(_localctx: AttributelistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.precpred(this._ctx, 3);

		case 39:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private balancedtokenseq_sempred(_localctx: BalancedtokenseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 40:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initdeclaratorlist_sempred(_localctx: InitdeclaratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 41:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private noptrdeclarator_sempred(_localctx: NoptrdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 42:
			return this.precpred(this._ctx, 3);

		case 43:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private noptrabstractdeclarator_sempred(_localctx: NoptrabstractdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 44:
			return this.precpred(this._ctx, 5);

		case 45:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private noptrabstractpackdeclarator_sempred(_localctx: NoptrabstractpackdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.precpred(this._ctx, 3);

		case 47:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private parameterdeclarationlist_sempred(_localctx: ParameterdeclarationlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializerlist_sempred(_localctx: InitializerlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 49:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private memberdeclaratorlist_sempred(_localctx: MemberdeclaratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private virtspecifierseq_sempred(_localctx: VirtspecifierseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 51:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private basespecifierlist_sempred(_localctx: BasespecifierlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 52:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private templateparameterlist_sempred(_localctx: TemplateparameterlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 53:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private templateargumentlist_sempred(_localctx: TemplateargumentlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 54:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private typeidlist_sempred(_localctx: TypeidlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 55:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x90\u09A6\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x03\x02\x05\x02\u0192\n\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u019E\n\x03" +
		"\x03\x04\x03\x04\x05\x04\u01A2\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u01AD\n\x05\x03\x06\x03\x06" +
		"\x05\x06\u01B1\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01C0\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01C7\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07\u01CC\n\x07\f\x07\x0E\x07\u01CF\v\x07\x03\b\x03\b" +
		"\x05\b\u01D3\n\b\x03\b\x03\b\x03\t\x03\t\x05\t\u01D9\n\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01E3\n\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x05\f\u01EA\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u01F0\n\f\x07\f" +
		"\u01F2\n\f\f\f\x0E\f\u01F5\v\f\x03\r\x03\r\x05\r\u01F9\n\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u01FF\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u0206\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u020C" +
		"\n\x10\x03\x10\x05\x10\u020F\n\x10\x03\x10\x05\x10\u0212\n\x10\x03\x10" +
		"\x05\x10\u0215\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u021C" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0223\n\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0257\n\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0266\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\u026C\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0272\n\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x07\x11\u027F\n\x11\f\x11\x0E\x11\u0282\v\x11\x03\x12\x03" +
		"\x12\x03\x13\x05\x13\u0287\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\u0296\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u029C\n\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\u02BA\n\x14\x03\x15\x03\x15\x03\x16\x05\x16\u02BF\n\x16\x03\x16" +
		"\x03\x16\x05\x16\u02C3\n\x16\x03\x16\x03\x16\x05\x16\u02C7\n\x16\x03\x16" +
		"\x05\x16\u02CA\n\x16\x03\x16\x03\x16\x05\x16\u02CE\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u02D4\n\x16\x05\x16\u02D6\n\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u02DE\n\x18\x03\x19\x03\x19\x05" +
		"\x19\u02E2\n\x19\x03\x19\x05\x19\u02E5\n\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u02EC\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u02F3\n\x1A\x07\x1A\u02F5\n\x1A\f\x1A\x0E\x1A\u02F8\v\x1A\x03" +
		"\x1B\x03\x1B\x05\x1B\u02FC\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0300\n\x1B\x03" +
		"\x1C\x05\x1C\u0303\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0308\n\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u030E\n\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u031B\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x07\x1F\u0326\n\x1F\f\x1F\x0E\x1F\u0329\v\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x07 \u0337\n \f \x0E \u033A" +
		"\v \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x07!\u0345\n!\f!\x0E" +
		"!\u0348\v!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x07\"\u0354\n\"\f\"\x0E\"\u0357\v\"\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u0368\n#\f#\x0E#\u036B" +
		"\v#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u0376\n$\f$\x0E" +
		"$\u0379\v$\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0381\n%\f%\x0E%\u0384\v" +
		"%\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u038C\n&\f&\x0E&\u038F\v&\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x07\'\u0397\n\'\f\'\x0E\'\u039A\v\'\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x07(\u03A2\n(\f(\x0E(\u03A5\v(\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x07)\u03AD\n)\f)\x0E)\u03B0\v)\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x05*\u03B9\n*\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u03C1\n+\x03," +
		"\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u03CE\n,\x03-" +
		"\x03-\x03-\x03-\x03-\x03-\x07-\u03D6\n-\f-\x0E-\u03D9\v-\x03.\x03.\x03" +
		"/\x03/\x05/\u03DF\n/\x03/\x03/\x05/\u03E3\n/\x03/\x03/\x05/\u03E7\n/\x03" +
		"/\x03/\x05/\u03EB\n/\x03/\x03/\x05/\u03EF\n/\x03/\x03/\x03/\x05/\u03F4" +
		"\n/\x03/\x05/\u03F7\n/\x030\x050\u03FA\n0\x030\x030\x030\x030\x050\u0400" +
		"\n0\x030\x030\x030\x030\x030\x030\x050\u0408\n0\x030\x030\x030\x050\u040D" +
		"\n0\x031\x051\u0410\n1\x031\x031\x032\x032\x052\u0416\n2\x032\x032\x03" +
		"3\x033\x033\x033\x033\x073\u041F\n3\f3\x0E3\u0422\v3\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x054\u0438\n4\x035\x035\x055\u043C\n5\x035\x035\x035\x035" +
		"\x035\x035\x055\u0444\n5\x035\x035\x035\x035\x055\u044A\n5\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x056\u045E\n6\x036\x036\x056\u0462\n6\x036\x036\x036\x036\x036" +
		"\x036\x036\x036\x036\x036\x036\x056\u046F\n6\x037\x037\x057\u0473\n7\x03" +
		"8\x058\u0476\n8\x038\x038\x038\x039\x039\x059\u047D\n9\x03:\x03:\x03:" +
		"\x03:\x03:\x03:\x05:\u0485\n:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:" +
		"\x05:\u048F\n:\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x07<\u0498\n<\f<\x0E" +
		"<\u049B\v<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u04A6\n=" +
		"\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u04B0\n>\x03?\x03?\x03?" +
		"\x05?\u04B5\n?\x03?\x03?\x03?\x03?\x03@\x05@\u04BC\n@\x03@\x05@\u04BF" +
		"\n@\x03@\x03@\x03@\x05@\u04C4\n@\x03@\x03@\x03@\x05@\u04C9\n@\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03C\x03C\x03C\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x05D\u04DE\nD\x03E\x03E\x05E\u04E2\nE\x03E\x03E\x03E" +
		"\x05E\u04E7\nE\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03I\x05I\u04F2" +
		"\nI\x03J\x03J\x03J\x03J\x05J\u04F8\nJ\x03K\x03K\x05K\u04FC\nK\x03K\x03" +
		"K\x03K\x05K\u0501\nK\x03L\x03L\x05L\u0505\nL\x03L\x03L\x03L\x05L\u050A" +
		"\nL\x03M\x05M\u050D\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u0523\nM\x03" +
		"N\x03N\x03N\x03N\x05N\u0529\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x05O\u0534\nO\x03P\x03P\x05P\u0538\nP\x03P\x05P\u053B\nP\x03P\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0545\nP\x03P\x03P\x03P\x03P\x05" +
		"P\u054B\nP\x03P\x05P\u054E\nP\x03Q\x03Q\x03R\x03R\x03R\x05R\u0555\nR\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u055F\nR\x03S\x03S\x05S\u0563" +
		"\nS\x03S\x05S\u0566\nS\x03S\x05S\u0569\nS\x03S\x03S\x05S\u056D\nS\x03" +
		"S\x03S\x03S\x05S\u0572\nS\x05S\u0574\nS\x03T\x03T\x05T\u0578\nT\x03T\x03" +
		"T\x05T\u057C\nT\x03T\x03T\x03U\x03U\x03U\x03U\x03U\x05U\u0585\nU\x03V" +
		"\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x03W\x07W\u0590\nW\fW\x0EW\u0593\v" +
		"W\x03X\x03X\x03X\x03X\x03X\x05X\u059A\nX\x03Y\x03Y\x03Z\x03Z\x05Z\u05A0" +
		"\nZ\x03[\x03[\x03\\\x03\\\x05\\\u05A6\n\\\x03]\x03]\x05]\u05AA\n]\x03" +
		"^\x05^\u05AD\n^\x03^\x03^\x03^\x03^\x03^\x03^\x03_\x05_\u05B6\n_\x03_" +
		"\x03_\x03_\x03_\x03_\x03_\x03`\x05`\u05BF\n`\x03`\x03`\x03`\x03`\x03`" +
		"\x03a\x05a\u05C7\na\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03d\x05d" +
		"\u05D2\nd\x03d\x03d\x03e\x03e\x05e\u05D8\ne\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x05e\u05E3\ne\x03f\x05f\u05E6\nf\x03f\x03f\x03f\x05f" +
		"\u05EB\nf\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x03h\x03h\x03h" +
		"\x03h\x05h\u05FA\nh\x03h\x03h\x03h\x03h\x05h\u0600\nh\x03i\x03i\x03i\x03" +
		"i\x03i\x07i\u0607\ni\fi\x0Ei\u060A\vi\x03j\x03j\x03j\x03j\x03j\x03j\x03" +
		"j\x05j\u0613\nj\x03k\x03k\x03k\x03k\x05k\u0619\nk\x03k\x03k\x03k\x03k" +
		"\x03k\x03k\x05k\u0621\nk\x03k\x03k\x05k\u0625\nk\x03l\x03l\x05l\u0629" +
		"\nl\x03l\x03l\x03l\x05l\u062E\nl\x03l\x03l\x03l\x05l\u0633\nl\x03l\x03" +
		"l\x03l\x03l\x03l\x07l\u063A\nl\fl\x0El\u063D\vl\x03m\x03m\x05m\u0641\n" +
		"m\x03n\x03n\x05n\u0645\nn\x03o\x03o\x03o\x03o\x03p\x03p\x03q\x03q\x03" +
		"q\x03q\x03r\x03r\x05r\u0653\nr\x03r\x03r\x07r\u0657\nr\fr\x0Er\u065A\v" +
		"r\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u0668" +
		"\ns\x03t\x03t\x03t\x03t\x03t\x03t\x07t\u0670\nt\ft\x0Et\u0673\vt\x03u" +
		"\x03u\x05u\u0677\nu\x03v\x03v\x03v\x03v\x03v\x05v\u067E\nv\x03w\x03w\x03" +
		"w\x03w\x05w\u0684\nw\x03x\x03x\x03x\x05x\u0689\nx\x03x\x03x\x03x\x03x" +
		"\x05x\u068F\nx\x03x\x03x\x03x\x03x\x03x\x05x\u0696\nx\x03x\x03x\x05x\u069A" +
		"\nx\x07x\u069C\nx\fx\x0Ex\u069F\vx\x03y\x03y\x03y\x03y\x05y\u06A5\ny\x03" +
		"y\x05y\u06A8\ny\x03y\x05y\u06AB\ny\x03y\x05y\u06AE\ny\x03z\x03z\x03z\x05" +
		"z\u06B3\nz\x03{\x03{\x05{\u06B7\n{\x03{\x05{\u06BA\n{\x03{\x03{\x05{\u06BE" +
		"\n{\x03{\x03{\x05{\u06C2\n{\x03{\x03{\x03{\x05{\u06C7\n{\x03{\x05{\u06CA" +
		"\n{\x05{\u06CC\n{\x03|\x03|\x05|\u06D0\n|\x03}\x03}\x03~\x03~\x03\x7F" +
		"\x05\x7F\u06D7\n\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x05\x80\u06DD\n\x80" +
		"\x03\x81\x03\x81\x05\x81\u06E1\n\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05" +
		"\x81\u06E7\n\x81\x03\x82\x03\x82\x03\x82\x05\x82\u06EC\n\x82\x05\x82\u06EE" +
		"\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u06F4\n\x83\x03\x83\x03" +
		"\x83\x05\x83\u06F8\n\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u06FE" +
		"\n\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0705\n\x83\x03" +
		"\x83\x03\x83\x05\x83\u0709\n\x83\x07\x83\u070B\n\x83\f\x83\x0E\x83\u070E" +
		"\v\x83\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u0714\n\x84\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u071E\n\x85" +
		"\x03\x85\x03\x85\x05\x85\u0722\n\x85\x07\x85\u0724\n\x85\f\x85\x0E\x85" +
		"\u0727\v\x85\x03\x86\x05\x86\u072A\n\x86\x03\x86\x05\x86\u072D\n\x86\x03" +
		"\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0733\n\x86\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x03\x87\x03\x87\x07\x87\u073B\n\x87\f\x87\x0E\x87\u073E\v\x87" +
		"\x03\x88\x05\x88\u0741\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u0747" +
		"\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u074F\n" +
		"\x88\x03\x88\x03\x88\x05\x88\u0753\n\x88\x03\x88\x05\x88\u0756\n\x88\x03" +
		"\x88\x03\x88\x05\x88\u075A\n\x88\x03\x88\x03\x88\x03\x88\x05\x88\u075F" +
		"\n\x88\x03\x89\x05\x89\u0762\n\x89\x03\x89\x05\x89\u0765\n\x89\x03\x89" +
		"\x03\x89\x05\x89\u0769\n\x89\x03\x89\x03\x89\x03\x8A\x05\x8A\u076E\n\x8A" +
		"\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A" +
		"\u0778\n\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u077F\n\x8B" +
		"\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0784\n\x8C\x03\x8D\x03\x8D\x05\x8D\u0788" +
		"\n\x8D\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u078D\n\x8E\x03\x8E\x03\x8E\x03" +
		"\x8E\x03\x8E\x05\x8E\u0793\n\x8E\x07\x8E\u0795\n\x8E\f\x8E\x0E\x8E\u0798" +
		"\v\x8E\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u079D\n\x8F\x03\x8F\x03\x8F\x03" +
		"\x8F\x03\x8F\x05\x8F\u07A3\n\x8F\x03\x90\x03\x90\x05\x90\u07A7\n\x90\x03" +
		"\x91\x03\x91\x03\x91\x05\x91\u07AC\n\x91\x03\x91\x03\x91\x03\x92\x03\x92" +
		"\x05\x92\u07B2\n\x92\x03\x92\x03\x92\x05\x92\u07B6\n\x92\x03\x92\x05\x92" +
		"\u07B9\n\x92\x03\x92\x03\x92\x05\x92\u07BD\n\x92\x03\x92\x05\x92\u07C0" +
		"\n\x92\x05\x92\u07C2\n\x92\x03\x93\x05\x93\u07C5\n\x93\x03\x93\x03\x93" +
		"\x03\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x05\x96\u07CF\n\x96\x03" +
		"\x96\x03\x96\x03\x96\x05\x96\u07D4\n\x96\x05\x96\u07D6\n\x96\x03\x97\x05" +
		"\x97\u07D9\n\x97\x03\x97\x05\x97\u07DC\n\x97\x03\x97\x05\x97\u07DF\n\x97" +
		"\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x05\x97\u07E8" +
		"\n\x97\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x07\x98\u07F0\n" +
		"\x98\f\x98\x0E\x98\u07F3\v\x98\x03\x99\x03\x99\x05\x99\u07F7\n\x99\x03" +
		"\x99\x05\x99\u07FA\n\x99\x03\x99\x03\x99\x05\x99\u07FE\n\x99\x03\x99\x05" +
		"\x99\u0801\n\x99\x03\x99\x05\x99\u0804\n\x99\x03\x99\x03\x99\x05\x99\u0808" +
		"\n\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x07\x9A\u080F\n\x9A\f\x9A" +
		"\x0E\x9A\u0812\v\x9A\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03" +
		"\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u0820\n\x9E\x03\x9E" +
		"\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u0826\n\x9E\x07\x9E\u0828\n\x9E\f\x9E" +
		"\x0E\x9E\u082B\v\x9E\x03\x9F\x05\x9F\u082E\n\x9F\x03\x9F\x03\x9F\x05\x9F" +
		"\u0832\n\x9F\x03\x9F\x03\x9F\x05\x9F\u0836\n\x9F\x03\x9F\x03\x9F\x05\x9F" +
		"\u083A\n\x9F\x03\x9F\x03\x9F\x05\x9F\u083E\n\x9F\x03\x9F\x03\x9F\x05\x9F" +
		"\u0842\n\x9F\x03\xA0\x05\xA0\u0845\n\xA0\x03\xA0\x03\xA0\x05\xA0\u0849" +
		"\n\xA0\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA4" +
		"\x03\xA4\x05\xA4\u0854\n\xA4\x03\xA5\x03\xA5\x05\xA5\u0858\n\xA5\x03\xA6" +
		"\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x05\xA7\u085F\n\xA7\x03\xA7\x03\xA7\x05" +
		"\xA7\u0863\n\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u0868\n\xA7\x03\xA8\x03" +
		"\xA8\x03\xA8\x05\xA8\u086D\n\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8" +
		"\x05\xA8\u0874\n\xA8\x03\xA9\x03\xA9\x05\xA9\u0878\n\xA9\x03\xAA\x03\xAA" +
		"\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x05\xAB\u0882\n\xAB\x03" +
		"\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAD\x03" +
		"\xAD\x03\xAD\x03\xAD\x07\xAD\u0890\n\xAD\f\xAD\x0E\xAD\u0893\v\xAD\x03" +
		"\xAE\x03\xAE\x05\xAE\u0897\n\xAE\x03\xAF\x03\xAF\x05\xAF\u089B\n\xAF\x03" +
		"\xAF\x05\xAF\u089E\n\xAF\x03\xAF\x03\xAF\x05\xAF\u08A2\n\xAF\x03\xAF\x03" +
		"\xAF\x03\xAF\x03\xAF\x05\xAF\u08A8\n\xAF\x03\xAF\x05\xAF\u08AB\n\xAF\x03" +
		"\xAF\x03\xAF\x05\xAF\u08AF\n\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF" +
		"\x03\xAF\x03\xAF\x03\xAF\x05\xAF\u08B9\n\xAF\x03\xAF\x05\xAF\u08BC\n\xAF" +
		"\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x05\xAF\u08C4\n\xAF\x03" +
		"\xAF\x03\xAF\x03\xAF\x05\xAF\u08C9\n\xAF\x03\xB0\x03\xB0\x03\xB0\x05\xB0" +
		"\u08CE\n\xB0\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x05\xB1\u08D6" +
		"\n\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x05\xB1\u08DD\n\xB1\x03" +
		"\xB1\x03\xB1\x05\xB1\u08E1\n\xB1\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB3" +
		"\x05\xB3\u08E8\n\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u08EE\n\xB3" +
		"\x07\xB3\u08F0\n\xB3\f\xB3\x0E\xB3\u08F3\v\xB3\x03\xB4\x03\xB4\x03\xB4" +
		"\x05\xB4\u08F8\n\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03" +
		"\xB5\x05\xB5\u0901\n\xB5\x03\xB5\x03\xB5\x05\xB5\u0905\n\xB5\x03\xB6\x05" +
		"\xB6\u0908\n\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB7" +
		"\x03\xB7\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x05\xB9\u0918" +
		"\n\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x05\xBA";
	private static readonly _serializedATNSegment1: string =
		"\u091F\n\xBA\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBC\x05" +
		"\xBC\u0928\n\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x05\xBC\u092E\n\xBC\x03" +
		"\xBC\x03\xBC\x05\xBC\u0932\n\xBC\x03\xBC\x05\xBC\u0935\n\xBC\x03\xBD\x03" +
		"\xBD\x05\xBD\u0939\n\xBD\x03\xBE\x03\xBE\x05\xBE\u093D\n\xBE\x03\xBF\x03" +
		"\xBF\x03\xBF\x05\xBF\u0942\n\xBF\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC0" +
		"\x05\xC0\u0949\n\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u094F\n\xC0" +
		"\x07\xC0\u0951\n\xC0\f\xC0\x0E\xC0\u0954\v\xC0\x03\xC1\x03\xC1\x03\xC1" +
		"\x03\xC1\x03\xC1\x03\xC1\x05\xC1\u095C\n\xC1\x03\xC2\x03\xC2\x03\xC2\x03" +
		"\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03" +
		"\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03" +
		"\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03" +
		"\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03" +
		"\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03" +
		"\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x05\xC4\u0995\n\xC4" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u099E" +
		"\n\xC5\x03\xC6\x03\xC6\x03\xC7\x03\xC7\x03\xC8\x03\xC8\x03\xC8\x02\x02" +
		"$\f\x16 2<>@BDFHJLNPXdv\xAC\xD0\xD6\xE2\xE6\xEE\u0104\u0108\u010C\u011A" +
		"\u012E\u0132\u013A\u0158\u0164\u017E\xC9\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
		"\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02" +
		"\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02" +
		"\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102" +
		"\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110" +
		"\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E" +
		"\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C" +
		"\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A" +
		"\x02\u013C\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148" +
		"\x02\u014A\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156" +
		"\x02\u0158\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164" +
		"\x02\u0166\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172" +
		"\x02\u0174\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180" +
		"\x02\u0182\x02\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\u018E" +
		"\x02\x02\r\x04\x02\\\\``\x04\x02VX\\_\x07\x02\x1F\x1F**44::AA\x05\x02" +
		"\x1D\x1D\'\'KK\x04\x02\x11\x11MM\x04\x02\\\\qq\x05\x02\x10\x10==HH\x04" +
		"\x02!!00\x03\x0213\x04\x02  CC\x03\x02\x89\x8C\x02\u0AC7\x02\u0191\x03" +
		"\x02\x02\x02\x04\u019D\x03\x02\x02\x02\x06\u01A1\x03\x02\x02\x02\b\u01AC" +
		"\x03\x02\x02\x02\n\u01AE\x03\x02\x02\x02\f\u01BF\x03\x02\x02\x02\x0E\u01D0" +
		"\x03\x02\x02\x02\x10\u01D6\x03\x02\x02\x02\x12\u01E2\x03\x02\x02\x02\x14" +
		"\u01E4\x03\x02\x02\x02\x16\u01E6\x03\x02\x02\x02\x18\u01F8\x03\x02\x02" +
		"\x02\x1A\u01FE\x03\x02\x02\x02\x1C\u0205\x03\x02\x02\x02\x1E\u0207\x03" +
		"\x02\x02\x02 \u0256\x03\x02\x02\x02\"\u0283\x03\x02\x02\x02$\u029B\x03" +
		"\x02\x02\x02&\u02B9\x03\x02\x02\x02(\u02BB\x03\x02\x02\x02*\u02D5\x03" +
		"\x02\x02\x02,\u02D7\x03\x02\x02\x02.\u02DB\x03\x02\x02\x020\u02E4\x03" +
		"\x02\x02\x022\u02E6\x03\x02\x02\x024\u02FF\x03\x02\x02\x026\u030D\x03" +
		"\x02\x02\x028\u030F\x03\x02\x02\x02:\u031A\x03\x02\x02\x02<\u031C\x03" +
		"\x02\x02\x02>\u032A\x03\x02\x02\x02@\u033B\x03\x02\x02\x02B\u0349\x03" +
		"\x02\x02\x02D\u0358\x03\x02\x02\x02F\u036C\x03\x02\x02\x02H\u037A\x03" +
		"\x02\x02\x02J\u0385\x03\x02\x02\x02L\u0390\x03\x02\x02\x02N\u039B\x03" +
		"\x02\x02\x02P\u03A6\x03\x02\x02\x02R\u03B8\x03\x02\x02\x02T\u03C0\x03" +
		"\x02\x02\x02V\u03CD\x03\x02\x02\x02X\u03CF\x03\x02\x02\x02Z\u03DA\x03" +
		"\x02\x02\x02\\\u03F6\x03\x02\x02\x02^\u040C\x03\x02\x02\x02`\u040F\x03" +
		"\x02\x02\x02b\u0413\x03\x02\x02\x02d\u0419\x03\x02\x02\x02f\u0437\x03" +
		"\x02\x02\x02h\u0449\x03\x02\x02\x02j\u046E\x03\x02\x02\x02l\u0472\x03" +
		"\x02\x02\x02n\u0475\x03\x02\x02\x02p\u047C\x03\x02\x02\x02r\u048E\x03" +
		"\x02\x02\x02t\u0490\x03\x02\x02\x02v\u0492\x03\x02\x02\x02x\u04A5\x03" +
		"\x02\x02\x02z\u04AF\x03\x02\x02\x02|\u04B1\x03\x02\x02\x02~\u04C8\x03" +
		"\x02\x02\x02\x80\u04CA\x03\x02\x02\x02\x82\u04D2\x03\x02\x02\x02\x84\u04D4" +
		"\x03\x02\x02\x02\x86\u04DD\x03\x02\x02\x02\x88\u04E6\x03\x02\x02\x02\x8A" +
		"\u04E8\x03\x02\x02\x02\x8C\u04EA\x03\x02\x02\x02\x8E\u04EC\x03\x02\x02" +
		"\x02\x90\u04F1\x03\x02\x02\x02\x92\u04F7\x03\x02\x02\x02\x94\u0500\x03" +
		"\x02\x02\x02\x96\u0509\x03\x02\x02\x02\x98\u0522\x03\x02\x02\x02\x9A\u0528" +
		"\x03\x02\x02\x02\x9C\u0533\x03\x02\x02\x02\x9E\u054D\x03\x02\x02\x02\xA0" +
		"\u054F\x03\x02\x02\x02\xA2\u055E\x03\x02\x02\x02\xA4\u0573\x03\x02\x02" +
		"\x02\xA6\u0575\x03\x02\x02\x02\xA8\u0584\x03\x02\x02\x02\xAA\u0586\x03" +
		"\x02\x02\x02\xAC\u0589\x03\x02\x02\x02\xAE\u0599\x03\x02\x02\x02\xB0\u059B" +
		"\x03\x02\x02\x02\xB2\u059F\x03\x02\x02\x02\xB4\u05A1\x03\x02\x02\x02\xB6" +
		"\u05A5\x03\x02\x02\x02\xB8\u05A9\x03\x02\x02\x02\xBA\u05AC\x03\x02\x02" +
		"\x02\xBC\u05B5\x03\x02\x02\x02\xBE\u05BE\x03\x02\x02\x02\xC0\u05C6\x03" +
		"\x02\x02\x02\xC2\u05C8\x03\x02\x02\x02\xC4\u05CA\x03\x02\x02\x02\xC6\u05D1" +
		"\x03\x02\x02\x02\xC8\u05E2\x03\x02\x02\x02\xCA\u05E5\x03\x02\x02\x02\xCC" +
		"\u05EF\x03\x02\x02\x02\xCE\u05FF\x03\x02\x02\x02\xD0\u0601\x03\x02\x02" +
		"\x02\xD2\u0612\x03\x02\x02\x02\xD4\u0624\x03\x02\x02\x02\xD6\u062D\x03" +
		"\x02\x02\x02\xD8\u063E\x03\x02\x02\x02\xDA\u0644\x03\x02\x02\x02\xDC\u0646" +
		"\x03\x02\x02\x02\xDE\u064A\x03\x02\x02\x02\xE0\u064C\x03\x02\x02\x02\xE2" +
		"\u0650\x03\x02\x02\x02\xE4\u0667\x03\x02\x02\x02\xE6\u0669\x03\x02\x02" +
		"\x02\xE8\u0674\x03\x02\x02\x02\xEA\u067D\x03\x02\x02\x02\xEC\u0683\x03" +
		"\x02\x02\x02\xEE\u068E\x03\x02\x02\x02\xF0\u06A0\x03\x02\x02\x02\xF2\u06AF" +
		"\x03\x02\x02\x02\xF4\u06CB\x03\x02\x02\x02\xF6\u06CD\x03\x02\x02\x02\xF8" +
		"\u06D1\x03\x02\x02\x02\xFA\u06D3\x03\x02\x02\x02\xFC\u06D6\x03\x02\x02" +
		"\x02\xFE\u06DA\x03\x02\x02\x02\u0100\u06E6\x03\x02\x02\x02\u0102\u06ED" +
		"\x03\x02\x02\x02\u0104\u06FD\x03\x02\x02\x02\u0106\u0713\x03\x02\x02\x02" +
		"\u0108\u0715\x03\x02\x02\x02\u010A\u0732\x03\x02\x02\x02\u010C\u0734\x03" +
		"\x02\x02\x02\u010E\u075E\x03\x02\x02\x02\u0110\u0761\x03\x02\x02\x02\u0112" +
		"\u0777\x03\x02\x02\x02\u0114\u077E\x03\x02\x02\x02\u0116\u0783\x03\x02" +
		"\x02\x02\u0118\u0787\x03\x02\x02\x02\u011A\u0789\x03\x02\x02\x02\u011C" +
		"\u07A2\x03\x02\x02\x02\u011E\u07A6\x03\x02\x02\x02\u0120\u07A8\x03\x02" +
		"\x02\x02\u0122\u07C1\x03\x02\x02\x02\u0124\u07C4\x03\x02\x02\x02\u0126" +
		"\u07C8\x03\x02\x02\x02\u0128\u07CA\x03\x02\x02\x02\u012A\u07D5\x03\x02" +
		"\x02\x02\u012C\u07E7\x03\x02\x02\x02\u012E\u07E9\x03\x02\x02\x02\u0130" +
		"\u0807\x03\x02\x02\x02\u0132\u0809\x03\x02\x02\x02\u0134\u0813\x03\x02" +
		"\x02\x02\u0136\u0815\x03\x02\x02\x02\u0138\u0819\x03\x02\x02\x02\u013A" +
		"\u081C\x03\x02\x02\x02\u013C\u0841\x03\x02\x02\x02\u013E\u0848\x03\x02" +
		"\x02\x02\u0140\u084A\x03\x02\x02\x02\u0142\u084C\x03\x02\x02\x02\u0144" +
		"\u084E\x03\x02\x02\x02\u0146\u0851\x03\x02\x02\x02\u0148\u0855\x03\x02" +
		"\x02\x02\u014A\u0859\x03\x02\x02\x02\u014C\u0867\x03\x02\x02\x02\u014E" +
		"\u0873\x03\x02\x02\x02\u0150\u0877\x03\x02\x02\x02\u0152\u0879\x03\x02" +
		"\x02\x02\u0154\u0881\x03\x02\x02\x02\u0156\u0883\x03\x02\x02\x02\u0158" +
		"\u0889\x03\x02\x02\x02\u015A\u0896\x03\x02\x02\x02\u015C\u08C8\x03\x02" +
		"\x02\x02\u015E\u08CA\x03\x02\x02\x02\u0160\u08E0\x03\x02\x02\x02\u0162" +
		"\u08E2\x03\x02\x02\x02\u0164\u08E4\x03\x02\x02\x02\u0166\u08F7\x03\x02" +
		"\x02\x02\u0168\u0904\x03\x02\x02\x02\u016A\u0907\x03\x02\x02\x02\u016C" +
		"\u090C\x03\x02\x02\x02\u016E\u0911\x03\x02\x02\x02\u0170\u0915\x03\x02" +
		"\x02\x02\u0172\u091C\x03\x02\x02\x02\u0174\u0920\x03\x02\x02\x02\u0176" +
		"\u0934\x03\x02\x02\x02\u0178\u0936\x03\x02\x02\x02\u017A\u093C\x03\x02" +
		"\x02\x02\u017C\u093E\x03\x02\x02\x02\u017E\u0945\x03\x02\x02\x02\u0180" +
		"\u095B\x03\x02\x02\x02\u0182\u095D\x03\x02\x02\x02\u0184\u0960\x03\x02" +
		"\x02\x02\u0186\u0994\x03\x02\x02\x02\u0188\u099D\x03\x02\x02\x02\u018A" +
		"\u099F\x03\x02\x02\x02\u018C\u09A1\x03\x02\x02\x02\u018E\u09A3\x03\x02" +
		"\x02\x02\u0190\u0192\x05v<\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192" +
		"\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0194\x07\x02\x02\x03" +
		"\u0194\x03\x03\x02\x02\x02\u0195\u019E\x05\u0188\xC5\x02\u0196\u019E\x07" +
		"@\x02\x02\u0197\u0198\x07P\x02\x02\u0198\u0199\x05X-\x02\u0199\u019A\x07" +
		"Q\x02\x02\u019A\u019E\x03\x02\x02\x02\u019B\u019E\x05\x06\x04\x02\u019C" +
		"\u019E\x05\x0E\b\x02\u019D\u0195\x03\x02\x02\x02\u019D\u0196\x03\x02\x02" +
		"\x02\u019D\u0197\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C" +
		"\x03\x02\x02\x02\u019E\x05\x03\x02\x02\x02\u019F\u01A2\x05\b\x05\x02\u01A0" +
		"\u01A2\x05\n\x06\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02" +
		"\x02\u01A2\x07\x03\x02\x02\x02\u01A3\u01AD\x07\x7F\x02\x02\u01A4\u01AD" +
		"\x05\u0152\xAA\x02\u01A5\u01AD\x05\u0144\xA3\x02\u01A6\u01AD\x05\u0154" +
		"\xAB\x02\u01A7\u01A8\x07^\x02\x02\u01A8\u01AD\x05\u011E\x90\x02\u01A9" +
		"\u01AA\x07^\x02\x02\u01AA\u01AD\x05\x9CO\x02\u01AB\u01AD\x05\u0160\xB1" +
		"\x02\u01AC\u01A3\x03\x02\x02\x02\u01AC\u01A4\x03\x02\x02\x02\u01AC\u01A5" +
		"\x03\x02\x02\x02\u01AC\u01A6\x03\x02\x02\x02\u01AC\u01A7\x03\x02\x02\x02" +
		"\u01AC\u01A9\x03\x02\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AD\t\x03\x02" +
		"\x02\x02\u01AE\u01B0\x05\f\x07\x02\u01AF\u01B1\x07?\x02\x02\u01B0\u01AF" +
		"\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02" +
		"\u01B2\u01B3\x05\b\x05\x02\u01B3\v\x03\x02\x02\x02\u01B4\u01B5\b\x07\x01" +
		"\x02\u01B5\u01C0\x07z\x02\x02\u01B6\u01B7\x05\x9AN\x02\u01B7\u01B8\x07" +
		"z\x02\x02\u01B8\u01C0\x03\x02\x02\x02\u01B9\u01BA\x05\xB2Z\x02\u01BA\u01BB" +
		"\x07z\x02\x02\u01BB\u01C0\x03\x02\x02\x02\u01BC\u01BD\x05\x9CO\x02\u01BD" +
		"\u01BE\x07z\x02\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01B4\x03\x02\x02" +
		"\x02\u01BF\u01B6\x03\x02\x02\x02\u01BF\u01B9\x03\x02\x02\x02\u01BF\u01BC" +
		"\x03\x02\x02\x02\u01C0\u01CD\x03\x02\x02\x02\u01C1\u01C2\f\x04\x02\x02" +
		"\u01C2\u01C3\x07\x7F\x02\x02\u01C3\u01CC\x07z\x02\x02\u01C4\u01C6\f\x03" +
		"\x02\x02\u01C5\u01C7\x07?\x02\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7" +
		"\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x05\u015E\xB0" +
		"\x02\u01C9\u01CA\x07z\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01C1" +
		"\x03\x02\x02\x02\u01CB\u01C4\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02" +
		"\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\r\x03\x02" +
		"\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0\u01D2\x05\x10\t\x02\u01D1\u01D3" +
		"\x05\x1E\x10\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
		"\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x05b2\x02\u01D5\x0F\x03\x02\x02" +
		"\x02\u01D6\u01D8\x07R\x02\x02\u01D7\u01D9\x05\x12\n\x02\u01D8\u01D7\x03" +
		"\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA" +
		"\u01DB\x07S\x02\x02\u01DB\x11\x03\x02\x02\x02\u01DC\u01E3\x05\x14\v\x02" +
		"\u01DD\u01E3\x05\x16\f\x02\u01DE\u01DF\x05\x14\v\x02\u01DF\u01E0\x07u" +
		"\x02\x02\u01E0\u01E1\x05\x16\f\x02\u01E1\u01E3\x03\x02\x02\x02\u01E2\u01DC" +
		"\x03\x02\x02\x02\u01E2\u01DD\x03\x02\x02\x02\u01E2\u01DE\x03\x02\x02\x02" +
		"\u01E3\x13\x03\x02\x02\x02\u01E4\u01E5\t\x02\x02\x02\u01E5\x15\x03\x02" +
		"\x02\x02\u01E6\u01E7\b\f\x01\x02\u01E7\u01E9\x05\x18\r\x02\u01E8\u01EA" +
		"\x07~\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02" +
		"\u01EA\u01F3\x03\x02\x02\x02\u01EB\u01EC\f\x03\x02\x02\u01EC\u01ED\x07" +
		"u\x02\x02\u01ED\u01EF\x05\x18\r\x02\u01EE\u01F0\x07~\x02\x02\u01EF\u01EE" +
		"\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02" +
		"\u01F1\u01EB\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03" +
		"\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\x17\x03\x02\x02\x02\u01F5" +
		"\u01F3\x03\x02\x02\x02\u01F6\u01F9\x05\x1A\x0E\x02\u01F7\u01F9\x05\x1C" +
		"\x0F\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9" +
		"\x19\x03\x02\x02\x02\u01FA\u01FF\x07\x7F\x02\x02\u01FB\u01FC\x07\\\x02" +
		"\x02\u01FC\u01FF\x07\x7F\x02\x02\u01FD\u01FF\x07@\x02\x02\u01FE\u01FA" +
		"\x03\x02\x02\x02\u01FE\u01FB\x03\x02\x02\x02\u01FE\u01FD\x03\x02\x02\x02" +
		"\u01FF\x1B\x03\x02\x02\x02\u0200\u0201\x07\x7F\x02\x02\u0201\u0206\x05" +
		"\u0114\x8B\x02\u0202\u0203\x07\\\x02\x02\u0203\u0204\x07\x7F\x02\x02\u0204" +
		"\u0206\x05\u0114\x8B\x02\u0205\u0200\x03\x02\x02\x02\u0205\u0202\x03\x02" +
		"\x02\x02\u0206\x1D\x03\x02\x02\x02\u0207\u0208\x07P\x02\x02\u0208\u0209" +
		"\x05\u010A\x86\x02\u0209\u020B\x07Q\x02\x02\u020A\u020C\x07*\x02\x02\u020B" +
		"\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x03\x02" +
		"\x02\x02\u020D\u020F\x05\u017A\xBE\x02\u020E\u020D\x03\x02\x02\x02\u020E" +
		"\u020F\x03\x02\x02\x02\u020F\u0211\x03\x02\x02\x02\u0210\u0212\x05\xD0" +
		"i\x02\u0211\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0214" +
		"\x03\x02\x02\x02\u0213\u0215\x05\xF2z\x02\u0214\u0213\x03\x02\x02\x02" +
		"\u0214\u0215\x03\x02\x02\x02\u0215\x1F\x03\x02\x02\x02\u0216\u0217\b\x11" +
		"\x01\x02\u0217\u0257\x05\x04\x03\x02\u0218\u0219\x05\x98M\x02\u0219\u021B" +
		"\x07P\x02\x02\u021A\u021C\x05\"\x12\x02\u021B\u021A\x03\x02\x02\x02\u021B" +
		"\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x07Q\x02" +
		"\x02\u021E\u0257\x03\x02\x02\x02\u021F\u0220\x05\u0168\xB5\x02\u0220\u0222" +
		"\x07P\x02\x02\u0221\u0223\x05\"\x12\x02\u0222\u0221\x03\x02\x02\x02\u0222" +
		"\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0225\x07Q\x02" +
		"\x02\u0225\u0257\x03\x02\x02\x02\u0226\u0227\x05\x98M\x02\u0227\u0228" +
		"\x05\u011C\x8F\x02\u0228\u0257\x03\x02\x02\x02\u0229\u022A\x05\u0168\xB5" +
		"\x02\u022A\u022B\x05\u011C\x8F\x02\u022B\u0257\x03\x02\x02\x02\u022C\u022D" +
		"\x07\x1A\x02\x02\u022D\u022E\x07a\x02\x02\u022E\u022F\x05\xFE\x80\x02" +
		"\u022F\u0230\x07b\x02\x02\u0230\u0231\x07P\x02\x02\u0231\u0232\x05X-\x02" +
		"\u0232\u0233\x07Q\x02\x02\u0233\u0257\x03\x02\x02\x02\u0234\u0235\x07" +
		"<\x02\x02\u0235\u0236\x07a\x02\x02\u0236\u0237\x05\xFE\x80\x02\u0237\u0238" +
		"\x07b\x02\x02\u0238\u0239\x07P\x02\x02\u0239\u023A\x05X-\x02\u023A\u023B" +
		"\x07Q\x02\x02\u023B\u0257\x03\x02\x02\x02\u023C\u023D\x075\x02\x02\u023D" +
		"\u023E\x07a\x02\x02\u023E\u023F\x05\xFE\x80\x02\u023F\u0240\x07b\x02\x02" +
		"\u0240\u0241\x07P\x02\x02\u0241\u0242\x05X-\x02\u0242\u0243\x07Q\x02\x02" +
		"\u0243\u0257\x03\x02\x02\x02\u0244\u0245\x07\x13\x02\x02\u0245\u0246\x07" +
		"a\x02\x02\u0246\u0247\x05\xFE\x80\x02\u0247\u0248\x07b\x02\x02\u0248\u0249" +
		"\x07P\x02\x02\u0249\u024A\x05X-\x02\u024A\u024B\x07Q\x02\x02\u024B\u0257" +
		"\x03\x02\x02\x02\u024C\u024D\x07F\x02\x02\u024D\u024E\x07P\x02\x02\u024E" +
		"\u024F\x05X-\x02\u024F\u0250\x07Q\x02\x02\u0250\u0257\x03\x02\x02\x02" +
		"\u0251\u0252\x07F\x02\x02\u0252\u0253\x07P\x02\x02\u0253\u0254\x05\xFE" +
		"\x80\x02\u0254\u0255\x07Q\x02\x02\u0255\u0257\x03\x02\x02\x02\u0256\u0216" +
		"\x03\x02\x02\x02\u0256\u0218\x03\x02\x02\x02\u0256\u021F\x03\x02\x02\x02" +
		"\u0256\u0226\x03\x02\x02\x02\u0256\u0229\x03\x02\x02\x02\u0256\u022C\x03" +
		"\x02\x02\x02\u0256\u0234\x03\x02\x02\x02\u0256\u023C\x03\x02\x02\x02\u0256" +
		"\u0244\x03\x02\x02\x02\u0256\u024C\x03\x02\x02\x02\u0256\u0251\x03\x02" +
		"\x02\x02\u0257\u0280\x03\x02\x02\x02\u0258\u0259\f\x15\x02\x02\u0259\u025A" +
		"\x07R\x02\x02\u025A\u025B\x05X-\x02\u025B\u025C\x07S\x02\x02\u025C\u027F" +
		"\x03\x02\x02\x02\u025D\u025E\f\x14\x02\x02\u025E\u025F\x07R\x02\x02\u025F" +
		"\u0260\x05\u011C\x8F\x02\u0260\u0261\x07S\x02\x02\u0261\u027F\x03\x02" +
		"\x02\x02\u0262\u0263\f\x13\x02\x02\u0263\u0265\x07P\x02\x02\u0264\u0266" +
		"\x05\"\x12\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02" +
		"\u0266\u0267\x03\x02\x02\x02\u0267\u027F\x07Q\x02\x02\u0268\u0269\f\x0E" +
		"\x02\x02\u0269\u026B\x07|\x02\x02\u026A\u026C\x07?\x02\x02\u026B\u026A" +
		"\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02" +
		"\u026D\u027F\x05\x06\x04\x02\u026E\u026F\f\r\x02\x02\u026F\u0271\x07w" +
		"\x02\x02\u0270\u0272\x07?\x02\x02\u0271\u0270\x03\x02\x02\x02\u0271\u0272" +
		"\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u027F\x05\x06\x04\x02" +
		"\u0274\u0275\f\f\x02\x02\u0275\u0276\x07|\x02\x02\u0276\u027F\x05$\x13" +
		"\x02\u0277\u0278\f\v\x02\x02\u0278\u0279\x07w\x02\x02\u0279\u027F\x05" +
		"$\x13\x02\u027A\u027B\f\n\x02\x02\u027B\u027F\x07s\x02\x02\u027C\u027D" +
		"\f\t\x02\x02\u027D\u027F\x07t\x02\x02\u027E\u0258\x03\x02\x02\x02\u027E" +
		"\u025D\x03\x02\x02\x02\u027E\u0262\x03\x02\x02\x02\u027E\u0268\x03\x02" +
		"\x02\x02\u027E\u026E\x03\x02\x02\x02\u027E\u0274\x03\x02\x02\x02\u027E" +
		"\u0277\x03\x02\x02\x02\u027E\u027A\x03\x02\x02\x02\u027E\u027C\x03\x02" +
		"\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280" +
		"\u0281\x03\x02\x02\x02\u0281!\x03\x02\x02\x02\u0282\u0280\x03\x02\x02" +
		"\x02\u0283\u0284\x05\u011A\x8E\x02\u0284#\x03\x02\x02\x02\u0285\u0287" +
		"\x05\f\x07\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02" +
		"\u0287\u0288\x03\x02\x02\x02\u0288\u0289\x05\x9AN\x02\u0289\u028A\x07" +
		"z\x02\x02\u028A\u028B\x07^\x02\x02\u028B\u028C\x05\x9AN\x02\u028C\u029C" +
		"\x03\x02\x02\x02\u028D\u028E\x05\f\x07\x02\u028E\u028F\x07?\x02\x02\u028F" +
		"\u0290\x05\u015E\xB0\x02\u0290\u0291\x07z\x02\x02\u0291\u0292\x07^\x02" +
		"\x02\u0292\u0293\x05\x9AN\x02\u0293\u029C\x03\x02\x02\x02\u0294\u0296" +
		"\x05\f\x07\x02\u0295\u0294\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02" +
		"\u0296\u0297\x03\x02\x02\x02\u0297\u0298\x07^\x02\x02\u0298\u029C\x05" +
		"\x9AN\x02\u0299\u029A\x07^\x02\x02\u029A\u029C\x05\x9CO\x02\u029B\u0286" +
		"\x03\x02\x02\x02\u029B\u028D\x03\x02\x02\x02\u029B\u0295\x03\x02\x02\x02" +
		"\u029B\u0299\x03\x02\x02\x02\u029C%\x03\x02\x02\x02\u029D\u02BA\x05 \x11" +
		"\x02\u029E\u029F\x07s\x02\x02\u029F\u02BA\x05:\x1E\x02\u02A0\u02A1\x07" +
		"t\x02\x02\u02A1\u02BA\x05:\x1E\x02\u02A2\u02A3\x05(\x15\x02\u02A3\u02A4" +
		"\x05:\x1E\x02\u02A4\u02BA\x03\x02\x02\x02\u02A5\u02A6\x079\x02\x02\u02A6" +
		"\u02BA\x05&\x14\x02\u02A7\u02A8\x079\x02\x02\u02A8\u02A9\x07P\x02\x02" +
		"\u02A9\u02AA\x05\xFE\x80\x02\u02AA\u02AB\x07Q\x02\x02\u02AB\u02BA\x03" +
		"\x02\x02\x02\u02AC\u02AD\x079\x02\x02\u02AD\u02AE\x07~\x02\x02\u02AE\u02AF" +
		"\x07P\x02\x02\u02AF\u02B0\x07\x7F\x02\x02\u02B0\u02BA\x07Q\x02\x02\u02B1" +
		"\u02B2\x07\x06\x02\x02\u02B2\u02B3\x07P\x02\x02\u02B3\u02B4\x05\xFE\x80" +
		"\x02\u02B4\u02B5\x07Q\x02\x02\u02B5\u02BA\x03\x02\x02\x02\u02B6\u02BA" +
		"\x058\x1D\x02\u02B7\u02BA\x05*\x16\x02\u02B8\u02BA\x056\x1C\x02\u02B9" +
		"\u029D\x03\x02\x02\x02\u02B9\u029E\x03\x02\x02\x02\u02B9\u02A0\x03\x02" +
		"\x02\x02\u02B9\u02A2\x03\x02\x02\x02\u02B9\u02A5\x03\x02\x02\x02\u02B9" +
		"\u02A7\x03\x02\x02\x02\u02B9\u02AC\x03\x02\x02\x02\u02B9\u02B1\x03\x02" +
		"\x02\x02\u02B9\u02B6\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9" +
		"\u02B8\x03\x02\x02\x02\u02BA\'\x03\x02\x02\x02\u02BB\u02BC\t\x03\x02\x02" +
		"\u02BC)\x03\x02\x02\x02\u02BD\u02BF\x07z\x02\x02\u02BE\u02BD\x03\x02\x02" +
		"\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2" +
		"\x07,\x02\x02\u02C1\u02C3\x05,\x17\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2" +
		"\u02C3\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C6\x05.\x18" +
		"\x02\u02C5\u02C7\x054\x1B\x02\u02C6\u02C5\x03\x02\x02\x02\u02C6\u02C7" +
		"\x03\x02\x02\x02\u02C7\u02D6\x03\x02\x02\x02\u02C8\u02CA\x07z\x02\x02" +
		"\u02C9\u02C8\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CB\x03" +
		"\x02\x02\x02\u02CB\u02CD\x07,\x02\x02\u02CC\u02CE\x05,\x17\x02\u02CD\u02CC" +
		"\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02" +
		"\u02CF\u02D0\x07P\x02\x02\u02D0\u02D1\x05\xFE\x80\x02\u02D1\u02D3\x07" +
		"Q\x02\x02\u02D2\u02D4\x054\x1B\x02\u02D3\u02D2\x03\x02\x02\x02\u02D3\u02D4" +
		"\x03\x02\x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02BE\x03\x02\x02\x02" +
		"\u02D5\u02C9\x03\x02\x02\x02\u02D6+\x03\x02\x02\x02\u02D7\u02D8\x07P\x02" +
		"\x02\u02D8\u02D9\x05\"\x12\x02\u02D9\u02DA\x07Q\x02\x02\u02DA-\x03\x02" +
		"\x02\x02\u02DB\u02DD\x05\x94K\x02\u02DC\u02DE\x050\x19\x02\u02DD\u02DC" +
		"\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE/\x03\x02\x02\x02\u02DF" +
		"\u02E1\x05\xF4{\x02\u02E0\u02E2\x050\x19\x02\u02E1\u02E0\x03\x02\x02\x02" +
		"\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E5\x05" +
		"2\x1A\x02\u02E4\u02DF\x03\x02\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E5" +
		"1\x03\x02\x02\x02\u02E6\u02E7\b\x1A\x01\x02\u02E7\u02E8\x07R\x02\x02\u02E8" +
		"\u02E9\x05X-\x02\u02E9\u02EB\x07S\x02\x02\u02EA\u02EC\x05\xD0i\x02\u02EB" +
		"\u02EA\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02F6\x03\x02" +
		"\x02\x02\u02ED\u02EE\f\x03\x02\x02\u02EE\u02EF\x07R\x02\x02\u02EF\u02F0" +
		"\x05Z.\x02\u02F0\u02F2\x07S\x02\x02\u02F1\u02F3\x05\xD0i\x02\u02F2\u02F1" +
		"\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F5\x03\x02\x02\x02" +
		"\u02F4\u02ED\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03" +
		"\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F73\x03\x02\x02\x02\u02F8" +
		"\u02F6\x03\x02\x02\x02\u02F9\u02FB\x07P\x02\x02\u02FA\u02FC\x05\"\x12" +
		"\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FD" +
		"\x03\x02\x02\x02\u02FD\u0300\x07Q\x02\x02\u02FE\u0300\x05\u011C\x8F\x02" +
		"\u02FF\u02F9\x03\x02\x02\x02\u02FF\u02FE\x03\x02\x02\x02\u03005\x03\x02" +
		"\x02\x02\u0301\u0303\x07z\x02\x02\u0302\u0301\x03\x02\x02\x02\u0302\u0303" +
		"\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0305\x07\x17\x02\x02" +
		"\u0305\u030E\x05:\x1E\x02\u0306\u0308\x07z\x02\x02\u0307\u0306\x03\x02" +
		"\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309" +
		"\u030A\x07\x17\x02\x02\u030A\u030B\x07R\x02\x02\u030B\u030C\x07S\x02\x02" +
		"\u030C\u030E\x05:\x1E\x02\u030D\u0302\x03\x02\x02\x02\u030D\u0307\x03" +
		"\x02\x02\x02\u030E7\x03\x02\x02\x02\u030F\u0310\x07-\x02\x02\u0310\u0311" +
		"\x07P\x02\x02\u0311\u0312\x05X-\x02\u0312\u0313\x07Q\x02\x02\u03139\x03" +
		"\x02\x02\x02\u0314\u031B\x05&\x14\x02\u0315\u0316\x07P\x02\x02\u0316\u0317" +
		"\x05\xFE\x80\x02\u0317\u0318\x07Q\x02\x02\u0318\u0319\x05:\x1E\x02\u0319" +
		"\u031B\x03\x02\x02\x02\u031A\u0314\x03\x02\x02\x02\u031A\u0315\x03\x02" +
		"\x02\x02\u031B;\x03\x02\x02\x02\u031C\u031D\b\x1F\x01\x02\u031D\u031E" +
		"\x05:\x1E\x02\u031E\u0327\x03\x02\x02\x02\u031F\u0320\f\x04\x02\x02\u0320" +
		"\u0321\x07}\x02\x02\u0321\u0326\x05:\x1E\x02\u0322\u0323\f\x03\x02\x02" +
		"\u0323\u0324\x07v\x02\x02\u0324\u0326\x05:\x1E\x02\u0325\u031F\x03\x02" +
		"\x02\x02\u0325\u0322\x03\x02\x02\x02\u0326\u0329\x03\x02\x02\x02\u0327" +
		"\u0325\x03\x02\x02\x02\u0327\u0328\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u0328=\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u032A" +
		"\u032B\b \x01\x02\u032B\u032C\x05<\x1F\x02\u032C\u0338\x03\x02\x02\x02" +
		"\u032D\u032E\f\x05\x02\x02\u032E\u032F\x07X\x02\x02\u032F\u0337\x05<\x1F" +
		"\x02\u0330\u0331\f\x04\x02\x02\u0331\u0332\x07Y\x02\x02\u0332\u0337\x05" +
		"<\x1F\x02\u0333\u0334\f\x03\x02\x02\u0334\u0335\x07Z\x02\x02\u0335\u0337" +
		"\x05<\x1F\x02\u0336\u032D\x03\x02\x02\x02\u0336\u0330\x03\x02\x02\x02" +
		"\u0336\u0333\x03\x02\x02\x02\u0337\u033A\x03\x02\x02\x02\u0338\u0336\x03" +
		"\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339?\x03\x02\x02\x02\u033A" +
		"\u0338\x03\x02\x02\x02\u033B\u033C\b!\x01\x02\u033C\u033D\x05> \x02\u033D" +
		"\u0346\x03\x02\x02\x02\u033E\u033F\f\x04\x02\x02\u033F\u0340\x07V\x02" +
		"\x02\u0340\u0345\x05> \x02\u0341\u0342\f\x03\x02\x02\u0342\u0343\x07W" +
		"\x02\x02\u0343\u0345\x05> \x02\u0344\u033E\x03\x02\x02\x02\u0344\u0341" +
		"\x03\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02" +
		"\u0346\u0347\x03\x02\x02\x02\u0347A\x03\x02\x02\x02\u0348\u0346\x03\x02" +
		"\x02\x02\u0349\u034A\b\"\x01\x02\u034A\u034B\x05@!\x02\u034B\u0355\x03" +
		"\x02\x02\x02\u034C\u034D\f\x04\x02\x02\u034D\u034E\x07k\x02\x02\u034E" +
		"\u0354\x05@!\x02\u034F\u0350\f\x03\x02\x02\u0350\u0351\x05\u0182\xC2\x02" +
		"\u0351\u0352\x05@!\x02\u0352\u0354\x03\x02\x02\x02\u0353\u034C\x03\x02" +
		"\x02\x02\u0353\u034F\x03\x02\x02\x02\u0354\u0357\x03\x02\x02\x02\u0355" +
		"\u0353\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356C\x03\x02\x02" +
		"\x02\u0357\u0355\x03\x02\x02\x02\u0358\u0359\b#\x01\x02\u0359\u035A\x05" +
		"B\"\x02\u035A\u0369\x03\x02\x02\x02\u035B\u035C\f\x06\x02\x02\u035C\u035D" +
		"\x07a\x02\x02\u035D\u0368\x05B\"\x02\u035E\u035F\f\x05\x02\x02\u035F\u0360" +
		"\x07b\x02\x02\u0360\u0368\x05B\"\x02\u0361\u0362\f\x04\x02\x02\u0362\u0363" +
		"\x07o\x02\x02\u0363\u0368\x05B\"\x02\u0364\u0365\f\x03\x02\x02\u0365\u0366" +
		"\x07p\x02\x02\u0366\u0368\x05B\"\x02\u0367\u035B\x03\x02\x02\x02\u0367" +
		"\u035E\x03\x02\x02\x02\u0367\u0361\x03\x02\x02\x02\u0367\u0364\x03\x02" +
		"\x02\x02\u0368\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u0369" +
		"\u036A\x03\x02\x02\x02\u036AE\x03\x02\x02\x02\u036B\u0369\x03\x02\x02" +
		"\x02\u036C\u036D\b$\x01\x02\u036D\u036E\x05D#\x02\u036E\u0377\x03\x02" +
		"\x02\x02\u036F\u0370\f\x04\x02\x02\u0370\u0371\x07m\x02\x02\u0371\u0376" +
		"\x05D#\x02\u0372\u0373\f\x03\x02\x02\u0373\u0374\x07n\x02\x02\u0374\u0376" +
		"\x05D#\x02\u0375\u036F\x03\x02\x02\x02\u0375\u0372\x03\x02\x02\x02\u0376" +
		"\u0379\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02" +
		"\x02\x02\u0378G\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u037A\u037B" +
		"\b%\x01\x02\u037B\u037C\x05F$\x02\u037C\u0382\x03\x02\x02\x02\u037D\u037E" +
		"\f\x03\x02\x02\u037E\u037F\x07\\\x02\x02\u037F\u0381\x05F$\x02\u0380\u037D" +
		"\x03\x02\x02\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02" +
		"\u0382\u0383\x03\x02\x02\x02\u0383I\x03\x02\x02\x02\u0384\u0382\x03\x02" +
		"\x02\x02\u0385\u0386\b&\x01\x02\u0386\u0387\x05H%\x02\u0387\u038D\x03" +
		"\x02\x02\x02\u0388\u0389\f\x03\x02\x02\u0389\u038A\x07[\x02\x02\u038A" +
		"\u038C\x05H%\x02\u038B\u0388\x03\x02\x02\x02\u038C\u038F\x03\x02\x02\x02" +
		"\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038EK\x03\x02" +
		"\x02\x02\u038F\u038D\x03\x02\x02\x02\u0390\u0391\b\'\x01\x02\u0391\u0392" +
		"\x05J&\x02\u0392\u0398\x03\x02\x02\x02\u0393\u0394\f\x03\x02\x02\u0394" +
		"\u0395\x07]\x02\x02\u0395\u0397\x05J&\x02\u0396\u0393\x03\x02\x02\x02" +
		"\u0397\u039A\x03\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0399\x03" +
		"\x02\x02\x02\u0399M\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039B" +
		"\u039C\b(\x01\x02\u039C\u039D\x05L\'\x02\u039D\u03A3\x03\x02\x02\x02\u039E" +
		"\u039F\f\x03\x02\x02\u039F\u03A0\x07q\x02\x02\u03A0\u03A2\x05L\'\x02\u03A1" +
		"\u039E\x03\x02\x02\x02\u03A2\u03A5\x03\x02\x02\x02\u03A3\u03A1\x03\x02" +
		"\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4O\x03\x02\x02\x02\u03A5\u03A3" +
		"\x03\x02\x02\x02\u03A6\u03A7\b)\x01\x02\u03A7\u03A8\x05N(\x02\u03A8\u03AE" +
		"\x03\x02\x02\x02\u03A9\u03AA\f\x03\x02\x02\u03AA\u03AB\x07r\x02\x02\u03AB" +
		"\u03AD\x05N(\x02\u03AC\u03A9\x03\x02\x02\x02\u03AD\u03B0\x03\x02\x02\x02" +
		"\u03AE\u03AC\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AFQ\x03\x02" +
		"\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B1\u03B9\x05P)\x02\u03B2\u03B3" +
		"\x05P)\x02\u03B3\u03B4\x07x\x02\x02\u03B4\u03B5\x05X-\x02\u03B5\u03B6" +
		"\x07y\x02\x02\u03B6\u03B7\x05T+\x02\u03B7\u03B9\x03\x02\x02\x02\u03B8" +
		"\u03B1\x03\x02\x02\x02\u03B8\u03B2\x03\x02\x02\x02\u03B9S\x03\x02\x02" +
		"\x02\u03BA\u03C1\x05R*\x02\u03BB\u03BC\x05P)\x02\u03BC\u03BD\x05V,\x02" +
		"\u03BD\u03BE\x05\u0118\x8D\x02\u03BE\u03C1\x03\x02\x02\x02\u03BF\u03C1" +
		"\x05\u0178\xBD\x02\u03C0\u03BA\x03\x02\x02\x02\u03C0\u03BB\x03\x02\x02" +
		"\x02\u03C0\u03BF\x03\x02\x02\x02\u03C1U\x03\x02\x02\x02\u03C2\u03CE\x07" +
		"`\x02\x02\u03C3\u03CE\x07e\x02\x02\u03C4\u03CE\x07f\x02\x02\u03C5\u03CE" +
		"\x07g\x02\x02\u03C6\u03CE\x07c\x02\x02\u03C7\u03CE\x07d\x02\x02\u03C8" +
		"\u03CE\x05\u0184\xC3\x02\u03C9\u03CE\x07l\x02\x02\u03CA\u03CE\x07i\x02" +
		"\x02\u03CB\u03CE\x07h\x02\x02\u03CC\u03CE\x07j\x02\x02\u03CD\u03C2\x03" +
		"\x02\x02\x02\u03CD\u03C3\x03\x02\x02\x02\u03CD\u03C4\x03\x02\x02\x02\u03CD" +
		"\u03C5\x03\x02\x02\x02\u03CD\u03C6\x03\x02\x02\x02\u03CD\u03C7\x03\x02" +
		"\x02\x02\u03CD\u03C8\x03\x02\x02\x02\u03CD\u03C9\x03\x02\x02\x02\u03CD" +
		"\u03CA\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CC\x03\x02" +
		"\x02\x02\u03CEW\x03\x02\x02\x02\u03CF\u03D0\b-\x01\x02\u03D0\u03D1\x05" +
		"T+\x02\u03D1\u03D7\x03\x02\x02\x02\u03D2\u03D3\f\x03\x02\x02\u03D3\u03D4" +
		"\x07u\x02\x02\u03D4\u03D6\x05T+\x02\u03D5\u03D2\x03\x02\x02\x02\u03D6" +
		"\u03D9\x03\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02\u03D7\u03D8\x03\x02" +
		"\x02\x02\u03D8Y\x03\x02\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03DA\u03DB" +
		"\x05R*\x02\u03DB[\x03\x02\x02\x02\u03DC\u03F7\x05^0\x02\u03DD\u03DF\x05" +
		"\xD0i\x02\u03DE\u03DD\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF" +
		"\u03E0\x03\x02\x02\x02\u03E0\u03F7\x05`1\x02\u03E1\u03E3\x05\xD0i\x02" +
		"\u03E2\u03E1\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E4\x03" +
		"\x02\x02\x02\u03E4\u03F7\x05b2\x02\u03E5\u03E7\x05\xD0i\x02\u03E6\u03E5" +
		"\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02" +
		"\u03E8\u03F7\x05f4\x02\u03E9\u03EB\x05\xD0i\x02\u03EA\u03E9\x03\x02\x02" +
		"\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03F7" +
		"\x05j6\x02\u03ED\u03EF\x05\xD0i\x02\u03EE\u03ED\x03\x02\x02\x02\u03EE" +
		"\u03EF\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F7\x05r:\x02" +
		"\u03F1\u03F7\x05t;\x02\u03F2\u03F4\x05\xD0i\x02\u03F3\u03F2\x03\x02\x02" +
		"\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F7" +
		"\x05\u016E\xB8\x02\u03F6\u03DC\x03\x02\x02\x02\u03F6\u03DE\x03\x02\x02" +
		"\x02\u03F6\u03E2\x03\x02\x02\x02\u03F6\u03E6\x03\x02\x02\x02\u03F6\u03EA" +
		"\x03\x02\x02\x02\u03F6\u03EE\x03\x02\x02\x02\u03F6\u03F1\x03\x02\x02\x02" +
		"\u03F6\u03F3\x03\x02\x02\x02\u03F7]\x03\x02\x02\x02\u03F8\u03FA\x05\xD0" +
		"i\x02\u03F9\u03F8\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FB" +
		"\x03\x02\x02\x02\u03FB\u03FC\x07\x7F\x02\x02\u03FC\u03FD\x07y\x02\x02" +
		"\u03FD\u040D\x05\\/\x02\u03FE\u0400\x05\xD0i\x02\u03FF\u03FE\x03\x02\x02" +
		"\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\u0402" +
		"\x07\v\x02\x02\u0402\u0403\x05Z.\x02\u0403\u0404\x07y\x02\x02\u0404\u0405" +
		"\x05\\/\x02\u0405\u040D\x03\x02\x02\x02\u0406\u0408\x05\xD0i\x02\u0407" +
		"\u0406\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u0409\x03\x02" +
		"\x02\x02\u0409\u040A\x07\x16\x02\x02\u040A\u040B\x07y\x02\x02\u040B\u040D" +
		"\x05\\/\x02\u040C\u03F9\x03\x02\x02\x02\u040C\u03FF\x03\x02\x02\x02\u040C" +
		"\u0407\x03\x02\x02\x02\u040D_\x03\x02\x02\x02\u040E\u0410\x05X-\x02\u040F" +
		"\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0411\x03\x02" +
		"\x02\x02\u0411\u0412\x07{\x02\x02\u0412a\x03\x02\x02\x02\u0413\u0415\x07" +
		"T\x02\x02\u0414\u0416\x05d3\x02\u0415\u0414\x03\x02\x02\x02\u0415\u0416" +
		"\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0418\x07U\x02\x02" +
		"\u0418c\x03\x02\x02\x02\u0419\u041A\b3\x01\x02\u041A\u041B\x05\\/\x02" +
		"\u041B\u0420\x03\x02\x02\x02\u041C\u041D\f\x03\x02\x02\u041D\u041F\x05" +
		"\\/\x02\u041E\u041C\x03\x02\x02\x02\u041F\u0422\x03\x02\x02\x02\u0420" +
		"\u041E\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421e\x03\x02\x02" +
		"\x02\u0422\u0420\x03\x02\x02\x02\u0423\u0424\x07&\x02\x02\u0424\u0425" +
		"\x07P\x02\x02\u0425\u0426\x05h5\x02\u0426\u0427\x07Q\x02\x02\u0427\u0428" +
		"\x05\\/\x02\u0428\u0438\x03\x02\x02\x02\u0429\u042A\x07&\x02\x02\u042A" +
		"\u042B\x07P\x02\x02\u042B\u042C\x05h5\x02\u042C\u042D\x07Q\x02\x02\u042D" +
		"\u042E\x05\\/\x02\u042E\u042F\x07\x1B\x02\x02\u042F\u0430\x05\\/\x02\u0430" +
		"\u0438\x03\x02\x02\x02\u0431\u0432\x07>\x02\x02\u0432\u0433\x07P\x02\x02" +
		"\u0433\u0434\x05h5\x02\u0434\u0435\x07Q\x02\x02\u0435\u0436\x05\\/\x02" +
		"\u0436\u0438\x03\x02\x02\x02\u0437\u0423\x03\x02\x02\x02\u0437\u0429\x03" +
		"\x02\x02\x02\u0437\u0431\x03\x02\x02\x02\u0438g\x03\x02\x02\x02\u0439" +
		"\u044A\x05X-\x02\u043A\u043C\x05\xD0i\x02\u043B\u043A\x03\x02\x02\x02" +
		"\u043B\u043C\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x05" +
		"\x88E\x02\u043E\u043F\x05\xEAv\x02\u043F\u0440\x07`\x02\x02\u0440\u0441" +
		"\x05\u0118\x8D\x02\u0441\u044A\x03\x02\x02\x02\u0442\u0444\x05\xD0i\x02" +
		"\u0443\u0442\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0445\x03" +
		"\x02\x02\x02\u0445\u0446\x05\x88E\x02\u0446\u0447\x05\xEAv\x02\u0447\u0448" +
		"\x05\u011C\x8F\x02\u0448\u044A\x03\x02\x02\x02\u0449\u0439\x03\x02\x02" +
		"\x02\u0449\u043B\x03\x02\x02\x02\u0449\u0443\x03\x02\x02\x02\u044Ai\x03" +
		"\x02\x02\x02\u044B\u044C\x07O\x02\x02\u044C\u044D\x07P\x02\x02\u044D\u044E" +
		"\x05h5\x02\u044E\u044F\x07Q\x02\x02\u044F\u0450\x05\\/\x02\u0450\u046F" +
		"\x03\x02\x02\x02\u0451\u0452\x07\x18\x02\x02\u0452\u0453\x05\\/\x02\u0453" +
		"\u0454\x07O\x02\x02\u0454\u0455\x07P\x02\x02\u0455\u0456\x05X-\x02\u0456" +
		"\u0457\x07Q\x02\x02\u0457\u0458\x07{\x02\x02\u0458\u046F\x03\x02\x02\x02" +
		"\u0459\u045A\x07#\x02\x02\u045A\u045B\x07P\x02\x02\u045B\u045D\x05l7\x02" +
		"\u045C\u045E\x05h5\x02\u045D\u045C\x03\x02\x02\x02\u045D\u045E\x03\x02" +
		"\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0461\x07{\x02\x02\u0460\u0462" +
		"\x05X-\x02\u0461\u0460\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462" +
		"\u0463\x03\x02\x02\x02\u0463\u0464\x07Q\x02\x02\u0464\u0465\x05\\/\x02" +
		"\u0465\u046F\x03\x02\x02\x02\u0466\u0467\x07#\x02\x02\u0467\u0468\x07" +
		"P\x02\x02\u0468\u0469\x05n8\x02\u0469\u046A\x07y\x02\x02\u046A\u046B\x05" +
		"p9\x02\u046B\u046C\x07Q\x02\x02\u046C\u046D\x05\\/\x02\u046D\u046F\x03" +
		"\x02\x02\x02\u046E\u044B\x03\x02\x02\x02\u046E\u0451\x03\x02\x02\x02\u046E" +
		"\u0459\x03\x02\x02\x02\u046E\u0466\x03\x02\x02\x02\u046Fk\x03\x02\x02" +
		"\x02\u0470\u0473\x05`1\x02\u0471\u0473\x05~@\x02\u0472\u0470\x03\x02\x02" +
		"\x02\u0472\u0471\x03\x02\x02\x02\u0473m\x03\x02\x02\x02\u0474\u0476\x05" +
		"\xD0i\x02\u0475\u0474\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476" +
		"\u0477\x03\x02\x02\x02\u0477\u0478\x05\x88E\x02\u0478\u0479\x05\xEAv\x02" +
		"\u0479o\x03\x02\x02\x02\u047A\u047D\x05X-\x02\u047B\u047D\x05\u011C\x8F" +
		"\x02\u047C\u047A\x03\x02\x02\x02\u047C\u047B\x03\x02\x02\x02\u047Dq\x03" +
		"\x02\x02\x02\u047E\u047F\x07\n\x02\x02\u047F\u048F\x07{\x02\x02\u0480" +
		"\u0481\x07\x14\x02\x02\u0481\u048F\x07{\x02\x02\u0482\u0484\x076\x02\x02" +
		"\u0483\u0485\x05X-\x02\u0484\u0483\x03\x02\x02\x02\u0484\u0485\x03\x02" +
		"\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u048F\x07{\x02\x02\u0487\u0488" +
		"\x076\x02\x02\u0488\u0489\x05\u011C\x8F\x02\u0489\u048A\x07{\x02\x02\u048A" +
		"\u048F\x03\x02\x02\x02\u048B\u048C\x07%\x02\x02\u048C\u048D\x07\x7F\x02" +
		"\x02\u048D\u048F\x07{\x02\x02\u048E\u047E\x03\x02\x02\x02\u048E\u0480" +
		"\x03\x02\x02\x02\u048E\u0482\x03\x02\x02\x02\u048E\u0487\x03\x02\x02\x02" +
		"\u048E\u048B\x03\x02\x02\x02\u048Fs\x03\x02\x02\x02\u0490\u0491\x05z>" +
		"\x02\u0491u\x03\x02\x02\x02\u0492\u0493\b<\x01\x02\u0493\u0494\x05x=\x02" +
		"\u0494\u0499\x03\x02\x02\x02\u0495\u0496\f\x03\x02\x02\u0496\u0498\x05" +
		"x=\x02\u0497\u0495\x03\x02\x02\x02\u0498\u049B\x03\x02\x02\x02\u0499\u0497" +
		"\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049Aw\x03\x02\x02\x02\u049B" +
		"\u0499\x03\x02\x02\x02\u049C\u04A6\x05z>\x02\u049D\u04A6\x05\u0110\x89" +
		"\x02\u049E\u04A6\x05\u0156\xAC\x02\u049F\u04A6\x05\u016A\xB6\x02\u04A0" +
		"\u04A6\x05\u016C\xB7\x02\u04A1\u04A6\x05\xCEh\x02\u04A2\u04A6\x05\xB6" +
		"\\\x02\u04A3\u04A6\x05\x82B\x02\u04A4\u04A6\x05\x84C\x02\u04A5\u049C\x03" +
		"\x02\x02\x02\u04A5\u049D\x03\x02\x02\x02\u04A5\u049E\x03\x02\x02\x02\u04A5" +
		"\u049F\x03\x02\x02\x02\u04A5\u04A0\x03\x02\x02\x02\u04A5\u04A1\x03\x02" +
		"\x02\x02\u04A5\u04A2\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A5" +
		"\u04A4\x03\x02\x02\x02\u04A6y\x03\x02\x02\x02\u04A7\u04B0\x05~@\x02\u04A8" +
		"\u04B0\x05\xCCg\x02\u04A9\u04B0\x05\xC4c\x02\u04AA\u04B0\x05\xC8e\x02" +
		"\u04AB\u04B0\x05\xCAf\x02\u04AC\u04B0\x05\x80A\x02\u04AD\u04B0\x05|?\x02" +
		"\u04AE\u04B0\x05\xA6T\x02\u04AF\u04A7\x03\x02\x02\x02\u04AF\u04A8\x03" +
		"\x02\x02\x02\u04AF\u04A9\x03\x02\x02\x02\u04AF\u04AA\x03\x02\x02\x02\u04AF" +
		"\u04AB\x03\x02\x02\x02\u04AF\u04AC\x03\x02\x02\x02\u04AF\u04AD\x03\x02" +
		"\x02\x02\u04AF\u04AE\x03\x02\x02\x02\u04B0{\x03\x02\x02\x02\u04B1\u04B2" +
		"\x07J\x02\x02\u04B2\u04B4\x07\x7F\x02\x02\u04B3\u04B5\x05\xD0i\x02\u04B4" +
		"\u04B3\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B6\x03\x02" +
		"\x02\x02\u04B6\u04B7\x07`\x02\x02\u04B7\u04B8\x05\xFE\x80\x02\u04B8\u04B9" +
		"\x07{\x02\x02\u04B9}\x03\x02\x02\x02\u04BA\u04BC\x05\x88E\x02\u04BB\u04BA" +
		"\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04BE\x03\x02\x02\x02" +
		"\u04BD\u04BF\x05\xE6t\x02\u04BE\u04BD\x03\x02\x02\x02\u04BE\u04BF\x03" +
		"\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C9\x07{\x02\x02\u04C1" +
		"\u04C3\x05\xD0i\x02\u04C2\u04C4\x05\x88E\x02\u04C3\u04C2\x03\x02\x02\x02" +
		"\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C6\x05" +
		"\xE6t\x02\u04C6\u04C7\x07{\x02\x02\u04C7\u04C9\x03\x02\x02\x02\u04C8\u04BB" +
		"\x03\x02\x02\x02\u04C8\u04C1\x03\x02\x02\x02\u04C9\x7F\x03\x02\x02\x02" +
		"\u04CA\u04CB\x07;\x02\x02\u04CB\u04CC\x07P\x02\x02\u04CC\u04CD\x05Z.\x02" +
		"\u04CD\u04CE\x07u\x02\x02\u04CE\u04CF\x07\x88\x02\x02\u04CF\u04D0\x07" +
		"Q\x02\x02\u04D0\u04D1\x07{\x02\x02\u04D1\x81\x03\x02\x02\x02\u04D2\u04D3" +
		"\x07{\x02\x02\u04D3\x83\x03\x02\x02\x02\u04D4\u04D5\x05\xD0i\x02\u04D5" +
		"\u04D6\x07{\x02\x02\u04D6\x85\x03\x02\x02\x02\u04D7\u04DE\x05\x8AF\x02" +
		"\u04D8\u04DE\x05\x90I\x02\u04D9\u04DE\x05\x8CG\x02\u04DA\u04DE\x07$\x02" +
		"\x02\u04DB\u04DE\x07E\x02\x02\u04DC\u04DE\x07\x12\x02\x02\u04DD\u04D7" +
		"\x03\x02\x02\x02\u04DD\u04D8\x03\x02\x02\x02\u04DD\u04D9\x03\x02\x02\x02" +
		"\u04DD\u04DA\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DD\u04DC\x03" +
		"\x02\x02\x02\u04DE\x87\x03\x02\x02\x02\u04DF\u04E1\x05\x86D\x02\u04E0" +
		"\u04E2\x05\xD0i\x02\u04E1\u04E0\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02" +
		"\x02\u04E2\u04E7\x03\x02\x02\x02\u04E3\u04E4\x05\x86D\x02\u04E4\u04E5" +
		"\x05\x88E\x02\u04E5\u04E7\x03\x02\x02\x02\u04E6\u04DF\x03\x02\x02\x02" +
		"\u04E6\u04E3\x03\x02\x02\x02\u04E7\x89\x03\x02\x02\x02\u04E8\u04E9\t\x04" +
		"\x02\x02\u04E9\x8B\x03\x02\x02\x02\u04EA\u04EB\t\x05\x02\x02\u04EB\x8D" +
		"\x03\x02\x02\x02\u04EC\u04ED\x07\x7F\x02\x02\u04ED\x8F\x03\x02\x02\x02" +
		"\u04EE\u04F2\x05\x92J\x02\u04EF\u04F2\x05\u0120\x91\x02\u04F0\u04F2\x05" +
		"\xA2R\x02\u04F1\u04EE\x03\x02\x02\x02\u04F1\u04EF\x03\x02\x02\x02\u04F1" +
		"\u04F0\x03\x02\x02\x02\u04F2\x91\x03\x02\x02\x02\u04F3\u04F8\x05\x98M" +
		"\x02\u04F4\u04F8\x05\x9EP\x02\u04F5\u04F8\x05\u0168\xB5\x02\u04F6\u04F8" +
		"\x05\xF8}\x02\u04F7\u04F3\x03\x02\x02\x02\u04F7\u04F4\x03\x02\x02\x02" +
		"\u04F7\u04F5\x03\x02\x02\x02\u04F7\u04F6\x03\x02\x02\x02\u04F8\x93\x03" +
		"\x02\x02\x02\u04F9\u04FB\x05\x90I\x02\u04FA\u04FC\x05\xD0i\x02\u04FB\u04FA" +
		"\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u0501\x03\x02\x02\x02" +
		"\u04FD\u04FE\x05\x90I\x02\u04FE\u04FF\x05\x94K\x02\u04FF\u0501\x03\x02" +
		"\x02\x02\u0500\u04F9\x03\x02\x02\x02\u0500\u04FD\x03\x02\x02\x02\u0501" +
		"\x95\x03\x02\x02\x02\u0502\u0504\x05\x92J\x02\u0503\u0505\x05\xD0i\x02" +
		"\u0504\u0503\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u050A\x03" +
		"\x02\x02\x02\u0506\u0507\x05\x92J\x02\u0507\u0508\x05\x96L\x02\u0508\u050A" +
		"\x03\x02\x02\x02\u0509\u0502\x03\x02\x02\x02\u0509\u0506\x03\x02\x02\x02" +
		"\u050A\x97\x03\x02\x02\x02\u050B\u050D\x05\f\x07\x02\u050C\u050B\x03\x02" +
		"\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E" +
		"\u0523\x05\x9AN\x02\u050F\u0510\x05\f\x07\x02\u0510\u0511\x07?\x02\x02" +
		"\u0511\u0512\x05\u015E\xB0\x02\u0512\u0523\x03\x02\x02\x02\u0513\u0523" +
		"\x07\r\x02\x02\u0514\u0523\x07\x0E\x02\x02\u0515\u0523\x07\x0F\x02\x02" +
		"\u0516\u0523\x07N\x02\x02\u0517\u0523\x07\t\x02\x02\u0518\u0523\x077\x02" +
		"\x02\u0519\u0523\x07(\x02\x02\u051A\u0523\x07)\x02\x02\u051B\u0523\x07" +
		"8\x02\x02\u051C\u0523\x07I\x02\x02\u051D\u0523\x07\"\x02\x02\u051E\u0523" +
		"\x07\x19\x02\x02\u051F\u0523\x07L\x02\x02\u0520\u0523\x07\b\x02\x02\u0521" +
		"\u0523\x05\x9CO\x02\u0522\u050C\x03\x02\x02\x02\u0522\u050F\x03\x02\x02" +
		"\x02\u0522\u0513\x03\x02\x02\x02\u0522\u0514\x03\x02\x02\x02\u0522\u0515" +
		"\x03\x02\x02\x02\u0522\u0516\x03\x02\x02\x02\u0522\u0517\x03\x02\x02\x02" +
		"\u0522\u0518\x03\x02\x02\x02\u0522\u0519\x03\x02\x02\x02\u0522\u051A\x03" +
		"\x02\x02\x02\u0522\u051B\x03\x02\x02\x02\u0522\u051C\x03\x02\x02\x02\u0522" +
		"\u051D\x03\x02\x02\x02\u0522\u051E\x03\x02\x02\x02\u0522\u051F\x03\x02" +
		"\x02\x02\u0522\u0520\x03\x02\x02\x02\u0522\u0521\x03\x02\x02\x02\u0523" +
		"\x99\x03\x02\x02\x02\u0524\u0529\x05\u011E\x90\x02\u0525\u0529\x05\xA0" +
		"Q\x02\u0526\u0529\x05\x8EH\x02\u0527\u0529\x05\u015E\xB0\x02\u0528\u0524" +
		"\x03\x02\x02\x02\u0528\u0525\x03\x02\x02\x02\u0528\u0526\x03\x02\x02\x02" +
		"\u0528\u0527\x03\x02\x02\x02\u0529\x9B\x03\x02\x02\x02\u052A\u052B\x07" +
		"\x15\x02\x02\u052B\u052C\x07P\x02\x02\u052C\u052D\x05X-\x02\u052D\u052E" +
		"\x07Q\x02\x02\u052E\u0534\x03\x02\x02\x02\u052F\u0530\x07\x15\x02\x02" +
		"\u0530\u0531\x07P\x02\x02\u0531\u0532\x07\b\x02\x02\u0532\u0534\x07Q\x02" +
		"\x02\u0533\u052A\x03\x02\x02\x02\u0533\u052F\x03\x02\x02\x02\u0534\x9D" +
		"\x03\x02\x02\x02\u0535\u0537\x05\u0128\x95\x02\u0536\u0538\x05\xD0i\x02" +
		"\u0537\u0536\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538\u053A\x03" +
		"\x02\x02\x02\u0539\u053B\x05\f\x07\x02\u053A\u0539\x03\x02\x02\x02\u053A" +
		"\u053B\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C\u053D\x07\x7F" +
		"\x02\x02\u053D\u054E\x03\x02\x02\x02\u053E\u053F\x05\u0128\x95\x02\u053F" +
		"\u0540\x05\u015E\xB0\x02\u0540\u054E\x03\x02\x02\x02\u0541\u0542\x05\u0128" +
		"\x95\x02\u0542\u0544\x05\f\x07\x02\u0543\u0545\x07?\x02\x02\u0544\u0543" +
		"\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02" +
		"\u0546\u0547\x05\u015E\xB0\x02\u0547\u054E\x03\x02\x02\x02\u0548\u054A" +
		"\x07\x1C\x02\x02\u0549\u054B\x05\f\x07\x02\u054A\u0549\x03\x02\x02\x02" +
		"\u054A\u054B\x03\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u054E\x07" +
		"\x7F\x02\x02\u054D\u0535\x03\x02\x02\x02\u054D\u053E\x03\x02\x02\x02\u054D" +
		"\u0541\x03\x02\x02\x02\u054D\u0548\x03\x02\x02\x02\u054E\x9F\x03\x02\x02" +
		"\x02\u054F\u0550\x07\x7F\x02\x02\u0550\xA1\x03\x02\x02\x02\u0551\u0552" +
		"\x05\xA4S\x02\u0552\u0554\x07T\x02\x02\u0553\u0555\x05\xACW\x02\u0554" +
		"\u0553\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0556\x03\x02" +
		"\x02\x02\u0556\u0557\x07U\x02\x02\u0557\u055F\x03\x02\x02\x02\u0558\u0559" +
		"\x05\xA4S\x02\u0559\u055A\x07T\x02\x02\u055A\u055B\x05\xACW\x02\u055B" +
		"\u055C\x07u\x02\x02\u055C\u055D\x07U\x02\x02\u055D\u055F\x03\x02\x02\x02" +
		"\u055E\u0551\x03\x02\x02\x02\u055E\u0558\x03\x02\x02\x02\u055F\xA3\x03" +
		"\x02\x02\x02\u0560\u0562\x05\xA8U\x02\u0561\u0563\x05\xD0i\x02\u0562\u0561" +
		"\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0565\x03\x02\x02\x02" +
		"\u0564\u0566\x07\x7F\x02\x02\u0565\u0564\x03\x02\x02\x02\u0565\u0566\x03" +
		"\x02\x02\x02\u0566\u0568\x03\x02\x02\x02\u0567\u0569\x05\xAAV\x02\u0568" +
		"\u0567\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569\u0574\x03\x02" +
		"\x02\x02\u056A\u056C\x05\xA8U\x02\u056B\u056D\x05\xD0i\x02\u056C\u056B" +
		"\x03\x02\x02\x02\u056C\u056D\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02" +
		"\u056E\u056F\x05\f\x07\x02\u056F\u0571\x07\x7F\x02\x02\u0570\u0572\x05" +
		"\xAAV\x02\u0571\u0570\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572" +
		"\u0574\x03\x02\x02\x02\u0573\u0560\x03\x02\x02\x02\u0573\u056A\x03\x02" +
		"\x02\x02\u0574\xA5\x03\x02\x02\x02\u0575\u0577\x05\xA8U\x02\u0576\u0578" +
		"\x05\xD0i\x02\u0577\u0576\x03\x02\x02\x02\u0577\u0578\x03\x02\x02\x02" +
		"\u0578\u0579\x03\x02\x02\x02\u0579\u057B\x07\x7F\x02\x02\u057A\u057C\x05" +
		"\xAAV\x02\u057B\u057A\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C" +
		"\u057D\x03\x02\x02\x02\u057D\u057E\x07{\x02\x02\u057E\xA7\x03\x02\x02" +
		"\x02\u057F\u0585\x07\x1C\x02\x02\u0580\u0581\x07\x1C\x02\x02\u0581\u0585" +
		"\x07\x10\x02\x02\u0582\u0583\x07\x1C\x02\x02\u0583\u0585\x07=\x02\x02" +
		"\u0584\u057F\x03\x02\x02\x02\u0584\u0580\x03\x02\x02\x02\u0584\u0582\x03" +
		"\x02\x02\x02\u0585\xA9\x03\x02\x02\x02\u0586\u0587\x07y\x02\x02\u0587" +
		"\u0588\x05\x94K\x02\u0588\xAB\x03\x02\x02\x02\u0589\u058A\bW\x01\x02\u058A" +
		"\u058B\x05\xAEX\x02\u058B\u0591\x03\x02\x02\x02\u058C\u058D\f\x03\x02" +
		"\x02\u058D\u058E\x07u\x02\x02\u058E\u0590\x05\xAEX\x02\u058F\u058C\x03" +
		"\x02\x02\x02\u0590\u0593\x03\x02\x02\x02\u0591\u058F\x03\x02\x02\x02\u0591" +
		"\u0592\x03\x02\x02\x02\u0592\xAD\x03\x02\x02\x02\u0593\u0591\x03\x02\x02" +
		"\x02\u0594\u059A\x05\xB0Y\x02\u0595\u0596\x05\xB0Y\x02\u0596\u0597\x07" +
		"`\x02\x02\u0597\u0598\x05Z.\x02\u0598\u059A\x03\x02\x02\x02\u0599\u0594" +
		"\x03\x02\x02\x02\u0599\u0595\x03\x02\x02\x02\u059A\xAF\x03\x02\x02\x02" +
		"\u059B\u059C\x07\x7F\x02\x02\u059C\xB1\x03\x02\x02\x02\u059D\u05A0\x05" +
		"\xB4[\x02\u059E\u05A0\x05\xC2b\x02\u059F\u059D\x03\x02\x02\x02\u059F\u059E" +
		"\x03\x02\x02\x02\u05A0\xB3\x03\x02\x02\x02\u05A1\u05A2\x07\x7F\x02\x02" +
		"\u05A2\xB5\x03\x02\x02\x02\u05A3\u05A6\x05\xB8]\x02\u05A4\u05A6\x05\xBE" +
		"`\x02\u05A5\u05A3\x03\x02\x02\x02\u05A5\u05A4\x03\x02\x02\x02\u05A6\xB7" +
		"\x03\x02\x02\x02\u05A7\u05AA\x05\xBA^\x02\u05A8\u05AA\x05\xBC_\x02\u05A9" +
		"\u05A7\x03\x02\x02\x02\u05A9\u05A8\x03\x02\x02\x02\u05AA\xB9\x03\x02\x02" +
		"\x02\u05AB\u05AD\x07\'\x02\x02\u05AC\u05AB\x03\x02\x02\x02\u05AC\u05AD" +
		"\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\u05AF\x07+\x02\x02" +
		"\u05AF\u05B0\x07\x7F\x02\x02\u05B0\u05B1\x07T\x02\x02\u05B1\u05B2\x05" +
		"\xC0a\x02\u05B2\u05B3\x07U\x02\x02\u05B3\xBB\x03\x02\x02\x02\u05B4\u05B6" +
		"\x07\'\x02\x02\u05B5\u05B4\x03\x02\x02\x02\u05B5\u05B6\x03\x02\x02\x02" +
		"\u05B6\u05B7\x03\x02\x02\x02\u05B7\u05B8\x07+\x02\x02\u05B8\u05B9\x05" +
		"\xB4[\x02\u05B9\u05BA\x07T\x02\x02\u05BA\u05BB\x05\xC0a\x02\u05BB\u05BC" +
		"\x07U\x02\x02\u05BC\xBD\x03\x02\x02\x02\u05BD\u05BF\x07\'\x02\x02\u05BE" +
		"\u05BD\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02\u05BF\u05C0\x03\x02" +
		"\x02\x02\u05C0\u05C1\x07+\x02\x02\u05C1\u05C2\x07T\x02\x02\u05C2\u05C3" +
		"\x05\xC0a\x02\u05C3\u05C4\x07U\x02\x02\u05C4\xBF\x03\x02\x02\x02\u05C5" +
		"\u05C7\x05v<\x02\u05C6\u05C5\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02" +
		"\u05C7\xC1\x03\x02\x02\x02\u05C8\u05C9\x07\x7F\x02\x02\u05C9\xC3\x03\x02" +
		"\x02\x02\u05CA\u05CB\x07+\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\u05CB\u05CC\x07\x7F\x02\x02\u05CC\u05CD\x07`\x02\x02\u05CD\u05CE" +
		"\x05\xC6d\x02\u05CE\u05CF\x07{\x02\x02\u05CF\xC5\x03\x02\x02\x02\u05D0" +
		"\u05D2\x05\f\x07\x02\u05D1\u05D0\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02" +
		"\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D4\x05\xB2Z\x02\u05D4\xC7\x03" +
		"\x02\x02\x02\u05D5\u05D7\x07J\x02\x02\u05D6\u05D8\x07G\x02\x02\u05D7\u05D6" +
		"\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02" +
		"\u05D9\u05DA\x05\f\x07\x02\u05DA\u05DB\x05\b\x05\x02\u05DB\u05DC\x07{" +
		"\x02\x02\u05DC\u05E3\x03\x02\x02\x02\u05DD\u05DE\x07J\x02\x02\u05DE\u05DF" +
		"\x07z\x02\x02\u05DF\u05E0\x05\b\x05\x02\u05E0\u05E1\x07{\x02\x02\u05E1" +
		"\u05E3\x03\x02\x02\x02\u05E2\u05D5\x03\x02\x02\x02\u05E2\u05DD\x03\x02" +
		"\x02\x02\u05E3\xC9\x03\x02\x02\x02\u05E4\u05E6\x05\xD0i\x02\u05E5\u05E4" +
		"\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02" +
		"\u05E7\u05E8\x07J\x02\x02\u05E8\u05EA\x07+\x02\x02\u05E9\u05EB\x05\f\x07" +
		"\x02\u05EA\u05E9\x03\x02\x02\x02\u05EA\u05EB\x03\x02\x02\x02\u05EB\u05EC" +
		"\x03\x02\x02\x02\u05EC\u05ED\x05\xB2Z\x02\u05ED\u05EE\x07{\x02\x02\u05EE" +
		"\xCB\x03\x02\x02\x02\u05EF\u05F0\x07\x07\x02\x02\u05F0\u05F1\x07P\x02" +
		"\x02\u05F1\u05F2\x07\x88\x02\x02\u05F2\u05F3\x07Q\x02\x02\u05F3\u05F4" +
		"\x07{\x02\x02\u05F4\xCD\x03\x02\x02\x02\u05F5\u05F6\x07\x1F\x02\x02\u05F6" +
		"\u05F7\x07\x88\x02\x02\u05F7\u05F9\x07T\x02\x02\u05F8\u05FA\x05v<\x02" +
		"\u05F9\u05F8\x03\x02\x02\x02\u05F9\u05FA\x03\x02\x02\x02\u05FA\u05FB\x03" +
		"\x02\x02\x02\u05FB\u0600\x07U\x02\x02\u05FC\u05FD\x07\x1F\x02\x02\u05FD" +
		"\u05FE\x07\x88\x02\x02\u05FE\u0600\x05x=\x02\u05FF\u05F5\x03\x02\x02\x02" +
		"\u05FF\u05FC\x03\x02\x02\x02\u0600\xCF\x03\x02\x02\x02\u0601\u0602\bi" +
		"\x01\x02\u0602\u0603\x05\xD2j\x02\u0603\u0608\x03\x02\x02\x02\u0604\u0605" +
		"\f\x03\x02\x02\u0605\u0607\x05\xD2j\x02\u0606\u0604\x03\x02\x02\x02\u0607" +
		"\u060A\x03\x02\x02\x02\u0608\u0606\x03\x02\x02\x02\u0608\u0609\x03\x02" +
		"\x02\x02\u0609\xD1\x03\x02\x02\x02\u060A\u0608\x03\x02\x02\x02\u060B\u060C" +
		"\x07R\x02\x02\u060C\u060D\x07R\x02\x02\u060D\u060E\x05\xD6l\x02\u060E" +
		"\u060F\x07S\x02\x02\u060F\u0610\x07S\x02\x02\u0610\u0613\x03\x02\x02\x02" +
		"\u0611\u0613\x05\xD4k\x02\u0612\u060B\x03\x02\x02\x02\u0612\u0611\x03" +
		"\x02\x02\x02\u0613\xD3\x03\x02\x02\x02\u0614\u0615\x07\x05\x02\x02\u0615" +
		"\u0616\x07P\x02\x02\u0616\u0618\x05\xFE\x80\x02\u0617\u0619\x07~\x02\x02" +
		"\u0618\u0617\x03\x02\x02\x02\u0618\u0619\x03\x02\x02\x02\u0619\u061A\x03" +
		"\x02\x02\x02\u061A\u061B\x07Q\x02\x02\u061B\u0625\x03\x02\x02\x02\u061C" +
		"\u061D\x07\x05\x02\x02\u061D\u061E\x07P\x02\x02\u061E\u0620\x05Z.\x02" +
		"\u061F\u0621\x07~\x02\x02\u0620\u061F\x03\x02\x02\x02\u0620\u0621\x03" +
		"\x02\x02\x02\u0621\u0622\x03\x02\x02\x02\u0622\u0623\x07Q\x02\x02\u0623" +
		"\u0625\x03\x02\x02\x02\u0624\u0614\x03\x02\x02\x02\u0624\u061C\x03\x02" +
		"\x02\x02\u0625\xD5\x03\x02\x02\x02\u0626\u0628\bl\x01\x02\u0627\u0629" +
		"\x05\xD8m\x02\u0628\u0627\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02" +
		"\u0629\u062E\x03\x02\x02\x02\u062A\u062B\x05\xD8m\x02\u062B\u062C\x07" +
		"~\x02\x02\u062C\u062E\x03\x02\x02\x02\u062D\u0626\x03\x02\x02\x02\u062D" +
		"\u062A\x03\x02\x02\x02\u062E\u063B\x03\x02\x02\x02\u062F\u0630\f\x05\x02" +
		"\x02\u0630\u0632\x07u\x02\x02\u0631\u0633\x05\xD8m\x02\u0632\u0631\x03" +
		"\x02\x02\x02\u0632\u0633\x03\x02\x02\x02\u0633\u063A\x03\x02\x02\x02\u0634" +
		"\u0635\f\x03\x02\x02\u0635\u0636\x07u\x02\x02\u0636\u0637\x05\xD8m\x02" +
		"\u0637\u0638\x07~\x02\x02\u0638\u063A\x03\x02\x02\x02\u0639\u062F\x03" +
		"\x02\x02\x02\u0639\u0634\x03\x02\x02\x02\u063A\u063D\x03\x02\x02\x02\u063B" +
		"\u0639\x03\x02\x02\x02\u063B\u063C\x03\x02\x02\x02\u063C\xD7\x03\x02\x02" +
		"\x02\u063D\u063B\x03\x02\x02\x02\u063E\u0640\x05\xDAn\x02\u063F\u0641" +
		"\x05\xE0q\x02\u0640\u063F\x03\x02\x02\x02\u0640\u0641\x03\x02\x02\x02" +
		"\u0641\xD9\x03\x02\x02\x02\u0642\u0645\x07\x7F\x02\x02\u0643\u0645\x05" +
		"\xDCo\x02\u0644\u0642\x03\x02\x02\x02\u0644\u0643\x03\x02\x02\x02\u0645" +
		"\xDB\x03\x02\x02\x02\u0646\u0647\x05\xDEp\x02\u0647\u0648\x07z\x02\x02" +
		"\u0648\u0649\x07\x7F\x02\x02\u0649\xDD\x03\x02\x02\x02\u064A\u064B\x07" +
		"\x7F\x02\x02\u064B\xDF\x03\x02\x02\x02\u064C\u064D\x07P\x02\x02\u064D" +
		"\u064E\x05\xE2r\x02\u064E\u064F\x07Q\x02\x02\u064F\xE1\x03\x02\x02\x02" +
		"\u0650\u0652\br\x01\x02\u0651\u0653\x05\xE4s\x02\u0652\u0651\x03\x02\x02" +
		"\x02\u0652\u0653\x03\x02\x02\x02\u0653\u0658\x03\x02\x02\x02\u0654\u0655" +
		"\f\x03\x02\x02\u0655\u0657\x05\xE4s\x02\u0656\u0654\x03\x02\x02\x02\u0657" +
		"\u065A\x03\x02\x02\x02\u0658\u0656\x03\x02\x02\x02\u0658\u0659\x03\x02" +
		"\x02\x02\u0659\xE3\x03\x02\x02\x02\u065A\u0658\x03\x02\x02\x02\u065B\u065C" +
		"\x07P\x02\x02\u065C\u065D\x05\xE2r\x02\u065D\u065E\x07Q\x02\x02\u065E" +
		"\u0668\x03\x02\x02\x02\u065F\u0660\x07R\x02\x02\u0660\u0661\x05\xE2r\x02" +
		"\u0661\u0662\x07S\x02\x02\u0662\u0668\x03\x02\x02\x02\u0663\u0664\x07" +
		"T\x02\x02\u0664\u0665\x05\xE2r\x02\u0665\u0666\x07U\x02\x02\u0666\u0668" +
		"\x03\x02\x02\x02\u0667\u065B\x03\x02\x02\x02\u0667\u065F\x03\x02\x02\x02" +
		"\u0667\u0663\x03\x02\x02\x02\u0668\xE5\x03\x02\x02\x02\u0669\u066A\bt" +
		"\x01\x02\u066A\u066B\x05\xE8u\x02\u066B\u0671\x03\x02\x02\x02\u066C\u066D" +
		"\f\x03\x02\x02\u066D\u066E\x07u\x02\x02\u066E\u0670\x05\xE8u\x02\u066F" +
		"\u066C\x03\x02\x02\x02\u0670\u0673\x03\x02\x02\x02\u0671\u066F\x03\x02" +
		"\x02\x02\u0671\u0672\x03\x02\x02\x02\u0672\xE7\x03\x02\x02\x02\u0673\u0671" +
		"\x03\x02\x02\x02\u0674\u0676\x05\xEAv\x02\u0675\u0677\x05\u0114\x8B\x02" +
		"\u0676\u0675\x03\x02\x02\x02\u0676\u0677\x03\x02\x02\x02\u0677\xE9\x03" +
		"\x02\x02\x02\u0678\u067E\x05\xECw\x02\u0679\u067A\x05\xEEx\x02\u067A\u067B" +
		"\x05\xF0y\x02\u067B\u067C\x05\xF2z\x02\u067C\u067E\x03\x02\x02\x02\u067D" +
		"\u0678\x03\x02\x02\x02\u067D\u0679\x03\x02\x02\x02\u067E\xEB\x03\x02\x02" +
		"\x02\u067F\u0684\x05\xEEx\x02\u0680\u0681\x05\xF4{\x02\u0681\u0682\x05" +
		"\xECw\x02\u0682\u0684\x03\x02\x02\x02\u0683\u067F\x03\x02\x02\x02\u0683" +
		"\u0680\x03\x02\x02\x02\u0684\xED\x03\x02\x02\x02\u0685\u0686\bx\x01\x02" +
		"\u0686\u0688\x05\xFC\x7F\x02\u0687\u0689\x05\xD0i\x02\u0688\u0687\x03" +
		"\x02\x02\x02\u0688\u0689\x03\x02\x02\x02\u0689\u068F\x03\x02\x02\x02\u068A" +
		"\u068B\x07P\x02\x02\u068B\u068C\x05\xECw\x02\u068C\u068D\x07Q\x02\x02" +
		"\u068D\u068F\x03\x02\x02\x02\u068E\u0685\x03\x02\x02\x02\u068E\u068A\x03" +
		"\x02\x02\x02\u068F\u069D\x03\x02\x02\x02\u0690\u0691\f\x05\x02\x02\u0691" +
		"\u069C\x05\xF0y\x02\u0692\u0693\f\x04\x02\x02\u0693\u0695\x07R\x02\x02" +
		"\u0694\u0696\x05Z.\x02\u0695\u0694\x03\x02\x02\x02\u0695\u0696\x03\x02" +
		"\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697\u0699\x07S\x02\x02\u0698\u069A" +
		"\x05\xD0i\x02\u0699\u0698\x03\x02\x02\x02\u0699\u069A\x03\x02\x02\x02" +
		"\u069A\u069C\x03\x02\x02\x02\u069B\u0690\x03\x02\x02\x02\u069B\u0692\x03" +
		"\x02\x02\x02\u069C\u069F\x03\x02\x02\x02\u069D\u069B\x03\x02\x02\x02\u069D" +
		"\u069E\x03\x02\x02\x02\u069E\xEF\x03\x02\x02\x02\u069F\u069D\x03\x02\x02" +
		"\x02\u06A0\u06A1\x07P\x02\x02\u06A1\u06A2\x05\u010A\x86\x02\u06A2\u06A4" +
		"\x07Q\x02\x02\u06A3\u06A5\x05\xF6|\x02\u06A4\u06A3\x03\x02\x02\x02\u06A4" +
		"\u06A5\x03\x02\x02\x02\u06A5\u06A7\x03\x02\x02\x02\u06A6\u06A8\x05\xFA" +
		"~\x02\u06A7\u06A6\x03\x02\x02\x02\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06AA" +
		"\x03\x02\x02\x02\u06A9\u06AB\x05\u017A\xBE\x02\u06AA\u06A9\x03\x02\x02" +
		"\x02\u06AA\u06AB\x03\x02\x02\x02\u06AB\u06AD\x03\x02\x02\x02\u06AC\u06AE" +
		"\x05\xD0i\x02\u06AD\u06AC\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02" +
		"\u06AE\xF1\x03\x02\x02\x02\u06AF\u06B0\x07w\x02\x02\u06B0\u06B2\x05\x96" +
		"L\x02\u06B1\u06B3\x05\u0100\x81\x02\u06B2\u06B1\x03\x02\x02\x02\u06B2" +
		"\u06B3\x03\x02\x02\x02\u06B3\xF3\x03\x02\x02\x02\u06B4\u06B6\x07X\x02" +
		"\x02\u06B5\u06B7\x05\xD0i\x02\u06B6\u06B5\x03\x02\x02\x02\u06B6\u06B7" +
		"\x03\x02\x02\x02\u06B7\u06B9\x03\x02\x02\x02\u06B8\u06BA\x05\xF6|\x02" +
		"\u06B9\u06B8\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06CC\x03" +
		"\x02\x02\x02\u06BB\u06BD\x07\\\x02\x02\u06BC\u06BE\x05\xD0i\x02\u06BD" +
		"\u06BC\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02\u06BE\u06CC\x03\x02" +
		"\x02\x02\u06BF\u06C1\x07q\x02\x02\u06C0\u06C2\x05\xD0i\x02\u06C1\u06C0" +
		"\x03\x02\x02\x02\u06C1\u06C2\x03\x02\x02\x02\u06C2\u06CC\x03\x02\x02\x02" +
		"\u06C3\u06C4\x05\f\x07\x02\u06C4\u06C6\x07X\x02\x02\u06C5\u06C7\x05\xD0" +
		"i\x02\u06C6\u06C5\x03\x02\x02\x02\u06C6\u06C7\x03\x02\x02\x02\u06C7\u06C9" +
		"\x03\x02\x02\x02\u06C8\u06CA\x05\xF6|\x02\u06C9\u06C8\x03\x02\x02\x02" +
		"\u06C9\u06CA\x03\x02\x02\x02\u06CA\u06CC\x03\x02\x02\x02\u06CB\u06B4\x03" +
		"\x02\x02\x02\u06CB\u06BB\x03\x02\x02\x02\u06CB\u06BF\x03\x02\x02\x02\u06CB" +
		"\u06C3\x03\x02\x02\x02\u06CC\xF5\x03\x02\x02\x02\u06CD\u06CF\x05\xF8}" +
		"\x02\u06CE\u06D0\x05\xF6|\x02\u06CF\u06CE\x03\x02\x02\x02\u06CF\u06D0" +
		"\x03\x02\x02\x02\u06D0\xF7\x03\x02\x02\x02\u06D1\u06D2\t\x06\x02\x02\u06D2" +
		"\xF9\x03\x02\x02\x02\u06D3\u06D4\t\x07\x02\x02\u06D4\xFB\x03\x02\x02\x02" +
		"\u06D5\u06D7\x07~\x02\x02\u06D6\u06D5\x03\x02\x02\x02\u06D6\u06D7\x03" +
		"\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06D9\x05\x06\x04\x02\u06D9" +
		"\xFD\x03\x02\x02\x02\u06DA\u06DC\x05\x94K\x02\u06DB\u06DD\x05\u0100\x81" +
		"\x02\u06DC\u06DB\x03\x02\x02\x02\u06DC\u06DD\x03\x02\x02\x02\u06DD\xFF" +
		"\x03\x02\x02\x02\u06DE\u06E7\x05\u0102\x82\x02\u06DF\u06E1\x05\u0104\x83" +
		"\x02\u06E0\u06DF\x03\x02\x02\x02\u06E0\u06E1\x03\x02\x02\x02\u06E1\u06E2" +
		"\x03\x02\x02\x02\u06E2\u06E3\x05\xF0y\x02\u06E3\u06E4\x05\xF2z\x02\u06E4" +
		"\u06E7\x03\x02\x02\x02\u06E5\u06E7\x05\u0106\x84\x02\u06E6\u06DE\x03\x02" +
		"\x02\x02\u06E6\u06E0\x03\x02\x02\x02\u06E6\u06E5\x03\x02\x02\x02\u06E7" +
		"\u0101\x03\x02\x02\x02\u06E8\u06EE\x05\u0104\x83\x02\u06E9\u06EB\x05\xF4" +
		"{\x02\u06EA\u06EC\x05\u0102\x82\x02\u06EB\u06EA\x03\x02\x02\x02\u06EB" +
		"\u06EC\x03\x02\x02\x02\u06EC\u06EE\x03\x02\x02\x02\u06ED\u06E8\x03\x02" +
		"\x02\x02\u06ED\u06E9\x03\x02\x02\x02\u06EE\u0103\x03\x02\x02\x02\u06EF" +
		"\u06F0\b\x83\x01\x02\u06F0\u06FE\x05\xF0y\x02\u06F1\u06F3\x07R\x02\x02" +
		"\u06F2\u06F4\x05Z.\x02\u06F3\u06F2\x03\x02\x02\x02\u06F3\u06F4\x03\x02" +
		"\x02\x02\u06F4\u06F5\x03\x02\x02\x02\u06F5\u06F7\x07S\x02\x02\u06F6\u06F8" +
		"\x05\xD0i\x02\u06F7\u06F6\x03\x02\x02\x02\u06F7\u06F8\x03\x02\x02\x02" +
		"\u06F8\u06FE\x03\x02\x02\x02\u06F9\u06FA\x07P\x02\x02\u06FA\u06FB\x05" +
		"\u0102\x82\x02\u06FB\u06FC\x07Q\x02\x02\u06FC\u06FE\x03\x02\x02\x02\u06FD" +
		"\u06EF\x03\x02\x02\x02\u06FD\u06F1\x03\x02\x02\x02\u06FD\u06F9\x03\x02" +
		"\x02\x02\u06FE\u070C\x03\x02\x02\x02\u06FF\u0700\f\x07\x02\x02\u0700\u070B" +
		"\x05\xF0y\x02\u0701\u0702\f\x05\x02\x02\u0702\u0704\x07R\x02\x02\u0703" +
		"\u0705\x05Z.\x02\u0704\u0703\x03\x02\x02\x02\u0704\u0705\x03\x02\x02\x02" +
		"\u0705\u0706\x03\x02\x02\x02\u0706\u0708\x07S\x02\x02\u0707\u0709\x05" +
		"\xD0i\x02\u0708\u0707\x03\x02\x02\x02\u0708\u0709\x03\x02\x02\x02\u0709" +
		"\u070B\x03\x02\x02\x02\u070A\u06FF\x03\x02\x02\x02\u070A\u0701\x03\x02" +
		"\x02\x02\u070B\u070E\x03\x02\x02\x02\u070C\u070A\x03\x02\x02\x02\u070C" +
		"\u070D\x03\x02\x02\x02\u070D\u0105\x03\x02\x02\x02\u070E\u070C\x03\x02" +
		"\x02\x02\u070F\u0714\x05\u0108\x85\x02\u0710\u0711\x05\xF4{\x02\u0711" +
		"\u0712\x05\u0106\x84\x02\u0712\u0714\x03\x02\x02\x02\u0713\u070F\x03\x02" +
		"\x02\x02\u0713\u0710\x03\x02\x02\x02\u0714\u0107\x03\x02\x02\x02\u0715" +
		"\u0716\b\x85\x01\x02\u0716\u0717\x07~\x02\x02\u0717\u0725\x03\x02\x02" +
		"\x02\u0718\u0719\f\x05\x02\x02\u0719\u0724\x05\xF0y\x02\u071A\u071B\f" +
		"\x04\x02\x02\u071B\u071D\x07R\x02\x02\u071C\u071E\x05Z.\x02\u071D\u071C" +
		"\x03\x02\x02\x02\u071D\u071E\x03\x02\x02\x02\u071E\u071F\x03\x02\x02\x02" +
		"\u071F\u0721\x07S\x02\x02\u0720\u0722\x05\xD0i\x02\u0721\u0720\x03\x02" +
		"\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0724\x03\x02\x02\x02\u0723" +
		"\u0718\x03\x02\x02\x02\u0723\u071A\x03\x02\x02\x02\u0724\u0727\x03\x02" +
		"\x02\x02\u0725\u0723\x03\x02\x02\x02\u0725\u0726\x03\x02\x02\x02\u0726" +
		"\u0109\x03\x02\x02\x02\u0727\u0725\x03\x02\x02\x02\u0728\u072A\x05\u010C" +
		"\x87\x02\u0729\u0728\x03\x02\x02\x02\u0729\u072A\x03\x02\x02\x02\u072A" +
		"\u072C\x03\x02\x02\x02\u072B\u072D\x07~\x02\x02\u072C\u072B\x03\x02\x02" +
		"\x02\u072C\u072D\x03\x02\x02\x02\u072D\u0733\x03\x02\x02\x02\u072E\u072F" +
		"\x05\u010C\x87\x02\u072F\u0730\x07u\x02\x02\u0730\u0731\x07~\x02\x02\u0731" +
		"\u0733\x03\x02\x02\x02\u0732\u0729\x03\x02\x02\x02\u0732\u072E\x03\x02" +
		"\x02\x02\u0733\u010B\x03\x02\x02\x02\u0734\u0735\b\x87\x01\x02\u0735\u0736" +
		"\x05\u010E\x88\x02\u0736\u073C\x03\x02\x02\x02\u0737\u0738\f\x03\x02\x02" +
		"\u0738\u0739\x07u\x02\x02\u0739\u073B\x05\u010E\x88\x02\u073A\u0737\x03" +
		"\x02\x02\x02\u073B\u073E\x03\x02\x02\x02\u073C\u073A\x03\x02\x02\x02\u073C" +
		"\u073D\x03\x02\x02\x02\u073D\u010D\x03\x02\x02\x02\u073E\u073C\x03\x02" +
		"\x02\x02\u073F\u0741\x05\xD0i\x02\u0740\u073F\x03\x02\x02\x02\u0740\u0741" +
		"\x03\x02\x02\x02\u0741\u0742\x03\x02\x02\x02\u0742\u0743\x05\x88E\x02" +
		"\u0743\u0744\x05\xEAv\x02\u0744\u075F\x03\x02\x02\x02\u0745\u0747\x05" +
		"\xD0i\x02\u0746\u0745\x03\x02\x02\x02\u0746\u0747\x03\x02\x02\x02\u0747" +
		"\u0748\x03\x02\x02\x02\u0748\u0749\x05\x88E\x02\u0749\u074A\x05\xEAv\x02" +
		"\u074A\u074B\x07`\x02\x02\u074B\u074C\x05\u0118\x8D\x02\u074C\u075F\x03" +
		"\x02\x02\x02\u074D\u074F\x05\xD0i\x02\u074E\u074D\x03\x02\x02\x02\u074E" +
		"\u074F\x03\x02\x02\x02\u074F\u0750\x03\x02\x02\x02\u0750\u0752\x05\x88" +
		"E\x02\u0751\u0753\x05\u0100\x81\x02\u0752\u0751\x03\x02\x02\x02\u0752" +
		"\u0753\x03\x02\x02\x02\u0753\u075F\x03\x02\x02\x02\u0754\u0756\x05\xD0" +
		"i\x02\u0755\u0754\x03\x02\x02\x02\u0755\u0756\x03\x02\x02\x02\u0756\u0757" +
		"\x03\x02\x02\x02\u0757\u0759\x05\x88E\x02\u0758\u075A\x05\u0100\x81\x02" +
		"\u0759\u0758\x03\x02\x02\x02\u0759\u075A\x03\x02\x02\x02\u075A\u075B\x03" +
		"\x02\x02\x02\u075B\u075C\x07`\x02\x02\u075C\u075D\x05\u0118\x8D\x02\u075D" +
		"\u075F\x03\x02\x02\x02\u075E\u0740\x03\x02\x02\x02\u075E\u0746\x03\x02" +
		"\x02\x02\u075E\u074E\x03\x02\x02\x02\u075E\u0755\x03\x02\x02\x02\u075F" +
		"\u010F\x03\x02\x02\x02\u0760\u0762\x05\xD0i\x02\u0761\u0760\x03\x02\x02" +
		"\x02\u0761\u0762\x03\x02\x02\x02\u0762\u0764\x03\x02\x02\x02\u0763\u0765" +
		"\x05\x88E\x02\u0764\u0763\x03\x02\x02\x02\u0764\u0765\x03\x02\x02\x02" +
		"\u0765\u0766\x03\x02\x02\x02\u0766\u0768\x05\xEAv\x02\u0767\u0769\x05" +
		"\u0132\x9A\x02\u0768\u0767\x03\x02\x02\x02\u0768\u0769\x03\x02\x02\x02" +
		"\u0769\u076A\x03\x02\x02\x02\u076A\u076B\x05\u0112\x8A\x02\u076B\u0111" +
		"\x03\x02\x02\x02\u076C\u076E\x05\u014A\xA6\x02\u076D\u076C\x03\x02\x02" +
		"\x02\u076D\u076E\x03\x02\x02\x02\u076E\u076F\x03\x02\x02\x02\u076F\u0778" +
		"\x05b2\x02\u0770\u0778\x05\u0170\xB9\x02\u0771\u0772\x07`\x02\x02\u0772" +
		"\u0773\x07\x16\x02\x02\u0773\u0778\x07{\x02\x02\u0774\u0775\x07`\x02\x02" +
		"\u0775\u0776\x07\x17\x02\x02\u0776\u0778\x07{\x02\x02\u0777\u076D\x03" +
		"\x02\x02\x02\u0777\u0770\x03\x02\x02\x02\u0777\u0771\x03\x02\x02\x02\u0777" +
		"\u0774\x03\x02\x02\x02\u0778\u0113\x03\x02\x02\x02\u0779\u077F\x05\u0116" +
		"\x8C\x02\u077A\u077B\x07P\x02\x02\u077B\u077C\x05\"\x12\x02\u077C\u077D" +
		"\x07Q\x02\x02\u077D\u077F\x03\x02\x02\x02\u077E\u0779\x03\x02\x02\x02" +
		"\u077E\u077A\x03\x02\x02\x02\u077F\u0115\x03\x02\x02\x02\u0780\u0781\x07" +
		"`\x02\x02\u0781\u0784\x05\u0118\x8D\x02\u0782\u0784\x05\u011C\x8F\x02" +
		"\u0783\u0780\x03\x02\x02\x02\u0783\u0782\x03\x02\x02\x02\u0784\u0117\x03" +
		"\x02\x02\x02\u0785\u0788\x05T+\x02\u0786\u0788\x05\u011C\x8F\x02\u0787" +
		"\u0785\x03\x02\x02\x02\u0787\u0786\x03\x02\x02\x02\u0788\u0119\x03\x02" +
		"\x02\x02\u0789\u078A\b\x8E\x01\x02\u078A\u078C\x05\u0118\x8D\x02\u078B" +
		"\u078D\x07~\x02\x02\u078C\u078B\x03\x02\x02\x02\u078C\u078D\x03\x02\x02" +
		"\x02\u078D\u0796\x03\x02\x02\x02\u078E\u078F\f\x03\x02\x02\u078F\u0790" +
		"\x07u\x02\x02\u0790\u0792\x05\u0118\x8D\x02\u0791\u0793\x07~\x02\x02\u0792" +
		"\u0791\x03\x02\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793\u0795\x03\x02" +
		"\x02\x02\u0794\u078E\x03\x02\x02\x02\u0795\u0798\x03\x02\x02\x02\u0796" +
		"\u0794\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797\u011B\x03\x02" +
		"\x02\x02\u0798\u0796\x03\x02\x02\x02\u0799\u079A\x07T\x02\x02\u079A\u079C" +
		"\x05\u011A\x8E\x02\u079B\u079D\x07u\x02\x02\u079C\u079B\x03\x02\x02\x02" +
		"\u079C\u079D\x03\x02\x02\x02\u079D\u079E\x03\x02\x02\x02\u079E\u079F\x07" +
		"U\x02\x02\u079F\u07A3\x03\x02\x02\x02\u07A0\u07A1\x07T\x02\x02\u07A1\u07A3" +
		"\x07U\x02\x02\u07A2\u0799\x03\x02\x02\x02\u07A2\u07A0\x03\x02\x02\x02" +
		"\u07A3\u011D\x03\x02\x02\x02\u07A4\u07A7\x07\x7F\x02\x02\u07A5\u07A7\x05" +
		"\u015E\xB0\x02\u07A6\u07A4\x03\x02\x02\x02\u07A6\u07A5\x03\x02\x02\x02" +
		"\u07A7\u011F\x03\x02\x02\x02\u07A8\u07A9\x05\u0122\x92\x02\u07A9\u07AB" +
		"\x07T\x02\x02\u07AA\u07AC\x05\u012A\x96\x02\u07AB\u07AA\x03\x02\x02\x02" +
		"\u07AB\u07AC\x03\x02\x02\x02\u07AC\u07AD\x03\x02\x02\x02\u07AD\u07AE\x07" +
		"U\x02\x02\u07AE\u0121\x03\x02\x02\x02\u07AF\u07B1\x05\u0128\x95\x02\u07B0" +
		"\u07B2\x05\xD0i\x02\u07B1\u07B0\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02" +
		"\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3\u07B5\x05\u0124\x93\x02\u07B4\u07B6" +
		"\x05\u0126\x94\x02\u07B5\u07B4\x03\x02\x02\x02\u07B5\u07B6\x03\x02\x02" +
		"\x02\u07B6\u07B8\x03\x02\x02\x02\u07B7\u07B9\x05\u0138\x9D\x02\u07B8\u07B7" +
		"\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9\u07C2\x03\x02\x02\x02" +
		"\u07BA\u07BC\x05\u0128\x95\x02\u07BB\u07BD\x05\xD0i\x02\u07BC\u07BB\x03" +
		"\x02\x02\x02\u07BC\u07BD\x03\x02\x02\x02\u07BD\u07BF\x03\x02\x02\x02\u07BE" +
		"\u07C0\x05\u0138\x9D\x02\u07BF\u07BE\x03\x02\x02\x02\u07BF\u07C0\x03\x02" +
		"\x02\x02\u07C0\u07C2\x03\x02\x02\x02\u07C1\u07AF\x03\x02\x02\x02\u07C1" +
		"\u07BA\x03\x02\x02\x02\u07C2\u0123\x03\x02\x02\x02\u07C3\u07C5\x05\f\x07" +
		"\x02\u07C4\u07C3\x03\x02\x02\x02\u07C4\u07C5\x03\x02\x02\x02\u07C5\u07C6" +
		"\x03\x02\x02\x02\u07C6\u07C7\x05\u011E\x90\x02\u07C7\u0125\x03\x02\x02" +
		"\x02\u07C8\u07C9\x07!\x02\x02\u07C9\u0127\x03\x02\x02\x02\u07CA\u07CB" +
		"\t\b\x02\x02\u07CB\u0129\x03\x02\x02\x02\u07CC\u07CE\x05\u012C\x97\x02" +
		"\u07CD\u07CF\x05\u012A\x96\x02\u07CE\u07CD\x03\x02\x02\x02\u07CE\u07CF" +
		"\x03\x02\x02\x02\u07CF\u07D6\x03\x02\x02\x02\u07D0\u07D1\x05\u0142\xA2" +
		"\x02\u07D1\u07D3\x07y\x02\x02\u07D2\u07D4\x05\u012A\x96\x02\u07D3\u07D2" +
		"\x03\x02\x02\x02\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D6\x03\x02\x02\x02" +
		"\u07D5\u07CC\x03\x02\x02\x02\u07D5\u07D0\x03\x02\x02\x02\u07D6\u012B\x03" +
		"\x02\x02\x02\u07D7\u07D9\x05\xD0i\x02\u07D8\u07D7\x03\x02\x02\x02\u07D8" +
		"\u07D9\x03\x02\x02\x02\u07D9\u07DB\x03\x02\x02\x02\u07DA\u07DC\x05\x88" +
		"E\x02\u07DB\u07DA\x03\x02\x02\x02\u07DB\u07DC\x03\x02\x02\x02\u07DC\u07DE" +
		"\x03\x02\x02\x02\u07DD\u07DF\x05\u012E\x98\x02\u07DE\u07DD\x03\x02\x02" +
		"\x02\u07DE\u07DF\x03\x02\x02\x02\u07DF\u07E0\x03\x02\x02\x02\u07E0\u07E8" +
		"\x07{\x02\x02\u07E1\u07E8\x05\u0110\x89\x02\u07E2\u07E8\x05\xC8e\x02\u07E3" +
		"\u07E8\x05\x80A\x02\u07E4\u07E8\x05\u0156\xAC\x02\u07E5\u07E8\x05|?\x02" +
		"\u07E6\u07E8\x05\x82B\x02\u07E7\u07D8\x03\x02\x02\x02\u07E7\u07E1\x03" +
		"\x02\x02\x02\u07E7\u07E2\x03\x02\x02\x02\u07E7\u07E3\x03\x02\x02\x02\u07E7" +
		"\u07E4\x03\x02\x02\x02\u07E7\u07E5\x03\x02\x02\x02\u07E7\u07E6\x03\x02" +
		"\x02\x02\u07E8\u012D\x03\x02\x02\x02\u07E9\u07EA\b\x98\x01\x02\u07EA\u07EB" +
		"\x05\u0130\x99\x02\u07EB\u07F1\x03\x02\x02\x02\u07EC\u07ED\f\x03\x02\x02" +
		"\u07ED\u07EE\x07u\x02\x02\u07EE\u07F0\x05\u0130\x99\x02\u07EF\u07EC\x03" +
		"\x02\x02\x02\u07F0\u07F3\x03\x02\x02\x02\u07F1\u07EF\x03\x02\x02\x02\u07F1" +
		"\u07F2\x03\x02\x02\x02\u07F2\u012F\x03\x02\x02\x02\u07F3\u07F1\x03\x02" +
		"\x02\x02\u07F4\u07F6\x05\xEAv\x02\u07F5\u07F7\x05\u0132\x9A\x02\u07F6" +
		"\u07F5\x03\x02\x02\x02\u07F6\u07F7\x03\x02\x02\x02\u07F7\u07F9\x03\x02" +
		"\x02\x02\u07F8\u07FA\x05\u0136\x9C\x02\u07F9\u07F8\x03\x02\x02\x02\u07F9" +
		"\u07FA\x03\x02\x02\x02\u07FA\u0808\x03\x02\x02\x02\u07FB\u07FD\x05\xEA" +
		"v\x02\u07FC\u07FE\x05\u0116\x8C\x02\u07FD\u07FC\x03\x02\x02\x02\u07FD" +
		"\u07FE\x03\x02\x02\x02\u07FE\u0808\x03\x02\x02\x02\u07FF\u0801\x07\x7F" +
		"\x02\x02\u0800\u07FF\x03\x02\x02\x02\u0800\u0801\x03\x02\x02\x02\u0801" +
		"\u0803\x03\x02\x02\x02\u0802\u0804\x05\xD0i\x02\u0803\u0802\x03\x02\x02" +
		"\x02\u0803\u0804\x03\x02\x02\x02\u0804\u0805\x03\x02\x02\x02\u0805\u0806" +
		"\x07y\x02\x02\u0806\u0808\x05Z.\x02\u0807\u07F4\x03\x02\x02\x02\u0807" +
		"\u07FB\x03\x02\x02\x02\u0807\u0800\x03\x02\x02\x02\u0808\u0131\x03\x02" +
		"\x02\x02\u0809\u080A\b\x9A\x01\x02\u080A\u080B\x05\u0134\x9B\x02\u080B" +
		"\u0810\x03\x02\x02\x02\u080C\u080D\f\x03\x02\x02\u080D\u080F\x05\u0134" +
		"\x9B\x02\u080E\u080C\x03\x02\x02\x02\u080F\u0812\x03\x02\x02\x02\u0810" +
		"\u080E\x03\x02\x02\x02\u0810\u0811\x03\x02\x02\x02\u0811\u0133\x03\x02" +
		"\x02\x02\u0812\u0810\x03\x02\x02\x02\u0813\u0814\t\t\x02\x02\u0814\u0135" +
		"\x03\x02\x02\x02\u0815\u0816\x07`\x02\x02\u0816\u0817\x07\x82\x02\x02" +
		"\u0817\u0818\b\x9C\x01\x02\u0818\u0137\x03\x02\x02\x02\u0819\u081A\x07" +
		"y\x02\x02\u081A\u081B\x05\u013A\x9E\x02\u081B\u0139\x03\x02\x02\x02\u081C" +
		"\u081D\b\x9E\x01\x02\u081D\u081F\x05\u013C\x9F\x02\u081E\u0820\x07~\x02" +
		"\x02\u081F\u081E\x03\x02\x02\x02\u081F\u0820\x03\x02\x02\x02\u0820\u0829" +
		"\x03\x02\x02\x02\u0821\u0822\f\x03\x02\x02\u0822\u0823\x07u\x02\x02\u0823" +
		"\u0825\x05\u013C\x9F\x02\u0824\u0826\x07~\x02\x02\u0825\u0824\x03\x02" +
		"\x02\x02\u0825\u0826\x03\x02\x02\x02\u0826\u0828\x03\x02\x02\x02\u0827" +
		"\u0821\x03\x02\x02\x02\u0828\u082B\x03\x02\x02\x02\u0829\u0827\x03\x02" +
		"\x02\x02\u0829\u082A\x03\x02\x02\x02\u082A\u013B\x03\x02\x02\x02\u082B" +
		"\u0829\x03\x02\x02\x02\u082C\u082E\x05\xD0i\x02\u082D\u082C\x03\x02\x02" +
		"\x02\u082D\u082E\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u0842" +
		"\x05\u0140\xA1\x02\u0830\u0832\x05\xD0i\x02\u0831\u0830\x03\x02\x02\x02" +
		"\u0831\u0832\x03\x02\x02\x02\u0832\u0833\x03\x02\x02\x02\u0833\u0835\x07" +
		"K\x02\x02\u0834\u0836\x05\u0142\xA2\x02\u0835\u0834\x03\x02\x02\x02\u0835" +
		"\u0836\x03\x02\x02\x02\u0836\u0837\x03\x02\x02\x02\u0837\u0842\x05\u0140" +
		"\xA1\x02\u0838\u083A\x05\xD0i\x02\u0839\u0838\x03\x02\x02\x02\u0839\u083A" +
		"\x03\x02\x02\x02\u083A\u083B\x03\x02\x02\x02\u083B\u083D\x05\u0142\xA2" +
		"\x02\u083C\u083E\x07K\x02\x02\u083D\u083C\x03\x02\x02\x02\u083D\u083E" +
		"\x03\x02\x02\x02\u083E\u083F\x03\x02\x02\x02\u083F\u0840\x05\u0140\xA1" +
		"\x02\u0840\u0842\x03\x02\x02\x02\u0841\u082D\x03\x02\x02\x02\u0841\u0831" +
		"\x03\x02\x02\x02\u0841\u0839\x03\x02\x02\x02\u0842\u013D\x03\x02\x02\x02" +
		"\u0843\u0845\x05\f\x07\x02\u0844\u0843\x03\x02\x02\x02\u0844\u0845\x03" +
		"\x02\x02\x02\u0845\u0846\x03\x02\x02\x02\u0846\u0849\x05\u011E\x90\x02" +
		"\u0847\u0849\x05\x9CO\x02\u0848\u0844\x03\x02\x02\x02\u0848\u0847\x03" +
		"\x02\x02\x02\u0849\u013F\x03\x02\x02\x02\u084A\u084B\x05\u013E\xA0\x02" +
		"\u084B\u0141\x03\x02\x02\x02\u084C\u084D\t\n\x02\x02\u084D\u0143\x03\x02" +
		"\x02\x02\u084E\u084F\x07/\x02\x02\u084F\u0850\x05\u0146\xA4\x02\u0850" +
		"\u0145\x03\x02\x02\x02\u0851\u0853\x05\x94K\x02\u0852\u0854\x05\u0148" +
		"\xA5\x02\u0853\u0852\x03\x02\x02\x02\u0853\u0854\x03\x02\x02\x02\u0854" +
		"\u0147\x03\x02\x02\x02\u0855\u0857\x05\xF4{\x02\u0856\u0858\x05\u0148" +
		"\xA5\x02\u0857\u0856\x03\x02\x02\x02\u0857\u0858\x03\x02\x02\x02\u0858" +
		"\u0149\x03\x02\x02\x02\u0859\u085A\x07y\x02\x02\u085A\u085B\x05\u014C" +
		"\xA7\x02\u085B\u014B\x03\x02\x02\x02\u085C\u085E\x05\u014E\xA8\x02\u085D" +
		"\u085F\x07~\x02\x02\u085E\u085D\x03\x02\x02\x02\u085E\u085F\x03\x02\x02" +
		"\x02\u085F\u0868\x03\x02\x02\x02\u0860\u0862\x05\u014E\xA8\x02\u0861\u0863" +
		"\x07~\x02\x02\u0862\u0861\x03\x02\x02\x02\u0862\u0863\x03\x02\x02\x02" +
		"\u0863\u0864\x03\x02\x02\x02\u0864\u0865\x07u\x02\x02\u0865\u0866\x05" +
		"\u014C\xA7\x02\u0866\u0868\x03\x02\x02\x02\u0867\u085C\x03\x02\x02\x02" +
		"\u0867\u0860\x03\x02\x02\x02\u0868\u014D\x03\x02\x02\x02\u0869\u086A\x05" +
		"\u0150\xA9\x02\u086A\u086C\x07P\x02\x02\u086B\u086D\x05\"\x12\x02\u086C" +
		"\u086B\x03\x02\x02\x02\u086C\u086D\x03\x02\x02\x02\u086D\u086E\x03\x02" +
		"\x02\x02\u086E\u086F\x07Q\x02\x02\u086F\u0874\x03\x02\x02\x02\u0870\u0871" +
		"\x05\u0150\xA9\x02\u0871\u0872\x05\u011C\x8F\x02\u0872\u0874\x03\x02\x02" +
		"\x02\u0873\u0869\x03\x02\x02\x02\u0873\u0870\x03\x02\x02\x02\u0874\u014F" +
		"\x03\x02\x02\x02\u0875\u0878\x05\u013E\xA0\x02\u0876\u0878\x07\x7F\x02" +
		"\x02\u0877\u0875\x03\x02\x02\x02\u0877\u0876\x03\x02\x02\x02\u0878\u0151" +
		"\x03\x02\x02\x02\u0879\u087A\x07/\x02\x02\u087A";
	private static readonly _serializedATNSegment4: string =
		"\u087B\x05\u0186\xC4\x02\u087B\u0153\x03\x02\x02\x02\u087C\u087D\x07/" +
		"\x02\x02\u087D\u087E\x07\x88\x02\x02\u087E\u0882\x07\x7F\x02\x02\u087F" +
		"\u0880\x07/\x02\x02\u0880\u0882\x07\x8B\x02\x02\u0881\u087C\x03\x02\x02" +
		"\x02\u0881\u087F\x03\x02\x02\x02\u0882\u0155\x03\x02\x02\x02\u0883\u0884" +
		"\x07?\x02\x02\u0884\u0885\x07a\x02\x02\u0885\u0886\x05\u0158\xAD\x02\u0886" +
		"\u0887\x07b\x02\x02\u0887\u0888\x05x=\x02\u0888\u0157\x03\x02\x02\x02" +
		"\u0889\u088A\b\xAD\x01\x02\u088A\u088B\x05\u015A\xAE\x02\u088B\u0891\x03" +
		"\x02\x02\x02\u088C\u088D\f\x03\x02\x02\u088D\u088E\x07u\x02\x02\u088E" +
		"\u0890\x05\u015A\xAE\x02\u088F\u088C\x03\x02\x02\x02\u0890\u0893\x03\x02" +
		"\x02\x02\u0891\u088F\x03\x02\x02\x02\u0891\u0892\x03\x02\x02\x02\u0892" +
		"\u0159\x03\x02\x02\x02\u0893\u0891\x03\x02\x02\x02\u0894\u0897\x05\u015C" +
		"\xAF\x02\u0895\u0897\x05\u010E\x88\x02\u0896\u0894\x03\x02\x02\x02\u0896" +
		"\u0895\x03\x02\x02\x02\u0897\u015B\x03\x02\x02\x02\u0898\u089A\x07\x10" +
		"\x02\x02\u0899\u089B\x07~\x02\x02\u089A\u0899\x03\x02\x02\x02\u089A\u089B" +
		"\x03\x02\x02\x02\u089B\u089D\x03\x02\x02\x02\u089C\u089E\x07\x7F\x02\x02" +
		"\u089D\u089C\x03\x02\x02\x02\u089D\u089E\x03\x02\x02\x02\u089E\u08C9\x03" +
		"\x02\x02\x02\u089F\u08A1\x07\x10\x02\x02\u08A0\u08A2\x07\x7F\x02\x02\u08A1" +
		"\u08A0\x03\x02\x02\x02\u08A1\u08A2\x03\x02\x02\x02\u08A2\u08A3\x03\x02" +
		"\x02\x02\u08A3\u08A4\x07`\x02\x02\u08A4\u08C9\x05\xFE\x80\x02\u08A5\u08A7" +
		"\x07G\x02\x02\u08A6\u08A8\x07~\x02\x02\u08A7\u08A6\x03\x02\x02\x02\u08A7" +
		"\u08A8\x03\x02\x02\x02\u08A8\u08AA\x03\x02\x02\x02\u08A9\u08AB\x07\x7F" +
		"\x02\x02\u08AA\u08A9\x03\x02\x02\x02\u08AA\u08AB\x03\x02\x02\x02\u08AB" +
		"\u08C9\x03\x02\x02\x02\u08AC\u08AE\x07G\x02\x02\u08AD\u08AF\x07\x7F\x02" +
		"\x02\u08AE\u08AD\x03\x02\x02\x02\u08AE\u08AF\x03\x02\x02\x02\u08AF\u08B0" +
		"\x03\x02\x02\x02\u08B0\u08B1\x07`\x02\x02\u08B1\u08C9\x05\xFE\x80\x02" +
		"\u08B2\u08B3\x07?\x02\x02\u08B3\u08B4\x07a\x02\x02\u08B4\u08B5\x05\u0158" +
		"\xAD\x02\u08B5\u08B6\x07b\x02\x02\u08B6\u08B8\x07\x10\x02\x02\u08B7\u08B9" +
		"\x07~\x02\x02\u08B8\u08B7\x03\x02\x02\x02\u08B8\u08B9\x03\x02\x02\x02" +
		"\u08B9\u08BB\x03\x02\x02\x02\u08BA\u08BC\x07\x7F\x02\x02\u08BB\u08BA\x03" +
		"\x02\x02\x02\u08BB\u08BC\x03\x02\x02\x02\u08BC\u08C9\x03\x02\x02\x02\u08BD" +
		"\u08BE\x07?\x02\x02\u08BE\u08BF\x07a\x02\x02\u08BF\u08C0\x05\u0158\xAD" +
		"\x02\u08C0\u08C1\x07b\x02\x02\u08C1\u08C3\x07\x10\x02\x02\u08C2\u08C4" +
		"\x07\x7F\x02\x02\u08C3\u08C2\x03\x02\x02\x02\u08C3\u08C4\x03\x02\x02\x02" +
		"\u08C4\u08C5\x03\x02\x02\x02\u08C5\u08C6\x07`\x02\x02\u08C6\u08C7\x05" +
		"\x06\x04\x02\u08C7\u08C9\x03\x02\x02\x02\u08C8\u0898\x03\x02\x02\x02\u08C8" +
		"\u089F\x03\x02\x02\x02\u08C8\u08A5\x03\x02\x02\x02\u08C8\u08AC\x03\x02" +
		"\x02\x02\u08C8\u08B2\x03\x02\x02\x02\u08C8\u08BD\x03\x02\x02\x02\u08C9" +
		"\u015D\x03\x02\x02\x02\u08CA\u08CB\x05\u0162\xB2\x02\u08CB\u08CD\x07a" +
		"\x02\x02\u08CC\u08CE\x05\u0164\xB3\x02\u08CD\u08CC\x03\x02\x02\x02\u08CD" +
		"\u08CE\x03\x02\x02\x02\u08CE\u08CF\x03\x02\x02\x02\u08CF\u08D0\x07b\x02" +
		"\x02\u08D0\u015F\x03\x02\x02\x02\u08D1\u08E1\x05\u015E\xB0\x02\u08D2\u08D3" +
		"\x05\u0152\xAA\x02\u08D3\u08D5\x07a\x02\x02\u08D4\u08D6\x05\u0164\xB3" +
		"\x02\u08D5\u08D4\x03\x02\x02\x02\u08D5\u08D6\x03\x02\x02\x02\u08D6\u08D7" +
		"\x03\x02\x02\x02\u08D7\u08D8\x07b\x02\x02\u08D8\u08E1\x03\x02\x02\x02" +
		"\u08D9\u08DA\x05\u0154\xAB\x02\u08DA\u08DC\x07a\x02\x02\u08DB\u08DD\x05" +
		"\u0164\xB3\x02\u08DC\u08DB\x03\x02\x02\x02\u08DC\u08DD\x03\x02\x02\x02" +
		"\u08DD\u08DE\x03\x02\x02\x02\u08DE\u08DF\x07b\x02\x02\u08DF\u08E1\x03" +
		"\x02\x02\x02\u08E0\u08D1\x03\x02\x02\x02\u08E0\u08D2\x03\x02\x02\x02\u08E0" +
		"\u08D9\x03\x02\x02\x02\u08E1\u0161\x03\x02\x02\x02\u08E2\u08E3\x07\x7F" +
		"\x02\x02\u08E3\u0163\x03\x02\x02\x02\u08E4\u08E5\b\xB3\x01\x02\u08E5\u08E7" +
		"\x05\u0166\xB4\x02\u08E6\u08E8\x07~\x02\x02\u08E7\u08E6\x03\x02\x02\x02" +
		"\u08E7\u08E8\x03\x02\x02\x02\u08E8\u08F1\x03\x02\x02\x02\u08E9\u08EA\f" +
		"\x03\x02\x02\u08EA\u08EB\x07u\x02\x02\u08EB\u08ED\x05\u0166\xB4\x02\u08EC" +
		"\u08EE\x07~\x02\x02\u08ED\u08EC\x03\x02\x02\x02\u08ED\u08EE\x03\x02\x02" +
		"\x02\u08EE\u08F0\x03\x02\x02\x02\u08EF\u08E9\x03\x02\x02\x02\u08F0\u08F3" +
		"\x03\x02\x02\x02\u08F1\u08EF\x03\x02\x02\x02\u08F1\u08F2\x03\x02\x02\x02" +
		"\u08F2\u0165\x03\x02\x02\x02\u08F3\u08F1\x03\x02\x02\x02\u08F4\u08F8\x05" +
		"\xFE\x80\x02\u08F5\u08F8\x05Z.\x02\u08F6\u08F8\x05\x06\x04\x02\u08F7\u08F4" +
		"\x03\x02\x02\x02\u08F7\u08F5\x03\x02\x02\x02\u08F7\u08F6\x03\x02\x02\x02" +
		"\u08F8\u0167\x03\x02\x02\x02\u08F9\u08FA\x07G\x02\x02\u08FA\u08FB\x05" +
		"\f\x07\x02\u08FB\u08FC\x07\x7F\x02\x02\u08FC\u0905\x03\x02\x02\x02\u08FD" +
		"\u08FE\x07G\x02\x02\u08FE\u0900\x05\f\x07\x02\u08FF\u0901\x07?\x02\x02" +
		"\u0900\u08FF\x03\x02\x02\x02\u0900\u0901\x03\x02\x02\x02\u0901\u0902\x03" +
		"\x02\x02\x02\u0902\u0903\x05\u015E\xB0\x02\u0903\u0905\x03\x02\x02\x02" +
		"\u0904\u08F9\x03\x02\x02\x02\u0904\u08FD\x03\x02\x02\x02\u0905\u0169\x03" +
		"\x02\x02\x02\u0906\u0908\x07\x1F\x02\x02\u0907\u0906\x03\x02\x02\x02\u0907" +
		"\u0908\x03\x02\x02\x02\u0908\u0909\x03\x02\x02\x02\u0909\u090A\x07?\x02" +
		"\x02\u090A\u090B\x05x=\x02\u090B\u016B\x03\x02\x02\x02\u090C\u090D\x07" +
		"?\x02\x02\u090D\u090E\x07a\x02\x02\u090E\u090F\x07b\x02\x02\u090F\u0910" +
		"\x05x=\x02\u0910\u016D\x03\x02\x02\x02\u0911\u0912\x07D\x02\x02\u0912" +
		"\u0913\x05b2\x02\u0913\u0914\x05\u0172\xBA\x02\u0914\u016F\x03\x02\x02" +
		"\x02\u0915\u0917\x07D\x02\x02\u0916\u0918\x05\u014A\xA6\x02\u0917\u0916" +
		"\x03\x02\x02\x02\u0917\u0918\x03\x02\x02\x02\u0918\u0919\x03\x02\x02\x02" +
		"\u0919\u091A\x05b2\x02\u091A\u091B\x05\u0172\xBA\x02\u091B\u0171\x03\x02" +
		"\x02\x02\u091C\u091E\x05\u0174\xBB\x02\u091D\u091F\x05\u0172\xBA\x02\u091E" +
		"\u091D\x03\x02\x02\x02\u091E\u091F\x03\x02\x02\x02\u091F\u0173\x03\x02" +
		"\x02\x02\u0920\u0921\x07\f\x02\x02\u0921\u0922\x07P\x02\x02\u0922\u0923" +
		"\x05\u0176\xBC\x02\u0923\u0924\x07Q\x02\x02\u0924\u0925\x05b2\x02\u0925" +
		"\u0175\x03\x02\x02\x02\u0926\u0928\x05\xD0i\x02\u0927\u0926\x03\x02\x02" +
		"\x02\u0927\u0928\x03\x02\x02\x02\u0928\u0929\x03\x02\x02\x02\u0929\u092A" +
		"\x05\x94K\x02\u092A\u092B\x05\xEAv\x02\u092B\u0935\x03\x02\x02\x02\u092C" +
		"\u092E\x05\xD0i\x02\u092D\u092C\x03\x02\x02\x02\u092D\u092E\x03\x02\x02" +
		"\x02\u092E\u092F\x03\x02\x02\x02\u092F\u0931\x05\x94K\x02\u0930\u0932" +
		"\x05\u0100\x81\x02\u0931\u0930\x03\x02\x02\x02\u0931\u0932\x03\x02\x02" +
		"\x02\u0932\u0935\x03\x02\x02\x02\u0933\u0935\x07~\x02\x02\u0934\u0927" +
		"\x03\x02\x02\x02\u0934\u092D\x03\x02\x02\x02\u0934\u0933\x03\x02\x02\x02" +
		"\u0935\u0177\x03\x02\x02\x02\u0936\u0938\x07B\x02\x02\u0937\u0939\x05" +
		"T+\x02\u0938\u0937\x03\x02\x02\x02\u0938\u0939\x03\x02\x02\x02\u0939\u0179" +
		"\x03\x02\x02\x02\u093A\u093D\x05\u017C\xBF\x02\u093B\u093D\x05\u0180\xC1" +
		"\x02\u093C\u093A\x03\x02\x02\x02\u093C\u093B\x03\x02\x02\x02\u093D\u017B" +
		"\x03\x02\x02\x02\u093E\u093F\x07B\x02\x02\u093F\u0941\x07P\x02\x02\u0940" +
		"\u0942\x05\u017E\xC0\x02\u0941\u0940\x03\x02\x02\x02\u0941\u0942\x03\x02" +
		"\x02\x02\u0942\u0943\x03\x02\x02\x02\u0943\u0944\x07Q\x02\x02\u0944\u017D" +
		"\x03\x02\x02\x02\u0945\u0946\b\xC0\x01\x02\u0946\u0948\x05\xFE\x80\x02" +
		"\u0947\u0949\x07~\x02\x02\u0948\u0947\x03\x02\x02\x02\u0948\u0949\x03" +
		"\x02\x02\x02\u0949\u0952\x03\x02\x02\x02\u094A\u094B\f\x03\x02\x02\u094B" +
		"\u094C\x07u\x02\x02\u094C\u094E\x05\xFE\x80\x02\u094D\u094F\x07~\x02\x02" +
		"\u094E\u094D\x03\x02\x02\x02\u094E\u094F\x03\x02\x02\x02\u094F\u0951\x03" +
		"\x02\x02\x02\u0950\u094A\x03\x02\x02\x02\u0951\u0954\x03\x02\x02\x02\u0952" +
		"\u0950\x03\x02\x02\x02\u0952\u0953\x03\x02\x02\x02\u0953\u017F\x03\x02" +
		"\x02\x02\u0954\u0952\x03\x02\x02\x02\u0955\u0956\x07-\x02\x02\u0956\u0957" +
		"\x07P\x02\x02\u0957\u0958\x05Z.\x02\u0958\u0959\x07Q\x02\x02\u0959\u095C" +
		"\x03\x02\x02\x02\u095A\u095C\x07-\x02\x02\u095B\u0955\x03\x02\x02\x02" +
		"\u095B\u095A\x03\x02\x02\x02\u095C\u0181\x03\x02\x02\x02\u095D\u095E\x07" +
		"b\x02\x02\u095E\u095F\x07b\x02\x02\u095F\u0183\x03\x02\x02\x02\u0960\u0961" +
		"\x07b\x02\x02\u0961\u0962\x07b\x02\x02\u0962\u0963\x07`\x02\x02\u0963" +
		"\u0185\x03\x02\x02\x02\u0964\u0995\x07,\x02\x02\u0965\u0995\x07\x17\x02" +
		"\x02\u0966\u0967\x07,\x02\x02\u0967\u0968\x07R\x02\x02\u0968\u0995\x07" +
		"S\x02\x02\u0969\u096A\x07\x17\x02\x02\u096A\u096B\x07R\x02\x02\u096B\u0995" +
		"\x07S\x02\x02\u096C\u0995\x07V\x02\x02\u096D\u0995\x07W\x02\x02\u096E" +
		"\u0995\x07X\x02\x02\u096F\u0995\x07Y\x02\x02\u0970\u0995\x07Z\x02\x02" +
		"\u0971\u0995\x07[\x02\x02\u0972\u0995\x07\\\x02\x02\u0973\u0995\x07]\x02" +
		"\x02\u0974\u0995\x07^\x02\x02\u0975\u0995\x07_\x02\x02\u0976\u0995\x07" +
		"`\x02\x02\u0977\u0995\x07a\x02\x02\u0978\u0995\x07b\x02\x02\u0979\u0995" +
		"\x07c\x02\x02\u097A\u0995\x07d\x02\x02\u097B\u0995\x07e\x02\x02\u097C" +
		"\u0995\x07f\x02\x02\u097D\u0995\x07g\x02\x02\u097E\u0995\x07h\x02\x02" +
		"\u097F\u0995\x07i\x02\x02\u0980\u0995\x07j\x02\x02\u0981\u0995\x07k\x02" +
		"\x02\u0982\u0995\x05\u0182\xC2\x02\u0983\u0995\x05\u0184\xC3\x02\u0984" +
		"\u0995\x07l\x02\x02\u0985\u0995\x07m\x02\x02\u0986\u0995\x07n\x02\x02" +
		"\u0987\u0995\x07o\x02\x02\u0988\u0995\x07p\x02\x02\u0989\u0995\x07q\x02" +
		"\x02\u098A\u0995\x07r\x02\x02\u098B\u0995\x07s\x02\x02\u098C\u0995\x07" +
		"t\x02\x02\u098D\u0995\x07u\x02\x02\u098E\u0995\x07v\x02\x02\u098F\u0995" +
		"\x07w\x02\x02\u0990\u0991\x07P\x02\x02\u0991\u0995\x07Q\x02\x02\u0992" +
		"\u0993\x07R\x02\x02\u0993\u0995\x07S\x02\x02\u0994\u0964\x03\x02\x02\x02" +
		"\u0994\u0965\x03\x02\x02\x02\u0994\u0966\x03\x02\x02\x02\u0994\u0969\x03" +
		"\x02\x02\x02\u0994\u096C\x03\x02\x02\x02\u0994\u096D\x03\x02\x02\x02\u0994" +
		"\u096E\x03\x02\x02\x02\u0994\u096F\x03\x02\x02\x02\u0994\u0970\x03\x02" +
		"\x02\x02\u0994\u0971\x03\x02\x02\x02\u0994\u0972\x03\x02\x02\x02\u0994" +
		"\u0973\x03\x02\x02\x02\u0994\u0974\x03\x02\x02\x02\u0994\u0975\x03\x02" +
		"\x02\x02\u0994\u0976\x03\x02\x02\x02\u0994\u0977\x03\x02\x02\x02\u0994" +
		"\u0978\x03\x02\x02\x02\u0994\u0979\x03\x02\x02\x02\u0994\u097A\x03\x02" +
		"\x02\x02\u0994\u097B\x03\x02\x02\x02\u0994\u097C\x03\x02\x02\x02\u0994" +
		"\u097D\x03\x02\x02\x02\u0994\u097E\x03\x02\x02\x02\u0994\u097F\x03\x02" +
		"\x02\x02\u0994\u0980\x03\x02\x02\x02\u0994\u0981\x03\x02\x02\x02\u0994" +
		"\u0982\x03\x02\x02\x02\u0994\u0983\x03\x02\x02\x02\u0994\u0984\x03\x02" +
		"\x02\x02\u0994\u0985\x03\x02\x02\x02\u0994\u0986\x03\x02\x02\x02\u0994" +
		"\u0987\x03\x02\x02\x02\u0994\u0988\x03\x02\x02\x02\u0994\u0989\x03\x02" +
		"\x02\x02\u0994\u098A\x03\x02\x02\x02\u0994\u098B\x03\x02\x02\x02\u0994" +
		"\u098C\x03\x02\x02\x02\u0994\u098D\x03\x02\x02\x02\u0994\u098E\x03\x02" +
		"\x02\x02\u0994\u098F\x03\x02\x02\x02\u0994\u0990\x03\x02\x02\x02\u0994" +
		"\u0992\x03\x02\x02\x02\u0995\u0187\x03\x02\x02\x02\u0996\u099E\x07\x80" +
		"\x02\x02\u0997\u099E\x07\x86\x02\x02\u0998\u099E\x07\x87\x02\x02\u0999" +
		"\u099E\x07\x88\x02\x02\u099A\u099E\x05\u018A\xC6\x02\u099B\u099E\x05\u018C" +
		"\xC7\x02\u099C\u099E\x05\u018E\xC8\x02\u099D\u0996\x03\x02\x02\x02\u099D" +
		"\u0997\x03\x02\x02\x02\u099D\u0998\x03\x02\x02\x02\u099D\u0999\x03\x02" +
		"\x02\x02\u099D\u099A\x03\x02\x02\x02\u099D\u099B\x03\x02\x02\x02\u099D" +
		"\u099C\x03\x02\x02\x02\u099E\u0189\x03\x02\x02\x02\u099F\u09A0\t\v\x02" +
		"\x02\u09A0\u018B\x03\x02\x02\x02\u09A1\u09A2\x07.\x02\x02\u09A2\u018D" +
		"\x03\x02\x02\x02\u09A3\u09A4\t\f\x02\x02\u09A4\u018F\x03\x02\x02\x02\u013D" +
		"\u0191\u019D\u01A1\u01AC\u01B0\u01BF\u01C6\u01CB\u01CD\u01D2\u01D8\u01E2" +
		"\u01E9\u01EF\u01F3\u01F8\u01FE\u0205\u020B\u020E\u0211\u0214\u021B\u0222" +
		"\u0256\u0265\u026B\u0271\u027E\u0280\u0286\u0295\u029B\u02B9\u02BE\u02C2" +
		"\u02C6\u02C9\u02CD\u02D3\u02D5\u02DD\u02E1\u02E4\u02EB\u02F2\u02F6\u02FB" +
		"\u02FF\u0302\u0307\u030D\u031A\u0325\u0327\u0336\u0338\u0344\u0346\u0353" +
		"\u0355\u0367\u0369\u0375\u0377\u0382\u038D\u0398\u03A3\u03AE\u03B8\u03C0" +
		"\u03CD\u03D7\u03DE\u03E2\u03E6\u03EA\u03EE\u03F3\u03F6\u03F9\u03FF\u0407" +
		"\u040C\u040F\u0415\u0420\u0437\u043B\u0443\u0449\u045D\u0461\u046E\u0472" +
		"\u0475\u047C\u0484\u048E\u0499\u04A5\u04AF\u04B4\u04BB\u04BE\u04C3\u04C8" +
		"\u04DD\u04E1\u04E6\u04F1\u04F7\u04FB\u0500\u0504\u0509\u050C\u0522\u0528" +
		"\u0533\u0537\u053A\u0544\u054A\u054D\u0554\u055E\u0562\u0565\u0568\u056C" +
		"\u0571\u0573\u0577\u057B\u0584\u0591\u0599\u059F\u05A5\u05A9\u05AC\u05B5" +
		"\u05BE\u05C6\u05D1\u05D7\u05E2\u05E5\u05EA\u05F9\u05FF\u0608\u0612\u0618" +
		"\u0620\u0624\u0628\u062D\u0632\u0639\u063B\u0640\u0644\u0652\u0658\u0667" +
		"\u0671\u0676\u067D\u0683\u0688\u068E\u0695\u0699\u069B\u069D\u06A4\u06A7" +
		"\u06AA\u06AD\u06B2\u06B6\u06B9\u06BD\u06C1\u06C6\u06C9\u06CB\u06CF\u06D6" +
		"\u06DC\u06E0\u06E6\u06EB\u06ED\u06F3\u06F7\u06FD\u0704\u0708\u070A\u070C" +
		"\u0713\u071D\u0721\u0723\u0725\u0729\u072C\u0732\u073C\u0740\u0746\u074E" +
		"\u0752\u0755\u0759\u075E\u0761\u0764\u0768\u076D\u0777\u077E\u0783\u0787" +
		"\u078C\u0792\u0796\u079C\u07A2\u07A6\u07AB\u07B1\u07B5\u07B8\u07BC\u07BF" +
		"\u07C1\u07C4\u07CE\u07D3\u07D5\u07D8\u07DB\u07DE\u07E7\u07F1\u07F6\u07F9" +
		"\u07FD\u0800\u0803\u0807\u0810\u081F\u0825\u0829\u082D\u0831\u0835\u0839" +
		"\u083D\u0841\u0844\u0848\u0853\u0857\u085E\u0862\u0867\u086C\u0873\u0877" +
		"\u0881\u0891\u0896\u089A\u089D\u08A1\u08A7\u08AA\u08AE\u08B8\u08BB\u08C3" +
		"\u08C8\u08CD\u08D5\u08DC\u08E0\u08E7\u08ED\u08F1\u08F7\u0900\u0904\u0907" +
		"\u0917\u091E\u0927\u092D\u0931\u0934\u0938\u093C\u0941\u0948\u094E\u0952" +
		"\u095B\u0994\u099D";
	public static readonly _serializedATN: string = Utils.join(
		[
			CPP14Parser._serializedATNSegment0,
			CPP14Parser._serializedATNSegment1,
			CPP14Parser._serializedATNSegment2,
			CPP14Parser._serializedATNSegment3,
			CPP14Parser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CPP14Parser.__ATN) {
			CPP14Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CPP14Parser._serializedATN));
		}

		return CPP14Parser.__ATN;
	}

}

export class TranslationunitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CPP14Parser.EOF, 0); }
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_translationunit; }
}


export class PrimaryexpressionContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public This(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.This, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	public lambdaexpression(): LambdaexpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_primaryexpression; }
}


export class IdexpressionContext extends ParserRuleContext {
	public unqualifiedid(): UnqualifiedidContext | undefined {
		return this.tryGetRuleContext(0, UnqualifiedidContext);
	}
	public qualifiedid(): QualifiedidContext | undefined {
		return this.tryGetRuleContext(0, QualifiedidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_idexpression; }
}


export class UnqualifiedidContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public operatorfunctionid(): OperatorfunctionidContext | undefined {
		return this.tryGetRuleContext(0, OperatorfunctionidContext);
	}
	public conversionfunctionid(): ConversionfunctionidContext | undefined {
		return this.tryGetRuleContext(0, ConversionfunctionidContext);
	}
	public literaloperatorid(): LiteraloperatoridContext | undefined {
		return this.tryGetRuleContext(0, LiteraloperatoridContext);
	}
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public classname(): ClassnameContext | undefined {
		return this.tryGetRuleContext(0, ClassnameContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	public templateid(): TemplateidContext | undefined {
		return this.tryGetRuleContext(0, TemplateidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unqualifiedid; }
}


export class QualifiedidContext extends ParserRuleContext {
	public nestednamespecifier(): NestednamespecifierContext {
		return this.getRuleContext(0, NestednamespecifierContext);
	}
	public unqualifiedid(): UnqualifiedidContext {
		return this.getRuleContext(0, UnqualifiedidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_qualifiedid; }
}


export class NestednamespecifierContext extends ParserRuleContext {
	public Doublecolon(): TerminalNode { return this.getToken(CPP14Parser.Doublecolon, 0); }
	public typename(): TypenameContext | undefined {
		return this.tryGetRuleContext(0, TypenameContext);
	}
	public namespacename(): NamespacenameContext | undefined {
		return this.tryGetRuleContext(0, NamespacenameContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_nestednamespecifier; }
}


export class LambdaexpressionContext extends ParserRuleContext {
	public lambdaintroducer(): LambdaintroducerContext {
		return this.getRuleContext(0, LambdaintroducerContext);
	}
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public lambdadeclarator(): LambdadeclaratorContext | undefined {
		return this.tryGetRuleContext(0, LambdadeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdaexpression; }
}


export class LambdaintroducerContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode { return this.getToken(CPP14Parser.RightBracket, 0); }
	public lambdacapture(): LambdacaptureContext | undefined {
		return this.tryGetRuleContext(0, LambdacaptureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdaintroducer; }
}


export class LambdacaptureContext extends ParserRuleContext {
	public capturedefault(): CapturedefaultContext | undefined {
		return this.tryGetRuleContext(0, CapturedefaultContext);
	}
	public capturelist(): CapturelistContext | undefined {
		return this.tryGetRuleContext(0, CapturelistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdacapture; }
}


export class CapturedefaultContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_capturedefault; }
}


export class CapturelistContext extends ParserRuleContext {
	public capture(): CaptureContext {
		return this.getRuleContext(0, CaptureContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public capturelist(): CapturelistContext | undefined {
		return this.tryGetRuleContext(0, CapturelistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_capturelist; }
}


export class CaptureContext extends ParserRuleContext {
	public simplecapture(): SimplecaptureContext | undefined {
		return this.tryGetRuleContext(0, SimplecaptureContext);
	}
	public initcapture(): InitcaptureContext | undefined {
		return this.tryGetRuleContext(0, InitcaptureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_capture; }
}


export class SimplecaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.This, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simplecapture; }
}


export class InitcaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initcapture; }
}


export class LambdadeclaratorContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		return this.getRuleContext(0, ParameterdeclarationclauseContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mutable, 0); }
	public exceptionspecification(): ExceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionspecificationContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdadeclarator; }
}


export class PostfixexpressionContext extends ParserRuleContext {
	public primaryexpression(): PrimaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryexpressionContext);
	}
	public postfixexpression(): PostfixexpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixexpressionContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public simpletypespecifier(): SimpletypespecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpletypespecifierContext);
	}
	public typenamespecifier(): TypenamespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypenamespecifierContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dot, 0); }
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Arrow, 0); }
	public pseudodestructorname(): PseudodestructornameContext | undefined {
		return this.tryGetRuleContext(0, PseudodestructornameContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public Dynamic_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dynamic_cast, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public Static_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Static_cast, 0); }
	public Reinterpret_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Reinterpret_cast, 0); }
	public Const_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Const_cast, 0); }
	public Typeid(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typeid, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_postfixexpression; }
}


export class ExpressionlistContext extends ParserRuleContext {
	public initializerlist(): InitializerlistContext {
		return this.getRuleContext(0, InitializerlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expressionlist; }
}


export class PseudodestructornameContext extends ParserRuleContext {
	public typename(): TypenameContext[];
	public typename(i: number): TypenameContext;
	public typename(i?: number): TypenameContext | TypenameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypenameContext);
		} else {
			return this.getRuleContext(i, TypenameContext);
		}
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public Tilde(): TerminalNode { return this.getToken(CPP14Parser.Tilde, 0); }
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pseudodestructorname; }
}


export class UnaryexpressionContext extends ParserRuleContext {
	public postfixexpression(): PostfixexpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixexpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public castexpression(): CastexpressionContext | undefined {
		return this.tryGetRuleContext(0, CastexpressionContext);
	}
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public unaryoperator(): UnaryoperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryoperatorContext);
	}
	public Sizeof(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Sizeof, 0); }
	public unaryexpression(): UnaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryexpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Alignof(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Alignof, 0); }
	public noexceptexpression(): NoexceptexpressionContext | undefined {
		return this.tryGetRuleContext(0, NoexceptexpressionContext);
	}
	public newexpression(): NewexpressionContext | undefined {
		return this.tryGetRuleContext(0, NewexpressionContext);
	}
	public deleteexpression(): DeleteexpressionContext | undefined {
		return this.tryGetRuleContext(0, DeleteexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unaryexpression; }
}


export class UnaryoperatorContext extends ParserRuleContext {
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Not, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unaryoperator; }
}


export class NewexpressionContext extends ParserRuleContext {
	public New(): TerminalNode { return this.getToken(CPP14Parser.New, 0); }
	public newtypeid(): NewtypeidContext | undefined {
		return this.tryGetRuleContext(0, NewtypeidContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public newplacement(): NewplacementContext | undefined {
		return this.tryGetRuleContext(0, NewplacementContext);
	}
	public newinitializer(): NewinitializerContext | undefined {
		return this.tryGetRuleContext(0, NewinitializerContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newexpression; }
}


export class NewplacementContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newplacement; }
}


export class NewtypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public newdeclarator(): NewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newtypeid; }
}


export class NewdeclaratorContext extends ParserRuleContext {
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public newdeclarator(): NewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewdeclaratorContext);
	}
	public noptrnewdeclarator(): NoptrnewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrnewdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newdeclarator; }
}


export class NoptrnewdeclaratorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPP14Parser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode { return this.getToken(CPP14Parser.RightBracket, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public noptrnewdeclarator(): NoptrnewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrnewdeclaratorContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noptrnewdeclarator; }
}


export class NewinitializerContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newinitializer; }
}


export class DeleteexpressionContext extends ParserRuleContext {
	public Delete(): TerminalNode { return this.getToken(CPP14Parser.Delete, 0); }
	public castexpression(): CastexpressionContext {
		return this.getRuleContext(0, CastexpressionContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_deleteexpression; }
}


export class NoexceptexpressionContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPP14Parser.Noexcept, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noexceptexpression; }
}


export class CastexpressionContext extends ParserRuleContext {
	public unaryexpression(): UnaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryexpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public castexpression(): CastexpressionContext | undefined {
		return this.tryGetRuleContext(0, CastexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_castexpression; }
}


export class PmexpressionContext extends ParserRuleContext {
	public castexpression(): CastexpressionContext {
		return this.getRuleContext(0, CastexpressionContext);
	}
	public pmexpression(): PmexpressionContext | undefined {
		return this.tryGetRuleContext(0, PmexpressionContext);
	}
	public DotStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DotStar, 0); }
	public ArrowStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ArrowStar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pmexpression; }
}


export class MultiplicativeexpressionContext extends ParserRuleContext {
	public pmexpression(): PmexpressionContext {
		return this.getRuleContext(0, PmexpressionContext);
	}
	public multiplicativeexpression(): MultiplicativeexpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeexpressionContext);
	}
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mod, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_multiplicativeexpression; }
}


export class AdditiveexpressionContext extends ParserRuleContext {
	public multiplicativeexpression(): MultiplicativeexpressionContext {
		return this.getRuleContext(0, MultiplicativeexpressionContext);
	}
	public additiveexpression(): AdditiveexpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveexpressionContext);
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_additiveexpression; }
}


export class ShiftexpressionContext extends ParserRuleContext {
	public additiveexpression(): AdditiveexpressionContext {
		return this.getRuleContext(0, AdditiveexpressionContext);
	}
	public shiftexpression(): ShiftexpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftexpressionContext);
	}
	public LeftShift(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShift, 0); }
	public rightShift(): RightShiftContext | undefined {
		return this.tryGetRuleContext(0, RightShiftContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_shiftexpression; }
}


export class RelationalexpressionContext extends ParserRuleContext {
	public shiftexpression(): ShiftexpressionContext {
		return this.getRuleContext(0, ShiftexpressionContext);
	}
	public relationalexpression(): RelationalexpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalexpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LessEqual, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.GreaterEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_relationalexpression; }
}


export class EqualityexpressionContext extends ParserRuleContext {
	public relationalexpression(): RelationalexpressionContext {
		return this.getRuleContext(0, RelationalexpressionContext);
	}
	public equalityexpression(): EqualityexpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityexpressionContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.NotEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_equalityexpression; }
}


export class AndexpressionContext extends ParserRuleContext {
	public equalityexpression(): EqualityexpressionContext {
		return this.getRuleContext(0, EqualityexpressionContext);
	}
	public andexpression(): AndexpressionContext | undefined {
		return this.tryGetRuleContext(0, AndexpressionContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_andexpression; }
}


export class ExclusiveorexpressionContext extends ParserRuleContext {
	public andexpression(): AndexpressionContext {
		return this.getRuleContext(0, AndexpressionContext);
	}
	public exclusiveorexpression(): ExclusiveorexpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveorexpressionContext);
	}
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Caret, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exclusiveorexpression; }
}


export class InclusiveorexpressionContext extends ParserRuleContext {
	public exclusiveorexpression(): ExclusiveorexpressionContext {
		return this.getRuleContext(0, ExclusiveorexpressionContext);
	}
	public inclusiveorexpression(): InclusiveorexpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveorexpressionContext);
	}
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_inclusiveorexpression; }
}


export class LogicalandexpressionContext extends ParserRuleContext {
	public inclusiveorexpression(): InclusiveorexpressionContext {
		return this.getRuleContext(0, InclusiveorexpressionContext);
	}
	public logicalandexpression(): LogicalandexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalandexpressionContext);
	}
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_logicalandexpression; }
}


export class LogicalorexpressionContext extends ParserRuleContext {
	public logicalandexpression(): LogicalandexpressionContext {
		return this.getRuleContext(0, LogicalandexpressionContext);
	}
	public logicalorexpression(): LogicalorexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalorexpressionContext);
	}
	public OrOr(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrOr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_logicalorexpression; }
}


export class ConditionalexpressionContext extends ParserRuleContext {
	public logicalorexpression(): LogicalorexpressionContext {
		return this.getRuleContext(0, LogicalorexpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conditionalexpression; }
}


export class AssignmentexpressionContext extends ParserRuleContext {
	public conditionalexpression(): ConditionalexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalexpressionContext);
	}
	public logicalorexpression(): LogicalorexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalorexpressionContext);
	}
	public assignmentoperator(): AssignmentoperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentoperatorContext);
	}
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public throwexpression(): ThrowexpressionContext | undefined {
		return this.tryGetRuleContext(0, ThrowexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_assignmentexpression; }
}


export class AssignmentoperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusAssign, 0); }
	public rightShiftAssign(): RightShiftAssignContext | undefined {
		return this.tryGetRuleContext(0, RightShiftAssignContext);
	}
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShiftAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.XorAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_assignmentoperator; }
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentexpression(): AssignmentexpressionContext {
		return this.getRuleContext(0, AssignmentexpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expression; }
}


export class ConstantexpressionContext extends ParserRuleContext {
	public conditionalexpression(): ConditionalexpressionContext {
		return this.getRuleContext(0, ConditionalexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_constantexpression; }
}


export class StatementContext extends ParserRuleContext {
	public labeledstatement(): LabeledstatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledstatementContext);
	}
	public expressionstatement(): ExpressionstatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionstatementContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public compoundstatement(): CompoundstatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundstatementContext);
	}
	public selectionstatement(): SelectionstatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionstatementContext);
	}
	public iterationstatement(): IterationstatementContext | undefined {
		return this.tryGetRuleContext(0, IterationstatementContext);
	}
	public jumpstatement(): JumpstatementContext | undefined {
		return this.tryGetRuleContext(0, JumpstatementContext);
	}
	public declarationstatement(): DeclarationstatementContext | undefined {
		return this.tryGetRuleContext(0, DeclarationstatementContext);
	}
	public tryblock(): TryblockContext | undefined {
		return this.tryGetRuleContext(0, TryblockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_statement; }
}


export class LabeledstatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Case(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Case, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_labeledstatement; }
}


export class ExpressionstatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expressionstatement; }
}


export class CompoundstatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public statementseq(): StatementseqContext | undefined {
		return this.tryGetRuleContext(0, StatementseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_compoundstatement; }
}


export class StatementseqContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public statementseq(): StatementseqContext | undefined {
		return this.tryGetRuleContext(0, StatementseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_statementseq; }
}


export class SelectionstatementContext extends ParserRuleContext {
	public If(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_selectionstatement; }
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_condition; }
}


export class IterationstatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Do, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.For, 0); }
	public forinitstatement(): ForinitstatementContext | undefined {
		return this.tryGetRuleContext(0, ForinitstatementContext);
	}
	public forrangedeclaration(): ForrangedeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForrangedeclarationContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public forrangeinitializer(): ForrangeinitializerContext | undefined {
		return this.tryGetRuleContext(0, ForrangeinitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_iterationstatement; }
}


export class ForinitstatementContext extends ParserRuleContext {
	public expressionstatement(): ExpressionstatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionstatementContext);
	}
	public simpledeclaration(): SimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpledeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forinitstatement; }
}


export class ForrangedeclarationContext extends ParserRuleContext {
	public declspecifierseq(): DeclspecifierseqContext {
		return this.getRuleContext(0, DeclspecifierseqContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forrangedeclaration; }
}


export class ForrangeinitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forrangeinitializer; }
}


export class JumpstatementContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Break, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Continue, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	public Goto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Goto, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_jumpstatement; }
}


export class DeclarationstatementContext extends ParserRuleContext {
	public blockdeclaration(): BlockdeclarationContext {
		return this.getRuleContext(0, BlockdeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarationstatement; }
}


export class DeclarationseqContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarationseq; }
}


export class DeclarationContext extends ParserRuleContext {
	public blockdeclaration(): BlockdeclarationContext | undefined {
		return this.tryGetRuleContext(0, BlockdeclarationContext);
	}
	public functiondefinition(): FunctiondefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefinitionContext);
	}
	public templatedeclaration(): TemplatedeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplatedeclarationContext);
	}
	public explicitinstantiation(): ExplicitinstantiationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitinstantiationContext);
	}
	public explicitspecialization(): ExplicitspecializationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitspecializationContext);
	}
	public linkagespecification(): LinkagespecificationContext | undefined {
		return this.tryGetRuleContext(0, LinkagespecificationContext);
	}
	public namespacedefinition(): NamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespacedefinitionContext);
	}
	public emptydeclaration(): EmptydeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptydeclarationContext);
	}
	public attributedeclaration(): AttributedeclarationContext | undefined {
		return this.tryGetRuleContext(0, AttributedeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declaration; }
}


export class BlockdeclarationContext extends ParserRuleContext {
	public simpledeclaration(): SimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpledeclarationContext);
	}
	public asmdefinition(): AsmdefinitionContext | undefined {
		return this.tryGetRuleContext(0, AsmdefinitionContext);
	}
	public namespacealiasdefinition(): NamespacealiasdefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespacealiasdefinitionContext);
	}
	public usingdeclaration(): UsingdeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingdeclarationContext);
	}
	public usingdirective(): UsingdirectiveContext | undefined {
		return this.tryGetRuleContext(0, UsingdirectiveContext);
	}
	public static_assertdeclaration(): Static_assertdeclarationContext | undefined {
		return this.tryGetRuleContext(0, Static_assertdeclarationContext);
	}
	public aliasdeclaration(): AliasdeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasdeclarationContext);
	}
	public opaqueenumdeclaration(): OpaqueenumdeclarationContext | undefined {
		return this.tryGetRuleContext(0, OpaqueenumdeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_blockdeclaration; }
}


export class AliasdeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public typeid(): TypeidContext {
		return this.getRuleContext(0, TypeidContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_aliasdeclaration; }
}


export class SimpledeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public initdeclaratorlist(): InitdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, InitdeclaratorlistContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpledeclaration; }
}


export class Static_assertdeclarationContext extends ParserRuleContext {
	public Static_assert(): TerminalNode { return this.getToken(CPP14Parser.Static_assert, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public constantexpression(): ConstantexpressionContext {
		return this.getRuleContext(0, ConstantexpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CPP14Parser.Comma, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_static_assertdeclaration; }
}


export class EmptydeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_emptydeclaration; }
}


export class AttributedeclarationContext extends ParserRuleContext {
	public attributespecifierseq(): AttributespecifierseqContext {
		return this.getRuleContext(0, AttributespecifierseqContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributedeclaration; }
}


export class DeclspecifierContext extends ParserRuleContext {
	public storageclassspecifier(): StorageclassspecifierContext | undefined {
		return this.tryGetRuleContext(0, StorageclassspecifierContext);
	}
	public typespecifier(): TypespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierContext);
	}
	public functionspecifier(): FunctionspecifierContext | undefined {
		return this.tryGetRuleContext(0, FunctionspecifierContext);
	}
	public Friend(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Friend, 0); }
	public Typedef(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typedef, 0); }
	public Constexpr(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Constexpr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declspecifier; }
}


export class DeclspecifierseqContext extends ParserRuleContext {
	public declspecifier(): DeclspecifierContext {
		return this.getRuleContext(0, DeclspecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declspecifierseq; }
}


export class StorageclassspecifierContext extends ParserRuleContext {
	public Register(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Register, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Static, 0); }
	public Thread_local(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Thread_local, 0); }
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Extern, 0); }
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mutable, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_storageclassspecifier; }
}


export class FunctionspecifierContext extends ParserRuleContext {
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Virtual, 0); }
	public Explicit(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Explicit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionspecifier; }
}


export class TypedefnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typedefname; }
}


export class TypespecifierContext extends ParserRuleContext {
	public trailingtypespecifier(): TrailingtypespecifierContext | undefined {
		return this.tryGetRuleContext(0, TrailingtypespecifierContext);
	}
	public classspecifier(): ClassspecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassspecifierContext);
	}
	public enumspecifier(): EnumspecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumspecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typespecifier; }
}


export class TrailingtypespecifierContext extends ParserRuleContext {
	public simpletypespecifier(): SimpletypespecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpletypespecifierContext);
	}
	public elaboratedtypespecifier(): ElaboratedtypespecifierContext | undefined {
		return this.tryGetRuleContext(0, ElaboratedtypespecifierContext);
	}
	public typenamespecifier(): TypenamespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypenamespecifierContext);
	}
	public cvqualifier(): CvqualifierContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingtypespecifier; }
}


export class TypespecifierseqContext extends ParserRuleContext {
	public typespecifier(): TypespecifierContext {
		return this.getRuleContext(0, TypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public typespecifierseq(): TypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typespecifierseq; }
}


export class TrailingtypespecifierseqContext extends ParserRuleContext {
	public trailingtypespecifier(): TrailingtypespecifierContext {
		return this.getRuleContext(0, TrailingtypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TrailingtypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingtypespecifierseq; }
}


export class SimpletypespecifierContext extends ParserRuleContext {
	public typename(): TypenameContext | undefined {
		return this.tryGetRuleContext(0, TypenameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Char(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char, 0); }
	public Char16(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char16, 0); }
	public Char32(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char32, 0); }
	public Wchar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Wchar, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Bool, 0); }
	public Short(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Short, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Int, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Long, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Signed, 0); }
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Unsigned, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Double, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Void, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Auto, 0); }
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpletypespecifier; }
}


export class TypenameContext extends ParserRuleContext {
	public classname(): ClassnameContext | undefined {
		return this.tryGetRuleContext(0, ClassnameContext);
	}
	public enumname(): EnumnameContext | undefined {
		return this.tryGetRuleContext(0, EnumnameContext);
	}
	public typedefname(): TypedefnameContext | undefined {
		return this.tryGetRuleContext(0, TypedefnameContext);
	}
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typename; }
}


export class DecltypespecifierContext extends ParserRuleContext {
	public Decltype(): TerminalNode { return this.getToken(CPP14Parser.Decltype, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Auto, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_decltypespecifier; }
}


export class ElaboratedtypespecifierContext extends ParserRuleContext {
	public classkey(): ClasskeyContext | undefined {
		return this.tryGetRuleContext(0, ClasskeyContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Enum, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_elaboratedtypespecifier; }
}


export class EnumnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumname; }
}


export class EnumspecifierContext extends ParserRuleContext {
	public enumhead(): EnumheadContext {
		return this.getRuleContext(0, EnumheadContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public enumeratorlist(): EnumeratorlistContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumspecifier; }
}


export class EnumheadContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumhead; }
}


export class OpaqueenumdeclarationContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_opaqueenumdeclaration; }
}


export class EnumkeyContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CPP14Parser.Enum, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Struct, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumkey; }
}


export class EnumbaseContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumbase; }
}


export class EnumeratorlistContext extends ParserRuleContext {
	public enumeratordefinition(): EnumeratordefinitionContext {
		return this.getRuleContext(0, EnumeratordefinitionContext);
	}
	public enumeratorlist(): EnumeratorlistContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumeratorlist; }
}


export class EnumeratordefinitionContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext {
		return this.getRuleContext(0, EnumeratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumeratordefinition; }
}


export class EnumeratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumerator; }
}


export class NamespacenameContext extends ParserRuleContext {
	public originalnamespacename(): OriginalnamespacenameContext | undefined {
		return this.tryGetRuleContext(0, OriginalnamespacenameContext);
	}
	public namespacealias(): NamespacealiasContext | undefined {
		return this.tryGetRuleContext(0, NamespacealiasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacename; }
}


export class OriginalnamespacenameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_originalnamespacename; }
}


export class NamespacedefinitionContext extends ParserRuleContext {
	public namednamespacedefinition(): NamednamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamednamespacedefinitionContext);
	}
	public unnamednamespacedefinition(): UnnamednamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, UnnamednamespacedefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacedefinition; }
}


export class NamednamespacedefinitionContext extends ParserRuleContext {
	public originalnamespacedefinition(): OriginalnamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, OriginalnamespacedefinitionContext);
	}
	public extensionnamespacedefinition(): ExtensionnamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionnamespacedefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namednamespacedefinition; }
}


export class OriginalnamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_originalnamespacedefinition; }
}


export class ExtensionnamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public originalnamespacename(): OriginalnamespacenameContext {
		return this.getRuleContext(0, OriginalnamespacenameContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_extensionnamespacedefinition; }
}


export class UnnamednamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unnamednamespacedefinition; }
}


export class NamespacebodyContext extends ParserRuleContext {
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacebody; }
}


export class NamespacealiasContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacealias; }
}


export class NamespacealiasdefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		return this.getRuleContext(0, QualifiednamespacespecifierContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacealiasdefinition; }
}


export class QualifiednamespacespecifierContext extends ParserRuleContext {
	public namespacename(): NamespacenameContext {
		return this.getRuleContext(0, NamespacenameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_qualifiednamespacespecifier; }
}


export class UsingdeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public unqualifiedid(): UnqualifiedidContext {
		return this.getRuleContext(0, UnqualifiedidContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public Typename(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typename, 0); }
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_usingdeclaration; }
}


export class UsingdirectiveContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public namespacename(): NamespacenameContext {
		return this.getRuleContext(0, NamespacenameContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_usingdirective; }
}


export class AsmdefinitionContext extends ParserRuleContext {
	public Asm(): TerminalNode { return this.getToken(CPP14Parser.Asm, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_asmdefinition; }
}


export class LinkagespecificationContext extends ParserRuleContext {
	public Extern(): TerminalNode { return this.getToken(CPP14Parser.Extern, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBrace, 0); }
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_linkagespecification; }
}


export class AttributespecifierseqContext extends ParserRuleContext {
	public attributespecifier(): AttributespecifierContext {
		return this.getRuleContext(0, AttributespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributespecifierseq; }
}


export class AttributespecifierContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftBracket);
		} else {
			return this.getToken(CPP14Parser.LeftBracket, i);
		}
	}
	public attributelist(): AttributelistContext | undefined {
		return this.tryGetRuleContext(0, AttributelistContext);
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightBracket);
		} else {
			return this.getToken(CPP14Parser.RightBracket, i);
		}
	}
	public alignmentspecifier(): AlignmentspecifierContext | undefined {
		return this.tryGetRuleContext(0, AlignmentspecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributespecifier; }
}


export class AlignmentspecifierContext extends ParserRuleContext {
	public Alignas(): TerminalNode { return this.getToken(CPP14Parser.Alignas, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_alignmentspecifier; }
}


export class AttributelistContext extends ParserRuleContext {
	public attribute(): AttributeContext | undefined {
		return this.tryGetRuleContext(0, AttributeContext);
	}
	public attributelist(): AttributelistContext | undefined {
		return this.tryGetRuleContext(0, AttributelistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributelist; }
}


export class AttributeContext extends ParserRuleContext {
	public attributetoken(): AttributetokenContext {
		return this.getRuleContext(0, AttributetokenContext);
	}
	public attributeargumentclause(): AttributeargumentclauseContext | undefined {
		return this.tryGetRuleContext(0, AttributeargumentclauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attribute; }
}


export class AttributetokenContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributescopedtoken(): AttributescopedtokenContext | undefined {
		return this.tryGetRuleContext(0, AttributescopedtokenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributetoken; }
}


export class AttributescopedtokenContext extends ParserRuleContext {
	public attributenamespace(): AttributenamespaceContext {
		return this.getRuleContext(0, AttributenamespaceContext);
	}
	public Doublecolon(): TerminalNode { return this.getToken(CPP14Parser.Doublecolon, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributescopedtoken; }
}


export class AttributenamespaceContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributenamespace; }
}


export class AttributeargumentclauseContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public balancedtokenseq(): BalancedtokenseqContext {
		return this.getRuleContext(0, BalancedtokenseqContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributeargumentclause; }
}


export class BalancedtokenseqContext extends ParserRuleContext {
	public balancedtoken(): BalancedtokenContext | undefined {
		return this.tryGetRuleContext(0, BalancedtokenContext);
	}
	public balancedtokenseq(): BalancedtokenseqContext | undefined {
		return this.tryGetRuleContext(0, BalancedtokenseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_balancedtokenseq; }
}


export class BalancedtokenContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public balancedtokenseq(): BalancedtokenseqContext {
		return this.getRuleContext(0, BalancedtokenseqContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_balancedtoken; }
}


export class InitdeclaratorlistContext extends ParserRuleContext {
	public initdeclarator(): InitdeclaratorContext {
		return this.getRuleContext(0, InitdeclaratorContext);
	}
	public initdeclaratorlist(): InitdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, InitdeclaratorlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initdeclaratorlist; }
}


export class InitdeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initdeclarator; }
}


export class DeclaratorContext extends ParserRuleContext {
	public ptrdeclarator(): PtrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrdeclaratorContext);
	}
	public noptrdeclarator(): NoptrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarator; }
}


export class PtrdeclaratorContext extends ParserRuleContext {
	public noptrdeclarator(): NoptrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public ptrdeclarator(): PtrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ptrdeclarator; }
}


export class NoptrdeclaratorContext extends ParserRuleContext {
	public declaratorid(): DeclaratoridContext | undefined {
		return this.tryGetRuleContext(0, DeclaratoridContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public noptrdeclarator(): NoptrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public ptrdeclarator(): PtrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrdeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noptrdeclarator; }
}


export class ParametersandqualifiersContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		return this.getRuleContext(0, ParameterdeclarationclauseContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	public refqualifier(): RefqualifierContext | undefined {
		return this.tryGetRuleContext(0, RefqualifierContext);
	}
	public exceptionspecification(): ExceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionspecificationContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parametersandqualifiers; }
}


export class TrailingreturntypeContext extends ParserRuleContext {
	public Arrow(): TerminalNode { return this.getToken(CPP14Parser.Arrow, 0); }
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext {
		return this.getRuleContext(0, TrailingtypespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingreturntype; }
}


export class PtroperatorContext extends ParserRuleContext {
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAnd, 0); }
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ptroperator; }
}


export class CvqualifierseqContext extends ParserRuleContext {
	public cvqualifier(): CvqualifierContext {
		return this.getRuleContext(0, CvqualifierContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_cvqualifierseq; }
}


export class CvqualifierContext extends ParserRuleContext {
	public Const(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Const, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Volatile, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_cvqualifier; }
}


export class RefqualifierContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_refqualifier; }
}


export class DeclaratoridContext extends ParserRuleContext {
	public idexpression(): IdexpressionContext {
		return this.getRuleContext(0, IdexpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declaratorid; }
}


export class TypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeid; }
}


export class AbstractdeclaratorContext extends ParserRuleContext {
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public abstractpackdeclarator(): AbstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractpackdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_abstractdeclarator; }
}


export class PtrabstractdeclaratorContext extends ParserRuleContext {
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ptrabstractdeclarator; }
}


export class NoptrabstractdeclaratorContext extends ParserRuleContext {
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noptrabstractdeclarator; }
}


export class AbstractpackdeclaratorContext extends ParserRuleContext {
	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractpackdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public abstractpackdeclarator(): AbstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractpackdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_abstractpackdeclarator; }
}


export class NoptrabstractpackdeclaratorContext extends ParserRuleContext {
	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractpackdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noptrabstractpackdeclarator; }
}


export class ParameterdeclarationclauseContext extends ParserRuleContext {
	public parameterdeclarationlist(): ParameterdeclarationlistContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationlistContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclarationclause; }
}


export class ParameterdeclarationlistContext extends ParserRuleContext {
	public parameterdeclaration(): ParameterdeclarationContext {
		return this.getRuleContext(0, ParameterdeclarationContext);
	}
	public parameterdeclarationlist(): ParameterdeclarationlistContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclarationlist; }
}


export class ParameterdeclarationContext extends ParserRuleContext {
	public declspecifierseq(): DeclspecifierseqContext {
		return this.getRuleContext(0, DeclspecifierseqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclaration; }
}


export class FunctiondefinitionContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public functionbody(): FunctionbodyContext {
		return this.getRuleContext(0, FunctionbodyContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functiondefinition; }
}


export class FunctionbodyContext extends ParserRuleContext {
	public compoundstatement(): CompoundstatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundstatementContext);
	}
	public ctorinitializer(): CtorinitializerContext | undefined {
		return this.tryGetRuleContext(0, CtorinitializerContext);
	}
	public functiontryblock(): FunctiontryblockContext | undefined {
		return this.tryGetRuleContext(0, FunctiontryblockContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Default, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Delete, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionbody; }
}


export class InitializerContext extends ParserRuleContext {
	public braceorequalinitializer(): BraceorequalinitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceorequalinitializerContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializer; }
}


export class BraceorequalinitializerContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_braceorequalinitializer; }
}


export class InitializerclauseContext extends ParserRuleContext {
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializerclause; }
}


export class InitializerlistContext extends ParserRuleContext {
	public initializerclause(): InitializerclauseContext {
		return this.getRuleContext(0, InitializerclauseContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public initializerlist(): InitializerlistContext | undefined {
		return this.tryGetRuleContext(0, InitializerlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializerlist; }
}


export class BracedinitlistContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public initializerlist(): InitializerlistContext | undefined {
		return this.tryGetRuleContext(0, InitializerlistContext);
	}
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_bracedinitlist; }
}


export class ClassnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classname; }
}


export class ClassspecifierContext extends ParserRuleContext {
	public classhead(): ClassheadContext {
		return this.getRuleContext(0, ClassheadContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public memberspecification(): MemberspecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberspecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classspecifier; }
}


export class ClassheadContext extends ParserRuleContext {
	public classkey(): ClasskeyContext {
		return this.getRuleContext(0, ClasskeyContext);
	}
	public classheadname(): ClassheadnameContext | undefined {
		return this.tryGetRuleContext(0, ClassheadnameContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public classvirtspecifier(): ClassvirtspecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassvirtspecifierContext);
	}
	public baseclause(): BaseclauseContext | undefined {
		return this.tryGetRuleContext(0, BaseclauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classhead; }
}


export class ClassheadnameContext extends ParserRuleContext {
	public classname(): ClassnameContext {
		return this.getRuleContext(0, ClassnameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classheadname; }
}


export class ClassvirtspecifierContext extends ParserRuleContext {
	public Final(): TerminalNode { return this.getToken(CPP14Parser.Final, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classvirtspecifier; }
}


export class ClasskeyContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Struct, 0); }
	public Union(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Union, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classkey; }
}


export class MemberspecificationContext extends ParserRuleContext {
	public memberdeclaration(): MemberdeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclarationContext);
	}
	public memberspecification(): MemberspecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberspecificationContext);
	}
	public accessspecifier(): AccessspecifierContext | undefined {
		return this.tryGetRuleContext(0, AccessspecifierContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberspecification; }
}


export class MemberdeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public memberdeclaratorlist(): MemberdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclaratorlistContext);
	}
	public functiondefinition(): FunctiondefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefinitionContext);
	}
	public usingdeclaration(): UsingdeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingdeclarationContext);
	}
	public static_assertdeclaration(): Static_assertdeclarationContext | undefined {
		return this.tryGetRuleContext(0, Static_assertdeclarationContext);
	}
	public templatedeclaration(): TemplatedeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplatedeclarationContext);
	}
	public aliasdeclaration(): AliasdeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasdeclarationContext);
	}
	public emptydeclaration(): EmptydeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptydeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclaration; }
}


export class MemberdeclaratorlistContext extends ParserRuleContext {
	public memberdeclarator(): MemberdeclaratorContext {
		return this.getRuleContext(0, MemberdeclaratorContext);
	}
	public memberdeclaratorlist(): MemberdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclaratorlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclaratorlist; }
}


export class MemberdeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	public purespecifier(): PurespecifierContext | undefined {
		return this.tryGetRuleContext(0, PurespecifierContext);
	}
	public braceorequalinitializer(): BraceorequalinitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceorequalinitializerContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclarator; }
}


export class VirtspecifierseqContext extends ParserRuleContext {
	public virtspecifier(): VirtspecifierContext {
		return this.getRuleContext(0, VirtspecifierContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_virtspecifierseq; }
}


export class VirtspecifierContext extends ParserRuleContext {
	public Override(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Override, 0); }
	public Final(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Final, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_virtspecifier; }
}


export class PurespecifierContext extends ParserRuleContext {
	public _val: Token;
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public Octalliteral(): TerminalNode { return this.getToken(CPP14Parser.Octalliteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_purespecifier; }
}


export class BaseclauseContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public basespecifierlist(): BasespecifierlistContext {
		return this.getRuleContext(0, BasespecifierlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_baseclause; }
}


export class BasespecifierlistContext extends ParserRuleContext {
	public basespecifier(): BasespecifierContext {
		return this.getRuleContext(0, BasespecifierContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public basespecifierlist(): BasespecifierlistContext | undefined {
		return this.tryGetRuleContext(0, BasespecifierlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_basespecifierlist; }
}


export class BasespecifierContext extends ParserRuleContext {
	public basetypespecifier(): BasetypespecifierContext {
		return this.getRuleContext(0, BasetypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Virtual, 0); }
	public accessspecifier(): AccessspecifierContext | undefined {
		return this.tryGetRuleContext(0, AccessspecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_basespecifier; }
}


export class ClassordecltypeContext extends ParserRuleContext {
	public classname(): ClassnameContext | undefined {
		return this.tryGetRuleContext(0, ClassnameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classordecltype; }
}


export class BasetypespecifierContext extends ParserRuleContext {
	public classordecltype(): ClassordecltypeContext {
		return this.getRuleContext(0, ClassordecltypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_basetypespecifier; }
}


export class AccessspecifierContext extends ParserRuleContext {
	public Private(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Private, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Protected, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Public, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_accessspecifier; }
}


export class ConversionfunctionidContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public conversiontypeid(): ConversiontypeidContext {
		return this.getRuleContext(0, ConversiontypeidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversionfunctionid; }
}


export class ConversiontypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public conversiondeclarator(): ConversiondeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversiondeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversiontypeid; }
}


export class ConversiondeclaratorContext extends ParserRuleContext {
	public ptroperator(): PtroperatorContext {
		return this.getRuleContext(0, PtroperatorContext);
	}
	public conversiondeclarator(): ConversiondeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversiondeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversiondeclarator; }
}


export class CtorinitializerContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public meminitializerlist(): MeminitializerlistContext {
		return this.getRuleContext(0, MeminitializerlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ctorinitializer; }
}


export class MeminitializerlistContext extends ParserRuleContext {
	public meminitializer(): MeminitializerContext {
		return this.getRuleContext(0, MeminitializerContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	public meminitializerlist(): MeminitializerlistContext | undefined {
		return this.tryGetRuleContext(0, MeminitializerlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_meminitializerlist; }
}


export class MeminitializerContext extends ParserRuleContext {
	public meminitializerid(): MeminitializeridContext {
		return this.getRuleContext(0, MeminitializeridContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_meminitializer; }
}


export class MeminitializeridContext extends ParserRuleContext {
	public classordecltype(): ClassordecltypeContext | undefined {
		return this.tryGetRuleContext(0, ClassordecltypeContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_meminitializerid; }
}


export class OperatorfunctionidContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_operatorfunctionid; }
}


export class LiteraloperatoridContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public Stringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Stringliteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Userdefinedstringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedstringliteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_literaloperatorid; }
}


export class TemplatedeclarationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public templateparameterlist(): TemplateparameterlistContext {
		return this.getRuleContext(0, TemplateparameterlistContext);
	}
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templatedeclaration; }
}


export class TemplateparameterlistContext extends ParserRuleContext {
	public templateparameter(): TemplateparameterContext {
		return this.getRuleContext(0, TemplateparameterContext);
	}
	public templateparameterlist(): TemplateparameterlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateparameterlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateparameterlist; }
}


export class TemplateparameterContext extends ParserRuleContext {
	public typeparameter(): TypeparameterContext | undefined {
		return this.tryGetRuleContext(0, TypeparameterContext);
	}
	public parameterdeclaration(): ParameterdeclarationContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateparameter; }
}


export class TypeparameterContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public Typename(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typename, 0); }
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public templateparameterlist(): TemplateparameterlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateparameterlistContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeparameter; }
}


export class SimpletemplateidContext extends ParserRuleContext {
	public templatename(): TemplatenameContext {
		return this.getRuleContext(0, TemplatenameContext);
	}
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpletemplateid; }
}


export class TemplateidContext extends ParserRuleContext {
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public operatorfunctionid(): OperatorfunctionidContext | undefined {
		return this.tryGetRuleContext(0, OperatorfunctionidContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	public literaloperatorid(): LiteraloperatoridContext | undefined {
		return this.tryGetRuleContext(0, LiteraloperatoridContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateid; }
}


export class TemplatenameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templatename; }
}


export class TemplateargumentlistContext extends ParserRuleContext {
	public templateargument(): TemplateargumentContext {
		return this.getRuleContext(0, TemplateargumentContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateargumentlist; }
}


export class TemplateargumentContext extends ParserRuleContext {
	public typeid(): TypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateargument; }
}


export class TypenamespecifierContext extends ParserRuleContext {
	public Typename(): TerminalNode { return this.getToken(CPP14Parser.Typename, 0); }
	public nestednamespecifier(): NestednamespecifierContext {
		return this.getRuleContext(0, NestednamespecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typenamespecifier; }
}


export class ExplicitinstantiationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Extern, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_explicitinstantiation; }
}


export class ExplicitspecializationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_explicitspecialization; }
}


export class TryblockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPP14Parser.Try, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public handlerseq(): HandlerseqContext {
		return this.getRuleContext(0, HandlerseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_tryblock; }
}


export class FunctiontryblockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPP14Parser.Try, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public handlerseq(): HandlerseqContext {
		return this.getRuleContext(0, HandlerseqContext);
	}
	public ctorinitializer(): CtorinitializerContext | undefined {
		return this.tryGetRuleContext(0, CtorinitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functiontryblock; }
}


export class HandlerseqContext extends ParserRuleContext {
	public handler(): HandlerContext {
		return this.getRuleContext(0, HandlerContext);
	}
	public handlerseq(): HandlerseqContext | undefined {
		return this.tryGetRuleContext(0, HandlerseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_handlerseq; }
}


export class HandlerContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(CPP14Parser.Catch, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public exceptiondeclaration(): ExceptiondeclarationContext {
		return this.getRuleContext(0, ExceptiondeclarationContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_handler; }
}


export class ExceptiondeclarationContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierseqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exceptiondeclaration; }
}


export class ThrowexpressionContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPP14Parser.Throw, 0); }
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_throwexpression; }
}


export class ExceptionspecificationContext extends ParserRuleContext {
	public dynamicexceptionspecification(): DynamicexceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, DynamicexceptionspecificationContext);
	}
	public noexceptspecification(): NoexceptspecificationContext | undefined {
		return this.tryGetRuleContext(0, NoexceptspecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exceptionspecification; }
}


export class DynamicexceptionspecificationContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPP14Parser.Throw, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public typeidlist(): TypeidlistContext | undefined {
		return this.tryGetRuleContext(0, TypeidlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_dynamicexceptionspecification; }
}


export class TypeidlistContext extends ParserRuleContext {
	public typeid(): TypeidContext {
		return this.getRuleContext(0, TypeidContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public typeidlist(): TypeidlistContext | undefined {
		return this.tryGetRuleContext(0, TypeidlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeidlist; }
}


export class NoexceptspecificationContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPP14Parser.Noexcept, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noexceptspecification; }
}


export class RightShiftContext extends ParserRuleContext {
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Greater);
		} else {
			return this.getToken(CPP14Parser.Greater, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_rightShift; }
}


export class RightShiftAssignContext extends ParserRuleContext {
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Greater);
		} else {
			return this.getToken(CPP14Parser.Greater, i);
		}
	}
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_rightShiftAssign; }
}


export class OperatorContext extends ParserRuleContext {
	public New(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.New, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Delete, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mod, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Caret, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Not, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusAssign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ModAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.XorAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrAssign, 0); }
	public LeftShift(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShift, 0); }
	public rightShift(): RightShiftContext | undefined {
		return this.tryGetRuleContext(0, RightShiftContext);
	}
	public rightShiftAssign(): RightShiftAssignContext | undefined {
		return this.tryGetRuleContext(0, RightShiftAssignContext);
	}
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShiftAssign, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.NotEqual, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LessEqual, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.GreaterEqual, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAnd, 0); }
	public OrOr(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrOr, 0); }
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	public ArrowStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ArrowStar, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Arrow, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_operator; }
}


export class LiteralContext extends ParserRuleContext {
	public Integerliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Integerliteral, 0); }
	public Characterliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Characterliteral, 0); }
	public Floatingliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Floatingliteral, 0); }
	public Stringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Stringliteral, 0); }
	public booleanliteral(): BooleanliteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanliteralContext);
	}
	public pointerliteral(): PointerliteralContext | undefined {
		return this.tryGetRuleContext(0, PointerliteralContext);
	}
	public userdefinedliteral(): UserdefinedliteralContext | undefined {
		return this.tryGetRuleContext(0, UserdefinedliteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_literal; }
}


export class BooleanliteralContext extends ParserRuleContext {
	public False(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.False, 0); }
	public True(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.True, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_booleanliteral; }
}


export class PointerliteralContext extends ParserRuleContext {
	public Nullptr(): TerminalNode { return this.getToken(CPP14Parser.Nullptr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pointerliteral; }
}


export class UserdefinedliteralContext extends ParserRuleContext {
	public Userdefinedintegerliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedintegerliteral, 0); }
	public Userdefinedfloatingliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedfloatingliteral, 0); }
	public Userdefinedstringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedstringliteral, 0); }
	public Userdefinedcharacterliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedcharacterliteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_userdefinedliteral; }
}


