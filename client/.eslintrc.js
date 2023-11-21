module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'typescript'],
  rules: {
    indent: ['error', 2],
    'no-unused-vars': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-module-boundary-types': 'off',
    'typescript/interface-name-prefix': ['error', 'always'],
    'typescript/no-unused-vars': 'error',
    'typescript/explicit-function-return-type': 'off',
    'typescript/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
}
