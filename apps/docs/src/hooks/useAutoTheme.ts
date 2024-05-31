import {
  changeColor,
  getCurrentMode,
  getCurrentSeedColor
} from '../utils/theme'

import React from 'react'

const useAutoTheme = () => {
  React.useEffect(() => {
    if (typeof window.matchMedia !== 'function') return

    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    const isLight = window.matchMedia('(prefers-color-scheme: light)')

    if (typeof isLight.addEventListener === 'function') {
      const handleChange = () => {
        const mode = getCurrentMode()
        const color = getCurrentSeedColor()
        if (mode == 'system') {
          changeColor(color!)
        }
      }
      isDark.addEventListener('change', handleChange)
      isLight.addEventListener('change', handleChange)
      return () => {
        isDark.removeEventListener('change', handleChange)
        isLight.removeEventListener('change', handleChange)
      }
    }
  }, [])
}

export { useAutoTheme }
