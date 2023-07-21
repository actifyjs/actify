---
title: Switch
---

# Switch

## Switches toggle the state of an item on or off

```jsx
import Switch from 'actify'

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <Switch color="primary" />
        <Switch color="secondary" />
        <Switch color="tertiary" />
        <Switch selected color="error" />
        <Switch color="purple" />
        <Switch color="#f26f21" />
        <Switch disabled />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <Switch color="primary" />
          <span>with label</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch color="primary" icons selected />
          <span>with icons</span>
        </label>
      </div>
    </>
  )
}
```
