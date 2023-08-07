---
title: Divider
---

# Divider

## Dividers are thin lines that group content in lists or other containers

# Usage

<usage name="divider"></usage>

```jsx
import { divider } from 'actify'

export default () => {
  return (
    <div className="flex flex-col">
      <Divider />
      <Divider thickness={10} color="error" />
    </div>
  )
}
```
