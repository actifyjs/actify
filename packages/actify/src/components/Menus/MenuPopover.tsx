'use client'

import {
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  Dialog,
  OverlayArrow
} from 'react-aria-components'

import React from 'react'
import { motion } from 'motion/react'
import styles from './menu-popover.module.css'
import clsx from 'clsx'

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
  children: React.ReactNode
  referenceWidth?: number
}

const MenuPopover = ({ children, ...props }: PopoverProps) => {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const onAnimationComplete = React.useCallback(() => {
    dialogRef.current?.classList.add(styles['open']);
  }, [dialogRef])

  // make the width of the popover the same as the reference element
  if (props.referenceWidth) {
    props.style = {
      ...props.style,
      '--reference-width': props.referenceWidth + 'px'
    } as React.CSSProperties
  }

  return (
    <AriaPopover {...props} style={props.style} className={clsx(styles['popover'], props.className)}>
      <motion.div
        initial={{
          height: 0,
          overflow: 'hidden'
        }}
        animate={{
          height: 'auto',
          maxHeight: 'inherit',
        }}
        transition={{
          duration: 0.3
        }}
        onAnimationComplete={onAnimationComplete}
      >
        <OverlayArrow className={styles['underlay']} />
        <Dialog aria-label="dialog" className={styles['dialog']} ref={dialogRef}>
          {children}
        </Dialog>
      </motion.div>
    </AriaPopover>
  )
}

export { MenuPopover }
