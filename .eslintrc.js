module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": 'off', //['error', { endOfline: 'auto'}],
    'no-console': 'off',
    "eol-last": "off",
    "simple-import-sort/imports": "off"
  },
}
