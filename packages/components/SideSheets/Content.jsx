import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { createPortal } from 'react-dom'
import React, { forwardRef, Children } from 'react'
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
  base: 'absolute h-screen max-w-xs bg-surface dark:bg-inverse-surface rounded-l-2xl overflow-hidden top-0 right-0 translate-x-full transition-transform ease-in-out',
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
  ({ style, className, divider, children, ...rest }, ref) => {
    const { open, setOpen } = useSideSheets()

    const header = Children.map(children, (child) =>
      child?.type?.name === 'Header' ? child : null
    )
    const body = Children.map(children, (child) =>
      child?.type?.name === 'Body' ? child : null
    )
    const action = Children.map(children, (child) =>
      child?.type?.name === 'Action' ? child : null
    )

    const hasHeader = header?.length > 0
    const hasBody = body?.length > 0
    const hasAction = action?.length > 0

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
                <p className="flex-grow text-[22px] text-[#49454f]">
                  {hasHeader && header}
                </p>
                <IconButton onClick={() => setOpen(false)}>
                  <Icon name="x" />
                </IconButton>
              </div>
              <div className="h-[calc(100vh-36px)] flex flex-col overflow-hidden">
                <p className="grow p-2">{hasBody && body}</p>
                {/* divider */}
                {divider && <Divider />}
                {/* bottom actions */}
                {hasAction && (
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
