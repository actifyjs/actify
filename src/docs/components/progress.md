---
title: Progress indicators
---

# Progress indicators

## Progress indicators show the status of a process in real time

# Usage

<usage name="progress"></usage>

```jsx
import { LinearProgress, CircularProgress } from 'actify'

export default () => {
  return (
    <>
      <LinearProgress indeterminate value={0.5} />
      <CircularProgress indeterminate />
    </>
  )
}
```
