const fs = require('fs')
const path = require('path')
const pkg = require('../packages/actify/package.json')

pkg.main = 'src/index.ts'
pkg.module = ''
pkg.types = ''

fs.writeFileSync(
  path.resolve(__dirname, '../packages/actify/package.json'),
  JSON.stringify(pkg, null, 2)
)
