<p align="center">
  <a href="https://actifyjs.com">
    <img alt="Actify Logo" width="100" src="https://actifyjs.com/actify.svg">
  </a>
</p>

### 🚀 Introduction

Actify is a React Components Library based on Material Design 3 Web Components.
Inspired by Vuetify. Some features:

- **[Vite](https://vitejs.dev/):** Use Vite to build libs and docs.
- **[Tailwind CSS](https://tailwindcss.com/):** Build with Tailwind CSS.
- **[Tailwind Variants](https://www.tailwind-variants.org/):** For variants and smart className merge.
- **[Floating UI](https://floating-ui.com/):** The future of Popper to deal with smart anchor positioning.
- **[Framer Motion](https://www.framer.com/motion/):** It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed.
- **Theme System:** A powerful color system that makes it easy to style your application with a consistent color palette.

### 🌻 Get Started

```bash
# with npm
npm install actify

# with yarn
yarn add actify
```

### ⚙️ Set tailwind.config.js

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

### 🎨 Config color theme (optional)

- go to [actify theme config page](https://actifyjs.com/getting-started/theme)
- select your primary color
- copy the bottom live css code
- paste it to tailwind css main.css/style.css

### 🎉 Example

```jsx
import { Button } from 'actify'

export default () => {
  return <Button>Hello Actify</Button>
}
```
