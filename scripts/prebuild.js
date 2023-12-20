const fs = require('fs')
const path = require('path')
const pkg = require('../packages/actify/package.json')

pkg.main = 'dist/index.cjs'
pkg.module = 'dist/index.js'
pkg.types = 'dist/index.d.ts'

fs.writeFileSync(
  path.resolve(__dirname, '../packages/actify/package.json'),
  JSON.stringify(pkg, null, 2)
)
