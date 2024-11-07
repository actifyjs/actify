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
              react: 'rc',
              'react-dom': 'rc'
            },
            devDependencies: {
              '@eslint/js': '^9.13.0',
              '@vitejs/plugin-react': '^4.3.3',
              autoprefixer: '^10.4.20',
              eslint: '^9.13.0',
              'eslint-plugin-react-hooks': '^5.0.0',
              'eslint-plugin-react-refresh': '^0.4.14',
              globals: '^15.11.0',
              postcss: '^8.4.47',
              tailwindcss: 'latest',
              typescript: '~5.6.2',
              'typescript-eslint': '^8.11.0',
              vite: '^4.5.1'
            }
          },
          null,
          2
        ),
        isBinary: false
      },
      'src/App.tsx': {
        content: code,
        isBinary: false
      },
      'src/main.tsx': {
        content: `import './main.css'
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        isBinary: false
      },
      'src/main.css': {
        content: `@tailwind base;
@tailwind components;
@tailwind utilities;
:root {
  --md-sys-color-background: 255 248 243;
  --md-sys-color-on-background: 32 27 18;
  --md-sys-color-surface: 255 248 243;
  --md-sys-color-surface-dim: 228 216 203;
  --md-sys-color-surface-bright: 255 248 243;
  --md-sys-color-surface-container-lowest: 255 255 255;
  --md-sys-color-surface-container-low: 254 242 228;
  --md-sys-color-surface-container: 248 236 222;
  --md-sys-color-surface-container-high: 243 230 216;
  --md-sys-color-surface-container-highest: 237 225 211;
  --md-sys-color-on-surface: 32 27 18;
  --md-sys-color-surface-variant: 242 225 201;
  --md-sys-color-on-surface-variant: 80 69 52;
  --md-sys-color-inverse-surface: 54 47 38;
  --md-sys-color-inverse-on-surface: 251 239 225;
  --md-sys-color-outline: 131 117 98;
  --md-sys-color-outline-variant: 213 196 174;
  --md-sys-color-shadow: 0 0 0;
  --md-sys-color-scrim: 0 0 0;
  --md-sys-color-surface-tint: 127 87 0;
  --md-sys-color-primary: 127 87 0;
  --md-sys-color-on-primary: 255 255 255;
  --md-sys-color-primary-container: 247 179 55;
  --md-sys-color-on-primary-container: 68 45 0;
  --md-sys-color-inverse-primary: 255 186 62;
  --md-sys-color-secondary: 118 90 43;
  --md-sys-color-on-secondary: 255 255 255;
  --md-sys-color-secondary-container: 255 220 169;
  --md-sys-color-on-secondary-container: 92 67 22;
  --md-sys-color-tertiary: 86 101 0;
  --md-sys-color-on-tertiary: 255 255 255;
  --md-sys-color-tertiary-container: 182 202 84;
  --md-sys-color-on-tertiary-container: 45 54 0;
  --md-sys-color-error: 186 26 26;
  --md-sys-color-on-error: 255 255 255;
  --md-sys-color-error-container: 255 218 214;
  --md-sys-color-on-error-container: 65 0 2;
}`,
        isBinary: false
      },
      'postcss.config.mjs': {
        content: `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
        isBinary: false
      },
      'tailwind.config.ts': {
        content: `import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--md-sys-color-background) / <alpha-value>)",
        "on-background":
          "rgb(var(--md-sys-color-on-background) / <alpha-value>)",
        surface: "rgb(var(--md-sys-color-surface) / <alpha-value>)",
        "surface-dim": "rgb(var(--md-sys-color-surface-dim) / <alpha-value>)",
        "surface-bright":
          "rgb(var(--md-sys-color-surface-bright) / <alpha-value>)",
        "surface-container-lowest":
          "rgb(var(--md-sys-color-surface-container-lowest) / <alpha-value>)",
        "surface-container-low":
          "rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)",
        "surface-container":
          "rgb(var(--md-sys-color-surface-container) / <alpha-value>)",
        "surface-container-high":
          "rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)",
        "surface-container-highest":
          "rgb(var(--md-sys-color-surface-container-highest) / <alpha-value>)",
        "on-surface": "rgb(var(--md-sys-color-on-surface) / <alpha-value>)",
        "surface-variant":
          "rgb(var(--md-sys-color-surface-variant) / <alpha-value>)",
        "on-surface-variant":
          "rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)",
        "inverse-surface":
          "rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)",
        "inverse-on-surface":
          "rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)",
        outline: "rgb(var(--md-sys-color-outline) / <alpha-value>)",
        "outline-variant":
          "rgb(var(--md-sys-color-outline-variant) / <alpha-value>)",
        shadow: "rgb(var(--md-sys-color-shadow) / <alpha-value>)",
        scrim: "rgb(var(--md-sys-color-scrim) / <alpha-value>)",
        "surface-tint": "rgb(var(--md-sys-color-surface-tint) / <alpha-value>)",
        primary: "rgb(var(--md-sys-color-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--md-sys-color-on-primary) / <alpha-value>)",
        "primary-container":
          "rgb(var(--md-sys-color-primary-container) / <alpha-value>)",
        "on-primary-container":
          "rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)",
        "inverse-primary":
          "rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)",
        secondary: "rgb(var(--md-sys-color-secondary) / <alpha-value>)",
        "on-secondary": "rgb(var(--md-sys-color-on-secondary) / <alpha-value>)",
        "secondary-container":
          "rgb(var(--md-sys-color-secondary-container) / <alpha-value>)",
        "on-secondary-container":
          "rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)",
        tertiary: "rgb(var(--md-sys-color-tertiary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)",
        "tertiary-container":
          "rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)",
        "on-tertiary-container":
          "rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)",
        error: "rgb(var(--md-sys-color-error) / <alpha-value>)",
        "on-error": "rgb(var(--md-sys-color-on-error) / <alpha-value>)",
        "error-container":
          "rgb(var(--md-sys-color-error-container) / <alpha-value>)",
        "on-error-container":
          "rgb(var(--md-sys-color-on-error-container) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;`,
        isBinary: false
      },
      'vite.config.ts': {
        content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
`,
        isBinary: false
      },
      'tsconfig.app.json': {
        content: `{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}`,
        isBinary: false
      },
      'tsconfig.json': {
        content: `{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}`,
        isBinary: false
      },
      'tsconfig.node.json': {
        content: `{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}`,
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
    <script type="module" src="src/main.tsx"></script>
  </body>
</html>`,
        isBinary: false
      }
    }
  })

  return (
    <Tooltip placement="top" content="Open in CodeSandbox">
      <form
        method="POST"
        target="_blank"
        action="https://codesandbox.io/api/v1/sandboxes/define"
      >
        <input type="hidden" name="parameters" value={parameters} />
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
      </form>
    </Tooltip>
  )
}

export default OpenInCodeSandbox
