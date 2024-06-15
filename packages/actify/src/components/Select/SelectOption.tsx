import { Item, ItemProps } from '../Item'

import { FocusRing } from '../FocusRing'
import React from 'react'
import { Ripple } from '../Ripple'
import { SelectContext } from './Select'
import styles from './actify.module.css'

interface MenuItemProps extends Omit<ItemProps, 'container'> {
  value?: string
}

const SelectOption = (props: MenuItemProps) => {
  const { children, headline, value = '', onClick, ...rest } = props

  const itemId = React.useId()
  const selectContext = React.useContext(SelectContext)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event)
    selectContext?.setDisplayText((children as string) || (headline as string))
    selectContext?.setOpen(false)
    // @ts-ignore
    event.target.value = value || (children as string) || (headline as string)
    selectContext?.onChange?.(event)
  }

  const Container = () => (
    <div className={styles['container']}>
      <Ripple />
      <FocusRing id={itemId} />
    </div>
  )

  return (
    <div role="presentation" tabIndex={-1} className={styles['select-option']}>
      <li id={itemId} role="menuitem" className={styles['list-item']}>
        <Item
          {...rest}
          headline={headline}
          onClick={handleClick}
          container={<Container />}
        >
          {children}
        </Item>
      </li>
    </div>
  )
}

export { SelectOption }
