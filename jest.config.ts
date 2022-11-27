/** @type {import('ts-jest').JestConfigWithTsJest} */

const coverageDirs = ['utils', 'api'];
const coveragePaths = coverageDirs.map(dir => `./${dir}/**`);
const coverageThresholdPaths = coverageDirs.map(dir => `./${dir}/`);

const fullCoverageThreshold = {
  branches: 100,
  functions: 100,
  lines: 100,
  statements: 100,
};

const fullCoveragePaths = coverageThresholdPaths.reduce((acc, cur) => {
  acc[cur] = fullCoverageThreshold;
  return acc;
}, {} as Record<string, typeof fullCoverageThreshold>);

const ignorePatterns = ['types\\.ts$', 'dist', '\\./index.ts'];

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  restoreMocks: true,
  collectCoverageFrom: coveragePaths,
  coverageThreshold: {
    ...fullCoveragePaths,
  },
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
