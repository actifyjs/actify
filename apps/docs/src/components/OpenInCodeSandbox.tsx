import { IconButton, Tooltip, name, version } from 'actify'

import React from 'react'
import { getParameters } from 'codesandbox/lib/api/define'

interface OpenInCodeSandboxProps extends React.ComponentProps<'form'> {
  title: string
  code: string
}

const OpenInCodeSandbox = ({ title, code }: OpenInCodeSandboxProps) => {
  const parameters = getParameters({
    files: {
      'package.json': {
        content: JSON.stringify({
          name: `actify-${title}`,
          private: true,
          version: '0.0.0',
          scripts: {
            dev: 'vite'
          },
          dependencies: {
            [name]: `^${version}`,
            react: '^18.2.0',
            'react-dom': '^18.2.0'
          },
          devDependencies: {
            '@vitejs/plugin-react': '^1.3.0',
            autoprefixer: '^10.4.5',
            postcss: '^8.4.13',
            tailwindcss: 'latest',
            vite: '^4.5.1'
          }
        }),
        isBinary: false
      },
      'App.jsx': {
        content: code,
        isBinary: false
      },
      'main.jsx': {
        content: `import './main.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)`,
        isBinary: false
      },
      'main.css': {
        content: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
        isBinary: false
      },
      'postcss.config.js': {
        content: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}`,
        isBinary: false
      },
      'tailwind.config.js': {
        content: `/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: ['./node_modules/actify/dist/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--md-sys-color-background)',
        'on-background': 'var(--md-sys-color-on-background)',
        surface: 'var(--md-sys-color-surface)',
        'surface-dim': 'var(--md-sys-color-surface-dim)',
        'surface-bright': 'var(--md-sys-color-surface-bright)',
        'surface-container-lowest':
          'var(--md-sys-color-surface-container-lowest)',
        'surface-container-low': 'var(--md-sys-color-surface-container-low)',
        'surface-container': 'var(--md-sys-color-surface-container)',
        'surface-container-high': 'var(--md-sys-color-surface-container-high)',
        'surface-container-highest':
          'var(--md-sys-color-surface-container-highest)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
        outline: 'var(--md-sys-color-outline)',
        'outline-variant': 'var(--md-sys-color-outline-variant)',
        shadow: 'var(--md-sys-color-shadow)',
        scrim: 'var(--md-sys-color-scrim)',
        'surface-tint': 'var(--md-sys-color-surface-tint)',
        primary: 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',
        secondary: 'var(--md-sys-color-secondary)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        tertiary: 'var(--md-sys-color-tertiary)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        error: 'var(--md-sys-color-error)',
        'on-error': 'var(--md-sys-color-on-error)',
        'error-container': 'var(--md-sys-color-error-container)',
        'on-error-container': 'var(--md-sys-color-on-error-container)'
      }
    }
  },
  plugins: []
}`,
        isBinary: false
      },
      'vite.config.js': {
        content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})`,
        isBinary: false
      },
      'index.html': {
        content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Actify-${title}</title>
  </head>
  <body class="p-5">
    <div id="root"></div>
    <script type="module" src="main.jsx"></script>
  </body>
</html>`,
        isBinary: false
      }
    }
  })

  return (
    <form
      method="POST"
      target="_blank"
      action="https://codesandbox.io/api/v1/sandboxes/define"
    >
      <input type="hidden" name="parameters" value={parameters} />
      <Tooltip placement="top" content="Open in CodeSandbox">
        <IconButton type="submit">
          <svg
            width="24"
            height="24"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
            <polyline points="7.5 19.79 7.5 14.6 3 12" />
            <polyline points="21 12 16.5 14.6 16.5 19.79" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" x2="12" y1="22.08" y2="12" />
          </svg>
        </IconButton>
      </Tooltip>
    </form>
  )
}

export default OpenInCodeSandbox
