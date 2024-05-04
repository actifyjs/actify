'use client'

import React from 'react'
import { tv } from 'tailwind-variants'
import { ExternalLink } from 'lucide-react'

const variants = tv({
  base: [
    'fixed',
    'z-50',
    'w-full',
    'bottom-0',
    'col-start-1',
    'col-end-3',
    'bg-surface',
    'shadow-inner',
    'bg-surface'
  ]
})

const Footer = ({ className }: React.ComponentProps<'footer'>) => {
  return (
    <footer className={variants({ className })}>
      <div className="mx-auto w-full max-w-screen-xl py-1 md:py-4 px-4 md:flex md:items-center md:justify-between">
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
            <ExternalLink size={20} />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
