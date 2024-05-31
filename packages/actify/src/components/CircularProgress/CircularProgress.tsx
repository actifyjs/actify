'use client'

import { VariantProps, tv } from 'tailwind-variants'

import React from 'react'

const ActiveIndicatorWidth = 25 / 3

const root = tv({
  variants: {
    indeterminate: {
      true: 'animate-[1568.24ms_linear_0s_infinite_normal_none_running_linear-rotate]'
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      error: 'text-error'
    },
    size: {
      xs: 'size-9',
      sm: 'size-12',
      md: 'size-[60px]',
      lg: 'size-[72px]',
      xl: 'size-[84px]',
      '2xl': 'size-24'
    }
  }
})

const spinnerVariants = tv({
  base: [
    'absolute',
    'rounded-full',
    'border-[currentColor_currentColor_transparent_transparent]',
    'animate-[1333ms_cubic-bezier(0.4,0,0.2,1)_0s_infinite_normal_both_running_expand-arc,5332ms]'
  ],
  variants: {
    circle: {
      left: 'inset-[0_-100%_0_0] rotate-[135deg]',
      right: 'inset-[0_0_0_-100%] rotate-[100deg]'
    },
    // size about border width calculate from parent width size * ActiveIndicatorWidth/100
    size: {
      xs: 'border-[3px]',
      sm: 'border-4',
      md: 'border-[5px]',
      lg: 'border-[6px]',
      xl: 'border-[7px]',
      '2xl': 'border-8'
    }
  }
})

interface CircularProgressProp extends React.ComponentProps<'div'> {
  value?: number | string
  indeterminate?: boolean
  size?: VariantProps<typeof root>['size']
  color?: VariantProps<typeof root>['color']
}

const CircularProgress = (props: CircularProgressProp) => {
  const {
    value,
    size = 'sm',
    color = 'primary',
    indeterminate = false,
    className,
    ...rest
  } = props

  return (
    <React.Fragment>
      <style>
        {`@keyframes linear-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes expand-arc {
  0% {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  100% {
    transform: rotate(265deg);
  }
}

@keyframes rotate-arc {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
`}
      </style>
      <div
        {...rest}
        className={root({ size, color, indeterminate, className })}
      >
        {indeterminate ? (
          <div className="absolute inset-0 animate-[5332ms_cubic-bezier(0.4,0,0.2,1)_0s_infinite_normal_both_running_rotate-arc]">
            <div className="absolute inset-[0_50%_0_0] overflow-hidden">
              <div className={spinnerVariants({ size, circle: 'left' })}></div>
            </div>
            <div className="absolute inset-[0_0_0_50%] overflow-hidden">
              <div className={spinnerVariants({ size, circle: 'right' })}></div>
            </div>
          </div>
        ) : (
          <svg viewBox="0 0 4800 4800" className="rotate-arc -rotate-90">
            <circle
              pathLength="100"
              style={
                {
                  cx: '50%',
                  cy: '50%',
                  fill: 'transparent',
                  stroke: 'currentColor',
                  strokeDasharray: 100,
                  strokeWidth: `${ActiveIndicatorWidth}%`,
                  r: `${50 * (1 - ActiveIndicatorWidth * 0.01)}%`
                } as React.CSSProperties
              }
              strokeDashoffset={(1 - Number(value) / 100) * 100}
            />
          </svg>
        )}
      </div>
    </React.Fragment>
  )
}

CircularProgress.displayName = 'Actify.CircularProgress'

export { CircularProgress }
