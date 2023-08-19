import React from 'react'
import { createStore, useStore } from 'zustand'

const TabsContext = React.createContext()

export const TabsProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    active: initialProp.value,
    setActive: (state) => set({ active: state })
  }))

  const store = React.useRef(useCreateStore)

  return <TabsContext.Provider value={store.current}>{children}</TabsContext.Provider>
}

export const useTabs = () => {
  const store = React.useContext(TabsContext)
  if (!store) {
    throw new Error('Missing TabsContext.Provider in the tree')
  }
  return useStore(store)
}
