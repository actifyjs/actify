import path from 'path'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import packageJson from './package.json'

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
          entry: path.resolve(__dirname, 'packages/components/index.js'),
          name: packageJson.name,
          fileName: packageJson.name
        },
        rollupOptions: {
          external: [...Object.keys(packageJson.peerDependencies)],
          output: {
            globals: {
              react: 'React'
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
