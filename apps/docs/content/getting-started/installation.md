---
title: Installation
---

## Prerequisites

> Actify is working with Tailwind CSS classes and you need to have Tailwind CSS installed on your project - <a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank">Tailwind CSS Installation Guide</a>.

## Install

<tabs language="shell" items='[{"label":"pnpm","icon":"pnpm","content":"pnpm add actify"},{"label":"yarn","icon":"yarn","content":"yarn add actify"},{"label":"npm","icon":"npm","content":"npm i actify"}]'>
</tabs>

## app.css

```css
@import 'tailwindcss';

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
```

## Example

```jsx
import { Button } from 'actify'

export default () => {
  return <Button>Hello Actify</Button>
}
```
