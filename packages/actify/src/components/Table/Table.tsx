'use client'

import { AriaTableProps, useTable } from 'react-aria'
import { SelectionBehavior, useTableState } from 'react-stately'

import { Pagination, type PaginationProps } from '../Pagination'
import React from 'react'
import { TableCell } from './TableCell'
import { TableCheckboxCell } from './TableCheckboxCell'
import { TableColumnHeader } from './TableColumnHeader'
import { TableHeaderRow } from './TableHeaderRow'
import type { TableProps } from '@react-types/table'
import { TableRow } from './TableRow'
import { TableRowGroup } from './TableRowGroup'
import { TableSelectAllCell } from './TableSelectAllCell'
import styles from './table.module.css'

interface TableComponentProps<T> extends AriaTableProps, TableProps<T> {
  children: any
  paginator?: PaginationProps
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

  const { collection } = state
  const ref = React.useRef<HTMLTableElement | null>(null)
  const { gridProps } = useTable(props, state, ref)

  // paginator
  const pageSizes = paginator?.pageSizes ?? [5, 10, 20]
  const [currentPage, setCurrentPage] = React.useState(1)
  const [selectedPageSize, setSelectedPageSize] = React.useState(pageSizes[0])

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  React.useEffect(() => {
    const totalPages = Math.ceil(collection.size / selectedPageSize)
    if (totalPages < currentPage) {
      setCurrentPage(1)
    }
  }, [currentPage, selectedPageSize])

  const paginationProps = React.useMemo(() => {
    const totalPages = Math.ceil(collection.size / selectedPageSize)
    return {
      pageSizes,
      currentPage,
      totalPages,
      selectedPageSize,
      setSelectedPageSize
    }
  }, [
    pageSizes,
    currentPage,
    collection,
    selectedPageSize,
    setSelectedPageSize
  ])

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
                    node={column}
                    state={state}
                  />
                ) : (
                  <TableColumnHeader
                    key={column.key}
                    node={column}
                    state={state}
                  />
                )
              )}
            </TableHeaderRow>
          ))}
        </TableRowGroup>
        <TableRowGroup type="tbody">
          {[...collection.body.childNodes]
            .slice(
              selectedPageSize * (currentPage - 1),
              currentPage * selectedPageSize
            )
            .map((row) => (
              <TableRow node={row} key={row.key} state={state}>
                {[...row.childNodes].map((cell) =>
                  cell.props.isSelectionCell ? (
                    <TableCheckboxCell
                      key={cell.key}
                      node={cell}
                      state={state}
                    />
                  ) : (
                    <TableCell key={cell.key} node={cell} state={state} />
                  )
                )}
              </TableRow>
            ))}
        </TableRowGroup>
      </table>
      {paginator && <Pagination {...{ onPageChange, ...paginationProps }} />}
    </>
  )
}

Table.displayName = 'Actify.Table'
export { Table }
