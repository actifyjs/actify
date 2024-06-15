'use client'

import { EASING } from '../../animations'
import { Elevation } from '../Elevation'
import React from 'react'
import clsx from 'clsx'
import styles from './actify.module.css'
import { useControllableState } from '../../hooks'
import { useOnClickOutside } from '../../hooks'

interface MenuContextProps {
  open: boolean
  setOpen: (open: boolean) => void
}
export const MenuContext = React.createContext<MenuContextProps | null>(null)

export interface MenuRef {
  show: () => void
  close: () => void
  toggle: () => void
}
interface MenuProps extends Omit<React.ComponentProps<'div'>, 'ref'> {
  anchor?: string
  positioning?: 'absolute' | 'popover' | 'fixed' | 'document'
  /** Skips the opening and closing animations */
  quick?: boolean
  xOffset?: number
  yOffset?: number
  typeaheadDelay?: number
  anchorCorner?: string
  menuCorner?: string
  stayOpenOnOutsideClick?: boolean
  stayOpenOnFocusout?: boolean
  skipRestoreFocus?: boolean
  defaultFocus?: string
  noNavigationWrap?: boolean
  isSubmenu?: boolean
  ref?: React.Ref<MenuRef>
  open?: boolean
  defaultOpen?: boolean
  setOpen?: (open: boolean) => void
  setFocused?: (focus: boolean) => void
}
const Menu = (props: MenuProps) => {
  const {
    ref,
    style,
    xOffset = 0,
    yOffset = 0,
    children,
    className,
    setFocused,
    defaultOpen,
    open: propOpen,
    setOpen: propSetOpen,
    positioning = 'absolute',
    ...rest
  } = props

  const menuRef = React.useRef<HTMLDivElement>(null)
  const slotRef = React.useRef<HTMLDivElement>(null)

  const [open, setOpen] = useControllableState({
    value: propOpen,
    onChange: propSetOpen,
    defaultValue: defaultOpen
  })

  useOnClickOutside(menuRef, () => {
    setOpen(false)
    setFocused?.(false)
  })

  React.useImperativeHandle(
    ref,
    () => ({
      show: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen(!open)
    }),
    []
  )

  const animateOpen = async () => {
    const surfaceEl = menuRef.current
    const slotEl = slotRef.current
    if (!surfaceEl || !slotEl) return true
    const openingUpwards = false
    // needs to be imperative because we don't want to mix animation and Lit
    // render timing
    surfaceEl.classList.toggle(styles['animating'], true)
    const height = surfaceEl.offsetHeight
    const items = React.Children.toArray(children)

    const FULL_DURATION = 500
    const SURFACE_OPACITY_DURATION = 50
    const ITEM_OPACITY_DURATION = 250
    // We want to fit every child fade-in animation within the full duration of
    // the animation.
    const DELAY_BETWEEN_ITEMS =
      (FULL_DURATION - ITEM_OPACITY_DURATION) / items.length
    const surfaceHeightAnimation = surfaceEl.animate(
      [{ height: '0px' }, { height: `${height}px` }],
      {
        duration: FULL_DURATION,
        easing: EASING.EMPHASIZED
      }
    )
    // When we are opening upwards, we want to make sure the last item is always
    // in view, so we need to translate it upwards the opposite direction of the
    // height animation
    const upPositionCorrectionAnimation = slotEl.animate(
      [
        { transform: openingUpwards ? `translateY(-${height}px)` : '' },
        { transform: '' }
      ],
      { duration: FULL_DURATION, easing: EASING.EMPHASIZED }
    )
    const surfaceOpacityAnimation = surfaceEl.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      SURFACE_OPACITY_DURATION
    )

    let resolveAnimation = (_: boolean) => {}
    const animationFinished = new Promise((resolve) => {
      resolveAnimation = resolve
    })

    surfaceHeightAnimation.addEventListener('finish', () => {
      surfaceEl.classList.toggle(styles['animating'], false)
      resolveAnimation(false)
    })
    return await animationFinished
  }

  React.useEffect(() => {
    if (open) {
      animateOpen()
    }
  }, [open])

  const classes = clsx(styles['menu'], open && styles['open'], className)

  return (
    <div
      {...rest}
      ref={menuRef}
      className={classes}
      style={{
        ...style,
        left: xOffset + 'px',
        top: `calc(100% + ${yOffset}px)`
      }}
    >
      <Elevation style={{ '--md-elevation-level': 2 } as React.CSSProperties} />
      <MenuContext.Provider value={{ open, setOpen }}>
        <div className={styles['items']}>
          <div className={styles['item-padding']} ref={slotRef}>
            {children}
          </div>
        </div>
      </MenuContext.Provider>
    </div>
  )
}

export { Menu }
