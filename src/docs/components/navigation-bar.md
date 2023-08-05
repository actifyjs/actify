---
title: Navigation bar
---

# Navigation bar

## Navigation bars let people switch between UI views on smaller devices

# Usage

<usage name="navigation-bar"></usage>

```jsx
import { Icon, NavigationBar, NavigationTab } from 'actify'

export default () => {
  return (
    <NavigationBar>
      <NavigationTab label="Home" inactiveIcon="Home" activeIcon="Home" />
      <NavigationTab label="User" showBadge={true} badgeValue={999} inactiveIcon="User" activeIcon="User" />
      <NavigationTab label="Setting" inactiveIcon="Setting2" activeIcon="Setting2" />
    </NavigationBar>
  )
}
```
