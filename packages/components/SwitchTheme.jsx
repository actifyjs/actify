import { twMerge } from 'tailwind-merge'
import { Icon, IconButton } from '@/packages/components'
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

  const toggleMode = () => {
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

  const toggleTheme = (event) => {
    const isAppearanceTransition =
      document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      toggleMode()
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const transition = document.startViewTransition(() => {
      toggleMode()
    })
    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      document.documentElement.animate(
        {
          clipPath: mode == 'dark' ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 500,
          easing: 'ease-out',
          pseudoElement: mode == 'dark' ? '::view-transition-old(root)' : '::view-transition-new(root)'
        }
      )
    })
  }

  return (
    <div ref={ref} {...rest} onClick={toggleTheme} className={twMerge('cursor-pointer overflow-hidden', className)}>
      <div className="grid place-content-center">
        {mode == 'dark' ? (
          <IconButton>
            <Icon name="Sun" color="primary" />
          </IconButton>
        ) : (
          <IconButton>
            <Icon name="Moon" color="primary" />
          </IconButton>
        )}
      </div>
    </div>
  )
})

export default SwitchTheme
