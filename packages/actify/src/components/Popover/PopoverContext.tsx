'use client'
import React, { createContext } from 'react'

import {
  flip,
  Side,
  shift,
  offset,
  useRole,
  useClick,
  autoUpdate,
  useDismiss,
  useFloating,
  useInteractions,
  AlignedPlacement
} from '@floating-ui/react'

type PopoverProps = {
  open?: boolean
  modal?: boolean
  initialOpen?: boolean
  placement?: Side | AlignedPlacement
  onOpenChange?: (open: boolean) => void
}

const PopoverContext = createContext<PopoverProps | null>(null)

const usePopover = ({
  modal = false,
  initialOpen = false,
  placement = 'bottom',
  open: controlledOpen,
  onOpenChange: setControlledOpen
}: PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)
  const [labelId, setLabelId] = React.useState()
  const [descriptionId, setDescriptionId] = React.useState()

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'end',
        padding: 5
      }),
      shift({ padding: 5 })
    ]
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null
  })
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId
    }),
    [open, setOpen, interactions, data, modal, labelId, descriptionId]
  )
}

export const PopoverProvider = ({
  children,
  modal = false,
  ...initialProp
}: {
  modal?: boolean
  children: React.ReactNode
}) => {
  const popover = usePopover({ modal, ...initialProp })
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  )
}

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext)
  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />')
  }
  return context
}
