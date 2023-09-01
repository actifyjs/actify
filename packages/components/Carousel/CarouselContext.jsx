import React from 'react'
import { createStore, useStore } from 'zustand'

export const defaultValue = {
  page: [0, 0],
  total: 0,
  current: 0,
  interval: 3000,

  control: false,
  autoPlay: false,
  infinite: false
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
    interval: rest.interval ?? defaultValue.interval,

    control: rest.control ?? defaultValue.control,
    autoPlay: rest.autoPlay ?? defaultValue.autoPlay,
    infinite: rest.infinite ?? defaultValue.infinite,

    setPage: (page) => set({ page }),
    setTotal: (total) => set({ total }),
    setCurrent: (current) => set({ current }),
    setInterval: (interval) => set({ interval })
  }))

  const store = React.useRef(useCreateStore)

  return (
    <CarouselContext.Provider value={store.current}>
      {children}
    </CarouselContext.Provider>
  )
}
