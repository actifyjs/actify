'use client'
import React from 'react'
import { X } from 'lucide-react'
import { tv } from 'tailwind-variants'
import { IconButton } from '@actify/Button/IconButton'
import { useSideSheets } from './Context'

const variants = tv({
  base: 'flex-grow text-[22px] text-inverse'
})

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children
}) => {
  // @ts-ignore
  const { setOpen } = useSideSheets()

  return (
    <div className="pl-6 pr-3 pt-3 pb-4 flex items-center">
      <div className={variants({ className })}>{children}</div>
      <IconButton onClick={() => setOpen(false)}>
        <X />
      </IconButton>
    </div>
  )
}

export { Header }
