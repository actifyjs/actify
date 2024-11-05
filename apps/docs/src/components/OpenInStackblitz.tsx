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
      '.gitignore': `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`,
      'index.html': `<!DOCTYPE html>
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
      'src/main.tsx': `import './main.css'
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
      'src/vite-env.d.ts': `/// <reference types="vite/client" />`,
      'src/App.tsx': code,
      'package.json': `{
  "name": "actify-${title}",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite"
  },
  "dependencies": {
    "actify": "^${packageInfo.version}",
    "react": "rc",
    "react-dom": "rc"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "npm:types-react@rc",
    "@types/react-dom": "npm:types-react-dom@rc",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.47",
    "tailwindcss": "latest",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.11.0",
    "vite": "^5.4.10"
  }
}`,
      'src/main.css': `@tailwind base;
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
      'postcss.config.mts': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
      'tailwind.config.ts': `import { Config } from "tailwindcss";

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
      'vite.config.ts': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
`,
      'tsconfig.app.json': `{
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
      'tsconfig.json': `{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}`,
      'tsconfig.node.json': `{
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
}`
    },
    settings: JSON.stringify({
      compile: { clearConsole: false }
    })
  }

  return (
    <Tooltip placement="top" content="Open in Stackblitz">
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

        <IconButton type="submit">
          <svg
            viewBox="0 0 28 28"
            aria-hidden="true"
            className="size-6 fill-[#1389fd]"
          >
            <path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path>
          </svg>
        </IconButton>
      </form>
    </Tooltip>
  )
}

export default OpenInStackblitz
