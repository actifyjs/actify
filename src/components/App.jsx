import React from 'react'
import { AppProvider } from './AppContext'

const App = ({ children }) => {
  return (
    <AppProvider>
      <div id="actify" className="w-full bg-surface text-on-surface">
        {children}
      </div>
    </AppProvider>
  )
}

export default App
