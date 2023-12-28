'use client'

import themes from '@themes/index'
import { tv } from 'tailwind-variants'
import { createPortal } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useBottomSheets } from './BottomSheetsContext'
import { motion, AnimatePresence } from 'framer-motion'

const { scrim } = themes()

const rootVariants = tv({
  base: scrim({
    className:
      'fixed overflow-hidden inset-0 transform ease-in-out transition-opacity opacity-0 duration-500'
  })
})

const innerVariants = tv({
  base: 'absolute flex flex-col bg-transparent left-10 right-10 bottom-0 translate-y-full transition-transform ease-in-out'
})

const Content: React.FC<React.ComponentProps<'div'>> = ({
  style,
  className,
  children
}) => {
  const open = useBottomSheets((s) => s.open)
  const setOpen = useBottomSheets((s) => s.setOpen)
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
    setOpen(false)
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
          onClick={() => setOpen(false)}
          className={rootVariants({ className })}
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
            className={innerVariants()}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="inline-flex h-9 w-full cursor-grab flex-col items-center justify-start gap-3 p-4 bg-surface rounded-t-[100px]">
              <div className="h-1 w-8 bg-outline/40 rounded-[100px]"></div>
            </div>
            <div className="flex-1 max-h-[calc(100vh-72px)] overflow-y-auto">
              <p className="bg-surface p-2">{children}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    container
  )
}

export { Content }
