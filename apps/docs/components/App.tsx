import React from 'react'
import { tv } from 'tailwind-variants'

const base = tv({
  base: [
    'grid',
    'grid-cols-1',
    'antialiased',
    'min-h-screen',
    'grid-rows-[64px_1fr_56px]'
  ]
})

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div id="actify" className={base()}>
      {children}
    </div>
  )
}
