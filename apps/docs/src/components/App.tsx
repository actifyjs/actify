import React from 'react'

const App: React.FC<React.ComponentProps<'div'>> = ({ children }) => {
  return (
    <div
      id="actify"
      className="min-h-screen grid grid-rows-[64px_1fr_56px] grid-cols-[0_1fr] md:grid-cols-[240px_1fr] transition-all"
    >
      {children}
    </div>
  )
}

export default App
