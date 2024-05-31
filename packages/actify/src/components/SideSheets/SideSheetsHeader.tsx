'use client'

import { Icon } from './../Icon'
import { IconButton } from './../Button/IconButton'
import React from 'react'
import { tv } from 'tailwind-variants'
import { useSideSheets } from './SideSheetsContext'

const variants = tv({
  base: 'flex-grow text-[22px] text-inverse'
})

const Header = ({ className, children }: React.ComponentProps<'div'>) => {
  const { setOpen } = useSideSheets()

  return (
    <div className="pl-6 pr-3 pt-3 pb-4 flex items-center">
      <div className={variants({ className })}>{children}</div>
      <IconButton onClick={() => setOpen?.(false)}>
        <Icon>close</Icon>
      </IconButton>
    </div>
  )
}

export { Header }
