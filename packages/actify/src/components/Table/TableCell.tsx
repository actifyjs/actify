import {
  AriaTableCellProps,
  mergeProps,
  useFocusRing,
  useTableCell
} from 'react-aria'

import { FocusRing } from '../FocusRing/FocusRing'
import { GridNode } from '@react-types/grid'
import React from 'react'
import { TableState } from 'react-stately'
import styles from './table.module.css'

interface TableCellProps<T> extends AriaTableCellProps {
  state: TableState<T>
}

const TableCell = <T extends object>({ node, state }: TableCellProps<T>) => {
  const ref = React.useRef<HTMLTableCellElement | null>(null)
  const { gridCellProps } = useTableCell({ node }, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <td
      ref={ref}
      className={styles['td']}
      {...mergeProps(gridCellProps, focusProps)}
    >
      {node.rendered}
      {isFocusVisible && <FocusRing />}
    </td>
  )
}

export { TableCell }
