import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import mdPlugin, { Mode } from 'vite-plugin-markdown'

const alias = {
  src: fileURLToPath(new URL('./src', import.meta.url)),
  actify: fileURLToPath(new URL('./packages', import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias
    },
    plugins: [react(), pages(), mdPlugin({ mode: [Mode.MARKDOWN] })]
  }
})
