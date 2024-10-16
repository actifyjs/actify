import { AriaButtonProps, Placement, useMenu, useMenuTrigger } from 'react-aria'
import type { AriaMenuProps, MenuTriggerProps } from '@react-types/menu'
import { useMenuTriggerState, useTreeState } from 'react-stately'

import { Button } from './../Button'
import { MenuItem } from './MenuItem'
import { MenuItems } from './MenuItems'
import { Popover } from './../Popover'
import React from 'react'
import clsx from 'clsx'
import styles from './menu.module.css'

interface MenuButtonProps<T extends object>
  extends AriaMenuProps<T>,
    MenuTriggerProps {
  style?: React.CSSProperties
  className?: string
  label?: string
  placement?: Placement
  activator?: (
    ref: React.RefObject<null>,
    menuTriggerProps: AriaButtonProps<'button'>
  ) => React.JSX.Element
}

export function Menu<T extends object>(props: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const state = useMenuTriggerState(props)

  // Get props for the menu trigger and menu elements
  const ref = React.useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref)

  return (
    <>
      {props.label && (
        <Button {...menuTriggerProps} ref={ref}>
          {props.label}
        </Button>
      )}
      {props?.activator?.(ref, menuTriggerProps)}
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement={props.placement}>
          <MenuRoot
            {...props}
            {...menuProps}
            autoFocus={state.focusStrategy || true}
            onClose={() => state.close()}
          />
        </Popover>
      )}
    </>
  )
}

interface MenuProps<T extends object> extends AriaMenuProps<T> {
  onClose: () => void
  style?: React.CSSProperties
  className?: string
}

function MenuRoot<T extends object>(props: MenuProps<T>) {
  // Create state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  return (
    <ul
      ref={ref}
      {...menuProps}
      style={props.style}
      className={clsx(styles['menu-item'], props.className)}
    >
      {[...state.collection].map((item) =>
        item.type == 'section' ? (
          <MenuItems
            key={item.key}
            section={item}
            state={state}
            onClose={props.onClose}
            onAction={() => props.onAction}
          />
        ) : (
          <MenuItem
            key={item.key}
            item={item}
            state={state}
            onClose={props.onClose}
            onAction={() => props.onAction}
          />
        )
      )}
    </ul>
  )
}
