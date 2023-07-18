import { useEffect, useState } from 'react'
import Code from '@/packages/components/Code'
import Button from '@/packages/components/Button'
import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm'

const codeBlock = `
:root {
  --color-primary: 156 65 60;
  --color-primary-container: 255 218 214;
  --color-on-primary: 255 255 255;
  --color-on-primary-container: 65 0 3;
  --color-secondary: 119 86 83;
  --color-secondary-container: 255 218 214;
  --color-on-secondary: 255 255 255;
  --color-on-secondary-container: 44 21 19;
  --color-tertiary: 114 91 46;
  --color-tertiary-container: 254 222 166;
  --color-on-tertiary: 255 255 255;
  --color-on-tertiary-container: 38 25 0;
  --color-error: 186 26 26;
  --color-error-container: 255 218 214;
  --color-on-error: 255 255 255;
  --color-on-error-container: 65 0 2;
  --color-outline: 133 115 113;
  --color-background: 255 251 255;
  --color-on-background: 32 26 25;
  --color-surface: 255 251 255;
  --color-on-surface: 32 26 25;
  --color-surface-variant: 245 221 219;
  --color-on-surface-variant: 83 67 66;
  --color-inverse-surface: 54 47 46;
  --color-inverse-primary: 255 179 173;
  --color-outline-variant: 216 194 191;
}
`

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
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [primaryColor])

  const getColors = () => {
    const body = getComputedStyle(document.body)
    const colorVaribles = [
      '--color-primary',
      '--color-primary-container',
      '--color-on-primary',
      '--color-on-primary-container',
      '--color-secondary',
      '--color-secondary-container',
      '--color-on-secondary',
      '--color-on-secondary-container',
      '--color-tertiary',
      '--color-tertiary-container',
      '--color-on-tertiary',
      '--color-on-tertiary-container',
      '--color-error',
      '--color-error-container',
      '--color-on-error',
      '--color-on-error-container',
      '--color-outline',
      '--color-background',
      '--color-on-background',
      '--color-surface',
      '--color-on-surface',
      '--color-surface-variant',
      '--color-on-surface-variant',
      '--color-inverse-surface',
      '--color-inverse-primary',
      '--color-outline-variant'
    ]
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
      <details className="rounded-lg border border-outline/20 bg-tertiary-container bg-opacity-30 px-4 py-2" open>
        <summary className="cursor-pointer text-lg font-medium">Color palette</summary>
        <div className="my-2 flex flex-wrap whitespace-nowrap">
          <div className="w-1/4 bg-primary px-2 py-1 text-on-primary">primary</div>
          <div className="w-1/4 bg-on-primary px-2 py-1 text-primary">on-primary</div>
          <div className="w-1/4 bg-primary-container px-2 py-1 text-on-primary-container">primary-container</div>
          <div className="w-1/4 bg-on-primary-container px-2 py-1 text-primary-container">on-primary-container</div>
        </div>
        <div className="mb-2 flex flex-wrap whitespace-nowrap">
          <div className="w-1/4 bg-secondary px-2 py-1 text-on-secondary">secondary</div>
          <div className="w-1/4 bg-on-secondary px-2 py-1 text-secondary">on-secondary</div>
          <div className="w-1/4 bg-secondary-container px-2 py-1 text-on-secondary-container">secondary-container</div>
          <div className="w-1/4 bg-on-secondary-container px-2 py-1 text-secondary-container">
            on-secondary-container
          </div>
        </div>
        <div className="mb-2 flex flex-wrap whitespace-nowrap">
          <div className="w-1/4 bg-tertiary px-2 py-1 text-on-tertiary">tertiary</div>
          <div className="w-1/4 bg-on-tertiary px-2 py-1 text-tertiary">on-tertiary</div>
          <div className="w-1/4 bg-tertiary-container px-2 py-1 text-on-tertiary-container">tertiary-container</div>
          <div className="w-1/4 bg-on-tertiary-container px-2 py-1 text-tertiary-container">on-tertiary-container</div>
        </div>
        <div className="mb-2 flex flex-wrap whitespace-nowrap">
          <div className="w-1/4 bg-error px-2 py-1 text-on-error">error</div>
          <div className="w-1/4 bg-on-error px-2 py-1 text-error">on-error</div>
          <div className="w-1/4 bg-error-container px-2 py-1 text-on-error-container">error-container</div>
          <div className="w-1/4 bg-on-error-container px-2 py-1 text-error-container">on-error-container</div>
        </div>
        <div className="mb-2 flex flex-wrap whitespace-nowrap">
          <div className="w-1/4 bg-background px-2 py-1 text-on-background">background</div>
          <div className="w-1/4 bg-on-background px-2 py-1 text-background">on-background</div>
          <div className="w-1/4 bg-surface px-2 py-1 text-on-surface">surface</div>
          <div className="w-1/4 bg-on-surface px-2 py-1 text-surface">on-surface</div>
        </div>
        <div className="mb-2 flex flex-wrap whitespace-nowrap">
          <div className="w-1/4 bg-surface-variant px-2 py-1 text-on-surface-variant">surface-variant</div>
          <div className="w-1/4 bg-on-surface-variant px-2 py-1 text-surface-variant">on-surface-variant</div>
          <div className="w-1/4 bg-inverse-surface px-2 py-1 text-on-inverse-surface">inverse-surface</div>
          <div className="w-1/4 bg-on-inverse-surface px-2 py-1 text-inverse-surface">on-inverse-surface</div>
        </div>
        <div className="mb-2 flex flex-wrap whitespace-nowrap">
          <div className="w-1/4 bg-outline px-2 py-1 text-on-surface">outline</div>
          <div className="w-1/4 bg-inverse-primary px-2 py-1 text-on-surface">inverse-primary</div>
          <div className="w-1/4 bg-black px-2 py-1 text-white">black</div>
          <div className="w-1/4 bg-white px-2 py-1 text-black">white</div>
        </div>
        <div className="mb-2 flex flex-wrap whitespace-nowrap">
          <div className="transparent w-1/4 px-2 py-1 text-outline">transparent</div>
          <div className="current w-1/4 px-2 py-1 text-on-tertiary-container">current</div>
        </div>
      </details>
      <details className="mb-8 rounded-lg border border-outline/20 bg-tertiary-container bg-opacity-30 px-4 py-2" open>
        <summary className="cursor-pointer text-lg font-medium">Try dynamic color</summary>
        <div className="mt-2 space-y-4">
          <label className="flex items-center gap-2">
            <div className="text-lg">Primary:</div>
            <input
              type="color"
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="interactive-bg-surface h-9 w-24 cursor-pointer rounded-md px-1 py-0.5 shadow"
            />
          </label>
          <div className="flex items-center gap-2">
            <label className="contents">
              <div className="text-lg font-bold">Secondary:</div>
            </label>
            <button className="interactive-bg-surface rounded-md px-4 py-2 font-medium shadow">Choose</button>
          </div>
          <div className="flex items-center gap-2">
            <label className="contents">
              <div className="text-lg font-bold">Tertiary:</div>
            </label>
            <button className="interactive-bg-surface rounded-md px-4 py-2 font-medium shadow">Choose</button>
          </div>
        </div>
      </details>
      <Button onClick={exportColors}>Export Colors</Button>
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
