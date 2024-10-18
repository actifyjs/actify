'use client'

import { Button, Icon, IconButton, Spacer } from 'actify'

import AppDrawer from '@/components/AppDrawer'
import Dropdown from '@/components/Dropdown'
import Logo from '@/components/Logo'
import NavLink from '@/components/NavLink'
import React from 'react'
import Search from '@/components/Search'
import { ThemeChanger } from './ThemeChanger'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-16 col-start-1 bg-surface-container px-2 shadow backdrop-blur">
      <div className="mx-auto flex h-full flex-wrap items-center justify-between">
        <NavLink
          href="/"
          tabIndex={-1}
          className="hidden md:flex items-center text-primary"
        >
          <Button
            variant="text"
            className="self-center whitespace-nowrap text-2xl font-semibold"
          >
            <Logo height={36} />
            ctify
          </Button>
        </NavLink>
        <div className="inline-flex md:hidden">
          <AppDrawer />
        </div>
        <Search
          indexName="actify"
          appId="QT1V8AWXWR"
          apiKey="aea069649b0718ada66d001637c44dbf"
        />
        <Spacer />
        <NavLink href="/" className="flex md:hidden items-center text-primary">
          <Logo height={24} />
          <span className="self-center whitespace-nowrap font-semibold">
            ctify
          </span>
        </NavLink>
        <Spacer />
        <a
          tabIndex={-1}
          target="_blank"
          title="twitter"
          href="https://x.com/actifyjs"
        >
          <IconButton>
            <Icon>
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </Icon>
          </IconButton>
        </a>
        <a
          tabIndex={-1}
          target="_blank"
          title="actify github"
          href="https://github.com/actifyjs/actify"
        >
          <IconButton>
            <Icon>
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </Icon>
          </IconButton>
        </a>
        <ThemeChanger />
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-row gap-2 font-medium">
            <li>
              <Dropdown
                title="Learn"
                items={[
                  {
                    text: 'Get Started',
                    href: '/getting-started/installation'
                  }
                ]}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
