import React from 'react'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAppStore } from '@/store/appStore'
import { useShallow } from 'zustand/react/shallow'
import { Button, Spacer, IconButton } from 'actify'
import { Gamepad2, Palette } from 'lucide-react'
import Logo from '@/components/Logo'
import Search from '@/components/Search'
import Dropdown from '@/components/Dropdown'
import SwitchTheme from '@/components/SwitchTheme'
import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm'

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  const { pathname } = useLocation()
  const { top, drawer, setDrawer } = useAppStore(
    useShallow((state) => ({
      top: state.top,
      drawer: state.drawer,
      setDrawer: state.setDrawer
    }))
  )

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
      className="sticky top-0 z-30 h-16 row-start-1 row-end-2 col-start-1 col-end-4 bg-surface/25 px-2 shadow backdrop-blur"
    >
      <div className="mx-auto flex h-full flex-wrap items-center justify-between">
        <Link to="/" className="hidden md:flex items-center text-primary">
          <Logo height={36} />
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            ctify
          </span>
        </Link>
        {pathname != '/' && (
          <IconButton
            color="primary"
            className="inline-flex md:hidden"
            onClick={() => setDrawer(!drawer)}
          >
            <Menu />
          </IconButton>
        )}
        <Search
          indexName="actify"
          appId="QT1V8AWXWR"
          apiKey="aea069649b0718ada66d001637c44dbf"
        />
        <Spacer />
        <Link to="/" className="flex md:hidden items-center text-primary">
          <Logo height={24} />
          <span className="self-center whitespace-nowrap font-semibold">
            ctify
          </span>
        </Link>
        <Spacer />
        <Link to="/playground" className="block md:hidden">
          <IconButton color="primary">
            <Gamepad2 />
          </IconButton>
        </Link>
        <IconButton onClick={handleUpdateTheme} color="primary">
          <Palette />
        </IconButton>
        <SwitchTheme />
        <IconButton href="https://x.com/actifyjs" target="_blank">
          <svg viewBox="0 0 24 24" aria-hidden="true" width={24} height={24}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </IconButton>
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
                  },
                  {
                    headline: 'Actify Admin',
                    to: '/admin/login'
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
