'use client'

import { createContext, useContext } from 'react'

import { useInputState } from '../../hooks'

export interface RadioContextProps {
  name?: string
  value?: string | readonly string[] | number
  defaultValue?: string | readonly string[] | number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const RadioContext = createContext<RadioContextProps | null>(null)

const RadioContextProvider = ({
  children,
  ...props
}: RadioContextProps & {
  children: React.ReactNode
}) => {
  const { value: propValue, defaultValue, onChange: onValueChange } = props
  const [value, onChange] = useInputState({
    value: propValue,
    defaultValue,
    onChange: onValueChange
  })

  return (
    <RadioContext.Provider value={{ name: props.name, value, onChange }}>
      {children}
    </RadioContext.Provider>
  )
}

const useRadioContext = () => {
  const context = useContext(RadioContext)
  if (!context) {
    throw new Error('Radio component must wrapped in RadioGroup component')
  }
  return context
}

export { useRadioContext, RadioContextProvider }
