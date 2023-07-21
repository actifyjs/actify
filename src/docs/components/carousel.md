---
title: Carousel
---

# Carousel

## Carousels show a collection of items that can be scrolled on and off the screen

```jsx
import Carousel from '@/packages/components/Carousel'
import CarouselItem from '@/packages/components/Carousel/CarouselItem'

export default () => {
  const images = [
    'https://picsum.photos/id/1/1280/360',
    'https://picsum.photos/id/2/1280/360',
    'https://picsum.photos/id/3/1280/360',
    'https://picsum.photos/id/4/1280/360',
    'https://picsum.photos/id/5/1280/360',
    'https://picsum.photos/id/6/1280/360'
  ]
  return (
    <Carousel autoPlay={true} current={0} interval={2000} control indicator>
      <CarouselItem images={images} />
    </Carousel>
  )
}
```
