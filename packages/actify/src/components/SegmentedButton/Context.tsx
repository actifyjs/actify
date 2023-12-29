import { useState, createContext, useContext } from 'react'

export type ContextProps = {
  multiple?: boolean
  activeIndex?: number[]
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
  const [activeIndex, setActiveIndex] = useState<number[]>([])

  const defaultMutiple = initialProps.multiple ?? false
  const [multiple, setMutiple] = useState(defaultMutiple)
  return (
    <SegmentedButtonContext.Provider
      value={{ multiple, activeIndex, setMutiple, setActiveIndex }}
    >
      {children}
    </SegmentedButtonContext.Provider>
  )
}
