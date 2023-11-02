import { createStore, useStore } from 'zustand'
import React, { createContext, useRef, useContext } from 'react'

const BottomSheetsContext = createContext()

export const BottomSheetsProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    open: initialProp.open,
    onChange: initialProp.onChange,
    setOpen: (state) => set({ open: state })
  }))

  const store = useRef(useCreateStore)

  return (
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
  return useStore(store)
}
