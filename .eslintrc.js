module.exports = {
  env: {
    browser: true,
    jest: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'no-restricted-syntax': 'warn',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/button-has-type': [
      'warn',
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
