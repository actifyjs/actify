'use client'

import React, {
  Children,
  FunctionComponent,
  isValidElement,
  useState
} from 'react'

import { Icon } from './../Icon'
import { IconButton } from './../Button/IconButton'
import { tv } from 'tailwind-variants'
import { useInterval } from './../../hooks'

const root = tv({
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

interface SwiperProps extends React.ComponentProps<'div'> {
  current?: number
  interval?: number
  autoPlay?: boolean
  indicator?: FunctionComponent
  children?: React.JSX.Element | React.JSX.Element[]
}

const Swiper = (props: SwiperProps) => {
  const {
    current: index,
    interval = 3000,
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
    <div {...rest} className={root({ className })}>
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
            <Icon>chevron_left</Icon>
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
            <Icon>chevron_right</Icon>
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
                className={`size-5 rounded-full cursor-pointer ${
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
}

Swiper.displayName = 'Actify.Swiper'

export default Object.assign(Swiper, {
  Item: (props: React.ComponentProps<'div'>) => {
    const { className, children, ...rest } = props
    return (
      <div {...rest} className={itemVariants({ className })}>
        {children}
      </div>
    )
  },
  PrevButton: (props: React.ComponentProps<'div'>) => (
    <React.Fragment>{props.children}</React.Fragment>
  ),
  NextButton: (props: React.ComponentProps<'div'>) => (
    <React.Fragment>{props.children}</React.Fragment>
  )
})
