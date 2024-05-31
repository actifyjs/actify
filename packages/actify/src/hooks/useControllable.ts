'use client'

import { useCallback, useEffect, useState } from 'react'

type UseControllableProps<T> = {
  value?: T
  onChange?: (value: T) => void
  defaultValue?: T
}

const useControllable = <T>({
  value,
  onChange,
  defaultValue
}: UseControllableProps<T>): [
  T,
  (event: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [internalValue, setInternalValue] = useState<T>(defaultValue!)

  const isControlled = value !== undefined

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value!)
    }
  }, [value, isControlled])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value as unknown as T
      if (isControlled) {
        onChange?.(newValue)
      } else {
        setInternalValue(newValue)
      }
    },
    [isControlled, onChange]
  )

  return [isControlled ? value! : internalValue, handleChange] as const
}

export { useControllable }
