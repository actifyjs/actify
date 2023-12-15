'use client'
import { createContext } from 'react'

type MenuContextProps = {
  isOpen: boolean
  activeIndex: number | null
  getItemProps: (index: number) => any
  setActiveIndex: (index: number | null) => void
  setHasFocusInside: (hasFocus: boolean) => void
}

const MenuContext = createContext<MenuContextProps>({
  isOpen: false,
  activeIndex: null,
  getItemProps: () => {},
  setActiveIndex: () => {},
  setHasFocusInside: () => {}
})

export { MenuContext }
