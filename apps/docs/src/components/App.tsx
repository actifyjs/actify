import React from 'react'

const App: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div
      id="actify"
      style={{
        gridTemplateColumns: `minmax(0,240px) 1fr`
      }}
      className="min-h-screen bg-surface grid grid-rows-[64px_auto_56px]"
    >
      {children}
    </div>
  )
}

export default App
