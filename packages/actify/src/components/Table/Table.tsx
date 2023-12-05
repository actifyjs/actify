'use client'
import React, { forwardRef, Children } from 'react'
import { tv } from 'tailwind-variants'
import { Thead } from './Thead'
import { Tbody } from './Tbody'
import { Th } from './Th'
import { Tr } from './Tr'
import { Td } from './Td'

import { Icon } from '@actify/Icon'
import { IconButton } from '@actify/Button/IconButton'

const variants = tv({
  base: 'w-full text-sm text-left rtl:text-right rounded-xl overflow-hidden bg-surface'
})

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  headers: React.ReactNode[]
  items: React.ReactNode[]
  actions?: React.ReactNode[]
  onItemEdit?: (item: any) => void
  onItemDelete?: (item: any) => void
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
    // @ts-ignore
    child.type?.displayName === 'Thead' ? child : null
  )
  const tbody = Children.map(children, (child) =>
    // @ts-ignore
    child.type?.displayName === 'Tbody' ? child : null
  )
  const hasThead = thead?.length > 0
  const hasToby = tbody?.length > 0

  return (
    <table ref={ref} {...rest} className={variants({ className })}>
      {hasThead ? (
        thead
      ) : (
        <Thead>
          <Tr className="h-11">
            {/* @ts-ignore */}
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
              {/* @ts-ignore */}
              {headers.map(({ value }) => (
                <Td key={value}>
                  {/* @ts-ignore */}
                  <p variant="small" color="blue-gray" className="font-normal">
                    {item[value]}
                  </p>
                </Td>
              ))}
              {actions && (
                <Td>
                  <IconButton
                    color="error"
                    onClick={() => onItemDelete?.(item)}
                  >
                    <Icon name="delete" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => onItemEdit?.(item)}
                  >
                    <Icon name="pencil" />
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
