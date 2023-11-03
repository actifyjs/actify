import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { createPortal } from 'react-dom'
import React, { forwardRef } from 'react'
import { useSideSheets } from './Context'
import { Divider, IconButton, Icon } from 'actify'

const rootVariants = tv({
  base: 'fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out transition-opacity opacity-0 duration-500 pointer-events-none',
  variants: {
    open: {
      true: 'opacity-100 pointer-events-auto'
    }
  }
})

const innerVariants = tv({
  base: 'absolute h-screen max-w-xs bg-surface dark:bg-inverse-surface rounded-2xl overflow-hidden top-0 right-0 translate-x-full transition-transform ease-in-out',
  variants: {
    open: {
      true: 'translate-x-0'
    }
  }
})

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, ContentPropTypes>
 */
const Content = forwardRef(
  ({ style, className, divider, action, children, ...rest }, ref) => {
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
              {/* top title */}
              <div className="pl-6 pr-3 pt-3 pb-4 flex">
                <p className="flex-grow text-[22px] text-[#49454f]">Title</p>
                <IconButton onClick={() => setOpen(false)}>
                  <Icon name="x" />
                </IconButton>
              </div>
              <div className="h-[calc(100vh-36px)] flex flex-col overflow-hidden">
                <p className="grow p-2">{children}</p>
                {/* divider */}
                {divider && <Divider />}
                {/* bottom actions */}
                {action && (
                  <div className="pl-6 pb-6 pt-4 w-full h-24 flex gap-2">
                    {action}
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    )
  }
)

const ContentPropTypes = {
  divider: PropTypes.bool,
  action: PropTypes.node,
  children: PropTypes.node
}

Content.propTypes = ContentPropTypes

export { Content }
