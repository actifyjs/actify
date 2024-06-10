import { IconButton, Tooltip } from 'actify'

import React from 'react'
import { getParameters } from 'codesandbox/lib/api/define'
import packageInfo from 'actify/package.json'

interface OpenInCodeSandboxProps extends React.ComponentProps<'form'> {
  title: string
  code: string
}

const OpenInCodeSandbox = ({ title, code }: OpenInCodeSandboxProps) => {
  const parameters = getParameters({
    files: {
      'package.json': {
        content: JSON.stringify(
          {
            name: `actify-${title}`,
            private: true,
            version: '0.0.0',
            scripts: {
              dev: 'vite'
            },
            dependencies: {
              actify: `^${packageInfo.version}`,
              react: '19.0.0-rc-f994737d14-20240522',
              'react-dom': '19.0.0-rc-f994737d14-20240522'
            },
            devDependencies: {
              '@vitejs/plugin-react': '^1.3.0',
              autoprefixer: '^10.4.5',
              postcss: '^8.4.13',
              tailwindcss: 'latest',
              vite: '^4.5.1'
            }
          },
          null,
          2
        ),
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
@tailwind utilities;
:root {
  --md-sys-color-background: #fff8f3;
  --md-sys-color-on-background: #201b12;
  --md-sys-color-surface: #fff8f3;
  --md-sys-color-surface-dim: #e4d8cb;
  --md-sys-color-surface-bright: #fff8f3;
  --md-sys-color-surface-container-lowest: #ffffff;
  --md-sys-color-surface-container-low: #fef2e4;
  --md-sys-color-surface-container: #f8ecde;
  --md-sys-color-surface-container-high: #f3e6d8;
  --md-sys-color-surface-container-highest: #ede1d3;
  --md-sys-color-on-surface: #201b12;
  --md-sys-color-surface-variant: #f2e0c9;
  --md-sys-color-on-surface-variant: #504534;
  --md-sys-color-inverse-surface: #362f26;
  --md-sys-color-inverse-on-surface: #fbefe1;
  --md-sys-color-outline: #837562;
  --md-sys-color-outline-variant: #d5c4ae;
  --md-sys-color-shadow: #000000;
  --md-sys-color-scrim: #000000;
  --md-sys-color-surface-tint: #7f5700;
  --md-sys-color-primary: #7f5700;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #f7b337;
  --md-sys-color-on-primary-container: #442d00;
  --md-sys-color-inverse-primary: #ffba3e;
  --md-sys-color-secondary: #765a2b;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-secondary-container: #ffdca9;
  --md-sys-color-on-secondary-container: #5c4316;
  --md-sys-color-tertiary: #566500;
  --md-sys-color-on-tertiary: #ffffff;
  --md-sys-color-tertiary-container: #b6ca54;
  --md-sys-color-on-tertiary-container: #2d3600;
  --md-sys-color-error: #ba1a1a;
  --md-sys-color-on-error: #ffffff;
  --md-sys-color-error-container: #ffdad6;
  --md-sys-color-on-error-container: #410002;
}`,
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
  content: ['*.{jsx,tsx}', './node_modules/actify/dist/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--md-sys-color-background,#fff8f3)',
        'on-background': 'var(--md-sys-color-on-background,#201b12)',
        surface: 'var(--md-sys-color-surface,#fff8f3)',
        'surface-dim': 'var(--md-sys-color-surface-dim,#e4d8cb)',
        'surface-bright': 'var(--md-sys-color-surface-bright,#fff8f3)',
        'surface-container-lowest':
          'var(--md-sys-color-surface-container-lowest,#ffffff)',
        'surface-container-low': 'var(--md-sys-color-surface-container-low,#fef2e4)',
        'surface-container': 'var(--md-sys-color-surface-container,#f8ecde)',
        'surface-container-high': 'var(--md-sys-color-surface-container-high,#f3e6d8)',
        'surface-container-highest':
          'var(--md-sys-color-surface-container-highest,#ede1d3)',
        'on-surface': 'var(--md-sys-color-on-surface,#201b12)',
        'surface-variant': 'var(--md-sys-color-surface-variant,#f2e0c9)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant,#504534)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface,#362f26)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface,#fbefe1)',
        outline: 'var(--md-sys-color-outline,#837562)',
        'outline-variant': 'var(--md-sys-color-outline-variant,#d5c4ae)',
        shadow: 'var(--md-sys-color-shadow,#000000)',
        scrim: 'var(--md-sys-color-scrim,#000000)',
        'surface-tint': 'var(--md-sys-color-surface-tint,#7f5700)',
        primary: 'var(--md-sys-color-primary,#7f5700)',
        'on-primary': 'var(--md-sys-color-on-primary,#ffffff)',
        'primary-container': 'var(--md-sys-color-primary-container,#f7b337)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container,#442d00)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary,#ffba3e)',
        secondary: 'var(--md-sys-color-secondary,#765a2b)',
        'on-secondary': 'var(--md-sys-color-on-secondary,#ffffff)',
        'secondary-container': 'var(--md-sys-color-secondary-container,#ffdca9)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container,#5c4316)',
        tertiary: 'var(--md-sys-color-tertiary,#566500)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary,#ffffff)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container,#b6ca54)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container,#2d3600)',
        error: 'var(--md-sys-color-error,#ba1a1a)',
        'on-error': 'var(--md-sys-color-on-error,#ffffff)',
        'error-container': 'var(--md-sys-color-error-container,#ffdad6)',
        'on-error-container': 'var(--md-sys-color-on-error-container,#410002)'
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
