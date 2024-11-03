import React from 'react'
import { useTableRowGroup } from 'react-aria'

type TableRowGroupProps = {
  className?: string
  style?: React.CSSProperties
  type?: keyof HTMLElementTagNameMap
  children: React.ReactNode
}
const TableRowGroup = ({ type = 'thead', children }: TableRowGroupProps) => {
  const { rowGroupProps } = useTableRowGroup()
  const Element = type
  return (
    <Element
      {...rowGroupProps}
      style={{
        borderBottom:
          Element === 'thead'
            ? '2px solid rgb(var(--md-sys-color-outline-variant))'
            : ''
      }}
    >
      {children}
    </Element>
  )
}

export { TableRowGroup }
