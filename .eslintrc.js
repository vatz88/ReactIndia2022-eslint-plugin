module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  globals: {
    React: true,
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'eslint-plugin-my-plugin'],
  /**
   * 0 - no error, 1 - warning, 2 - error
   */
  rules: {
    'my-plugin/no-class-components': 1,
    'my-plugin/no-deprecated-prop': 0,
  },
};
