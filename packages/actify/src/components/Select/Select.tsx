'use client'

import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  FieldError,
  SelectValue,
  ValidationResult
} from 'react-aria-components'

import { FilledField } from './FilledField'
import { Icon } from '../Icon'
import { ListBox } from '../ListBox'
import { OutlinedField } from './OutlinedField'
import { Popover } from '../Popover/Popover'
import React from 'react'
import { Text } from '../Text'
import clsx from 'clsx'
import styles from './select.module.css'
import { useResizeObserver } from '../../hooks'
import { useSelect } from 'react-aria'
import { useSelectState } from 'react-stately'

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)

  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  variant?: 'filled' | 'outlined'
}

const Select = <T extends object>({
  items,
  label,
  children,
  placeholder,
  description,
  errorMessage,
  variant = 'filled',
  ...props
}: SelectProps<T>) => {
  const ref = React.useRef<HTMLButtonElement | null>(null)
  const state = useSelectState(props)
  const { triggerProps } = useSelect(props, state, ref)

  let Tag = FilledField
  if (variant == 'filled') {
    Tag = FilledField
  }
  if (variant == 'outlined') {
    Tag = OutlinedField
  }

  const referenceWidth = useResizeObserver(ref as React.RefObject<HTMLElement>)

  return (
    <AriaSelect
      {...props}
      style={props.style}
      className={clsx(styles['select'], props.className)}
    >
      <Tag ref={ref} {...triggerProps}>
        <SelectValue>
          {({ defaultChildren, isPlaceholder }) => {
            return isPlaceholder ? <>{label || placeholder}</> : defaultChildren
          }}
        </SelectValue>
        <Icon className={styles['trailing-icon']}>Arrow_Drop_Down</Icon>
      </Tag>

      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>

      <Popover referenceWidth={referenceWidth}>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  )
}

Select.displayName = 'Actify.Select'

export { Select }
