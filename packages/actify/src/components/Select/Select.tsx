import { AriaSelectOptions, HiddenSelect, useSelect } from 'react-aria'
import { SelectStateOptions, useSelectState } from 'react-stately'

import { FilledField } from './FilledField'
import { Label } from '../Label/Label'
import { ListBox } from '../ListBox'
import { OutlinedField } from './OutlinedField'
import { Popover } from '../Popover/Popover'
import { PopoverContext } from '../Popover/PopoverContext'
import React from 'react'
import { TrailingIcon } from './TrailingIcon'
import clsx from 'clsx'
import styles from './select.module.css'
import { useResizeObserver } from '../../hooks'

interface SelectProps<T> extends AriaSelectOptions<T>, SelectStateOptions<T> {
  className?: string
  style?: React.CSSProperties
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  variant?: 'filled' | 'outlined'
}

const Select = <T extends object>(props: SelectProps<T>) => {
  const state = useSelectState(props)
  const ref = React.useRef<HTMLButtonElement>(null)

  const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref)

  const { variant = 'filled' } = props

  let Tag = FilledField
  if (variant == 'filled') {
    Tag = FilledField
  }
  if (variant == 'outlined') {
    Tag = OutlinedField
  }

  const referenceWidth = useResizeObserver(ref as React.RefObject<HTMLElement>)

  return (
    <PopoverContext.Provider value={{ state, referenceWidth }}>
      <div
        style={props.style}
        className={clsx(styles['select'], props.className)}
      >
        <HiddenSelect
          state={state}
          triggerRef={ref}
          name={props.name}
          label={props.label}
          isDisabled={props.isDisabled}
        />

        <Tag ref={ref} {...triggerProps}>
          <Label {...valueProps} style={{ lineHeight: '24px' }}>
            {state.selectedItem ? state.selectedItem.rendered : props.label}
          </Label>
          <TrailingIcon isOpen={state.isOpen} />
        </Tag>

        {state.isOpen && (
          <Popover offset={2} triggerRef={ref} placement="bottom start">
            <ListBox {...menuProps} state={state} />
          </Popover>
        )}
      </div>
    </PopoverContext.Provider>
  )
}

Select.displayName = 'Actify.Select'

export { Select }
