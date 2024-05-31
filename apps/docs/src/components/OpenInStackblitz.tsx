import { IconButton, Tooltip, name, version } from 'actify'

import React from 'react'

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
    "${name}": "^${version}",
    "react": "rc",
    "react-dom": "rc"
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
@tailwind utilities;`,
      'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}`,
      'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
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
