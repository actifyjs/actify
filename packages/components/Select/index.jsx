import React, { forwardRef, Children } from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-tailwindcss-select'

const SelectRoot = forwardRef((props, ref) => {
  const { children, multiple, ...rest } = props

  const options = Children.toArray(children).map((child) => ({
    value: child.props.value ?? child.props.children,
    label: child.props.children
  }))

  return (
    <ReactSelect ref={ref} {...rest} options={options} isMultiple={multiple} />
  )
})

SelectRoot.displayName = 'Actify.Select'

SelectRoot.propTypes = {
  clearValue: PropTypes.func,
  getStyles: PropTypes.func,
  getValue: PropTypes.func,
  hasValue: PropTypes.bool,
  multiple: PropTypes.bool,
  options: PropTypes.any,
  selectOption: PropTypes.func,
  selectProps: PropTypes.any,
  setValue: PropTypes.func,
  emotion: PropTypes.any
}

SelectRoot.defaultProps = {}

export const Select = Object.assign(SelectRoot, {
  Option: () => <></>
})
