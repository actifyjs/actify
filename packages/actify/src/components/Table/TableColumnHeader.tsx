import { mergeProps, useFocusRing, useTableColumnHeader } from 'react-aria'

import { FocusRing } from '../FocusRing'
import { GridNode } from '@react-types/grid'
import { Icon } from '../Icon'
import React from 'react'
import { TableState } from 'react-stately'
import styles from './table.module.css'

interface TableColumnHeaderProps<T> extends React.ComponentProps<'th'> {
  column: GridNode<T>
  state: TableState<T>
}
const TableColumnHeader = <T extends object>({
  column,
  state
}: TableColumnHeaderProps<T>) => {
  const ref = React.useRef<HTMLTableCellElement | null>(null)
  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  )
  const isSortVisible = state.sortDescriptor?.column === column.key
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <th
      ref={ref}
      colSpan={column.colspan}
      className={styles['th']}
      style={{
        textAlign: column.colspan! > 1 ? 'center' : 'left',
        cursor: column.props.allowsSorting ? 'pointer' : 'default'
      }}
      {...mergeProps(columnHeaderProps, focusProps)}
    >
      {isFocusVisible && <FocusRing />}
      {column.rendered}
      {column.props.allowsSorting && (
        <span
          aria-hidden="true"
          style={{
            padding: '0 2px',
            display: 'inline-flex',
            verticalAlign: 'middle',
            transition: 'all 300ms ease-in-out',
            visibility: isSortVisible ? 'visible' : 'hidden',
            rotate:
              state.sortDescriptor?.direction === 'ascending'
                ? '0deg'
                : '-180deg'
          }}
        >
          <Icon>Stat_1</Icon>
        </span>
      )}
    </th>
  )
}

export { TableColumnHeader }
