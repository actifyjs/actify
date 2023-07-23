---
title: Lists
---

# Lists

## Lists are continuous, vertical indexes of text and images

# Usage

<usage name="list"></usage>

```jsx
import { List, ListItem } from 'actify'

export default () => {
  const list = [
    {
      id: 1,
      headline: 'HTML'
    },
    {
      id: 2,
      headline: 'CSS'
    },
    {
      id: 3,
      headline: 'React'
    }
  ]
  return (
    <List>
      {list.map((item) => (
        <ListItem key={item.id} headline={item.headline} />
      ))}
    </List>
  )
}
```