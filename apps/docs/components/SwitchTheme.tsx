'use client'
import { useEffect } from 'react'
import { IconButton } from 'actify'
import { useTheme } from 'next-themes'
import { Sun, MoonStar } from 'lucide-react'
import { useMounted } from '@/hooks/use-mounted'

const SwitchTheme = () => {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ?? 'system')
  }, [theme])

  const toggleMode = () => {
    if (theme == 'dark') {
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  const toggleTheme = () => {
    const isAppearanceTransition =
      // @ts-expect-error experimental API
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      toggleMode()
      return
    }
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      toggleMode()
    })
    transition.ready.then(() => {
      const clipPath = [
        'polygon(-30% 0, -30% 0, -15% 100%, -10% 115%)',
        'polygon(-30% 0, 130% 0, 115% 100%, -10% 115%)'
      ]
      document.documentElement.animate(
        {
          clipPath: theme == 'dark' ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 500,
          easing: 'ease-out',
          pseudoElement:
            theme == 'dark'
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)'
        }
      )
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <IconButton onClick={toggleTheme} color="primary">
      {theme == 'dark' ? <Sun /> : <MoonStar />}
    </IconButton>
  )
}

export default SwitchTheme
