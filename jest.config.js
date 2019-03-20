module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "/node_modules/",
    "/src/fake.spec.ts",
    "/src/datatypes/",
    "/src/functions/",
    "/src/params/",
    "/src/promises/",
  ],
  maxConcurrency:1,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      diagnostics: false
    },
  },
};