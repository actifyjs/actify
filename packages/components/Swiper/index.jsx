import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { SwiperWrap } from './SwiperWrap'
import { SwiperItem } from './SwiperItem'
import { SwiperControl } from './SwiperControl'
import { SwiperIndicator } from './SwiperIndicator'
import { SwiperProvider } from './SwiperContext'

const SwiperRoot = forwardRef((props, ref) => {
  const { style, control, indicator, children, className, ...rest } = props

  return (
    <SwiperProvider {...rest}>
      <div
        ref={ref}
        {...rest}
        style={style}
        className={twMerge('relative overflow-hidden rounded-lg', className)}
      >
        {children}
        {control && <SwiperControl />}
        {indicator && <SwiperIndicator />}
      </div>
    </SwiperProvider>
  )
})

SwiperRoot.displayName = 'Actify.Swiper'

export const Swiper = Object.assign(SwiperRoot, {
  Wrap: SwiperWrap,
  Item: SwiperItem
})
