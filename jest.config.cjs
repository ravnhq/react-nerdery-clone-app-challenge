module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['tsx', 'ts', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/*.test.(tsx|jsx)'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/*.styles.ts', '!src/**/*index.ts', '!src/components/Styles/**/*.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
    coverageThreshold: {
        global: {
            statements: 50,
            branches: 50,
            functions: 50,
            lines: 50,
        },
    },
}