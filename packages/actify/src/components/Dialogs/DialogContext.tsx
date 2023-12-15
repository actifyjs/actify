'use client'
import React, { createContext, useState, useMemo, useContext } from 'react'

import {
  useRole,
  useClick,
  useDismiss,
  useFloating,
  useInteractions
} from '@floating-ui/react'

type DialogProps = {
  open?: boolean
  initialOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const DialogContext = createContext<DialogProps | null>(null)

function useDialog({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen
}: DialogProps) {
  const [labelId, setLabelId] = useState()
  const [descriptionId, setDescriptionId] = useState()
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)

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

export const useDialogContext = () => {
  const context = useContext(DialogContext)
  if (context == null) {
    throw new Error('Dialog components must be wrapped in <Dialog />')
  }
  return context
}

export const DialogProvider = ({
  children,
  ...options
}: {
  children: React.ReactNode
}) => {
  const dialog = useDialog(options)
  return (
    <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
  )
}
