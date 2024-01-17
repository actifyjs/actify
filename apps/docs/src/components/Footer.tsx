import React from 'react'
import { ExternalLink } from 'lucide-react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: '*:shadow-inner col-start-2 col-end-3'
})

const Footer: React.FC<React.ComponentProps<'footer'>> = ({ className }) => {
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
