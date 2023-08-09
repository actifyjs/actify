import { useState, useContext, createContext } from 'react'

const defaultValue = {
  top: 64,
  left: 180,
  drawer: false
}

const AppContext = createContext(defaultValue)

export function useApp() {
  return useContext(AppContext)
}

export function AppProvider({ children }) {
  const [app, setApp] = useState(defaultValue)
  const setDrawer = (drawer) => {
    if (drawer) {
      setApp({ ...defaultValue, left: defaultValue.left, drawer })
    } else {
      setApp({ ...defaultValue, left: 16, drawer })
    }
  }
  return <AppContext.Provider value={{ app, setApp, setDrawer }}>{children}</AppContext.Provider>
}
