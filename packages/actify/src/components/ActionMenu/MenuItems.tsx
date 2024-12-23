import { MenuItem } from './MenuItem'
import type { Node } from '@react-types/shared'
import React from 'react'
import { TreeState } from 'react-stately'
import styles from './menu.module.css'
import { useMenuSection } from 'react-aria'

interface MenuSectionProps<T> {
  section: Node<T>
  state: TreeState<T>
  onAction: (key: React.Key) => void
  onClose: () => void
}

const MenuItems = <T extends object>({
  section,
  state,
  onAction,
  onClose
}: MenuSectionProps<T>) => {
  const { itemProps, groupProps } = useMenuSection({
    heading: section.rendered,
    'aria-label': section['aria-label']
  })

  return (
    <li {...itemProps}>
      <ul {...groupProps} className={styles['group']}>
        {[...section.childNodes].map((node) => (
          <MenuItem
            key={node.key}
            item={node}
            state={state}
            onClose={onClose}
            onAction={onAction}
          />
        ))}
      </ul>
    </li>
  )
}

export { MenuItems }
