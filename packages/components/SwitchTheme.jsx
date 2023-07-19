import { twMerge } from 'tailwind-merge'
import { Sun, Moon } from 'lucide-react'
import { forwardRef, useEffect, useState } from 'react'

const SwitchTheme = forwardRef((props, ref) => {
  const { className, ...rest } = props
  const [mode, setMode] = useState('') // dark mode

  const initTheme = () => {
    const classList = document.querySelector('html').classList
    const dark = classList.contains('dark')
    if (dark) {
      setMode('dark')
      document.documentElement.setAttribute('data-color-mode', 'dark')
    } else {
      setMode('light')
      document.documentElement.setAttribute('data-color-mode', 'light')
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
      document.documentElement.setAttribute('data-color-mode', 'light')
    } else {
      setMode('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute('data-color-mode', 'dark')
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
