'use client'
import React, { useRef, createContext, useContext } from 'react'
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

const CarouselContext = createContext(defaultValue)

export const useCarousel = () => {
  const store = useContext(CarouselContext)
  if (!store) {
    throw new Error('Missing CarouselContext.Provider in the tree')
  }
  // @ts-ignore
  return useStore(store)
}

export const CarouselProvider = (props) => {
  const { children, ...rest } = props
  const useCreateStore = createStore()((set) => ({
    page: [rest.current ?? defaultValue.current, 0],
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

  const store = useRef(useCreateStore)

  return (
    // @ts-ignore
    <CarouselContext.Provider value={store.current}>
      {children}
    </CarouselContext.Provider>
  )
}
