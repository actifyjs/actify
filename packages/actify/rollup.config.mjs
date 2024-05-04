import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import { exec } from 'child_process'

import copy from 'rollup-plugin-copy'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import preserveDirectives from 'rollup-plugin-preserve-directives'

const outputOptions = {
  sourcemap: false,
  preserveModules: true,
  preserveModulesRoot: 'src'
}

const tscAlias = () => {
  return {
    name: 'tsAlias',
    writeBundle: () => {
      return new Promise((resolve, reject) => {
        exec('tsc-alias', function callback(error, stdout, stderr) {
          if (stderr || error) {
            reject(stderr || error)
          } else {
            resolve(stdout)
          }
        })
      })
    }
  }
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs',
        exports: 'auto',
        ...outputOptions
      },
      {
        dir: 'dist',
        format: 'esm',
        ...outputOptions
      }
    ],
    external: [
      'dayjs',
      'react',
      'tslib',
      'react-dom',
      'popmotion',
      'framer-motion',
      '@babel/runtime',
      'tailwind-variants',
      '@floating-ui/react'
    ],
    plugins: [
      peerDepsExternal(),
      json(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      typescriptPaths(),
      preserveDirectives(),
      terser({ compress: { directives: false } }),
      copy({
        targets: [
          { src: './../../README.md', dest: 'dist' },
          { src: './../../LICENSE.md', dest: 'dist' }
        ]
      }),
      tscAlias()
    ],
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning)
      }
    }
  }
]
