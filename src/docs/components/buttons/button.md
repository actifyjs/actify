---
title: Button
---

# Button

## Common buttons prompt most actions in a UI

```jsx
import { Home } from 'lucide-react'
import { Button } from 'actify'

export default () => {
  return (
    <>
      <Button>Default Button</Button>
      <Button variant="elevated">Elevated Button</Button>
      <Button variant="tonal">Tonal Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
      <Button leading-icon>
        <div slot="icon" className="flex items-center">
          <Home />
        </div>
        Button with leading icon
      </Button>
      <Button trailing-icon>
        Button with trailing icon
        <div slot="icon" className="flex items-center">
          <Home />
        </div>
      </Button>
    </>
  )
}
```
