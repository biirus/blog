module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  root: true,
  extends: ['plugin:@stencil/recommended'],
  rules: {
    '@stencil/strict-boolean-conditions': 'off',
    'react/jsx-no-bind': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
};
