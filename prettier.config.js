/** @type {import('prettier').Config} */
module.exports = {
  "tabWidth": 2,
  "semi": false,
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSameLine": false,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
}