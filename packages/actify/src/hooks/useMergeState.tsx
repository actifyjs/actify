import { useState, ChangeEvent } from 'react'

// This hook is for controlled and uncontrolled component
export default function useMergeState(
  initailValue?: string,
  value?: string,
  defaultValue?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
) {
  // A component can be considered controlled when its value prop is
  // not undefined.
  const isControlled = typeof value != 'undefined'
  // When a component is not controlled, it can have a defaultValue.
  const hasDefaultValue = typeof defaultValue != 'undefined'
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  const [internalValue, setInternalValue] = useState(
    hasDefaultValue ? defaultValue : initailValue
  )

  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  const inputValue = isControlled ? value : internalValue
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // When the user types, we will call props.onChange if it exists.
    // We do this even if there is no props.value (and the component
    // is uncontrolled.)
    onChange?.(event)

    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalValue(event.target.value)
    }
  }
  return [inputValue, handleChange]
}
