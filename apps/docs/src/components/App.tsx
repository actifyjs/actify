import React from 'react'
import packageInfo from 'actify/package.json'

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="actify"
      data-version={packageInfo.version}
      className="grid grid-cols-1 antialiased min-h-screen grid-rows-[64px_1fr_56px]"
    >
      {children}
    </div>
  )
}
