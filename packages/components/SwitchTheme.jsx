import { twMerge } from 'tailwind-merge'
import { Sun, Moon } from 'lucide-react'
import { forwardRef, useState } from 'react'

const SwitchTheme = forwardRef((props, ref) => {
  const { className, ...rest } = props
  const [mode, setMode] = useState('') // dark mode

  const toggleTheme = () => {
    const classList = document.querySelector('html').classList
    const _mode = classList.contains('dark') ? 'dark' : ''
    setMode(_mode)
    classList.toggle('dark')
    if (_mode == 'dark') {
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
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
