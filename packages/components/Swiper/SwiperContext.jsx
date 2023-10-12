import React, { createContext, useRef, useContext } from 'react'
import { createStore, useStore } from 'zustand'

const SwiperContext = createContext()

export const SwiperProvider = ({ children, ...initialProp }) => {
  const useCreateStore = createStore()((set) => ({
    count: initialProp.count ?? 0,
    current: initialProp.current ?? 0,
    autoPlay: initialProp.autoPlay ?? false,
    interval: initialProp.interval ?? 3000,
    infinite: initialProp.infinite ?? true,
    setCount: (state) => set({ count: state }),
    setCurrent: (state) => set({ current: state }),
    setAutoPlay: (state) => set({ autoPlay: state }),
    setInterval: (state) => set({ interval: state }),
    setInfinite: (state) => set({ infinite: state })
  }))

  const store = useRef(useCreateStore)

  return (
    <SwiperContext.Provider value={store.current}>
      {children}
    </SwiperContext.Provider>
  )
}

export const useSwiper = () => {
  const store = useContext(SwiperContext)
  if (!store) {
    throw new Error('Missing SwiperContext.Provider in the tree')
  }
  return useStore(store)
}
