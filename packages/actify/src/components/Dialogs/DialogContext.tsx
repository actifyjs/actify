'use client'
import { useControllableState } from '@hooks/useControllableState'
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

function useDialog(props: DialogProps) {
  const { open: controlledOpen, initialOpen } = props
  const [open, setOpen] = useControllableState({
    value: controlledOpen,
    defaultValue: initialOpen
  })

  const [labelId, setLabelId] = useState()
  const [descriptionId, setDescriptionId] = useState()

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
      labelId,
      ...data,
      setLabelId,
      descriptionId,
      ...interactions,
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
