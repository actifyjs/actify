'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

import clsx from 'clsx'
import { createPortal } from 'react-dom'
import styles from './bottom-sheets.module.css'
import { useBottomSheets } from './BottomSheetsContext'

const BottomSheetsContent = ({
  ref,
  style,
  className,
  children
}: React.ComponentProps<'div'>) => {
  const { open, setOpen } = useBottomSheets()
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
          ref={ref}
          style={style}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // @ts-ignore
          onClick={() => setOpen?.(false)}
          className={clsx(styles['root'], className)}
        >
          <motion.div
            initial={{
              transform: 'translateY(100%)'
            }}
            animate={{
              transform: 'translateY(0)'
            }}
            exit={{
              transform: 'translateY(100%)'
            }}
            className={styles['inner']}
            // @ts-expect-error
            onClick={(e: Event) => e.stopPropagation()}
          >
            <div className={styles['grab']}>
              <div className={styles['grab-item']} />
            </div>
            <div className={styles['content']}>
              <p className={styles['content-inner']}>{children}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    container
  ) as React.ReactNode
}

export { BottomSheetsContent }
