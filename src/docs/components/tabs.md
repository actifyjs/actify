---
title: Tabs
---

# Tabs

## Tabs organize content across different screens and views

```jsx
import { useState } from 'react'
import { Tabs, Tab, TabContent } from 'actify'
import { Home, User2, Settings2 } from 'lucide-react'

const TabContent1 = () => {
  return <img className="pointer-events-none mx-auto select-none" src="https://picsum.photos/800/600?1" />
}
const TabContent2 = () => {
  return <img className="pointer-events-none mx-auto select-none" src="https://picsum.photos/800/600?2" />
}
const TabContent3 = () => {
  return <img className="pointer-events-none mx-auto select-none" src="https://picsum.photos/800/600?3" />
}

export default () => {
  const [selected, setSelected] = useState(1)
  return (
    <div className="w-full">
      <Tabs selected={selected} onChange={(e) => setSelected(e.target.selected)}>
        <Tab>
          <span slot="icon">
            <Home />
          </span>
          Home
        </Tab>
        <Tab>
          User
          <span slot="icon">
            <User2 />
          </span>
        </Tab>
        <Tab>
          Settings
          <span slot="icon">
            <Settings2 />
          </span>
        </Tab>
      </Tabs>
      <TabContent list={[<TabContent1 />, <TabContent2 />, <TabContent3 />]} selected={selected} />
    </div>
  )
}
```
