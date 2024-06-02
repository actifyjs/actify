'use client'

import {
  changeColor,
  getCurrentSeedColor,
  getCurrentThemeString
} from '@/utils/theme'
import { useEffect, useState } from 'react'

import { Button } from 'actify'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

export default () => {
  const [seedColor, setSeedColor] = useState('')
  const [cssString, setCssString] = useState('')
  const exportColors = () => {
    const blob = new Blob([cssString], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'actify-color-theme.css'
    link.click()
    URL.revokeObjectURL(url)
  }

  useEffect(() => {
    const currentSeedColor = getCurrentSeedColor()
    setSeedColor(currentSeedColor ?? '')
    const colorString = getCurrentThemeString()
    setCssString(colorString ?? '')
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: color } = e.target
    setSeedColor(color)
    changeColor(color)
    const colorString = getCurrentThemeString()
    setCssString(colorString ?? '')
  }

  return (
    <>
      <h2>Color scheme</h2>
      <>
        {/* Primary */}
        <div className="h-28 flex w-full justify-evenly my-2">
          <div className="rounded-tl-2xl bg-primary text-on-primary flex-1">
            <div className="w-full h-full grid place-content-center">
              Primary
            </div>
          </div>
          <div className="bg-on-primary flex-1">
            <div className="w-full h-full grid place-content-center text-primary">
              On Primary
            </div>
          </div>
          <div className="bg-primary-container flex-1">
            <div className="w-full h-full grid place-content-center">
              Primary Container
            </div>
          </div>
          <div className="rounded-tr-2xl bg-on-primary-container flex-1">
            <div className="w-full h-full grid place-content-center text-on-primary">
              On Primary Container
            </div>
          </div>
        </div>
        {/* Secondary */}
        <div className="h-16 flex w-full justify-evenly my-2">
          <div className="bg-secondary text-on-secondary flex-1">
            <div className="w-full h-full grid place-content-center">
              Secondary
            </div>
          </div>
          <div className="bg-on-secondary flex-1">
            <div className="w-full h-full grid place-content-center text-secondary">
              On Secondary
            </div>
          </div>
          <div className="bg-secondary-container flex-1">
            <div className="w-full h-full grid place-content-center">
              Secondary Container
            </div>
          </div>
          <div className="bg-on-secondary-container flex-1">
            <div className="w-full h-full grid place-content-center text-on-secondary">
              On Secondary Container
            </div>
          </div>
        </div>
        {/* Tertiary */}
        <div className="h-16 flex w-full justify-evenly my-2">
          <div className="bg-tertiary text-on-tertiary flex-1">
            <div className="w-full h-full grid place-content-center">
              Tertiary
            </div>
          </div>
          <div className="bg-on-tertiary flex-1">
            <div className="w-full h-full grid place-content-center text-tertiary">
              On Tertiary
            </div>
          </div>
          <div className="bg-tertiary-container flex-1">
            <div className="w-full h-full grid place-content-center">
              Tertiary Container
            </div>
          </div>
          <div className="bg-on-tertiary-container flex-1">
            <div className="w-full h-full grid place-content-center text-on-tertiary">
              On Tertiary Container
            </div>
          </div>
        </div>
        {/* Error */}
        <div className="h-16 flex w-full justify-evenly my-2">
          <div className="bg-error text-on-error flex-1">
            <div className="w-full h-full grid place-content-center">Error</div>
          </div>
          <div className="bg-on-error flex-1">
            <div className="w-full h-full grid place-content-center text-error">
              On Error
            </div>
          </div>
          <div className="bg-error-container flex-1">
            <div className="w-full h-full grid place-content-center">
              Error Container
            </div>
          </div>
          <div className="bg-on-error-container flex-1">
            <div className="w-full h-full grid place-content-center text-on-error">
              On Error Container
            </div>
          </div>
        </div>
        {/* Backgroun And Surface */}
        <div className="h-16 flex w-full justify-evenly my-2">
          <div className="bg-background flex-1">
            <div className="w-full h-full grid place-content-center">
              Background
            </div>
          </div>
          <div className="bg-on-background flex-1">
            <div className="w-full h-full grid place-content-center text-background">
              On Background
            </div>
          </div>
          <div className="bg-surface flex-1">
            <div className="w-full h-full grid place-content-center">
              Surface
            </div>
          </div>
          <div className="bg-on-surface flex-1">
            <div className="w-full h-full grid place-content-center text-surface">
              On Surface
            </div>
          </div>
        </div>
        <div className="h-16 flex w-full justify-evenly my-2">
          <div className="bg-inverse-surface flex-1">
            <div className="w-full h-full grid place-content-center text-inverse-on-surface">
              Inverse Surface
            </div>
          </div>
          <div className="bg-inverse-primary flex-1">
            <div className="w-full h-full grid place-content-center text-on-primary">
              Inverse Primary
            </div>
          </div>
          <div className="bg-scrim flex-1">
            <div className="w-full h-full grid place-content-center text-on-primary">
              Srim
            </div>
          </div>
          <div className="bg-shadow flex-1">
            <div className="w-full h-full grid place-content-center text-on-primary">
              Shadow
            </div>
          </div>
        </div>
        {/* Outline And Surface */}
        <div className="h-16 flex w-full justify-evenly my-2">
          <div className="rounded-bl-2xl bg-outline flex-1">
            <div className="w-full h-full grid place-content-center text-surface">
              Outline
            </div>
          </div>
          <div className="bg-outline-variant flex-1">
            <div className="w-full h-full grid place-content-center text-surface">
              Outline Variant
            </div>
          </div>
          <div className="bg-surface-variant flex-1">
            <div className="w-full h-full grid place-content-center">
              Surface-Variant
            </div>
          </div>
          <div className="rounded-br-2xl bg-on-surface-variant flex-1">
            <div className="w-full h-full grid place-content-center text-surface-variant">
              On Surface-Variant
            </div>
          </div>
        </div>
      </>
      <div className="flex items-center gap-4">
        <div className="mt-2 space-y-4">
          <label className="flex items-center gap-2">
            <div className="text-lg">Choose Primary Color</div>
            <input
              type="color"
              value={seedColor}
              onChange={handleChange}
              className="interactive-bg-surface h-9 w-24 cursor-pointer rounded-md px-1 py-0.5 shadow"
            />
          </label>
        </div>
        <Button onClick={exportColors}>Export Colors</Button>
      </div>
      <SyntaxHighlighter lang="css">{cssString}</SyntaxHighlighter>
    </>
  )
}
