module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  root: true,
  extends: ['plugin:@stencil/recommended'],
  rules: {
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
