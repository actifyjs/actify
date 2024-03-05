import React, { useState, useMemo, createContext, useContext } from 'react'

export interface ChipProps extends React.PropsWithChildren {
  // if there is a selected value, it means a controlled component, need onChange handler
  selected?: number[]
  defaultSelected?: number[]
  onChange?: (value: number[] | []) => void
}

const ChipContext = createContext<ChipProps>({})

interface ChipProviderProps extends React.PropsWithChildren<ChipProps> {}

export const ChipProvider = (props: ChipProviderProps) => {
  const { selected, defaultSelected, onChange, children } = props

  const isControlled = typeof selected != 'undefined'
  const hasDefaultSelected = typeof defaultSelected != 'undefined'
  const [internalSelected, setInternalSelected] = useState(
    hasDefaultSelected ? defaultSelected : []
  )
  const chipSelected = isControlled ? selected : internalSelected

  const handleChange = (event: any) => {
    onChange?.(event)
    if (!isControlled) {
      setInternalSelected(event)
    }
  }

  return (
    <ChipContext.Provider
      value={{
        selected: chipSelected,
        onChange: handleChange
      }}
    >
      {children}
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
