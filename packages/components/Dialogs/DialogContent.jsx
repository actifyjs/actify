import React from 'react'
import { useDialogContext } from './DialogContext'
import {
  useMergeRefs,
  FloatingPortal,
  FloatingOverlay,
  useTransitionStyles,
  FloatingFocusManager
} from '@floating-ui/react'

const DialogContent = React.forwardRef((props, propRef) => {
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
        className="z-[99] grid place-items-center bg-black/40 dark:bg-[rgba(3,3,3,.8)] backdrop-blur-sm"
      >
        {isMounted && (
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              style={{ ...styles }}
              aria-labelledby={context.labelId}
              {...context.getFloatingProps(props)}
              aria-describedby={context.descriptionId}
              className="relative p-2 bg-white dark:bg-[rgb(33,33,33)] text-black dark:text-white rounded-lg max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            >
              {props.children}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingOverlay>
    </FloatingPortal>
  )
})

export default DialogContent
