import React from 'react'
import { twMerge } from 'tailwind-merge'
import { AppProvider } from './AppContext'

const App = React.forwardRef((props, ref) => {
  const { style, className, children, ...rest } = props

  return (
    <AppProvider>
      <div
        id="actify"
        ref={ref}
        {...rest}
        style={{
          '--md-sys-color-primary': 'rgb(var(--color-primary))',
          '--md-sys-color-surface': 'rgb(var(--color-surface))',
          '--md-sys-color-on-surface': 'rgb(var(--color-on-surface))',
          '--md-sys-color-secondary-container':
            'rgb(var(--color-secondary-container))',
          '--md-sys-color-on-secondary-container': '#fff',
          ...style
        }}
        className={twMerge('w-full bg-surface text-on-surface', className)}
      >
        {children}
      </div>
    </AppProvider>
  )
})

export default App
