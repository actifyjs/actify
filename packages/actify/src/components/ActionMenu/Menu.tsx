import { AriaMenuProps, useMenu } from 'react-aria'

import { MenuItem } from './MenuItem'
import { MenuItems } from './MenuItems'
import React from 'react'
import clsx from 'clsx'
import styles from './menu.module.css'
import { useTreeState } from 'react-stately'

interface MenuProps<T extends object> extends AriaMenuProps<T> {
  onClose: () => void
  style?: React.CSSProperties
  className?: string
}

const Menu = <T extends object>(props: MenuProps<T>) => {
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

export { Menu }
