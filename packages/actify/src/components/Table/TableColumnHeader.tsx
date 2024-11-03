import {
  AriaTableCellProps,
  mergeProps,
  useFocusRing,
  useTableColumnHeader
} from 'react-aria'

import { FocusRing } from '../FocusRing'
import { Icon } from '../Icon'
import React from 'react'
import { TableState } from 'react-stately'
import styles from './table.module.css'

interface TableColumnHeaderProps<T> extends AriaTableCellProps {
  state: TableState<T>
}
const TableColumnHeader = <T extends object>({
  node,
  state
}: TableColumnHeaderProps<T>) => {
  const ref = React.useRef<HTMLTableCellElement | null>(null)
  const { columnHeaderProps } = useTableColumnHeader({ node }, state, ref)
  const isSortVisible = state.sortDescriptor?.column === node.key
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <th
      ref={ref}
      colSpan={node.colspan}
      className={styles['th']}
      style={{
        textAlign: node.colspan! > 1 ? 'center' : 'left',
        cursor: node.props.allowsSorting ? 'pointer' : 'default'
      }}
      {...mergeProps(columnHeaderProps, focusProps)}
    >
      {isFocusVisible && <FocusRing />}
      {node.rendered}
      {node.props.allowsSorting && (
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
