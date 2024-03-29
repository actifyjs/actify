import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Button, Spacer, IconButton } from 'actify'
import { Gamepad2 } from 'lucide-react'
import Logo from '@/components/Logo'
import AppDrawer from '@/components/AppDrawer'
import Search from '@/components/Search'
import Dropdown from '@/components/Dropdown'
import SwitchTheme from '@/components/SwitchTheme'
import SettingTheme from '@/components/SettingTheme'

const Header: React.FC<React.ComponentProps<'header'>> = () => {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-30 h-16 col-start-1 col-end-3 bg-surface/25 px-2 shadow backdrop-blur">
      <div className="mx-auto flex h-full flex-wrap items-center justify-between">
        <Link to="/" className="hidden md:flex items-center text-primary" tabIndex={-1}>
          <Button variant="text" className='self-center whitespace-nowrap text-2xl font-semibold'>
            <Logo height={36} />ctify
          </Button>
        </Link>
        {pathname != '/' && (
          <div className="inline-flex md:hidden">
            <AppDrawer />
          </div>
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
        <IconButton href="https://x.com/actifyjs" target="_blank">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
            <path
              className="fill-current"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </IconButton>
        <SwitchTheme />
        <SettingTheme />
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
              <Link to="/playground" tabIndex={-1}>
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
