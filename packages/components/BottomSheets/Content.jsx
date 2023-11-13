import { tv } from 'tailwind-variants'
import { createPortal } from 'react-dom'
import React, { forwardRef } from 'react'
import { useBottomSheets } from './Context'

const rootVariants = tv({
  base: 'fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out transition-opacity opacity-0 duration-500 pointer-events-none',
  variants: {
    open: {
      true: 'opacity-100 pointer-events-auto'
    }
  }
})

const innerVariants = tv({
  base: 'absolute flex flex-col bg-transparent left-10 right-10 bottom-0 translate-y-full transition-transform ease-in-out',
  variants: {
    open: {
      true: 'translate-y-0'
    }
  }
})

const Content = forwardRef(({ style, className, children, ...rest }, ref) => {
  const { open, setOpen } = useBottomSheets()

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
            <div className="inline-flex h-9 w-full cursor-grab flex-col items-center justify-start gap-3 p-4 bg-surface rounded-t-[100px]">
              <div className="h-1 w-8 bg-outline/40 rounded-[100px]"></div>
            </div>
            <div className="flex-1 max-h-[calc(100vh-72px)] overflow-y-auto">
              <p className="bg-surface p-2">{children}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
})

export { Content }
