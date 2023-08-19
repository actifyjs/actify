import React from 'react'

const defaultValue = {
  top: 64,
  left: 180,
  drawer: false
}

const AppContext = React.createContext(defaultValue)

export function useApp() {
  return React.useContext(AppContext)
}

export function AppProvider({ children }) {
  const [app, setApp] = React.useState(defaultValue)
  const setDrawer = (drawer) => {
    if (drawer) {
      setApp({ ...defaultValue, left: defaultValue.left, drawer })
    } else {
      setApp({ ...defaultValue, left: 16, drawer })
    }
  }
  return <AppContext.Provider value={{ app, setApp, setDrawer }}>{children}</AppContext.Provider>
}
