import { IconButton, Tooltip, TooltipTrigger } from 'actify'

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
      'src/main.tsx': `import './app.css'
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
  "type": "module",
  "scripts": {
    "dev": "vite"
  },
  "dependencies": {
    "actify": "^${packageInfo.version}",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@tailwindcss/vite": "latest",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.3",
    "eslint": "^9.13.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "tailwindcss": "latest",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.11.0",
    "vite": "latest"
  }
}`,
      'src/app.css': `@import 'tailwindcss';
:root {
 --md-sys-color-background: #18130b;
  --md-sys-color-on-background: #ede1d3;
  --md-sys-color-surface: #18130b;
  --md-sys-color-surface-dim: #18130b;
  --md-sys-color-surface-bright: #3f382f;
  --md-sys-color-surface-container-lowest: #120d06;
  --md-sys-color-surface-container-low: #201b12;
  --md-sys-color-surface-container: #251f16;
  --md-sys-color-surface-container-high: #2f2920;
  --md-sys-color-surface-container-highest: #3b342a;
  --md-sys-color-on-surface: #ede1d3;
  --md-sys-color-surface-variant: #504534;
  --md-sys-color-on-surface-variant: #d5c4ae;
  --md-sys-color-inverse-surface: #ede1d3;
  --md-sys-color-inverse-on-surface: #362f26;
  --md-sys-color-outline: #9d8f7b;
  --md-sys-color-outline-variant: #504534;
  --md-sys-color-shadow: #000000;
  --md-sys-color-scrim: #000000;
  --md-sys-color-surface-tint: #ffba3e;
  --md-sys-color-primary: #ffc971;
  --md-sys-color-on-primary: #432c00;
  --md-sys-color-primary-container: #ecaa2e;
  --md-sys-color-on-primary-container: #614100;
  --md-sys-color-inverse-primary: #7f5700;
  --md-sys-color-secondary: #e6c188;
  --md-sys-color-on-secondary: #432c02;
  --md-sys-color-secondary-container: #5e4518;
  --md-sys-color-on-secondary-container: #d7b37c;
  --md-sys-color-tertiary: #c7dc64;
  --md-sys-color-on-tertiary: #2c3400;
  --md-sys-color-tertiary-container: #acc04b;
  --md-sys-color-on-tertiary-container: #414d00;
  --md-sys-color-error: #ffb4ab;
  --md-sys-color-on-error: #690005;
  --md-sys-color-error-container: #93000a;
  --md-sys-color-on-error-container: #ffdad6;
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
      'vite.config.ts': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
    <TooltipTrigger delay={50} closeDelay={50}>
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
      <Tooltip placement="top">Open in Stackblitz</Tooltip>
    </TooltipTrigger>
  )
}

export default OpenInStackblitz
