'use client'

import { Icon } from 'actify'
import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: [
    'fixed',
    'w-full',
    'bottom-0',
    'col-start-1',
    'col-end-3',
    'bg-surface',
    'shadow-inner',
    'bg-surface-container'
  ]
})

const Footer = ({ className }: React.ComponentProps<'footer'>) => {
  return (
    <footer className={variants({ className })}>
      <div className="text-on-surface mx-auto w-full max-w-screen-xl py-1 md:py-4 px-4 md:flex md:items-center md:justify-between">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} Actify
        </p>
        <p className="text-center">
          Released under the{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex gap-1"
            href="https://opensource.org/licenses/MIT"
          >
            MIT License
            <Icon>
              <svg
                width="20"
                height="20"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Icon>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
