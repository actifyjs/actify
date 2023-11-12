import React from 'react'
import { createPortal } from 'react-dom'
import { tv } from 'tailwind-variants'
import { useDrawer } from './DrawerContext'

const variants = tv({
  base: 'fixed overflow-hidden z-50 inset-0 ease-in-out transition-all duration-500',
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
      open: false,
      placement: 'left',
      className: '-translate-x-full'
    },
    {
      open: false,
      placement: 'right',
      className: 'translate-x-full'
    },
    {
      open: true,
      placement: ['top', 'bottom'],
      className: 'translate-y-0'
    },
    {
      open: false,
      placement: 'top',
      className: 'translate-y-full'
    },
    {
      open: false,
      placement: 'bottom',
      className: '-translate-y-full'
    }
  ]
})

const sectionVariants = tv({
  base: 'absolute z-20 bg-white shadow-xl duration-500 ease-in-out transition-all transform',
  variants: {
    open: {},
    placement: {
      left: 'left-0',
      right: 'right-0',
      top: 'top-0',
      bottom: 'bottom-0'
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
      open: true,
      placement: ['left', 'right'],
      className: 'translate-x-0'
    },
    {
      open: false,
      placement: 'left',
      className: '-translate-x-full'
    },
    {
      open: false,
      placement: 'right',
      className: 'translate-x-full'
    },
    {
      open: true,
      placement: ['top', 'bottom'],
      className: 'translate-y-0'
    },
    {
      open: false,
      placement: 'top',
      className: '-translate-y-full'
    },
    {
      open: false,
      placement: 'bottom',
      className: 'translate-y-full'
    }
  ]
})
const scrimVariants = tv({
  base: 'w-screen h-screen opacity-25 bg-gray-900 bg-opacity-25 z-0 isolate transition-opacity delay-500',
  variants: {
    open: {
      true: 'opacity-100',
      false: 'opacity-0'
    }
  }
})

const DrawerContent = ({ className, children }) => {
  const { open, placement, setOpen } = useDrawer()

  return (
    <>
      {createPortal(
        <nav className={variants({ open, placement })}>
          <div className={sectionVariants({ open, placement, className })}>
            {children}
          </div>
          <div
            onClick={() => setOpen(false)}
            className={scrimVariants({ open })}
          ></div>
        </nav>,
        document.body
      )}
    </>
  )
}

export { DrawerContent }
