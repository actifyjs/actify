import path from 'path'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import { name, peerDependencies } from './package.json'

// set @ alias to current directory
const resolve = {
  alias: {
    '@': path.resolve(__dirname, '.')
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode == 'lib') {
    // build for lib
    return {
      resolve,
      build: {
        outDir: 'lib',
        lib: {
          name,
          fileName: name,
          entry: path.resolve(__dirname, 'packages/components/index.js')
        },
        rollupOptions: {
          external: [...Object.keys(peerDependencies)],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        }
      }
    }
  }
  return {
    resolve,
    plugins: [react(), pages()]
  }
})
