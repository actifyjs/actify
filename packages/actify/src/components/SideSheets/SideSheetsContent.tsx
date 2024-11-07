'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import clsx from 'clsx'
import { createPortal } from 'react-dom'
import styles from './side-sheets.module.css'
import { useSideSheets } from './SideSheetsContext'

export interface ContentProps extends React.ComponentProps<'div'> {
  divider?: boolean
}

const SideSheetsContent = (props: ContentProps) => {
  const { style, className, children } = props

  const { open, setOpen } = useSideSheets()
  const [container, setContainer] = useState<HTMLElement>()

  useEffect(() => {
    setContainer(document.body)
  }, [])

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!open || event.key !== 'Escape') return
    setOpen?.(false)
  }

  if (!container) {
    return null
  }

  return createPortal(
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          style={style}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // @ts-ignore
          onClick={() => setOpen?.(false)}
          className={clsx(styles['content'], className)}
        >
          <motion.div
            initial={{
              transform: 'translateX(100%)'
            }}
            animate={{
              transform: 'translateX(0)'
            }}
            exit={{
              transform: 'translateX(100%)'
            }}
            // @ts-ignore
            className={styles['content-inner']}
            onClick={(e: Event) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    container
  ) as React.ReactNode
}

export { SideSheetsContent }
