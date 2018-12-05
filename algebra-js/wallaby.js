module.exports = {
  files: ['src/**/*.js'],
  tests: ['tests/**/*.test.js'],
  env: {
    type: 'node',
  },
  standard: {
    env: [
      "jest"
    ]
  }
};