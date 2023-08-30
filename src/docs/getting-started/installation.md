---
title: Installation
---

#### Prerequisites:

> Need a React and Tailwind CSS project

#### To get started with Actify, simply paste the following code into you terminal:

<tabs language="shell" value="npm" tabs='[{"label":"npm","icon":"Terminal","content":"npm install actify"},{"label":"yarn","icon":"TerminalSquare","content":"yarn add actify"}]'></tabs>

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/actify/lib/*.{js,mjs}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary, 0 106 106))',
        'on-primary': 'rgb(var(--color-on-primary, 255 255 255))',
        secondary: 'rgb(var(--color-secondary, 74 9999))',
        'on-secondary': 'rgb(var(--color-on-secondary, 255 255 255))',
        tertiary: 'rgb(var(--color-tertiary, 75 96 124))',
        'on-tertiary': 'rgb(var(--color-on-tertiary, 255 255 255))',
        error: 'rgb(var(--color-error, 186 26 26))',
        'on-error': 'rgb(var(--color-on-error, 255 255 255))',
        surface: 'rgb(var(--color-surface, 250,253,252))',
        'on-surface': 'rgb(var(--color-on-surface, 25,28,28))'
      }
    }
  },
  plugins: []
}
```

#### In your pages or components, you can import and use it, for example:

```jsx
import { Button } from 'actify'

export default () => {
  return <Button>Hello Actify</Button>
}
```
