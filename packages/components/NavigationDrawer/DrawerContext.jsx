import React from 'react'
import { createStore, useStore } from 'zustand'

const DrawerContext = React.createContext()

export const DrawerProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    open: initialProp.value.open || false,
    placement: initialProp.value.placement || 'left',
    setPlacement: (state) => set({ placement: state }),
    setOpen: (state) => set({ open: state })
  }))

  const store = React.useRef(useCreateStore)

  return (
    <DrawerContext.Provider value={store.current}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => {
  const store = React.useContext(DrawerContext)
  if (!store) {
    throw new Error('Msissing DrawerContext.Provider in the tree')
  }
  return useStore(store)
}
