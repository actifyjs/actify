import { AriaComboBoxProps, useComboBox, useFilter } from 'react-aria'
import { ComboBoxStateOptions, useComboBoxState } from 'react-stately'

import { Icon } from '../Icon'
import { ListBox } from '../ListBox'
import { Popover } from '../Popover'
import React from 'react'
import { TextField } from '../TextFields'

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
  const inputRef = React.useRef<HTMLInputElement>(null)
  const listBoxRef = React.useRef(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)

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
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <TextField
        label={props.label}
        variant={props.variant}
        inputRef={inputRef}
        inputProps={inputProps}
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
          triggerRef={inputRef}
          popoverRef={popoverRef}
          placement="bottom start"
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