import { AriaSelectOptions, HiddenSelect, useSelect } from 'react-aria'
import { SelectStateOptions, useSelectState } from 'react-stately'

import { FilledField } from './FilledField'
import { Label } from '../Label/Label'
import { ListBox } from '../ListBox'
import { OutlinedField } from './OutlinedField'
import { Popover } from '../Popover/Popover'
import React from 'react'
import { TrailingIcon } from './TrailingIcon'
import clsx from 'clsx'
import styles from './select.module.css'

interface SelectProps<T> extends AriaSelectOptions<T>, SelectStateOptions<T> {
  className?: string
  style?: React.CSSProperties
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  variant?: 'filled' | 'outlined'
}

const Select = <T extends object>(props: SelectProps<T>) => {
  const state = useSelectState(props)
  const ref = React.useRef(null)

  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  )

  const { variant = 'filled' } = props
  const label = state.selectedItem
    ? state.selectedItem.rendered
    : 'Select an option'

  return (
    <div
      style={{ display: 'inline-flex', ...props.style }}
      className={clsx(styles['outlined-select'], props.className)}
    >
      {props.label && <Label {...labelProps}>{props.label}</Label>}
      <HiddenSelect
        state={state}
        triggerRef={ref}
        name={props.name}
        label={props.label}
        isDisabled={props.isDisabled}
      />

      {variant == 'filled' && (
        <FilledField ref={ref} {...triggerProps}>
          <Label
            aria-label={label?.toString()}
            {...valueProps}
            style={{ lineHeight: '24px' }}
          >
            {label}
          </Label>
          <TrailingIcon isOpen={state.isOpen} />
        </FilledField>
      )}
      {variant == 'outlined' && (
        <OutlinedField ref={ref} {...triggerProps}>
          <Label
            {...valueProps}
            aria-label={label?.toString()}
            style={{ lineHeight: '24px' }}
          >
            {label}
          </Label>
          <TrailingIcon isOpen={state.isOpen} />
        </OutlinedField>
      )}
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  )
}

Select.displayName = 'Actify.Select'

export { Select }
