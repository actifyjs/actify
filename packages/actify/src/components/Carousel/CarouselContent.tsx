'use client'
import React, { Children, useEffect, isValidElement } from 'react'
import { wrap } from 'popmotion'
import { twMerge } from 'tailwind-merge'
import { useCarousel } from './CarouselContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useShallow } from 'zustand/react/shallow'

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

const CarouselContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children
}) => {
  const { setPage, current, setCurrent } = useCarousel(
    useShallow((_) => ({
      setPage: _.setPage,
      current: _.current,
      setCurrent: _.setCurrent
    }))
  )
  const [page, direction] = useCarousel((s) => s.page) as Array<number>

  // @ts-expect-error
  const images = Children.toArray(children).map((child) => child.props.src)

  useEffect(() => {
    setCurrent(wrap(0, images.length, page))
  }, [page, images.length])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const MotionComponent = motion(child.type)
          if (current == index) {
            return (
              <MotionComponent
                {...child.props}
                className={twMerge(child.props.className, 'absolute')}
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
