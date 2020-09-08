const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-action-sheet)/)',
  ],
  setupFiles: ['./_setup_/testsSetup.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['**/app/**/*.{js,jsx,ts,tsx}'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    window: {
      confirm: {},
    },
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
  timers: 'fake',
  testEnvironment: 'jsdom',
};
