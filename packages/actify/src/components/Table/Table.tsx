'use client'

import { AriaTableProps, useTable } from 'react-aria'
import { SelectionBehavior, useTableState } from 'react-stately'

import { TableCell } from './TableCell'
import { TableCheckboxCell } from './TableCheckboxCell'
import { TableColumnHeader } from './TableColumnHeader'
import { TableHeaderRow } from './TableHeaderRow'
import type { TableProps } from '@react-types/table'
import { TableRow } from './TableRow'
import { TableRowGroup } from './TableRowGroup'
import { TableSelectAllCell } from './TableSelectAllCell'
import styles from './table.module.css'
import { useRef } from 'react'

interface TableComponentProps<T> extends AriaTableProps, TableProps<T> {
  children: any
  paginator?: React.ReactNode
  style?: React.CSSProperties
  selectionBehavior?: SelectionBehavior
}
const Table = <T extends object>(props: TableComponentProps<T>) => {
  const { paginator, selectionMode, selectionBehavior } = props
  const state = useTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === 'multiple' && selectionBehavior !== 'replace'
  })

  const ref = useRef<HTMLTableElement | null>(null)
  const { collection } = state
  const { gridProps } = useTable(props, state, ref)

  return (
    <>
      <table {...gridProps} ref={ref} className={styles['table']}>
        <TableRowGroup type="thead">
          {collection.headerRows.map((headerRow) => (
            <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
              {[...headerRow.childNodes].map((column) =>
                column.props.isSelectionCell ? (
                  <TableSelectAllCell
                    key={column.key}
                    column={column}
                    state={state}
                  />
                ) : (
                  <TableColumnHeader
                    key={column.key}
                    column={column}
                    state={state}
                  />
                )
              )}
            </TableHeaderRow>
          ))}
        </TableRowGroup>
        <TableRowGroup type="tbody">
          {[...collection.body.childNodes].map((row) => (
            <TableRow node={row} key={row.key} state={state}>
              {[...row.childNodes].map((cell) =>
                cell.props.isSelectionCell ? (
                  <TableCheckboxCell key={cell.key} node={cell} state={state} />
                ) : (
                  <TableCell key={cell.key} node={cell} state={state} />
                )
              )}
            </TableRow>
          ))}
        </TableRowGroup>
      </table>
      {paginator}
    </>
  )
}

Table.displayName = 'Actify.Table'
export { Table }
