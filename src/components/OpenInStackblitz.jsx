import { name, version } from '../../package.json'

export default ({ title, code }) => {
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
        <body>
          <div id="root"></div>
          <script type="module" src="main.jsx"></script>
        </body>
      </html>
      `,
      'main.jsx': `import './main.css'
      import ReactDOM from 'react-dom/client'
      import { StrictMode } from 'react'
      import App from './App'
      
      ReactDOM.createRoot(document.getElementById('root')).render(
        <StrictMode>
          <App />
        </StrictMode>
      )`,
      'App.jsx': "import 'actify/style'\n" + code,
      'package.json': `{
        "name": "actify-${title}",
        "private": true,
        "version": "0.0.0",
        "scripts": {
          "dev": "vite",
          "build": "vite build",
          "preview": "vite preview"
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
          "tailwindcss": "^3.3.3",
          "vite": "^4.4.9"
        }
      }`,
      'main.css': `@tailwind base;
      @tailwind components;
      @tailwind utilities;
      
      @layer base {
        :root {
          --color-primary: 0 106 106;
          --color-on-primary: 255 255 255;
          --color-primary-container: 111 247 246;
          --color-on-primary-container: 0 32 32;
          --color-secondary: 74 99 99;
          --color-on-secondary: 255 255 255;
          --color-secondary-container: 204 232 231;
          --color-on-secondary-container: 5 31 31;
          --color-tertiary: 75 96 124;
          --color-on-tertiary: 255 255 255;
          --color-tertiary-container: 211 228 255;
          --color-on-tertiary-container: 4 28 53;
          --color-error: 186 26 26;
          --color-on-error: 255 255 255;
          --color-error-container: 255 218 214;
          --color-on-error-container: 65 0 2;
          --color-background: 250 253 252;
          --color-on-background: 25 28 28;
          --color-surface: 250 253 252;
          --color-on-surface: 25 28 28;
          --color-surface-variant: 218 229 228;
          --color-on-surface-variant: 63 73 72;
          --color-outline: 111 121 121;
          --color-outline-variant: 190 201 200;
          --color-inverse-surface: 45 49 49;
          --color-inverse-primary: 76 218 218;
          --color-on-inverse-surface: 239 241 240;
          --color-primary-hover: 20 118 118;
          --color-primary-press: 31 124 124;
          --color-primary-focus: 31 124 124;
          --color-primary-drag: 41 130 130;
          --color-primary-container-hover: 102 230 229;
          --color-primary-container-press: 98 221 220;
          --color-primary-container-focus: 98 221 220;
          --color-primary-container-drag: 93 212 212;
          --color-secondary-hover: 88 111 111;
          --color-secondary-press: 96 118 118;
          --color-secondary-focus: 96 118 118;
          --color-secondary-drag: 103 124 124;
          --color-secondary-container-hover: 188 216 215;
          --color-secondary-container-press: 180 208 207;
          --color-secondary-container-focus: 180 208 207;
          --color-secondary-container-drag: 172 200 199;
          --color-tertiary-hover: 89 108 134;
          --color-tertiary-press: 97 115 140;
          --color-tertiary-focus: 97 115 140;
          --color-tertiary-drag: 104 122 145;
          --color-tertiary-container-hover: 195 212 239;
          --color-tertiary-container-press: 186 204 230;
          --color-tertiary-container-focus: 186 204 230;
          --color-tertiary-container-drag: 178 196 223;
          --color-error-hover: 191 44 44;
          --color-error-press: 194 54 54;
          --color-error-focus: 194 54 54;
          --color-error-drag: 197 63 63;
          --color-error-container-hover: 240 201 197;
          --color-error-container-press: 232 191 188;
          --color-error-container-focus: 232 191 188;
          --color-error-container-drag: 224 183 180;
          --color-background-hover: 232 235 234;
          --color-background-press: 223 226 225;
          --color-background-focus: 223 226 225;
          --color-background-drag: 214 217 216;
          --color-surface-hover: 232 235 234;
          --color-surface-press: 223 226 225;
          --color-surface-focus: 223 226 225;
          --color-surface-drag: 214 217 216;
          --color-surface-variant-hover: 206 217 216;
          --color-surface-variant-press: 199 210 209;
          --color-surface-variant-focus: 199 210 209;
          --color-surface-variant-drag: 193 204 203;
          --color-inverse-surface-hover: 60 64 64;
          --color-inverse-surface-press: 69 72 72;
          --color-inverse-surface-focus: 69 72 72;
          --color-inverse-surface-drag: 76 80 80;
        }
      }
      `,
      'postcss.config.js': `module.exports = {
          plugins: {
            tailwindcss: {},
            autoprefixer: {}
          }
        }`,
      'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
      module.exports = {
        content: ['./**/*.{js,jsx}', './node_modules/actify/lib/*.{js,mjs}'],
        theme: {
          extend: {
            colors: {
              primary: 'rgb(var(--color-primary, 0 106 106) / <alpha-value>)',
              'on-primary': 'rgb(var(--color-on-primary, 255 255 255) / <alpha-value>)',
              secondary: 'rgb(var(--color-secondary, 74 99 99) / <alpha-value>)',
              'on-secondary': 'rgb(var(--color-on-secondary, 255 255 255) / <alpha-value>)',
              tertiary: 'rgb(var(--color-tertiary, 75 96 124) / <alpha-value>)',
              'on-tertiary': 'rgb(var(--color-on-tertiary, 255 255 255) / <alpha-value>)',
              error: 'rgb(var(--color-error, 186 26 26) / <alpha-value>)',
              'on-error': 'rgb(var(--color-on-error, 255 255 255) / <alpha-value>)',
              surface: 'rgb(var(--color-surface, 250 253 252) / <alpha-value>)',
              'on-surface': 'rgb(var(--color-on-surface, 25 28 28) / <alpha-value>)',
              outline: 'rgb(var(--color-outline, 111 121 121) / <alpha-value>)',
            },
          },
        },
        plugins: [],
      }`,
      'vite.config.js': `import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'
      // https://vitejs.dev/config/
      export default defineConfig({
        plugins: [react()],
      })
      `
    },
    settings: JSON.stringify({
      compile: { clearConsole: false }
    })
  }

  return (
    <form method="post" target="_target" action="https://stackblitz.com/run">
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
      <button type="submit">
        <img
          className="cursor-pointer"
          src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
        />
      </button>
    </form>
  )
}
