import React from 'react'
import { AppProvider } from './AppContext'

const App = (props) => {
  const { style, className, children, ...rest } = props

  return (
    <AppProvider>
      <div
        id="actify"
        {...rest}
        style={style}
        className="w-full bg-surface text-on-surface"
      >
        {children}
      </div>
    </AppProvider>
  )
}

export default App
