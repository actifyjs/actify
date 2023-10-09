import React from 'react'

const defaultValue = {
  current: 0,
  autoPlay: false,
  interval: 3000,
  infinite: true
}

const SwiperContext = React.createContext(defaultValue)

export function useSwiper() {
  return React.useContext(SwiperContext)
}

export function SwiperProvider(props) {
  const { current, autoPlay, interval, infinite, children } = props
  const [swiper, setSwiper] = React.useState({
    current: current || defaultValue.current,
    autoPlay: autoPlay || defaultValue.autoPlay,
    interval: interval || defaultValue.interval,
    infinite: infinite || defaultValue.infinite
  })
  return (
    <SwiperContext.Provider value={{ swiper, setSwiper }}>
      {children}
    </SwiperContext.Provider>
  )
}
