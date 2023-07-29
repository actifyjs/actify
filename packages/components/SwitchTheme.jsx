import { twMerge } from 'tailwind-merge'
import { Sun, Moon } from 'lucide-react'
import IconButton from '@/packages/components/Button/IconButton'
import { forwardRef, useEffect, useState } from 'react'

const SwitchTheme = forwardRef((props, ref) => {
  const { className, ...rest } = props
  const [mode, setMode] = useState('') // dark mode

  const initTheme = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode('dark')
      document.documentElement.classList.add('dark')
    } else {
      setMode('light')
      document.documentElement.classList.remove('dark')
    }
  }
  useEffect(() => {
    initTheme()
  }, [])

  const toggleTheme = () => {
    const classList = document.querySelector('html').classList
    classList.toggle('dark')
    if (mode == 'dark') {
      setMode('light')
      localStorage.setItem('theme', 'light')
    } else {
      setMode('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <div ref={ref} {...rest} onClick={toggleTheme} className={twMerge('cursor-pointer overflow-hidden', className)}>
      <div className="grid place-content-center">
        {mode == 'dark' ? (
          <IconButton>
            <Sun className="text-primary" />
          </IconButton>
        ) : (
          <IconButton>
            <Moon className="text-primary" />
          </IconButton>
        )}
      </div>
    </div>
  )
})

export default SwitchTheme
