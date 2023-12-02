// @ts-nocheck
import React from 'react'
import { name, version } from '../../package.json'
import { Icon, IconButton, Tooltip } from 'actify'
import { getParameters } from 'codesandbox/lib/api/define'

interface OpenInCodeSandboxProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string
  code: string
}

const OpenInCodeSandbox: React.FC<OpenInCodeSandboxProps> = ({
  title,
  code
}) => {
  const parameters = getParameters({
    files: {
      'package.json': {
        content: {
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
            'tailwind-material-colors': '^1.1.2',
            tailwindcss: '^3.3.3',
            vite: '^4.4.9'
          }
        }
      },
      'App.jsx': {
        content: code
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
)`
      },
      'main.css': {
        content: `@tailwind base;
@tailwind components;
@tailwind utilities;`
      },
      'postcss.config.js': {
        content: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}`
      },
      'tailwind.config.js': {
        content: `const colors = require('tailwindcss/colors')
const { withMaterialColors } = require('tailwind-material-colors')

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']
      
module.exports = withMaterialColors(
  {
    darkMode: 'class',
    content: [
      '*.{html,js,jsx}',
      './node_modules/actify/lib/**/*.{js,cjs}'
    ],
    theme: {
      extend: {
        colors: {
          ...colors
        }
      }
    }
  },
  {
    primary: '#006a6a'
  }
)`
      },
      'vite.config.js': {
        content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})`
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
</html>`
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
          <Icon name="codesandbox" />
        </IconButton>
      </Tooltip>
    </form>
  )
}

export default OpenInCodeSandbox
