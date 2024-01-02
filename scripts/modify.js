const fs = require('fs')
const path = require('path')

const currentDirectory = __dirname

const packageJsonPath = path.join(
  currentDirectory,
  '../packages/actify/package.json'
)
console.log(555, currentDirectory, packageJsonPath)

const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8')
const packageJson = JSON.parse(packageJsonContent)

const command = process.env.COMMAND || 'build'

if (command === 'dev') {
  packageJson.main = './src/index.ts'
  packageJson.module = ''
  packageJson.types = ''
}
if (command === 'build') {
  packageJson.main = './dist/index.cjs'
  packageJson.module = './dist/index.js'
  packageJson.types = './dist/index.d.ts'
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
