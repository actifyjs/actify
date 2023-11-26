import React, { forwardRef, Children } from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { Thead } from './Thead'
import { Tbody } from './Tbody'
import { Th } from './Th'
import { Tr } from './Tr'
import { Td } from './Td'

import { IconButton, Icon } from 'actify'

const variants = tv({
  base: 'w-full text-sm text-left rtl:text-right rounded-xl overflow-hidden bg-surface'
})

/**
 * @type React.ForwardRefRenderFunction<HTMLTableElement, TablePropTypes>
 */

const TableRoot = forwardRef((props, ref) => {
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
    child.type?.displayName === 'Thead' ? child : null
  )
  const tbody = Children.map(children, (child) =>
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
            {headers?.map((head) => (
              <Th key={head.value}>{head.text}</Th>
            ))}

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

const TablePropTypes = {
  headers: PropTypes.array,
  items: PropTypes.array,
  actions: PropTypes.bool,
  onItemEdit: PropTypes.func,
  onItemDelete: PropTypes.func
}

TableRoot.propTypes = TablePropTypes

TableRoot.displayName = 'Actify.Table'

export const Table = Object.assign(TableRoot, {
  Thead,
  Tbody,
  Th,
  Tr,
  Td
})
