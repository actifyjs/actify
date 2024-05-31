'use client'

import Aside from '@/components/Aside'
import EditOnGitHub from '@/components/EditOnGitHub'
import { tv } from 'tailwind-variants'
import { usePathname } from 'next/navigation'

const base = tv({
  base: [
    'flex',
    'flex-col',
    'bg-surface',
    'text-on-surface',
    'pl-0',
    'md:pl-60',
    'col-end-3',
    'col-start-1'
  ]
})

export default function DocLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <Aside />
      <main className={base()}>
        <div className="p-4 lg:pr-64 flex flex-col overflow-hidden">
          {children}
        </div>
        <div className="w-fit pl-2 pb-2">
          <EditOnGitHub pathname={pathname} />
        </div>
      </main>
    </>
  )
}
