import { Item, ItemProps } from './../Item'

import { FocusRing } from './../FocusRing'
import { PopoverMenuContext } from './PopoverMenu'
import React from 'react'
import { Ripple } from './../Ripple'
import styles from './menu.module.css'

interface PopoverMenuItemProps extends Omit<ItemProps, 'container'> {}

export const PopoverMenuItem = (props: PopoverMenuItemProps) => {
  const { children, onClick, ...rest } = props
  const context = React.useContext(PopoverMenuContext)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event)
    context?.setOpen(false)
  }

  const Container = () => (
    <div className={styles['container']}>
      <Ripple />
      <FocusRing />
    </div>
  )

  return (
    <div className={styles['menu-item']} tabIndex={-1} role="presentation">
      <li tabIndex={0} role="menuitem" className={styles['list-item']}>
        <Item onClick={handleClick} {...rest} container={<Container />}>
          {children}
        </Item>
      </li>
    </div>
  )
}
