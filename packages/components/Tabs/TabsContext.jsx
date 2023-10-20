import React, { createContext, useId, useRef, useContext } from 'react'
import { createStore, useStore } from 'zustand'

const TabsContext = createContext()

export const TabsProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    layoutId: useId(),
    active: initialProp.value,
    onChange: initialProp.onChange,
    setActive: (state) => set({ active: state })
  }))

  const store = useRef(useCreateStore)

  return (
    <TabsContext.Provider value={store.current}>
      {children}
    </TabsContext.Provider>
  )
}

export const useTabs = () => {
  const store = useContext(TabsContext)
  if (!store) {
    throw new Error('Missing TabsContext.Provider in the tree')
  }
  return useStore(store)
}
