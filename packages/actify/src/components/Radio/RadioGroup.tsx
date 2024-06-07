import { RadioContextProps, RadioContextProvider } from './RadioGroupContext'

import React from 'react'

interface RadioGroupProps extends RadioContextProps {
  children?: React.ReactNode
}
const RadioGroup = ({ children, ...rest }: RadioGroupProps) => {
  return <RadioContextProvider {...rest}>{children}</RadioContextProvider>
}
export { RadioGroup }
