'use client'

import React from 'react'
import { createPortal } from 'react-dom'
import { tv } from 'tailwind-variants'
import { useDrawer } from './DrawerContext'
import themes from '../../themes/index'

const { scrim } = themes()

const variants = tv({
  base: scrim({
    className:
      'fixed overflow-hidden inset-0 ease-in-out transition-opacity duration-500 pointer-events-none'
  }),
  variants: {
    open: {
      true: 'opacity-100 pointer-events-auto',
      false: 'opacity-0'
    }
  },
  compoundVariants: [
    {
      open: true,
      placement: ['left', 'right'],
      className: 'translate-x-0'
    },
    {
      open: true,
      placement: ['top', 'bottom'],
      className: 'translate-y-0'
    }
  ]
})

const sectionVariants = tv({
  base: 'absolute overflow-y-auto bg-surface shadow-xl duration-500 ease-in-out transition-all',
  variants: {
    open: {},
    placement: {
      left: 'left-0 rounded-r-2xl',
      right: 'right-0 rounded-l-2xl',
      top: 'top-0 rounded-b-2xl',
      bottom: 'bottom-0 rounded-t-2xl'
    }
  },
  compoundVariants: [
    {
      placement: ['top', 'bottom'],
      className: 'h-screen max-h-[320px] w-full'
    },
    {
      placement: ['left', 'right'],
      className: 'w-screen max-w-xs h-full'
    },
    {
      // @ts-ignore
      open: true,
      placement: ['left', 'right'],
      className: 'translate-x-0'
    },
    {
      // @ts-ignore
      open: false,
      placement: 'left',
      className: '-translate-x-full'
    },
    {
      // @ts-ignore
      open: false,
      placement: 'right',
      className: 'translate-x-full'
    },
    {
      // @ts-ignore
      open: true,
      placement: ['top', 'bottom'],
      className: 'translate-y-0'
    },
    {
      // @ts-ignore
      open: false,
      placement: 'top',
      className: '-translate-y-full'
    },
    {
      // @ts-ignore
      open: false,
      placement: 'bottom',
      className: 'translate-y-full'
    }
  ]
})

const DrawerContent = ({ className, children }) => {
  // @ts-ignore
  const { open, placement, setOpen } = useDrawer()

  return (
    <>
      {createPortal(
        // @ts-ignore
        <nav className={variants({ open, placement })}>
          {/* @ts-ignore */}
          <div className={sectionVariants({ open, placement, className })}>
            {children}
          </div>
          {/* scrim */}
          <div
            onClick={() => setOpen(false)}
            className="w-screen h-screen"
          ></div>
        </nav>,
        document.body
      )}
    </>
  )
}

export { DrawerContent }
