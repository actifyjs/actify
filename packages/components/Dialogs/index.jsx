import React from 'react'

import {
  useId,
  useRole,
  useClick,
  useDismiss,
  useFloating,
  useMergeRefs,
  FloatingPortal,
  useInteractions,
  FloatingOverlay,
  useTransitionStyles,
  FloatingFocusManager
} from '@floating-ui/react'

export function useDialog({ initialOpen = false, open: controlledOpen, onOpenChange: setControlledOpen }) {
  const [labelId, setLabelId] = React.useState()
  const [descriptionId, setDescriptionId] = React.useState()
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    open,
    onOpenChange: setOpen
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null
  })
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' })
  const role = useRole(context, { role: 'dialog' })

  const interactions = useInteractions([click, dismiss, role])

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId
    }),
    [open, setOpen, interactions, data, labelId, descriptionId]
  )
}

const DialogContext = React.createContext(null)

export const useDialogContext = () => {
  const context = React.useContext(DialogContext)
  if (context == null) {
    throw new Error('Dialog components must be wrapped in <Dialog />')
  }
  return context
}

export function Dialog({ children, ...options }) {
  const dialog = useDialog(options)
  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
}

export const DialogActivator = React.forwardRef(({ children, asChild = false, ...props }, propRef) => {
  const context = useDialogContext()
  const childrenRef = children.ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed'
      })
    )
  }

  return (
    <div ref={ref} data-state={context.open ? 'open' : 'closed'} {...context.getReferenceProps(props)}>
      {children}
    </div>
  )
})

export const DialogContent = React.forwardRef((props, propRef) => {
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
              className="relative bg-white dark:bg-[rgb(33,33,33)] text-black dark:text-white rounded-lg font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]"
            >
              {props.children}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingOverlay>
    </FloatingPortal>
  )
})

export const DialogHeading = React.forwardRef(({ children, ...props }, ref) => {
  const { setLabelId } = useDialogContext()
  const id = useId()

  // Only sets `aria-labelledby` on the Dialog root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <div
      {...props}
      ref={ref}
      id={id}
      className="w-full p-4 flex items-center justify-between text-2xl font-semibold leading-snug"
    >
      {children}
    </div>
  )
})

export const DialogDescription = React.forwardRef(({ children, ...props }, ref) => {
  const { setDescriptionId } = useDialogContext()
  const id = useId()

  // Only sets `aria-describedby` on the Dialog root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <div
      id={id}
      ref={ref}
      {...props}
      className="relative p-4 text-base leading-relaxed border-t border-t-black/10 dark:border-t-white/10 border-b border-b-black/10 dark:border-b-white/10"
    >
      {children}
    </div>
  )
})

export const DialogClose = React.forwardRef((props, ref) => {
  const { setOpen } = useDialogContext()
  return <div {...props} ref={ref} onClick={() => setOpen(false)} />
})
