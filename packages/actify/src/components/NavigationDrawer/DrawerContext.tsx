'use client'

import React, { createContext, useContext } from 'react'

import { useControllableState } from './../../hooks/useControllableState'

type Placement = 'left' | 'right' | 'top' | 'bottom'

interface DrawerProps {
  open?: boolean
  placement?: Placement
  defaultOpen?: boolean
  setOpen?: (open: boolean) => void
}

const DrawerContext = createContext<DrawerProps | undefined>(undefined)

export interface DrawerProviderProps
  extends React.PropsWithChildren<DrawerProps> {}

export const DrawerProvider = ({ children, ...props }: DrawerProviderProps) => {
  const { open, placement, defaultOpen, setOpen } = props

  const [value, setValue] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: setOpen
  })

  return (
    <DrawerContext.Provider
      value={{ placement, open: value, setOpen: setValue }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export function useDrawer() {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('Drawer components must be wrapped in <Drawer />')
  }
  return context
}
