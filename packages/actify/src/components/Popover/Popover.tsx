import styles from './popover.module.css'

import {
  DismissButton,
  Overlay,
  usePopover,
  type AriaPopoverProps
} from 'react-aria'

import type { OverlayTriggerState } from 'react-stately'
import React from 'react'

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  referenceWidth?: number
  children: React.ReactNode
  state: OverlayTriggerState
  popoverRef?: React.RefObject<Element | null>
}

const Popover = ({ children, referenceWidth, ...props }: PopoverProps) => {
  const _popoverRef = React.useRef(null)
  const { popoverRef = _popoverRef, state } = props

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef
    },
    state
  )

  // make the width of the popover the same as the reference element
  popoverProps.style = {
    ...popoverProps.style,
    '--reference-width': referenceWidth + 'px'
  } as React.CSSProperties

  return (
    <Overlay>
      <div {...underlayProps} className={styles['underlay']} />
      <div
        {...popoverProps}
        className={styles['popover']}
        ref={popoverRef as React.RefObject<HTMLDivElement>}
      >
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}

export { Popover }
