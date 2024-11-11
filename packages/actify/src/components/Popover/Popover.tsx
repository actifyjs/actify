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

const Popover = ({
  state,
  children,
  offset = 16,
  referenceWidth,
  popoverRef: propRef,
  ...props
}: PopoverProps) => {
  const popoverRef =
    (propRef as React.RefObject<HTMLDivElement>) || React.useRef(null)
  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef
    },
    state
  )

  popoverProps.style = {
    ...popoverProps.style,
    '--reference-width': referenceWidth + 'px'
  } as React.CSSProperties

  return (
    <Overlay>
      <div {...underlayProps} className={styles['underlay']} />
      <div {...popoverProps} ref={popoverRef} className={styles['popover']}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}

export { Popover }
