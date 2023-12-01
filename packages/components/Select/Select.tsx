'use client'
import React, { Children } from 'react'
import ReactSelect from 'react-tailwindcss-select'

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  multiple?: boolean
}

const Select: React.FC<SelectProps> = (props) => {
  const { children, multiple, ...rest } = props

  const options = Children.toArray(children).map((child) => ({
    // @ts-ignore
    value: child.props.value ?? child.props.children,
    // @ts-ignore
    label: child.props.children
  }))

  // @ts-ignore
  return <ReactSelect {...rest} options={options} isMultiple={multiple} />
}

Select.displayName = 'Actify.Select'

export default Object.assign(Select, {
  Option: () => <></>
})
