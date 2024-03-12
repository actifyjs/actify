import { exec } from 'child_process'
import terser from '@rollup/plugin-terser'
import banner2 from 'rollup-plugin-banner2'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

import copy from 'rollup-plugin-copy'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

const outputOptions = {
  sourcemap: false,
  preserveModulesRoot: 'src',
  inlineDynamicImports: true
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
        exports: 'named',
        ...outputOptions
      },
      {
        dir: 'dist',
        format: 'esm',
        exports: 'named',
        ...outputOptions
      }
    ],
    external: [
      'dayjs',
      'react',
      'tslib',
      'popmotion',
      'react-dom',
      '@babel/runtime',
      'framer-motion',
      'lucide-react',
      'react-router-dom',
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
      terser({ compress: { directives: false } }),
      copy({
        targets: [
          { src: './../../README.md', dest: '.' },
          { src: './../../LICENSE.md', dest: '.' }
        ]
      }),
      tscAlias(),
      banner2(() => `"use client";\n`)
    ],
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning)
      }
    }
  }
]
