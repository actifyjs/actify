import { SupportingText, SupportingTextProps } from './SupportingText'
import { cubicBezier, motion } from 'framer-motion'

import { LabelAria } from 'react-aria'
import React from 'react'
import clsx from 'clsx'
import styles from './styles/field.module.css'

export interface FieldProps extends SupportingTextProps {
  label?: React.ReactNode

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
    renderBackground,
    ...rest
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
        // @ts-ignore
        className={clsx(
          styles['label'],
          !visible && styles['visible'],
          isFloating ? styles['floating'] : styles['resting']
        )}
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

  const classes = clsx(
    styles['field'],
    error && styles['error'],
    focused && styles['focused'],
    disabled && styles['disabled'],
    populated && styles['populated'],
    !label && styles['no-label'],
    !!leadingIcon && styles['with-start'],
    !!trailingIcon && styles['with-end']
  )

  return (
    <div className={classes} {...rest}>
      <div className={clsx(styles['container-overflow'], className)}>
        {renderBackground?.()}
        {renderIndicator?.(focused)}
        {outline}
        <div className={styles['container']}>
          <div className={styles['start']}>{leadingIcon}</div>
          <div className={styles['middle']}>
            <span className={styles['label-wrapper']}>
              {restingLabel}
              {outline ? '' : floatingLabel}
            </span>
            <div className={styles['content']}>{children}</div>
          </div>
          <div className={styles['end']}>{trailingIcon}</div>
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
