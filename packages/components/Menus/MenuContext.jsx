import { createContext } from 'react'

const MenuContext = createContext({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false
})

export { MenuContext }
