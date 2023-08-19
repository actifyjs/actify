import React from 'react'

const defaultValue = {
  current: 0,
  autoPlay: false,
  interval: 3000,
  infinite: true
}

const CarouselContext = React.createContext(defaultValue)

export function useCarousel() {
  return React.useContext(CarouselContext)
}

export function CarouselProvider(props) {
  const { current, autoPlay, interval, infinite, children } = props
  const [carousel, setCarousel] = React.useState({
    current: current || defaultValue.current,
    autoPlay: autoPlay || defaultValue.autoPlay,
    interval: interval || defaultValue.interval,
    infinite: infinite || defaultValue.infinite
  })
  return <CarouselContext.Provider value={{ carousel, setCarousel }}>{children}</CarouselContext.Provider>
}
