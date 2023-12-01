'use client'
import { createStore, useStore } from 'zustand'
import React, { createContext, useRef, useContext } from 'react'

const BottomSheetsContext = createContext({
  open: false,
  onChange: () => {}
})

export const BottomSheetsProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    open: initialProp.open,
    onChange: initialProp.onChange,
    setOpen: (state: boolean) => set({ open: state })
  }))

  const store = useRef(useCreateStore)

  return (
    // @ts-ignore
    <BottomSheetsContext.Provider value={store.current}>
      {children}
    </BottomSheetsContext.Provider>
  )
}

export const useBottomSheets = () => {
  const store = useContext(BottomSheetsContext)
  if (!store) {
    throw new Error('Missing BottomSheetsContext.Provider in the tree')
  }
  // @ts-ignore
  return useStore(store)
}
