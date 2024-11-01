import { mergeProps, useFocusRing, useMenuItem } from 'react-aria'

import { FocusRing } from './../FocusRing'
import { Item } from './../Item'
import type { Node } from '@react-types/shared'
import React from 'react'
import { Ripple } from './../Ripple'
import { TreeState } from 'react-stately'
import styles from './menu.module.css'

interface MenuItemProps<T> {
  item: Node<T>
  state: TreeState<T>
  onAction: (key: React.Key) => void
  onClose: () => void
}

export function MenuItem<T>({
  item,
  state,
  onAction,
  onClose
}: MenuItemProps<T>) {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { focusProps, isFocusVisible } = useFocusRing()

  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      onAction,
      onClose
    },
    state,
    ref
  )

  const Container = () => (
    <div className={styles['container']}>
      <Ripple />
      <FocusRing />
    </div>
  )

  return (
    <li
      ref={ref}
      className={styles['list-item']}
      {...mergeProps(menuItemProps, focusProps)}
    >
      <Item container={<Container />}>{item.rendered}</Item>
      {isFocusVisible && <FocusRing />}
    </li>
  )
}
