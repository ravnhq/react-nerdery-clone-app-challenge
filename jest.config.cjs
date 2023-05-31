/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { useESM: true }],
    '^.+\\.svg?$': './jest-svg-transformer.cjs',
  },
  extensionsToTreatAsEsm: ['.tsx', '.ts'],
  moduleNameMapper: {
    'styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.cjs.js',
  },
};
