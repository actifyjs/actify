'use client'
import React, {
  useId,
  Children,
  useContext,
  cloneElement,
  createContext,
  isValidElement
} from 'react'
import useMergeState from '@hooks/useMergeState'

export interface RadioProps extends React.ComponentProps<'input'> {}

const RadioContext = createContext<RadioProps>({})

interface RadioProviderProps extends React.PropsWithChildren<RadioProps> {}

export const RadioProvider = ({
  name: nameAttr,
  children,
  ...props
}: RadioProviderProps) => {
  const name = nameAttr || useId()
  const [value, onChange] = useMergeState(
    props.value,
    props.defaultValue,
    props.onChange
  )

  const radioWithSameName = Children.map(children, (child) => {
    if (isValidElement(child)) {
      // @ts-expect-error
      return cloneElement(child, { name })
    }
    return child
  })

  return (
    // @ts-expect-error
    <RadioContext.Provider value={{ value, onChange }}>
      {radioWithSameName}
    </RadioContext.Provider>
  )
}

export const useRadio = () => {
  const context = useContext(RadioContext)
  if (context == null) {
    throw new Error('Radio components must be wrapped in <Radio />')
  }
  return context
}
