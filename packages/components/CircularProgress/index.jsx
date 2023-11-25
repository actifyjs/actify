import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { setColor } from '@/packages/utils'

const ActiveIndicatorWidth = 25 / 3

const variants = tv({
  variants: {
    indeterminate: {
      true: 'animate-[1568.24ms_linear_0s_infinite_normal_none_running_linear-rotate]'
    },
    size: {
      xs: 'w-9 h-9',
      sm: 'w-12 h-12',
      md: 'w-[60px] h-[60px]',
      lg: 'w-[72px] h-[72px]',
      xl: 'w-[84px] h-[84px]',
      '2xl': 'w-24 h-24'
    }
  }
})

const spinnerVariants = tv({
  base: 'absolute animate-[1333ms_cubic-bezier(0.4,0,0.2,1)_0s_infinite_normal_both_running_expand-arc,5332ms] rounded-full border-[currentColor_currentColor_transparent_transparent]',
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

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, CircularPropTypes>
 */
const CircularProgress = forwardRef((props, ref) => {
  const { value, indeterminate, style, size, color, className, ...rest } = props

  return (
    <>
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
        ref={ref}
        {...rest}
        style={{ ...style, color: setColor(color) }}
        className={variants({ size, indeterminate, className })}
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
              style={{
                cx: '50%',
                cy: '50%',
                fill: 'transparent',
                stroke: 'currentColor',
                strokeDasharray: 100,
                strokeWidth: `${ActiveIndicatorWidth}%`,
                r: `${50 * (1 - ActiveIndicatorWidth * 0.01)}%`
              }}
              strokeDashoffset={(1 - value / 100) * 100}
            />
          </svg>
        )}
      </div>
    </>
  )
})

const CircularPropTypes = {
  color: PropTypes.string,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl'])
}

CircularProgress.propTypes = CircularPropTypes

CircularProgress.defaultProps = {
  size: 'sm',
  color: 'primary',
  indeterminate: false
}

CircularProgress.displayName = 'Actify.CircularProgress'

export { CircularProgress }
