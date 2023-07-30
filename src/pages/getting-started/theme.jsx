import { useEffect, useState } from 'react'
import Code from '@/packages/components/Code'
import Button from '@/packages/components/Button'
import All from '../examples/all'
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
  '--color-inverse-surface',
  '--color-on-inverse-surface',
  '--color-outline',
  '--color-inverse-primary'
]

export default () => {
  const [cssString, setCssString] = useState('')
  const [primaryColor, setPrimaryColor] = useState('')

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
    let colors = ':root{\n'
    for (let i = 0; i < colorVaribles.length; i++) {
      colors += `${colorVaribles[i]}: ${body.getPropertyValue(colorVaribles[i])};\n`
    }
    colors += '}'
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
    <div className="space-y-4">
      <p className="text-xl">Color palette</p>
      <div className="grid grid-cols-2 gap-4 rounded-lg border border-outline/20 bg-tertiary-container bg-opacity-30 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {colorVaribles.map((item, index) => (
          <div
            key={index}
            className={`grid h-10 place-content-center rounded-lg bg-${item.slice(8)} ${
              /^on-/.test(item.slice(8)) ? 'text-' + item.slice(11) : 'text-on-' + item.slice(8)
            }`}
          >
            {item.slice(8)}
          </div>
        ))}
        <div className="grid h-10 place-content-center rounded-lg bg-black text-white">black</div>
        <div className="grid h-10 place-content-center rounded-lg bg-white text-black">white</div>
        <div className="grid h-10 place-content-center rounded-lg text-outline">transparent</div>
        <div className="grid h-10 place-content-center rounded-lg text-on-tertiary-container">current</div>
      </div>
      <p className="text-xl">Try dynamic color</p>
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
      <p className="text-xl">Components live</p>
      <All />
      <article className="prose">
        <h4>How to use?</h4>
        <p>Change the primary color, if the color you like, click export colors button</p>
        <p>Copy the css code and paste in your project main css file</p>
        <h4>Here is a live css code</h4>
        <Code language="css">{cssString}</Code>
      </article>
    </div>
  )
}
