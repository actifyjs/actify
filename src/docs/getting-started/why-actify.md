---
title: Awesome Title
description: Describe this awesome content
tags:
  - 'great'
  - 'awesome'
  - 'rad'
---

# Introduction

## What is Actify?

```jsx
import { useState } from 'react'
import { Badge, Button, IconButton } from 'actify'

export default () => {
  const [dot, setDot] = useState(false)
  const [content, setContent] = useState('')

  return (
    <>
      <Badge content={content} dot={dot}>
        <Button>
          <div slot="icon" className="flex items-center">
            <Home />
          </div>
          Home
        </Button>
      </Badge>
      <Badge content={content} dot={dot}>
        <IconButton>
          <User />
        </IconButton>
      </Badge>
    </>
  )
}
```
