import { Button } from '../Button'
import { Popover } from './Popover'
import React from 'react'
import { useOverlayTrigger } from 'react-aria'
import { useOverlayTriggerState } from 'react-stately'

type PopoverActivatorProps = {
  label: string
  children: React.JSX.Element
}
const PopoverActivator = ({
  label,
  children,
  ...props
}: PopoverActivatorProps) => {
  const ref = React.useRef(null)
  const state = useOverlayTriggerState(props)
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  )

  return (
    <>
      <Button {...triggerProps} ref={ref}>
        {label}
      </Button>
      {state.isOpen && (
        <Popover {...props} triggerRef={ref} state={state}>
          {React.cloneElement(children, overlayProps)}
        </Popover>
      )}
    </>
  )
}

export { PopoverActivator }
