// Generated from tests/CPP14.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class CPP14Parser extends antlr.Parser {
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
    public static readonly ZeroLiteral = 127;
    public static readonly Decimalliteral = 128;
    public static readonly Octalliteral = 129;
    public static readonly Hexadecimalliteral = 130;
    public static readonly Binaryliteral = 131;
    public static readonly Integersuffix = 132;
    public static readonly Characterliteral = 133;
    public static readonly Floatingliteral = 134;
    public static readonly Stringliteral = 135;
    public static readonly Userdefinedintegerliteral = 136;
    public static readonly Userdefinedfloatingliteral = 137;
    public static readonly Userdefinedstringliteral = 138;
    public static readonly Userdefinedcharacterliteral = 139;
    public static readonly Whitespace = 140;
    public static readonly Newline = 141;
    public static readonly BlockComment = 142;
    public static readonly LineComment = 143;
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

    public static readonly literalNames = [
        null, null, null, "'alignas'", "'alignof'", "'asm'", "'auto'", "'bool'", 
        "'break'", "'case'", "'catch'", "'char'", "'char16_t'", "'char32_t'", 
        "'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'", 
        "'decltype'", "'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'", 
        "'else'", "'enum'", "'explicit'", "'export'", "'extern'", "'false'", 
        "'final'", "'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'", 
        "'int'", "'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'", 
        "'nullptr'", "'operator'", "'override'", "'private'", "'protected'", 
        "'public'", "'register'", "'reinterpret_cast'", "'return'", "'short'", 
        "'signed'", "'sizeof'", "'static'", "'static_assert'", "'static_cast'", 
        "'struct'", "'switch'", "'template'", "'this'", "'thread_local'", 
        "'throw'", "'true'", "'try'", "'typedef'", "'typeid'", "'typename'", 
        "'union'", "'unsigned'", "'using'", "'virtual'", "'void'", "'volatile'", 
        "'wchar_t'", "'while'", "'('", "')'", "'['", "']'", "'{'", "'}'", 
        "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", "'~'", "'!'", 
        "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", "'%='", "'^='", 
        "'&='", "'|='", "'<<'", "'<<='", "'=='", "'!='", "'<='", "'>='", 
        "'&&'", "'||'", "'++'", "'--'", "','", "'->*'", "'->'", "'?'", "':'", 
        "'::'", "';'", "'.'", "'.*'", "'...'", null, null, "'0'"
    ];

    public static readonly symbolicNames = [
        null, "MultiLineMacro", "Directive", "Alignas", "Alignof", "Asm", 
        "Auto", "Bool", "Break", "Case", "Catch", "Char", "Char16", "Char32", 
        "Class", "Const", "Constexpr", "Const_cast", "Continue", "Decltype", 
        "Default", "Delete", "Do", "Double", "Dynamic_cast", "Else", "Enum", 
        "Explicit", "Export", "Extern", "False", "Final", "Float", "For", 
        "Friend", "Goto", "If", "Inline", "Int", "Long", "Mutable", "Namespace", 
        "New", "Noexcept", "Nullptr", "Operator", "Override", "Private", 
        "Protected", "Public", "Register", "Reinterpret_cast", "Return", 
        "Short", "Signed", "Sizeof", "Static", "Static_assert", "Static_cast", 
        "Struct", "Switch", "Template", "This", "Thread_local", "Throw", 
        "True", "Try", "Typedef", "Typeid", "Typename", "Union", "Unsigned", 
        "Using", "Virtual", "Void", "Volatile", "Wchar", "While", "LeftParen", 
        "RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
        "Plus", "Minus", "Star", "Div", "Mod", "Caret", "And", "Or", "Tilde", 
        "Not", "Assign", "Less", "Greater", "PlusAssign", "MinusAssign", 
        "StarAssign", "DivAssign", "ModAssign", "XorAssign", "AndAssign", 
        "OrAssign", "LeftShift", "LeftShiftAssign", "Equal", "NotEqual", 
        "LessEqual", "GreaterEqual", "AndAnd", "OrOr", "PlusPlus", "MinusMinus", 
        "Comma", "ArrowStar", "Arrow", "Question", "Colon", "Doublecolon", 
        "Semi", "Dot", "DotStar", "Ellipsis", "Identifier", "Integerliteral", 
        "ZeroLiteral", "Decimalliteral", "Octalliteral", "Hexadecimalliteral", 
        "Binaryliteral", "Integersuffix", "Characterliteral", "Floatingliteral", 
        "Stringliteral", "Userdefinedintegerliteral", "Userdefinedfloatingliteral", 
        "Userdefinedstringliteral", "Userdefinedcharacterliteral", "Whitespace", 
        "Newline", "BlockComment", "LineComment"
    ];
    public static readonly ruleNames = [
        "translationunit", "primaryexpression", "idexpression", "unqualifiedid", 
        "qualifiedid", "nestednamespecifier", "lambdaexpression", "lambdaintroducer", 
        "lambdacapture", "capturedefault", "capturelist", "capture", "simplecapture", 
        "initcapture", "lambdadeclarator", "postfixexpression", "expressionlist", 
        "pseudodestructorname", "unaryexpression", "unaryoperator", "newexpression", 
        "newplacement", "newtypeid", "newdeclarator", "noptrnewdeclarator", 
        "newinitializer", "deleteexpression", "noexceptexpression", "castexpression", 
        "pmexpression", "multiplicativeexpression", "additiveexpression", 
        "shiftexpression", "relationalexpression", "equalityexpression", 
        "andexpression", "exclusiveorexpression", "inclusiveorexpression", 
        "logicalandexpression", "logicalorexpression", "conditionalexpression", 
        "assignmentexpression", "assignmentoperator", "expression", "constantexpression", 
        "statement", "labeledstatement", "expressionstatement", "compoundstatement", 
        "statementseq", "selectionstatement", "condition", "iterationstatement", 
        "forinitstatement", "forrangedeclaration", "forrangeinitializer", 
        "jumpstatement", "declarationstatement", "declarationseq", "declaration", 
        "blockdeclaration", "aliasdeclaration", "simpledeclaration", "static_assertdeclaration", 
        "emptydeclaration", "attributedeclaration", "declspecifier", "declspecifierseq", 
        "storageclassspecifier", "functionspecifier", "typedefname", "typespecifier", 
        "trailingtypespecifier", "typespecifierseq", "trailingtypespecifierseq", 
        "simpletypespecifier", "typename", "decltypespecifier", "elaboratedtypespecifier", 
        "enumname", "enumspecifier", "enumhead", "opaqueenumdeclaration", 
        "enumkey", "enumbase", "enumeratorlist", "enumeratordefinition", 
        "enumerator", "namespacename", "originalnamespacename", "namespacedefinition", 
        "namednamespacedefinition", "originalnamespacedefinition", "extensionnamespacedefinition", 
        "unnamednamespacedefinition", "namespacebody", "namespacealias", 
        "namespacealiasdefinition", "qualifiednamespacespecifier", "usingdeclaration", 
        "usingdirective", "asmdefinition", "linkagespecification", "attributespecifierseq", 
        "attributespecifier", "alignmentspecifier", "attributelist", "attribute", 
        "attributetoken", "attributescopedtoken", "attributenamespace", 
        "attributeargumentclause", "balancedtokenseq", "balancedtoken", 
        "initdeclaratorlist", "initdeclarator", "declarator", "ptrdeclarator", 
        "noptrdeclarator", "parametersandqualifiers", "trailingreturntype", 
        "ptroperator", "cvqualifierseq", "cvqualifier", "refqualifier", 
        "declaratorid", "typeid", "abstractdeclarator", "ptrabstractdeclarator", 
        "noptrabstractdeclarator", "abstractpackdeclarator", "noptrabstractpackdeclarator", 
        "parameterdeclarationclause", "parameterdeclarationlist", "parameterdeclaration", 
        "functiondefinition", "functionbody", "initializer", "braceorequalinitializer", 
        "initializerclause", "initializerlist", "bracedinitlist", "classname", 
        "classspecifier", "classhead", "classheadname", "classvirtspecifier", 
        "classkey", "memberspecification", "memberdeclaration", "memberdeclaratorlist", 
        "memberdeclarator", "virtspecifierseq", "virtspecifier", "purespecifier", 
        "baseclause", "basespecifierlist", "basespecifier", "classordecltype", 
        "basetypespecifier", "accessspecifier", "conversionfunctionid", 
        "conversiontypeid", "conversiondeclarator", "ctorinitializer", "meminitializerlist", 
        "meminitializer", "meminitializerid", "operatorfunctionid", "literaloperatorid", 
        "templatedeclaration", "templateparameterlist", "templateparameter", 
        "typeparameter", "simpletemplateid", "templateid", "templatename", 
        "templateargumentlist", "templateargument", "typenamespecifier", 
        "explicitinstantiation", "explicitspecialization", "tryblock", "functiontryblock", 
        "handlerseq", "handler", "exceptiondeclaration", "throwexpression", 
        "exceptionspecification", "dynamicexceptionspecification", "typeidlist", 
        "noexceptspecification", "rightShift", "rightShiftAssign", "operator", 
        "literal", "booleanliteral", "pointerliteral", "userdefinedliteral",
    ];

    public get grammarFileName(): string { return "CPP14.g4"; }
    public get literalNames(): (string | null)[] { return CPP14Parser.literalNames; }
    public get symbolicNames(): (string | null)[] { return CPP14Parser.symbolicNames; }
    public get ruleNames(): string[] { return CPP14Parser.ruleNames; }
    public get serializedATN(): number[] { return CPP14Parser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, CPP14Parser._ATN, CPP14Parser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public translationunit(): TranslationunitContext {
        let localContext = new TranslationunitContext(this.context, this.state);
        this.enterRule(localContext, 0, CPP14Parser.RULE_translationunit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 399;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875466725) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26113) !== 0)) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public primaryexpression(): PrimaryexpressionContext {
        let localContext = new PrimaryexpressionContext(this.context, this.state);
        this.enterRule(localContext, 2, CPP14Parser.RULE_primaryexpression);
        try {
            this.state = 411;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 403;
                this.literal();
                }
                break;
            case CPP14Parser.This:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 404;
                this.match(CPP14Parser.This);
                }
                break;
            case CPP14Parser.LeftParen:
                this.enterOuterAlt(localContext, 3);
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
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 409;
                this.idexpression();
                }
                break;
            case CPP14Parser.LeftBracket:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 410;
                this.lambdaexpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public idexpression(): IdexpressionContext {
        let localContext = new IdexpressionContext(this.context, this.state);
        this.enterRule(localContext, 4, CPP14Parser.RULE_idexpression);
        try {
            this.state = 415;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 413;
                this.unqualifiedid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 414;
                this.qualifiedid();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public unqualifiedid(): UnqualifiedidContext {
        let localContext = new UnqualifiedidContext(this.context, this.state);
        this.enterRule(localContext, 6, CPP14Parser.RULE_unqualifiedid);
        try {
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 417;
                this.match(CPP14Parser.Identifier);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 418;
                this.operatorfunctionid();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 419;
                this.conversionfunctionid();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 420;
                this.literaloperatorid();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 421;
                this.match(CPP14Parser.Tilde);
                this.state = 422;
                this.classname();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 423;
                this.match(CPP14Parser.Tilde);
                this.state = 424;
                this.decltypespecifier();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 425;
                this.templateid();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public qualifiedid(): QualifiedidContext {
        let localContext = new QualifiedidContext(this.context, this.state);
        this.enterRule(localContext, 8, CPP14Parser.RULE_qualifiedid);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            this.nestednamespecifier(0);
            this.state = 430;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 61) {
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
            if (re instanceof antlr.RecognitionException) {
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

    public nestednamespecifier(): NestednamespecifierContext;
    public nestednamespecifier(_p: number): NestednamespecifierContext;
    public nestednamespecifier(_p?: number): NestednamespecifierContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new NestednamespecifierContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 10;
        this.enterRecursionRule(localContext, 10, CPP14Parser.RULE_nestednamespecifier, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 445;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
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
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 459;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 457;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        localContext = new NestednamespecifierContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_nestednamespecifier);
                        this.state = 447;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 448;
                        this.match(CPP14Parser.Identifier);
                        this.state = 449;
                        this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                    case 2:
                        {
                        localContext = new NestednamespecifierContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_nestednamespecifier);
                        this.state = 450;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 452;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public lambdaexpression(): LambdaexpressionContext {
        let localContext = new LambdaexpressionContext(this.context, this.state);
        this.enterRule(localContext, 12, CPP14Parser.RULE_lambdaexpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 462;
            this.lambdaintroducer();
            this.state = 464;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 78) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public lambdaintroducer(): LambdaintroducerContext {
        let localContext = new LambdaintroducerContext(this.context, this.state);
        this.enterRule(localContext, 14, CPP14Parser.RULE_lambdaintroducer);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 468;
            this.match(CPP14Parser.LeftBracket);
            this.state = 470;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 62 || _la === 90 || _la === 94 || _la === 125) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public lambdacapture(): LambdacaptureContext {
        let localContext = new LambdacaptureContext(this.context, this.state);
        this.enterRule(localContext, 16, CPP14Parser.RULE_lambdacapture);
        try {
            this.state = 480;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 474;
                this.capturedefault();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 475;
                this.capturelist(0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
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
            if (re instanceof antlr.RecognitionException) {
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
    public capturedefault(): CapturedefaultContext {
        let localContext = new CapturedefaultContext(this.context, this.state);
        this.enterRule(localContext, 18, CPP14Parser.RULE_capturedefault);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 482;
            _la = this.tokenStream.LA(1);
            if(!(_la === 90 || _la === 94)) {
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

    public capturelist(): CapturelistContext;
    public capturelist(_p: number): CapturelistContext;
    public capturelist(_p?: number): CapturelistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new CapturelistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 20;
        this.enterRecursionRule(localContext, 20, CPP14Parser.RULE_capturelist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 485;
            this.capture();
            this.state = 487;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
            case 1:
                {
                this.state = 486;
                this.match(CPP14Parser.Ellipsis);
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 497;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new CapturelistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_capturelist);
                    this.state = 489;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 490;
                    this.match(CPP14Parser.Comma);
                    this.state = 491;
                    this.capture();
                    this.state = 493;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public capture(): CaptureContext {
        let localContext = new CaptureContext(this.context, this.state);
        this.enterRule(localContext, 22, CPP14Parser.RULE_capture);
        try {
            this.state = 502;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 500;
                this.simplecapture();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 501;
                this.initcapture();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public simplecapture(): SimplecaptureContext {
        let localContext = new SimplecaptureContext(this.context, this.state);
        this.enterRule(localContext, 24, CPP14Parser.RULE_simplecapture);
        try {
            this.state = 508;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Identifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 504;
                this.match(CPP14Parser.Identifier);
                }
                break;
            case CPP14Parser.And:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 505;
                this.match(CPP14Parser.And);
                this.state = 506;
                this.match(CPP14Parser.Identifier);
                }
                break;
            case CPP14Parser.This:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 507;
                this.match(CPP14Parser.This);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public initcapture(): InitcaptureContext {
        let localContext = new InitcaptureContext(this.context, this.state);
        this.enterRule(localContext, 26, CPP14Parser.RULE_initcapture);
        try {
            this.state = 515;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Identifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 510;
                this.match(CPP14Parser.Identifier);
                this.state = 511;
                this.initializer();
                }
                break;
            case CPP14Parser.And:
                this.enterOuterAlt(localContext, 2);
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public lambdadeclarator(): LambdadeclaratorContext {
        let localContext = new LambdadeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 28, CPP14Parser.RULE_lambdadeclarator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 517;
            this.match(CPP14Parser.LeftParen);
            this.state = 518;
            this.parameterdeclarationclause();
            this.state = 519;
            this.match(CPP14Parser.RightParen);
            this.state = 521;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 520;
                this.match(CPP14Parser.Mutable);
                }
            }

            this.state = 524;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 43 || _la === 64) {
                {
                this.state = 523;
                this.exceptionspecification();
                }
            }

            this.state = 527;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 80) {
                {
                this.state = 526;
                this.attributespecifierseq(0);
                }
            }

            this.state = 530;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 529;
                this.trailingreturntype();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public postfixexpression(): PostfixexpressionContext;
    public postfixexpression(_p: number): PostfixexpressionContext;
    public postfixexpression(_p?: number): PostfixexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PostfixexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 30;
        this.enterRecursionRule(localContext, 30, CPP14Parser.RULE_postfixexpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 596;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
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
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 638;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 636;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
                    case 1:
                        {
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 598;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
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
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 603;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
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
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 608;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 609;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 611;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
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
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 614;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 615;
                        this.match(CPP14Parser.Dot);
                        this.state = 617;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
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
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 620;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 621;
                        this.match(CPP14Parser.Arrow);
                        this.state = 623;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
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
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 626;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 627;
                        this.match(CPP14Parser.Dot);
                        this.state = 628;
                        this.pseudodestructorname();
                        }
                        break;
                    case 7:
                        {
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 629;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 630;
                        this.match(CPP14Parser.Arrow);
                        this.state = 631;
                        this.pseudodestructorname();
                        }
                        break;
                    case 8:
                        {
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 632;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 633;
                        this.match(CPP14Parser.PlusPlus);
                        }
                        break;
                    case 9:
                        {
                        localContext = new PostfixexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_postfixexpression);
                        this.state = 634;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 635;
                        this.match(CPP14Parser.MinusMinus);
                        }
                        break;
                    }
                    }
                }
                this.state = 640;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public expressionlist(): ExpressionlistContext {
        let localContext = new ExpressionlistContext(this.context, this.state);
        this.enterRule(localContext, 32, CPP14Parser.RULE_expressionlist);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 641;
            this.initializerlist(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public pseudodestructorname(): PseudodestructornameContext {
        let localContext = new PseudodestructornameContext(this.context, this.state);
        this.enterRule(localContext, 34, CPP14Parser.RULE_pseudodestructorname);
        let _la: number;
        try {
            this.state = 665;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 644;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 659;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19 || _la === 120 || _la === 125) {
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
                this.enterOuterAlt(localContext, 4);
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
            if (re instanceof antlr.RecognitionException) {
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
    public unaryexpression(): UnaryexpressionContext {
        let localContext = new UnaryexpressionContext(this.context, this.state);
        this.enterRule(localContext, 36, CPP14Parser.RULE_unaryexpression);
        try {
            this.state = 695;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 667;
                this.postfixexpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 668;
                this.match(CPP14Parser.PlusPlus);
                this.state = 669;
                this.castexpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 670;
                this.match(CPP14Parser.MinusMinus);
                this.state = 671;
                this.castexpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 672;
                this.unaryoperator();
                this.state = 673;
                this.castexpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 675;
                this.match(CPP14Parser.Sizeof);
                this.state = 676;
                this.unaryexpression();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
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
                this.enterOuterAlt(localContext, 7);
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
                this.enterOuterAlt(localContext, 8);
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
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 692;
                this.noexceptexpression();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 693;
                this.newexpression();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 694;
                this.deleteexpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public unaryoperator(): UnaryoperatorContext {
        let localContext = new UnaryoperatorContext(this.context, this.state);
        this.enterRule(localContext, 38, CPP14Parser.RULE_unaryoperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 697;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 967) !== 0))) {
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
    public newexpression(): NewexpressionContext {
        let localContext = new NewexpressionContext(this.context, this.state);
        this.enterRule(localContext, 40, CPP14Parser.RULE_newexpression);
        let _la: number;
        try {
            this.state = 723;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 700;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 699;
                    this.match(CPP14Parser.Doublecolon);
                    }
                }

                this.state = 702;
                this.match(CPP14Parser.New);
                this.state = 704;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 78) {
                    {
                    this.state = 703;
                    this.newplacement();
                    }
                }

                this.state = 706;
                this.newtypeid();
                this.state = 708;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 711;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 710;
                    this.match(CPP14Parser.Doublecolon);
                    }
                }

                this.state = 713;
                this.match(CPP14Parser.New);
                this.state = 715;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public newplacement(): NewplacementContext {
        let localContext = new NewplacementContext(this.context, this.state);
        this.enterRule(localContext, 42, CPP14Parser.RULE_newplacement);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
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
    public newtypeid(): NewtypeidContext {
        let localContext = new NewtypeidContext(this.context, this.state);
        this.enterRule(localContext, 44, CPP14Parser.RULE_newtypeid);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 729;
            this.typespecifierseq();
            this.state = 731;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public newdeclarator(): NewdeclaratorContext {
        let localContext = new NewdeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 46, CPP14Parser.RULE_newdeclarator);
        try {
            this.state = 738;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Decltype:
            case CPP14Parser.Star:
            case CPP14Parser.And:
            case CPP14Parser.AndAnd:
            case CPP14Parser.Doublecolon:
            case CPP14Parser.Identifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 733;
                this.ptroperator();
                this.state = 735;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 737;
                this.noptrnewdeclarator(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public noptrnewdeclarator(): NoptrnewdeclaratorContext;
    public noptrnewdeclarator(_p: number): NoptrnewdeclaratorContext;
    public noptrnewdeclarator(_p?: number): NoptrnewdeclaratorContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new NoptrnewdeclaratorContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 48;
        this.enterRecursionRule(localContext, 48, CPP14Parser.RULE_noptrnewdeclarator, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 741;
            this.match(CPP14Parser.LeftBracket);
            this.state = 742;
            this.expression(0);
            this.state = 743;
            this.match(CPP14Parser.RightBracket);
            this.state = 745;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                {
                this.state = 744;
                this.attributespecifierseq(0);
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 756;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 46, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new NoptrnewdeclaratorContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_noptrnewdeclarator);
                    this.state = 747;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 748;
                    this.match(CPP14Parser.LeftBracket);
                    this.state = 749;
                    this.constantexpression();
                    this.state = 750;
                    this.match(CPP14Parser.RightBracket);
                    this.state = 752;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 46, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public newinitializer(): NewinitializerContext {
        let localContext = new NewinitializerContext(this.context, this.state);
        this.enterRule(localContext, 50, CPP14Parser.RULE_newinitializer);
        let _la: number;
        try {
            this.state = 765;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.LeftParen:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 759;
                this.match(CPP14Parser.LeftParen);
                this.state = 761;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 764;
                this.bracedinitlist();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public deleteexpression(): DeleteexpressionContext {
        let localContext = new DeleteexpressionContext(this.context, this.state);
        this.enterRule(localContext, 52, CPP14Parser.RULE_deleteexpression);
        let _la: number;
        try {
            this.state = 779;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 768;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 773;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public noexceptexpression(): NoexceptexpressionContext {
        let localContext = new NoexceptexpressionContext(this.context, this.state);
        this.enterRule(localContext, 54, CPP14Parser.RULE_noexceptexpression);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
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
    public castexpression(): CastexpressionContext {
        let localContext = new CastexpressionContext(this.context, this.state);
        this.enterRule(localContext, 56, CPP14Parser.RULE_castexpression);
        try {
            this.state = 792;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 786;
                this.unaryexpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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

    public pmexpression(): PmexpressionContext;
    public pmexpression(_p: number): PmexpressionContext;
    public pmexpression(_p?: number): PmexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PmexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 58;
        this.enterRecursionRule(localContext, 58, CPP14Parser.RULE_pmexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 795;
            this.castexpression();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 805;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 803;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                    case 1:
                        {
                        localContext = new PmexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_pmexpression);
                        this.state = 797;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 798;
                        this.match(CPP14Parser.DotStar);
                        this.state = 799;
                        this.castexpression();
                        }
                        break;
                    case 2:
                        {
                        localContext = new PmexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_pmexpression);
                        this.state = 800;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public multiplicativeexpression(): MultiplicativeexpressionContext;
    public multiplicativeexpression(_p: number): MultiplicativeexpressionContext;
    public multiplicativeexpression(_p?: number): MultiplicativeexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new MultiplicativeexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 60;
        this.enterRecursionRule(localContext, 60, CPP14Parser.RULE_multiplicativeexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 809;
            this.pmexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 822;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 820;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
                    case 1:
                        {
                        localContext = new MultiplicativeexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_multiplicativeexpression);
                        this.state = 811;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 812;
                        this.match(CPP14Parser.Star);
                        this.state = 813;
                        this.pmexpression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MultiplicativeexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_multiplicativeexpression);
                        this.state = 814;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 815;
                        this.match(CPP14Parser.Div);
                        this.state = 816;
                        this.pmexpression(0);
                        }
                        break;
                    case 3:
                        {
                        localContext = new MultiplicativeexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_multiplicativeexpression);
                        this.state = 817;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public additiveexpression(): AdditiveexpressionContext;
    public additiveexpression(_p: number): AdditiveexpressionContext;
    public additiveexpression(_p?: number): AdditiveexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AdditiveexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 62;
        this.enterRecursionRule(localContext, 62, CPP14Parser.RULE_additiveexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 826;
            this.multiplicativeexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 836;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 834;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
                    case 1:
                        {
                        localContext = new AdditiveexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_additiveexpression);
                        this.state = 828;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 829;
                        this.match(CPP14Parser.Plus);
                        this.state = 830;
                        this.multiplicativeexpression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AdditiveexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_additiveexpression);
                        this.state = 831;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public shiftexpression(): ShiftexpressionContext;
    public shiftexpression(_p: number): ShiftexpressionContext;
    public shiftexpression(_p?: number): ShiftexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ShiftexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 64;
        this.enterRecursionRule(localContext, 64, CPP14Parser.RULE_shiftexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 840;
            this.additiveexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 851;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 849;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
                    case 1:
                        {
                        localContext = new ShiftexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_shiftexpression);
                        this.state = 842;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 843;
                        this.match(CPP14Parser.LeftShift);
                        this.state = 844;
                        this.additiveexpression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ShiftexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_shiftexpression);
                        this.state = 845;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public relationalexpression(): RelationalexpressionContext;
    public relationalexpression(_p: number): RelationalexpressionContext;
    public relationalexpression(_p?: number): RelationalexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new RelationalexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 66;
        this.enterRecursionRule(localContext, 66, CPP14Parser.RULE_relationalexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 855;
            this.shiftexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 871;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 62, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 869;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
                    case 1:
                        {
                        localContext = new RelationalexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_relationalexpression);
                        this.state = 857;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 858;
                        this.match(CPP14Parser.Less);
                        this.state = 859;
                        this.shiftexpression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new RelationalexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_relationalexpression);
                        this.state = 860;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 861;
                        this.match(CPP14Parser.Greater);
                        this.state = 862;
                        this.shiftexpression(0);
                        }
                        break;
                    case 3:
                        {
                        localContext = new RelationalexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_relationalexpression);
                        this.state = 863;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 864;
                        this.match(CPP14Parser.LessEqual);
                        this.state = 865;
                        this.shiftexpression(0);
                        }
                        break;
                    case 4:
                        {
                        localContext = new RelationalexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_relationalexpression);
                        this.state = 866;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 62, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public equalityexpression(): EqualityexpressionContext;
    public equalityexpression(_p: number): EqualityexpressionContext;
    public equalityexpression(_p?: number): EqualityexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new EqualityexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 68;
        this.enterRecursionRule(localContext, 68, CPP14Parser.RULE_equalityexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 875;
            this.relationalexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 885;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 64, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 883;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context) ) {
                    case 1:
                        {
                        localContext = new EqualityexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_equalityexpression);
                        this.state = 877;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 878;
                        this.match(CPP14Parser.Equal);
                        this.state = 879;
                        this.relationalexpression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new EqualityexpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_equalityexpression);
                        this.state = 880;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 64, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public andexpression(): AndexpressionContext;
    public andexpression(_p: number): AndexpressionContext;
    public andexpression(_p?: number): AndexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AndexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 70;
        this.enterRecursionRule(localContext, 70, CPP14Parser.RULE_andexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 889;
            this.equalityexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 896;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new AndexpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_andexpression);
                    this.state = 891;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 892;
                    this.match(CPP14Parser.And);
                    this.state = 893;
                    this.equalityexpression(0);
                    }
                    }
                }
                this.state = 898;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public exclusiveorexpression(): ExclusiveorexpressionContext;
    public exclusiveorexpression(_p: number): ExclusiveorexpressionContext;
    public exclusiveorexpression(_p?: number): ExclusiveorexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExclusiveorexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 72;
        this.enterRecursionRule(localContext, 72, CPP14Parser.RULE_exclusiveorexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 900;
            this.andexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 907;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ExclusiveorexpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_exclusiveorexpression);
                    this.state = 902;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 903;
                    this.match(CPP14Parser.Caret);
                    this.state = 904;
                    this.andexpression(0);
                    }
                    }
                }
                this.state = 909;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public inclusiveorexpression(): InclusiveorexpressionContext;
    public inclusiveorexpression(_p: number): InclusiveorexpressionContext;
    public inclusiveorexpression(_p?: number): InclusiveorexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new InclusiveorexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 74;
        this.enterRecursionRule(localContext, 74, CPP14Parser.RULE_inclusiveorexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 911;
            this.exclusiveorexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 918;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new InclusiveorexpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_inclusiveorexpression);
                    this.state = 913;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 914;
                    this.match(CPP14Parser.Or);
                    this.state = 915;
                    this.exclusiveorexpression(0);
                    }
                    }
                }
                this.state = 920;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public logicalandexpression(): LogicalandexpressionContext;
    public logicalandexpression(_p: number): LogicalandexpressionContext;
    public logicalandexpression(_p?: number): LogicalandexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LogicalandexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 76;
        this.enterRecursionRule(localContext, 76, CPP14Parser.RULE_logicalandexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 922;
            this.inclusiveorexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 929;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new LogicalandexpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_logicalandexpression);
                    this.state = 924;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 925;
                    this.match(CPP14Parser.AndAnd);
                    this.state = 926;
                    this.inclusiveorexpression(0);
                    }
                    }
                }
                this.state = 931;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public logicalorexpression(): LogicalorexpressionContext;
    public logicalorexpression(_p: number): LogicalorexpressionContext;
    public logicalorexpression(_p?: number): LogicalorexpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LogicalorexpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 78;
        this.enterRecursionRule(localContext, 78, CPP14Parser.RULE_logicalorexpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 933;
            this.logicalandexpression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 940;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 69, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new LogicalorexpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_logicalorexpression);
                    this.state = 935;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 936;
                    this.match(CPP14Parser.OrOr);
                    this.state = 937;
                    this.logicalandexpression(0);
                    }
                    }
                }
                this.state = 942;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 69, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public conditionalexpression(): ConditionalexpressionContext {
        let localContext = new ConditionalexpressionContext(this.context, this.state);
        this.enterRule(localContext, 80, CPP14Parser.RULE_conditionalexpression);
        try {
            this.state = 950;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 943;
                this.logicalorexpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public assignmentexpression(): AssignmentexpressionContext {
        let localContext = new AssignmentexpressionContext(this.context, this.state);
        this.enterRule(localContext, 82, CPP14Parser.RULE_assignmentexpression);
        try {
            this.state = 958;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 952;
                this.conditionalexpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 957;
                this.throwexpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public assignmentoperator(): AssignmentoperatorContext {
        let localContext = new AssignmentoperatorContext(this.context, this.state);
        this.enterRule(localContext, 84, CPP14Parser.RULE_assignmentoperator);
        try {
            this.state = 971;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Assign:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 960;
                this.match(CPP14Parser.Assign);
                }
                break;
            case CPP14Parser.StarAssign:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 961;
                this.match(CPP14Parser.StarAssign);
                }
                break;
            case CPP14Parser.DivAssign:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 962;
                this.match(CPP14Parser.DivAssign);
                }
                break;
            case CPP14Parser.ModAssign:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 963;
                this.match(CPP14Parser.ModAssign);
                }
                break;
            case CPP14Parser.PlusAssign:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 964;
                this.match(CPP14Parser.PlusAssign);
                }
                break;
            case CPP14Parser.MinusAssign:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 965;
                this.match(CPP14Parser.MinusAssign);
                }
                break;
            case CPP14Parser.Greater:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 966;
                this.rightShiftAssign();
                }
                break;
            case CPP14Parser.LeftShiftAssign:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 967;
                this.match(CPP14Parser.LeftShiftAssign);
                }
                break;
            case CPP14Parser.AndAssign:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 968;
                this.match(CPP14Parser.AndAssign);
                }
                break;
            case CPP14Parser.XorAssign:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 969;
                this.match(CPP14Parser.XorAssign);
                }
                break;
            case CPP14Parser.OrAssign:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 970;
                this.match(CPP14Parser.OrAssign);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 86;
        this.enterRecursionRule(localContext, 86, CPP14Parser.RULE_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 974;
            this.assignmentexpression();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 981;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 73, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ExpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_expression);
                    this.state = 976;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 977;
                    this.match(CPP14Parser.Comma);
                    this.state = 978;
                    this.assignmentexpression();
                    }
                    }
                }
                this.state = 983;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 73, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public constantexpression(): ConstantexpressionContext {
        let localContext = new ConstantexpressionContext(this.context, this.state);
        this.enterRule(localContext, 88, CPP14Parser.RULE_constantexpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 984;
            this.conditionalexpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 90, CPP14Parser.RULE_statement);
        let _la: number;
        try {
            this.state = 1012;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 986;
                this.labeledstatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 988;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 992;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 996;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1000;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1004;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1007;
                this.declarationstatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1009;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public labeledstatement(): LabeledstatementContext {
        let localContext = new LabeledstatementContext(this.context, this.state);
        this.enterRule(localContext, 92, CPP14Parser.RULE_labeledstatement);
        let _la: number;
        try {
            this.state = 1034;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1015;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1021;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1029;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public expressionstatement(): ExpressionstatementContext {
        let localContext = new ExpressionstatementContext(this.context, this.state);
        this.enterRule(localContext, 94, CPP14Parser.RULE_expressionstatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1037;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014060211) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public compoundstatement(): CompoundstatementContext {
        let localContext = new CompoundstatementContext(this.context, this.state);
        this.enterRule(localContext, 96, CPP14Parser.RULE_compoundstatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1041;
            this.match(CPP14Parser.LeftBrace);
            this.state = 1043;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1845492728) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3757850623) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014333439) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 532735501) !== 0)) {
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
            if (re instanceof antlr.RecognitionException) {
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

    public statementseq(): StatementseqContext;
    public statementseq(_p: number): StatementseqContext;
    public statementseq(_p?: number): StatementseqContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new StatementseqContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 98;
        this.enterRecursionRule(localContext, 98, CPP14Parser.RULE_statementseq, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1048;
            this.statement();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1054;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new StatementseqContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_statementseq);
                    this.state = 1050;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1051;
                    this.statement();
                    }
                    }
                }
                this.state = 1056;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 87, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public selectionstatement(): SelectionstatementContext {
        let localContext = new SelectionstatementContext(this.context, this.state);
        this.enterRule(localContext, 100, CPP14Parser.RULE_selectionstatement);
        try {
            this.state = 1077;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
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
                this.enterOuterAlt(localContext, 3);
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
            if (re instanceof antlr.RecognitionException) {
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
    public condition(): ConditionContext {
        let localContext = new ConditionContext(this.context, this.state);
        this.enterRule(localContext, 102, CPP14Parser.RULE_condition);
        let _la: number;
        try {
            this.state = 1095;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1079;
                this.expression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1081;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1089;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public iterationstatement(): IterationstatementContext {
        let localContext = new IterationstatementContext(this.context, this.state);
        this.enterRule(localContext, 104, CPP14Parser.RULE_iterationstatement);
        let _la: number;
        try {
            this.state = 1132;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1111;
                this.match(CPP14Parser.For);
                this.state = 1112;
                this.match(CPP14Parser.LeftParen);
                this.state = 1113;
                this.forinitstatement();
                this.state = 1115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1839986904) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3454811621) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014062843) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                    {
                    this.state = 1114;
                    this.condition();
                    }
                }

                this.state = 1117;
                this.match(CPP14Parser.Semi);
                this.state = 1119;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014060211) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
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
                this.enterOuterAlt(localContext, 4);
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
            if (re instanceof antlr.RecognitionException) {
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
    public forinitstatement(): ForinitstatementContext {
        let localContext = new ForinitstatementContext(this.context, this.state);
        this.enterRule(localContext, 106, CPP14Parser.RULE_forinitstatement);
        try {
            this.state = 1136;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1134;
                this.expressionstatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1135;
                this.simpledeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public forrangedeclaration(): ForrangedeclarationContext {
        let localContext = new ForrangedeclarationContext(this.context, this.state);
        this.enterRule(localContext, 108, CPP14Parser.RULE_forrangedeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 80) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public forrangeinitializer(): ForrangeinitializerContext {
        let localContext = new ForrangeinitializerContext(this.context, this.state);
        this.enterRule(localContext, 110, CPP14Parser.RULE_forrangeinitializer);
        try {
            this.state = 1146;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1144;
                this.expression(0);
                }
                break;
            case CPP14Parser.LeftBrace:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1145;
                this.bracedinitlist();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public jumpstatement(): JumpstatementContext {
        let localContext = new JumpstatementContext(this.context, this.state);
        this.enterRule(localContext, 112, CPP14Parser.RULE_jumpstatement);
        let _la: number;
        try {
            this.state = 1164;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 99, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1148;
                this.match(CPP14Parser.Break);
                this.state = 1149;
                this.match(CPP14Parser.Semi);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1150;
                this.match(CPP14Parser.Continue);
                this.state = 1151;
                this.match(CPP14Parser.Semi);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1152;
                this.match(CPP14Parser.Return);
                this.state = 1154;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014060211) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
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
                this.enterOuterAlt(localContext, 4);
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
                this.enterOuterAlt(localContext, 5);
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
            if (re instanceof antlr.RecognitionException) {
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
    public declarationstatement(): DeclarationstatementContext {
        let localContext = new DeclarationstatementContext(this.context, this.state);
        this.enterRule(localContext, 114, CPP14Parser.RULE_declarationstatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1166;
            this.blockdeclaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public declarationseq(): DeclarationseqContext;
    public declarationseq(_p: number): DeclarationseqContext;
    public declarationseq(_p?: number): DeclarationseqContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new DeclarationseqContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 116;
        this.enterRecursionRule(localContext, 116, CPP14Parser.RULE_declarationseq, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1169;
            this.declaration();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1175;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 100, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new DeclarationseqContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_declarationseq);
                    this.state = 1171;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1172;
                    this.declaration();
                    }
                    }
                }
                this.state = 1177;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 100, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public declaration(): DeclarationContext {
        let localContext = new DeclarationContext(this.context, this.state);
        this.enterRule(localContext, 118, CPP14Parser.RULE_declaration);
        try {
            this.state = 1187;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1178;
                this.blockdeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1179;
                this.functiondefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1180;
                this.templatedeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1181;
                this.explicitinstantiation();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1182;
                this.explicitspecialization();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1183;
                this.linkagespecification();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1184;
                this.namespacedefinition();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1185;
                this.emptydeclaration();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1186;
                this.attributedeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public blockdeclaration(): BlockdeclarationContext {
        let localContext = new BlockdeclarationContext(this.context, this.state);
        this.enterRule(localContext, 120, CPP14Parser.RULE_blockdeclaration);
        try {
            this.state = 1197;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1189;
                this.simpledeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1190;
                this.asmdefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1191;
                this.namespacealiasdefinition();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1192;
                this.usingdeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1193;
                this.usingdirective();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1194;
                this.static_assertdeclaration();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1195;
                this.aliasdeclaration();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1196;
                this.opaqueenumdeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public aliasdeclaration(): AliasdeclarationContext {
        let localContext = new AliasdeclarationContext(this.context, this.state);
        this.enterRule(localContext, 122, CPP14Parser.RULE_aliasdeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1199;
            this.match(CPP14Parser.Using);
            this.state = 1200;
            this.match(CPP14Parser.Identifier);
            this.state = 1202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 80) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public simpledeclaration(): SimpledeclarationContext {
        let localContext = new SimpledeclarationContext(this.context, this.state);
        this.enterRule(localContext, 124, CPP14Parser.RULE_simpledeclaration);
        let _la: number;
        try {
            this.state = 1222;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1209;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context) ) {
                case 1:
                    {
                    this.state = 1208;
                    this.declspecifierseq();
                    }
                    break;
                }
                this.state = 1212;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19 || _la === 45 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 20737) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 25089) !== 0)) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1215;
                this.attributespecifierseq(0);
                this.state = 1217;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 106, this.context) ) {
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public static_assertdeclaration(): Static_assertdeclarationContext {
        let localContext = new Static_assertdeclarationContext(this.context, this.state);
        this.enterRule(localContext, 126, CPP14Parser.RULE_static_assertdeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
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
    public emptydeclaration(): EmptydeclarationContext {
        let localContext = new EmptydeclarationContext(this.context, this.state);
        this.enterRule(localContext, 128, CPP14Parser.RULE_emptydeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1232;
            this.match(CPP14Parser.Semi);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public attributedeclaration(): AttributedeclarationContext {
        let localContext = new AttributedeclarationContext(this.context, this.state);
        this.enterRule(localContext, 130, CPP14Parser.RULE_attributedeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1234;
            this.attributespecifierseq(0);
            this.state = 1235;
            this.match(CPP14Parser.Semi);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public declspecifier(): DeclspecifierContext {
        let localContext = new DeclspecifierContext(this.context, this.state);
        this.enterRule(localContext, 132, CPP14Parser.RULE_declspecifier);
        try {
            this.state = 1243;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Extern:
            case CPP14Parser.Mutable:
            case CPP14Parser.Register:
            case CPP14Parser.Static:
            case CPP14Parser.Thread_local:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1238;
                this.typespecifier();
                }
                break;
            case CPP14Parser.Explicit:
            case CPP14Parser.Inline:
            case CPP14Parser.Virtual:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1239;
                this.functionspecifier();
                }
                break;
            case CPP14Parser.Friend:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1240;
                this.match(CPP14Parser.Friend);
                }
                break;
            case CPP14Parser.Typedef:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1241;
                this.match(CPP14Parser.Typedef);
                }
                break;
            case CPP14Parser.Constexpr:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1242;
                this.match(CPP14Parser.Constexpr);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public declspecifierseq(): DeclspecifierseqContext {
        let localContext = new DeclspecifierseqContext(this.context, this.state);
        this.enterRule(localContext, 134, CPP14Parser.RULE_declspecifierseq);
        try {
            this.state = 1252;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 110, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1245;
                this.declspecifier();
                this.state = 1247;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 109, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public storageclassspecifier(): StorageclassspecifierContext {
        let localContext = new StorageclassspecifierContext(this.context, this.state);
        this.enterRule(localContext, 136, CPP14Parser.RULE_storageclassspecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1254;
            _la = this.tokenStream.LA(1);
            if(!(_la === 29 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 8455169) !== 0))) {
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
    public functionspecifier(): FunctionspecifierContext {
        let localContext = new FunctionspecifierContext(this.context, this.state);
        this.enterRule(localContext, 138, CPP14Parser.RULE_functionspecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1256;
            _la = this.tokenStream.LA(1);
            if(!(_la === 27 || _la === 37 || _la === 73)) {
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
    public typedefname(): TypedefnameContext {
        let localContext = new TypedefnameContext(this.context, this.state);
        this.enterRule(localContext, 140, CPP14Parser.RULE_typedefname);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1258;
            this.match(CPP14Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public typespecifier(): TypespecifierContext {
        let localContext = new TypespecifierContext(this.context, this.state);
        this.enterRule(localContext, 142, CPP14Parser.RULE_typespecifier);
        try {
            this.state = 1263;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1260;
                this.trailingtypespecifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1261;
                this.classspecifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1262;
                this.enumspecifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public trailingtypespecifier(): TrailingtypespecifierContext {
        let localContext = new TrailingtypespecifierContext(this.context, this.state);
        this.enterRule(localContext, 144, CPP14Parser.RULE_trailingtypespecifier);
        try {
            this.state = 1269;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1265;
                this.simpletypespecifier();
                }
                break;
            case CPP14Parser.Class:
            case CPP14Parser.Enum:
            case CPP14Parser.Struct:
            case CPP14Parser.Union:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1266;
                this.elaboratedtypespecifier();
                }
                break;
            case CPP14Parser.Typename:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1267;
                this.typenamespecifier();
                }
                break;
            case CPP14Parser.Const:
            case CPP14Parser.Volatile:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1268;
                this.cvqualifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public typespecifierseq(): TypespecifierseqContext {
        let localContext = new TypespecifierseqContext(this.context, this.state);
        this.enterRule(localContext, 146, CPP14Parser.RULE_typespecifierseq);
        try {
            this.state = 1278;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1271;
                this.typespecifier();
                this.state = 1273;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public trailingtypespecifierseq(): TrailingtypespecifierseqContext {
        let localContext = new TrailingtypespecifierseqContext(this.context, this.state);
        this.enterRule(localContext, 148, CPP14Parser.RULE_trailingtypespecifierseq);
        try {
            this.state = 1287;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1280;
                this.trailingtypespecifier();
                this.state = 1282;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public simpletypespecifier(): SimpletypespecifierContext {
        let localContext = new SimpletypespecifierContext(this.context, this.state);
        this.enterRule(localContext, 150, CPP14Parser.RULE_simpletypespecifier);
        try {
            this.state = 1312;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 118, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1290;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 117, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1297;
                this.match(CPP14Parser.Char);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1298;
                this.match(CPP14Parser.Char16);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1299;
                this.match(CPP14Parser.Char32);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1300;
                this.match(CPP14Parser.Wchar);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1301;
                this.match(CPP14Parser.Bool);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1302;
                this.match(CPP14Parser.Short);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1303;
                this.match(CPP14Parser.Int);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1304;
                this.match(CPP14Parser.Long);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1305;
                this.match(CPP14Parser.Signed);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1306;
                this.match(CPP14Parser.Unsigned);
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1307;
                this.match(CPP14Parser.Float);
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1308;
                this.match(CPP14Parser.Double);
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1309;
                this.match(CPP14Parser.Void);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1310;
                this.match(CPP14Parser.Auto);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1311;
                this.decltypespecifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public typename(): TypenameContext {
        let localContext = new TypenameContext(this.context, this.state);
        this.enterRule(localContext, 152, CPP14Parser.RULE_typename);
        try {
            this.state = 1318;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1314;
                this.classname();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1315;
                this.enumname();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1316;
                this.typedefname();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1317;
                this.simpletemplateid();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public decltypespecifier(): DecltypespecifierContext {
        let localContext = new DecltypespecifierContext(this.context, this.state);
        this.enterRule(localContext, 154, CPP14Parser.RULE_decltypespecifier);
        try {
            this.state = 1329;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public elaboratedtypespecifier(): ElaboratedtypespecifierContext {
        let localContext = new ElaboratedtypespecifierContext(this.context, this.state);
        this.enterRule(localContext, 156, CPP14Parser.RULE_elaboratedtypespecifier);
        let _la: number;
        try {
            this.state = 1355;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 125, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1331;
                this.classkey();
                this.state = 1333;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 1332;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 1336;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 122, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1340;
                this.classkey();
                this.state = 1341;
                this.simpletemplateid();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1343;
                this.classkey();
                this.state = 1344;
                this.nestednamespecifier(0);
                this.state = 1346;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
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
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1350;
                this.match(CPP14Parser.Enum);
                this.state = 1352;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public enumname(): EnumnameContext {
        let localContext = new EnumnameContext(this.context, this.state);
        this.enterRule(localContext, 158, CPP14Parser.RULE_enumname);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1357;
            this.match(CPP14Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public enumspecifier(): EnumspecifierContext {
        let localContext = new EnumspecifierContext(this.context, this.state);
        this.enterRule(localContext, 160, CPP14Parser.RULE_enumspecifier);
        let _la: number;
        try {
            this.state = 1372;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1359;
                this.enumhead();
                this.state = 1360;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1362;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public enumhead(): EnumheadContext {
        let localContext = new EnumheadContext(this.context, this.state);
        this.enterRule(localContext, 162, CPP14Parser.RULE_enumhead);
        let _la: number;
        try {
            this.state = 1393;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 133, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1374;
                this.enumkey();
                this.state = 1376;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 1375;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 1379;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                    this.state = 1378;
                    this.match(CPP14Parser.Identifier);
                    }
                }

                this.state = 1382;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 119) {
                    {
                    this.state = 1381;
                    this.enumbase();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1384;
                this.enumkey();
                this.state = 1386;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 119) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public opaqueenumdeclaration(): OpaqueenumdeclarationContext {
        let localContext = new OpaqueenumdeclarationContext(this.context, this.state);
        this.enterRule(localContext, 164, CPP14Parser.RULE_opaqueenumdeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1395;
            this.enumkey();
            this.state = 1397;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 80) {
                {
                this.state = 1396;
                this.attributespecifierseq(0);
                }
            }

            this.state = 1399;
            this.match(CPP14Parser.Identifier);
            this.state = 1401;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 119) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public enumkey(): EnumkeyContext {
        let localContext = new EnumkeyContext(this.context, this.state);
        this.enterRule(localContext, 166, CPP14Parser.RULE_enumkey);
        try {
            this.state = 1410;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1405;
                this.match(CPP14Parser.Enum);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1406;
                this.match(CPP14Parser.Enum);
                this.state = 1407;
                this.match(CPP14Parser.Class);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
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
            if (re instanceof antlr.RecognitionException) {
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
    public enumbase(): EnumbaseContext {
        let localContext = new EnumbaseContext(this.context, this.state);
        this.enterRule(localContext, 168, CPP14Parser.RULE_enumbase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1412;
            this.match(CPP14Parser.Colon);
            this.state = 1413;
            this.typespecifierseq();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public enumeratorlist(): EnumeratorlistContext;
    public enumeratorlist(_p: number): EnumeratorlistContext;
    public enumeratorlist(_p?: number): EnumeratorlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new EnumeratorlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 170;
        this.enterRecursionRule(localContext, 170, CPP14Parser.RULE_enumeratorlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1416;
            this.enumeratordefinition();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1423;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 137, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new EnumeratorlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_enumeratorlist);
                    this.state = 1418;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1419;
                    this.match(CPP14Parser.Comma);
                    this.state = 1420;
                    this.enumeratordefinition();
                    }
                    }
                }
                this.state = 1425;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 137, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public enumeratordefinition(): EnumeratordefinitionContext {
        let localContext = new EnumeratordefinitionContext(this.context, this.state);
        this.enterRule(localContext, 172, CPP14Parser.RULE_enumeratordefinition);
        try {
            this.state = 1431;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 138, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1426;
                this.enumerator();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public enumerator(): EnumeratorContext {
        let localContext = new EnumeratorContext(this.context, this.state);
        this.enterRule(localContext, 174, CPP14Parser.RULE_enumerator);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1433;
            this.match(CPP14Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public namespacename(): NamespacenameContext {
        let localContext = new NamespacenameContext(this.context, this.state);
        this.enterRule(localContext, 176, CPP14Parser.RULE_namespacename);
        try {
            this.state = 1437;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1435;
                this.originalnamespacename();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1436;
                this.namespacealias();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public originalnamespacename(): OriginalnamespacenameContext {
        let localContext = new OriginalnamespacenameContext(this.context, this.state);
        this.enterRule(localContext, 178, CPP14Parser.RULE_originalnamespacename);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1439;
            this.match(CPP14Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public namespacedefinition(): NamespacedefinitionContext {
        let localContext = new NamespacedefinitionContext(this.context, this.state);
        this.enterRule(localContext, 180, CPP14Parser.RULE_namespacedefinition);
        try {
            this.state = 1443;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1441;
                this.namednamespacedefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1442;
                this.unnamednamespacedefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public namednamespacedefinition(): NamednamespacedefinitionContext {
        let localContext = new NamednamespacedefinitionContext(this.context, this.state);
        this.enterRule(localContext, 182, CPP14Parser.RULE_namednamespacedefinition);
        try {
            this.state = 1447;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 141, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1445;
                this.originalnamespacedefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1446;
                this.extensionnamespacedefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public originalnamespacedefinition(): OriginalnamespacedefinitionContext {
        let localContext = new OriginalnamespacedefinitionContext(this.context, this.state);
        this.enterRule(localContext, 184, CPP14Parser.RULE_originalnamespacedefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1450;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public extensionnamespacedefinition(): ExtensionnamespacedefinitionContext {
        let localContext = new ExtensionnamespacedefinitionContext(this.context, this.state);
        this.enterRule(localContext, 186, CPP14Parser.RULE_extensionnamespacedefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1459;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public unnamednamespacedefinition(): UnnamednamespacedefinitionContext {
        let localContext = new UnnamednamespacedefinitionContext(this.context, this.state);
        this.enterRule(localContext, 188, CPP14Parser.RULE_unnamednamespacedefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1468;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public namespacebody(): NamespacebodyContext {
        let localContext = new NamespacebodyContext(this.context, this.state);
        this.enterRule(localContext, 190, CPP14Parser.RULE_namespacebody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1476;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875466725) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26113) !== 0)) {
                {
                this.state = 1475;
                this.declarationseq(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public namespacealias(): NamespacealiasContext {
        let localContext = new NamespacealiasContext(this.context, this.state);
        this.enterRule(localContext, 192, CPP14Parser.RULE_namespacealias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1478;
            this.match(CPP14Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public namespacealiasdefinition(): NamespacealiasdefinitionContext {
        let localContext = new NamespacealiasdefinitionContext(this.context, this.state);
        this.enterRule(localContext, 194, CPP14Parser.RULE_namespacealiasdefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
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
    public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
        let localContext = new QualifiednamespacespecifierContext(this.context, this.state);
        this.enterRule(localContext, 196, CPP14Parser.RULE_qualifiednamespacespecifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1487;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public usingdeclaration(): UsingdeclarationContext {
        let localContext = new UsingdeclarationContext(this.context, this.state);
        this.enterRule(localContext, 198, CPP14Parser.RULE_usingdeclaration);
        let _la: number;
        try {
            this.state = 1504;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 148, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1491;
                this.match(CPP14Parser.Using);
                this.state = 1493;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 69) {
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public usingdirective(): UsingdirectiveContext {
        let localContext = new UsingdirectiveContext(this.context, this.state);
        this.enterRule(localContext, 200, CPP14Parser.RULE_usingdirective);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1507;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 80) {
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
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 150, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public asmdefinition(): AsmdefinitionContext {
        let localContext = new AsmdefinitionContext(this.context, this.state);
        this.enterRule(localContext, 202, CPP14Parser.RULE_asmdefinition);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
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
    public linkagespecification(): LinkagespecificationContext {
        let localContext = new LinkagespecificationContext(this.context, this.state);
        this.enterRule(localContext, 204, CPP14Parser.RULE_linkagespecification);
        let _la: number;
        try {
            this.state = 1533;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1523;
                this.match(CPP14Parser.Extern);
                this.state = 1524;
                this.match(CPP14Parser.Stringliteral);
                this.state = 1525;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1527;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875466725) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26113) !== 0)) {
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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

    public attributespecifierseq(): AttributespecifierseqContext;
    public attributespecifierseq(_p: number): AttributespecifierseqContext;
    public attributespecifierseq(_p?: number): AttributespecifierseqContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AttributespecifierseqContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 206;
        this.enterRecursionRule(localContext, 206, CPP14Parser.RULE_attributespecifierseq, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1536;
            this.attributespecifier();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1542;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 153, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new AttributespecifierseqContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_attributespecifierseq);
                    this.state = 1538;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1539;
                    this.attributespecifier();
                    }
                    }
                }
                this.state = 1544;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 153, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public attributespecifier(): AttributespecifierContext {
        let localContext = new AttributespecifierContext(this.context, this.state);
        this.enterRule(localContext, 208, CPP14Parser.RULE_attributespecifier);
        try {
            this.state = 1552;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.LeftBracket:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1551;
                this.alignmentspecifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public alignmentspecifier(): AlignmentspecifierContext {
        let localContext = new AlignmentspecifierContext(this.context, this.state);
        this.enterRule(localContext, 210, CPP14Parser.RULE_alignmentspecifier);
        let _la: number;
        try {
            this.state = 1570;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1554;
                this.match(CPP14Parser.Alignas);
                this.state = 1555;
                this.match(CPP14Parser.LeftParen);
                this.state = 1556;
                this.typeid();
                this.state = 1558;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1562;
                this.match(CPP14Parser.Alignas);
                this.state = 1563;
                this.match(CPP14Parser.LeftParen);
                this.state = 1564;
                this.constantexpression();
                this.state = 1566;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
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
            if (re instanceof antlr.RecognitionException) {
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

    public attributelist(): AttributelistContext;
    public attributelist(_p: number): AttributelistContext;
    public attributelist(_p?: number): AttributelistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AttributelistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 212;
        this.enterRecursionRule(localContext, 212, CPP14Parser.RULE_attributelist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1579;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 159, this.context) ) {
            case 1:
                {
                this.state = 1574;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 158, this.context) ) {
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
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1593;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 162, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1591;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 161, this.context) ) {
                    case 1:
                        {
                        localContext = new AttributelistContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_attributelist);
                        this.state = 1581;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1582;
                        this.match(CPP14Parser.Comma);
                        this.state = 1584;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 160, this.context) ) {
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
                        localContext = new AttributelistContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_attributelist);
                        this.state = 1586;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 162, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public attribute(): AttributeContext {
        let localContext = new AttributeContext(this.context, this.state);
        this.enterRule(localContext, 214, CPP14Parser.RULE_attribute);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1596;
            this.attributetoken();
            this.state = 1598;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public attributetoken(): AttributetokenContext {
        let localContext = new AttributetokenContext(this.context, this.state);
        this.enterRule(localContext, 216, CPP14Parser.RULE_attributetoken);
        try {
            this.state = 1602;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1600;
                this.match(CPP14Parser.Identifier);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1601;
                this.attributescopedtoken();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public attributescopedtoken(): AttributescopedtokenContext {
        let localContext = new AttributescopedtokenContext(this.context, this.state);
        this.enterRule(localContext, 218, CPP14Parser.RULE_attributescopedtoken);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
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
    public attributenamespace(): AttributenamespaceContext {
        let localContext = new AttributenamespaceContext(this.context, this.state);
        this.enterRule(localContext, 220, CPP14Parser.RULE_attributenamespace);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1608;
            this.match(CPP14Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public attributeargumentclause(): AttributeargumentclauseContext {
        let localContext = new AttributeargumentclauseContext(this.context, this.state);
        this.enterRule(localContext, 222, CPP14Parser.RULE_attributeargumentclause);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
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

    public balancedtokenseq(): BalancedtokenseqContext;
    public balancedtokenseq(_p: number): BalancedtokenseqContext;
    public balancedtokenseq(_p?: number): BalancedtokenseqContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BalancedtokenseqContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 224;
        this.enterRecursionRule(localContext, 224, CPP14Parser.RULE_balancedtokenseq, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1616;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context) ) {
            case 1:
                {
                this.state = 1615;
                this.balancedtoken();
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1622;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 166, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new BalancedtokenseqContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_balancedtokenseq);
                    this.state = 1618;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1619;
                    this.balancedtoken();
                    }
                    }
                }
                this.state = 1624;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 166, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public balancedtoken(): BalancedtokenContext {
        let localContext = new BalancedtokenContext(this.context, this.state);
        this.enterRule(localContext, 226, CPP14Parser.RULE_balancedtoken);
        try {
            this.state = 1637;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.LeftParen:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
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
                this.enterOuterAlt(localContext, 3);
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public initdeclaratorlist(): InitdeclaratorlistContext;
    public initdeclaratorlist(_p: number): InitdeclaratorlistContext;
    public initdeclaratorlist(_p?: number): InitdeclaratorlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new InitdeclaratorlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 228;
        this.enterRecursionRule(localContext, 228, CPP14Parser.RULE_initdeclaratorlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1640;
            this.initdeclarator();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1647;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 168, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new InitdeclaratorlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_initdeclaratorlist);
                    this.state = 1642;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1643;
                    this.match(CPP14Parser.Comma);
                    this.state = 1644;
                    this.initdeclarator();
                    }
                    }
                }
                this.state = 1649;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 168, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public initdeclarator(): InitdeclaratorContext {
        let localContext = new InitdeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 230, CPP14Parser.RULE_initdeclarator);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1650;
            this.declarator();
            this.state = 1652;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 169, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public declarator(): DeclaratorContext {
        let localContext = new DeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 232, CPP14Parser.RULE_declarator);
        try {
            this.state = 1659;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 170, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1654;
                this.ptrdeclarator();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public ptrdeclarator(): PtrdeclaratorContext {
        let localContext = new PtrdeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 234, CPP14Parser.RULE_ptrdeclarator);
        try {
            this.state = 1665;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 171, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1661;
                this.noptrdeclarator(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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

    public noptrdeclarator(): NoptrdeclaratorContext;
    public noptrdeclarator(_p: number): NoptrdeclaratorContext;
    public noptrdeclarator(_p?: number): NoptrdeclaratorContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new NoptrdeclaratorContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 236;
        this.enterRecursionRule(localContext, 236, CPP14Parser.RULE_noptrdeclarator, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1676;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 172, this.context) ) {
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
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1691;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 177, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1689;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 176, this.context) ) {
                    case 1:
                        {
                        localContext = new NoptrdeclaratorContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_noptrdeclarator);
                        this.state = 1678;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1679;
                        this.parametersandqualifiers();
                        }
                        break;
                    case 2:
                        {
                        localContext = new NoptrdeclaratorContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_noptrdeclarator);
                        this.state = 1680;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1681;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1683;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507030105) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                            {
                            this.state = 1682;
                            this.constantexpression();
                            }
                        }

                        this.state = 1685;
                        this.match(CPP14Parser.RightBracket);
                        this.state = 1687;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 175, this.context) ) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 177, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public parametersandqualifiers(): ParametersandqualifiersContext {
        let localContext = new ParametersandqualifiersContext(this.context, this.state);
        this.enterRule(localContext, 238, CPP14Parser.RULE_parametersandqualifiers);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1694;
            this.match(CPP14Parser.LeftParen);
            this.state = 1695;
            this.parameterdeclarationclause();
            this.state = 1696;
            this.match(CPP14Parser.RightParen);
            this.state = 1698;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 178, this.context) ) {
            case 1:
                {
                this.state = 1697;
                this.cvqualifierseq();
                }
                break;
            }
            this.state = 1701;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 179, this.context) ) {
            case 1:
                {
                this.state = 1700;
                this.refqualifier();
                }
                break;
            }
            this.state = 1704;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context) ) {
            case 1:
                {
                this.state = 1703;
                this.exceptionspecification();
                }
                break;
            }
            this.state = 1707;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 181, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public trailingreturntype(): TrailingreturntypeContext {
        let localContext = new TrailingreturntypeContext(this.context, this.state);
        this.enterRule(localContext, 240, CPP14Parser.RULE_trailingreturntype);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1709;
            this.match(CPP14Parser.Arrow);
            this.state = 1710;
            this.trailingtypespecifierseq();
            this.state = 1712;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public ptroperator(): PtroperatorContext {
        let localContext = new PtroperatorContext(this.context, this.state);
        this.enterRule(localContext, 242, CPP14Parser.RULE_ptroperator);
        try {
            this.state = 1737;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Star:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1714;
                this.match(CPP14Parser.Star);
                this.state = 1716;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context) ) {
                case 1:
                    {
                    this.state = 1715;
                    this.attributespecifierseq(0);
                    }
                    break;
                }
                this.state = 1719;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 184, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1721;
                this.match(CPP14Parser.And);
                this.state = 1723;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 185, this.context) ) {
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1725;
                this.match(CPP14Parser.AndAnd);
                this.state = 1727;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 186, this.context) ) {
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
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1729;
                this.nestednamespecifier(0);
                this.state = 1730;
                this.match(CPP14Parser.Star);
                this.state = 1732;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 187, this.context) ) {
                case 1:
                    {
                    this.state = 1731;
                    this.attributespecifierseq(0);
                    }
                    break;
                }
                this.state = 1735;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 188, this.context) ) {
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public cvqualifierseq(): CvqualifierseqContext {
        let localContext = new CvqualifierseqContext(this.context, this.state);
        this.enterRule(localContext, 244, CPP14Parser.RULE_cvqualifierseq);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1739;
            this.cvqualifier();
            this.state = 1741;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 190, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public cvqualifier(): CvqualifierContext {
        let localContext = new CvqualifierContext(this.context, this.state);
        this.enterRule(localContext, 246, CPP14Parser.RULE_cvqualifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1743;
            _la = this.tokenStream.LA(1);
            if(!(_la === 15 || _la === 75)) {
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
    public refqualifier(): RefqualifierContext {
        let localContext = new RefqualifierContext(this.context, this.state);
        this.enterRule(localContext, 248, CPP14Parser.RULE_refqualifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1745;
            _la = this.tokenStream.LA(1);
            if(!(_la === 90 || _la === 111)) {
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
    public declaratorid(): DeclaratoridContext {
        let localContext = new DeclaratoridContext(this.context, this.state);
        this.enterRule(localContext, 250, CPP14Parser.RULE_declaratorid);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1748;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 124) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public typeid(): TypeidContext {
        let localContext = new TypeidContext(this.context, this.state);
        this.enterRule(localContext, 252, CPP14Parser.RULE_typeid);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1752;
            this.typespecifierseq();
            this.state = 1754;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 192, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public abstractdeclarator(): AbstractdeclaratorContext {
        let localContext = new AbstractdeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 254, CPP14Parser.RULE_abstractdeclarator);
        try {
            this.state = 1764;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 194, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1756;
                this.ptrabstractdeclarator();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1758;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 193, this.context) ) {
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1763;
                this.abstractpackdeclarator();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public ptrabstractdeclarator(): PtrabstractdeclaratorContext {
        let localContext = new PtrabstractdeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 256, CPP14Parser.RULE_ptrabstractdeclarator);
        try {
            this.state = 1771;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.LeftParen:
            case CPP14Parser.LeftBracket:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1767;
                this.ptroperator();
                this.state = 1769;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context) ) {
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public noptrabstractdeclarator(): NoptrabstractdeclaratorContext;
    public noptrabstractdeclarator(_p: number): NoptrabstractdeclaratorContext;
    public noptrabstractdeclarator(_p?: number): NoptrabstractdeclaratorContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new NoptrabstractdeclaratorContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 258;
        this.enterRecursionRule(localContext, 258, CPP14Parser.RULE_noptrabstractdeclarator, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1787;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 199, this.context) ) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507030105) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                    {
                    this.state = 1776;
                    this.constantexpression();
                    }
                }

                this.state = 1779;
                this.match(CPP14Parser.RightBracket);
                this.state = 1781;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context) ) {
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
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1802;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 203, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1800;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context) ) {
                    case 1:
                        {
                        localContext = new NoptrabstractdeclaratorContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
                        this.state = 1789;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1790;
                        this.parametersandqualifiers();
                        }
                        break;
                    case 2:
                        {
                        localContext = new NoptrabstractdeclaratorContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
                        this.state = 1791;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1792;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1794;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507030105) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                            {
                            this.state = 1793;
                            this.constantexpression();
                            }
                        }

                        this.state = 1796;
                        this.match(CPP14Parser.RightBracket);
                        this.state = 1798;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 201, this.context) ) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 203, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public abstractpackdeclarator(): AbstractpackdeclaratorContext {
        let localContext = new AbstractpackdeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 260, CPP14Parser.RULE_abstractpackdeclarator);
        try {
            this.state = 1809;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Ellipsis:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1806;
                this.ptroperator();
                this.state = 1807;
                this.abstractpackdeclarator();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext;
    public noptrabstractpackdeclarator(_p: number): NoptrabstractpackdeclaratorContext;
    public noptrabstractpackdeclarator(_p?: number): NoptrabstractpackdeclaratorContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new NoptrabstractpackdeclaratorContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 262;
        this.enterRecursionRule(localContext, 262, CPP14Parser.RULE_noptrabstractpackdeclarator, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1812;
            this.match(CPP14Parser.Ellipsis);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1827;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 208, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1825;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context) ) {
                    case 1:
                        {
                        localContext = new NoptrabstractpackdeclaratorContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
                        this.state = 1814;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1815;
                        this.parametersandqualifiers();
                        }
                        break;
                    case 2:
                        {
                        localContext = new NoptrabstractpackdeclaratorContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
                        this.state = 1816;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1817;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1819;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507030105) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                            {
                            this.state = 1818;
                            this.constantexpression();
                            }
                        }

                        this.state = 1821;
                        this.match(CPP14Parser.RightBracket);
                        this.state = 1823;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 206, this.context) ) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 208, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public parameterdeclarationclause(): ParameterdeclarationclauseContext {
        let localContext = new ParameterdeclarationclauseContext(this.context, this.state);
        this.enterRule(localContext, 264, CPP14Parser.RULE_parameterdeclarationclause);
        let _la: number;
        try {
            this.state = 1840;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1831;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239624) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2305032677) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 9181) !== 0) || _la === 120 || _la === 125) {
                    {
                    this.state = 1830;
                    this.parameterdeclarationlist(0);
                    }
                }

                this.state = 1834;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                    this.state = 1833;
                    this.match(CPP14Parser.Ellipsis);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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

    public parameterdeclarationlist(): ParameterdeclarationlistContext;
    public parameterdeclarationlist(_p: number): ParameterdeclarationlistContext;
    public parameterdeclarationlist(_p?: number): ParameterdeclarationlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ParameterdeclarationlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 266;
        this.enterRecursionRule(localContext, 266, CPP14Parser.RULE_parameterdeclarationlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1843;
            this.parameterdeclaration();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1850;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 212, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ParameterdeclarationlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_parameterdeclarationlist);
                    this.state = 1845;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1846;
                    this.match(CPP14Parser.Comma);
                    this.state = 1847;
                    this.parameterdeclaration();
                    }
                    }
                }
                this.state = 1852;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 212, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public parameterdeclaration(): ParameterdeclarationContext {
        let localContext = new ParameterdeclarationContext(this.context, this.state);
        this.enterRule(localContext, 268, CPP14Parser.RULE_parameterdeclaration);
        let _la: number;
        try {
            this.state = 1884;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 219, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1854;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1860;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1868;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 1867;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 1870;
                this.declspecifierseq();
                this.state = 1872;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context) ) {
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
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1875;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 1874;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 1877;
                this.declspecifierseq();
                this.state = 1879;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4357) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 25089) !== 0)) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public functiondefinition(): FunctiondefinitionContext {
        let localContext = new FunctiondefinitionContext(this.context, this.state);
        this.enterRule(localContext, 270, CPP14Parser.RULE_functiondefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1887;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 80) {
                {
                this.state = 1886;
                this.attributespecifierseq(0);
                }
            }

            this.state = 1890;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 221, this.context) ) {
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
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31 || _la === 46) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public functionbody(): FunctionbodyContext {
        let localContext = new FunctionbodyContext(this.context, this.state);
        this.enterRule(localContext, 272, CPP14Parser.RULE_functionbody);
        let _la: number;
        try {
            this.state = 1909;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 224, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1899;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 119) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1902;
                this.functiontryblock();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
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
                this.enterOuterAlt(localContext, 4);
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
            if (re instanceof antlr.RecognitionException) {
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
    public initializer(): InitializerContext {
        let localContext = new InitializerContext(this.context, this.state);
        this.enterRule(localContext, 274, CPP14Parser.RULE_initializer);
        try {
            this.state = 1916;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.LeftBrace:
            case CPP14Parser.Assign:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1911;
                this.braceorequalinitializer();
                }
                break;
            case CPP14Parser.LeftParen:
                this.enterOuterAlt(localContext, 2);
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
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public braceorequalinitializer(): BraceorequalinitializerContext {
        let localContext = new BraceorequalinitializerContext(this.context, this.state);
        this.enterRule(localContext, 276, CPP14Parser.RULE_braceorequalinitializer);
        try {
            this.state = 1921;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Assign:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1918;
                this.match(CPP14Parser.Assign);
                this.state = 1919;
                this.initializerclause();
                }
                break;
            case CPP14Parser.LeftBrace:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1920;
                this.bracedinitlist();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public initializerclause(): InitializerclauseContext {
        let localContext = new InitializerclauseContext(this.context, this.state);
        this.enterRule(localContext, 278, CPP14Parser.RULE_initializerclause);
        try {
            this.state = 1925;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1923;
                this.assignmentexpression();
                }
                break;
            case CPP14Parser.LeftBrace:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1924;
                this.bracedinitlist();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public initializerlist(): InitializerlistContext;
    public initializerlist(_p: number): InitializerlistContext;
    public initializerlist(_p?: number): InitializerlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new InitializerlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 280;
        this.enterRecursionRule(localContext, 280, CPP14Parser.RULE_initializerlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1928;
            this.initializerclause();
            this.state = 1930;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 228, this.context) ) {
            case 1:
                {
                this.state = 1929;
                this.match(CPP14Parser.Ellipsis);
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1940;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 230, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new InitializerlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_initializerlist);
                    this.state = 1932;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1933;
                    this.match(CPP14Parser.Comma);
                    this.state = 1934;
                    this.initializerclause();
                    this.state = 1936;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 229, this.context) ) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 230, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public bracedinitlist(): BracedinitlistContext {
        let localContext = new BracedinitlistContext(this.context, this.state);
        this.enterRule(localContext, 282, CPP14Parser.RULE_bracedinitlist);
        let _la: number;
        try {
            this.state = 1952;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1943;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1944;
                this.initializerlist(0);
                this.state = 1946;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
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
    public classname(): ClassnameContext {
        let localContext = new ClassnameContext(this.context, this.state);
        this.enterRule(localContext, 284, CPP14Parser.RULE_classname);
        try {
            this.state = 1956;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 233, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1954;
                this.match(CPP14Parser.Identifier);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1955;
                this.simpletemplateid();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public classspecifier(): ClassspecifierContext {
        let localContext = new ClassspecifierContext(this.context, this.state);
        this.enterRule(localContext, 286, CPP14Parser.RULE_classspecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1958;
            this.classhead();
            this.state = 1959;
            this.match(CPP14Parser.LeftBrace);
            this.state = 1961;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239624) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875695589) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26369) !== 0)) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public classhead(): ClassheadContext {
        let localContext = new ClassheadContext(this.context, this.state);
        this.enterRule(localContext, 288, CPP14Parser.RULE_classhead);
        let _la: number;
        try {
            this.state = 1983;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 240, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1965;
                this.classkey();
                this.state = 1967;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 1966;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 1969;
                this.classheadname();
                this.state = 1971;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 31) {
                    {
                    this.state = 1970;
                    this.classvirtspecifier();
                    }
                }

                this.state = 1974;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 119) {
                    {
                    this.state = 1973;
                    this.baseclause();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1976;
                this.classkey();
                this.state = 1978;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 1977;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 1981;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 119) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public classheadname(): ClassheadnameContext {
        let localContext = new ClassheadnameContext(this.context, this.state);
        this.enterRule(localContext, 290, CPP14Parser.RULE_classheadname);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1986;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 241, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
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
    public classvirtspecifier(): ClassvirtspecifierContext {
        let localContext = new ClassvirtspecifierContext(this.context, this.state);
        this.enterRule(localContext, 292, CPP14Parser.RULE_classvirtspecifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1990;
            this.match(CPP14Parser.Final);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public classkey(): ClasskeyContext {
        let localContext = new ClasskeyContext(this.context, this.state);
        this.enterRule(localContext, 294, CPP14Parser.RULE_classkey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1992;
            _la = this.tokenStream.LA(1);
            if(!(_la === 14 || _la === 59 || _la === 70)) {
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
    public memberspecification(): MemberspecificationContext {
        let localContext = new MemberspecificationContext(this.context, this.state);
        this.enterRule(localContext, 296, CPP14Parser.RULE_memberspecification);
        let _la: number;
        try {
            this.state = 2003;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1994;
                this.memberdeclaration();
                this.state = 1996;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239624) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875695589) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26369) !== 0)) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1998;
                this.accessspecifier();
                this.state = 1999;
                this.match(CPP14Parser.Colon);
                this.state = 2001;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239624) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875695589) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26369) !== 0)) {
                    {
                    this.state = 2000;
                    this.memberspecification();
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public memberdeclaration(): MemberdeclarationContext {
        let localContext = new MemberdeclarationContext(this.context, this.state);
        this.enterRule(localContext, 298, CPP14Parser.RULE_memberdeclaration);
        let _la: number;
        try {
            this.state = 2021;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2006;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 245, this.context) ) {
                case 1:
                    {
                    this.state = 2005;
                    this.attributespecifierseq(0);
                    }
                    break;
                }
                this.state = 2009;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 246, this.context) ) {
                case 1:
                    {
                    this.state = 2008;
                    this.declspecifierseq();
                    }
                    break;
                }
                this.state = 2012;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 19 || _la === 45 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 20741) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 25345) !== 0)) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2015;
                this.functiondefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2016;
                this.usingdeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2017;
                this.static_assertdeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2018;
                this.templatedeclaration();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2019;
                this.aliasdeclaration();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2020;
                this.emptydeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public memberdeclaratorlist(): MemberdeclaratorlistContext;
    public memberdeclaratorlist(_p: number): MemberdeclaratorlistContext;
    public memberdeclaratorlist(_p?: number): MemberdeclaratorlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new MemberdeclaratorlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 300;
        this.enterRecursionRule(localContext, 300, CPP14Parser.RULE_memberdeclaratorlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 2024;
            this.memberdeclarator();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2031;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 249, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new MemberdeclaratorlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_memberdeclaratorlist);
                    this.state = 2026;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 2027;
                    this.match(CPP14Parser.Comma);
                    this.state = 2028;
                    this.memberdeclarator();
                    }
                    }
                }
                this.state = 2033;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 249, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public memberdeclarator(): MemberdeclaratorContext {
        let localContext = new MemberdeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 302, CPP14Parser.RULE_memberdeclarator);
        let _la: number;
        try {
            this.state = 2053;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 255, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2034;
                this.declarator();
                this.state = 2036;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 250, this.context) ) {
                case 1:
                    {
                    this.state = 2035;
                    this.virtspecifierseq(0);
                    }
                    break;
                }
                this.state = 2039;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context) ) {
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2041;
                this.declarator();
                this.state = 2043;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context) ) {
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2046;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                    this.state = 2045;
                    this.match(CPP14Parser.Identifier);
                    }
                }

                this.state = 2049;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
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
            if (re instanceof antlr.RecognitionException) {
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

    public virtspecifierseq(): VirtspecifierseqContext;
    public virtspecifierseq(_p: number): VirtspecifierseqContext;
    public virtspecifierseq(_p?: number): VirtspecifierseqContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new VirtspecifierseqContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 304;
        this.enterRecursionRule(localContext, 304, CPP14Parser.RULE_virtspecifierseq, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 2056;
            this.virtspecifier();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2062;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 256, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new VirtspecifierseqContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_virtspecifierseq);
                    this.state = 2058;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 2059;
                    this.virtspecifier();
                    }
                    }
                }
                this.state = 2064;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 256, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public virtspecifier(): VirtspecifierContext {
        let localContext = new VirtspecifierContext(this.context, this.state);
        this.enterRule(localContext, 306, CPP14Parser.RULE_virtspecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2065;
            _la = this.tokenStream.LA(1);
            if(!(_la === 31 || _la === 46)) {
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
    public purespecifier(): PurespecifierContext {
        let localContext = new PurespecifierContext(this.context, this.state);
        this.enterRule(localContext, 308, CPP14Parser.RULE_purespecifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2067;
            this.match(CPP14Parser.Assign);
            this.state = 2068;
            this.match(CPP14Parser.ZeroLiteral);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public baseclause(): BaseclauseContext {
        let localContext = new BaseclauseContext(this.context, this.state);
        this.enterRule(localContext, 310, CPP14Parser.RULE_baseclause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2070;
            this.match(CPP14Parser.Colon);
            this.state = 2071;
            this.basespecifierlist(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public basespecifierlist(): BasespecifierlistContext;
    public basespecifierlist(_p: number): BasespecifierlistContext;
    public basespecifierlist(_p?: number): BasespecifierlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BasespecifierlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 312;
        this.enterRecursionRule(localContext, 312, CPP14Parser.RULE_basespecifierlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 2074;
            this.basespecifier();
            this.state = 2076;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 257, this.context) ) {
            case 1:
                {
                this.state = 2075;
                this.match(CPP14Parser.Ellipsis);
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2086;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 259, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new BasespecifierlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_basespecifierlist);
                    this.state = 2078;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 2079;
                    this.match(CPP14Parser.Comma);
                    this.state = 2080;
                    this.basespecifier();
                    this.state = 2082;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 258, this.context) ) {
                    case 1:
                        {
                        this.state = 2081;
                        this.match(CPP14Parser.Ellipsis);
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 2088;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 259, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public basespecifier(): BasespecifierContext {
        let localContext = new BasespecifierContext(this.context, this.state);
        this.enterRule(localContext, 314, CPP14Parser.RULE_basespecifier);
        let _la: number;
        try {
            this.state = 2110;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2090;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 2089;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 2092;
                this.basetypespecifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2094;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 2093;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 2096;
                this.match(CPP14Parser.Virtual);
                this.state = 2098;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 7) !== 0)) {
                    {
                    this.state = 2097;
                    this.accessspecifier();
                    }
                }

                this.state = 2100;
                this.basetypespecifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2102;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 2101;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 2104;
                this.accessspecifier();
                this.state = 2106;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 73) {
                    {
                    this.state = 2105;
                    this.match(CPP14Parser.Virtual);
                    }
                }

                this.state = 2108;
                this.basetypespecifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public classordecltype(): ClassordecltypeContext {
        let localContext = new ClassordecltypeContext(this.context, this.state);
        this.enterRule(localContext, 316, CPP14Parser.RULE_classordecltype);
        try {
            this.state = 2117;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 267, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2113;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 266, this.context) ) {
                case 1:
                    {
                    this.state = 2112;
                    this.nestednamespecifier(0);
                    }
                    break;
                }
                this.state = 2115;
                this.classname();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2116;
                this.decltypespecifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public basetypespecifier(): BasetypespecifierContext {
        let localContext = new BasetypespecifierContext(this.context, this.state);
        this.enterRule(localContext, 318, CPP14Parser.RULE_basetypespecifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2119;
            this.classordecltype();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public accessspecifier(): AccessspecifierContext {
        let localContext = new AccessspecifierContext(this.context, this.state);
        this.enterRule(localContext, 320, CPP14Parser.RULE_accessspecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2121;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 7) !== 0))) {
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
    public conversionfunctionid(): ConversionfunctionidContext {
        let localContext = new ConversionfunctionidContext(this.context, this.state);
        this.enterRule(localContext, 322, CPP14Parser.RULE_conversionfunctionid);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2123;
            this.match(CPP14Parser.Operator);
            this.state = 2124;
            this.conversiontypeid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public conversiontypeid(): ConversiontypeidContext {
        let localContext = new ConversiontypeidContext(this.context, this.state);
        this.enterRule(localContext, 324, CPP14Parser.RULE_conversiontypeid);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2126;
            this.typespecifierseq();
            this.state = 2128;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context) ) {
            case 1:
                {
                this.state = 2127;
                this.conversiondeclarator();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public conversiondeclarator(): ConversiondeclaratorContext {
        let localContext = new ConversiondeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 326, CPP14Parser.RULE_conversiondeclarator);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2130;
            this.ptroperator();
            this.state = 2132;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 269, this.context) ) {
            case 1:
                {
                this.state = 2131;
                this.conversiondeclarator();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public ctorinitializer(): CtorinitializerContext {
        let localContext = new CtorinitializerContext(this.context, this.state);
        this.enterRule(localContext, 328, CPP14Parser.RULE_ctorinitializer);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2134;
            this.match(CPP14Parser.Colon);
            this.state = 2135;
            this.meminitializerlist();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public meminitializerlist(): MeminitializerlistContext {
        let localContext = new MeminitializerlistContext(this.context, this.state);
        this.enterRule(localContext, 330, CPP14Parser.RULE_meminitializerlist);
        let _la: number;
        try {
            this.state = 2148;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 272, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2137;
                this.meminitializer();
                this.state = 2139;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                    this.state = 2138;
                    this.match(CPP14Parser.Ellipsis);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2141;
                this.meminitializer();
                this.state = 2143;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                    this.state = 2142;
                    this.match(CPP14Parser.Ellipsis);
                    }
                }

                this.state = 2145;
                this.match(CPP14Parser.Comma);
                this.state = 2146;
                this.meminitializerlist();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public meminitializer(): MeminitializerContext {
        let localContext = new MeminitializerContext(this.context, this.state);
        this.enterRule(localContext, 332, CPP14Parser.RULE_meminitializer);
        let _la: number;
        try {
            this.state = 2160;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 274, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2150;
                this.meminitializerid();
                this.state = 2151;
                this.match(CPP14Parser.LeftParen);
                this.state = 2153;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                    {
                    this.state = 2152;
                    this.expressionlist();
                    }
                }

                this.state = 2155;
                this.match(CPP14Parser.RightParen);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2157;
                this.meminitializerid();
                this.state = 2158;
                this.bracedinitlist();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public meminitializerid(): MeminitializeridContext {
        let localContext = new MeminitializeridContext(this.context, this.state);
        this.enterRule(localContext, 334, CPP14Parser.RULE_meminitializerid);
        try {
            this.state = 2164;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 275, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2162;
                this.classordecltype();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2163;
                this.match(CPP14Parser.Identifier);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public operatorfunctionid(): OperatorfunctionidContext {
        let localContext = new OperatorfunctionidContext(this.context, this.state);
        this.enterRule(localContext, 336, CPP14Parser.RULE_operatorfunctionid);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2166;
            this.match(CPP14Parser.Operator);
            this.state = 2167;
            this.operator();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public literaloperatorid(): LiteraloperatoridContext {
        let localContext = new LiteraloperatoridContext(this.context, this.state);
        this.enterRule(localContext, 338, CPP14Parser.RULE_literaloperatorid);
        try {
            this.state = 2174;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 276, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2169;
                this.match(CPP14Parser.Operator);
                this.state = 2170;
                this.match(CPP14Parser.Stringliteral);
                this.state = 2171;
                this.match(CPP14Parser.Identifier);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2172;
                this.match(CPP14Parser.Operator);
                this.state = 2173;
                this.match(CPP14Parser.Userdefinedstringliteral);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public templatedeclaration(): TemplatedeclarationContext {
        let localContext = new TemplatedeclarationContext(this.context, this.state);
        this.enterRule(localContext, 340, CPP14Parser.RULE_templatedeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2176;
            this.match(CPP14Parser.Template);
            this.state = 2177;
            this.match(CPP14Parser.Less);
            this.state = 2178;
            this.templateparameterlist(0);
            this.state = 2179;
            this.match(CPP14Parser.Greater);
            this.state = 2180;
            this.declaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public templateparameterlist(): TemplateparameterlistContext;
    public templateparameterlist(_p: number): TemplateparameterlistContext;
    public templateparameterlist(_p?: number): TemplateparameterlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TemplateparameterlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 342;
        this.enterRecursionRule(localContext, 342, CPP14Parser.RULE_templateparameterlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 2183;
            this.templateparameter();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2190;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 277, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TemplateparameterlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_templateparameterlist);
                    this.state = 2185;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 2186;
                    this.match(CPP14Parser.Comma);
                    this.state = 2187;
                    this.templateparameter();
                    }
                    }
                }
                this.state = 2192;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 277, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public templateparameter(): TemplateparameterContext {
        let localContext = new TemplateparameterContext(this.context, this.state);
        this.enterRule(localContext, 344, CPP14Parser.RULE_templateparameter);
        try {
            this.state = 2195;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 278, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2193;
                this.typeparameter();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2194;
                this.parameterdeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public typeparameter(): TypeparameterContext {
        let localContext = new TypeparameterContext(this.context, this.state);
        this.enterRule(localContext, 346, CPP14Parser.RULE_typeparameter);
        let _la: number;
        try {
            this.state = 2245;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 288, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2197;
                this.match(CPP14Parser.Class);
                this.state = 2199;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 279, this.context) ) {
                case 1:
                    {
                    this.state = 2198;
                    this.match(CPP14Parser.Ellipsis);
                    }
                    break;
                }
                this.state = 2202;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 280, this.context) ) {
                case 1:
                    {
                    this.state = 2201;
                    this.match(CPP14Parser.Identifier);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2204;
                this.match(CPP14Parser.Class);
                this.state = 2206;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                    this.state = 2205;
                    this.match(CPP14Parser.Identifier);
                    }
                }

                this.state = 2208;
                this.match(CPP14Parser.Assign);
                this.state = 2209;
                this.typeid();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2210;
                this.match(CPP14Parser.Typename);
                this.state = 2212;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 282, this.context) ) {
                case 1:
                    {
                    this.state = 2211;
                    this.match(CPP14Parser.Ellipsis);
                    }
                    break;
                }
                this.state = 2215;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 283, this.context) ) {
                case 1:
                    {
                    this.state = 2214;
                    this.match(CPP14Parser.Identifier);
                    }
                    break;
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2217;
                this.match(CPP14Parser.Typename);
                this.state = 2219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                    this.state = 2218;
                    this.match(CPP14Parser.Identifier);
                    }
                }

                this.state = 2221;
                this.match(CPP14Parser.Assign);
                this.state = 2222;
                this.typeid();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2223;
                this.match(CPP14Parser.Template);
                this.state = 2224;
                this.match(CPP14Parser.Less);
                this.state = 2225;
                this.templateparameterlist(0);
                this.state = 2226;
                this.match(CPP14Parser.Greater);
                this.state = 2227;
                this.match(CPP14Parser.Class);
                this.state = 2229;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 285, this.context) ) {
                case 1:
                    {
                    this.state = 2228;
                    this.match(CPP14Parser.Ellipsis);
                    }
                    break;
                }
                this.state = 2232;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 286, this.context) ) {
                case 1:
                    {
                    this.state = 2231;
                    this.match(CPP14Parser.Identifier);
                    }
                    break;
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2234;
                this.match(CPP14Parser.Template);
                this.state = 2235;
                this.match(CPP14Parser.Less);
                this.state = 2236;
                this.templateparameterlist(0);
                this.state = 2237;
                this.match(CPP14Parser.Greater);
                this.state = 2238;
                this.match(CPP14Parser.Class);
                this.state = 2240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                    this.state = 2239;
                    this.match(CPP14Parser.Identifier);
                    }
                }

                this.state = 2242;
                this.match(CPP14Parser.Assign);
                this.state = 2243;
                this.idexpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public simpletemplateid(): SimpletemplateidContext {
        let localContext = new SimpletemplateidContext(this.context, this.state);
        this.enterRule(localContext, 348, CPP14Parser.RULE_simpletemplateid);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2247;
            this.templatename();
            this.state = 2248;
            this.match(CPP14Parser.Less);
            this.state = 2250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1168832720) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1290288321) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507031161) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                {
                this.state = 2249;
                this.templateargumentlist(0);
                }
            }

            this.state = 2252;
            this.match(CPP14Parser.Greater);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public templateid(): TemplateidContext {
        let localContext = new TemplateidContext(this.context, this.state);
        this.enterRule(localContext, 350, CPP14Parser.RULE_templateid);
        let _la: number;
        try {
            this.state = 2269;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 292, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2254;
                this.simpletemplateid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2255;
                this.operatorfunctionid();
                this.state = 2256;
                this.match(CPP14Parser.Less);
                this.state = 2258;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1168832720) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1290288321) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507031161) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                    {
                    this.state = 2257;
                    this.templateargumentlist(0);
                    }
                }

                this.state = 2260;
                this.match(CPP14Parser.Greater);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2262;
                this.literaloperatorid();
                this.state = 2263;
                this.match(CPP14Parser.Less);
                this.state = 2265;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1168832720) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1290288321) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507031161) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 133181571) !== 0)) {
                    {
                    this.state = 2264;
                    this.templateargumentlist(0);
                    }
                }

                this.state = 2267;
                this.match(CPP14Parser.Greater);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public templatename(): TemplatenameContext {
        let localContext = new TemplatenameContext(this.context, this.state);
        this.enterRule(localContext, 352, CPP14Parser.RULE_templatename);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2271;
            this.match(CPP14Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public templateargumentlist(): TemplateargumentlistContext;
    public templateargumentlist(_p: number): TemplateargumentlistContext;
    public templateargumentlist(_p?: number): TemplateargumentlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TemplateargumentlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 354;
        this.enterRecursionRule(localContext, 354, CPP14Parser.RULE_templateargumentlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 2274;
            this.templateargument();
            this.state = 2276;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 293, this.context) ) {
            case 1:
                {
                this.state = 2275;
                this.match(CPP14Parser.Ellipsis);
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2286;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 295, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TemplateargumentlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_templateargumentlist);
                    this.state = 2278;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 2279;
                    this.match(CPP14Parser.Comma);
                    this.state = 2280;
                    this.templateargument();
                    this.state = 2282;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 294, this.context) ) {
                    case 1:
                        {
                        this.state = 2281;
                        this.match(CPP14Parser.Ellipsis);
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 2288;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 295, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public templateargument(): TemplateargumentContext {
        let localContext = new TemplateargumentContext(this.context, this.state);
        this.enterRule(localContext, 356, CPP14Parser.RULE_templateargument);
        try {
            this.state = 2292;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 296, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2289;
                this.typeid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2290;
                this.constantexpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2291;
                this.idexpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public typenamespecifier(): TypenamespecifierContext {
        let localContext = new TypenamespecifierContext(this.context, this.state);
        this.enterRule(localContext, 358, CPP14Parser.RULE_typenamespecifier);
        let _la: number;
        try {
            this.state = 2305;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 298, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2294;
                this.match(CPP14Parser.Typename);
                this.state = 2295;
                this.nestednamespecifier(0);
                this.state = 2296;
                this.match(CPP14Parser.Identifier);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2298;
                this.match(CPP14Parser.Typename);
                this.state = 2299;
                this.nestednamespecifier(0);
                this.state = 2301;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
                    {
                    this.state = 2300;
                    this.match(CPP14Parser.Template);
                    }
                }

                this.state = 2303;
                this.simpletemplateid();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public explicitinstantiation(): ExplicitinstantiationContext {
        let localContext = new ExplicitinstantiationContext(this.context, this.state);
        this.enterRule(localContext, 360, CPP14Parser.RULE_explicitinstantiation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2308;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 2307;
                this.match(CPP14Parser.Extern);
                }
            }

            this.state = 2310;
            this.match(CPP14Parser.Template);
            this.state = 2311;
            this.declaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public explicitspecialization(): ExplicitspecializationContext {
        let localContext = new ExplicitspecializationContext(this.context, this.state);
        this.enterRule(localContext, 362, CPP14Parser.RULE_explicitspecialization);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2313;
            this.match(CPP14Parser.Template);
            this.state = 2314;
            this.match(CPP14Parser.Less);
            this.state = 2315;
            this.match(CPP14Parser.Greater);
            this.state = 2316;
            this.declaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public tryblock(): TryblockContext {
        let localContext = new TryblockContext(this.context, this.state);
        this.enterRule(localContext, 364, CPP14Parser.RULE_tryblock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2318;
            this.match(CPP14Parser.Try);
            this.state = 2319;
            this.compoundstatement();
            this.state = 2320;
            this.handlerseq();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public functiontryblock(): FunctiontryblockContext {
        let localContext = new FunctiontryblockContext(this.context, this.state);
        this.enterRule(localContext, 366, CPP14Parser.RULE_functiontryblock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2322;
            this.match(CPP14Parser.Try);
            this.state = 2324;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 119) {
                {
                this.state = 2323;
                this.ctorinitializer();
                }
            }

            this.state = 2326;
            this.compoundstatement();
            this.state = 2327;
            this.handlerseq();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public handlerseq(): HandlerseqContext {
        let localContext = new HandlerseqContext(this.context, this.state);
        this.enterRule(localContext, 368, CPP14Parser.RULE_handlerseq);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2329;
            this.handler();
            this.state = 2331;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 301, this.context) ) {
            case 1:
                {
                this.state = 2330;
                this.handlerseq();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public handler(): HandlerContext {
        let localContext = new HandlerContext(this.context, this.state);
        this.enterRule(localContext, 370, CPP14Parser.RULE_handler);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2333;
            this.match(CPP14Parser.Catch);
            this.state = 2334;
            this.match(CPP14Parser.LeftParen);
            this.state = 2335;
            this.exceptiondeclaration();
            this.state = 2336;
            this.match(CPP14Parser.RightParen);
            this.state = 2337;
            this.compoundstatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public exceptiondeclaration(): ExceptiondeclarationContext {
        let localContext = new ExceptiondeclarationContext(this.context, this.state);
        this.enterRule(localContext, 372, CPP14Parser.RULE_exceptiondeclaration);
        let _la: number;
        try {
            this.state = 2353;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 305, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2340;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 2339;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 2342;
                this.typespecifierseq();
                this.state = 2343;
                this.declarator();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2346;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                    this.state = 2345;
                    this.attributespecifierseq(0);
                    }
                }

                this.state = 2348;
                this.typespecifierseq();
                this.state = 2350;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4357) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 25089) !== 0)) {
                    {
                    this.state = 2349;
                    this.abstractdeclarator();
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2352;
                this.match(CPP14Parser.Ellipsis);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public throwexpression(): ThrowexpressionContext {
        let localContext = new ThrowexpressionContext(this.context, this.state);
        this.enterRule(localContext, 374, CPP14Parser.RULE_throwexpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2355;
            this.match(CPP14Parser.Throw);
            this.state = 2357;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 306, this.context) ) {
            case 1:
                {
                this.state = 2356;
                this.assignmentexpression();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public exceptionspecification(): ExceptionspecificationContext {
        let localContext = new ExceptionspecificationContext(this.context, this.state);
        this.enterRule(localContext, 376, CPP14Parser.RULE_exceptionspecification);
        try {
            this.state = 2361;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Throw:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2359;
                this.dynamicexceptionspecification();
                }
                break;
            case CPP14Parser.Noexcept:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2360;
                this.noexceptspecification();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public dynamicexceptionspecification(): DynamicexceptionspecificationContext {
        let localContext = new DynamicexceptionspecificationContext(this.context, this.state);
        this.enterRule(localContext, 378, CPP14Parser.RULE_dynamicexceptionspecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2363;
            this.match(CPP14Parser.Throw);
            this.state = 2364;
            this.match(CPP14Parser.LeftParen);
            this.state = 2366;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 76085440) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 140509377) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 231) !== 0) || _la === 120 || _la === 125) {
                {
                this.state = 2365;
                this.typeidlist(0);
                }
            }

            this.state = 2368;
            this.match(CPP14Parser.RightParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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

    public typeidlist(): TypeidlistContext;
    public typeidlist(_p: number): TypeidlistContext;
    public typeidlist(_p?: number): TypeidlistContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeidlistContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 380;
        this.enterRecursionRule(localContext, 380, CPP14Parser.RULE_typeidlist, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 2371;
            this.typeid();
            this.state = 2373;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 309, this.context) ) {
            case 1:
                {
                this.state = 2372;
                this.match(CPP14Parser.Ellipsis);
                }
                break;
            }
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2383;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 311, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TypeidlistContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, CPP14Parser.RULE_typeidlist);
                    this.state = 2375;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 2376;
                    this.match(CPP14Parser.Comma);
                    this.state = 2377;
                    this.typeid();
                    this.state = 2379;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 310, this.context) ) {
                    case 1:
                        {
                        this.state = 2378;
                        this.match(CPP14Parser.Ellipsis);
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 2385;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 311, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public noexceptspecification(): NoexceptspecificationContext {
        let localContext = new NoexceptspecificationContext(this.context, this.state);
        this.enterRule(localContext, 382, CPP14Parser.RULE_noexceptspecification);
        try {
            this.state = 2392;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 312, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2386;
                this.match(CPP14Parser.Noexcept);
                this.state = 2387;
                this.match(CPP14Parser.LeftParen);
                this.state = 2388;
                this.constantexpression();
                this.state = 2389;
                this.match(CPP14Parser.RightParen);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2391;
                this.match(CPP14Parser.Noexcept);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public rightShift(): RightShiftContext {
        let localContext = new RightShiftContext(this.context, this.state);
        this.enterRule(localContext, 384, CPP14Parser.RULE_rightShift);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2394;
            this.match(CPP14Parser.Greater);
            this.state = 2395;
            this.match(CPP14Parser.Greater);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public rightShiftAssign(): RightShiftAssignContext {
        let localContext = new RightShiftAssignContext(this.context, this.state);
        this.enterRule(localContext, 386, CPP14Parser.RULE_rightShiftAssign);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2397;
            this.match(CPP14Parser.Greater);
            this.state = 2398;
            this.match(CPP14Parser.Greater);
            this.state = 2399;
            this.match(CPP14Parser.Assign);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public operator(): OperatorContext {
        let localContext = new OperatorContext(this.context, this.state);
        this.enterRule(localContext, 388, CPP14Parser.RULE_operator);
        try {
            this.state = 2449;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 313, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2401;
                this.match(CPP14Parser.New);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2402;
                this.match(CPP14Parser.Delete);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2403;
                this.match(CPP14Parser.New);
                this.state = 2404;
                this.match(CPP14Parser.LeftBracket);
                this.state = 2405;
                this.match(CPP14Parser.RightBracket);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2406;
                this.match(CPP14Parser.Delete);
                this.state = 2407;
                this.match(CPP14Parser.LeftBracket);
                this.state = 2408;
                this.match(CPP14Parser.RightBracket);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2409;
                this.match(CPP14Parser.Plus);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2410;
                this.match(CPP14Parser.Minus);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2411;
                this.match(CPP14Parser.Star);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2412;
                this.match(CPP14Parser.Div);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2413;
                this.match(CPP14Parser.Mod);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2414;
                this.match(CPP14Parser.Caret);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 2415;
                this.match(CPP14Parser.And);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 2416;
                this.match(CPP14Parser.Or);
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 2417;
                this.match(CPP14Parser.Tilde);
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 2418;
                this.match(CPP14Parser.Not);
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 2419;
                this.match(CPP14Parser.Assign);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 2420;
                this.match(CPP14Parser.Less);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 2421;
                this.match(CPP14Parser.Greater);
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 2422;
                this.match(CPP14Parser.PlusAssign);
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 2423;
                this.match(CPP14Parser.MinusAssign);
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 2424;
                this.match(CPP14Parser.StarAssign);
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 2425;
                this.match(CPP14Parser.DivAssign);
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 2426;
                this.match(CPP14Parser.ModAssign);
                }
                break;
            case 23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 2427;
                this.match(CPP14Parser.XorAssign);
                }
                break;
            case 24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 2428;
                this.match(CPP14Parser.AndAssign);
                }
                break;
            case 25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 2429;
                this.match(CPP14Parser.OrAssign);
                }
                break;
            case 26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 2430;
                this.match(CPP14Parser.LeftShift);
                }
                break;
            case 27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 2431;
                this.rightShift();
                }
                break;
            case 28:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 2432;
                this.rightShiftAssign();
                }
                break;
            case 29:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 2433;
                this.match(CPP14Parser.LeftShiftAssign);
                }
                break;
            case 30:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 2434;
                this.match(CPP14Parser.Equal);
                }
                break;
            case 31:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 2435;
                this.match(CPP14Parser.NotEqual);
                }
                break;
            case 32:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 2436;
                this.match(CPP14Parser.LessEqual);
                }
                break;
            case 33:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 2437;
                this.match(CPP14Parser.GreaterEqual);
                }
                break;
            case 34:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 2438;
                this.match(CPP14Parser.AndAnd);
                }
                break;
            case 35:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 2439;
                this.match(CPP14Parser.OrOr);
                }
                break;
            case 36:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 2440;
                this.match(CPP14Parser.PlusPlus);
                }
                break;
            case 37:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 2441;
                this.match(CPP14Parser.MinusMinus);
                }
                break;
            case 38:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 2442;
                this.match(CPP14Parser.Comma);
                }
                break;
            case 39:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 2443;
                this.match(CPP14Parser.ArrowStar);
                }
                break;
            case 40:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 2444;
                this.match(CPP14Parser.Arrow);
                }
                break;
            case 41:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 2445;
                this.match(CPP14Parser.LeftParen);
                this.state = 2446;
                this.match(CPP14Parser.RightParen);
                }
                break;
            case 42:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 2447;
                this.match(CPP14Parser.LeftBracket);
                this.state = 2448;
                this.match(CPP14Parser.RightBracket);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 390, CPP14Parser.RULE_literal);
        try {
            this.state = 2458;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CPP14Parser.Integerliteral:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2451;
                this.match(CPP14Parser.Integerliteral);
                }
                break;
            case CPP14Parser.Characterliteral:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2452;
                this.match(CPP14Parser.Characterliteral);
                }
                break;
            case CPP14Parser.Floatingliteral:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2453;
                this.match(CPP14Parser.Floatingliteral);
                }
                break;
            case CPP14Parser.Stringliteral:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2454;
                this.match(CPP14Parser.Stringliteral);
                }
                break;
            case CPP14Parser.False:
            case CPP14Parser.True:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2455;
                this.booleanliteral();
                }
                break;
            case CPP14Parser.Nullptr:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2456;
                this.pointerliteral();
                }
                break;
            case CPP14Parser.Userdefinedintegerliteral:
            case CPP14Parser.Userdefinedfloatingliteral:
            case CPP14Parser.Userdefinedstringliteral:
            case CPP14Parser.Userdefinedcharacterliteral:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2457;
                this.userdefinedliteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public booleanliteral(): BooleanliteralContext {
        let localContext = new BooleanliteralContext(this.context, this.state);
        this.enterRule(localContext, 392, CPP14Parser.RULE_booleanliteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2460;
            _la = this.tokenStream.LA(1);
            if(!(_la === 30 || _la === 65)) {
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
    public pointerliteral(): PointerliteralContext {
        let localContext = new PointerliteralContext(this.context, this.state);
        this.enterRule(localContext, 394, CPP14Parser.RULE_pointerliteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2462;
            this.match(CPP14Parser.Nullptr);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
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
    public userdefinedliteral(): UserdefinedliteralContext {
        let localContext = new UserdefinedliteralContext(this.context, this.state);
        this.enterRule(localContext, 396, CPP14Parser.RULE_userdefinedliteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2464;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 15) !== 0))) {
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 5:
            return this.nestednamespecifier_sempred(localContext as NestednamespecifierContext, predIndex);
        case 10:
            return this.capturelist_sempred(localContext as CapturelistContext, predIndex);
        case 15:
            return this.postfixexpression_sempred(localContext as PostfixexpressionContext, predIndex);
        case 24:
            return this.noptrnewdeclarator_sempred(localContext as NoptrnewdeclaratorContext, predIndex);
        case 29:
            return this.pmexpression_sempred(localContext as PmexpressionContext, predIndex);
        case 30:
            return this.multiplicativeexpression_sempred(localContext as MultiplicativeexpressionContext, predIndex);
        case 31:
            return this.additiveexpression_sempred(localContext as AdditiveexpressionContext, predIndex);
        case 32:
            return this.shiftexpression_sempred(localContext as ShiftexpressionContext, predIndex);
        case 33:
            return this.relationalexpression_sempred(localContext as RelationalexpressionContext, predIndex);
        case 34:
            return this.equalityexpression_sempred(localContext as EqualityexpressionContext, predIndex);
        case 35:
            return this.andexpression_sempred(localContext as AndexpressionContext, predIndex);
        case 36:
            return this.exclusiveorexpression_sempred(localContext as ExclusiveorexpressionContext, predIndex);
        case 37:
            return this.inclusiveorexpression_sempred(localContext as InclusiveorexpressionContext, predIndex);
        case 38:
            return this.logicalandexpression_sempred(localContext as LogicalandexpressionContext, predIndex);
        case 39:
            return this.logicalorexpression_sempred(localContext as LogicalorexpressionContext, predIndex);
        case 43:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 49:
            return this.statementseq_sempred(localContext as StatementseqContext, predIndex);
        case 58:
            return this.declarationseq_sempred(localContext as DeclarationseqContext, predIndex);
        case 85:
            return this.enumeratorlist_sempred(localContext as EnumeratorlistContext, predIndex);
        case 103:
            return this.attributespecifierseq_sempred(localContext as AttributespecifierseqContext, predIndex);
        case 106:
            return this.attributelist_sempred(localContext as AttributelistContext, predIndex);
        case 112:
            return this.balancedtokenseq_sempred(localContext as BalancedtokenseqContext, predIndex);
        case 114:
            return this.initdeclaratorlist_sempred(localContext as InitdeclaratorlistContext, predIndex);
        case 118:
            return this.noptrdeclarator_sempred(localContext as NoptrdeclaratorContext, predIndex);
        case 129:
            return this.noptrabstractdeclarator_sempred(localContext as NoptrabstractdeclaratorContext, predIndex);
        case 131:
            return this.noptrabstractpackdeclarator_sempred(localContext as NoptrabstractpackdeclaratorContext, predIndex);
        case 133:
            return this.parameterdeclarationlist_sempred(localContext as ParameterdeclarationlistContext, predIndex);
        case 140:
            return this.initializerlist_sempred(localContext as InitializerlistContext, predIndex);
        case 150:
            return this.memberdeclaratorlist_sempred(localContext as MemberdeclaratorlistContext, predIndex);
        case 152:
            return this.virtspecifierseq_sempred(localContext as VirtspecifierseqContext, predIndex);
        case 156:
            return this.basespecifierlist_sempred(localContext as BasespecifierlistContext, predIndex);
        case 171:
            return this.templateparameterlist_sempred(localContext as TemplateparameterlistContext, predIndex);
        case 177:
            return this.templateargumentlist_sempred(localContext as TemplateargumentlistContext, predIndex);
        case 190:
            return this.typeidlist_sempred(localContext as TypeidlistContext, predIndex);
        }
        return true;
    }
    private nestednamespecifier_sempred(localContext: NestednamespecifierContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        case 1:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private capturelist_sempred(localContext: CapturelistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private postfixexpression_sempred(localContext: PostfixexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 19);
        case 4:
            return this.precpred(this.context, 18);
        case 5:
            return this.precpred(this.context, 17);
        case 6:
            return this.precpred(this.context, 12);
        case 7:
            return this.precpred(this.context, 11);
        case 8:
            return this.precpred(this.context, 10);
        case 9:
            return this.precpred(this.context, 9);
        case 10:
            return this.precpred(this.context, 8);
        case 11:
            return this.precpred(this.context, 7);
        }
        return true;
    }
    private noptrnewdeclarator_sempred(localContext: NoptrnewdeclaratorContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 12:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private pmexpression_sempred(localContext: PmexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 13:
            return this.precpred(this.context, 2);
        case 14:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private multiplicativeexpression_sempred(localContext: MultiplicativeexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 15:
            return this.precpred(this.context, 3);
        case 16:
            return this.precpred(this.context, 2);
        case 17:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private additiveexpression_sempred(localContext: AdditiveexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 18:
            return this.precpred(this.context, 2);
        case 19:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private shiftexpression_sempred(localContext: ShiftexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 20:
            return this.precpred(this.context, 2);
        case 21:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private relationalexpression_sempred(localContext: RelationalexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 22:
            return this.precpred(this.context, 4);
        case 23:
            return this.precpred(this.context, 3);
        case 24:
            return this.precpred(this.context, 2);
        case 25:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private equalityexpression_sempred(localContext: EqualityexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 26:
            return this.precpred(this.context, 2);
        case 27:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private andexpression_sempred(localContext: AndexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 28:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private exclusiveorexpression_sempred(localContext: ExclusiveorexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 29:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private inclusiveorexpression_sempred(localContext: InclusiveorexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 30:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private logicalandexpression_sempred(localContext: LogicalandexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 31:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private logicalorexpression_sempred(localContext: LogicalorexpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 32:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 33:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private statementseq_sempred(localContext: StatementseqContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 34:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private declarationseq_sempred(localContext: DeclarationseqContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 35:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private enumeratorlist_sempred(localContext: EnumeratorlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 36:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private attributespecifierseq_sempred(localContext: AttributespecifierseqContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 37:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private attributelist_sempred(localContext: AttributelistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 38:
            return this.precpred(this.context, 3);
        case 39:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private balancedtokenseq_sempred(localContext: BalancedtokenseqContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 40:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private initdeclaratorlist_sempred(localContext: InitdeclaratorlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 41:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private noptrdeclarator_sempred(localContext: NoptrdeclaratorContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 42:
            return this.precpred(this.context, 3);
        case 43:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private noptrabstractdeclarator_sempred(localContext: NoptrabstractdeclaratorContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 44:
            return this.precpred(this.context, 5);
        case 45:
            return this.precpred(this.context, 3);
        }
        return true;
    }
    private noptrabstractpackdeclarator_sempred(localContext: NoptrabstractpackdeclaratorContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 46:
            return this.precpred(this.context, 3);
        case 47:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private parameterdeclarationlist_sempred(localContext: ParameterdeclarationlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 48:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private initializerlist_sempred(localContext: InitializerlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 49:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private memberdeclaratorlist_sempred(localContext: MemberdeclaratorlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 50:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private virtspecifierseq_sempred(localContext: VirtspecifierseqContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 51:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private basespecifierlist_sempred(localContext: BasespecifierlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 52:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private templateparameterlist_sempred(localContext: TemplateparameterlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 53:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private templateargumentlist_sempred(localContext: TemplateargumentlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 54:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private typeidlist_sempred(localContext: TypeidlistContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 55:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,143,2467,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,
        7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,
        2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,
        7,197,2,198,7,198,1,0,3,0,400,8,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,3,1,412,8,1,1,2,1,2,3,2,416,8,2,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,3,3,427,8,3,1,4,1,4,3,4,431,8,4,1,4,1,4,1,5,1,5,1,
        5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,446,8,5,1,5,1,5,1,5,1,5,1,
        5,3,5,453,8,5,1,5,1,5,1,5,5,5,458,8,5,10,5,12,5,461,9,5,1,6,1,6,
        3,6,465,8,6,1,6,1,6,1,7,1,7,3,7,471,8,7,1,7,1,7,1,8,1,8,1,8,1,8,
        1,8,1,8,3,8,481,8,8,1,9,1,9,1,10,1,10,1,10,3,10,488,8,10,1,10,1,
        10,1,10,1,10,3,10,494,8,10,5,10,496,8,10,10,10,12,10,499,9,10,1,
        11,1,11,3,11,503,8,11,1,12,1,12,1,12,1,12,3,12,509,8,12,1,13,1,13,
        1,13,1,13,1,13,3,13,516,8,13,1,14,1,14,1,14,1,14,3,14,522,8,14,1,
        14,3,14,525,8,14,1,14,3,14,528,8,14,1,14,3,14,531,8,14,1,15,1,15,
        1,15,1,15,1,15,3,15,538,8,15,1,15,1,15,1,15,1,15,1,15,3,15,545,8,
        15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
        15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
        15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
        15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,597,
        8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,3,15,612,8,15,1,15,1,15,1,15,1,15,3,15,618,8,15,1,15,1,15,1,
        15,1,15,3,15,624,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
        15,1,15,1,15,5,15,637,8,15,10,15,12,15,640,9,15,1,16,1,16,1,17,3,
        17,645,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
        17,1,17,1,17,3,17,660,8,17,1,17,1,17,1,17,1,17,3,17,666,8,17,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,3,18,696,8,18,1,19,1,19,1,20,3,20,701,8,20,1,20,1,20,3,20,705,
        8,20,1,20,1,20,3,20,709,8,20,1,20,3,20,712,8,20,1,20,1,20,3,20,716,
        8,20,1,20,1,20,1,20,1,20,3,20,722,8,20,3,20,724,8,20,1,21,1,21,1,
        21,1,21,1,22,1,22,3,22,732,8,22,1,23,1,23,3,23,736,8,23,1,23,3,23,
        739,8,23,1,24,1,24,1,24,1,24,1,24,3,24,746,8,24,1,24,1,24,1,24,1,
        24,1,24,3,24,753,8,24,5,24,755,8,24,10,24,12,24,758,9,24,1,25,1,
        25,3,25,762,8,25,1,25,1,25,3,25,766,8,25,1,26,3,26,769,8,26,1,26,
        1,26,1,26,3,26,774,8,26,1,26,1,26,1,26,1,26,3,26,780,8,26,1,27,1,
        27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,3,28,793,8,28,1,
        29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,5,29,804,8,29,10,29,12,
        29,807,9,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
        30,1,30,5,30,821,8,30,10,30,12,30,824,9,30,1,31,1,31,1,31,1,31,1,
        31,1,31,1,31,1,31,1,31,5,31,835,8,31,10,31,12,31,838,9,31,1,32,1,
        32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,850,8,32,10,32,12,
        32,853,9,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,
        33,1,33,1,33,1,33,1,33,5,33,870,8,33,10,33,12,33,873,9,33,1,34,1,
        34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,5,34,884,8,34,10,34,12,34,
        887,9,34,1,35,1,35,1,35,1,35,1,35,1,35,5,35,895,8,35,10,35,12,35,
        898,9,35,1,36,1,36,1,36,1,36,1,36,1,36,5,36,906,8,36,10,36,12,36,
        909,9,36,1,37,1,37,1,37,1,37,1,37,1,37,5,37,917,8,37,10,37,12,37,
        920,9,37,1,38,1,38,1,38,1,38,1,38,1,38,5,38,928,8,38,10,38,12,38,
        931,9,38,1,39,1,39,1,39,1,39,1,39,1,39,5,39,939,8,39,10,39,12,39,
        942,9,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,951,8,40,1,41,1,
        41,1,41,1,41,1,41,1,41,3,41,959,8,41,1,42,1,42,1,42,1,42,1,42,1,
        42,1,42,1,42,1,42,1,42,1,42,3,42,972,8,42,1,43,1,43,1,43,1,43,1,
        43,1,43,5,43,980,8,43,10,43,12,43,983,9,43,1,44,1,44,1,45,1,45,3,
        45,989,8,45,1,45,1,45,3,45,993,8,45,1,45,1,45,3,45,997,8,45,1,45,
        1,45,3,45,1001,8,45,1,45,1,45,3,45,1005,8,45,1,45,1,45,1,45,3,45,
        1010,8,45,1,45,3,45,1013,8,45,1,46,3,46,1016,8,46,1,46,1,46,1,46,
        1,46,3,46,1022,8,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,1030,8,46,
        1,46,1,46,1,46,3,46,1035,8,46,1,47,3,47,1038,8,47,1,47,1,47,1,48,
        1,48,3,48,1044,8,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,5,49,1053,
        8,49,10,49,12,49,1056,9,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,
        50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,
        50,1078,8,50,1,51,1,51,3,51,1082,8,51,1,51,1,51,1,51,1,51,1,51,1,
        51,3,51,1090,8,51,1,51,1,51,1,51,1,51,3,51,1096,8,51,1,52,1,52,1,
        52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,
        52,1,52,1,52,3,52,1116,8,52,1,52,1,52,3,52,1120,8,52,1,52,1,52,1,
        52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,1133,8,52,1,53,1,
        53,3,53,1137,8,53,1,54,3,54,1140,8,54,1,54,1,54,1,54,1,55,1,55,3,
        55,1147,8,55,1,56,1,56,1,56,1,56,1,56,1,56,3,56,1155,8,56,1,56,1,
        56,1,56,1,56,1,56,1,56,1,56,1,56,3,56,1165,8,56,1,57,1,57,1,58,1,
        58,1,58,1,58,1,58,5,58,1174,8,58,10,58,12,58,1177,9,58,1,59,1,59,
        1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1188,8,59,1,60,1,60,1,60,
        1,60,1,60,1,60,1,60,1,60,3,60,1198,8,60,1,61,1,61,1,61,3,61,1203,
        8,61,1,61,1,61,1,61,1,61,1,62,3,62,1210,8,62,1,62,3,62,1213,8,62,
        1,62,1,62,1,62,3,62,1218,8,62,1,62,1,62,1,62,3,62,1223,8,62,1,63,
        1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,65,1,65,1,65,1,66,
        1,66,1,66,1,66,1,66,1,66,3,66,1244,8,66,1,67,1,67,3,67,1248,8,67,
        1,67,1,67,1,67,3,67,1253,8,67,1,68,1,68,1,69,1,69,1,70,1,70,1,71,
        1,71,1,71,3,71,1264,8,71,1,72,1,72,1,72,1,72,3,72,1270,8,72,1,73,
        1,73,3,73,1274,8,73,1,73,1,73,1,73,3,73,1279,8,73,1,74,1,74,3,74,
        1283,8,74,1,74,1,74,1,74,3,74,1288,8,74,1,75,3,75,1291,8,75,1,75,
        1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
        1,75,1,75,1,75,1,75,1,75,1,75,3,75,1313,8,75,1,76,1,76,1,76,1,76,
        3,76,1319,8,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,
        1330,8,77,1,78,1,78,3,78,1334,8,78,1,78,3,78,1337,8,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,3,78,1347,8,78,1,78,1,78,1,78,1,78,
        3,78,1353,8,78,1,78,3,78,1356,8,78,1,79,1,79,1,80,1,80,1,80,3,80,
        1363,8,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,1373,8,80,
        1,81,1,81,3,81,1377,8,81,1,81,3,81,1380,8,81,1,81,3,81,1383,8,81,
        1,81,1,81,3,81,1387,8,81,1,81,1,81,1,81,3,81,1392,8,81,3,81,1394,
        8,81,1,82,1,82,3,82,1398,8,82,1,82,1,82,3,82,1402,8,82,1,82,1,82,
        1,83,1,83,1,83,1,83,1,83,3,83,1411,8,83,1,84,1,84,1,84,1,85,1,85,
        1,85,1,85,1,85,1,85,5,85,1422,8,85,10,85,12,85,1425,9,85,1,86,1,
        86,1,86,1,86,1,86,3,86,1432,8,86,1,87,1,87,1,88,1,88,3,88,1438,8,
        88,1,89,1,89,1,90,1,90,3,90,1444,8,90,1,91,1,91,3,91,1448,8,91,1,
        92,3,92,1451,8,92,1,92,1,92,1,92,1,92,1,92,1,92,1,93,3,93,1460,8,
        93,1,93,1,93,1,93,1,93,1,93,1,93,1,94,3,94,1469,8,94,1,94,1,94,1,
        94,1,94,1,94,1,95,3,95,1477,8,95,1,96,1,96,1,97,1,97,1,97,1,97,1,
        97,1,97,1,98,3,98,1488,8,98,1,98,1,98,1,99,1,99,3,99,1494,8,99,1,
        99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1505,8,99,1,100,
        3,100,1508,8,100,1,100,1,100,1,100,3,100,1513,8,100,1,100,1,100,
        1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,
        3,102,1528,8,102,1,102,1,102,1,102,1,102,3,102,1534,8,102,1,103,
        1,103,1,103,1,103,1,103,5,103,1541,8,103,10,103,12,103,1544,9,103,
        1,104,1,104,1,104,1,104,1,104,1,104,1,104,3,104,1553,8,104,1,105,
        1,105,1,105,1,105,3,105,1559,8,105,1,105,1,105,1,105,1,105,1,105,
        1,105,3,105,1567,8,105,1,105,1,105,3,105,1571,8,105,1,106,1,106,
        3,106,1575,8,106,1,106,1,106,1,106,3,106,1580,8,106,1,106,1,106,
        1,106,3,106,1585,8,106,1,106,1,106,1,106,1,106,1,106,5,106,1592,
        8,106,10,106,12,106,1595,9,106,1,107,1,107,3,107,1599,8,107,1,108,
        1,108,3,108,1603,8,108,1,109,1,109,1,109,1,109,1,110,1,110,1,111,
        1,111,1,111,1,111,1,112,1,112,3,112,1617,8,112,1,112,1,112,5,112,
        1621,8,112,10,112,12,112,1624,9,112,1,113,1,113,1,113,1,113,1,113,
        1,113,1,113,1,113,1,113,1,113,1,113,1,113,3,113,1638,8,113,1,114,
        1,114,1,114,1,114,1,114,1,114,5,114,1646,8,114,10,114,12,114,1649,
        9,114,1,115,1,115,3,115,1653,8,115,1,116,1,116,1,116,1,116,1,116,
        3,116,1660,8,116,1,117,1,117,1,117,1,117,3,117,1666,8,117,1,118,
        1,118,1,118,3,118,1671,8,118,1,118,1,118,1,118,1,118,3,118,1677,
        8,118,1,118,1,118,1,118,1,118,1,118,3,118,1684,8,118,1,118,1,118,
        3,118,1688,8,118,5,118,1690,8,118,10,118,12,118,1693,9,118,1,119,
        1,119,1,119,1,119,3,119,1699,8,119,1,119,3,119,1702,8,119,1,119,
        3,119,1705,8,119,1,119,3,119,1708,8,119,1,120,1,120,1,120,3,120,
        1713,8,120,1,121,1,121,3,121,1717,8,121,1,121,3,121,1720,8,121,1,
        121,1,121,3,121,1724,8,121,1,121,1,121,3,121,1728,8,121,1,121,1,
        121,1,121,3,121,1733,8,121,1,121,3,121,1736,8,121,3,121,1738,8,121,
        1,122,1,122,3,122,1742,8,122,1,123,1,123,1,124,1,124,1,125,3,125,
        1749,8,125,1,125,1,125,1,126,1,126,3,126,1755,8,126,1,127,1,127,
        3,127,1759,8,127,1,127,1,127,1,127,1,127,3,127,1765,8,127,1,128,
        1,128,1,128,3,128,1770,8,128,3,128,1772,8,128,1,129,1,129,1,129,
        1,129,3,129,1778,8,129,1,129,1,129,3,129,1782,8,129,1,129,1,129,
        1,129,1,129,3,129,1788,8,129,1,129,1,129,1,129,1,129,1,129,3,129,
        1795,8,129,1,129,1,129,3,129,1799,8,129,5,129,1801,8,129,10,129,
        12,129,1804,9,129,1,130,1,130,1,130,1,130,3,130,1810,8,130,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,3,131,1820,8,131,1,131,
        1,131,3,131,1824,8,131,5,131,1826,8,131,10,131,12,131,1829,9,131,
        1,132,3,132,1832,8,132,1,132,3,132,1835,8,132,1,132,1,132,1,132,
        1,132,3,132,1841,8,132,1,133,1,133,1,133,1,133,1,133,1,133,5,133,
        1849,8,133,10,133,12,133,1852,9,133,1,134,3,134,1855,8,134,1,134,
        1,134,1,134,1,134,3,134,1861,8,134,1,134,1,134,1,134,1,134,1,134,
        1,134,3,134,1869,8,134,1,134,1,134,3,134,1873,8,134,1,134,3,134,
        1876,8,134,1,134,1,134,3,134,1880,8,134,1,134,1,134,1,134,3,134,
        1885,8,134,1,135,3,135,1888,8,135,1,135,3,135,1891,8,135,1,135,1,
        135,3,135,1895,8,135,1,135,1,135,1,136,3,136,1900,8,136,1,136,1,
        136,1,136,1,136,1,136,1,136,1,136,1,136,3,136,1910,8,136,1,137,1,
        137,1,137,1,137,1,137,3,137,1917,8,137,1,138,1,138,1,138,3,138,1922,
        8,138,1,139,1,139,3,139,1926,8,139,1,140,1,140,1,140,3,140,1931,
        8,140,1,140,1,140,1,140,1,140,3,140,1937,8,140,5,140,1939,8,140,
        10,140,12,140,1942,9,140,1,141,1,141,1,141,3,141,1947,8,141,1,141,
        1,141,1,141,1,141,3,141,1953,8,141,1,142,1,142,3,142,1957,8,142,
        1,143,1,143,1,143,3,143,1962,8,143,1,143,1,143,1,144,1,144,3,144,
        1968,8,144,1,144,1,144,3,144,1972,8,144,1,144,3,144,1975,8,144,1,
        144,1,144,3,144,1979,8,144,1,144,3,144,1982,8,144,3,144,1984,8,144,
        1,145,3,145,1987,8,145,1,145,1,145,1,146,1,146,1,147,1,147,1,148,
        1,148,3,148,1997,8,148,1,148,1,148,1,148,3,148,2002,8,148,3,148,
        2004,8,148,1,149,3,149,2007,8,149,1,149,3,149,2010,8,149,1,149,3,
        149,2013,8,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,3,149,2022,
        8,149,1,150,1,150,1,150,1,150,1,150,1,150,5,150,2030,8,150,10,150,
        12,150,2033,9,150,1,151,1,151,3,151,2037,8,151,1,151,3,151,2040,
        8,151,1,151,1,151,3,151,2044,8,151,1,151,3,151,2047,8,151,1,151,
        3,151,2050,8,151,1,151,1,151,3,151,2054,8,151,1,152,1,152,1,152,
        1,152,1,152,5,152,2061,8,152,10,152,12,152,2064,9,152,1,153,1,153,
        1,154,1,154,1,154,1,155,1,155,1,155,1,156,1,156,1,156,3,156,2077,
        8,156,1,156,1,156,1,156,1,156,3,156,2083,8,156,5,156,2085,8,156,
        10,156,12,156,2088,9,156,1,157,3,157,2091,8,157,1,157,1,157,3,157,
        2095,8,157,1,157,1,157,3,157,2099,8,157,1,157,1,157,3,157,2103,8,
        157,1,157,1,157,3,157,2107,8,157,1,157,1,157,3,157,2111,8,157,1,
        158,3,158,2114,8,158,1,158,1,158,3,158,2118,8,158,1,159,1,159,1,
        160,1,160,1,161,1,161,1,161,1,162,1,162,3,162,2129,8,162,1,163,1,
        163,3,163,2133,8,163,1,164,1,164,1,164,1,165,1,165,3,165,2140,8,
        165,1,165,1,165,3,165,2144,8,165,1,165,1,165,1,165,3,165,2149,8,
        165,1,166,1,166,1,166,3,166,2154,8,166,1,166,1,166,1,166,1,166,1,
        166,3,166,2161,8,166,1,167,1,167,3,167,2165,8,167,1,168,1,168,1,
        168,1,169,1,169,1,169,1,169,1,169,3,169,2175,8,169,1,170,1,170,1,
        170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,171,5,171,
        2189,8,171,10,171,12,171,2192,9,171,1,172,1,172,3,172,2196,8,172,
        1,173,1,173,3,173,2200,8,173,1,173,3,173,2203,8,173,1,173,1,173,
        3,173,2207,8,173,1,173,1,173,1,173,1,173,3,173,2213,8,173,1,173,
        3,173,2216,8,173,1,173,1,173,3,173,2220,8,173,1,173,1,173,1,173,
        1,173,1,173,1,173,1,173,1,173,3,173,2230,8,173,1,173,3,173,2233,
        8,173,1,173,1,173,1,173,1,173,1,173,1,173,3,173,2241,8,173,1,173,
        1,173,1,173,3,173,2246,8,173,1,174,1,174,1,174,3,174,2251,8,174,
        1,174,1,174,1,175,1,175,1,175,1,175,3,175,2259,8,175,1,175,1,175,
        1,175,1,175,1,175,3,175,2266,8,175,1,175,1,175,3,175,2270,8,175,
        1,176,1,176,1,177,1,177,1,177,3,177,2277,8,177,1,177,1,177,1,177,
        1,177,3,177,2283,8,177,5,177,2285,8,177,10,177,12,177,2288,9,177,
        1,178,1,178,1,178,3,178,2293,8,178,1,179,1,179,1,179,1,179,1,179,
        1,179,1,179,3,179,2302,8,179,1,179,1,179,3,179,2306,8,179,1,180,
        3,180,2309,8,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,1,181,
        1,182,1,182,1,182,1,182,1,183,1,183,3,183,2325,8,183,1,183,1,183,
        1,183,1,184,1,184,3,184,2332,8,184,1,185,1,185,1,185,1,185,1,185,
        1,185,1,186,3,186,2341,8,186,1,186,1,186,1,186,1,186,3,186,2347,
        8,186,1,186,1,186,3,186,2351,8,186,1,186,3,186,2354,8,186,1,187,
        1,187,3,187,2358,8,187,1,188,1,188,3,188,2362,8,188,1,189,1,189,
        1,189,3,189,2367,8,189,1,189,1,189,1,190,1,190,1,190,3,190,2374,
        8,190,1,190,1,190,1,190,1,190,3,190,2380,8,190,5,190,2382,8,190,
        10,190,12,190,2385,9,190,1,191,1,191,1,191,1,191,1,191,1,191,3,191,
        2393,8,191,1,192,1,192,1,192,1,193,1,193,1,193,1,193,1,194,1,194,
        1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
        1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
        1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
        1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
        1,194,1,194,3,194,2450,8,194,1,195,1,195,1,195,1,195,1,195,1,195,
        1,195,3,195,2459,8,195,1,196,1,196,1,197,1,197,1,198,1,198,1,198,
        0,34,10,20,30,48,58,60,62,64,66,68,70,72,74,76,78,86,98,116,170,
        206,212,224,228,236,258,262,266,280,300,304,312,342,354,380,199,
        0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
        46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,
        90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
        126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
        158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,
        190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,
        222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,
        254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,
        286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,
        318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,
        350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,
        382,384,386,388,390,392,394,396,0,11,2,0,90,90,94,94,2,0,84,86,90,
        93,5,0,29,29,40,40,50,50,56,56,63,63,3,0,27,27,37,37,73,73,2,0,15,
        15,75,75,2,0,90,90,111,111,3,0,14,14,59,59,70,70,2,0,31,31,46,46,
        1,0,47,49,2,0,30,30,65,65,1,0,136,139,2756,0,399,1,0,0,0,2,411,1,
        0,0,0,4,415,1,0,0,0,6,426,1,0,0,0,8,428,1,0,0,0,10,445,1,0,0,0,12,
        462,1,0,0,0,14,468,1,0,0,0,16,480,1,0,0,0,18,482,1,0,0,0,20,484,
        1,0,0,0,22,502,1,0,0,0,24,508,1,0,0,0,26,515,1,0,0,0,28,517,1,0,
        0,0,30,596,1,0,0,0,32,641,1,0,0,0,34,665,1,0,0,0,36,695,1,0,0,0,
        38,697,1,0,0,0,40,723,1,0,0,0,42,725,1,0,0,0,44,729,1,0,0,0,46,738,
        1,0,0,0,48,740,1,0,0,0,50,765,1,0,0,0,52,779,1,0,0,0,54,781,1,0,
        0,0,56,792,1,0,0,0,58,794,1,0,0,0,60,808,1,0,0,0,62,825,1,0,0,0,
        64,839,1,0,0,0,66,854,1,0,0,0,68,874,1,0,0,0,70,888,1,0,0,0,72,899,
        1,0,0,0,74,910,1,0,0,0,76,921,1,0,0,0,78,932,1,0,0,0,80,950,1,0,
        0,0,82,958,1,0,0,0,84,971,1,0,0,0,86,973,1,0,0,0,88,984,1,0,0,0,
        90,1012,1,0,0,0,92,1034,1,0,0,0,94,1037,1,0,0,0,96,1041,1,0,0,0,
        98,1047,1,0,0,0,100,1077,1,0,0,0,102,1095,1,0,0,0,104,1132,1,0,0,
        0,106,1136,1,0,0,0,108,1139,1,0,0,0,110,1146,1,0,0,0,112,1164,1,
        0,0,0,114,1166,1,0,0,0,116,1168,1,0,0,0,118,1187,1,0,0,0,120,1197,
        1,0,0,0,122,1199,1,0,0,0,124,1222,1,0,0,0,126,1224,1,0,0,0,128,1232,
        1,0,0,0,130,1234,1,0,0,0,132,1243,1,0,0,0,134,1252,1,0,0,0,136,1254,
        1,0,0,0,138,1256,1,0,0,0,140,1258,1,0,0,0,142,1263,1,0,0,0,144,1269,
        1,0,0,0,146,1278,1,0,0,0,148,1287,1,0,0,0,150,1312,1,0,0,0,152,1318,
        1,0,0,0,154,1329,1,0,0,0,156,1355,1,0,0,0,158,1357,1,0,0,0,160,1372,
        1,0,0,0,162,1393,1,0,0,0,164,1395,1,0,0,0,166,1410,1,0,0,0,168,1412,
        1,0,0,0,170,1415,1,0,0,0,172,1431,1,0,0,0,174,1433,1,0,0,0,176,1437,
        1,0,0,0,178,1439,1,0,0,0,180,1443,1,0,0,0,182,1447,1,0,0,0,184,1450,
        1,0,0,0,186,1459,1,0,0,0,188,1468,1,0,0,0,190,1476,1,0,0,0,192,1478,
        1,0,0,0,194,1480,1,0,0,0,196,1487,1,0,0,0,198,1504,1,0,0,0,200,1507,
        1,0,0,0,202,1517,1,0,0,0,204,1533,1,0,0,0,206,1535,1,0,0,0,208,1552,
        1,0,0,0,210,1570,1,0,0,0,212,1579,1,0,0,0,214,1596,1,0,0,0,216,1602,
        1,0,0,0,218,1604,1,0,0,0,220,1608,1,0,0,0,222,1610,1,0,0,0,224,1614,
        1,0,0,0,226,1637,1,0,0,0,228,1639,1,0,0,0,230,1650,1,0,0,0,232,1659,
        1,0,0,0,234,1665,1,0,0,0,236,1676,1,0,0,0,238,1694,1,0,0,0,240,1709,
        1,0,0,0,242,1737,1,0,0,0,244,1739,1,0,0,0,246,1743,1,0,0,0,248,1745,
        1,0,0,0,250,1748,1,0,0,0,252,1752,1,0,0,0,254,1764,1,0,0,0,256,1771,
        1,0,0,0,258,1787,1,0,0,0,260,1809,1,0,0,0,262,1811,1,0,0,0,264,1840,
        1,0,0,0,266,1842,1,0,0,0,268,1884,1,0,0,0,270,1887,1,0,0,0,272,1909,
        1,0,0,0,274,1916,1,0,0,0,276,1921,1,0,0,0,278,1925,1,0,0,0,280,1927,
        1,0,0,0,282,1952,1,0,0,0,284,1956,1,0,0,0,286,1958,1,0,0,0,288,1983,
        1,0,0,0,290,1986,1,0,0,0,292,1990,1,0,0,0,294,1992,1,0,0,0,296,2003,
        1,0,0,0,298,2021,1,0,0,0,300,2023,1,0,0,0,302,2053,1,0,0,0,304,2055,
        1,0,0,0,306,2065,1,0,0,0,308,2067,1,0,0,0,310,2070,1,0,0,0,312,2073,
        1,0,0,0,314,2110,1,0,0,0,316,2117,1,0,0,0,318,2119,1,0,0,0,320,2121,
        1,0,0,0,322,2123,1,0,0,0,324,2126,1,0,0,0,326,2130,1,0,0,0,328,2134,
        1,0,0,0,330,2148,1,0,0,0,332,2160,1,0,0,0,334,2164,1,0,0,0,336,2166,
        1,0,0,0,338,2174,1,0,0,0,340,2176,1,0,0,0,342,2182,1,0,0,0,344,2195,
        1,0,0,0,346,2245,1,0,0,0,348,2247,1,0,0,0,350,2269,1,0,0,0,352,2271,
        1,0,0,0,354,2273,1,0,0,0,356,2292,1,0,0,0,358,2305,1,0,0,0,360,2308,
        1,0,0,0,362,2313,1,0,0,0,364,2318,1,0,0,0,366,2322,1,0,0,0,368,2329,
        1,0,0,0,370,2333,1,0,0,0,372,2353,1,0,0,0,374,2355,1,0,0,0,376,2361,
        1,0,0,0,378,2363,1,0,0,0,380,2370,1,0,0,0,382,2392,1,0,0,0,384,2394,
        1,0,0,0,386,2397,1,0,0,0,388,2449,1,0,0,0,390,2458,1,0,0,0,392,2460,
        1,0,0,0,394,2462,1,0,0,0,396,2464,1,0,0,0,398,400,3,116,58,0,399,
        398,1,0,0,0,399,400,1,0,0,0,400,401,1,0,0,0,401,402,5,0,0,1,402,
        1,1,0,0,0,403,412,3,390,195,0,404,412,5,62,0,0,405,406,5,78,0,0,
        406,407,3,86,43,0,407,408,5,79,0,0,408,412,1,0,0,0,409,412,3,4,2,
        0,410,412,3,12,6,0,411,403,1,0,0,0,411,404,1,0,0,0,411,405,1,0,0,
        0,411,409,1,0,0,0,411,410,1,0,0,0,412,3,1,0,0,0,413,416,3,6,3,0,
        414,416,3,8,4,0,415,413,1,0,0,0,415,414,1,0,0,0,416,5,1,0,0,0,417,
        427,5,125,0,0,418,427,3,336,168,0,419,427,3,322,161,0,420,427,3,
        338,169,0,421,422,5,92,0,0,422,427,3,284,142,0,423,424,5,92,0,0,
        424,427,3,154,77,0,425,427,3,350,175,0,426,417,1,0,0,0,426,418,1,
        0,0,0,426,419,1,0,0,0,426,420,1,0,0,0,426,421,1,0,0,0,426,423,1,
        0,0,0,426,425,1,0,0,0,427,7,1,0,0,0,428,430,3,10,5,0,429,431,5,61,
        0,0,430,429,1,0,0,0,430,431,1,0,0,0,431,432,1,0,0,0,432,433,3,6,
        3,0,433,9,1,0,0,0,434,435,6,5,-1,0,435,446,5,120,0,0,436,437,3,152,
        76,0,437,438,5,120,0,0,438,446,1,0,0,0,439,440,3,176,88,0,440,441,
        5,120,0,0,441,446,1,0,0,0,442,443,3,154,77,0,443,444,5,120,0,0,444,
        446,1,0,0,0,445,434,1,0,0,0,445,436,1,0,0,0,445,439,1,0,0,0,445,
        442,1,0,0,0,446,459,1,0,0,0,447,448,10,2,0,0,448,449,5,125,0,0,449,
        458,5,120,0,0,450,452,10,1,0,0,451,453,5,61,0,0,452,451,1,0,0,0,
        452,453,1,0,0,0,453,454,1,0,0,0,454,455,3,348,174,0,455,456,5,120,
        0,0,456,458,1,0,0,0,457,447,1,0,0,0,457,450,1,0,0,0,458,461,1,0,
        0,0,459,457,1,0,0,0,459,460,1,0,0,0,460,11,1,0,0,0,461,459,1,0,0,
        0,462,464,3,14,7,0,463,465,3,28,14,0,464,463,1,0,0,0,464,465,1,0,
        0,0,465,466,1,0,0,0,466,467,3,96,48,0,467,13,1,0,0,0,468,470,5,80,
        0,0,469,471,3,16,8,0,470,469,1,0,0,0,470,471,1,0,0,0,471,472,1,0,
        0,0,472,473,5,81,0,0,473,15,1,0,0,0,474,481,3,18,9,0,475,481,3,20,
        10,0,476,477,3,18,9,0,477,478,5,115,0,0,478,479,3,20,10,0,479,481,
        1,0,0,0,480,474,1,0,0,0,480,475,1,0,0,0,480,476,1,0,0,0,481,17,1,
        0,0,0,482,483,7,0,0,0,483,19,1,0,0,0,484,485,6,10,-1,0,485,487,3,
        22,11,0,486,488,5,124,0,0,487,486,1,0,0,0,487,488,1,0,0,0,488,497,
        1,0,0,0,489,490,10,1,0,0,490,491,5,115,0,0,491,493,3,22,11,0,492,
        494,5,124,0,0,493,492,1,0,0,0,493,494,1,0,0,0,494,496,1,0,0,0,495,
        489,1,0,0,0,496,499,1,0,0,0,497,495,1,0,0,0,497,498,1,0,0,0,498,
        21,1,0,0,0,499,497,1,0,0,0,500,503,3,24,12,0,501,503,3,26,13,0,502,
        500,1,0,0,0,502,501,1,0,0,0,503,23,1,0,0,0,504,509,5,125,0,0,505,
        506,5,90,0,0,506,509,5,125,0,0,507,509,5,62,0,0,508,504,1,0,0,0,
        508,505,1,0,0,0,508,507,1,0,0,0,509,25,1,0,0,0,510,511,5,125,0,0,
        511,516,3,274,137,0,512,513,5,90,0,0,513,514,5,125,0,0,514,516,3,
        274,137,0,515,510,1,0,0,0,515,512,1,0,0,0,516,27,1,0,0,0,517,518,
        5,78,0,0,518,519,3,264,132,0,519,521,5,79,0,0,520,522,5,40,0,0,521,
        520,1,0,0,0,521,522,1,0,0,0,522,524,1,0,0,0,523,525,3,376,188,0,
        524,523,1,0,0,0,524,525,1,0,0,0,525,527,1,0,0,0,526,528,3,206,103,
        0,527,526,1,0,0,0,527,528,1,0,0,0,528,530,1,0,0,0,529,531,3,240,
        120,0,530,529,1,0,0,0,530,531,1,0,0,0,531,29,1,0,0,0,532,533,6,15,
        -1,0,533,597,3,2,1,0,534,535,3,150,75,0,535,537,5,78,0,0,536,538,
        3,32,16,0,537,536,1,0,0,0,537,538,1,0,0,0,538,539,1,0,0,0,539,540,
        5,79,0,0,540,597,1,0,0,0,541,542,3,358,179,0,542,544,5,78,0,0,543,
        545,3,32,16,0,544,543,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,
        547,5,79,0,0,547,597,1,0,0,0,548,549,3,150,75,0,549,550,3,282,141,
        0,550,597,1,0,0,0,551,552,3,358,179,0,552,553,3,282,141,0,553,597,
        1,0,0,0,554,555,5,24,0,0,555,556,5,95,0,0,556,557,3,252,126,0,557,
        558,5,96,0,0,558,559,5,78,0,0,559,560,3,86,43,0,560,561,5,79,0,0,
        561,597,1,0,0,0,562,563,5,58,0,0,563,564,5,95,0,0,564,565,3,252,
        126,0,565,566,5,96,0,0,566,567,5,78,0,0,567,568,3,86,43,0,568,569,
        5,79,0,0,569,597,1,0,0,0,570,571,5,51,0,0,571,572,5,95,0,0,572,573,
        3,252,126,0,573,574,5,96,0,0,574,575,5,78,0,0,575,576,3,86,43,0,
        576,577,5,79,0,0,577,597,1,0,0,0,578,579,5,17,0,0,579,580,5,95,0,
        0,580,581,3,252,126,0,581,582,5,96,0,0,582,583,5,78,0,0,583,584,
        3,86,43,0,584,585,5,79,0,0,585,597,1,0,0,0,586,587,5,68,0,0,587,
        588,5,78,0,0,588,589,3,86,43,0,589,590,5,79,0,0,590,597,1,0,0,0,
        591,592,5,68,0,0,592,593,5,78,0,0,593,594,3,252,126,0,594,595,5,
        79,0,0,595,597,1,0,0,0,596,532,1,0,0,0,596,534,1,0,0,0,596,541,1,
        0,0,0,596,548,1,0,0,0,596,551,1,0,0,0,596,554,1,0,0,0,596,562,1,
        0,0,0,596,570,1,0,0,0,596,578,1,0,0,0,596,586,1,0,0,0,596,591,1,
        0,0,0,597,638,1,0,0,0,598,599,10,19,0,0,599,600,5,80,0,0,600,601,
        3,86,43,0,601,602,5,81,0,0,602,637,1,0,0,0,603,604,10,18,0,0,604,
        605,5,80,0,0,605,606,3,282,141,0,606,607,5,81,0,0,607,637,1,0,0,
        0,608,609,10,17,0,0,609,611,5,78,0,0,610,612,3,32,16,0,611,610,1,
        0,0,0,611,612,1,0,0,0,612,613,1,0,0,0,613,637,5,79,0,0,614,615,10,
        12,0,0,615,617,5,122,0,0,616,618,5,61,0,0,617,616,1,0,0,0,617,618,
        1,0,0,0,618,619,1,0,0,0,619,637,3,4,2,0,620,621,10,11,0,0,621,623,
        5,117,0,0,622,624,5,61,0,0,623,622,1,0,0,0,623,624,1,0,0,0,624,625,
        1,0,0,0,625,637,3,4,2,0,626,627,10,10,0,0,627,628,5,122,0,0,628,
        637,3,34,17,0,629,630,10,9,0,0,630,631,5,117,0,0,631,637,3,34,17,
        0,632,633,10,8,0,0,633,637,5,113,0,0,634,635,10,7,0,0,635,637,5,
        114,0,0,636,598,1,0,0,0,636,603,1,0,0,0,636,608,1,0,0,0,636,614,
        1,0,0,0,636,620,1,0,0,0,636,626,1,0,0,0,636,629,1,0,0,0,636,632,
        1,0,0,0,636,634,1,0,0,0,637,640,1,0,0,0,638,636,1,0,0,0,638,639,
        1,0,0,0,639,31,1,0,0,0,640,638,1,0,0,0,641,642,3,280,140,0,642,33,
        1,0,0,0,643,645,3,10,5,0,644,643,1,0,0,0,644,645,1,0,0,0,645,646,
        1,0,0,0,646,647,3,152,76,0,647,648,5,120,0,0,648,649,5,92,0,0,649,
        650,3,152,76,0,650,666,1,0,0,0,651,652,3,10,5,0,652,653,5,61,0,0,
        653,654,3,348,174,0,654,655,5,120,0,0,655,656,5,92,0,0,656,657,3,
        152,76,0,657,666,1,0,0,0,658,660,3,10,5,0,659,658,1,0,0,0,659,660,
        1,0,0,0,660,661,1,0,0,0,661,662,5,92,0,0,662,666,3,152,76,0,663,
        664,5,92,0,0,664,666,3,154,77,0,665,644,1,0,0,0,665,651,1,0,0,0,
        665,659,1,0,0,0,665,663,1,0,0,0,666,35,1,0,0,0,667,696,3,30,15,0,
        668,669,5,113,0,0,669,696,3,56,28,0,670,671,5,114,0,0,671,696,3,
        56,28,0,672,673,3,38,19,0,673,674,3,56,28,0,674,696,1,0,0,0,675,
        676,5,55,0,0,676,696,3,36,18,0,677,678,5,55,0,0,678,679,5,78,0,0,
        679,680,3,252,126,0,680,681,5,79,0,0,681,696,1,0,0,0,682,683,5,55,
        0,0,683,684,5,124,0,0,684,685,5,78,0,0,685,686,5,125,0,0,686,696,
        5,79,0,0,687,688,5,4,0,0,688,689,5,78,0,0,689,690,3,252,126,0,690,
        691,5,79,0,0,691,696,1,0,0,0,692,696,3,54,27,0,693,696,3,40,20,0,
        694,696,3,52,26,0,695,667,1,0,0,0,695,668,1,0,0,0,695,670,1,0,0,
        0,695,672,1,0,0,0,695,675,1,0,0,0,695,677,1,0,0,0,695,682,1,0,0,
        0,695,687,1,0,0,0,695,692,1,0,0,0,695,693,1,0,0,0,695,694,1,0,0,
        0,696,37,1,0,0,0,697,698,7,1,0,0,698,39,1,0,0,0,699,701,5,120,0,
        0,700,699,1,0,0,0,700,701,1,0,0,0,701,702,1,0,0,0,702,704,5,42,0,
        0,703,705,3,42,21,0,704,703,1,0,0,0,704,705,1,0,0,0,705,706,1,0,
        0,0,706,708,3,44,22,0,707,709,3,50,25,0,708,707,1,0,0,0,708,709,
        1,0,0,0,709,724,1,0,0,0,710,712,5,120,0,0,711,710,1,0,0,0,711,712,
        1,0,0,0,712,713,1,0,0,0,713,715,5,42,0,0,714,716,3,42,21,0,715,714,
        1,0,0,0,715,716,1,0,0,0,716,717,1,0,0,0,717,718,5,78,0,0,718,719,
        3,252,126,0,719,721,5,79,0,0,720,722,3,50,25,0,721,720,1,0,0,0,721,
        722,1,0,0,0,722,724,1,0,0,0,723,700,1,0,0,0,723,711,1,0,0,0,724,
        41,1,0,0,0,725,726,5,78,0,0,726,727,3,32,16,0,727,728,5,79,0,0,728,
        43,1,0,0,0,729,731,3,146,73,0,730,732,3,46,23,0,731,730,1,0,0,0,
        731,732,1,0,0,0,732,45,1,0,0,0,733,735,3,242,121,0,734,736,3,46,
        23,0,735,734,1,0,0,0,735,736,1,0,0,0,736,739,1,0,0,0,737,739,3,48,
        24,0,738,733,1,0,0,0,738,737,1,0,0,0,739,47,1,0,0,0,740,741,6,24,
        -1,0,741,742,5,80,0,0,742,743,3,86,43,0,743,745,5,81,0,0,744,746,
        3,206,103,0,745,744,1,0,0,0,745,746,1,0,0,0,746,756,1,0,0,0,747,
        748,10,1,0,0,748,749,5,80,0,0,749,750,3,88,44,0,750,752,5,81,0,0,
        751,753,3,206,103,0,752,751,1,0,0,0,752,753,1,0,0,0,753,755,1,0,
        0,0,754,747,1,0,0,0,755,758,1,0,0,0,756,754,1,0,0,0,756,757,1,0,
        0,0,757,49,1,0,0,0,758,756,1,0,0,0,759,761,5,78,0,0,760,762,3,32,
        16,0,761,760,1,0,0,0,761,762,1,0,0,0,762,763,1,0,0,0,763,766,5,79,
        0,0,764,766,3,282,141,0,765,759,1,0,0,0,765,764,1,0,0,0,766,51,1,
        0,0,0,767,769,5,120,0,0,768,767,1,0,0,0,768,769,1,0,0,0,769,770,
        1,0,0,0,770,771,5,21,0,0,771,780,3,56,28,0,772,774,5,120,0,0,773,
        772,1,0,0,0,773,774,1,0,0,0,774,775,1,0,0,0,775,776,5,21,0,0,776,
        777,5,80,0,0,777,778,5,81,0,0,778,780,3,56,28,0,779,768,1,0,0,0,
        779,773,1,0,0,0,780,53,1,0,0,0,781,782,5,43,0,0,782,783,5,78,0,0,
        783,784,3,86,43,0,784,785,5,79,0,0,785,55,1,0,0,0,786,793,3,36,18,
        0,787,788,5,78,0,0,788,789,3,252,126,0,789,790,5,79,0,0,790,791,
        3,56,28,0,791,793,1,0,0,0,792,786,1,0,0,0,792,787,1,0,0,0,793,57,
        1,0,0,0,794,795,6,29,-1,0,795,796,3,56,28,0,796,805,1,0,0,0,797,
        798,10,2,0,0,798,799,5,123,0,0,799,804,3,56,28,0,800,801,10,1,0,
        0,801,802,5,116,0,0,802,804,3,56,28,0,803,797,1,0,0,0,803,800,1,
        0,0,0,804,807,1,0,0,0,805,803,1,0,0,0,805,806,1,0,0,0,806,59,1,0,
        0,0,807,805,1,0,0,0,808,809,6,30,-1,0,809,810,3,58,29,0,810,822,
        1,0,0,0,811,812,10,3,0,0,812,813,5,86,0,0,813,821,3,58,29,0,814,
        815,10,2,0,0,815,816,5,87,0,0,816,821,3,58,29,0,817,818,10,1,0,0,
        818,819,5,88,0,0,819,821,3,58,29,0,820,811,1,0,0,0,820,814,1,0,0,
        0,820,817,1,0,0,0,821,824,1,0,0,0,822,820,1,0,0,0,822,823,1,0,0,
        0,823,61,1,0,0,0,824,822,1,0,0,0,825,826,6,31,-1,0,826,827,3,60,
        30,0,827,836,1,0,0,0,828,829,10,2,0,0,829,830,5,84,0,0,830,835,3,
        60,30,0,831,832,10,1,0,0,832,833,5,85,0,0,833,835,3,60,30,0,834,
        828,1,0,0,0,834,831,1,0,0,0,835,838,1,0,0,0,836,834,1,0,0,0,836,
        837,1,0,0,0,837,63,1,0,0,0,838,836,1,0,0,0,839,840,6,32,-1,0,840,
        841,3,62,31,0,841,851,1,0,0,0,842,843,10,2,0,0,843,844,5,105,0,0,
        844,850,3,62,31,0,845,846,10,1,0,0,846,847,3,384,192,0,847,848,3,
        62,31,0,848,850,1,0,0,0,849,842,1,0,0,0,849,845,1,0,0,0,850,853,
        1,0,0,0,851,849,1,0,0,0,851,852,1,0,0,0,852,65,1,0,0,0,853,851,1,
        0,0,0,854,855,6,33,-1,0,855,856,3,64,32,0,856,871,1,0,0,0,857,858,
        10,4,0,0,858,859,5,95,0,0,859,870,3,64,32,0,860,861,10,3,0,0,861,
        862,5,96,0,0,862,870,3,64,32,0,863,864,10,2,0,0,864,865,5,109,0,
        0,865,870,3,64,32,0,866,867,10,1,0,0,867,868,5,110,0,0,868,870,3,
        64,32,0,869,857,1,0,0,0,869,860,1,0,0,0,869,863,1,0,0,0,869,866,
        1,0,0,0,870,873,1,0,0,0,871,869,1,0,0,0,871,872,1,0,0,0,872,67,1,
        0,0,0,873,871,1,0,0,0,874,875,6,34,-1,0,875,876,3,66,33,0,876,885,
        1,0,0,0,877,878,10,2,0,0,878,879,5,107,0,0,879,884,3,66,33,0,880,
        881,10,1,0,0,881,882,5,108,0,0,882,884,3,66,33,0,883,877,1,0,0,0,
        883,880,1,0,0,0,884,887,1,0,0,0,885,883,1,0,0,0,885,886,1,0,0,0,
        886,69,1,0,0,0,887,885,1,0,0,0,888,889,6,35,-1,0,889,890,3,68,34,
        0,890,896,1,0,0,0,891,892,10,1,0,0,892,893,5,90,0,0,893,895,3,68,
        34,0,894,891,1,0,0,0,895,898,1,0,0,0,896,894,1,0,0,0,896,897,1,0,
        0,0,897,71,1,0,0,0,898,896,1,0,0,0,899,900,6,36,-1,0,900,901,3,70,
        35,0,901,907,1,0,0,0,902,903,10,1,0,0,903,904,5,89,0,0,904,906,3,
        70,35,0,905,902,1,0,0,0,906,909,1,0,0,0,907,905,1,0,0,0,907,908,
        1,0,0,0,908,73,1,0,0,0,909,907,1,0,0,0,910,911,6,37,-1,0,911,912,
        3,72,36,0,912,918,1,0,0,0,913,914,10,1,0,0,914,915,5,91,0,0,915,
        917,3,72,36,0,916,913,1,0,0,0,917,920,1,0,0,0,918,916,1,0,0,0,918,
        919,1,0,0,0,919,75,1,0,0,0,920,918,1,0,0,0,921,922,6,38,-1,0,922,
        923,3,74,37,0,923,929,1,0,0,0,924,925,10,1,0,0,925,926,5,111,0,0,
        926,928,3,74,37,0,927,924,1,0,0,0,928,931,1,0,0,0,929,927,1,0,0,
        0,929,930,1,0,0,0,930,77,1,0,0,0,931,929,1,0,0,0,932,933,6,39,-1,
        0,933,934,3,76,38,0,934,940,1,0,0,0,935,936,10,1,0,0,936,937,5,112,
        0,0,937,939,3,76,38,0,938,935,1,0,0,0,939,942,1,0,0,0,940,938,1,
        0,0,0,940,941,1,0,0,0,941,79,1,0,0,0,942,940,1,0,0,0,943,951,3,78,
        39,0,944,945,3,78,39,0,945,946,5,118,0,0,946,947,3,86,43,0,947,948,
        5,119,0,0,948,949,3,82,41,0,949,951,1,0,0,0,950,943,1,0,0,0,950,
        944,1,0,0,0,951,81,1,0,0,0,952,959,3,80,40,0,953,954,3,78,39,0,954,
        955,3,84,42,0,955,956,3,278,139,0,956,959,1,0,0,0,957,959,3,374,
        187,0,958,952,1,0,0,0,958,953,1,0,0,0,958,957,1,0,0,0,959,83,1,0,
        0,0,960,972,5,94,0,0,961,972,5,99,0,0,962,972,5,100,0,0,963,972,
        5,101,0,0,964,972,5,97,0,0,965,972,5,98,0,0,966,972,3,386,193,0,
        967,972,5,106,0,0,968,972,5,103,0,0,969,972,5,102,0,0,970,972,5,
        104,0,0,971,960,1,0,0,0,971,961,1,0,0,0,971,962,1,0,0,0,971,963,
        1,0,0,0,971,964,1,0,0,0,971,965,1,0,0,0,971,966,1,0,0,0,971,967,
        1,0,0,0,971,968,1,0,0,0,971,969,1,0,0,0,971,970,1,0,0,0,972,85,1,
        0,0,0,973,974,6,43,-1,0,974,975,3,82,41,0,975,981,1,0,0,0,976,977,
        10,1,0,0,977,978,5,115,0,0,978,980,3,82,41,0,979,976,1,0,0,0,980,
        983,1,0,0,0,981,979,1,0,0,0,981,982,1,0,0,0,982,87,1,0,0,0,983,981,
        1,0,0,0,984,985,3,80,40,0,985,89,1,0,0,0,986,1013,3,92,46,0,987,
        989,3,206,103,0,988,987,1,0,0,0,988,989,1,0,0,0,989,990,1,0,0,0,
        990,1013,3,94,47,0,991,993,3,206,103,0,992,991,1,0,0,0,992,993,1,
        0,0,0,993,994,1,0,0,0,994,1013,3,96,48,0,995,997,3,206,103,0,996,
        995,1,0,0,0,996,997,1,0,0,0,997,998,1,0,0,0,998,1013,3,100,50,0,
        999,1001,3,206,103,0,1000,999,1,0,0,0,1000,1001,1,0,0,0,1001,1002,
        1,0,0,0,1002,1013,3,104,52,0,1003,1005,3,206,103,0,1004,1003,1,0,
        0,0,1004,1005,1,0,0,0,1005,1006,1,0,0,0,1006,1013,3,112,56,0,1007,
        1013,3,114,57,0,1008,1010,3,206,103,0,1009,1008,1,0,0,0,1009,1010,
        1,0,0,0,1010,1011,1,0,0,0,1011,1013,3,364,182,0,1012,986,1,0,0,0,
        1012,988,1,0,0,0,1012,992,1,0,0,0,1012,996,1,0,0,0,1012,1000,1,0,
        0,0,1012,1004,1,0,0,0,1012,1007,1,0,0,0,1012,1009,1,0,0,0,1013,91,
        1,0,0,0,1014,1016,3,206,103,0,1015,1014,1,0,0,0,1015,1016,1,0,0,
        0,1016,1017,1,0,0,0,1017,1018,5,125,0,0,1018,1019,5,119,0,0,1019,
        1035,3,90,45,0,1020,1022,3,206,103,0,1021,1020,1,0,0,0,1021,1022,
        1,0,0,0,1022,1023,1,0,0,0,1023,1024,5,9,0,0,1024,1025,3,88,44,0,
        1025,1026,5,119,0,0,1026,1027,3,90,45,0,1027,1035,1,0,0,0,1028,1030,
        3,206,103,0,1029,1028,1,0,0,0,1029,1030,1,0,0,0,1030,1031,1,0,0,
        0,1031,1032,5,20,0,0,1032,1033,5,119,0,0,1033,1035,3,90,45,0,1034,
        1015,1,0,0,0,1034,1021,1,0,0,0,1034,1029,1,0,0,0,1035,93,1,0,0,0,
        1036,1038,3,86,43,0,1037,1036,1,0,0,0,1037,1038,1,0,0,0,1038,1039,
        1,0,0,0,1039,1040,5,121,0,0,1040,95,1,0,0,0,1041,1043,5,82,0,0,1042,
        1044,3,98,49,0,1043,1042,1,0,0,0,1043,1044,1,0,0,0,1044,1045,1,0,
        0,0,1045,1046,5,83,0,0,1046,97,1,0,0,0,1047,1048,6,49,-1,0,1048,
        1049,3,90,45,0,1049,1054,1,0,0,0,1050,1051,10,1,0,0,1051,1053,3,
        90,45,0,1052,1050,1,0,0,0,1053,1056,1,0,0,0,1054,1052,1,0,0,0,1054,
        1055,1,0,0,0,1055,99,1,0,0,0,1056,1054,1,0,0,0,1057,1058,5,36,0,
        0,1058,1059,5,78,0,0,1059,1060,3,102,51,0,1060,1061,5,79,0,0,1061,
        1062,3,90,45,0,1062,1078,1,0,0,0,1063,1064,5,36,0,0,1064,1065,5,
        78,0,0,1065,1066,3,102,51,0,1066,1067,5,79,0,0,1067,1068,3,90,45,
        0,1068,1069,5,25,0,0,1069,1070,3,90,45,0,1070,1078,1,0,0,0,1071,
        1072,5,60,0,0,1072,1073,5,78,0,0,1073,1074,3,102,51,0,1074,1075,
        5,79,0,0,1075,1076,3,90,45,0,1076,1078,1,0,0,0,1077,1057,1,0,0,0,
        1077,1063,1,0,0,0,1077,1071,1,0,0,0,1078,101,1,0,0,0,1079,1096,3,
        86,43,0,1080,1082,3,206,103,0,1081,1080,1,0,0,0,1081,1082,1,0,0,
        0,1082,1083,1,0,0,0,1083,1084,3,134,67,0,1084,1085,3,232,116,0,1085,
        1086,5,94,0,0,1086,1087,3,278,139,0,1087,1096,1,0,0,0,1088,1090,
        3,206,103,0,1089,1088,1,0,0,0,1089,1090,1,0,0,0,1090,1091,1,0,0,
        0,1091,1092,3,134,67,0,1092,1093,3,232,116,0,1093,1094,3,282,141,
        0,1094,1096,1,0,0,0,1095,1079,1,0,0,0,1095,1081,1,0,0,0,1095,1089,
        1,0,0,0,1096,103,1,0,0,0,1097,1098,5,77,0,0,1098,1099,5,78,0,0,1099,
        1100,3,102,51,0,1100,1101,5,79,0,0,1101,1102,3,90,45,0,1102,1133,
        1,0,0,0,1103,1104,5,22,0,0,1104,1105,3,90,45,0,1105,1106,5,77,0,
        0,1106,1107,5,78,0,0,1107,1108,3,86,43,0,1108,1109,5,79,0,0,1109,
        1110,5,121,0,0,1110,1133,1,0,0,0,1111,1112,5,33,0,0,1112,1113,5,
        78,0,0,1113,1115,3,106,53,0,1114,1116,3,102,51,0,1115,1114,1,0,0,
        0,1115,1116,1,0,0,0,1116,1117,1,0,0,0,1117,1119,5,121,0,0,1118,1120,
        3,86,43,0,1119,1118,1,0,0,0,1119,1120,1,0,0,0,1120,1121,1,0,0,0,
        1121,1122,5,79,0,0,1122,1123,3,90,45,0,1123,1133,1,0,0,0,1124,1125,
        5,33,0,0,1125,1126,5,78,0,0,1126,1127,3,108,54,0,1127,1128,5,119,
        0,0,1128,1129,3,110,55,0,1129,1130,5,79,0,0,1130,1131,3,90,45,0,
        1131,1133,1,0,0,0,1132,1097,1,0,0,0,1132,1103,1,0,0,0,1132,1111,
        1,0,0,0,1132,1124,1,0,0,0,1133,105,1,0,0,0,1134,1137,3,94,47,0,1135,
        1137,3,124,62,0,1136,1134,1,0,0,0,1136,1135,1,0,0,0,1137,107,1,0,
        0,0,1138,1140,3,206,103,0,1139,1138,1,0,0,0,1139,1140,1,0,0,0,1140,
        1141,1,0,0,0,1141,1142,3,134,67,0,1142,1143,3,232,116,0,1143,109,
        1,0,0,0,1144,1147,3,86,43,0,1145,1147,3,282,141,0,1146,1144,1,0,
        0,0,1146,1145,1,0,0,0,1147,111,1,0,0,0,1148,1149,5,8,0,0,1149,1165,
        5,121,0,0,1150,1151,5,18,0,0,1151,1165,5,121,0,0,1152,1154,5,52,
        0,0,1153,1155,3,86,43,0,1154,1153,1,0,0,0,1154,1155,1,0,0,0,1155,
        1156,1,0,0,0,1156,1165,5,121,0,0,1157,1158,5,52,0,0,1158,1159,3,
        282,141,0,1159,1160,5,121,0,0,1160,1165,1,0,0,0,1161,1162,5,35,0,
        0,1162,1163,5,125,0,0,1163,1165,5,121,0,0,1164,1148,1,0,0,0,1164,
        1150,1,0,0,0,1164,1152,1,0,0,0,1164,1157,1,0,0,0,1164,1161,1,0,0,
        0,1165,113,1,0,0,0,1166,1167,3,120,60,0,1167,115,1,0,0,0,1168,1169,
        6,58,-1,0,1169,1170,3,118,59,0,1170,1175,1,0,0,0,1171,1172,10,1,
        0,0,1172,1174,3,118,59,0,1173,1171,1,0,0,0,1174,1177,1,0,0,0,1175,
        1173,1,0,0,0,1175,1176,1,0,0,0,1176,117,1,0,0,0,1177,1175,1,0,0,
        0,1178,1188,3,120,60,0,1179,1188,3,270,135,0,1180,1188,3,340,170,
        0,1181,1188,3,360,180,0,1182,1188,3,362,181,0,1183,1188,3,204,102,
        0,1184,1188,3,180,90,0,1185,1188,3,128,64,0,1186,1188,3,130,65,0,
        1187,1178,1,0,0,0,1187,1179,1,0,0,0,1187,1180,1,0,0,0,1187,1181,
        1,0,0,0,1187,1182,1,0,0,0,1187,1183,1,0,0,0,1187,1184,1,0,0,0,1187,
        1185,1,0,0,0,1187,1186,1,0,0,0,1188,119,1,0,0,0,1189,1198,3,124,
        62,0,1190,1198,3,202,101,0,1191,1198,3,194,97,0,1192,1198,3,198,
        99,0,1193,1198,3,200,100,0,1194,1198,3,126,63,0,1195,1198,3,122,
        61,0,1196,1198,3,164,82,0,1197,1189,1,0,0,0,1197,1190,1,0,0,0,1197,
        1191,1,0,0,0,1197,1192,1,0,0,0,1197,1193,1,0,0,0,1197,1194,1,0,0,
        0,1197,1195,1,0,0,0,1197,1196,1,0,0,0,1198,121,1,0,0,0,1199,1200,
        5,72,0,0,1200,1202,5,125,0,0,1201,1203,3,206,103,0,1202,1201,1,0,
        0,0,1202,1203,1,0,0,0,1203,1204,1,0,0,0,1204,1205,5,94,0,0,1205,
        1206,3,252,126,0,1206,1207,5,121,0,0,1207,123,1,0,0,0,1208,1210,
        3,134,67,0,1209,1208,1,0,0,0,1209,1210,1,0,0,0,1210,1212,1,0,0,0,
        1211,1213,3,228,114,0,1212,1211,1,0,0,0,1212,1213,1,0,0,0,1213,1214,
        1,0,0,0,1214,1223,5,121,0,0,1215,1217,3,206,103,0,1216,1218,3,134,
        67,0,1217,1216,1,0,0,0,1217,1218,1,0,0,0,1218,1219,1,0,0,0,1219,
        1220,3,228,114,0,1220,1221,5,121,0,0,1221,1223,1,0,0,0,1222,1209,
        1,0,0,0,1222,1215,1,0,0,0,1223,125,1,0,0,0,1224,1225,5,57,0,0,1225,
        1226,5,78,0,0,1226,1227,3,88,44,0,1227,1228,5,115,0,0,1228,1229,
        5,135,0,0,1229,1230,5,79,0,0,1230,1231,5,121,0,0,1231,127,1,0,0,
        0,1232,1233,5,121,0,0,1233,129,1,0,0,0,1234,1235,3,206,103,0,1235,
        1236,5,121,0,0,1236,131,1,0,0,0,1237,1244,3,136,68,0,1238,1244,3,
        142,71,0,1239,1244,3,138,69,0,1240,1244,5,34,0,0,1241,1244,5,67,
        0,0,1242,1244,5,16,0,0,1243,1237,1,0,0,0,1243,1238,1,0,0,0,1243,
        1239,1,0,0,0,1243,1240,1,0,0,0,1243,1241,1,0,0,0,1243,1242,1,0,0,
        0,1244,133,1,0,0,0,1245,1247,3,132,66,0,1246,1248,3,206,103,0,1247,
        1246,1,0,0,0,1247,1248,1,0,0,0,1248,1253,1,0,0,0,1249,1250,3,132,
        66,0,1250,1251,3,134,67,0,1251,1253,1,0,0,0,1252,1245,1,0,0,0,1252,
        1249,1,0,0,0,1253,135,1,0,0,0,1254,1255,7,2,0,0,1255,137,1,0,0,0,
        1256,1257,7,3,0,0,1257,139,1,0,0,0,1258,1259,5,125,0,0,1259,141,
        1,0,0,0,1260,1264,3,144,72,0,1261,1264,3,286,143,0,1262,1264,3,160,
        80,0,1263,1260,1,0,0,0,1263,1261,1,0,0,0,1263,1262,1,0,0,0,1264,
        143,1,0,0,0,1265,1270,3,150,75,0,1266,1270,3,156,78,0,1267,1270,
        3,358,179,0,1268,1270,3,246,123,0,1269,1265,1,0,0,0,1269,1266,1,
        0,0,0,1269,1267,1,0,0,0,1269,1268,1,0,0,0,1270,145,1,0,0,0,1271,
        1273,3,142,71,0,1272,1274,3,206,103,0,1273,1272,1,0,0,0,1273,1274,
        1,0,0,0,1274,1279,1,0,0,0,1275,1276,3,142,71,0,1276,1277,3,146,73,
        0,1277,1279,1,0,0,0,1278,1271,1,0,0,0,1278,1275,1,0,0,0,1279,147,
        1,0,0,0,1280,1282,3,144,72,0,1281,1283,3,206,103,0,1282,1281,1,0,
        0,0,1282,1283,1,0,0,0,1283,1288,1,0,0,0,1284,1285,3,144,72,0,1285,
        1286,3,148,74,0,1286,1288,1,0,0,0,1287,1280,1,0,0,0,1287,1284,1,
        0,0,0,1288,149,1,0,0,0,1289,1291,3,10,5,0,1290,1289,1,0,0,0,1290,
        1291,1,0,0,0,1291,1292,1,0,0,0,1292,1313,3,152,76,0,1293,1294,3,
        10,5,0,1294,1295,5,61,0,0,1295,1296,3,348,174,0,1296,1313,1,0,0,
        0,1297,1313,5,11,0,0,1298,1313,5,12,0,0,1299,1313,5,13,0,0,1300,
        1313,5,76,0,0,1301,1313,5,7,0,0,1302,1313,5,53,0,0,1303,1313,5,38,
        0,0,1304,1313,5,39,0,0,1305,1313,5,54,0,0,1306,1313,5,71,0,0,1307,
        1313,5,32,0,0,1308,1313,5,23,0,0,1309,1313,5,74,0,0,1310,1313,5,
        6,0,0,1311,1313,3,154,77,0,1312,1290,1,0,0,0,1312,1293,1,0,0,0,1312,
        1297,1,0,0,0,1312,1298,1,0,0,0,1312,1299,1,0,0,0,1312,1300,1,0,0,
        0,1312,1301,1,0,0,0,1312,1302,1,0,0,0,1312,1303,1,0,0,0,1312,1304,
        1,0,0,0,1312,1305,1,0,0,0,1312,1306,1,0,0,0,1312,1307,1,0,0,0,1312,
        1308,1,0,0,0,1312,1309,1,0,0,0,1312,1310,1,0,0,0,1312,1311,1,0,0,
        0,1313,151,1,0,0,0,1314,1319,3,284,142,0,1315,1319,3,158,79,0,1316,
        1319,3,140,70,0,1317,1319,3,348,174,0,1318,1314,1,0,0,0,1318,1315,
        1,0,0,0,1318,1316,1,0,0,0,1318,1317,1,0,0,0,1319,153,1,0,0,0,1320,
        1321,5,19,0,0,1321,1322,5,78,0,0,1322,1323,3,86,43,0,1323,1324,5,
        79,0,0,1324,1330,1,0,0,0,1325,1326,5,19,0,0,1326,1327,5,78,0,0,1327,
        1328,5,6,0,0,1328,1330,5,79,0,0,1329,1320,1,0,0,0,1329,1325,1,0,
        0,0,1330,155,1,0,0,0,1331,1333,3,294,147,0,1332,1334,3,206,103,0,
        1333,1332,1,0,0,0,1333,1334,1,0,0,0,1334,1336,1,0,0,0,1335,1337,
        3,10,5,0,1336,1335,1,0,0,0,1336,1337,1,0,0,0,1337,1338,1,0,0,0,1338,
        1339,5,125,0,0,1339,1356,1,0,0,0,1340,1341,3,294,147,0,1341,1342,
        3,348,174,0,1342,1356,1,0,0,0,1343,1344,3,294,147,0,1344,1346,3,
        10,5,0,1345,1347,5,61,0,0,1346,1345,1,0,0,0,1346,1347,1,0,0,0,1347,
        1348,1,0,0,0,1348,1349,3,348,174,0,1349,1356,1,0,0,0,1350,1352,5,
        26,0,0,1351,1353,3,10,5,0,1352,1351,1,0,0,0,1352,1353,1,0,0,0,1353,
        1354,1,0,0,0,1354,1356,5,125,0,0,1355,1331,1,0,0,0,1355,1340,1,0,
        0,0,1355,1343,1,0,0,0,1355,1350,1,0,0,0,1356,157,1,0,0,0,1357,1358,
        5,125,0,0,1358,159,1,0,0,0,1359,1360,3,162,81,0,1360,1362,5,82,0,
        0,1361,1363,3,170,85,0,1362,1361,1,0,0,0,1362,1363,1,0,0,0,1363,
        1364,1,0,0,0,1364,1365,5,83,0,0,1365,1373,1,0,0,0,1366,1367,3,162,
        81,0,1367,1368,5,82,0,0,1368,1369,3,170,85,0,1369,1370,5,115,0,0,
        1370,1371,5,83,0,0,1371,1373,1,0,0,0,1372,1359,1,0,0,0,1372,1366,
        1,0,0,0,1373,161,1,0,0,0,1374,1376,3,166,83,0,1375,1377,3,206,103,
        0,1376,1375,1,0,0,0,1376,1377,1,0,0,0,1377,1379,1,0,0,0,1378,1380,
        5,125,0,0,1379,1378,1,0,0,0,1379,1380,1,0,0,0,1380,1382,1,0,0,0,
        1381,1383,3,168,84,0,1382,1381,1,0,0,0,1382,1383,1,0,0,0,1383,1394,
        1,0,0,0,1384,1386,3,166,83,0,1385,1387,3,206,103,0,1386,1385,1,0,
        0,0,1386,1387,1,0,0,0,1387,1388,1,0,0,0,1388,1389,3,10,5,0,1389,
        1391,5,125,0,0,1390,1392,3,168,84,0,1391,1390,1,0,0,0,1391,1392,
        1,0,0,0,1392,1394,1,0,0,0,1393,1374,1,0,0,0,1393,1384,1,0,0,0,1394,
        163,1,0,0,0,1395,1397,3,166,83,0,1396,1398,3,206,103,0,1397,1396,
        1,0,0,0,1397,1398,1,0,0,0,1398,1399,1,0,0,0,1399,1401,5,125,0,0,
        1400,1402,3,168,84,0,1401,1400,1,0,0,0,1401,1402,1,0,0,0,1402,1403,
        1,0,0,0,1403,1404,5,121,0,0,1404,165,1,0,0,0,1405,1411,5,26,0,0,
        1406,1407,5,26,0,0,1407,1411,5,14,0,0,1408,1409,5,26,0,0,1409,1411,
        5,59,0,0,1410,1405,1,0,0,0,1410,1406,1,0,0,0,1410,1408,1,0,0,0,1411,
        167,1,0,0,0,1412,1413,5,119,0,0,1413,1414,3,146,73,0,1414,169,1,
        0,0,0,1415,1416,6,85,-1,0,1416,1417,3,172,86,0,1417,1423,1,0,0,0,
        1418,1419,10,1,0,0,1419,1420,5,115,0,0,1420,1422,3,172,86,0,1421,
        1418,1,0,0,0,1422,1425,1,0,0,0,1423,1421,1,0,0,0,1423,1424,1,0,0,
        0,1424,171,1,0,0,0,1425,1423,1,0,0,0,1426,1432,3,174,87,0,1427,1428,
        3,174,87,0,1428,1429,5,94,0,0,1429,1430,3,88,44,0,1430,1432,1,0,
        0,0,1431,1426,1,0,0,0,1431,1427,1,0,0,0,1432,173,1,0,0,0,1433,1434,
        5,125,0,0,1434,175,1,0,0,0,1435,1438,3,178,89,0,1436,1438,3,192,
        96,0,1437,1435,1,0,0,0,1437,1436,1,0,0,0,1438,177,1,0,0,0,1439,1440,
        5,125,0,0,1440,179,1,0,0,0,1441,1444,3,182,91,0,1442,1444,3,188,
        94,0,1443,1441,1,0,0,0,1443,1442,1,0,0,0,1444,181,1,0,0,0,1445,1448,
        3,184,92,0,1446,1448,3,186,93,0,1447,1445,1,0,0,0,1447,1446,1,0,
        0,0,1448,183,1,0,0,0,1449,1451,5,37,0,0,1450,1449,1,0,0,0,1450,1451,
        1,0,0,0,1451,1452,1,0,0,0,1452,1453,5,41,0,0,1453,1454,5,125,0,0,
        1454,1455,5,82,0,0,1455,1456,3,190,95,0,1456,1457,5,83,0,0,1457,
        185,1,0,0,0,1458,1460,5,37,0,0,1459,1458,1,0,0,0,1459,1460,1,0,0,
        0,1460,1461,1,0,0,0,1461,1462,5,41,0,0,1462,1463,3,178,89,0,1463,
        1464,5,82,0,0,1464,1465,3,190,95,0,1465,1466,5,83,0,0,1466,187,1,
        0,0,0,1467,1469,5,37,0,0,1468,1467,1,0,0,0,1468,1469,1,0,0,0,1469,
        1470,1,0,0,0,1470,1471,5,41,0,0,1471,1472,5,82,0,0,1472,1473,3,190,
        95,0,1473,1474,5,83,0,0,1474,189,1,0,0,0,1475,1477,3,116,58,0,1476,
        1475,1,0,0,0,1476,1477,1,0,0,0,1477,191,1,0,0,0,1478,1479,5,125,
        0,0,1479,193,1,0,0,0,1480,1481,5,41,0,0,1481,1482,5,125,0,0,1482,
        1483,5,94,0,0,1483,1484,3,196,98,0,1484,1485,5,121,0,0,1485,195,
        1,0,0,0,1486,1488,3,10,5,0,1487,1486,1,0,0,0,1487,1488,1,0,0,0,1488,
        1489,1,0,0,0,1489,1490,3,176,88,0,1490,197,1,0,0,0,1491,1493,5,72,
        0,0,1492,1494,5,69,0,0,1493,1492,1,0,0,0,1493,1494,1,0,0,0,1494,
        1495,1,0,0,0,1495,1496,3,10,5,0,1496,1497,3,6,3,0,1497,1498,5,121,
        0,0,1498,1505,1,0,0,0,1499,1500,5,72,0,0,1500,1501,5,120,0,0,1501,
        1502,3,6,3,0,1502,1503,5,121,0,0,1503,1505,1,0,0,0,1504,1491,1,0,
        0,0,1504,1499,1,0,0,0,1505,199,1,0,0,0,1506,1508,3,206,103,0,1507,
        1506,1,0,0,0,1507,1508,1,0,0,0,1508,1509,1,0,0,0,1509,1510,5,72,
        0,0,1510,1512,5,41,0,0,1511,1513,3,10,5,0,1512,1511,1,0,0,0,1512,
        1513,1,0,0,0,1513,1514,1,0,0,0,1514,1515,3,176,88,0,1515,1516,5,
        121,0,0,1516,201,1,0,0,0,1517,1518,5,5,0,0,1518,1519,5,78,0,0,1519,
        1520,5,135,0,0,1520,1521,5,79,0,0,1521,1522,5,121,0,0,1522,203,1,
        0,0,0,1523,1524,5,29,0,0,1524,1525,5,135,0,0,1525,1527,5,82,0,0,
        1526,1528,3,116,58,0,1527,1526,1,0,0,0,1527,1528,1,0,0,0,1528,1529,
        1,0,0,0,1529,1534,5,83,0,0,1530,1531,5,29,0,0,1531,1532,5,135,0,
        0,1532,1534,3,118,59,0,1533,1523,1,0,0,0,1533,1530,1,0,0,0,1534,
        205,1,0,0,0,1535,1536,6,103,-1,0,1536,1537,3,208,104,0,1537,1542,
        1,0,0,0,1538,1539,10,1,0,0,1539,1541,3,208,104,0,1540,1538,1,0,0,
        0,1541,1544,1,0,0,0,1542,1540,1,0,0,0,1542,1543,1,0,0,0,1543,207,
        1,0,0,0,1544,1542,1,0,0,0,1545,1546,5,80,0,0,1546,1547,5,80,0,0,
        1547,1548,3,212,106,0,1548,1549,5,81,0,0,1549,1550,5,81,0,0,1550,
        1553,1,0,0,0,1551,1553,3,210,105,0,1552,1545,1,0,0,0,1552,1551,1,
        0,0,0,1553,209,1,0,0,0,1554,1555,5,3,0,0,1555,1556,5,78,0,0,1556,
        1558,3,252,126,0,1557,1559,5,124,0,0,1558,1557,1,0,0,0,1558,1559,
        1,0,0,0,1559,1560,1,0,0,0,1560,1561,5,79,0,0,1561,1571,1,0,0,0,1562,
        1563,5,3,0,0,1563,1564,5,78,0,0,1564,1566,3,88,44,0,1565,1567,5,
        124,0,0,1566,1565,1,0,0,0,1566,1567,1,0,0,0,1567,1568,1,0,0,0,1568,
        1569,5,79,0,0,1569,1571,1,0,0,0,1570,1554,1,0,0,0,1570,1562,1,0,
        0,0,1571,211,1,0,0,0,1572,1574,6,106,-1,0,1573,1575,3,214,107,0,
        1574,1573,1,0,0,0,1574,1575,1,0,0,0,1575,1580,1,0,0,0,1576,1577,
        3,214,107,0,1577,1578,5,124,0,0,1578,1580,1,0,0,0,1579,1572,1,0,
        0,0,1579,1576,1,0,0,0,1580,1593,1,0,0,0,1581,1582,10,3,0,0,1582,
        1584,5,115,0,0,1583,1585,3,214,107,0,1584,1583,1,0,0,0,1584,1585,
        1,0,0,0,1585,1592,1,0,0,0,1586,1587,10,1,0,0,1587,1588,5,115,0,0,
        1588,1589,3,214,107,0,1589,1590,5,124,0,0,1590,1592,1,0,0,0,1591,
        1581,1,0,0,0,1591,1586,1,0,0,0,1592,1595,1,0,0,0,1593,1591,1,0,0,
        0,1593,1594,1,0,0,0,1594,213,1,0,0,0,1595,1593,1,0,0,0,1596,1598,
        3,216,108,0,1597,1599,3,222,111,0,1598,1597,1,0,0,0,1598,1599,1,
        0,0,0,1599,215,1,0,0,0,1600,1603,5,125,0,0,1601,1603,3,218,109,0,
        1602,1600,1,0,0,0,1602,1601,1,0,0,0,1603,217,1,0,0,0,1604,1605,3,
        220,110,0,1605,1606,5,120,0,0,1606,1607,5,125,0,0,1607,219,1,0,0,
        0,1608,1609,5,125,0,0,1609,221,1,0,0,0,1610,1611,5,78,0,0,1611,1612,
        3,224,112,0,1612,1613,5,79,0,0,1613,223,1,0,0,0,1614,1616,6,112,
        -1,0,1615,1617,3,226,113,0,1616,1615,1,0,0,0,1616,1617,1,0,0,0,1617,
        1622,1,0,0,0,1618,1619,10,1,0,0,1619,1621,3,226,113,0,1620,1618,
        1,0,0,0,1621,1624,1,0,0,0,1622,1620,1,0,0,0,1622,1623,1,0,0,0,1623,
        225,1,0,0,0,1624,1622,1,0,0,0,1625,1626,5,78,0,0,1626,1627,3,224,
        112,0,1627,1628,5,79,0,0,1628,1638,1,0,0,0,1629,1630,5,80,0,0,1630,
        1631,3,224,112,0,1631,1632,5,81,0,0,1632,1638,1,0,0,0,1633,1634,
        5,82,0,0,1634,1635,3,224,112,0,1635,1636,5,83,0,0,1636,1638,1,0,
        0,0,1637,1625,1,0,0,0,1637,1629,1,0,0,0,1637,1633,1,0,0,0,1638,227,
        1,0,0,0,1639,1640,6,114,-1,0,1640,1641,3,230,115,0,1641,1647,1,0,
        0,0,1642,1643,10,1,0,0,1643,1644,5,115,0,0,1644,1646,3,230,115,0,
        1645,1642,1,0,0,0,1646,1649,1,0,0,0,1647,1645,1,0,0,0,1647,1648,
        1,0,0,0,1648,229,1,0,0,0,1649,1647,1,0,0,0,1650,1652,3,232,116,0,
        1651,1653,3,274,137,0,1652,1651,1,0,0,0,1652,1653,1,0,0,0,1653,231,
        1,0,0,0,1654,1660,3,234,117,0,1655,1656,3,236,118,0,1656,1657,3,
        238,119,0,1657,1658,3,240,120,0,1658,1660,1,0,0,0,1659,1654,1,0,
        0,0,1659,1655,1,0,0,0,1660,233,1,0,0,0,1661,1666,3,236,118,0,1662,
        1663,3,242,121,0,1663,1664,3,234,117,0,1664,1666,1,0,0,0,1665,1661,
        1,0,0,0,1665,1662,1,0,0,0,1666,235,1,0,0,0,1667,1668,6,118,-1,0,
        1668,1670,3,250,125,0,1669,1671,3,206,103,0,1670,1669,1,0,0,0,1670,
        1671,1,0,0,0,1671,1677,1,0,0,0,1672,1673,5,78,0,0,1673,1674,3,234,
        117,0,1674,1675,5,79,0,0,1675,1677,1,0,0,0,1676,1667,1,0,0,0,1676,
        1672,1,0,0,0,1677,1691,1,0,0,0,1678,1679,10,3,0,0,1679,1690,3,238,
        119,0,1680,1681,10,2,0,0,1681,1683,5,80,0,0,1682,1684,3,88,44,0,
        1683,1682,1,0,0,0,1683,1684,1,0,0,0,1684,1685,1,0,0,0,1685,1687,
        5,81,0,0,1686,1688,3,206,103,0,1687,1686,1,0,0,0,1687,1688,1,0,0,
        0,1688,1690,1,0,0,0,1689,1678,1,0,0,0,1689,1680,1,0,0,0,1690,1693,
        1,0,0,0,1691,1689,1,0,0,0,1691,1692,1,0,0,0,1692,237,1,0,0,0,1693,
        1691,1,0,0,0,1694,1695,5,78,0,0,1695,1696,3,264,132,0,1696,1698,
        5,79,0,0,1697,1699,3,244,122,0,1698,1697,1,0,0,0,1698,1699,1,0,0,
        0,1699,1701,1,0,0,0,1700,1702,3,248,124,0,1701,1700,1,0,0,0,1701,
        1702,1,0,0,0,1702,1704,1,0,0,0,1703,1705,3,376,188,0,1704,1703,1,
        0,0,0,1704,1705,1,0,0,0,1705,1707,1,0,0,0,1706,1708,3,206,103,0,
        1707,1706,1,0,0,0,1707,1708,1,0,0,0,1708,239,1,0,0,0,1709,1710,5,
        117,0,0,1710,1712,3,148,74,0,1711,1713,3,254,127,0,1712,1711,1,0,
        0,0,1712,1713,1,0,0,0,1713,241,1,0,0,0,1714,1716,5,86,0,0,1715,1717,
        3,206,103,0,1716,1715,1,0,0,0,1716,1717,1,0,0,0,1717,1719,1,0,0,
        0,1718,1720,3,244,122,0,1719,1718,1,0,0,0,1719,1720,1,0,0,0,1720,
        1738,1,0,0,0,1721,1723,5,90,0,0,1722,1724,3,206,103,0,1723,1722,
        1,0,0,0,1723,1724,1,0,0,0,1724,1738,1,0,0,0,1725,1727,5,111,0,0,
        1726,1728,3,206,103,0,1727,1726,1,0,0,0,1727,1728,1,0,0,0,1728,1738,
        1,0,0,0,1729,1730,3,10,5,0,1730,1732,5,86,0,0,1731,1733,3,206,103,
        0,1732,1731,1,0,0,0,1732,1733,1,0,0,0,1733,1735,1,0,0,0,1734,1736,
        3,244,122,0,1735,1734,1,0,0,0,1735,1736,1,0,0,0,1736,1738,1,0,0,
        0,1737,1714,1,0,0,0,1737,1721,1,0,0,0,1737,1725,1,0,0,0,1737,1729,
        1,0,0,0,1738,243,1,0,0,0,1739,1741,3,246,123,0,1740,1742,3,244,122,
        0,1741,1740,1,0,0,0,1741,1742,1,0,0,0,1742,245,1,0,0,0,1743,1744,
        7,4,0,0,1744,247,1,0,0,0,1745,1746,7,5,0,0,1746,249,1,0,0,0,1747,
        1749,5,124,0,0,1748,1747,1,0,0,0,1748,1749,1,0,0,0,1749,1750,1,0,
        0,0,1750,1751,3,4,2,0,1751,251,1,0,0,0,1752,1754,3,146,73,0,1753,
        1755,3,254,127,0,1754,1753,1,0,0,0,1754,1755,1,0,0,0,1755,253,1,
        0,0,0,1756,1765,3,256,128,0,1757,1759,3,258,129,0,1758,1757,1,0,
        0,0,1758,1759,1,0,0,0,1759,1760,1,0,0,0,1760,1761,3,238,119,0,1761,
        1762,3,240,120,0,1762,1765,1,0,0,0,1763,1765,3,260,130,0,1764,1756,
        1,0,0,0,1764,1758,1,0,0,0,1764,1763,1,0,0,0,1765,255,1,0,0,0,1766,
        1772,3,258,129,0,1767,1769,3,242,121,0,1768,1770,3,256,128,0,1769,
        1768,1,0,0,0,1769,1770,1,0,0,0,1770,1772,1,0,0,0,1771,1766,1,0,0,
        0,1771,1767,1,0,0,0,1772,257,1,0,0,0,1773,1774,6,129,-1,0,1774,1788,
        3,238,119,0,1775,1777,5,80,0,0,1776,1778,3,88,44,0,1777,1776,1,0,
        0,0,1777,1778,1,0,0,0,1778,1779,1,0,0,0,1779,1781,5,81,0,0,1780,
        1782,3,206,103,0,1781,1780,1,0,0,0,1781,1782,1,0,0,0,1782,1788,1,
        0,0,0,1783,1784,5,78,0,0,1784,1785,3,256,128,0,1785,1786,5,79,0,
        0,1786,1788,1,0,0,0,1787,1773,1,0,0,0,1787,1775,1,0,0,0,1787,1783,
        1,0,0,0,1788,1802,1,0,0,0,1789,1790,10,5,0,0,1790,1801,3,238,119,
        0,1791,1792,10,3,0,0,1792,1794,5,80,0,0,1793,1795,3,88,44,0,1794,
        1793,1,0,0,0,1794,1795,1,0,0,0,1795,1796,1,0,0,0,1796,1798,5,81,
        0,0,1797,1799,3,206,103,0,1798,1797,1,0,0,0,1798,1799,1,0,0,0,1799,
        1801,1,0,0,0,1800,1789,1,0,0,0,1800,1791,1,0,0,0,1801,1804,1,0,0,
        0,1802,1800,1,0,0,0,1802,1803,1,0,0,0,1803,259,1,0,0,0,1804,1802,
        1,0,0,0,1805,1810,3,262,131,0,1806,1807,3,242,121,0,1807,1808,3,
        260,130,0,1808,1810,1,0,0,0,1809,1805,1,0,0,0,1809,1806,1,0,0,0,
        1810,261,1,0,0,0,1811,1812,6,131,-1,0,1812,1813,5,124,0,0,1813,1827,
        1,0,0,0,1814,1815,10,3,0,0,1815,1826,3,238,119,0,1816,1817,10,2,
        0,0,1817,1819,5,80,0,0,1818,1820,3,88,44,0,1819,1818,1,0,0,0,1819,
        1820,1,0,0,0,1820,1821,1,0,0,0,1821,1823,5,81,0,0,1822,1824,3,206,
        103,0,1823,1822,1,0,0,0,1823,1824,1,0,0,0,1824,1826,1,0,0,0,1825,
        1814,1,0,0,0,1825,1816,1,0,0,0,1826,1829,1,0,0,0,1827,1825,1,0,0,
        0,1827,1828,1,0,0,0,1828,263,1,0,0,0,1829,1827,1,0,0,0,1830,1832,
        3,266,133,0,1831,1830,1,0,0,0,1831,1832,1,0,0,0,1832,1834,1,0,0,
        0,1833,1835,5,124,0,0,1834,1833,1,0,0,0,1834,1835,1,0,0,0,1835,1841,
        1,0,0,0,1836,1837,3,266,133,0,1837,1838,5,115,0,0,1838,1839,5,124,
        0,0,1839,1841,1,0,0,0,1840,1831,1,0,0,0,1840,1836,1,0,0,0,1841,265,
        1,0,0,0,1842,1843,6,133,-1,0,1843,1844,3,268,134,0,1844,1850,1,0,
        0,0,1845,1846,10,1,0,0,1846,1847,5,115,0,0,1847,1849,3,268,134,0,
        1848,1845,1,0,0,0,1849,1852,1,0,0,0,1850,1848,1,0,0,0,1850,1851,
        1,0,0,0,1851,267,1,0,0,0,1852,1850,1,0,0,0,1853,1855,3,206,103,0,
        1854,1853,1,0,0,0,1854,1855,1,0,0,0,1855,1856,1,0,0,0,1856,1857,
        3,134,67,0,1857,1858,3,232,116,0,1858,1885,1,0,0,0,1859,1861,3,206,
        103,0,1860,1859,1,0,0,0,1860,1861,1,0,0,0,1861,1862,1,0,0,0,1862,
        1863,3,134,67,0,1863,1864,3,232,116,0,1864,1865,5,94,0,0,1865,1866,
        3,278,139,0,1866,1885,1,0,0,0,1867,1869,3,206,103,0,1868,1867,1,
        0,0,0,1868,1869,1,0,0,0,1869,1870,1,0,0,0,1870,1872,3,134,67,0,1871,
        1873,3,254,127,0,1872,1871,1,0,0,0,1872,1873,1,0,0,0,1873,1885,1,
        0,0,0,1874,1876,3,206,103,0,1875,1874,1,0,0,0,1875,1876,1,0,0,0,
        1876,1877,1,0,0,0,1877,1879,3,134,67,0,1878,1880,3,254,127,0,1879,
        1878,1,0,0,0,1879,1880,1,0,0,0,1880,1881,1,0,0,0,1881,1882,5,94,
        0,0,1882,1883,3,278,139,0,1883,1885,1,0,0,0,1884,1854,1,0,0,0,1884,
        1860,1,0,0,0,1884,1868,1,0,0,0,1884,1875,1,0,0,0,1885,269,1,0,0,
        0,1886,1888,3,206,103,0,1887,1886,1,0,0,0,1887,1888,1,0,0,0,1888,
        1890,1,0,0,0,1889,1891,3,134,67,0,1890,1889,1,0,0,0,1890,1891,1,
        0,0,0,1891,1892,1,0,0,0,1892,1894,3,232,116,0,1893,1895,3,304,152,
        0,1894,1893,1,0,0,0,1894,1895,1,0,0,0,1895,1896,1,0,0,0,1896,1897,
        3,272,136,0,1897,271,1,0,0,0,1898,1900,3,328,164,0,1899,1898,1,0,
        0,0,1899,1900,1,0,0,0,1900,1901,1,0,0,0,1901,1910,3,96,48,0,1902,
        1910,3,366,183,0,1903,1904,5,94,0,0,1904,1905,5,20,0,0,1905,1910,
        5,121,0,0,1906,1907,5,94,0,0,1907,1908,5,21,0,0,1908,1910,5,121,
        0,0,1909,1899,1,0,0,0,1909,1902,1,0,0,0,1909,1903,1,0,0,0,1909,1906,
        1,0,0,0,1910,273,1,0,0,0,1911,1917,3,276,138,0,1912,1913,5,78,0,
        0,1913,1914,3,32,16,0,1914,1915,5,79,0,0,1915,1917,1,0,0,0,1916,
        1911,1,0,0,0,1916,1912,1,0,0,0,1917,275,1,0,0,0,1918,1919,5,94,0,
        0,1919,1922,3,278,139,0,1920,1922,3,282,141,0,1921,1918,1,0,0,0,
        1921,1920,1,0,0,0,1922,277,1,0,0,0,1923,1926,3,82,41,0,1924,1926,
        3,282,141,0,1925,1923,1,0,0,0,1925,1924,1,0,0,0,1926,279,1,0,0,0,
        1927,1928,6,140,-1,0,1928,1930,3,278,139,0,1929,1931,5,124,0,0,1930,
        1929,1,0,0,0,1930,1931,1,0,0,0,1931,1940,1,0,0,0,1932,1933,10,1,
        0,0,1933,1934,5,115,0,0,1934,1936,3,278,139,0,1935,1937,5,124,0,
        0,1936,1935,1,0,0,0,1936,1937,1,0,0,0,1937,1939,1,0,0,0,1938,1932,
        1,0,0,0,1939,1942,1,0,0,0,1940,1938,1,0,0,0,1940,1941,1,0,0,0,1941,
        281,1,0,0,0,1942,1940,1,0,0,0,1943,1944,5,82,0,0,1944,1946,3,280,
        140,0,1945,1947,5,115,0,0,1946,1945,1,0,0,0,1946,1947,1,0,0,0,1947,
        1948,1,0,0,0,1948,1949,5,83,0,0,1949,1953,1,0,0,0,1950,1951,5,82,
        0,0,1951,1953,5,83,0,0,1952,1943,1,0,0,0,1952,1950,1,0,0,0,1953,
        283,1,0,0,0,1954,1957,5,125,0,0,1955,1957,3,348,174,0,1956,1954,
        1,0,0,0,1956,1955,1,0,0,0,1957,285,1,0,0,0,1958,1959,3,288,144,0,
        1959,1961,5,82,0,0,1960,1962,3,296,148,0,1961,1960,1,0,0,0,1961,
        1962,1,0,0,0,1962,1963,1,0,0,0,1963,1964,5,83,0,0,1964,287,1,0,0,
        0,1965,1967,3,294,147,0,1966,1968,3,206,103,0,1967,1966,1,0,0,0,
        1967,1968,1,0,0,0,1968,1969,1,0,0,0,1969,1971,3,290,145,0,1970,1972,
        3,292,146,0,1971,1970,1,0,0,0,1971,1972,1,0,0,0,1972,1974,1,0,0,
        0,1973,1975,3,310,155,0,1974,1973,1,0,0,0,1974,1975,1,0,0,0,1975,
        1984,1,0,0,0,1976,1978,3,294,147,0,1977,1979,3,206,103,0,1978,1977,
        1,0,0,0,1978,1979,1,0,0,0,1979,1981,1,0,0,0,1980,1982,3,310,155,
        0,1981,1980,1,0,0,0,1981,1982,1,0,0,0,1982,1984,1,0,0,0,1983,1965,
        1,0,0,0,1983,1976,1,0,0,0,1984,289,1,0,0,0,1985,1987,3,10,5,0,1986,
        1985,1,0,0,0,1986,1987,1,0,0,0,1987,1988,1,0,0,0,1988,1989,3,284,
        142,0,1989,291,1,0,0,0,1990,1991,5,31,0,0,1991,293,1,0,0,0,1992,
        1993,7,6,0,0,1993,295,1,0,0,0,1994,1996,3,298,149,0,1995,1997,3,
        296,148,0,1996,1995,1,0,0,0,1996,1997,1,0,0,0,1997,2004,1,0,0,0,
        1998,1999,3,320,160,0,1999,2001,5,119,0,0,2000,2002,3,296,148,0,
        2001,2000,1,0,0,0,2001,2002,1,0,0,0,2002,2004,1,0,0,0,2003,1994,
        1,0,0,0,2003,1998,1,0,0,0,2004,297,1,0,0,0,2005,2007,3,206,103,0,
        2006,2005,1,0,0,0,2006,2007,1,0,0,0,2007,2009,1,0,0,0,2008,2010,
        3,134,67,0,2009,2008,1,0,0,0,2009,2010,1,0,0,0,2010,2012,1,0,0,0,
        2011,2013,3,300,150,0,2012,2011,1,0,0,0,2012,2013,1,0,0,0,2013,2014,
        1,0,0,0,2014,2022,5,121,0,0,2015,2022,3,270,135,0,2016,2022,3,198,
        99,0,2017,2022,3,126,63,0,2018,2022,3,340,170,0,2019,2022,3,122,
        61,0,2020,2022,3,128,64,0,2021,2006,1,0,0,0,2021,2015,1,0,0,0,2021,
        2016,1,0,0,0,2021,2017,1,0,0,0,2021,2018,1,0,0,0,2021,2019,1,0,0,
        0,2021,2020,1,0,0,0,2022,299,1,0,0,0,2023,2024,6,150,-1,0,2024,2025,
        3,302,151,0,2025,2031,1,0,0,0,2026,2027,10,1,0,0,2027,2028,5,115,
        0,0,2028,2030,3,302,151,0,2029,2026,1,0,0,0,2030,2033,1,0,0,0,2031,
        2029,1,0,0,0,2031,2032,1,0,0,0,2032,301,1,0,0,0,2033,2031,1,0,0,
        0,2034,2036,3,232,116,0,2035,2037,3,304,152,0,2036,2035,1,0,0,0,
        2036,2037,1,0,0,0,2037,2039,1,0,0,0,2038,2040,3,308,154,0,2039,2038,
        1,0,0,0,2039,2040,1,0,0,0,2040,2054,1,0,0,0,2041,2043,3,232,116,
        0,2042,2044,3,276,138,0,2043,2042,1,0,0,0,2043,2044,1,0,0,0,2044,
        2054,1,0,0,0,2045,2047,5,125,0,0,2046,2045,1,0,0,0,2046,2047,1,0,
        0,0,2047,2049,1,0,0,0,2048,2050,3,206,103,0,2049,2048,1,0,0,0,2049,
        2050,1,0,0,0,2050,2051,1,0,0,0,2051,2052,5,119,0,0,2052,2054,3,88,
        44,0,2053,2034,1,0,0,0,2053,2041,1,0,0,0,2053,2046,1,0,0,0,2054,
        303,1,0,0,0,2055,2056,6,152,-1,0,2056,2057,3,306,153,0,2057,2062,
        1,0,0,0,2058,2059,10,1,0,0,2059,2061,3,306,153,0,2060,2058,1,0,0,
        0,2061,2064,1,0,0,0,2062,2060,1,0,0,0,2062,2063,1,0,0,0,2063,305,
        1,0,0,0,2064,2062,1,0,0,0,2065,2066,7,7,0,0,2066,307,1,0,0,0,2067,
        2068,5,94,0,0,2068,2069,5,127,0,0,2069,309,1,0,0,0,2070,2071,5,119,
        0,0,2071,2072,3,312,156,0,2072,311,1,0,0,0,2073,2074,6,156,-1,0,
        2074,2076,3,314,157,0,2075,2077,5,124,0,0,2076,2075,1,0,0,0,2076,
        2077,1,0,0,0,2077,2086,1,0,0,0,2078,2079,10,1,0,0,2079,2080,5,115,
        0,0,2080,2082,3,314,157,0,2081,2083,5,124,0,0,2082,2081,1,0,0,0,
        2082,2083,1,0,0,0,2083,2085,1,0,0,0,2084,2078,1,0,0,0,2085,2088,
        1,0,0,0,2086,2084,1,0,0,0,2086,2087,1,0,0,0,2087,313,1,0,0,0,2088,
        2086,1,0,0,0,2089,2091,3,206,103,0,2090,2089,1,0,0,0,2090,2091,1,
        0,0,0,2091,2092,1,0,0,0,2092,2111,3,318,159,0,2093,2095,3,206,103,
        0,2094,2093,1,0,0,0,2094,2095,1,0,0,0,2095,2096,1,0,0,0,2096,2098,
        5,73,0,0,2097,2099,3,320,160,0,2098,2097,1,0,0,0,2098,2099,1,0,0,
        0,2099,2100,1,0,0,0,2100,2111,3,318,159,0,2101,2103,3,206,103,0,
        2102,2101,1,0,0,0,2102,2103,1,0,0,0,2103,2104,1,0,0,0,2104,2106,
        3,320,160,0,2105,2107,5,73,0,0,2106,2105,1,0,0,0,2106,2107,1,0,0,
        0,2107,2108,1,0,0,0,2108,2109,3,318,159,0,2109,2111,1,0,0,0,2110,
        2090,1,0,0,0,2110,2094,1,0,0,0,2110,2102,1,0,0,0,2111,315,1,0,0,
        0,2112,2114,3,10,5,0,2113,2112,1,0,0,0,2113,2114,1,0,0,0,2114,2115,
        1,0,0,0,2115,2118,3,284,142,0,2116,2118,3,154,77,0,2117,2113,1,0,
        0,0,2117,2116,1,0,0,0,2118,317,1,0,0,0,2119,2120,3,316,158,0,2120,
        319,1,0,0,0,2121,2122,7,8,0,0,2122,321,1,0,0,0,2123,2124,5,45,0,
        0,2124,2125,3,324,162,0,2125,323,1,0,0,0,2126,2128,3,146,73,0,2127,
        2129,3,326,163,0,2128,2127,1,0,0,0,2128,2129,1,0,0,0,2129,325,1,
        0,0,0,2130,2132,3,242,121,0,2131,2133,3,326,163,0,2132,2131,1,0,
        0,0,2132,2133,1,0,0,0,2133,327,1,0,0,0,2134,2135,5,119,0,0,2135,
        2136,3,330,165,0,2136,329,1,0,0,0,2137,2139,3,332,166,0,2138,2140,
        5,124,0,0,2139,2138,1,0,0,0,2139,2140,1,0,0,0,2140,2149,1,0,0,0,
        2141,2143,3,332,166,0,2142,2144,5,124,0,0,2143,2142,1,0,0,0,2143,
        2144,1,0,0,0,2144,2145,1,0,0,0,2145,2146,5,115,0,0,2146,2147,3,330,
        165,0,2147,2149,1,0,0,0,2148,2137,1,0,0,0,2148,2141,1,0,0,0,2149,
        331,1,0,0,0,2150,2151,3,334,167,0,2151,2153,5,78,0,0,2152,2154,3,
        32,16,0,2153,2152,1,0,0,0,2153,2154,1,0,0,0,2154,2155,1,0,0,0,2155,
        2156,5,79,0,0,2156,2161,1,0,0,0,2157,2158,3,334,167,0,2158,2159,
        3,282,141,0,2159,2161,1,0,0,0,2160,2150,1,0,0,0,2160,2157,1,0,0,
        0,2161,333,1,0,0,0,2162,2165,3,316,158,0,2163,2165,5,125,0,0,2164,
        2162,1,0,0,0,2164,2163,1,0,0,0,2165,335,1,0,0,0,2166,2167,5,45,0,
        0,2167,2168,3,388,194,0,2168,337,1,0,0,0,2169,2170,5,45,0,0,2170,
        2171,5,135,0,0,2171,2175,5,125,0,0,2172,2173,5,45,0,0,2173,2175,
        5,138,0,0,2174,2169,1,0,0,0,2174,2172,1,0,0,0,2175,339,1,0,0,0,2176,
        2177,5,61,0,0,2177,2178,5,95,0,0,2178,2179,3,342,171,0,2179,2180,
        5,96,0,0,2180,2181,3,118,59,0,2181,341,1,0,0,0,2182,2183,6,171,-1,
        0,2183,2184,3,344,172,0,2184,2190,1,0,0,0,2185,2186,10,1,0,0,2186,
        2187,5,115,0,0,2187,2189,3,344,172,0,2188,2185,1,0,0,0,2189,2192,
        1,0,0,0,2190,2188,1,0,0,0,2190,2191,1,0,0,0,2191,343,1,0,0,0,2192,
        2190,1,0,0,0,2193,2196,3,346,173,0,2194,2196,3,268,134,0,2195,2193,
        1,0,0,0,2195,2194,1,0,0,0,2196,345,1,0,0,0,2197,2199,5,14,0,0,2198,
        2200,5,124,0,0,2199,2198,1,0,0,0,2199,2200,1,0,0,0,2200,2202,1,0,
        0,0,2201,2203,5,125,0,0,2202,2201,1,0,0,0,2202,2203,1,0,0,0,2203,
        2246,1,0,0,0,2204,2206,5,14,0,0,2205,2207,5,125,0,0,2206,2205,1,
        0,0,0,2206,2207,1,0,0,0,2207,2208,1,0,0,0,2208,2209,5,94,0,0,2209,
        2246,3,252,126,0,2210,2212,5,69,0,0,2211,2213,5,124,0,0,2212,2211,
        1,0,0,0,2212,2213,1,0,0,0,2213,2215,1,0,0,0,2214,2216,5,125,0,0,
        2215,2214,1,0,0,0,2215,2216,1,0,0,0,2216,2246,1,0,0,0,2217,2219,
        5,69,0,0,2218,2220,5,125,0,0,2219,2218,1,0,0,0,2219,2220,1,0,0,0,
        2220,2221,1,0,0,0,2221,2222,5,94,0,0,2222,2246,3,252,126,0,2223,
        2224,5,61,0,0,2224,2225,5,95,0,0,2225,2226,3,342,171,0,2226,2227,
        5,96,0,0,2227,2229,5,14,0,0,2228,2230,5,124,0,0,2229,2228,1,0,0,
        0,2229,2230,1,0,0,0,2230,2232,1,0,0,0,2231,2233,5,125,0,0,2232,2231,
        1,0,0,0,2232,2233,1,0,0,0,2233,2246,1,0,0,0,2234,2235,5,61,0,0,2235,
        2236,5,95,0,0,2236,2237,3,342,171,0,2237,2238,5,96,0,0,2238,2240,
        5,14,0,0,2239,2241,5,125,0,0,2240,2239,1,0,0,0,2240,2241,1,0,0,0,
        2241,2242,1,0,0,0,2242,2243,5,94,0,0,2243,2244,3,4,2,0,2244,2246,
        1,0,0,0,2245,2197,1,0,0,0,2245,2204,1,0,0,0,2245,2210,1,0,0,0,2245,
        2217,1,0,0,0,2245,2223,1,0,0,0,2245,2234,1,0,0,0,2246,347,1,0,0,
        0,2247,2248,3,352,176,0,2248,2250,5,95,0,0,2249,2251,3,354,177,0,
        2250,2249,1,0,0,0,2250,2251,1,0,0,0,2251,2252,1,0,0,0,2252,2253,
        5,96,0,0,2253,349,1,0,0,0,2254,2270,3,348,174,0,2255,2256,3,336,
        168,0,2256,2258,5,95,0,0,2257,2259,3,354,177,0,2258,2257,1,0,0,0,
        2258,2259,1,0,0,0,2259,2260,1,0,0,0,2260,2261,5,96,0,0,2261,2270,
        1,0,0,0,2262,2263,3,338,169,0,2263,2265,5,95,0,0,2264,2266,3,354,
        177,0,2265,2264,1,0,0,0,2265,2266,1,0,0,0,2266,2267,1,0,0,0,2267,
        2268,5,96,0,0,2268,2270,1,0,0,0,2269,2254,1,0,0,0,2269,2255,1,0,
        0,0,2269,2262,1,0,0,0,2270,351,1,0,0,0,2271,2272,5,125,0,0,2272,
        353,1,0,0,0,2273,2274,6,177,-1,0,2274,2276,3,356,178,0,2275,2277,
        5,124,0,0,2276,2275,1,0,0,0,2276,2277,1,0,0,0,2277,2286,1,0,0,0,
        2278,2279,10,1,0,0,2279,2280,5,115,0,0,2280,2282,3,356,178,0,2281,
        2283,5,124,0,0,2282,2281,1,0,0,0,2282,2283,1,0,0,0,2283,2285,1,0,
        0,0,2284,2278,1,0,0,0,2285,2288,1,0,0,0,2286,2284,1,0,0,0,2286,2287,
        1,0,0,0,2287,355,1,0,0,0,2288,2286,1,0,0,0,2289,2293,3,252,126,0,
        2290,2293,3,88,44,0,2291,2293,3,4,2,0,2292,2289,1,0,0,0,2292,2290,
        1,0,0,0,2292,2291,1,0,0,0,2293,357,1,0,0,0,2294,2295,5,69,0,0,2295,
        2296,3,10,5,0,2296,2297,5,125,0,0,2297,2306,1,0,0,0,2298,2299,5,
        69,0,0,2299,2301,3,10,5,0,2300,2302,5,61,0,0,2301,2300,1,0,0,0,2301,
        2302,1,0,0,0,2302,2303,1,0,0,0,2303,2304,3,348,174,0,2304,2306,1,
        0,0,0,2305,2294,1,0,0,0,2305,2298,1,0,0,0,2306,359,1,0,0,0,2307,
        2309,5,29,0,0,2308,2307,1,0,0,0,2308,2309,1,0,0,0,2309,2310,1,0,
        0,0,2310,2311,5,61,0,0,2311,2312,3,118,59,0,2312,361,1,0,0,0,2313,
        2314,5,61,0,0,2314,2315,5,95,0,0,2315,2316,5,96,0,0,2316,2317,3,
        118,59,0,2317,363,1,0,0,0,2318,2319,5,66,0,0,2319,2320,3,96,48,0,
        2320,2321,3,368,184,0,2321,365,1,0,0,0,2322,2324,5,66,0,0,2323,2325,
        3,328,164,0,2324,2323,1,0,0,0,2324,2325,1,0,0,0,2325,2326,1,0,0,
        0,2326,2327,3,96,48,0,2327,2328,3,368,184,0,2328,367,1,0,0,0,2329,
        2331,3,370,185,0,2330,2332,3,368,184,0,2331,2330,1,0,0,0,2331,2332,
        1,0,0,0,2332,369,1,0,0,0,2333,2334,5,10,0,0,2334,2335,5,78,0,0,2335,
        2336,3,372,186,0,2336,2337,5,79,0,0,2337,2338,3,96,48,0,2338,371,
        1,0,0,0,2339,2341,3,206,103,0,2340,2339,1,0,0,0,2340,2341,1,0,0,
        0,2341,2342,1,0,0,0,2342,2343,3,146,73,0,2343,2344,3,232,116,0,2344,
        2354,1,0,0,0,2345,2347,3,206,103,0,2346,2345,1,0,0,0,2346,2347,1,
        0,0,0,2347,2348,1,0,0,0,2348,2350,3,146,73,0,2349,2351,3,254,127,
        0,2350,2349,1,0,0,0,2350,2351,1,0,0,0,2351,2354,1,0,0,0,2352,2354,
        5,124,0,0,2353,2340,1,0,0,0,2353,2346,1,0,0,0,2353,2352,1,0,0,0,
        2354,373,1,0,0,0,2355,2357,5,64,0,0,2356,2358,3,82,41,0,2357,2356,
        1,0,0,0,2357,2358,1,0,0,0,2358,375,1,0,0,0,2359,2362,3,378,189,0,
        2360,2362,3,382,191,0,2361,2359,1,0,0,0,2361,2360,1,0,0,0,2362,377,
        1,0,0,0,2363,2364,5,64,0,0,2364,2366,5,78,0,0,2365,2367,3,380,190,
        0,2366,2365,1,0,0,0,2366,2367,1,0,0,0,2367,2368,1,0,0,0,2368,2369,
        5,79,0,0,2369,379,1,0,0,0,2370,2371,6,190,-1,0,2371,2373,3,252,126,
        0,2372,2374,5,124,0,0,2373,2372,1,0,0,0,2373,2374,1,0,0,0,2374,2383,
        1,0,0,0,2375,2376,10,1,0,0,2376,2377,5,115,0,0,2377,2379,3,252,126,
        0,2378,2380,5,124,0,0,2379,2378,1,0,0,0,2379,2380,1,0,0,0,2380,2382,
        1,0,0,0,2381,2375,1,0,0,0,2382,2385,1,0,0,0,2383,2381,1,0,0,0,2383,
        2384,1,0,0,0,2384,381,1,0,0,0,2385,2383,1,0,0,0,2386,2387,5,43,0,
        0,2387,2388,5,78,0,0,2388,2389,3,88,44,0,2389,2390,5,79,0,0,2390,
        2393,1,0,0,0,2391,2393,5,43,0,0,2392,2386,1,0,0,0,2392,2391,1,0,
        0,0,2393,383,1,0,0,0,2394,2395,5,96,0,0,2395,2396,5,96,0,0,2396,
        385,1,0,0,0,2397,2398,5,96,0,0,2398,2399,5,96,0,0,2399,2400,5,94,
        0,0,2400,387,1,0,0,0,2401,2450,5,42,0,0,2402,2450,5,21,0,0,2403,
        2404,5,42,0,0,2404,2405,5,80,0,0,2405,2450,5,81,0,0,2406,2407,5,
        21,0,0,2407,2408,5,80,0,0,2408,2450,5,81,0,0,2409,2450,5,84,0,0,
        2410,2450,5,85,0,0,2411,2450,5,86,0,0,2412,2450,5,87,0,0,2413,2450,
        5,88,0,0,2414,2450,5,89,0,0,2415,2450,5,90,0,0,2416,2450,5,91,0,
        0,2417,2450,5,92,0,0,2418,2450,5,93,0,0,2419,2450,5,94,0,0,2420,
        2450,5,95,0,0,2421,2450,5,96,0,0,2422,2450,5,97,0,0,2423,2450,5,
        98,0,0,2424,2450,5,99,0,0,2425,2450,5,100,0,0,2426,2450,5,101,0,
        0,2427,2450,5,102,0,0,2428,2450,5,103,0,0,2429,2450,5,104,0,0,2430,
        2450,5,105,0,0,2431,2450,3,384,192,0,2432,2450,3,386,193,0,2433,
        2450,5,106,0,0,2434,2450,5,107,0,0,2435,2450,5,108,0,0,2436,2450,
        5,109,0,0,2437,2450,5,110,0,0,2438,2450,5,111,0,0,2439,2450,5,112,
        0,0,2440,2450,5,113,0,0,2441,2450,5,114,0,0,2442,2450,5,115,0,0,
        2443,2450,5,116,0,0,2444,2450,5,117,0,0,2445,2446,5,78,0,0,2446,
        2450,5,79,0,0,2447,2448,5,80,0,0,2448,2450,5,81,0,0,2449,2401,1,
        0,0,0,2449,2402,1,0,0,0,2449,2403,1,0,0,0,2449,2406,1,0,0,0,2449,
        2409,1,0,0,0,2449,2410,1,0,0,0,2449,2411,1,0,0,0,2449,2412,1,0,0,
        0,2449,2413,1,0,0,0,2449,2414,1,0,0,0,2449,2415,1,0,0,0,2449,2416,
        1,0,0,0,2449,2417,1,0,0,0,2449,2418,1,0,0,0,2449,2419,1,0,0,0,2449,
        2420,1,0,0,0,2449,2421,1,0,0,0,2449,2422,1,0,0,0,2449,2423,1,0,0,
        0,2449,2424,1,0,0,0,2449,2425,1,0,0,0,2449,2426,1,0,0,0,2449,2427,
        1,0,0,0,2449,2428,1,0,0,0,2449,2429,1,0,0,0,2449,2430,1,0,0,0,2449,
        2431,1,0,0,0,2449,2432,1,0,0,0,2449,2433,1,0,0,0,2449,2434,1,0,0,
        0,2449,2435,1,0,0,0,2449,2436,1,0,0,0,2449,2437,1,0,0,0,2449,2438,
        1,0,0,0,2449,2439,1,0,0,0,2449,2440,1,0,0,0,2449,2441,1,0,0,0,2449,
        2442,1,0,0,0,2449,2443,1,0,0,0,2449,2444,1,0,0,0,2449,2445,1,0,0,
        0,2449,2447,1,0,0,0,2450,389,1,0,0,0,2451,2459,5,126,0,0,2452,2459,
        5,133,0,0,2453,2459,5,134,0,0,2454,2459,5,135,0,0,2455,2459,3,392,
        196,0,2456,2459,3,394,197,0,2457,2459,3,396,198,0,2458,2451,1,0,
        0,0,2458,2452,1,0,0,0,2458,2453,1,0,0,0,2458,2454,1,0,0,0,2458,2455,
        1,0,0,0,2458,2456,1,0,0,0,2458,2457,1,0,0,0,2459,391,1,0,0,0,2460,
        2461,7,9,0,0,2461,393,1,0,0,0,2462,2463,5,44,0,0,2463,395,1,0,0,
        0,2464,2465,7,10,0,0,2465,397,1,0,0,0,315,399,411,415,426,430,445,
        452,457,459,464,470,480,487,493,497,502,508,515,521,524,527,530,
        537,544,596,611,617,623,636,638,644,659,665,695,700,704,708,711,
        715,721,723,731,735,738,745,752,756,761,765,768,773,779,792,803,
        805,820,822,834,836,849,851,869,871,883,885,896,907,918,929,940,
        950,958,971,981,988,992,996,1000,1004,1009,1012,1015,1021,1029,1034,
        1037,1043,1054,1077,1081,1089,1095,1115,1119,1132,1136,1139,1146,
        1154,1164,1175,1187,1197,1202,1209,1212,1217,1222,1243,1247,1252,
        1263,1269,1273,1278,1282,1287,1290,1312,1318,1329,1333,1336,1346,
        1352,1355,1362,1372,1376,1379,1382,1386,1391,1393,1397,1401,1410,
        1423,1431,1437,1443,1447,1450,1459,1468,1476,1487,1493,1504,1507,
        1512,1527,1533,1542,1552,1558,1566,1570,1574,1579,1584,1591,1593,
        1598,1602,1616,1622,1637,1647,1652,1659,1665,1670,1676,1683,1687,
        1689,1691,1698,1701,1704,1707,1712,1716,1719,1723,1727,1732,1735,
        1737,1741,1748,1754,1758,1764,1769,1771,1777,1781,1787,1794,1798,
        1800,1802,1809,1819,1823,1825,1827,1831,1834,1840,1850,1854,1860,
        1868,1872,1875,1879,1884,1887,1890,1894,1899,1909,1916,1921,1925,
        1930,1936,1940,1946,1952,1956,1961,1967,1971,1974,1978,1981,1983,
        1986,1996,2001,2003,2006,2009,2012,2021,2031,2036,2039,2043,2046,
        2049,2053,2062,2076,2082,2086,2090,2094,2098,2102,2106,2110,2113,
        2117,2128,2132,2139,2143,2148,2153,2160,2164,2174,2190,2195,2199,
        2202,2206,2212,2215,2219,2229,2232,2240,2245,2250,2258,2265,2269,
        2276,2282,2286,2292,2301,2305,2308,2324,2331,2340,2346,2350,2353,
        2357,2361,2366,2373,2379,2383,2392,2449,2458
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CPP14Parser.__ATN) {
            CPP14Parser.__ATN = new antlr.ATNDeserializer().deserialize(CPP14Parser._serializedATN);
        }

        return CPP14Parser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CPP14Parser.literalNames, CPP14Parser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return CPP14Parser.vocabulary;
    }

    private static readonly decisionsToDFA = CPP14Parser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class TranslationunitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.EOF, 0)!;
    }
    public declarationseq(): DeclarationseqContext | null {
        return this.getRuleContext(0, DeclarationseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_translationunit;
    }
}


export class PrimaryexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public This(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.This, 0);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public idexpression(): IdexpressionContext | null {
        return this.getRuleContext(0, IdexpressionContext);
    }
    public lambdaexpression(): LambdaexpressionContext | null {
        return this.getRuleContext(0, LambdaexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_primaryexpression;
    }
}


export class IdexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unqualifiedid(): UnqualifiedidContext | null {
        return this.getRuleContext(0, UnqualifiedidContext);
    }
    public qualifiedid(): QualifiedidContext | null {
        return this.getRuleContext(0, QualifiedidContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_idexpression;
    }
}


export class UnqualifiedidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public operatorfunctionid(): OperatorfunctionidContext | null {
        return this.getRuleContext(0, OperatorfunctionidContext);
    }
    public conversionfunctionid(): ConversionfunctionidContext | null {
        return this.getRuleContext(0, ConversionfunctionidContext);
    }
    public literaloperatorid(): LiteraloperatoridContext | null {
        return this.getRuleContext(0, LiteraloperatoridContext);
    }
    public Tilde(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Tilde, 0);
    }
    public classname(): ClassnameContext | null {
        return this.getRuleContext(0, ClassnameContext);
    }
    public decltypespecifier(): DecltypespecifierContext | null {
        return this.getRuleContext(0, DecltypespecifierContext);
    }
    public templateid(): TemplateidContext | null {
        return this.getRuleContext(0, TemplateidContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_unqualifiedid;
    }
}


export class QualifiedidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestednamespecifier(): NestednamespecifierContext {
        return this.getRuleContext(0, NestednamespecifierContext)!;
    }
    public unqualifiedid(): UnqualifiedidContext {
        return this.getRuleContext(0, UnqualifiedidContext)!;
    }
    public Template(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Template, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_qualifiedid;
    }
}


export class NestednamespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Doublecolon(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Doublecolon, 0)!;
    }
    public typename(): TypenameContext | null {
        return this.getRuleContext(0, TypenameContext);
    }
    public namespacename(): NamespacenameContext | null {
        return this.getRuleContext(0, NamespacenameContext);
    }
    public decltypespecifier(): DecltypespecifierContext | null {
        return this.getRuleContext(0, DecltypespecifierContext);
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public simpletemplateid(): SimpletemplateidContext | null {
        return this.getRuleContext(0, SimpletemplateidContext);
    }
    public Template(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Template, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_nestednamespecifier;
    }
}


export class LambdaexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lambdaintroducer(): LambdaintroducerContext {
        return this.getRuleContext(0, LambdaintroducerContext)!;
    }
    public compoundstatement(): CompoundstatementContext {
        return this.getRuleContext(0, CompoundstatementContext)!;
    }
    public lambdadeclarator(): LambdadeclaratorContext | null {
        return this.getRuleContext(0, LambdadeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_lambdaexpression;
    }
}


export class LambdaintroducerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftBracket(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBracket, 0)!;
    }
    public RightBracket(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBracket, 0)!;
    }
    public lambdacapture(): LambdacaptureContext | null {
        return this.getRuleContext(0, LambdacaptureContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_lambdaintroducer;
    }
}


export class LambdacaptureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public capturedefault(): CapturedefaultContext | null {
        return this.getRuleContext(0, CapturedefaultContext);
    }
    public capturelist(): CapturelistContext | null {
        return this.getRuleContext(0, CapturelistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_lambdacapture;
    }
}


export class CapturedefaultContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.And, 0);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_capturedefault;
    }
}


export class CapturelistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public capture(): CaptureContext {
        return this.getRuleContext(0, CaptureContext)!;
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public capturelist(): CapturelistContext | null {
        return this.getRuleContext(0, CapturelistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_capturelist;
    }
}


export class CaptureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplecapture(): SimplecaptureContext | null {
        return this.getRuleContext(0, SimplecaptureContext);
    }
    public initcapture(): InitcaptureContext | null {
        return this.getRuleContext(0, InitcaptureContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_capture;
    }
}


export class SimplecaptureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.And, 0);
    }
    public This(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.This, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_simplecapture;
    }
}


export class InitcaptureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public initializer(): InitializerContext {
        return this.getRuleContext(0, InitializerContext)!;
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.And, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_initcapture;
    }
}


export class LambdadeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public parameterdeclarationclause(): ParameterdeclarationclauseContext {
        return this.getRuleContext(0, ParameterdeclarationclauseContext)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public Mutable(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Mutable, 0);
    }
    public exceptionspecification(): ExceptionspecificationContext | null {
        return this.getRuleContext(0, ExceptionspecificationContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public trailingreturntype(): TrailingreturntypeContext | null {
        return this.getRuleContext(0, TrailingreturntypeContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_lambdadeclarator;
    }
}


export class PostfixexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primaryexpression(): PrimaryexpressionContext | null {
        return this.getRuleContext(0, PrimaryexpressionContext);
    }
    public simpletypespecifier(): SimpletypespecifierContext | null {
        return this.getRuleContext(0, SimpletypespecifierContext);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public expressionlist(): ExpressionlistContext | null {
        return this.getRuleContext(0, ExpressionlistContext);
    }
    public typenamespecifier(): TypenamespecifierContext | null {
        return this.getRuleContext(0, TypenamespecifierContext);
    }
    public bracedinitlist(): BracedinitlistContext | null {
        return this.getRuleContext(0, BracedinitlistContext);
    }
    public Dynamic_cast(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Dynamic_cast, 0);
    }
    public Less(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Less, 0);
    }
    public typeid(): TypeidContext | null {
        return this.getRuleContext(0, TypeidContext);
    }
    public Greater(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Greater, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public Static_cast(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Static_cast, 0);
    }
    public Reinterpret_cast(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Reinterpret_cast, 0);
    }
    public Const_cast(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Const_cast, 0);
    }
    public Typeid(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Typeid, 0);
    }
    public postfixexpression(): PostfixexpressionContext | null {
        return this.getRuleContext(0, PostfixexpressionContext);
    }
    public LeftBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    }
    public RightBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBracket, 0);
    }
    public Dot(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Dot, 0);
    }
    public idexpression(): IdexpressionContext | null {
        return this.getRuleContext(0, IdexpressionContext);
    }
    public Template(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Template, 0);
    }
    public Arrow(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Arrow, 0);
    }
    public pseudodestructorname(): PseudodestructornameContext | null {
        return this.getRuleContext(0, PseudodestructornameContext);
    }
    public PlusPlus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.PlusPlus, 0);
    }
    public MinusMinus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.MinusMinus, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_postfixexpression;
    }
}


export class ExpressionlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public initializerlist(): InitializerlistContext {
        return this.getRuleContext(0, InitializerlistContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_expressionlist;
    }
}


export class PseudodestructornameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typename(): TypenameContext[];
    public typename(i: number): TypenameContext | null;
    public typename(i?: number): TypenameContext[] | TypenameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypenameContext);
        }

        return this.getRuleContext(i, TypenameContext);
    }
    public Doublecolon(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    }
    public Tilde(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Tilde, 0)!;
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public Template(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Template, 0);
    }
    public simpletemplateid(): SimpletemplateidContext | null {
        return this.getRuleContext(0, SimpletemplateidContext);
    }
    public decltypespecifier(): DecltypespecifierContext | null {
        return this.getRuleContext(0, DecltypespecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_pseudodestructorname;
    }
}


export class UnaryexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public postfixexpression(): PostfixexpressionContext | null {
        return this.getRuleContext(0, PostfixexpressionContext);
    }
    public PlusPlus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.PlusPlus, 0);
    }
    public castexpression(): CastexpressionContext | null {
        return this.getRuleContext(0, CastexpressionContext);
    }
    public MinusMinus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.MinusMinus, 0);
    }
    public unaryoperator(): UnaryoperatorContext | null {
        return this.getRuleContext(0, UnaryoperatorContext);
    }
    public Sizeof(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Sizeof, 0);
    }
    public unaryexpression(): UnaryexpressionContext | null {
        return this.getRuleContext(0, UnaryexpressionContext);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public typeid(): TypeidContext | null {
        return this.getRuleContext(0, TypeidContext);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public Alignof(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Alignof, 0);
    }
    public noexceptexpression(): NoexceptexpressionContext | null {
        return this.getRuleContext(0, NoexceptexpressionContext);
    }
    public newexpression(): NewexpressionContext | null {
        return this.getRuleContext(0, NewexpressionContext);
    }
    public deleteexpression(): DeleteexpressionContext | null {
        return this.getRuleContext(0, DeleteexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_unaryexpression;
    }
}


export class UnaryoperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Or(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Or, 0);
    }
    public Star(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Star, 0);
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.And, 0);
    }
    public Plus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Plus, 0);
    }
    public Not(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Not, 0);
    }
    public Tilde(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Tilde, 0);
    }
    public Minus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Minus, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_unaryoperator;
    }
}


export class NewexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public New(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.New, 0)!;
    }
    public newtypeid(): NewtypeidContext | null {
        return this.getRuleContext(0, NewtypeidContext);
    }
    public Doublecolon(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    }
    public newplacement(): NewplacementContext | null {
        return this.getRuleContext(0, NewplacementContext);
    }
    public newinitializer(): NewinitializerContext | null {
        return this.getRuleContext(0, NewinitializerContext);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public typeid(): TypeidContext | null {
        return this.getRuleContext(0, TypeidContext);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_newexpression;
    }
}


export class NewplacementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public expressionlist(): ExpressionlistContext {
        return this.getRuleContext(0, ExpressionlistContext)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_newplacement;
    }
}


export class NewtypeidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typespecifierseq(): TypespecifierseqContext {
        return this.getRuleContext(0, TypespecifierseqContext)!;
    }
    public newdeclarator(): NewdeclaratorContext | null {
        return this.getRuleContext(0, NewdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_newtypeid;
    }
}


export class NewdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ptroperator(): PtroperatorContext | null {
        return this.getRuleContext(0, PtroperatorContext);
    }
    public newdeclarator(): NewdeclaratorContext | null {
        return this.getRuleContext(0, NewdeclaratorContext);
    }
    public noptrnewdeclarator(): NoptrnewdeclaratorContext | null {
        return this.getRuleContext(0, NoptrnewdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_newdeclarator;
    }
}


export class NoptrnewdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftBracket(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBracket, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RightBracket(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBracket, 0)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public noptrnewdeclarator(): NoptrnewdeclaratorContext | null {
        return this.getRuleContext(0, NoptrnewdeclaratorContext);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_noptrnewdeclarator;
    }
}


export class NewinitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public expressionlist(): ExpressionlistContext | null {
        return this.getRuleContext(0, ExpressionlistContext);
    }
    public bracedinitlist(): BracedinitlistContext | null {
        return this.getRuleContext(0, BracedinitlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_newinitializer;
    }
}


export class DeleteexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Delete(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Delete, 0)!;
    }
    public castexpression(): CastexpressionContext {
        return this.getRuleContext(0, CastexpressionContext)!;
    }
    public Doublecolon(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    }
    public LeftBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    }
    public RightBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBracket, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_deleteexpression;
    }
}


export class NoexceptexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Noexcept(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Noexcept, 0)!;
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_noexceptexpression;
    }
}


export class CastexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unaryexpression(): UnaryexpressionContext | null {
        return this.getRuleContext(0, UnaryexpressionContext);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public typeid(): TypeidContext | null {
        return this.getRuleContext(0, TypeidContext);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public castexpression(): CastexpressionContext | null {
        return this.getRuleContext(0, CastexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_castexpression;
    }
}


export class PmexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public castexpression(): CastexpressionContext {
        return this.getRuleContext(0, CastexpressionContext)!;
    }
    public pmexpression(): PmexpressionContext | null {
        return this.getRuleContext(0, PmexpressionContext);
    }
    public DotStar(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.DotStar, 0);
    }
    public ArrowStar(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.ArrowStar, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_pmexpression;
    }
}


export class MultiplicativeexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pmexpression(): PmexpressionContext {
        return this.getRuleContext(0, PmexpressionContext)!;
    }
    public multiplicativeexpression(): MultiplicativeexpressionContext | null {
        return this.getRuleContext(0, MultiplicativeexpressionContext);
    }
    public Star(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Star, 0);
    }
    public Div(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Div, 0);
    }
    public Mod(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Mod, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_multiplicativeexpression;
    }
}


export class AdditiveexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicativeexpression(): MultiplicativeexpressionContext {
        return this.getRuleContext(0, MultiplicativeexpressionContext)!;
    }
    public additiveexpression(): AdditiveexpressionContext | null {
        return this.getRuleContext(0, AdditiveexpressionContext);
    }
    public Plus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Plus, 0);
    }
    public Minus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Minus, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_additiveexpression;
    }
}


export class ShiftexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additiveexpression(): AdditiveexpressionContext {
        return this.getRuleContext(0, AdditiveexpressionContext)!;
    }
    public shiftexpression(): ShiftexpressionContext | null {
        return this.getRuleContext(0, ShiftexpressionContext);
    }
    public LeftShift(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftShift, 0);
    }
    public rightShift(): RightShiftContext | null {
        return this.getRuleContext(0, RightShiftContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_shiftexpression;
    }
}


export class RelationalexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public shiftexpression(): ShiftexpressionContext {
        return this.getRuleContext(0, ShiftexpressionContext)!;
    }
    public relationalexpression(): RelationalexpressionContext | null {
        return this.getRuleContext(0, RelationalexpressionContext);
    }
    public Less(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Less, 0);
    }
    public Greater(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Greater, 0);
    }
    public LessEqual(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LessEqual, 0);
    }
    public GreaterEqual(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.GreaterEqual, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_relationalexpression;
    }
}


export class EqualityexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relationalexpression(): RelationalexpressionContext {
        return this.getRuleContext(0, RelationalexpressionContext)!;
    }
    public equalityexpression(): EqualityexpressionContext | null {
        return this.getRuleContext(0, EqualityexpressionContext);
    }
    public Equal(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Equal, 0);
    }
    public NotEqual(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.NotEqual, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_equalityexpression;
    }
}


export class AndexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public equalityexpression(): EqualityexpressionContext {
        return this.getRuleContext(0, EqualityexpressionContext)!;
    }
    public andexpression(): AndexpressionContext | null {
        return this.getRuleContext(0, AndexpressionContext);
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.And, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_andexpression;
    }
}


export class ExclusiveorexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public andexpression(): AndexpressionContext {
        return this.getRuleContext(0, AndexpressionContext)!;
    }
    public exclusiveorexpression(): ExclusiveorexpressionContext | null {
        return this.getRuleContext(0, ExclusiveorexpressionContext);
    }
    public Caret(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Caret, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_exclusiveorexpression;
    }
}


export class InclusiveorexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exclusiveorexpression(): ExclusiveorexpressionContext {
        return this.getRuleContext(0, ExclusiveorexpressionContext)!;
    }
    public inclusiveorexpression(): InclusiveorexpressionContext | null {
        return this.getRuleContext(0, InclusiveorexpressionContext);
    }
    public Or(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Or, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_inclusiveorexpression;
    }
}


export class LogicalandexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public inclusiveorexpression(): InclusiveorexpressionContext {
        return this.getRuleContext(0, InclusiveorexpressionContext)!;
    }
    public logicalandexpression(): LogicalandexpressionContext | null {
        return this.getRuleContext(0, LogicalandexpressionContext);
    }
    public AndAnd(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.AndAnd, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_logicalandexpression;
    }
}


export class LogicalorexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalandexpression(): LogicalandexpressionContext {
        return this.getRuleContext(0, LogicalandexpressionContext)!;
    }
    public logicalorexpression(): LogicalorexpressionContext | null {
        return this.getRuleContext(0, LogicalorexpressionContext);
    }
    public OrOr(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.OrOr, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_logicalorexpression;
    }
}


export class ConditionalexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalorexpression(): LogicalorexpressionContext {
        return this.getRuleContext(0, LogicalorexpressionContext)!;
    }
    public Question(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Question, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public Colon(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Colon, 0);
    }
    public assignmentexpression(): AssignmentexpressionContext | null {
        return this.getRuleContext(0, AssignmentexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_conditionalexpression;
    }
}


export class AssignmentexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public conditionalexpression(): ConditionalexpressionContext | null {
        return this.getRuleContext(0, ConditionalexpressionContext);
    }
    public logicalorexpression(): LogicalorexpressionContext | null {
        return this.getRuleContext(0, LogicalorexpressionContext);
    }
    public assignmentoperator(): AssignmentoperatorContext | null {
        return this.getRuleContext(0, AssignmentoperatorContext);
    }
    public initializerclause(): InitializerclauseContext | null {
        return this.getRuleContext(0, InitializerclauseContext);
    }
    public throwexpression(): ThrowexpressionContext | null {
        return this.getRuleContext(0, ThrowexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_assignmentexpression;
    }
}


export class AssignmentoperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public StarAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.StarAssign, 0);
    }
    public DivAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.DivAssign, 0);
    }
    public ModAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.ModAssign, 0);
    }
    public PlusAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.PlusAssign, 0);
    }
    public MinusAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.MinusAssign, 0);
    }
    public rightShiftAssign(): RightShiftAssignContext | null {
        return this.getRuleContext(0, RightShiftAssignContext);
    }
    public LeftShiftAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftShiftAssign, 0);
    }
    public AndAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.AndAssign, 0);
    }
    public XorAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.XorAssign, 0);
    }
    public OrAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.OrAssign, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_assignmentoperator;
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignmentexpression(): AssignmentexpressionContext {
        return this.getRuleContext(0, AssignmentexpressionContext)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_expression;
    }
}


export class ConstantexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public conditionalexpression(): ConditionalexpressionContext {
        return this.getRuleContext(0, ConditionalexpressionContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_constantexpression;
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public labeledstatement(): LabeledstatementContext | null {
        return this.getRuleContext(0, LabeledstatementContext);
    }
    public expressionstatement(): ExpressionstatementContext | null {
        return this.getRuleContext(0, ExpressionstatementContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public compoundstatement(): CompoundstatementContext | null {
        return this.getRuleContext(0, CompoundstatementContext);
    }
    public selectionstatement(): SelectionstatementContext | null {
        return this.getRuleContext(0, SelectionstatementContext);
    }
    public iterationstatement(): IterationstatementContext | null {
        return this.getRuleContext(0, IterationstatementContext);
    }
    public jumpstatement(): JumpstatementContext | null {
        return this.getRuleContext(0, JumpstatementContext);
    }
    public declarationstatement(): DeclarationstatementContext | null {
        return this.getRuleContext(0, DeclarationstatementContext);
    }
    public tryblock(): TryblockContext | null {
        return this.getRuleContext(0, TryblockContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_statement;
    }
}


export class LabeledstatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Colon, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public Case(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Case, 0);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public Default(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Default, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_labeledstatement;
    }
}


export class ExpressionstatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_expressionstatement;
    }
}


export class CompoundstatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBrace, 0)!;
    }
    public RightBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBrace, 0)!;
    }
    public statementseq(): StatementseqContext | null {
        return this.getRuleContext(0, StatementseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_compoundstatement;
    }
}


export class StatementseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public statementseq(): StatementseqContext | null {
        return this.getRuleContext(0, StatementseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_statementseq;
    }
}


export class SelectionstatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public If(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.If, 0);
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public condition(): ConditionContext {
        return this.getRuleContext(0, ConditionContext)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public Else(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Else, 0);
    }
    public Switch(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Switch, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_selectionstatement;
    }
}


export class ConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public declspecifierseq(): DeclspecifierseqContext | null {
        return this.getRuleContext(0, DeclspecifierseqContext);
    }
    public declarator(): DeclaratorContext | null {
        return this.getRuleContext(0, DeclaratorContext);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public initializerclause(): InitializerclauseContext | null {
        return this.getRuleContext(0, InitializerclauseContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public bracedinitlist(): BracedinitlistContext | null {
        return this.getRuleContext(0, BracedinitlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_condition;
    }
}


export class IterationstatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public While(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.While, 0);
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public condition(): ConditionContext | null {
        return this.getRuleContext(0, ConditionContext);
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public Do(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Do, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public Semi(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Semi, 0);
    }
    public For(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.For, 0);
    }
    public forinitstatement(): ForinitstatementContext | null {
        return this.getRuleContext(0, ForinitstatementContext);
    }
    public forrangedeclaration(): ForrangedeclarationContext | null {
        return this.getRuleContext(0, ForrangedeclarationContext);
    }
    public Colon(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Colon, 0);
    }
    public forrangeinitializer(): ForrangeinitializerContext | null {
        return this.getRuleContext(0, ForrangeinitializerContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_iterationstatement;
    }
}


export class ForinitstatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionstatement(): ExpressionstatementContext | null {
        return this.getRuleContext(0, ExpressionstatementContext);
    }
    public simpledeclaration(): SimpledeclarationContext | null {
        return this.getRuleContext(0, SimpledeclarationContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_forinitstatement;
    }
}


export class ForrangedeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declspecifierseq(): DeclspecifierseqContext {
        return this.getRuleContext(0, DeclspecifierseqContext)!;
    }
    public declarator(): DeclaratorContext {
        return this.getRuleContext(0, DeclaratorContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_forrangedeclaration;
    }
}


export class ForrangeinitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public bracedinitlist(): BracedinitlistContext | null {
        return this.getRuleContext(0, BracedinitlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_forrangeinitializer;
    }
}


export class JumpstatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Break(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Break, 0);
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public Continue(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Continue, 0);
    }
    public Return(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Return, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public bracedinitlist(): BracedinitlistContext | null {
        return this.getRuleContext(0, BracedinitlistContext);
    }
    public Goto(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Goto, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_jumpstatement;
    }
}


export class DeclarationstatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockdeclaration(): BlockdeclarationContext {
        return this.getRuleContext(0, BlockdeclarationContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_declarationstatement;
    }
}


export class DeclarationseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declaration(): DeclarationContext {
        return this.getRuleContext(0, DeclarationContext)!;
    }
    public declarationseq(): DeclarationseqContext | null {
        return this.getRuleContext(0, DeclarationseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_declarationseq;
    }
}


export class DeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockdeclaration(): BlockdeclarationContext | null {
        return this.getRuleContext(0, BlockdeclarationContext);
    }
    public functiondefinition(): FunctiondefinitionContext | null {
        return this.getRuleContext(0, FunctiondefinitionContext);
    }
    public templatedeclaration(): TemplatedeclarationContext | null {
        return this.getRuleContext(0, TemplatedeclarationContext);
    }
    public explicitinstantiation(): ExplicitinstantiationContext | null {
        return this.getRuleContext(0, ExplicitinstantiationContext);
    }
    public explicitspecialization(): ExplicitspecializationContext | null {
        return this.getRuleContext(0, ExplicitspecializationContext);
    }
    public linkagespecification(): LinkagespecificationContext | null {
        return this.getRuleContext(0, LinkagespecificationContext);
    }
    public namespacedefinition(): NamespacedefinitionContext | null {
        return this.getRuleContext(0, NamespacedefinitionContext);
    }
    public emptydeclaration(): EmptydeclarationContext | null {
        return this.getRuleContext(0, EmptydeclarationContext);
    }
    public attributedeclaration(): AttributedeclarationContext | null {
        return this.getRuleContext(0, AttributedeclarationContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_declaration;
    }
}


export class BlockdeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpledeclaration(): SimpledeclarationContext | null {
        return this.getRuleContext(0, SimpledeclarationContext);
    }
    public asmdefinition(): AsmdefinitionContext | null {
        return this.getRuleContext(0, AsmdefinitionContext);
    }
    public namespacealiasdefinition(): NamespacealiasdefinitionContext | null {
        return this.getRuleContext(0, NamespacealiasdefinitionContext);
    }
    public usingdeclaration(): UsingdeclarationContext | null {
        return this.getRuleContext(0, UsingdeclarationContext);
    }
    public usingdirective(): UsingdirectiveContext | null {
        return this.getRuleContext(0, UsingdirectiveContext);
    }
    public static_assertdeclaration(): Static_assertdeclarationContext | null {
        return this.getRuleContext(0, Static_assertdeclarationContext);
    }
    public aliasdeclaration(): AliasdeclarationContext | null {
        return this.getRuleContext(0, AliasdeclarationContext);
    }
    public opaqueenumdeclaration(): OpaqueenumdeclarationContext | null {
        return this.getRuleContext(0, OpaqueenumdeclarationContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_blockdeclaration;
    }
}


export class AliasdeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Using(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Using, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public Assign(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Assign, 0)!;
    }
    public typeid(): TypeidContext {
        return this.getRuleContext(0, TypeidContext)!;
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_aliasdeclaration;
    }
}


export class SimpledeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public declspecifierseq(): DeclspecifierseqContext | null {
        return this.getRuleContext(0, DeclspecifierseqContext);
    }
    public initdeclaratorlist(): InitdeclaratorlistContext | null {
        return this.getRuleContext(0, InitdeclaratorlistContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_simpledeclaration;
    }
}


export class Static_assertdeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Static_assert(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Static_assert, 0)!;
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public constantexpression(): ConstantexpressionContext {
        return this.getRuleContext(0, ConstantexpressionContext)!;
    }
    public Comma(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Comma, 0)!;
    }
    public Stringliteral(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Stringliteral, 0)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_static_assertdeclaration;
    }
}


export class EmptydeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_emptydeclaration;
    }
}


export class AttributedeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public attributespecifierseq(): AttributespecifierseqContext {
        return this.getRuleContext(0, AttributespecifierseqContext)!;
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attributedeclaration;
    }
}


export class DeclspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public storageclassspecifier(): StorageclassspecifierContext | null {
        return this.getRuleContext(0, StorageclassspecifierContext);
    }
    public typespecifier(): TypespecifierContext | null {
        return this.getRuleContext(0, TypespecifierContext);
    }
    public functionspecifier(): FunctionspecifierContext | null {
        return this.getRuleContext(0, FunctionspecifierContext);
    }
    public Friend(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Friend, 0);
    }
    public Typedef(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Typedef, 0);
    }
    public Constexpr(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Constexpr, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_declspecifier;
    }
}


export class DeclspecifierseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declspecifier(): DeclspecifierContext {
        return this.getRuleContext(0, DeclspecifierContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public declspecifierseq(): DeclspecifierseqContext | null {
        return this.getRuleContext(0, DeclspecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_declspecifierseq;
    }
}


export class StorageclassspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Register(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Register, 0);
    }
    public Static(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Static, 0);
    }
    public Thread_local(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Thread_local, 0);
    }
    public Extern(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Extern, 0);
    }
    public Mutable(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Mutable, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_storageclassspecifier;
    }
}


export class FunctionspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Inline(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Inline, 0);
    }
    public Virtual(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Virtual, 0);
    }
    public Explicit(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Explicit, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_functionspecifier;
    }
}


export class TypedefnameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_typedefname;
    }
}


export class TypespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public trailingtypespecifier(): TrailingtypespecifierContext | null {
        return this.getRuleContext(0, TrailingtypespecifierContext);
    }
    public classspecifier(): ClassspecifierContext | null {
        return this.getRuleContext(0, ClassspecifierContext);
    }
    public enumspecifier(): EnumspecifierContext | null {
        return this.getRuleContext(0, EnumspecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_typespecifier;
    }
}


export class TrailingtypespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpletypespecifier(): SimpletypespecifierContext | null {
        return this.getRuleContext(0, SimpletypespecifierContext);
    }
    public elaboratedtypespecifier(): ElaboratedtypespecifierContext | null {
        return this.getRuleContext(0, ElaboratedtypespecifierContext);
    }
    public typenamespecifier(): TypenamespecifierContext | null {
        return this.getRuleContext(0, TypenamespecifierContext);
    }
    public cvqualifier(): CvqualifierContext | null {
        return this.getRuleContext(0, CvqualifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_trailingtypespecifier;
    }
}


export class TypespecifierseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typespecifier(): TypespecifierContext {
        return this.getRuleContext(0, TypespecifierContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public typespecifierseq(): TypespecifierseqContext | null {
        return this.getRuleContext(0, TypespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_typespecifierseq;
    }
}


export class TrailingtypespecifierseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public trailingtypespecifier(): TrailingtypespecifierContext {
        return this.getRuleContext(0, TrailingtypespecifierContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public trailingtypespecifierseq(): TrailingtypespecifierseqContext | null {
        return this.getRuleContext(0, TrailingtypespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_trailingtypespecifierseq;
    }
}


export class SimpletypespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typename(): TypenameContext | null {
        return this.getRuleContext(0, TypenameContext);
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public Template(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Template, 0);
    }
    public simpletemplateid(): SimpletemplateidContext | null {
        return this.getRuleContext(0, SimpletemplateidContext);
    }
    public Char(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Char, 0);
    }
    public Char16(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Char16, 0);
    }
    public Char32(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Char32, 0);
    }
    public Wchar(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Wchar, 0);
    }
    public Bool(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Bool, 0);
    }
    public Short(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Short, 0);
    }
    public Int(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Int, 0);
    }
    public Long(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Long, 0);
    }
    public Signed(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Signed, 0);
    }
    public Unsigned(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Unsigned, 0);
    }
    public Float(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Float, 0);
    }
    public Double(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Double, 0);
    }
    public Void(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Void, 0);
    }
    public Auto(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Auto, 0);
    }
    public decltypespecifier(): DecltypespecifierContext | null {
        return this.getRuleContext(0, DecltypespecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_simpletypespecifier;
    }
}


export class TypenameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classname(): ClassnameContext | null {
        return this.getRuleContext(0, ClassnameContext);
    }
    public enumname(): EnumnameContext | null {
        return this.getRuleContext(0, EnumnameContext);
    }
    public typedefname(): TypedefnameContext | null {
        return this.getRuleContext(0, TypedefnameContext);
    }
    public simpletemplateid(): SimpletemplateidContext | null {
        return this.getRuleContext(0, SimpletemplateidContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_typename;
    }
}


export class DecltypespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Decltype(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Decltype, 0)!;
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public Auto(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Auto, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_decltypespecifier;
    }
}


export class ElaboratedtypespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classkey(): ClasskeyContext | null {
        return this.getRuleContext(0, ClasskeyContext);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public simpletemplateid(): SimpletemplateidContext | null {
        return this.getRuleContext(0, SimpletemplateidContext);
    }
    public Template(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Template, 0);
    }
    public Enum(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Enum, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_elaboratedtypespecifier;
    }
}


export class EnumnameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_enumname;
    }
}


export class EnumspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumhead(): EnumheadContext {
        return this.getRuleContext(0, EnumheadContext)!;
    }
    public LeftBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBrace, 0)!;
    }
    public RightBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBrace, 0)!;
    }
    public enumeratorlist(): EnumeratorlistContext | null {
        return this.getRuleContext(0, EnumeratorlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_enumspecifier;
    }
}


export class EnumheadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumkey(): EnumkeyContext {
        return this.getRuleContext(0, EnumkeyContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public enumbase(): EnumbaseContext | null {
        return this.getRuleContext(0, EnumbaseContext);
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_enumhead;
    }
}


export class OpaqueenumdeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumkey(): EnumkeyContext {
        return this.getRuleContext(0, EnumkeyContext)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public enumbase(): EnumbaseContext | null {
        return this.getRuleContext(0, EnumbaseContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_opaqueenumdeclaration;
    }
}


export class EnumkeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Enum(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Enum, 0)!;
    }
    public Class(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Class, 0);
    }
    public Struct(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Struct, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_enumkey;
    }
}


export class EnumbaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Colon, 0)!;
    }
    public typespecifierseq(): TypespecifierseqContext {
        return this.getRuleContext(0, TypespecifierseqContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_enumbase;
    }
}


export class EnumeratorlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumeratordefinition(): EnumeratordefinitionContext {
        return this.getRuleContext(0, EnumeratordefinitionContext)!;
    }
    public enumeratorlist(): EnumeratorlistContext | null {
        return this.getRuleContext(0, EnumeratorlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_enumeratorlist;
    }
}


export class EnumeratordefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumerator(): EnumeratorContext {
        return this.getRuleContext(0, EnumeratorContext)!;
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_enumeratordefinition;
    }
}


export class EnumeratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_enumerator;
    }
}


export class NamespacenameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public originalnamespacename(): OriginalnamespacenameContext | null {
        return this.getRuleContext(0, OriginalnamespacenameContext);
    }
    public namespacealias(): NamespacealiasContext | null {
        return this.getRuleContext(0, NamespacealiasContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_namespacename;
    }
}


export class OriginalnamespacenameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_originalnamespacename;
    }
}


export class NamespacedefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namednamespacedefinition(): NamednamespacedefinitionContext | null {
        return this.getRuleContext(0, NamednamespacedefinitionContext);
    }
    public unnamednamespacedefinition(): UnnamednamespacedefinitionContext | null {
        return this.getRuleContext(0, UnnamednamespacedefinitionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_namespacedefinition;
    }
}


export class NamednamespacedefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public originalnamespacedefinition(): OriginalnamespacedefinitionContext | null {
        return this.getRuleContext(0, OriginalnamespacedefinitionContext);
    }
    public extensionnamespacedefinition(): ExtensionnamespacedefinitionContext | null {
        return this.getRuleContext(0, ExtensionnamespacedefinitionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_namednamespacedefinition;
    }
}


export class OriginalnamespacedefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Namespace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Namespace, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public LeftBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBrace, 0)!;
    }
    public namespacebody(): NamespacebodyContext {
        return this.getRuleContext(0, NamespacebodyContext)!;
    }
    public RightBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBrace, 0)!;
    }
    public Inline(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Inline, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_originalnamespacedefinition;
    }
}


export class ExtensionnamespacedefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Namespace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Namespace, 0)!;
    }
    public originalnamespacename(): OriginalnamespacenameContext {
        return this.getRuleContext(0, OriginalnamespacenameContext)!;
    }
    public LeftBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBrace, 0)!;
    }
    public namespacebody(): NamespacebodyContext {
        return this.getRuleContext(0, NamespacebodyContext)!;
    }
    public RightBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBrace, 0)!;
    }
    public Inline(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Inline, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_extensionnamespacedefinition;
    }
}


export class UnnamednamespacedefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Namespace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Namespace, 0)!;
    }
    public LeftBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBrace, 0)!;
    }
    public namespacebody(): NamespacebodyContext {
        return this.getRuleContext(0, NamespacebodyContext)!;
    }
    public RightBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBrace, 0)!;
    }
    public Inline(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Inline, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_unnamednamespacedefinition;
    }
}


export class NamespacebodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declarationseq(): DeclarationseqContext | null {
        return this.getRuleContext(0, DeclarationseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_namespacebody;
    }
}


export class NamespacealiasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_namespacealias;
    }
}


export class NamespacealiasdefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Namespace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Namespace, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public Assign(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Assign, 0)!;
    }
    public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
        return this.getRuleContext(0, QualifiednamespacespecifierContext)!;
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_namespacealiasdefinition;
    }
}


export class QualifiednamespacespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namespacename(): NamespacenameContext {
        return this.getRuleContext(0, NamespacenameContext)!;
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_qualifiednamespacespecifier;
    }
}


export class UsingdeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Using(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Using, 0)!;
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public unqualifiedid(): UnqualifiedidContext {
        return this.getRuleContext(0, UnqualifiedidContext)!;
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public Typename(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Typename, 0);
    }
    public Doublecolon(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_usingdeclaration;
    }
}


export class UsingdirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Using(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Using, 0)!;
    }
    public Namespace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Namespace, 0)!;
    }
    public namespacename(): NamespacenameContext {
        return this.getRuleContext(0, NamespacenameContext)!;
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_usingdirective;
    }
}


export class AsmdefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Asm(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Asm, 0)!;
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public Stringliteral(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Stringliteral, 0)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public Semi(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Semi, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_asmdefinition;
    }
}


export class LinkagespecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Extern(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Extern, 0)!;
    }
    public Stringliteral(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Stringliteral, 0)!;
    }
    public LeftBrace(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    }
    public RightBrace(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBrace, 0);
    }
    public declarationseq(): DeclarationseqContext | null {
        return this.getRuleContext(0, DeclarationseqContext);
    }
    public declaration(): DeclarationContext | null {
        return this.getRuleContext(0, DeclarationContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_linkagespecification;
    }
}


export class AttributespecifierseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public attributespecifier(): AttributespecifierContext {
        return this.getRuleContext(0, AttributespecifierContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attributespecifierseq;
    }
}


export class AttributespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftBracket(): antlr.TerminalNode[];
    public LeftBracket(i: number): antlr.TerminalNode | null;
    public LeftBracket(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CPP14Parser.LeftBracket);
    	} else {
    		return this.getToken(CPP14Parser.LeftBracket, i);
    	}
    }
    public attributelist(): AttributelistContext | null {
        return this.getRuleContext(0, AttributelistContext);
    }
    public RightBracket(): antlr.TerminalNode[];
    public RightBracket(i: number): antlr.TerminalNode | null;
    public RightBracket(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CPP14Parser.RightBracket);
    	} else {
    		return this.getToken(CPP14Parser.RightBracket, i);
    	}
    }
    public alignmentspecifier(): AlignmentspecifierContext | null {
        return this.getRuleContext(0, AlignmentspecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attributespecifier;
    }
}


export class AlignmentspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Alignas(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Alignas, 0)!;
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public typeid(): TypeidContext | null {
        return this.getRuleContext(0, TypeidContext);
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_alignmentspecifier;
    }
}


export class AttributelistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public attributelist(): AttributelistContext | null {
        return this.getRuleContext(0, AttributelistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attributelist;
    }
}


export class AttributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public attributetoken(): AttributetokenContext {
        return this.getRuleContext(0, AttributetokenContext)!;
    }
    public attributeargumentclause(): AttributeargumentclauseContext | null {
        return this.getRuleContext(0, AttributeargumentclauseContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attribute;
    }
}


export class AttributetokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public attributescopedtoken(): AttributescopedtokenContext | null {
        return this.getRuleContext(0, AttributescopedtokenContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attributetoken;
    }
}


export class AttributescopedtokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public attributenamespace(): AttributenamespaceContext {
        return this.getRuleContext(0, AttributenamespaceContext)!;
    }
    public Doublecolon(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Doublecolon, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attributescopedtoken;
    }
}


export class AttributenamespaceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attributenamespace;
    }
}


export class AttributeargumentclauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public balancedtokenseq(): BalancedtokenseqContext {
        return this.getRuleContext(0, BalancedtokenseqContext)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_attributeargumentclause;
    }
}


export class BalancedtokenseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public balancedtoken(): BalancedtokenContext | null {
        return this.getRuleContext(0, BalancedtokenContext);
    }
    public balancedtokenseq(): BalancedtokenseqContext | null {
        return this.getRuleContext(0, BalancedtokenseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_balancedtokenseq;
    }
}


export class BalancedtokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public balancedtokenseq(): BalancedtokenseqContext {
        return this.getRuleContext(0, BalancedtokenseqContext)!;
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public LeftBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    }
    public RightBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBracket, 0);
    }
    public LeftBrace(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    }
    public RightBrace(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBrace, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_balancedtoken;
    }
}


export class InitdeclaratorlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public initdeclarator(): InitdeclaratorContext {
        return this.getRuleContext(0, InitdeclaratorContext)!;
    }
    public initdeclaratorlist(): InitdeclaratorlistContext | null {
        return this.getRuleContext(0, InitdeclaratorlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_initdeclaratorlist;
    }
}


export class InitdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declarator(): DeclaratorContext {
        return this.getRuleContext(0, DeclaratorContext)!;
    }
    public initializer(): InitializerContext | null {
        return this.getRuleContext(0, InitializerContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_initdeclarator;
    }
}


export class DeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ptrdeclarator(): PtrdeclaratorContext | null {
        return this.getRuleContext(0, PtrdeclaratorContext);
    }
    public noptrdeclarator(): NoptrdeclaratorContext | null {
        return this.getRuleContext(0, NoptrdeclaratorContext);
    }
    public parametersandqualifiers(): ParametersandqualifiersContext | null {
        return this.getRuleContext(0, ParametersandqualifiersContext);
    }
    public trailingreturntype(): TrailingreturntypeContext | null {
        return this.getRuleContext(0, TrailingreturntypeContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_declarator;
    }
}


export class PtrdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public noptrdeclarator(): NoptrdeclaratorContext | null {
        return this.getRuleContext(0, NoptrdeclaratorContext);
    }
    public ptroperator(): PtroperatorContext | null {
        return this.getRuleContext(0, PtroperatorContext);
    }
    public ptrdeclarator(): PtrdeclaratorContext | null {
        return this.getRuleContext(0, PtrdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_ptrdeclarator;
    }
}


export class NoptrdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declaratorid(): DeclaratoridContext | null {
        return this.getRuleContext(0, DeclaratoridContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public ptrdeclarator(): PtrdeclaratorContext | null {
        return this.getRuleContext(0, PtrdeclaratorContext);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public noptrdeclarator(): NoptrdeclaratorContext | null {
        return this.getRuleContext(0, NoptrdeclaratorContext);
    }
    public parametersandqualifiers(): ParametersandqualifiersContext | null {
        return this.getRuleContext(0, ParametersandqualifiersContext);
    }
    public LeftBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    }
    public RightBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBracket, 0);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_noptrdeclarator;
    }
}


export class ParametersandqualifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public parameterdeclarationclause(): ParameterdeclarationclauseContext {
        return this.getRuleContext(0, ParameterdeclarationclauseContext)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public cvqualifierseq(): CvqualifierseqContext | null {
        return this.getRuleContext(0, CvqualifierseqContext);
    }
    public refqualifier(): RefqualifierContext | null {
        return this.getRuleContext(0, RefqualifierContext);
    }
    public exceptionspecification(): ExceptionspecificationContext | null {
        return this.getRuleContext(0, ExceptionspecificationContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_parametersandqualifiers;
    }
}


export class TrailingreturntypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Arrow(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Arrow, 0)!;
    }
    public trailingtypespecifierseq(): TrailingtypespecifierseqContext {
        return this.getRuleContext(0, TrailingtypespecifierseqContext)!;
    }
    public abstractdeclarator(): AbstractdeclaratorContext | null {
        return this.getRuleContext(0, AbstractdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_trailingreturntype;
    }
}


export class PtroperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Star(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Star, 0);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public cvqualifierseq(): CvqualifierseqContext | null {
        return this.getRuleContext(0, CvqualifierseqContext);
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.And, 0);
    }
    public AndAnd(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.AndAnd, 0);
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_ptroperator;
    }
}


export class CvqualifierseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public cvqualifier(): CvqualifierContext {
        return this.getRuleContext(0, CvqualifierContext)!;
    }
    public cvqualifierseq(): CvqualifierseqContext | null {
        return this.getRuleContext(0, CvqualifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_cvqualifierseq;
    }
}


export class CvqualifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Const(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Const, 0);
    }
    public Volatile(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Volatile, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_cvqualifier;
    }
}


export class RefqualifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.And, 0);
    }
    public AndAnd(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.AndAnd, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_refqualifier;
    }
}


export class DeclaratoridContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public idexpression(): IdexpressionContext {
        return this.getRuleContext(0, IdexpressionContext)!;
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_declaratorid;
    }
}


export class TypeidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typespecifierseq(): TypespecifierseqContext {
        return this.getRuleContext(0, TypespecifierseqContext)!;
    }
    public abstractdeclarator(): AbstractdeclaratorContext | null {
        return this.getRuleContext(0, AbstractdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_typeid;
    }
}


export class AbstractdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ptrabstractdeclarator(): PtrabstractdeclaratorContext | null {
        return this.getRuleContext(0, PtrabstractdeclaratorContext);
    }
    public parametersandqualifiers(): ParametersandqualifiersContext | null {
        return this.getRuleContext(0, ParametersandqualifiersContext);
    }
    public trailingreturntype(): TrailingreturntypeContext | null {
        return this.getRuleContext(0, TrailingreturntypeContext);
    }
    public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | null {
        return this.getRuleContext(0, NoptrabstractdeclaratorContext);
    }
    public abstractpackdeclarator(): AbstractpackdeclaratorContext | null {
        return this.getRuleContext(0, AbstractpackdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_abstractdeclarator;
    }
}


export class PtrabstractdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | null {
        return this.getRuleContext(0, NoptrabstractdeclaratorContext);
    }
    public ptroperator(): PtroperatorContext | null {
        return this.getRuleContext(0, PtroperatorContext);
    }
    public ptrabstractdeclarator(): PtrabstractdeclaratorContext | null {
        return this.getRuleContext(0, PtrabstractdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_ptrabstractdeclarator;
    }
}


export class NoptrabstractdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parametersandqualifiers(): ParametersandqualifiersContext | null {
        return this.getRuleContext(0, ParametersandqualifiersContext);
    }
    public LeftBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    }
    public RightBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBracket, 0);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public ptrabstractdeclarator(): PtrabstractdeclaratorContext | null {
        return this.getRuleContext(0, PtrabstractdeclaratorContext);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | null {
        return this.getRuleContext(0, NoptrabstractdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_noptrabstractdeclarator;
    }
}


export class AbstractpackdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | null {
        return this.getRuleContext(0, NoptrabstractpackdeclaratorContext);
    }
    public ptroperator(): PtroperatorContext | null {
        return this.getRuleContext(0, PtroperatorContext);
    }
    public abstractpackdeclarator(): AbstractpackdeclaratorContext | null {
        return this.getRuleContext(0, AbstractpackdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_abstractpackdeclarator;
    }
}


export class NoptrabstractpackdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | null {
        return this.getRuleContext(0, NoptrabstractpackdeclaratorContext);
    }
    public parametersandqualifiers(): ParametersandqualifiersContext | null {
        return this.getRuleContext(0, ParametersandqualifiersContext);
    }
    public LeftBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    }
    public RightBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBracket, 0);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_noptrabstractpackdeclarator;
    }
}


export class ParameterdeclarationclauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameterdeclarationlist(): ParameterdeclarationlistContext | null {
        return this.getRuleContext(0, ParameterdeclarationlistContext);
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_parameterdeclarationclause;
    }
}


export class ParameterdeclarationlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameterdeclaration(): ParameterdeclarationContext {
        return this.getRuleContext(0, ParameterdeclarationContext)!;
    }
    public parameterdeclarationlist(): ParameterdeclarationlistContext | null {
        return this.getRuleContext(0, ParameterdeclarationlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_parameterdeclarationlist;
    }
}


export class ParameterdeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declspecifierseq(): DeclspecifierseqContext {
        return this.getRuleContext(0, DeclspecifierseqContext)!;
    }
    public declarator(): DeclaratorContext | null {
        return this.getRuleContext(0, DeclaratorContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public initializerclause(): InitializerclauseContext | null {
        return this.getRuleContext(0, InitializerclauseContext);
    }
    public abstractdeclarator(): AbstractdeclaratorContext | null {
        return this.getRuleContext(0, AbstractdeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_parameterdeclaration;
    }
}


export class FunctiondefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declarator(): DeclaratorContext {
        return this.getRuleContext(0, DeclaratorContext)!;
    }
    public functionbody(): FunctionbodyContext {
        return this.getRuleContext(0, FunctionbodyContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public declspecifierseq(): DeclspecifierseqContext | null {
        return this.getRuleContext(0, DeclspecifierseqContext);
    }
    public virtspecifierseq(): VirtspecifierseqContext | null {
        return this.getRuleContext(0, VirtspecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_functiondefinition;
    }
}


export class FunctionbodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public compoundstatement(): CompoundstatementContext | null {
        return this.getRuleContext(0, CompoundstatementContext);
    }
    public ctorinitializer(): CtorinitializerContext | null {
        return this.getRuleContext(0, CtorinitializerContext);
    }
    public functiontryblock(): FunctiontryblockContext | null {
        return this.getRuleContext(0, FunctiontryblockContext);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public Default(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Default, 0);
    }
    public Semi(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Semi, 0);
    }
    public Delete(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Delete, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_functionbody;
    }
}


export class InitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public braceorequalinitializer(): BraceorequalinitializerContext | null {
        return this.getRuleContext(0, BraceorequalinitializerContext);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public expressionlist(): ExpressionlistContext | null {
        return this.getRuleContext(0, ExpressionlistContext);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_initializer;
    }
}


export class BraceorequalinitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public initializerclause(): InitializerclauseContext | null {
        return this.getRuleContext(0, InitializerclauseContext);
    }
    public bracedinitlist(): BracedinitlistContext | null {
        return this.getRuleContext(0, BracedinitlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_braceorequalinitializer;
    }
}


export class InitializerclauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignmentexpression(): AssignmentexpressionContext | null {
        return this.getRuleContext(0, AssignmentexpressionContext);
    }
    public bracedinitlist(): BracedinitlistContext | null {
        return this.getRuleContext(0, BracedinitlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_initializerclause;
    }
}


export class InitializerlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public initializerclause(): InitializerclauseContext {
        return this.getRuleContext(0, InitializerclauseContext)!;
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public initializerlist(): InitializerlistContext | null {
        return this.getRuleContext(0, InitializerlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_initializerlist;
    }
}


export class BracedinitlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LeftBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBrace, 0)!;
    }
    public initializerlist(): InitializerlistContext | null {
        return this.getRuleContext(0, InitializerlistContext);
    }
    public RightBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBrace, 0)!;
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_bracedinitlist;
    }
}


export class ClassnameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public simpletemplateid(): SimpletemplateidContext | null {
        return this.getRuleContext(0, SimpletemplateidContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_classname;
    }
}


export class ClassspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classhead(): ClassheadContext {
        return this.getRuleContext(0, ClassheadContext)!;
    }
    public LeftBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftBrace, 0)!;
    }
    public RightBrace(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightBrace, 0)!;
    }
    public memberspecification(): MemberspecificationContext | null {
        return this.getRuleContext(0, MemberspecificationContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_classspecifier;
    }
}


export class ClassheadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classkey(): ClasskeyContext {
        return this.getRuleContext(0, ClasskeyContext)!;
    }
    public classheadname(): ClassheadnameContext | null {
        return this.getRuleContext(0, ClassheadnameContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public classvirtspecifier(): ClassvirtspecifierContext | null {
        return this.getRuleContext(0, ClassvirtspecifierContext);
    }
    public baseclause(): BaseclauseContext | null {
        return this.getRuleContext(0, BaseclauseContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_classhead;
    }
}


export class ClassheadnameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classname(): ClassnameContext {
        return this.getRuleContext(0, ClassnameContext)!;
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_classheadname;
    }
}


export class ClassvirtspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Final(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Final, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_classvirtspecifier;
    }
}


export class ClasskeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Class(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Class, 0);
    }
    public Struct(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Struct, 0);
    }
    public Union(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Union, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_classkey;
    }
}


export class MemberspecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberdeclaration(): MemberdeclarationContext | null {
        return this.getRuleContext(0, MemberdeclarationContext);
    }
    public memberspecification(): MemberspecificationContext | null {
        return this.getRuleContext(0, MemberspecificationContext);
    }
    public accessspecifier(): AccessspecifierContext | null {
        return this.getRuleContext(0, AccessspecifierContext);
    }
    public Colon(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Colon, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_memberspecification;
    }
}


export class MemberdeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semi(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Semi, 0);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public declspecifierseq(): DeclspecifierseqContext | null {
        return this.getRuleContext(0, DeclspecifierseqContext);
    }
    public memberdeclaratorlist(): MemberdeclaratorlistContext | null {
        return this.getRuleContext(0, MemberdeclaratorlistContext);
    }
    public functiondefinition(): FunctiondefinitionContext | null {
        return this.getRuleContext(0, FunctiondefinitionContext);
    }
    public usingdeclaration(): UsingdeclarationContext | null {
        return this.getRuleContext(0, UsingdeclarationContext);
    }
    public static_assertdeclaration(): Static_assertdeclarationContext | null {
        return this.getRuleContext(0, Static_assertdeclarationContext);
    }
    public templatedeclaration(): TemplatedeclarationContext | null {
        return this.getRuleContext(0, TemplatedeclarationContext);
    }
    public aliasdeclaration(): AliasdeclarationContext | null {
        return this.getRuleContext(0, AliasdeclarationContext);
    }
    public emptydeclaration(): EmptydeclarationContext | null {
        return this.getRuleContext(0, EmptydeclarationContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_memberdeclaration;
    }
}


export class MemberdeclaratorlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberdeclarator(): MemberdeclaratorContext {
        return this.getRuleContext(0, MemberdeclaratorContext)!;
    }
    public memberdeclaratorlist(): MemberdeclaratorlistContext | null {
        return this.getRuleContext(0, MemberdeclaratorlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_memberdeclaratorlist;
    }
}


export class MemberdeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public declarator(): DeclaratorContext | null {
        return this.getRuleContext(0, DeclaratorContext);
    }
    public virtspecifierseq(): VirtspecifierseqContext | null {
        return this.getRuleContext(0, VirtspecifierseqContext);
    }
    public purespecifier(): PurespecifierContext | null {
        return this.getRuleContext(0, PurespecifierContext);
    }
    public braceorequalinitializer(): BraceorequalinitializerContext | null {
        return this.getRuleContext(0, BraceorequalinitializerContext);
    }
    public Colon(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Colon, 0);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_memberdeclarator;
    }
}


export class VirtspecifierseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public virtspecifier(): VirtspecifierContext {
        return this.getRuleContext(0, VirtspecifierContext)!;
    }
    public virtspecifierseq(): VirtspecifierseqContext | null {
        return this.getRuleContext(0, VirtspecifierseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_virtspecifierseq;
    }
}


export class VirtspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Override(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Override, 0);
    }
    public Final(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Final, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_virtspecifier;
    }
}


export class PurespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assign(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Assign, 0)!;
    }
    public ZeroLiteral(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.ZeroLiteral, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_purespecifier;
    }
}


export class BaseclauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Colon, 0)!;
    }
    public basespecifierlist(): BasespecifierlistContext {
        return this.getRuleContext(0, BasespecifierlistContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_baseclause;
    }
}


export class BasespecifierlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public basespecifier(): BasespecifierContext {
        return this.getRuleContext(0, BasespecifierContext)!;
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public basespecifierlist(): BasespecifierlistContext | null {
        return this.getRuleContext(0, BasespecifierlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_basespecifierlist;
    }
}


export class BasespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public basetypespecifier(): BasetypespecifierContext {
        return this.getRuleContext(0, BasetypespecifierContext)!;
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public Virtual(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Virtual, 0);
    }
    public accessspecifier(): AccessspecifierContext | null {
        return this.getRuleContext(0, AccessspecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_basespecifier;
    }
}


export class ClassordecltypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classname(): ClassnameContext | null {
        return this.getRuleContext(0, ClassnameContext);
    }
    public nestednamespecifier(): NestednamespecifierContext | null {
        return this.getRuleContext(0, NestednamespecifierContext);
    }
    public decltypespecifier(): DecltypespecifierContext | null {
        return this.getRuleContext(0, DecltypespecifierContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_classordecltype;
    }
}


export class BasetypespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classordecltype(): ClassordecltypeContext {
        return this.getRuleContext(0, ClassordecltypeContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_basetypespecifier;
    }
}


export class AccessspecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Private(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Private, 0);
    }
    public Protected(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Protected, 0);
    }
    public Public(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Public, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_accessspecifier;
    }
}


export class ConversionfunctionidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Operator(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Operator, 0)!;
    }
    public conversiontypeid(): ConversiontypeidContext {
        return this.getRuleContext(0, ConversiontypeidContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_conversionfunctionid;
    }
}


export class ConversiontypeidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typespecifierseq(): TypespecifierseqContext {
        return this.getRuleContext(0, TypespecifierseqContext)!;
    }
    public conversiondeclarator(): ConversiondeclaratorContext | null {
        return this.getRuleContext(0, ConversiondeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_conversiontypeid;
    }
}


export class ConversiondeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ptroperator(): PtroperatorContext {
        return this.getRuleContext(0, PtroperatorContext)!;
    }
    public conversiondeclarator(): ConversiondeclaratorContext | null {
        return this.getRuleContext(0, ConversiondeclaratorContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_conversiondeclarator;
    }
}


export class CtorinitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Colon, 0)!;
    }
    public meminitializerlist(): MeminitializerlistContext {
        return this.getRuleContext(0, MeminitializerlistContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_ctorinitializer;
    }
}


export class MeminitializerlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public meminitializer(): MeminitializerContext {
        return this.getRuleContext(0, MeminitializerContext)!;
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public meminitializerlist(): MeminitializerlistContext | null {
        return this.getRuleContext(0, MeminitializerlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_meminitializerlist;
    }
}


export class MeminitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public meminitializerid(): MeminitializeridContext {
        return this.getRuleContext(0, MeminitializeridContext)!;
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public expressionlist(): ExpressionlistContext | null {
        return this.getRuleContext(0, ExpressionlistContext);
    }
    public bracedinitlist(): BracedinitlistContext | null {
        return this.getRuleContext(0, BracedinitlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_meminitializer;
    }
}


export class MeminitializeridContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classordecltype(): ClassordecltypeContext | null {
        return this.getRuleContext(0, ClassordecltypeContext);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_meminitializerid;
    }
}


export class OperatorfunctionidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Operator(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Operator, 0)!;
    }
    public operator(): OperatorContext {
        return this.getRuleContext(0, OperatorContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_operatorfunctionid;
    }
}


export class LiteraloperatoridContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Operator(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Operator, 0)!;
    }
    public Stringliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Stringliteral, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public Userdefinedstringliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Userdefinedstringliteral, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_literaloperatorid;
    }
}


export class TemplatedeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Template(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Template, 0)!;
    }
    public Less(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Less, 0)!;
    }
    public templateparameterlist(): TemplateparameterlistContext {
        return this.getRuleContext(0, TemplateparameterlistContext)!;
    }
    public Greater(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Greater, 0)!;
    }
    public declaration(): DeclarationContext {
        return this.getRuleContext(0, DeclarationContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_templatedeclaration;
    }
}


export class TemplateparameterlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public templateparameter(): TemplateparameterContext {
        return this.getRuleContext(0, TemplateparameterContext)!;
    }
    public templateparameterlist(): TemplateparameterlistContext | null {
        return this.getRuleContext(0, TemplateparameterlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_templateparameterlist;
    }
}


export class TemplateparameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeparameter(): TypeparameterContext | null {
        return this.getRuleContext(0, TypeparameterContext);
    }
    public parameterdeclaration(): ParameterdeclarationContext | null {
        return this.getRuleContext(0, ParameterdeclarationContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_templateparameter;
    }
}


export class TypeparameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Class(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Class, 0);
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public typeid(): TypeidContext | null {
        return this.getRuleContext(0, TypeidContext);
    }
    public Typename(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Typename, 0);
    }
    public Template(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Template, 0);
    }
    public Less(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Less, 0);
    }
    public templateparameterlist(): TemplateparameterlistContext | null {
        return this.getRuleContext(0, TemplateparameterlistContext);
    }
    public Greater(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Greater, 0);
    }
    public idexpression(): IdexpressionContext | null {
        return this.getRuleContext(0, IdexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_typeparameter;
    }
}


export class SimpletemplateidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public templatename(): TemplatenameContext {
        return this.getRuleContext(0, TemplatenameContext)!;
    }
    public Less(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Less, 0)!;
    }
    public Greater(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Greater, 0)!;
    }
    public templateargumentlist(): TemplateargumentlistContext | null {
        return this.getRuleContext(0, TemplateargumentlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_simpletemplateid;
    }
}


export class TemplateidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpletemplateid(): SimpletemplateidContext | null {
        return this.getRuleContext(0, SimpletemplateidContext);
    }
    public operatorfunctionid(): OperatorfunctionidContext | null {
        return this.getRuleContext(0, OperatorfunctionidContext);
    }
    public Less(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Less, 0);
    }
    public Greater(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Greater, 0);
    }
    public templateargumentlist(): TemplateargumentlistContext | null {
        return this.getRuleContext(0, TemplateargumentlistContext);
    }
    public literaloperatorid(): LiteraloperatoridContext | null {
        return this.getRuleContext(0, LiteraloperatoridContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_templateid;
    }
}


export class TemplatenameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_templatename;
    }
}


export class TemplateargumentlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public templateargument(): TemplateargumentContext {
        return this.getRuleContext(0, TemplateargumentContext)!;
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public templateargumentlist(): TemplateargumentlistContext | null {
        return this.getRuleContext(0, TemplateargumentlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_templateargumentlist;
    }
}


export class TemplateargumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeid(): TypeidContext | null {
        return this.getRuleContext(0, TypeidContext);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public idexpression(): IdexpressionContext | null {
        return this.getRuleContext(0, IdexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_templateargument;
    }
}


export class TypenamespecifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Typename(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Typename, 0)!;
    }
    public nestednamespecifier(): NestednamespecifierContext {
        return this.getRuleContext(0, NestednamespecifierContext)!;
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Identifier, 0);
    }
    public simpletemplateid(): SimpletemplateidContext | null {
        return this.getRuleContext(0, SimpletemplateidContext);
    }
    public Template(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Template, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_typenamespecifier;
    }
}


export class ExplicitinstantiationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Template(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Template, 0)!;
    }
    public declaration(): DeclarationContext {
        return this.getRuleContext(0, DeclarationContext)!;
    }
    public Extern(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Extern, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_explicitinstantiation;
    }
}


export class ExplicitspecializationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Template(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Template, 0)!;
    }
    public Less(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Less, 0)!;
    }
    public Greater(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Greater, 0)!;
    }
    public declaration(): DeclarationContext {
        return this.getRuleContext(0, DeclarationContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_explicitspecialization;
    }
}


export class TryblockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Try(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Try, 0)!;
    }
    public compoundstatement(): CompoundstatementContext {
        return this.getRuleContext(0, CompoundstatementContext)!;
    }
    public handlerseq(): HandlerseqContext {
        return this.getRuleContext(0, HandlerseqContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_tryblock;
    }
}


export class FunctiontryblockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Try(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Try, 0)!;
    }
    public compoundstatement(): CompoundstatementContext {
        return this.getRuleContext(0, CompoundstatementContext)!;
    }
    public handlerseq(): HandlerseqContext {
        return this.getRuleContext(0, HandlerseqContext)!;
    }
    public ctorinitializer(): CtorinitializerContext | null {
        return this.getRuleContext(0, CtorinitializerContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_functiontryblock;
    }
}


export class HandlerseqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public handler(): HandlerContext {
        return this.getRuleContext(0, HandlerContext)!;
    }
    public handlerseq(): HandlerseqContext | null {
        return this.getRuleContext(0, HandlerseqContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_handlerseq;
    }
}


export class HandlerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Catch(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Catch, 0)!;
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public exceptiondeclaration(): ExceptiondeclarationContext {
        return this.getRuleContext(0, ExceptiondeclarationContext)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public compoundstatement(): CompoundstatementContext {
        return this.getRuleContext(0, CompoundstatementContext)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_handler;
    }
}


export class ExceptiondeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typespecifierseq(): TypespecifierseqContext | null {
        return this.getRuleContext(0, TypespecifierseqContext);
    }
    public declarator(): DeclaratorContext | null {
        return this.getRuleContext(0, DeclaratorContext);
    }
    public attributespecifierseq(): AttributespecifierseqContext | null {
        return this.getRuleContext(0, AttributespecifierseqContext);
    }
    public abstractdeclarator(): AbstractdeclaratorContext | null {
        return this.getRuleContext(0, AbstractdeclaratorContext);
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_exceptiondeclaration;
    }
}


export class ThrowexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Throw(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Throw, 0)!;
    }
    public assignmentexpression(): AssignmentexpressionContext | null {
        return this.getRuleContext(0, AssignmentexpressionContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_throwexpression;
    }
}


export class ExceptionspecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dynamicexceptionspecification(): DynamicexceptionspecificationContext | null {
        return this.getRuleContext(0, DynamicexceptionspecificationContext);
    }
    public noexceptspecification(): NoexceptspecificationContext | null {
        return this.getRuleContext(0, NoexceptspecificationContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_exceptionspecification;
    }
}


export class DynamicexceptionspecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Throw(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Throw, 0)!;
    }
    public LeftParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.LeftParen, 0)!;
    }
    public RightParen(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.RightParen, 0)!;
    }
    public typeidlist(): TypeidlistContext | null {
        return this.getRuleContext(0, TypeidlistContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_dynamicexceptionspecification;
    }
}


export class TypeidlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeid(): TypeidContext {
        return this.getRuleContext(0, TypeidContext)!;
    }
    public Ellipsis(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    }
    public typeidlist(): TypeidlistContext | null {
        return this.getRuleContext(0, TypeidlistContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_typeidlist;
    }
}


export class NoexceptspecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Noexcept(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Noexcept, 0)!;
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public constantexpression(): ConstantexpressionContext | null {
        return this.getRuleContext(0, ConstantexpressionContext);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_noexceptspecification;
    }
}


export class RightShiftContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Greater(): antlr.TerminalNode[];
    public Greater(i: number): antlr.TerminalNode | null;
    public Greater(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CPP14Parser.Greater);
    	} else {
    		return this.getToken(CPP14Parser.Greater, i);
    	}
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_rightShift;
    }
}


export class RightShiftAssignContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Greater(): antlr.TerminalNode[];
    public Greater(i: number): antlr.TerminalNode | null;
    public Greater(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CPP14Parser.Greater);
    	} else {
    		return this.getToken(CPP14Parser.Greater, i);
    	}
    }
    public Assign(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Assign, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_rightShiftAssign;
    }
}


export class OperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public New(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.New, 0);
    }
    public Delete(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Delete, 0);
    }
    public LeftBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    }
    public RightBracket(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightBracket, 0);
    }
    public Plus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Plus, 0);
    }
    public Minus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Minus, 0);
    }
    public Star(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Star, 0);
    }
    public Div(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Div, 0);
    }
    public Mod(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Mod, 0);
    }
    public Caret(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Caret, 0);
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.And, 0);
    }
    public Or(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Or, 0);
    }
    public Tilde(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Tilde, 0);
    }
    public Not(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Not, 0);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Assign, 0);
    }
    public Less(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Less, 0);
    }
    public Greater(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Greater, 0);
    }
    public PlusAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.PlusAssign, 0);
    }
    public MinusAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.MinusAssign, 0);
    }
    public StarAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.StarAssign, 0);
    }
    public DivAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.DivAssign, 0);
    }
    public ModAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.ModAssign, 0);
    }
    public XorAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.XorAssign, 0);
    }
    public AndAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.AndAssign, 0);
    }
    public OrAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.OrAssign, 0);
    }
    public LeftShift(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftShift, 0);
    }
    public rightShift(): RightShiftContext | null {
        return this.getRuleContext(0, RightShiftContext);
    }
    public rightShiftAssign(): RightShiftAssignContext | null {
        return this.getRuleContext(0, RightShiftAssignContext);
    }
    public LeftShiftAssign(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftShiftAssign, 0);
    }
    public Equal(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Equal, 0);
    }
    public NotEqual(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.NotEqual, 0);
    }
    public LessEqual(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LessEqual, 0);
    }
    public GreaterEqual(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.GreaterEqual, 0);
    }
    public AndAnd(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.AndAnd, 0);
    }
    public OrOr(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.OrOr, 0);
    }
    public PlusPlus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.PlusPlus, 0);
    }
    public MinusMinus(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.MinusMinus, 0);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Comma, 0);
    }
    public ArrowStar(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.ArrowStar, 0);
    }
    public Arrow(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Arrow, 0);
    }
    public LeftParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.LeftParen, 0);
    }
    public RightParen(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.RightParen, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_operator;
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Integerliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Integerliteral, 0);
    }
    public Characterliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Characterliteral, 0);
    }
    public Floatingliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Floatingliteral, 0);
    }
    public Stringliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Stringliteral, 0);
    }
    public booleanliteral(): BooleanliteralContext | null {
        return this.getRuleContext(0, BooleanliteralContext);
    }
    public pointerliteral(): PointerliteralContext | null {
        return this.getRuleContext(0, PointerliteralContext);
    }
    public userdefinedliteral(): UserdefinedliteralContext | null {
        return this.getRuleContext(0, UserdefinedliteralContext);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_literal;
    }
}


export class BooleanliteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public False(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.False, 0);
    }
    public True(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.True, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_booleanliteral;
    }
}


export class PointerliteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Nullptr(): antlr.TerminalNode {
        return this.getToken(CPP14Parser.Nullptr, 0)!;
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_pointerliteral;
    }
}


export class UserdefinedliteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Userdefinedintegerliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Userdefinedintegerliteral, 0);
    }
    public Userdefinedfloatingliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Userdefinedfloatingliteral, 0);
    }
    public Userdefinedstringliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Userdefinedstringliteral, 0);
    }
    public Userdefinedcharacterliteral(): antlr.TerminalNode | null {
        return this.getToken(CPP14Parser.Userdefinedcharacterliteral, 0);
    }
    public override get ruleIndex(): number {
        return CPP14Parser.RULE_userdefinedliteral;
    }
}
