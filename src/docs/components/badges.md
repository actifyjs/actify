---
title: Badge
---

# Badge

## Badges show notifications, counts, or status information on navigation items and icons

```jsx
import { Badge, IconButton } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <IconButton>
        <User />
        <Badge value={999} color="purple" />
      </IconButton>
    </div>
  )
}
```
