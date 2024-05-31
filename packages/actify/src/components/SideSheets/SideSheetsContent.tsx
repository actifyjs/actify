'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { createPortal } from 'react-dom'
import { tv } from 'tailwind-variants'
import { useSideSheets } from './SideSheetsContext'

const scrim = tv({
  base: 'z-50 bg-black/40 dark:bg-[rgba(3,3,3,.8)]'
})

const rootVariants = tv({
  base: scrim({
    className:
      'fixed overflow-hidden inset-0 transform ease-in-out transition-opacity opacity-0 duration-500'
  })
})

const innerVariants = tv({
  base: 'absolute h-screen max-w-xs w-full bg-surface rounded-l-2xl overflow-hidden top-0 right-0 translate-x-full transition-transform ease-in-out'
})

export interface ContentProps extends React.ComponentProps<'div'> {
  divider?: boolean
}

const Content = (props: ContentProps) => {
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
          onClick={() => setOpen?.(false)}
          className={rootVariants({ className })}
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
            className={innerVariants()}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    container
  )
}

export { Content }
