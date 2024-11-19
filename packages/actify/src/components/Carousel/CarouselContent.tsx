'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { Children, isValidElement, useEffect } from 'react'

import { useCarousel } from './CarouselContext'
import { wrap } from 'popmotion'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const CarouselContent = ({ children }: React.ComponentProps<'div'>) => {
  const { page: pages, setPage, current, setCurrent } = useCarousel()
  const [page, direction] = pages as Array<number>

  // @ts-expect-error
  const images = Children.toArray(children).map((child) => child.props.src)

  useEffect(() => {
    setCurrent?.(wrap(0, images.length, page))
  }, [page, images.length])

  const paginate = (newDirection: number) => {
    setPage?.([page + newDirection, newDirection])
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          // @ts-expect-error
          const MotionComponent = motion(child.type)
          if (current == index) {
            return (
              <MotionComponent
                // @ts-expect-error
                {...child.props}
                style={{ position: 'absolute' }}
                variants={variants}
                key={page}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e: any, { offset, velocity }: any) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
              />
            )
          }
        }
      })}
    </AnimatePresence>
  )
}

export { CarouselContent }
