import { Settings, Palette } from 'lucide-react'
import { SideSheets, Button, IconButton, version } from 'actify'
// @ts-expect-error
import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm'

const SettingTheme = () => {
  const randomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    updateTheme(
      {
        primary: color
      },
      'class'
    )
  }

  const handleClick = (color: string) => {
    updateTheme(
      {
        primary: color
      },
      'class'
    )
  }

  return (
    <SideSheets>
      <SideSheets.Activator>
        <IconButton color="primary">
          <Settings />
        </IconButton>
      </SideSheets.Activator>
      <SideSheets.Content>
        <SideSheets.Header>Settings</SideSheets.Header>
        <SideSheets.Body className="px-4 gap-2">
          <p className="font-semibold text-xl">primary color</p>
          <ul className="grid grid-cols-2">
            {[
              {
                bg: 'bg-stone-500',
                value: '#78716c'
              },
              {
                bg: 'bg-red-500',
                value: '#ef4444'
              },
              {
                bg: 'bg-orange-500',
                value: '#f97316'
              },
              {
                bg: 'bg-amber-500',
                value: '#f59e0b'
              },
              {
                bg: 'bg-yellow-500',
                value: '#eab308'
              },
              {
                bg: 'bg-lime-500',
                value: '#84cc16'
              },
              {
                bg: 'bg-green-500',
                value: '#22c55e'
              },
              {
                bg: 'bg-emerald-500',
                value: '#10b981'
              },
              {
                bg: 'bg-teal-500',
                value: '#14b8a6'
              },
              {
                bg: 'bg-cyan-500',
                value: '#06b6d4'
              },
              {
                bg: 'bg-sky-500',
                value: '#0ea5e9'
              },
              {
                bg: 'bg-blue-500',
                value: '#3b82f6'
              },
              {
                bg: 'bg-indigo-500',
                value: '#6366f1'
              },
              {
                bg: 'bg-violet-500',
                value: '#8b5cf6'
              },
              {
                bg: 'bg-purple-500',
                value: '#a855f7'
              },
              {
                bg: 'bg-fuchsia-500',
                value: '#d946ef'
              },
              {
                bg: 'bg-pink-500',
                value: '#ec4899'
              },
              {
                bg: 'bg-rose-500',
                value: '#f43f5e'
              }
            ].map(({ bg, value }, index) => (
              <li
                key={index}
                onClick={() => handleClick(value)}
                className={`w-full cursor-pointer p-4 text-white ${bg}`}
              >
                {bg.split('-')[1]}
              </li>
            ))}
          </ul>
          <Button onClick={randomColor}>
            <Palette />
            random color
          </Button>
          <p className="font-semibold text-xl">current version</p>
          <a
            target="_blank"
            className=""
            href="https://www.npmjs.com/package/actify"
          >
            {version}
          </a>
        </SideSheets.Body>
      </SideSheets.Content>
    </SideSheets>
  )
}

export default SettingTheme
