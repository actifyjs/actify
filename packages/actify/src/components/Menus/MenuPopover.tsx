'use client'

import {
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  Dialog,
  OverlayArrow
} from 'react-aria-components'

import React from 'react'
import styles from './menu-popover.module.css'

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
  children: React.ReactNode
  referenceWidth?: number
}

const MenuPopover = ({ children, ...props }: PopoverProps) => {
  // make the width of the popover the same as the reference element
  props.style = {
    ...props.style,
    '--reference-width': props.referenceWidth + 'px'
  } as React.CSSProperties

  return (
    <AriaPopover {...props} className={styles['popover']}>
      <OverlayArrow className={styles['underlay']} />
      <Dialog className={styles['dialog']}>{children}</Dialog>
    </AriaPopover>
  )
}

export { MenuPopover }
