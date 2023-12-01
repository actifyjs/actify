import { Button } from 'actify'
import All from '../examples/all'
import { useEffect, useState } from 'react'
import ThemePreview from 'src/components/ThemePreview'
import SyntaxHighlighter from 'src/components/SyntaxHighlighter'
import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm'

const colorVaribles = [
  '--color-primary',
  '--color-on-primary',
  '--color-primary-container',
  '--color-on-primary-container',
  '--color-secondary',
  '--color-on-secondary',
  '--color-secondary-container',
  '--color-on-secondary-container',
  '--color-tertiary',
  '--color-on-tertiary',
  '--color-tertiary-container',
  '--color-on-tertiary-container',
  '--color-error',
  '--color-on-error',
  '--color-error-container',
  '--color-on-error-container',
  '--color-background',
  '--color-on-background',
  '--color-surface',
  '--color-on-surface',
  '--color-surface-variant',
  '--color-on-surface-variant',
  '--color-outline',
  '--color-outline-variant',
  '--color-inverse-surface',
  '--color-inverse-primary',
  '--color-on-inverse-surface',
  '--color-primary-hover',
  '--color-primary-press',
  '--color-primary-focus',
  '--color-primary-drag',
  '--color-primary-container-hover',
  '--color-primary-container-press',
  '--color-primary-container-focus',
  '--color-primary-container-drag',
  '--color-secondary-hover',
  '--color-secondary-press',
  '--color-secondary-focus',
  '--color-secondary-drag',
  '--color-secondary-container-hover',
  '--color-secondary-container-press',
  '--color-secondary-container-focus',
  '--color-secondary-container-drag',
  '--color-tertiary-hover',
  '--color-tertiary-press',
  '--color-tertiary-focus',
  '--color-tertiary-drag',
  '--color-tertiary-container-hover',
  '--color-tertiary-container-press',
  '--color-tertiary-container-focus',
  '--color-tertiary-container-drag',
  '--color-error-hover',
  '--color-error-press',
  '--color-error-focus',
  '--color-error-drag',
  '--color-error-container-hover',
  '--color-error-container-press',
  '--color-error-container-focus',
  '--color-error-container-drag',
  '--color-background-hover',
  '--color-background-press',
  '--color-background-focus',
  '--color-background-drag',
  '--color-surface-hover',
  '--color-surface-press',
  '--color-surface-focus',
  '--color-surface-drag',
  '--color-surface-variant-hover',
  '--color-surface-variant-press',
  '--color-surface-variant-focus',
  '--color-surface-variant-drag',
  '--color-inverse-surface-hover',
  '--color-inverse-surface-press',
  '--color-inverse-surface-focus',
  '--color-inverse-surface-drag'
]

export default () => {
  const [cssString, setCssString] = useState('')
  const [primaryColor, setPrimaryColor] = useState('')

  useEffect(() => {
    document.title = 'Theme | Actify'
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (primaryColor) {
        updateTheme(
          {
            primary: primaryColor
          },
          'class'
        )
      }
      getColors()
    }, 10)
    return () => {
      clearTimeout(timer)
    }
  }, [primaryColor])

  const getColors = () => {
    const body = getComputedStyle(document.body)
    let colors = '@layer base {\n\t:root {\n'
    for (let i = 0; i < colorVaribles.length; i++) {
      colors += `\t\t${colorVaribles[i]}: ${body.getPropertyValue(
        colorVaribles[i]
      )};\n`
    }
    colors += '\t}\n}'
    setCssString(colors)
  }

  const exportColors = () => {
    const blob = new Blob([cssString], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'actify-color-theme.css'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <article className="prose text-sm sm:text-base md:text-lg mb-4 max-w-full dark:prose-invert prose-pre:p-0 [&_pre]:!mb-0">
      <h2>Color scheme</h2>
      <ThemePreview />
      <h2>Try dynamic color</h2>
      <div className="flex items-center gap-4">
        <div className="mt-2 space-y-4">
          <label className="flex items-center gap-2">
            <div className="text-lg">Primary:</div>
            <input
              type="color"
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="interactive-bg-surface h-9 w-24 cursor-pointer rounded-md px-1 py-0.5 shadow"
            />
          </label>
        </div>
        <Button onClick={exportColors}>Export Colors</Button>
      </div>
      <h2>Components live</h2>
      <All />

      <h2>How to use?</h2>
      <ul>
        <li>
          Change the primary color, if the color you like, click export colors
          button
        </li>
        <li>
          Go to your project main css file, add the following code or exported
          file content to the end of the file
        </li>
      </ul>
      <h2>Here is a live css code</h2>
      <SyntaxHighlighter language="css">{cssString}</SyntaxHighlighter>
    </article>
  )
}
