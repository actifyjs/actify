import {
  VisuallyHidden,
  useTableColumnHeader,
  useTableSelectAllCheckbox
} from 'react-aria'

import { Checkbox } from '../Checkbox'
import React from 'react'

const TableSelectAllCell = ({ column, state }) => {
  let ref = React.useRef<HTMLTableCellElement | null>(null)
  let { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref)
  let { checkboxProps } = useTableSelectAllCheckbox(state)

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
