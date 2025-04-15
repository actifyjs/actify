import { IconButton, Tooltip, TooltipTrigger } from 'actify'

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
            type: 'module',
            version: '0.0.0',
            scripts: {
              dev: 'vite'
            },
            dependencies: {
              actify: `^${packageInfo.version}`,
              react: '^19.0.0',
              'react-dom': '^19.0.0'
            },
            devDependencies: {
              '@eslint/js': '^9.13.0',
              '@tailwindcss/vite': 'latest',
              '@vitejs/plugin-react': '^4.3.3',
              '@types/react': '^19.0.0',
              '@types/react-dom': '^19.0.0',
              autoprefixer: '^10.4.20',
              eslint: '^9.13.0',
              'eslint-plugin-react-hooks': '^5.0.0',
              'eslint-plugin-react-refresh': '^0.4.14',
              globals: '^15.11.0',
              postcss: '^8.4.47',
              tailwindcss: 'latest',
              typescript: '~5.6.2',
              'typescript-eslint': '^8.11.0',
              vite: 'latest'
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
        content: `import './app.css'
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
      'src/app.css': {
        content: `@import 'tailwindcss';
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
  --md-sys-color-primary-container: #ecaa2e;
  --md-sys-color-on-primary-container: #614100;
  --md-sys-color-inverse-primary: #ffba3e;
  --md-sys-color-secondary: #765a2b;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-secondary-container: #fed79d;
  --md-sys-color-on-secondary-container: #785c2d;
  --md-sys-color-tertiary: #566500;
  --md-sys-color-on-tertiary: #ffffff;
  --md-sys-color-tertiary-container: #acc04b;
  --md-sys-color-on-tertiary-container: #414d00;
  --md-sys-color-error: #ba1a1a;
  --md-sys-color-on-error: #ffffff;
  --md-sys-color-error-container: #ffdad6;
  --md-sys-color-on-error-container: #93000a;
}
  
@theme {
  --color-background: var(--md-sys-color-background);
  --color-on-background: var(--md-sys-color-on-background);
  --color-surface: var(--md-sys-color-surface);
  --color-surface-dim: var(--md-sys-color-surface-dim);
  --color-surface-bright: var(--md-sys-color-surface-bright);
  --color-surface-container-lowest: var(
    --md-sys-color-surface-container-lowest
  );
  --color-surface-container-low: var(--md-sys-color-surface-container-low);
  --color-surface-container: var(--md-sys-color-surface-container);
  --color-surface-container-high: var(--md-sys-color-surface-container-high);
  --color-surface-container-highest: var(
    --md-sys-color-surface-container-highest
  );
  --color-on-surface: var(--md-sys-color-on-surface);
  --color-surface-variant: var(--md-sys-color-surface-variant);
  --color-on-surface-variant: var(--md-sys-color-on-surface-variant);
  --color-inverse-surface: var(--md-sys-color-inverse-surface);
  --color-inverse-on-surface: var(--md-sys-color-inverse-on-surface);
  --color-outline: var(--md-sys-color-outline);
  --color-outline-variant: var(--md-sys-color-outline-variant);
  --color-shadow: var(--md-sys-color-shadow);
  --color-scrim: var(--md-sys-color-scrim);
  --color-surface-tint: var(--md-sys-color-surface-tint);
  --color-primary: var(--md-sys-color-primary);
  --color-on-primary: var(--md-sys-color-on-primary);
  --color-primary-container: var(--md-sys-color-primary-container);
  --color-on-primary-container: var(--md-sys-color-on-primary-container);
  --color-inverse-primary: var(--md-sys-color-inverse-primary);
  --color-secondary: var(--md-sys-color-secondary);
  --color-on-secondary: var(--md-sys-color-on-secondary);
  --color-secondary-container: var(--md-sys-color-secondary-container);
  --color-on-secondary-container: var(--md-sys-color-on-secondary-container);
  --color-tertiary: var(--md-sys-color-tertiary);
  --color-on-tertiary: var(--md-sys-color-on-tertiary);
  --color-tertiary-container: var(--md-sys-color-tertiary-container);
  --color-on-tertiary-container: var(--md-sys-color-on-tertiary-container);
  --color-error: var(--md-sys-color-error);
  --color-on-error: var(--md-sys-color-on-error);
  --color-error-container: var(--md-sys-color-error-container);
  --color-on-error-container: var(--md-sys-color-on-error-container);
}  
`,
        isBinary: false
      },
      'vite.config.ts': {
        content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
    <TooltipTrigger delay={50} closeDelay={50}>
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
      <Tooltip placement="top">Open in CodeSandbox</Tooltip>
    </TooltipTrigger>
  )
}

export default OpenInCodeSandbox
