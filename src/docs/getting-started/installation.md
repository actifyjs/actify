---
title: Installation
---

## Prerequisites:

> Actify is working with Tailwind CSS classes and you need to have Tailwind CSS installed on your project - <a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank">Tailwind CSS Installation Guide</a>.

## Install

<tabs language="shell" value="npm" tabs='[{"label":"npm","icon":"Terminal","content":"npm install actify"},{"label":"yarn","icon":"TerminalSquare","content":"yarn add actify"}]'></tabs>

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/actify/lib/*.{js,mjs}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary, 0 106 106) / <alpha-value>)',
        'on-primary':
          'rgb(var(--color-on-primary, 255 255 255) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary, 74 99 99) / <alpha-value>)',
        'on-secondary':
          'rgb(var(--color-on-secondary, 255 255 255) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary, 75 96 124) / <alpha-value>)',
        'on-tertiary':
          'rgb(var(--color-on-tertiary, 255 255 255) / <alpha-value>)',
        error: 'rgb(var(--color-error, 186 26 26) / <alpha-value>)',
        'on-error': 'rgb(var(--color-on-error, 255 255 255) / <alpha-value>)',
        surface: 'rgb(var(--color-surface, 250 253 252) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface, 25 28 28) / <alpha-value>)',
        outline: 'rgb(var(--color-outline, 111 121 121) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
```

## Example

```jsx
import { Button } from 'actify'

export default () => {
  return <Button>Hello Actify</Button>
}
```
