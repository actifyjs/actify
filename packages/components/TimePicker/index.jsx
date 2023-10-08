import React, { useState, useEffect } from 'react'

import {
  flip,
  useId,
  shift,
  offset,
  useRole,
  useClick,
  useDismiss,
  autoUpdate,
  useFloating,
  FloatingPortal,
  useInteractions,
  FloatingFocusManager
} from '@floating-ui/react'

import { TextField, IconButton, Icon } from 'actify'
import Picker from './Picker'

const TimePicker = () => {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState(null)
  const buttonId = useId()

  const {
    refs,
    floatingStyles,
    context,
    placement: resultantPlacement
  } = useFloating({
    placement: placement ?? 'bottom-start',
    open,
    onOpenChange: setOpen,
    middleware: [offset(16), flip(), shift()],
    whileElementsMounted: autoUpdate
  })

  // Handles opening the floating element via the Choose Emoji button.
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context)
  ])

  useEffect(() => {
    if (open) {
      setPlacement(resultantPlacement)
    } else {
      setPlacement(null)
    }
  }, [open, resultantPlacement])

  // Prevent input losing focus on Firefox VoiceOver
  const { 'aria-activedescendant': ignoreAria, ...floatingProps } =
    getFloatingProps()

  return (
    <>
      <TextField
        id={buttonId}
        label="select time"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <TextField.Slot name="trailingIcon">
          <IconButton>
            <Icon name="calendar-clock" />
          </IconButton>
        </TextField.Slot>
      </TextField>
      <FloatingPortal>
        {open && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={{ zIndex: 50, ...floatingStyles }}
              aria-labelledby={buttonId}
              {...floatingProps}
            >
              <Picker onChange={(time) => console.log(time)} />
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  )
}

export { TimePicker }
