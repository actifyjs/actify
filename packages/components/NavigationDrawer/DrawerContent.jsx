import React from 'react'
import { createPortal } from 'react-dom'
import { tv } from 'tailwind-variants'
import { useDrawer } from './DrawerContext'

const variants = tv({
  base: 'fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ',
  variants: {
    open: {
      true: 'transition-opacity opacity-100 duration-500',
      false: 'transition-all delay-500 opacity-0'
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
  base: 'absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform',
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

const contentVariants = tv({
  base: 'relative w-screen flex flex-col overflow-y-scroll h-full',
  variants: {
    placement: {}
  },
  compoundVariants: [
    {
      placement: ['left', 'right'],
      className: 'max-w-xs'
    }
  ]
})

const DrawerContent = ({ className, children }) => {
  const { open, placement, setOpen } = useDrawer()

  return (
    <>
      {createPortal(
        <nav className={variants({ open, placement })}>
          <section className={sectionVariants({ open, placement, className })}>
            <article className={contentVariants({ placement })}>
              {children}
            </article>
          </section>
          <section
            onClick={() => setOpen(false)}
            className="w-screen h-full cursor-pointer"
          ></section>
        </nav>,
        document.body
      )}
    </>
  )
}

export { DrawerContent }
