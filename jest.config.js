/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
	preset: 'ts-jest',
	clearMocks: true,
	testEnvironment: 'node',
	testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

module.exports = config;
