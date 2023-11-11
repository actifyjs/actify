import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { FilledTextField } from './FilledTextField'
import { OutlinedTextField } from './OutlinedTextField'

/**
 * @types React.ForwardRefRenderFunction<HTMLInputElement, TextFieldPropTypes>
 */
const TextFieldRoot = forwardRef((props, ref) => {
  const { variant, ...rest } = props
  return (
    <>
      {variant === 'filled' && <FilledTextField ref={ref} {...rest} />}
      {variant === 'outlined' && <OutlinedTextField ref={ref} {...rest} />}
    </>
  )
})

TextFieldRoot.propTypes = {
  color: PropTypes.string,
  prefixText: PropTypes.string,
  suffixText: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

TextFieldRoot.defaultProps = {
  variant: 'filled'
}

const LeadingIcon = ({ children }) => {
  return (
    <div className="[margin-inline-end:4px] min-w-[48px] flex h-full relative items-center justify-center">
      {children}
    </div>
  )
}

const TrailingIcon = ({ children }) => {
  return (
    <div className="[margin-inline-start:4px] min-w-[48px] flex h-full relative items-center justify-center">
      {children}
    </div>
  )
}

const TextFieldPropTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  prefixText: PropTypes.string,
  suffixText: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'error'])
}

TextFieldRoot.propTypes = TextFieldPropTypes

TextFieldRoot.displayName = 'Actify.TextField'

export const TextField = Object.assign(TextFieldRoot, {
  LeadingIcon,
  TrailingIcon
})
