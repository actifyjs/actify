import { Link } from 'react-router-dom'
import { useApp } from './AppContext'
import { useLocation } from 'react-router-dom'
import { Icon, Button, Spacer, IconButton } from 'actify'
import Logo from '@/src/components/Logo'
import Dropdown from '@/src/components/Dropdown'
import SwitchTheme from '@/src/components/SwitchTheme'
import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm'

const Header = () => {
  const { pathname } = useLocation()
  const { top, drawer, setDrawer } = useApp()

  const randomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const handleUpdateTheme = () => {
    updateTheme(
      {
        // set a new primary color (and optionally any other colors in your theme)
        primary: randomColor()
      },
      // second argument is your chosen dark mode strategy (usually 'media' or 'class')
      'class'
    )
  }

  return (
    <header
      style={{ height: top }}
      className="sticky top-0 z-30 h-16 bg-surface/25 px-2 shadow backdrop-blur"
    >
      <div className="mx-auto flex h-full flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center text-primary">
          <Logo height={36} />
          <span className="hidden self-center whitespace-nowrap text-2xl font-semibold md:inline">
            ctify
          </span>
        </Link>
        {pathname != '/' && (
          <IconButton
            className="inline-flex md:hidden"
            onClick={() => setDrawer(!drawer)}
          >
            <Icon name="menu" color="primary" />
          </IconButton>
        )}
        <Spacer />
        <Link to="/playground" className="block md:hidden">
          <IconButton>
            <Icon name="gamepad-2" color="primary" />
          </IconButton>
        </Link>
        <IconButton onClick={handleUpdateTheme}>
          <Icon name="palette" color="primary" />
        </IconButton>
        <SwitchTheme />
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-row gap-2 font-medium">
            <li>
              <Dropdown
                title="Learn"
                items={[
                  {
                    headline: 'Get Started',
                    to: '/getting-started/installation'
                  },
                  {
                    headline: 'Examples',
                    to: '/examples'
                  }
                ]}
              />
            </li>
            <li>
              <Dropdown
                title="Support"
                items={[
                  {
                    headline: 'GitHub',
                    target: '_blank',
                    to: 'https://github.com/actifyjs/actify'
                  }
                ]}
              />
            </li>
            <li>
              <Link to="/playground">
                <Button variant="text">Playground</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
