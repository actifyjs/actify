'use client'

import React, { Children, ComponentProps, useState } from 'react'

import { Elevation } from '../Elevation'
import { Icon } from './../Icon'
import { IconButton } from './../Button/IconButton'
import { Tbody } from './Tbody'
import { Td } from './Td'
import { Th } from './Th'
import { Thead } from './Thead'
import { Tr } from './Tr'
import { tv } from 'tailwind-variants'
import _ from 'lodash'
import { Menu, MenuItem } from '../Menus'
import { Button } from '../Button'
import { Tfoot } from './Tfoot'

const root = tv({
  base: [
    'w-full',
    'text-sm',
    'text-left',
    'rtl:text-right',
    'bg-surface',
    'overflow-hidden'
  ]
})

type Headers = Record<string, any>[]
type Items = Record<string, any>[]
interface InitialPaginationState {
  page: number
  pageSize: number
}
interface TableProps extends ComponentProps<'table'> {
  headers?: Headers
  items?: Items
  actions?: boolean
  onItemEdit?: (item: any) => void
  onItemDelete?: (item: any) => void
  pageSizes?: number[],
  initialPaginationState?: InitialPaginationState,
  children?: React.JSX.Element | React.JSX.Element[]
}
const Table = (props: TableProps) => {
  const {
    className,
    headers,
    items,
    actions,
    onItemEdit,
    onItemDelete,
    pageSizes,
    initialPaginationState,
    children,
    ...rest
  } = props
  const [selectedPageSize, setSelectedPageSize] = useState<number>(initialPaginationState?.pageSize ?? pageSizes?.[0] ?? 10)
  const [pageSizeOpen, setPageSizeOpen] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(initialPaginationState?.page ?? 0)

  const thead = Children.map(children, (child) =>
    child?.type?.displayName === 'Thead' ? child : null
  )
  const tbody = Children.map(children, (child) =>
    child?.type?.displayName === 'Tbody' ? child : null
  )
  const tfoot = Children.map(children, (child) =>
    child?.type?.displayName === 'Tfoot' ? child : null
  )

  const hasThead = thead ? thead.length > 0 : false
  const hasToby = tbody ? tbody.length > 0 : false
  const hasTfoot = tfoot ? tfoot.length > 0 : false

  const paginatedGroups = pageSizes ? _.chunk(items, selectedPageSize): [items]

  return (
    <div className="relative ">
      <Elevation
        style={
          {
            '--md-elevation-level': 4
          } as React.CSSProperties
        }
      />
      <table {...rest} className={root({ className })}>
        {hasThead ? (
          thead
        ) : (
          <Thead>
            <Tr className="h-14">
              {headers?.map((head) => <Th key={head.value}>{head.text}</Th>)}

              {actions && <Th>Actions</Th>}
            </Tr>
          </Thead>
        )}

        {hasToby ? (
          tbody
        ) : (
          <Tbody>
            {paginatedGroups[currentPage]?.map((item, index) => (
              <Tr
                key={index}
                className="h-[52px] bg-surface border-t border-outline-variant hover:bg-inverse-surface/10"
              >
                {headers?.map(({ value }) => (
                  <Td key={value}>
                    <p className="font-normal">{item[value]}</p>
                  </Td>
                ))}
                {actions && (
                  <Td>
                    <IconButton
                      color="error"
                      onClick={() => onItemDelete?.(item)}
                    >
                      <Icon>delete</Icon>
                    </IconButton>
                    <IconButton
                      color="primary"
                      onClick={() => onItemEdit?.(item)}
                    >
                      <Icon>edit</Icon>
                    </IconButton>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        )}
        {hasTfoot ? (
            tfoot
          ): <></>}
      </table>
      {pageSizes ? (
          <div className="w-full flex flex-row px-3 py-1 bg-surface border-t border-outline-variant">
            <div className="ml-auto flex flex-row items-center">
              <p className="text-sm mr-2">Rows per page:</p>
              <Button
                onClick={() => setPageSizeOpen(!pageSizeOpen)}
                className="mr-2"
                variant="text"
                color="secondary"
              >
                <div className="flex flex-row items-center">
                  <p className="text-md mr-2">{selectedPageSize}</p>
                  <Icon>arrow_drop_down</Icon>
                </div>
              </Button>
              <Menu open={pageSizeOpen} setOpen={setPageSizeOpen} className="absolute">
                {pageSizes?.map((size) => (
                  <MenuItem key={size} onClick={(e) => {
                    setSelectedPageSize(size)
                    setCurrentPage(0)
                  }}>{size}</MenuItem>
                ))}
              </Menu>
              <span className="text-sm mr-4">
                {currentPage * selectedPageSize + 1}-{Math.min((currentPage + 1) * selectedPageSize, items?.length ?? 0)} of {items?.length ?? 0}
              </span>
              <IconButton
                className="mr-1"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <Icon>chevron_left</Icon>
              </IconButton>
              <IconButton
                disabled={currentPage >= paginatedGroups.length - 1}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <Icon>chevron_right</Icon>
              </IconButton>
            </div>
          </div>
        ): <></>}
    </div>
  )
}

Table.displayName = 'Actify.Table'

export default Object.assign(Table, {
  Thead,
  Tbody,
  Tfoot,
  Th,
  Tr,
  Td
})
