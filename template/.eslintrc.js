module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: '@react-native-community',
  globals: {
    JSX: 'readonly',
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {},
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
