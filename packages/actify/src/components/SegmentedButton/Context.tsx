import { useState, useEffect, createContext, useContext } from 'react'

export type ContextProps = {
  multiple?: boolean
  activeIndex?: number[]
  onChange?: (_: number[]) => void
  setMutiple?: (value: boolean) => void
  setActiveIndex?: (value: number[]) => void
}
const SegmentedButtonContext = createContext<ContextProps | null>(null)

export const useSegmentedButtonContext = () => {
  const context = useContext(SegmentedButtonContext)
  if (!context) {
    throw new Error(
      'useSegmentedButtonContext must be used within a SegmentedButtonProvider'
    )
  }
  return context
}

interface ProviderProps extends React.PropsWithChildren<ContextProps> {}

export const SegmentedButtonProvider = ({
  children,
  ...initialProps
}: ProviderProps) => {
  const defaultActiveIndex = initialProps.activeIndex ?? []
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)

  const defaultMutiple = initialProps.multiple ?? false
  const [multiple, setMutiple] = useState(defaultMutiple)

  useEffect(() => {
    initialProps.onChange?.(activeIndex)
  }, [activeIndex])

  return (
    <SegmentedButtonContext.Provider
      value={{ multiple, activeIndex, setMutiple, setActiveIndex }}
    >
      {children}
    </SegmentedButtonContext.Provider>
  )
}
