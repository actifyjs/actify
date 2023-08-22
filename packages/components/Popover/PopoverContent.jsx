import React from 'react'
import { useMergeRefs, FloatingPortal, FloatingOverlay, FloatingFocusManager } from '@floating-ui/react'
import { usePopoverContext } from './PopoverContext'

const PopoverContent = React.forwardRef(({ style, ...props }, propRef) => {
  const { context: floatingContext, ...context } = usePopoverContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!floatingContext.open) return null

  return (
    <FloatingPortal>
      <FloatingOverlay
        lockScroll
        className="z-[99] grid place-items-center bg-black/40 dark:bg-[rgba(3,3,3,.8)] backdrop-blur-sm"
      >
        <FloatingFocusManager context={floatingContext} modal={context.modal}>
          <div
            ref={ref}
            aria-labelledby={context.labelId}
            {...context.getFloatingProps(props)}
            aria-describedby={context.descriptionId}
            style={{ ...context.floatingStyles, ...style }}
            className="relative bg-white p-2 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  )
})

export default PopoverContent
