import { createStore, useStore } from 'zustand'
import React, { createContext, useRef, useContext } from 'react'

const SideSheetsContext = createContext()

export const SideSheetsProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    open: initialProp.open,
    onChange: initialProp.onChange,
    setOpen: (state) => set({ open: state })
  }))

  const store = useRef(useCreateStore)

  return (
    <SideSheetsContext.Provider value={store.current}>
      {children}
    </SideSheetsContext.Provider>
  )
}

export const useSideSheets = () => {
  const store = useContext(SideSheetsContext)
  if (!store) {
    throw new Error('Missing SideSheetsContext.Provider in the tree')
  }
  return useStore(store)
}
