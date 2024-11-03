import {
  AriaTableCellProps,
  VisuallyHidden,
  useTableColumnHeader,
  useTableSelectAllCheckbox
} from 'react-aria'

import { Checkbox } from '../Checkbox'
import React from 'react'
import { TableState } from 'react-stately'

interface TableSelectAllCellProps<T> extends AriaTableCellProps {
  state: TableState<T>
}
const TableSelectAllCell = <T extends object>({
  node,
  state
}: TableSelectAllCellProps<T>) => {
  const ref = React.useRef<HTMLTableCellElement | null>(null)
  const { columnHeaderProps } = useTableColumnHeader({ node }, state, ref)
  const { checkboxProps } = useTableSelectAllCheckbox(state)

  return (
    <th {...columnHeaderProps} ref={ref}>
      {state.selectionManager.selectionMode === 'single' ? (
        <VisuallyHidden>{checkboxProps['aria-label']}</VisuallyHidden>
      ) : (
        <Checkbox {...checkboxProps} />
      )}
    </th>
  )
}

export { TableSelectAllCell }
