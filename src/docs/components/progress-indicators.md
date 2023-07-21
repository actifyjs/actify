---
title: Progress indicators
---

# Progress indicators

## Progress indicators show the status of a process in real time

```jsx
import LinearProgress from 'actify'
import CircularProgress from 'actify'

export default () => {
  return (
    <>
      <LinearProgress indeterminate progress={0.5} />
      <CircularProgress indeterminate />
    </>
  )
}
```
