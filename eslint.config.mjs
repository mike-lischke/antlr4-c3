/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the BSD 3-clause License. See License.txt in the project root for license information.
 */

import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";
import preferArrow from "eslint-plugin-prefer-arrow";
import importPlugin from "eslint-plugin-import";

export default tslint.config(
    eslint.configs.recommended,
    ...tslint.configs.strictTypeChecked,
    ...tslint.configs.stylisticTypeChecked,
    jsdoc.configs["flat/recommended"],
    {
        // This must be in its own object to avoid a bug in the ESLint parser.
        ignores: ["**/generated/*"],
    },
    {
        plugins: {
            "@stylistic": stylistic,
            "jsdoc": jsdoc,
            "prefer-arrow": preferArrow,
            "import": importPlugin,
        },
        languageOptions: {
            parser: tslint.parser,
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["eslint.config.mjs", "build/*.ts", "vitest.config.ts"],
                    defaultProject: "tsconfig.json",
                },
                tsconfigRootDir: import.meta.dirname,
                sourceType: "module",
            },
        },
        rules: {
            "no-fallthrough": [
                "warn",
                {
                    "commentPattern": "\\[falls?-through\\]",
                    "allowEmptyCase": true
                }
            ],
            "max-len": [
                "error",
                {
                    "ignoreRegExpLiterals": false,
                    "ignoreStrings": false,
                    "code": 120
                }
            ],
            "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
            "curly": ["error", "all"],
            "arrow-body-style": ["error", "always"],
            "@stylistic/padding-line-between-statements": [
                "error",
                {
                    "blankLine": "always",
                    "prev": "*",
                    "next": "return"
                }
            ],
            "@stylistic/quotes": [
                "error",
                "double",
                {
                    "avoidEscape": true,
                    "allowTemplateLiterals": true
                }
            ],
            "@stylistic/indent": [
                "error",
                4,
                {
                    "ignoreComments": true,
                    "SwitchCase": 1,
                    "MemberExpression": 1
                }
            ],
            "@stylistic/semi": [
                "error",
                "always"
            ],
            "@stylistic/no-multiple-empty-lines": ["error", { "max": 1 }],
            "@stylistic/no-multi-spaces": [
                "error",
                {
                    "ignoreEOLComments": true
                }
            ],
            "@stylistic/lines-around-comment": [
                "error",
                {
                    "afterBlockComment": false,
                    "afterLineComment": false,
                    "beforeBlockComment": false,
                }
            ],
            "@stylistic/prefer-regexp-exec": "off",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "default",
                    "format": [
                        "camelCase"
                    ],
                    "filter": {
                        "regex": "^_",
                        "match": false
                    }
                },
                {
                    "selector": "class",
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "typeParameter",
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "enum",
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "enumMember",
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "typeAlias",
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "interface",
                    "format": [
                        "PascalCase"
                    ]
                },
                {
                    "selector": "property",
                    "format": [
                        "camelCase",
                        "UPPER_CASE"
                    ]
                },
                {
                    "selector": "property",
                    "format": null,
                    "filter": {
                        "regex": "^['\"].*['\"]$",
                        "match": false
                    }
                }
            ],

            "lines-between-class-members": "off", // Should be on, but handles overload signatures incorrectly.

            "@typescript-eslint/adjacent-overload-signatures": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-unnecessary-type-parameters": "off",
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/member-delimiter-style": "off",
            "@typescript-eslint/member-ordering": [
                "error",
                {
                    // No ordering for getters and setters here, as that conflicts currently with the rule
                    // adjacent-overload-signatures.

                    "default": [
                        // Index signature

                        "signature",
                        // Fields

                        "public-static-field",
                        "protected-static-field",
                        "private-static-field",
                        "public-instance-field",
                        "protected-instance-field",
                        "private-instance-field",
                        "public-abstract-field",
                        "protected-abstract-field",
                        "public-field",
                        "protected-field",
                        "private-field",
                        "static-field",
                        "instance-field",
                        "abstract-field",
                        "decorated-field",
                        "field",
                        // Constructors

                        "public-constructor",
                        "protected-constructor",
                        "private-constructor",
                        "constructor",
                        // Methods

                        "public-static-method",
                        "protected-static-method",
                        "private-static-method",
                        "public-method",
                        "protected-method",
                        "private-method",
                        "public-abstract-method",
                        "protected-abstract-method"
                    ]
                }
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    "args": "none",
                    "ignoreRestSiblings": true,
                    "varsIgnorePattern": "^_",
                    "argsIgnorePattern": "^_"
                }
            ],
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/restrict-plus-operands": "off", // TODO: re-enable this rule
            "@typescript-eslint/no-unnecessary-condition": ["error", { "allowConstantLoopConditions": true }],
            "@typescript-eslint/no-extraneous-class": "off",
            "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
            "@typescript-eslint/prefer-return-this-type": "off",
            "@typescript-eslint/no-invalid-void-type": "off",
            "@typescript-eslint/unified-signatures": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/explicit-member-accessibility": "error",
            "@typescript-eslint/prefer-for-of": "error",
            "@typescript-eslint/prefer-function-type": "error",
            "@typescript-eslint/no-deprecated": "off",
            "@typescript-eslint/no-base-to-string": "off",
            "@typescript-eslint/prefer-regexp-exec": "off",
            "jsdoc/check-alignment": "error",
            "jsdoc/check-indentation": "off",
            "jsdoc/require-param-type": "off",
            "jsdoc/require-returns-type": "off",
            "jsdoc/no-undefined-types": [
                "off", // Requires a comment syntax incompatible with VS Code.
                {
                    "markVariablesAsUsed": false
                }
            ],
            "jsdoc/tag-lines": [
                "error",
                "any",
                {
                    "startLines": 1
                }
            ],
            "prefer-arrow/prefer-arrow-functions": [
                "warn",
                {
                    "disallowPrototype": true,
                    "singleReturnOnly": false,
                    "classPropertiesAllowed": false
                }
            ],

        },
    },
);
