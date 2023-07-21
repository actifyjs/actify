---
title: Checkbox
---

# Checkbox

## Checkboxes let users select one or more items from a list, or turn an item on or off

```jsx
import Checkbox from 'actify'

export default () => {
  return (
    <>
      <label className="flex items-center">
        <Checkbox />
        <span>primary</span>
      </label>
      <label className="flex items-center">
        <Checkbox color="secondary" />
        <span>secondary</span>
      </label>
      <label className="flex items-center">
        <Checkbox color="tertiary" />
        <span>tertiary</span>
      </label>
      <label className="flex items-center">
        <Checkbox color="error" />
        <span>error</span>
      </label>
      <label className="flex items-center">
        <Checkbox disabled color="warning" />
        <span>disabled</span>
      </label>
    </>
  )
}
```
