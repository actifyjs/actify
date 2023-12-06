import { IconButton } from 'actify'
import { Sun, MoonStar } from 'lucide-react'
import { useEffect, useState } from 'react'

const SwitchTheme = () => {
  const [mode, setMode] = useState('') // dark mode

  const initTheme = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode('dark')
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      setMode('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.removeAttribute('data-theme')
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
      document.documentElement.removeAttribute('data-theme')
    } else {
      setMode('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  const toggleTheme = (event) => {
    const isAppearanceTransition =
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      toggleMode()
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )
    const transition = document.startViewTransition(() => {
      toggleMode()
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      document.documentElement.animate(
        {
          clipPath: mode == 'dark' ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 500,
          easing: 'ease-out',
          pseudoElement:
            mode == 'dark'
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)'
        }
      )
    })
  }

  return (
    <IconButton onClick={toggleTheme} color="primary">
      {mode == 'dark' ? <Sun /> : <MoonStar />}
    </IconButton>
  )
}

export default SwitchTheme
