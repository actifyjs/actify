'use client'
import themes from '@themes/index'
import { tv } from 'tailwind-variants'
import { createPortal } from 'react-dom'
import { useDrawer } from './DrawerContext'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const { scrim } = themes()

const rootVariants = tv({
  base: scrim({
    className:
      'fixed overflow-hidden inset-0 ease-in-out transition-opacity duration-500 pointer-events-none'
  }),
  variants: {
    open: {
      true: 'pointer-events-auto',
      false: ''
    },
    placement: {
      left: '',
      right: '',
      top: '',
      bottom: ''
    }
  },
  compoundVariants: [
    {
      open: true,
      placement: ['left', 'right'],
      className: 'translate-x-0'
    },
    {
      open: true,
      placement: ['top', 'bottom'],
      className: 'translate-y-0'
    }
  ]
})

const contentVariants = tv({
  base: 'absolute overflow-y-auto bg-surface shadow-xl duration-500 ease-in-out transition-all',
  variants: {
    open: {
      true: '',
      false: ''
    },
    placement: {
      left: 'left-0 rounded-r-2xl',
      right: 'right-0 rounded-l-2xl',
      top: 'top-0 rounded-b-2xl',
      bottom: 'bottom-0 rounded-t-2xl'
    }
  },
  compoundVariants: [
    {
      placement: ['top', 'bottom'],
      className: 'h-screen max-h-[320px] w-full'
    },
    {
      placement: ['left', 'right'],
      className: 'w-screen max-w-xs h-full'
    }
  ]
})

interface DrawerContentProps extends React.ComponentProps<'div'> {}
const DrawerContent = ({ style, className, children }: DrawerContentProps) => {
  const [container, setContainer] = useState<HTMLElement>()
  const { open, placement, setOpen } = useDrawer()

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

  const getAnimationProps = () => {
    switch (placement) {
      case 'left':
        return {
          initial: {
            transform: 'translateX(-100%)'
          },
          animate: {
            transform: 'translateX(0)'
          },
          exit: {
            transform: 'translateX(-100%)'
          }
        }
      case 'right':
        return {
          initial: {
            transform: 'translateX(100%)'
          },
          animate: {
            transform: 'translateX(0)'
          },
          exit: {
            transform: 'translateX(100%)'
          }
        }
      case 'top':
        return {
          initial: {
            transform: 'translateY(-100%)'
          },
          animate: {
            transform: 'translateY(0)'
          },
          exit: {
            transform: 'translateY(-100%)'
          }
        }
      case 'bottom':
        return {
          initial: {
            transform: 'translateY(100%)'
          },
          animate: {
            transform: 'translateY(0)'
          },
          exit: {
            transform: 'translateY(100%)'
          }
        }
    }
  }

  return createPortal(
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={style}
          className={rootVariants({ open })}
        >
          <motion.div
            {...getAnimationProps()}
            className={contentVariants({ placement, className })}
          >
            {children}
          </motion.div>
          {/* scrim */}
          <div
            onClick={() => setOpen?.(false)}
            className="w-screen h-screen"
          ></div>
        </motion.nav>
      )}
    </AnimatePresence>,
    container
  )
}

export { DrawerContent }
