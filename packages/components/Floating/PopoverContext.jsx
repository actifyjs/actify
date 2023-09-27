import React, { createContext, useState, useRef } from 'react'
import { createStore } from 'zustand'

import {
  flip,
  shift,
  offset,
  useRole,
  useClick,
  autoUpdate,
  useDismiss,
  useFloating,
  useInteractions
} from '@floating-ui/react'

const PopoverContext = createContext()

const usePopoverStore = (initialProp) => {
  const {
    initialOpen = false,
    placement = 'bottom',
    modal,
    open: controlledOpen,
    onOpenChange: setControlledOpen
  } = initialProp

  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)
  const [labelId, setLabelId] = useState()
  const [descriptionId, setDescriptionId] = useState()

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement: placement || 'bottom',
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

  const useCreateStore = createStore()((set) => ({
    open: false,
    setOpen,
    ...interactions,
    ...data,
    modal,
    labelId,
    descriptionId,
    setLabelId,
    setDescriptionId
  }))

  const store = useRef(useCreateStore)
  return store.current
}

const usePopover = ({
  initialOpen = false,
  placement = 'bottom',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen
}) => {
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
}) => {
  // const store = usePopoverStore({ modal, ...initialProp })

  const popover = usePopover({ modal, ...initialProp })
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  )
}

// export const usePopoverContext = () => {
//   const store = React.useContext(PopoverContext)
//   if (!store) {
//     throw new Error('Missing Context.Provider in the tree')
//   }
//   return useStore(store)
// }

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext)
  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />')
  }
  return context
}
