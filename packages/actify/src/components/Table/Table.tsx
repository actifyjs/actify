'use client'
import React, { forwardRef, Children, ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { Thead } from './Thead'
import { Tbody } from './Tbody'
import { Th } from './Th'
import { Tr } from './Tr'
import { Td } from './Td'

import { Delete, Pencil } from 'lucide-react'
import { IconButton } from './../Button/IconButton'

const variants = tv({
  base: 'w-full text-sm text-left rtl:text-right rounded-xl overflow-hidden bg-surface'
})

type Headers = Record<string, any>[]
type Items = Record<string, any>[]
interface TableProps extends ComponentProps<'table'> {
  headers: Headers
  items: Items
  actions?: boolean
  onItemEdit?: (item: any) => void
  onItemDelete?: (item: any) => void
  children?: React.JSX.Element | React.JSX.Element[]
}
const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const {
    style,
    className,
    headers,
    items,
    actions,
    onItemEdit,
    onItemDelete,
    children,
    ...rest
  } = props

  const thead = Children.map(children, (child) =>
    child?.type?.displayName === 'Thead' ? child : null
  )
  const tbody = Children.map(children, (child) =>
    child?.type?.displayName === 'Tbody' ? child : null
  )

  const hasThead = thead ? thead.length > 0 : false
  const hasToby = tbody ? tbody.length > 0 : false

  return (
    <table ref={ref} {...rest} className={variants({ className })}>
      {hasThead ? (
        thead
      ) : (
        <Thead>
          <Tr className="h-11">
            {headers?.map((head) => <Th key={head.value}>{head.text}</Th>)}

            {actions && <Th>Actions</Th>}
          </Tr>
        </Thead>
      )}

      {hasToby ? (
        tbody
      ) : (
        <Tbody>
          {items?.map((item, index) => (
            <Tr
              key={index}
              className="bg-surface border-b hover:bg-inverse-surface/10"
            >
              {headers.map(({ value }) => (
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
                    <Delete />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => onItemEdit?.(item)}
                  >
                    <Pencil />
                  </IconButton>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      )}
    </table>
  )
})

Table.displayName = 'Actify.Table'

export default Object.assign(Table, {
  Thead,
  Tbody,
  Th,
  Tr,
  Td
})
