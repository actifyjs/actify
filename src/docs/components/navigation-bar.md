---
title: Navigation bar
---

# Navigation bar

## Navigation bars let people switch between UI views on smaller devices

# Usage

<usage name="navigation-bar"></usage>

```jsx
import { Home, User, Settings2 } from 'lucide-react'
import NavigationBar from '@/packages/components/NavigationBar'
import NavigationTab from '@/packages/components/NavigationBar/NavigationTab'

export default () => {
  return (
    <NavigationBar>
      <NavigationTab label="Home" inactiveIcon={<Home />} activeIcon={<Home />} />
      <NavigationTab label="User" showBadge={true} badgeValue={999} inactiveIcon={<User />} activeIcon={<User />} />
      <NavigationTab label="Setting" inactiveIcon={<Settings2 />} activeIcon={<Settings2 />} />
    </NavigationBar>
  )
}
```
