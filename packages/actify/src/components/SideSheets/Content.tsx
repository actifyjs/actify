'use client'
import { tv } from 'tailwind-variants'
import { createPortal } from 'react-dom'
import React, { forwardRef } from 'react'
import { useSideSheets } from './Context'
import themes from '../../themes'

const { scrim } = themes()

const rootVariants = tv({
  base: scrim({
    className:
      'fixed overflow-hidden inset-0 transform ease-in-out transition-opacity opacity-0 duration-500 pointer-events-none'
  }),
  variants: {
    open: {
      true: 'opacity-100 pointer-events-auto'
    }
  }
})

const innerVariants = tv({
  base: 'absolute h-screen max-w-xs w-full bg-surface rounded-l-2xl overflow-hidden top-0 right-0 translate-x-full transition-transform ease-in-out',
  variants: {
    open: {
      true: 'translate-x-0'
    }
  }
})

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean
}

const Content = forwardRef<HTMLDivElement, ContentProps>((props, ref) => {
  const { style, className, divider, children, ...rest } = props

  const open = useSideSheets((_) => _.open)
  const setOpen = useSideSheets((_) => _.setOpen)

  return (
    <>
      {createPortal(
        <div
          ref={ref}
          {...rest}
          style={style}
          onClick={() => setOpen(false)}
          className={rootVariants({ className, open })}
        >
          <div
            className={innerVariants({ open })}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  )
})

export { Content }
