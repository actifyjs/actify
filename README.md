<p align="center">
  <a href="https://actifyjs.com">
    <img alt="Actify Logo" width="100" src="https://actifyjs.com/actify.svg">
  </a>
</p>

### 🚀 Introduction

Actify is a React Components Library based on Material Design 3 Web Components.
Inspired by Vuetify. Some highlights include:

- **Vite:** Use Vite to build lib and docs.
- **Tailwind CSS:** Build with Tailwind CSS.
- **CSS Property:** Use css property to control web component styles.
- **Theme System:** A powerful color system that makes it easy to style your application with a consistent color palette.

### 🌻 Get Started

```bash
# with npm
npm install actify

# with yarn
yarn add actify
```

### 🎉 Example

<details>
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
