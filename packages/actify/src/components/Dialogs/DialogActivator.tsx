import { OverlayTriggerProps, useOverlayTriggerState } from 'react-stately'

import { Button } from '../Buttons'
import { Modal } from '../Modal'
import React from 'react'
import { useOverlayTrigger } from 'react-aria'

interface DialogActivatorProps extends OverlayTriggerProps {
  label: string
  children: (close: () => void) => React.JSX.Element
}

const DialogActivator = ({
  label,
  children,
  ...props
}: DialogActivatorProps) => {
  const state = useOverlayTriggerState(props)
  const { triggerProps, overlayProps } = useOverlayTrigger(
    {
      type: 'dialog'
    },
    state
  )

  return (
    <>
      <Button {...triggerProps}>{label}</Button>
      {state.isOpen && (
        <Modal state={state}>
          {React.cloneElement(children(state.close), overlayProps)}
        </Modal>
      )}
    </>
  )
}

export { DialogActivator }
