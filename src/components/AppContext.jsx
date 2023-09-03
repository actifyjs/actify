import React from 'react'
import { createStore, useStore } from 'zustand'

const defaultValue = {
  top: 64,
  left: 240,
  drawer: false
}

const AppContext = React.createContext()

export const AppProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    top: initialProp.value || defaultValue.top,
    left: initialProp.value || defaultValue.left,
    drawer: initialProp.value || defaultValue.drawer,
    setTop: (state) => set({ top: state }),
    setLeft: (state) => set({ left: state }),
    setDrawer: (state) => set({ drawer: state })
  }))

  const store = React.useRef(useCreateStore).current

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const store = React.useContext(AppContext)
  if (!store) {
    throw new Error('Missing AppContext.Provider in the tree')
  }
  return useStore(store)
}
