'use client'
import { createStore, useStore } from 'zustand'
import React, { createContext, useRef, useContext } from 'react'

const SideSheetsContext = createContext({
  setOpen: () => {},
  open: false,
  divider: false,
  onChange: () => {}
})

export const SideSheetsProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    divider: initialProp.divider ?? false,
    open: initialProp.open,
    onChange: initialProp.onChange,
    setOpen: (state) => set({ open: state })
  }))

  const store = useRef(useCreateStore)

  return (
    // @ts-ignore
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
  // @ts-ignore
  return useStore(store)
}
