'use client'
import { tv } from 'tailwind-variants'
import useInterval from './../../hooks/useInterval'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { IconButton } from './../Button/IconButton'
import React, { Children, forwardRef, isValidElement, useState } from 'react'

const variants = tv({
  base: 'grid w-full place-items-center overflow-hidden'
})

const buttonVariants = tv({
  base: 'absolute top-1/2 -translate-y-1/2 bg-surface',
  variants: {
    prev: {
      true: 'left-4'
    },
    next: {
      true: 'right-4'
    }
  }
})

const itemVariants = tv({
  base: 'w-full h-full inline-block flex-none [transition:var(--transition)] [transform:translateX(var(--transform))]'
})

interface SwiperPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  current?: number
  interval?: number
  autoPlay?: boolean
  indicator?: React.FunctionComponent
  children?: React.JSX.Element | React.JSX.Element[]
}

const Swiper = forwardRef<HTMLDivElement, SwiperPropTypes>((props, ref) => {
  const {
    current: index,
    interval = 3000,
    style,
    autoPlay,
    className,
    indicator,
    children,
    ...rest
  } = props

  const items = Children.map(children, (child) =>
    child?.type?.name === 'Item' ? child : null
  )
  const count = items?.length

  const [current, setCurrent] = useState(index ?? 0)
  const [transition, setTransition] = useState('transform .5s ease-in-out')
  const [transform, setTransform] = useState('')

  const prev = () => {
    if (current === 0) {
      setTransition('none')
      setTransform(`-${count! + 1}00%`)
      requestAnimationFrame(() => {
        setTransform('')
        setTransition('transform .5s ease-in-out')
      })
      setCurrent(count! - 1)
    } else {
      setCurrent((_) => _ - 1)
    }
  }
  const next = () => {
    if (current === count! - 1) {
      setTransition('none')
      setTransform('0')
      requestAnimationFrame(() => {
        setTransform('')
        setTransition('transform .5s ease-in-out')
      })
      setCurrent(0)
    } else {
      setCurrent((_) => _ + 1)
    }
  }

  const prevButton = Children.map(children, (child) => {
    if (child?.type?.name === 'PrevButton') {
      if (isValidElement(child)) {
        return (
          <button
            onClick={prev}
            // @ts-expect-error
            {...child.props}
            className={buttonVariants({
              prev: true,
              // @ts-expect-error
              className: child.props.className
            })}
          >
            {child}
          </button>
        )
      }
    }
  })

  const nextButton = Children.map(children, (child) => {
    if (child?.type?.name === 'NextButton') {
      if (isValidElement(child)) {
        return (
          <button
            onClick={next}
            // @ts-expect-error
            {...child.props}
            className={buttonVariants({
              next: true,
              // @ts-expect-error
              className: child.props.className
            })}
          >
            {child}
          </button>
        )
      }
    }
  })

  autoPlay && useInterval(next, interval)

  return (
    <div ref={ref} {...rest} style={style} className={variants({ className })}>
      <div
        style={
          {
            '--transition': transition,
            '--transform': transform || `-${current + 1}00%`
          } as React.CSSProperties
        }
        className="relative h-full overflow-hidden rounded-lg flex"
      >
        {items?.[count! - 1]}
        {items}
        {items?.[0]}

        {/* controls */}
        {/* prev button */}
        {prevButton?.length ? (
          prevButton
        ) : (
          <IconButton
            onClick={prev}
            className={buttonVariants({ prev: true })}
            color="primary"
          >
            <ArrowLeft />
          </IconButton>
        )}
        {/* next button */}
        {nextButton?.length ? (
          nextButton
        ) : (
          <IconButton
            onClick={next}
            className={buttonVariants({ next: true })}
            color="primary"
          >
            <ArrowRight />
          </IconButton>
        )}

        {/* indicators */}
        {indicator ? (
          indicator({ setCurrent, current, count })
        ) : (
          <ul className="absolute bottom-4 flex w-full justify-center gap-2">
            {[...Array(count)].map((_, i) => (
              <li
                key={i}
                className={`w-5 h-5 rounded-full cursor-pointer ${
                  i == current ? 'bg-surface' : 'bg-inverse-surface'
                }`}
                onClick={() => setCurrent(i)}
              ></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
})

Swiper.displayName = 'Actify.Swiper'

export default Object.assign(Swiper, {
  Item: (props: React.HTMLAttributes<HTMLDivElement>) => {
    const { style, className, children, ...rest } = props
    return (
      <div {...rest} style={style} className={itemVariants({ className })}>
        {children}
      </div>
    )
  },
  PrevButton: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <>{props.children}</>
  ),
  NextButton: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <>{props.children}</>
  )
})
