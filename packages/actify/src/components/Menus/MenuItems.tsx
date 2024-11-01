import { MenuItem } from './MenuItem'
import type { Node } from '@react-types/shared'
import React from 'react'
import { TreeState } from 'react-stately'
import { useMenuSection } from 'react-aria'

interface MenuSectionProps<T> {
  section: Node<T>
  state: TreeState<T>
  onAction: (key: React.Key) => void
  onClose: () => void
}

export function MenuItems<T>({
  section,
  state,
  onAction,
  onClose
}: MenuSectionProps<T>) {
  const { itemProps, groupProps } = useMenuSection({
    heading: section.rendered,
    'aria-label': section['aria-label']
  })

  return (
    <li {...itemProps}>
      <ul {...groupProps}>
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
