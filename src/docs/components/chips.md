---
title: Chips
---

# Chips

## Chips help people enter information, make selections, filter content, or trigger actions

```jsx
import { Chip } from 'actify'
import { Circle } from 'lucide-react'

export default () => {
  return (
    <div className="flex gap-2">
      <Chip icon={Circle} label="Ramp access" />
      <Chip icon={Circle} type="filter" label="filter" />
      <Chip type="input" label="input" />
      <Chip type="suggestion" label="Suggestion" />
    </div>
  )
}
```
