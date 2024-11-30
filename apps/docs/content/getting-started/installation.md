---
title: Installation
---

## Prerequisites

> Actify is working with Tailwind CSS classes and you need to have Tailwind CSS installed on your project - <a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank">Tailwind CSS Installation Guide</a>.

## Install

<tabs language="shell" items='[{"label":"pnpm","icon":"pnpm","content":"pnpm add actify"},{"label":"yarn","icon":"yarn","content":"yarn add actify"},{"label":"npm","icon":"npm","content":"npm i actify"}]'>
</tabs>

## globals.css

```css
@tailwind base;
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
}
```

## tailwind.config.js

```ts
import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--md-sys-color-background) / <alpha-value>)',
        'on-background':
          'rgb(var(--md-sys-color-on-background) / <alpha-value>)',
        surface: 'rgb(var(--md-sys-color-surface) / <alpha-value>)',
        'surface-dim': 'rgb(var(--md-sys-color-surface-dim) / <alpha-value>)',
        'surface-bright':
          'rgb(var(--md-sys-color-surface-bright) / <alpha-value>)',
        'surface-container-lowest':
          'rgb(var(--md-sys-color-surface-container-lowest) / <alpha-value>)',
        'surface-container-low':
          'rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)',
        'surface-container':
          'rgb(var(--md-sys-color-surface-container) / <alpha-value>)',
        'surface-container-high':
          'rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)',
        'surface-container-highest':
          'rgb(var(--md-sys-color-surface-container-highest) / <alpha-value>)',
        'on-surface': 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
        'surface-variant':
          'rgb(var(--md-sys-color-surface-variant) / <alpha-value>)',
        'on-surface-variant':
          'rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)',
        'inverse-surface':
          'rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)',
        'inverse-on-surface':
          'rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)',
        outline: 'rgb(var(--md-sys-color-outline) / <alpha-value>)',
        'outline-variant':
          'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
        shadow: 'rgb(var(--md-sys-color-shadow) / <alpha-value>)',
        scrim: 'rgb(var(--md-sys-color-scrim) / <alpha-value>)',
        'surface-tint': 'rgb(var(--md-sys-color-surface-tint) / <alpha-value>)',
        primary: 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
        'primary-container':
          'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
        'on-primary-container':
          'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
        'inverse-primary':
          'rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)',
        secondary: 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
        'on-secondary': 'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
        'secondary-container':
          'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
        'on-secondary-container':
          'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
        tertiary: 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
        'on-tertiary': 'rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)',
        'tertiary-container':
          'rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)',
        'on-tertiary-container':
          'rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)',
        error: 'rgb(var(--md-sys-color-error) / <alpha-value>)',
        'on-error': 'rgb(var(--md-sys-color-on-error) / <alpha-value>)',
        'error-container':
          'rgb(var(--md-sys-color-error-container) / <alpha-value>)',
        'on-error-container':
          'rgb(var(--md-sys-color-on-error-container) / <alpha-value>)'
      }
    }
  },
  plugins: []
}

export default config
```

## Example

```jsx
import { Button } from 'actify'

export default () => {
  return <Button>Hello Actify</Button>
}
```
