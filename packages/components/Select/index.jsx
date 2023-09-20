import React from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const SelectRoot = React.forwardRef((props, ref) => {
  const { children, multiple, ...rest } = props

  const options = React.Children.toArray(children).map((child) => ({
    value: child.props.value ?? child.props.children,
    label: child.props.children
  }))

  return (
    <ReactSelect
      ref={ref}
      {...rest}
      options={options}
      isMulti={multiple}
      components={animatedComponents}
    />
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
