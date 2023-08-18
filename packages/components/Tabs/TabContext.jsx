import { createStore, useStore } from 'zustand'
import { createContext, useContext, useRef } from 'react'

const TabsContext = createContext()

export const TabsProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    active: initialProp.value,
    setActive: (state) => set({ active: state })
  }))

  const store = useRef(useCreateStore)

  return <TabsContext.Provider value={store.current}>{children}</TabsContext.Provider>
}

export const useTabs = () => {
  const store = useContext(TabsContext)
  if (!store) {
    throw new Error('Missing TabsContext.Provider in the tree')
  }
  return useStore(store)
}
