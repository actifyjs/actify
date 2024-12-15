'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

import clsx from 'clsx'
import { createPortal } from 'react-dom'
import styles from './drawer.module.css'
import { useDrawer } from './DrawerContext'

export interface DrawerContentProps extends React.ComponentProps<'div'> {}
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
          // @ts-ignore
          className={clsx(
            styles['root'],
            open && styles['root-open'],
            open &&
              (placement == 'left' || placement == 'right') &&
              styles['placement-x'],
            open &&
              (placement == 'top' || placement == 'bottom') &&
              styles['placement-y']
          )}
        >
          <motion.div
            {...getAnimationProps()}
            style={style}
            // @ts-ignore
            className={clsx(
              styles['content'],
              styles[`content-${placement}`],
              (placement == 'left' || placement == 'right') && [
                styles['content-x']
              ],
              (placement == 'top' || placement == 'bottom') && [
                styles['content-y']
              ],
              className
            )}
          >
            {children}
          </motion.div>
          {/* scrim */}
          <div
            onClick={() => setOpen?.(false)}
            style={{ width: '100vw', height: '100vh' }}
          />
        </motion.nav>
      )}
    </AnimatePresence>,
    container
  ) as React.ReactNode
}

export { DrawerContent }
