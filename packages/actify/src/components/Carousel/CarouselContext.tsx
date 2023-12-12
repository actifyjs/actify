'use client'
import { createStore, useStore } from 'zustand'
import { useRef, createContext, useContext } from 'react'

interface CarouselProps {
  page?: [number, number]
  total?: number
  current?: number
  interval?: number
  control?: boolean
  autoPlay?: boolean
  infinite?: boolean
}
interface CarouselState extends CarouselProps {
  setPage: (page: [number, number]) => void
  setTotal: (total: number) => void
  setCurrent: (current: number) => void
  setInterval: (interval: number) => void
}

type CarouselStore = ReturnType<typeof createContextStore>

const CarouselContext = createContext<CarouselStore | null>(null)

export interface CarouselProviderProps
  extends React.PropsWithChildren<CarouselProps> {}

export const CarouselProvider = ({
  children,
  ...props
}: CarouselProviderProps) => {
  const storeRef = useRef<CarouselStore>()

  if (!storeRef.current) {
    storeRef.current = createContextStore(props)
  }

  return (
    <CarouselContext.Provider value={storeRef.current}>
      {children}
    </CarouselContext.Provider>
  )
}

const createContextStore = (initProps?: Partial<CarouselProps>) => {
  const DEFAULT_PROPS: CarouselProps = {
    page: [0, 0],
    total: 0,
    current: 0,
    interval: 3000,
    control: false,
    autoPlay: false,
    infinite: false
  }
  return createStore<CarouselState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setPage: (page) => set({ page }),
    setTotal: (total) => set({ total }),
    setCurrent: (current) => set({ current }),
    setInterval: (interval) => set({ interval })
  }))
}

export function useCarousel<T>(selector: (state: CarouselState) => T): T {
  const store = useContext(CarouselContext)
  if (!store) {
    throw new Error('Missing CarouselContext.Provider in the tree')
  }
  return useStore(store, selector)
}
