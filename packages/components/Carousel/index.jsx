import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { CrouselItem } from './CarouselItem'
import { CarouselContent } from './CarouselContent'
import { CarouselControl } from './CarouselControl'
import { CarouselIndicator } from './CarouselIndicator'
import { defaultValue, CarouselProvider } from './CarouselContext'

const variants = tv({
  base: 'relative overflow-hidden rounded-lg w-full min-h-[400px] flex items-center justify-center'
})

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, CarsouselPropTypes>
 */

const CarouselRoot = forwardRef((props, ref) => {
  const {
    style,
    autoPlay,
    control,
    infinite,
    indicator,
    children,
    className,
    ...rest
  } = props

  return (
    <CarouselProvider {...{ total: children.length, ...rest }}>
      <div
        ref={ref}
        {...rest}
        style={style}
        className={variants({ className })}
      >
        <CarouselContent>{children}</CarouselContent>
        <CarouselControl
          control={control ?? defaultValue.control}
          autoPlay={autoPlay ?? defaultValue.autoPlay}
          infinite={infinite ?? defaultValue.infinite}
        />
        {indicator && <CarouselIndicator />}
      </div>
    </CarouselProvider>
  )
})

const CarsouselPropTypes = {
  style: PropTypes.object,
  autoPlay: PropTypes.bool,
  control: PropTypes.bool,
  infinite: PropTypes.bool,
  indicator: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

CarouselRoot.PropTypes = CarsouselPropTypes

CarouselRoot.displayName = 'Actify.Carousel'

export const Carousel = Object.assign(CarouselRoot, {
  Item: CrouselItem
})
