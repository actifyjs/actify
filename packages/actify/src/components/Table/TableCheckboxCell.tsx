import {
  AriaTableCellProps,
  Key,
  useTableCell,
  useTableSelectionCheckbox
} from 'react-aria'

import { Checkbox } from './../Checkbox'
import React from 'react'
import { TableState } from 'react-stately'

interface TableCheckboxCellProps<T> extends AriaTableCellProps {
  state: TableState<T>
}
const TableCheckboxCell = <T extends object>({
  node,
  state
}: TableCheckboxCellProps<T>) => {
  const ref = React.useRef<HTMLTableCellElement | null>(null)
  const { gridCellProps } = useTableCell({ node }, state, ref)
  const { checkboxProps } = useTableSelectionCheckbox(
    { key: node.parentKey as Key },
    state
  )

  return (
    <td {...gridCellProps} ref={ref}>
      <Checkbox {...checkboxProps} />
    </td>
  )
}

export { TableCheckboxCell }
