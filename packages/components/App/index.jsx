import { forwardRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { AppProvider } from './AppContext'

const App = forwardRef((props, ref) => {
  const { style, className, children, ...rest } = props

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

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
          '--md-sys-color-secondary-container': 'rgb(var(--color-secondary-container))',
          '--md-sys-color-on-secondary-container': '#fff',
          ...style
        }}
        className={twMerge('w-full min-w-[360px] bg-surface text-on-surface', className)}
      >
        {children}
      </div>
    </AppProvider>
  )
})

App.displayName = 'Actify.App'

export default App
