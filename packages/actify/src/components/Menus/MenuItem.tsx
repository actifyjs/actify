import { Item, ItemProps } from '../../components/Item'

import { FocusRing } from '../../components/FocusRing'
import { MenuContext } from './Menu'
import React from 'react'
import { Ripple } from '../../components/Ripple'
import styles from './menu.module.css'

interface MenuItemProps extends Omit<ItemProps, 'container'> {}

const MenuItem = (props: MenuItemProps) => {
  const { children, onClick, ...rest } = props
  const context = React.useContext(MenuContext)

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

export { MenuItem }
