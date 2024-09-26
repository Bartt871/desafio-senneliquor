const config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts'],
	coverageDirectory: 'coverage',
	moduleFileExtensions: ['ts', 'js'],
	testMatch: ['**/__tests__/**/*.test.ts'],
	verbose: true,
	globals: {
		'ts-jest': {
			diagnostics: false,
			tsconfig: 'tsconfig.json',
			sourceMap: true // Habilite source maps aqui
		}
	}
};

module.exports = config;
