---
title: Installation
---

# Installation

#### To get started with Actify, simply paste the following code into you terminal:

```shell
# with npm
npm install actify

# with yarn
yarn add actity
```

#### In your pages or components, you can import and use it, for example:

- React project

```jsx
import { Button } from 'actify'

export default () => {
  return <Button>Hello Actify</Button>
}
```

- Next.js project

```jsx
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('actify').then((res) => res.Button), {
  ssr: false
})

export default () => {
  return <Button>Hello Actify</Button>
}
```
