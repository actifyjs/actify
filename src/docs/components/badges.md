---
title: Badge
---

# Badge

## Badges show notifications, counts, or status information on navigation items and icons

# Usage

<usage name="badges"></usage>

```jsx
import { Icon, Badge, IconButton } from 'actify'

export default () => {
  return (
    <div className="flex gap-8">
      <Badge value={999} color="primary">
        <IconButton>
          <Icon name="User" />
        </IconButton>
      </Badge>
      <Badge value={value}>
        <Button>with button</Button>
      </Badge>
    </div>
  )
}
```
