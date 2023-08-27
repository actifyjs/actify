---
title: Installation
---

#### To get started with Actify, simply paste the following code into you terminal:

#### In your pages or components, you can import and use it, for example:

<tabs language="shell" value="npm" tabs='[{"label":"npm","icon":"Terminal","content":"npm install actify"},{"label":"yarn","icon":"TerminalSquare","content":"yarn add actify"}]'></tabs>

<details open>
<summary className="cursor-pointer">React project</summary>

```jsx
import { Button } from 'actify'

export default () => {
  return <Button>Hello Actify</Button>
}
```

</details>

<details>
<summary className="cursor-pointer">Next.js project</summary>

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
