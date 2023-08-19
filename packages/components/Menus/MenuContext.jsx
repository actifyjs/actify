import React from 'react'

const MenuContext = React.createContext({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false
})

export default MenuContext
