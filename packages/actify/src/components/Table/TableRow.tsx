import {
  GridRowProps,
  mergeProps,
  useFocusRing,
  useHover,
  useTableRow
} from 'react-aria'

import { FocusRing } from '../FocusRing'
import React from 'react'
import { TableState } from 'react-stately'
import clsx from 'clsx'
import styles from './table.module.css'

interface TableRowProps<T> extends GridRowProps<T> {
  state: TableState<T>
  children: React.ReactNode
}

const TableRow = <T extends object>(props: TableRowProps<T>) => {
  const { node, children, state } = props
  const ref = React.useRef<HTMLTableRowElement | null>(null)
  const isDisabled = state.selectionManager.isDisabled(node.key)
  const isSelected = state.selectionManager.isSelected(node.key)

  const { rowProps, isPressed } = useTableRow(
    {
      node
    },
    state,
    ref
  )
  const { isHovered, hoverProps } = useHover({ isDisabled })
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <tr
      ref={ref}
      data-pressed={isPressed ? 'true' : undefined}
      data-hover={isHovered ? 'true' : undefined}
      data-selected={isSelected ? 'true' : undefined}
      {...mergeProps(rowProps, hoverProps, focusProps)}
      className={clsx(
        styles['tr'],
        isHovered && styles['hovered'],
        isSelected && styles['selected']
      )}
    >
      {children}
      {isFocusVisible && <FocusRing as="td" />}
    </tr>
  )
}

export { TableRow }
