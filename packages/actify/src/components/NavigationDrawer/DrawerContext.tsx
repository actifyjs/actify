'use client'
import React, { createContext, useRef, useContext } from 'react'
import { createStore, useStore } from 'zustand'

const DrawerContext = createContext({
  open: false,
  placement: 'left',
  setOpen: () => {}
})

export const DrawerProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    open: initialProp.value.open || false,
    placement: initialProp.value.placement || 'left',
    setPlacement: (state) => set({ placement: state }),
    setOpen: (state) => set({ open: state })
  }))

  const store = useRef(useCreateStore)

  return (
    // @ts-ignore
    <DrawerContext.Provider value={store.current}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => {
  const store = useContext(DrawerContext)
  if (!store) {
    throw new Error('Msissing DrawerContext.Provider in the tree')
  }
  // @ts-ignore
  return useStore(store)
}
