import useMergeState from '@hooks/useMergeState'
import React, { createContext, useContext } from 'react'

export interface ChipProps
  extends Pick<
    React.ComponentProps<'input'>,
    'value' | 'defaultValue' | 'onChange' | 'children'
  > {}

const ChipContext = createContext<ChipProps>({})

interface ChipProviderProps extends React.PropsWithChildren<ChipProps> {}

export const ChipProvider = (props: ChipProviderProps) => {
  const [value, onChange] = useMergeState(
    props.value,
    props.defaultValue,
    props.onChange
  )

  return (
    <ChipContext.Provider value={{ value, onChange }}>
      {props.children}
    </ChipContext.Provider>
  )
}

export const useChip = () => {
  const context = useContext(ChipContext)
  if (context == null) {
    throw new Error('Chip components must be wrapped in <Chip />')
  }
  return context
}
