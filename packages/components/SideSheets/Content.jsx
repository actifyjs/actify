import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { createPortal } from 'react-dom'
import React, { forwardRef } from 'react'
import { useSideSheets } from './Context'

const rootVariants = tv({
  base: 'fixed overflow-hidden z-50 bg-black/40 dark:bg-[rgba(3,3,3,.8)] inset-0 transform ease-in-out transition-opacity opacity-0 duration-500 pointer-events-none',
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

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, ContentPropTypes>
 */
const Content = forwardRef((props, ref) => {
  const { style, className, divider, children, ...rest } = props
  const { open, setOpen } = useSideSheets()

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

const ContentPropTypes = {
  divider: PropTypes.bool,
  action: PropTypes.node,
  children: PropTypes.node
}

Content.propTypes = ContentPropTypes

export { Content }
