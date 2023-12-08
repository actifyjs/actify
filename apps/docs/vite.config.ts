import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdPlugin, { Mode } from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages(),
    VitePWA({
      registerType: 'autoUpdate'
    }),
    tsconfigPaths(),
    mdPlugin({ mode: [Mode.MARKDOWN] })
  ]
})
