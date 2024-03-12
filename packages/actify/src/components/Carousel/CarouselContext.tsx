import { createContext, useContext, useState } from 'react'

interface CarouselProps {
  control?: boolean
  autoPlay?: boolean
  infinite?: boolean

  page?: [number, number]
  total?: number
  current?: number
  interval?: number

  setPage?: (page: [number, number]) => void
  setTotal?: (total: number) => void
  setCurrent?: (current: number) => void
  setInterval?: (interval: number) => void
}

const CarouselContext = createContext<CarouselProps | undefined>(undefined)

export interface CarouselProviderProps
  extends React.PropsWithChildren<CarouselProps> {}

export const CarouselProvider = ({
  children,
  ...props
}: CarouselProviderProps) => {
  const {
    control = false,
    autoPlay = false,
    infinite = false,

    page = [0, 0],
    total = 0,
    current = 0,
    interval = 3000
  } = props

  const [pageValue, setPageValue] = useState(page)
  const [totalValue, setTotalValue] = useState(total)
  const [currentValue, setCurrentValue] = useState(current)
  const [intervalValue, setIntervalValue] = useState(interval)

  return (
    <CarouselContext.Provider
      value={{
        control,
        infinite,
        autoPlay,

        page: pageValue,
        total: totalValue,
        current: currentValue,
        interval: intervalValue,
        setPage: setPageValue,
        setTotal: setTotalValue,
        setCurrent: setCurrentValue,
        setInterval: setIntervalValue
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

export function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('Carousel components must be wrapped in <Carousel />')
  }
  return context
}
