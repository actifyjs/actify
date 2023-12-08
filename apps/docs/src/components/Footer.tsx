import React from 'react'
import { ExternalLink } from 'lucide-react'
import { useAppStore } from '@/store/appStore'
import { useShallow } from 'zustand/react/shallow'

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  const { drawer } = useAppStore(
    useShallow((state) => ({
      drawer: state.drawer
    }))
  )

  return (
    <footer
      className={`shadow-inner row-start-3 row-end-4 ${
        drawer ? 'col-start-2' : 'col-start-1'
      } col-end-4`}
    >
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
