'use client'

import {
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  Dialog,
  OverlayArrow
} from 'react-aria-components'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './menu-popover.module.css'

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
  children: React.ReactNode
  referenceWidth?: number
}

const MenuPopover = ({ children, ...props }: PopoverProps) => {
  // make the width of the popover the same as the reference element
  if (props.referenceWidth) {
    props.style = {
      ...props.style,
      '--reference-width': props.referenceWidth + 'px'
    } as React.CSSProperties
  }

  return (
    <AriaPopover {...props} style={props.style} className={styles['popover']}>
      <motion.div
        initial={{
          height: 0,
          overflow: 'hidden'
        }}
        animate={{
          height: 'auto'
        }}
        transition={{
          duration: 0.3
        }}
      >
        <OverlayArrow className={styles['underlay']} />
        <Dialog aria-label="dialog" className={styles['dialog']}>
          {children}
        </Dialog>
      </motion.div>
    </AriaPopover>
  )
}

export { MenuPopover }
