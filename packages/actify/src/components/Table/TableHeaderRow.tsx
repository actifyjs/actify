import { GridNode } from '@react-types/grid'
import React from 'react'
import { TableState } from 'react-stately'
import { useTableHeaderRow } from 'react-aria'

interface TableHeaderRowProps<T> extends React.ComponentProps<'tr'> {
  item: GridNode<T>
  state: TableState<T>
}

const TableHeaderRow = <T extends object>({
  item,
  state,
  children
}: TableHeaderRowProps<T>) => {
  const ref = React.useRef<HTMLTableRowElement | null>(null)
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref)

  return (
    <tr {...rowProps} ref={ref}>
      {children}
    </tr>
  )
}

export { TableHeaderRow }
