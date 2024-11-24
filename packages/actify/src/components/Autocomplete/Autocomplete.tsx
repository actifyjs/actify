import { AriaComboBoxProps, useComboBox, useFilter } from 'react-aria'
import { ComboBoxStateOptions, useComboBoxState } from 'react-stately'

import { Icon } from '../Icon'
import { ListBox } from '../ListBox'
import { Popover } from '../Popover'
import React from 'react'
import { TextField } from '../TextFields'
import styles from './autocomplete.module.css'
import { useResizeObserver } from './../../hooks'

interface AutocompleteProps<T>
  extends Omit<AriaComboBoxProps<T>, 'children'>,
    ComboBoxStateOptions<T> {
  variant?: 'filled' | 'outlined'
}

const Autocomplete = <T extends object>(props: AutocompleteProps<T>) => {
  // Setup filter function and state
  const { contains } = useFilter({ sensitivity: 'base' })
  const state = useComboBoxState({ ...props, defaultFilter: contains })

  // Setup refs and get props for child elements.
  const ref = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const listBoxRef = React.useRef(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)

  const referenceWidth = useResizeObserver(ref as React.RefObject<HTMLElement>)

  const { inputProps, listBoxProps } = useComboBox(
    {
      ...props,
      inputRef,
      listBoxRef,
      popoverRef
    },
    state
  )

  return (
    <div className={styles['autocomplete']} ref={ref}>
      <TextField
        label={props.label}
        inputRef={inputRef}
        variant={props.variant}
        inputProps={inputProps}
        onFocus={() => state.setOpen(true)}
        trailingIcon={
          <Icon
            style={{ cursor: 'pointer' }}
            onClick={() => {
              state.setOpen(!state.isOpen)
              // If the input is focused, move the cursor to the end
              inputRef.current?.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
              )
            }}
          >
            Arrow_Drop_Down
          </Icon>
        }
      />

      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={ref}
          popoverRef={popoverRef}
          referenceWidth={referenceWidth}
        >
          <ListBox
            state={state}
            listBoxRef={listBoxRef}
            listBoxProps={listBoxProps}
          />
        </Popover>
      )}
    </div>
  )
}

Autocomplete.displayName = 'Actify.Autocomplete'
export { Autocomplete }
