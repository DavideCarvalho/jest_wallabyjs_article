module.exports = function (wallaby) {

  return {
    files: ['src/**/index.js', '!src/**/__tests__/*.js'],

    tests: ['src/**/__tests__/*.js', 'src/**/*.test.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};