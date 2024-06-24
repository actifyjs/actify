import { IconButton, Tooltip } from 'actify'

import React from 'react'
import packageInfo from 'actify/package.json'

interface OpenInStackblitzProps extends React.ComponentProps<'form'> {
  title: string
  code: string
}

const OpenInStackblitz = ({ title, code }: OpenInStackblitzProps) => {
  const project = {
    title: 'Actify ' + title,
    template: 'node',
    description: 'Actify ' + title + ' usage example',
    files: {
      'index.html': `<!DOCTYPE html>
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
      'main.jsx': `import './main.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)`,
      'App.jsx': code,
      'package.json': `{
  "name": "actify-${title}",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite"
  },
  "dependencies": {
    "actify": "^${packageInfo.version}",
    "react": "19.0.0-rc-f994737d14-20240522",
    "react-dom": "19.0.0-rc-f994737d14-20240522"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^1.3.0",
    "autoprefixer": "^10.4.5",
    "postcss": "^8.4.13",
    "tailwindcss": "latest",
    "vite": "^5.0.7"
  }
}`,
      'main.css': `@tailwind base;
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
      'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}`,
      'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: ['*.{jsx,tsx}', './node_modules/actify/dist/**/*.{js,mjs,jsx}'],
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
      'vite.config.js': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})`
    },
    settings: JSON.stringify({
      compile: { clearConsole: false }
    })
  }

  return (
    <form
      method="post"
      target="_target"
      className="flex"
      action="https://stackblitz.com/run"
    >
      {Object.keys(project).map((item) =>
        item != 'files' ? (
          <input
            key={item}
            type="hidden"
            name={`project[${item}]`}
            // @ts-expect-error
            value={project[item]}
          />
        ) : (
          Object.keys(project[item]).map((file) => (
            <input
              key={file}
              type="hidden"
              name={`project[files][${file}]`}
              // @ts-expect-error
              value={project[item][file]}
            />
          ))
        )
      )}

      <Tooltip placement="top" content="Open in Stackblitz">
        <IconButton type="submit">
          <svg
            viewBox="0 0 28 28"
            aria-hidden="true"
            className="size-6 fill-[#1389fd]"
          >
            <path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path>
          </svg>
        </IconButton>
      </Tooltip>
    </form>
  )
}

export default OpenInStackblitz
