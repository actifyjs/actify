import React from 'react'
import { createStore, useStore } from 'zustand'

export const defaultValue = {
  top: 64,
  drawer: false,
  drawerWidth: 200
}

const AppContext = React.createContext()

export const AppProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    top: initialProp.value || defaultValue.top,
    drawer: initialProp.value || defaultValue.drawer,
    drawerWidth: initialProp.value || defaultValue.drawerWidth,
    setTop: (state) => set({ top: state }),
    setDrawer: (state) => set({ drawer: state }),
    setDrawerWidth: (state) => set({ drawerWidth: state })
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
