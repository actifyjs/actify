import React from 'react'
import { version } from 'actify'
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

interface AppProps extends React.ComponentProps<'div'> {}

export default function App({ children }: AppProps) {
  return (
    <div id="actify" data-version={version} className={base()}>
      {children}
    </div>
  )
}
