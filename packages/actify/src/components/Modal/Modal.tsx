import { AriaModalOverlayProps, Overlay, useModalOverlay } from 'react-aria'

import { OverlayTriggerState } from 'react-stately'
import React from 'react'

interface ModalProps extends AriaModalOverlayProps {
  children: React.ReactNode
  state: OverlayTriggerState
}
export function Modal({ state, children, ...props }: ModalProps) {
  const ref = React.useRef(null)
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref)
  const [exited, setExited] = React.useState(!state.isOpen)

  // Don't render anything if the modal is not open and we're not animating out.
  if (!(state.isOpen || !exited)) {
    return null
  }

  return (
    <Overlay>
      <div
        style={{
          position: 'fixed',
          zIndex: 100,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        {...underlayProps}
      >
        <div
          ref={ref}
          {...modalProps}
          style={{
            background: 'var(--page-background)',
            border: '1px solid gray'
          }}
        >
          {children}
        </div>
      </div>
    </Overlay>
  )
}
