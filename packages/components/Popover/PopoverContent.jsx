import React, { forwardRef } from 'react'
import { usePopoverContext } from './PopoverContext'
import {
  useMergeRefs,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager
} from '@floating-ui/react'
import { tv } from 'tailwind-variants'
import themes from '../../themes/index'
const { scrim } = themes()

const variants = tv({
  base: 'relative overflow-x-hidden p-2 bg-surface rounded-lg focus-visible:outline-none'
})

const PopoverContent = forwardRef(({ style, ...props }, propRef) => {
  const { context: floatingContext, ...context } = usePopoverContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!floatingContext.open) return null

  return (
    <FloatingPortal>
      <FloatingOverlay
        lockScroll
        className={scrim({ className: 'grid place-items-center' })}
      >
        <FloatingFocusManager context={floatingContext} modal={context.modal}>
          <div
            ref={ref}
            aria-labelledby={context.labelId}
            {...context.getFloatingProps(props)}
            aria-describedby={context.descriptionId}
            style={{ ...context.floatingStyles, ...style }}
            className={variants({ className: props.className })}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  )
})

export { PopoverContent }
