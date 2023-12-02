// @ts-nocheck
import React from 'react'
import { Tooltip, IconButton } from 'actify'
import { name, version } from '../../package.json'

interface OpenInStackblitzProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string
  code: string
}

const OpenInStackblitz: React.FC<OpenInStackblitzProps> = ({ title, code }) => {
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
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^1.3.0",
    "autoprefixer": "^10.4.5",
    "postcss": "^8.4.13",
    "tailwind-material-colors": "^1.1.2",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.9"
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
      'tailwind.config.js': `const colors = require('tailwindcss/colors')
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
)`,
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
            value={project[item]}
          />
        ) : (
          Object.keys(project[item]).map((file) => (
            <input
              key={file}
              type="hidden"
              name={`project[files][${file}]`}
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
            className="w-6 h-6 fill-[#1389fd]"
          >
            <path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path>
          </svg>
        </IconButton>
      </Tooltip>
    </form>
  )
}

export default OpenInStackblitz
