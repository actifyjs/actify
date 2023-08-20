import React from 'react'

import {
  flip,
  shift,
  offset,
  useRole,
  useFocus,
  useHover,
  autoUpdate,
  useDismiss,
  useFloating,
  useInteractions
} from '@floating-ui/react'

const TooltipContext = React.createContext()

function useTooltip({ initialOpen = false, placement = 'top', open: controlledOpen, onOpenChange: setControlledOpen }) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(15),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'start',
        padding: 15
      }),
      shift({ padding: 15 })
    ]
  })

  const context = data.context

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null
  })
  const focus = useFocus(context, {
    enabled: controlledOpen == null
  })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const interactions = useInteractions([hover, focus, dismiss, role])

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data
    }),
    [open, setOpen, interactions, data]
  )
}

export const useTooltipContext = () => {
  const context = React.useContext(TooltipContext)
  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />')
  }
  return context
}

export function TooltipProvider({ children, ...options }) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options)
  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>
}
