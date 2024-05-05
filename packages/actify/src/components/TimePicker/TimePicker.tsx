'use client'
import { useState, useEffect } from 'react'

import {
  flip,
  useId,
  shift,
  offset,
  useRole,
  useClick,
  Placement,
  useDismiss,
  autoUpdate,
  useFloating,
  FloatingPortal,
  useInteractions,
  FloatingFocusManager
} from '@floating-ui/react'

import dayjs from 'dayjs'
import { TimeClock } from './TimeClock'
import { CalendarClock } from 'lucide-react'
import { TextField } from './../TextFields'
import { IconButton } from './../Button/IconButton'

interface TimeValue extends dayjs.Dayjs {}

const TimePicker = ({
  onChange
}: {
  onChange: ({ hour, minute }: { hour: number; minute: number }) => void
}) => {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<Placement | null>(null)
  const buttonId = useId()
  const [value, setValue] = useState<TimeValue | undefined>(dayjs())

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

  const handleChange = ({ hour, minute }: { hour: number; minute: number }) => {
    onChange?.({
      hour,
      minute
    })
    setValue(dayjs(value).hour(hour).minute(minute))
    setOpen(false)
  }

  return (
    <>
      <TextField
        id={buttonId}
        value={dayjs(value).format('HH:mm')}
        label="select time"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <TextField.TrailingIcon>
          <IconButton>
            <CalendarClock />
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
              <TimeClock value={value} onChange={handleChange} />
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  )
}

export default TimePicker
