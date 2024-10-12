import { Item, ItemProps } from '../Item'

import { FocusRing } from '../FocusRing'
import React from 'react'
import { Ripple } from '../Ripple'
import { SelectContext } from './Select'
import clsx from 'clsx'
import styles from './select.module.css'

interface MenuItemProps extends Omit<ItemProps, 'container'> {
  value?: string
  selected?: boolean
}

const SelectOption = (props: MenuItemProps) => {
  const { children, selected, headline, value = '', onClick, ...rest } = props

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

  React.useLayoutEffect(() => {
    if (selected) {
      selectContext?.setDisplayText(
        (children as string) || (headline as string)
      )
    }
  }, [])

  const isSelected =
    selectContext?.displayText == ((children as string) || (headline as string))

  const Container = () => (
    <div className={styles['container']}>
      <Ripple />
      <FocusRing id={itemId} />
    </div>
  )

  return (
    <div role="presentation" tabIndex={-1} className={styles['select-option']}>
      <li
        id={itemId}
        role="menuitem"
        className={clsx(styles['list-item'], isSelected && styles['selected'])}
      >
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
