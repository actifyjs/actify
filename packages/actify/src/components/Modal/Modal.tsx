import { AriaModalOverlayProps, Overlay, useModalOverlay } from 'react-aria'

import { OverlayTriggerState } from 'react-stately'
import React from 'react'
import styles from './modal.module.css'

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
      <div className={styles['modal']} {...underlayProps}>
        <div className={styles['scrim']} />
        <div ref={ref} className={styles['content']} {...modalProps}>
          {children}
        </div>
      </div>
    </Overlay>
  )
}
