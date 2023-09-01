import React from 'react'
import { createStore, useStore } from 'zustand'

const defaultValue = {
  total: 0,
  current: 0,
  autoPlay: false,
  interval: 3000,
  infinite: false,
  page: [0, 0]
}

const CarouselContext = React.createContext(defaultValue)

export function useCarousel() {
  const store = React.useContext(CarouselContext)
  if (!store) {
    throw new Error('Missing CarouselContext.Provider in the tree')
  }
  return useStore(store)
}

export function CarouselProvider(props) {
  const { children, ...rest } = props
  const useCreateStore = createStore()((set) => ({
    page: defaultValue.page,
    total: rest.total ?? defaultValue.total,
    current: rest.current ?? defaultValue.current,
    autoPlay: rest.autoPlay ?? defaultValue.autoPlay,
    interval: rest.interval ?? defaultValue.interval,
    infinite: rest.infinite ?? defaultValue.infinite,
    setPage: (page) => set({ page }),
    setTotal: (total) => set({ total }),
    setCurrent: (current) => set({ current }),
    setAutoPlay: (autoPlay) => set({ autoPlay }),
    setInterval: (interval) => set({ interval }),
    setInfinite: (infinite) => set({ infinite })
  }))

  const store = React.useRef(useCreateStore)

  return (
    <CarouselContext.Provider value={store.current}>
      {children}
    </CarouselContext.Provider>
  )
}
