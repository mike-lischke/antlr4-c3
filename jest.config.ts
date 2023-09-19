/*
 * This file is released under the MIT license.
 * Copyright (c) 2023 Mike Lischke
 *
 * See LICENSE file for more info.
 */

import type { Config } from "jest";

const config: Config = {
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
        "src/**/*.ts",
        "!tests/**",
        "!**/node_modules/**",
    ],

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
        "json",
        "text",
        "clover",
        "html",
    ],

    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
        global: {
            statements: 65,
            branches: 70,
            functions: 50,
            lines: 65,
        },
    },

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        "node_modules"
    ],

    workerIdleMemoryLimit: "500MB",

    // An array of file extensions your modules use
    moduleFileExtensions: [
        "ts",
        "js",
        "mjs",
        "cjs",
        "json",
    ],

    extensionsToTreatAsEsm: [".ts"],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources
    // with a single module
    moduleNameMapper: {
        "(.+)\\.js": "$1"
    },

    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module
    // loader
    // modulePathIgnorePatterns: [],

    // Activates notifications for test results
    // notify: false,

    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",

    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest/presets/js-with-ts-esm",

    // The test environment that will be used for testing
    testEnvironment: "node",

    // Options that will be passed to the testEnvironment
    testEnvironmentOptions: {},

    // Adds a location field to test results
    // testLocationInResults: false,

    // The glob patterns Jest uses to detect test files
    testMatch: [
        "**/tests/**/*.spec.ts",
    ],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
    ],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],

    testTimeout: 30000,

    // A map from regular expressions to paths to transformers
    transform: {
    },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip
    // transformation
    transformIgnorePatterns: [
        "node_modules/",
    ],
};

export default config;
