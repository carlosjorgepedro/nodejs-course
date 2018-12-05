module.exports = function () {
  return {
    files: [
      'lib/**/*.js'
    ],

    tests: [
      'tests/**/*.test.js'
    ],

    env: {
      type: 'node'
    },

    workers: {
      restart: true
    }
  };
};
