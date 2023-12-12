'use client'
import { createStore, useStore } from 'zustand'
import React, { createContext, useRef, useContext } from 'react'

interface DrawerProps {
  open?: boolean
  placement?: 'left' | 'right' | 'top' | 'bottom'
}

interface DrawerState extends DrawerProps {
  setOpen: (open: boolean) => void
}

type DrawerStore = ReturnType<typeof createDrawerStore>

const DrawerContext = createContext<DrawerStore | null>(null)

export interface DrawerProviderProps
  extends React.PropsWithChildren<DrawerProps> {}

export const DrawerProvider = ({ children, ...props }: DrawerProviderProps) => {
  const storeRef = useRef<DrawerStore>()
  if (!storeRef.current) {
    storeRef.current = createDrawerStore(props)
  }

  return (
    <DrawerContext.Provider value={storeRef.current}>
      {children}
    </DrawerContext.Provider>
  )
}

const createDrawerStore = (initialProp?: Partial<DrawerProps>) => {
  const DEFAULT_PROPS: DrawerProps = {
    open: false,
    placement: 'left'
  }
  return createStore<DrawerState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initialProp,
    setOpen: (state) => set({ open: state }),
    setPlacement: (state: DrawerProps['placement']) => set({ placement: state })
  }))
}

export function useDrawer<T>(selector: (state: DrawerState) => T): T {
  const store = useContext(DrawerContext)
  if (!store) {
    throw new Error('Msissing DrawerContext.Provider in the tree')
  }
  return useStore(store, selector)
}
