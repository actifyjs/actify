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
- **[React Spring](https://www.react-spring.dev/):** For building interactive, data-driven, and animated UI components.
- **Theme System:** A powerful color system that makes it easy to style your application with a consistent color palette.

### 🌻 Get Started

```bash
# with npm
npm install actify

# with yarn
yarn add actify
```

### 🎉 Example

<details open>
<summary>React project</summary>

```jsx
import { Button } from 'actify'

export default () => {
  return <Button>Hello Actify</Button>
}
```

</details>

<details>
<summary>Next.js project</summary>

```jsx
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('actify').then((res) => res.Button), {
  ssr: false
})

export default () => {
  return <Button>Hello Actify</Button>
}
```

</details>

### 🌐 Browser Support

| Browser  | Version |
| -------- | ------- |
| Chrome   | 112 +   |
| Edge     | 112 +   |
| Firefox  | 113 +   |
| Safari\* | 16.4 +  |
