module.exports = {
  parserOptions: { project: ['tsconfig.json'] },
  env: {
    jest: true,
    browser: true,
  },
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
