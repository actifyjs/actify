import React, { forwardRef } from 'react'
import { useDialogContext } from './DialogContext'
import {
  useMergeRefs,
  FloatingPortal,
  FloatingOverlay,
  useTransitionStyles,
  FloatingFocusManager
} from '@floating-ui/react'
import { tv } from 'tailwind-variants'
import themes from '../../themes/index'
const { scrim } = themes()

const variants = tv({
  base: 'relative overflow-x-hidden m-6 p-2 bg-surface rounded-lg'
})

const DialogContent = forwardRef((props, propRef) => {
  const { context: floatingContext, ...context } = useDialogContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])
  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 250,
    initial: {
      opacity: 0,
      transform: 'translateY(-50px) scale(0)'
    },
    open: () => ({
      opacity: 1,
      transform: 'translateY(0) scale(1)'
    }),
    close: () => ({
      opacity: 0,
      transform: 'translateY(-50px) scale(0)'
    })
  })
  if (!isMounted) return null

  return (
    <FloatingPortal>
      <FloatingOverlay
        lockScroll
        className={scrim({ className: 'grid place-items-center' })}
      >
        {isMounted && (
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              style={{ ...styles }}
              aria-labelledby={context.labelId}
              {...context.getFloatingProps(props)}
              aria-describedby={context.descriptionId}
              className={variants({ className: props.className })}
            >
              {props.children}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingOverlay>
    </FloatingPortal>
  )
})

export { DialogContent }
