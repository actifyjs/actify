import { twMerge } from 'tailwind-merge'
import { Sun, Moon } from 'lucide-react'
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
      <div className="grid place-content-center rounded-md p-2 hover:bg-on-surface hover:bg-opacity-5">
        {mode == 'dark' ? <Sun /> : <Moon />}
      </div>
    </div>
  )
})

export default SwitchTheme
