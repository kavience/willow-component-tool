module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': 0,
    strict: 0,
    'no-console': 0,
    'no-shadow': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'no-param-reassign': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'consistent-return': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', '.']],
        extensions: ['.js'],
      },
    },
  },
};
