'use client'
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
import themes from '../../themes'
const { scrim } = themes()

const variants = tv({
  base: 'relative overflow-x-hidden m-6 p-2 bg-surface rounded-lg'
})

export interface DialogContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (props, propRef) => {
    // @ts-ignore
    const { context: floatingContext, ...context } = useDialogContext()
    // @ts-ignore
    const ref = useMergeRefs([context.refs.setFloating, propRef])
    // @ts-ignore
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
                // @ts-ignore
                aria-labelledby={context.labelId}
                // @ts-ignore
                {...context.getFloatingProps(props)}
                // @ts-ignore
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
  }
)

export { DialogContent }
