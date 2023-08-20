import React from 'react'

import { useRole, useClick, useDismiss, useFloating, useInteractions } from '@floating-ui/react'

const DialogContext = React.createContext()

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

export const useDialogContext = () => {
  const context = React.useContext(DialogContext)
  if (context == null) {
    throw new Error('Dialog components must be wrapped in <Dialog />')
  }
  return context
}

export function DialogProvider({ children, ...options }) {
  const dialog = useDialog(options)
  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
}
