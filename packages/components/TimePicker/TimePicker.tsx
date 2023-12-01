'use client'
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
import { Picker } from './Picker'
import dayjs from 'dayjs'

const TimePicker = ({ onChange }) => {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState(null)
  const buttonId = useId()
  const [value, setValue] = useState(dayjs().format('HH:mm'))

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

  const handleChange = (time) => {
    onChange?.(time)
    setValue(time.hour + ':' + time.minute)
    setOpen(false)
  }

  return (
    <>
      <TextField
        id={buttonId}
        value={value}
        //@ts-ignore
        label="select time"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <TextField.TrailingIcon>
          <IconButton>
            <Icon name="calendar-clock" />
          </IconButton>
        </TextField.TrailingIcon>
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
              <Picker value={value} onChange={handleChange} />
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  )
}

export default TimePicker
