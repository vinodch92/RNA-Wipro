module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['node_modules/(?!(react-native|react-native-action-sheet)/)'],
  setupFiles: ['./_setup_/testsSetup.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['**/app/**/*.{js,jsx}'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    window: {
      confirm: {},
    },
  },
  cacheDirectory: '.jest/cache',
  timers: 'fake',
  testEnvironment: 'jsdom',
};
