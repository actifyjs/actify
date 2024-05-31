import './styles/field.css'
import './styles/active-indicator.css'
import './styles/background.css'
import './styles/filled.css'
import './styles/input-wrapper.css'
import './styles/label-wrapper.css'
import './styles/label.css'
import './styles/outline.css'
import './styles/outlined.css'
import './styles/state-layer.css'
import './styles/supporting-text.css'

import { SupportingText, SupportingTextProps } from './SupportingText'
import { cubicBezier, motion } from 'framer-motion'

import React from 'react'
import clsx from 'clsx'

export interface FieldProps extends SupportingTextProps {
  label?: string

  focused?: boolean
  populated?: boolean
  required?: boolean
  disabled?: boolean
  resizable?: boolean

  className?: string | undefined
  children?: React.ReactNode
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode

  renderBackground?: () => JSX.Element
  renderIndicator?: (focused: boolean) => JSX.Element
  renderOutline?: (floatingLabel: JSX.Element | '') => JSX.Element
}
const Field = (props: FieldProps) => {
  const {
    disabled,
    className,
    label = '',
    max,
    count,
    focused = false,
    populated = false,
    required = false,
    children,
    leadingIcon,
    trailingIcon,
    error,
    errorText,
    supportingText,
    renderOutline,
    renderIndicator,
    renderBackground
  } = props

  const layoutId = React.useId()

  const renderLabel = (isFloating: boolean) => {
    if (!label) {
      return ''
    }

    let visible: boolean
    if (isFloating) {
      visible = focused || populated
    } else {
      visible = !focused && !populated
    }

    // Add '*' if a label is present and the field is required
    const labelText = `${label}${required ? '*' : ''}`

    return visible ? (
      <motion.span
        layoutId={layoutId}
        transition={{
          duration: 0.15,
          easings: [cubicBezier(0.2, 0, 0, 1)]
        }}
        aria-hidden={!visible}
        className={`a-label ${isFloating ? 'floating' : 'resting'} ${visible ? '' : 'opacity-0'}`}
      >
        {labelText}
      </motion.span>
    ) : (
      ''
    )
  }

  const floatingLabel = renderLabel(true)
  const restingLabel = renderLabel(false)

  const outline = renderOutline?.(floatingLabel)

  const classes = clsx('a-field', {
    error,
    focused,
    disabled,
    populated,
    'no-label': !label,
    'with-start': !!leadingIcon,
    'with-end': !!trailingIcon
  })

  return (
    <div className={classes}>
      <div className={'a-container-overflow ' + className}>
        {renderBackground?.()}
        {renderIndicator?.(focused)}
        {outline}
        <div className="a-container">
          <div className="a-start">{leadingIcon}</div>
          <div className="a-middle">
            <div className="a-label-wrapper">
              {restingLabel}
              {outline ? '' : floatingLabel}
            </div>
            <div className="a-content">{children}</div>
          </div>
          <div className="a-end">{trailingIcon}</div>
        </div>
      </div>
      <SupportingText
        max={max}
        count={count}
        error={error}
        errorText={errorText}
        supportingText={supportingText}
      />
    </div>
  )
}

export { Field }
