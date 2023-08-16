import {
  useState,
  useMemo,
  forwardRef,
  useContext,
  createContext,
  isValidElement,
  cloneElement,
  useLayoutEffect
} from 'react'

import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useId
} from '@floating-ui/react'
import { Elevation } from 'actify'

export function useDialog({ initialOpen = false, open: controlledOpen, onOpenChange: setControlledOpen }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)
  const [labelId, setLabelId] = useState()
  const [descriptionId, setDescriptionId] = useState()

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
  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  return useMemo(
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

const DialogContext = createContext(null)

export const useDialogContext = () => {
  const context = useContext(DialogContext)
  if (context == null) {
    throw new Error('Dialog components must be wrapped in <Dialog />')
  }
  return context
}

export function Dialog({ children, ...options }) {
  const dialog = useDialog(options)
  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
}

export const DialogActivator = forwardRef(({ children, asChild = false, ...props }, propRef) => {
  const context = useDialogContext()
  const childrenRef = children.ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && isValidElement(children)) {
    return cloneElement(
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

export const DialogContent = forwardRef((props, propRef) => {
  const { context: floatingContext, ...context } = useDialogContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!floatingContext.open) return null

  return (
    <FloatingPortal>
      <FloatingOverlay
        lockScroll
        className="z-[99] grid place-items-center fixed w-screen h-screen bg-black/60 backdrop-blur-sm"
      >
        <FloatingFocusManager context={floatingContext}>
          <div
            ref={ref}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            {...context.getFloatingProps(props)}
            className="relative bg-white rounded-lg shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]"
          >
            {props.children}
            <Elevation level={3} />
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  )
})

export const DialogHeading = forwardRef(({ children, ...props }, ref) => {
  const { setLabelId } = useDialogContext()
  const id = useId()

  // Only sets `aria-labelledby` on the Dialog root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
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

export const DialogDescription = forwardRef(({ children, ...props }, ref) => {
  const { setDescriptionId } = useDialogContext()
  const id = useId()

  // Only sets `aria-describedby` on the Dialog root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <div
      {...props}
      ref={ref}
      id={id}
      className="relative p-4 text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed border-t border-t-black/10 border-b border-b-black/10"
    >
      {children}
    </div>
  )
})

export const DialogClose = forwardRef((props, ref) => {
  const { setOpen } = useDialogContext()
  return <div {...props} ref={ref} onClick={() => setOpen(false)} />
})
