import React from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { setColor } from '@/packages/utils'

const variants = tv({
  base: 'w-12 h-12',
  variants: {
    indeterminate: {
      true: 'animate-[1568.24ms_linear_0s_infinite_normal_none_running_linear-rotate]'
    }
  }
})

const ActiveIndicatorWidth = 25 / 3

const circleStyles = {
  cx: '50%',
  cy: '50%',
  r: `${50 * (1 - ActiveIndicatorWidth * 0.01)}%`,
  strokeWidth: `${ActiveIndicatorWidth}%`,
  strokeDasharray: 100,
  fill: 'rgba(0, 0, 0, 0)'
}

const CircularProgress = React.forwardRef((props, ref) => {
  const { value, indeterminate, style, color, className, ...rest } = props

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
        className={variants({ indeterminate, className })}
      >
        {indeterminate ? (
          <div className="absolute inset-0 animate-[5332ms_cubic-bezier(0.4,0,0.2,1)_0s_infinite_normal_both_running_rotate-arc]">
            <div className="absolute inset-[0_50%_0_0] overflow-hidden">
              <div className="absolute inset-[0_-100%_0_0] rotate-[135deg] animate-[1333ms_cubic-bezier(0.4,0,0.2,1)_0s_infinite_normal_both_running_expand-arc,5332ms] rounded-full border-4 border-[currentColor_currentColor_rgba(0,0,0,0)_rgba(0,0,0,0)]"></div>
            </div>
            <div className="absolute inset-[0_0_0_50%] overflow-hidden">
              <div className="absolute inset-[0_0_0_-100%] rotate-[100deg] animate-[1333ms_cubic-bezier(0.4,0,0.2,1)_0s_infinite_normal_both_running_expand-arc,5332ms] rounded-full border-4 border-[currentColor_currentColor_rgba(0,0,0,0)_rgba(0,0,0,0)]"></div>
            </div>
          </div>
        ) : (
          <svg viewBox="0 0 4800 4800" className="rotate-arc -rotate-90">
            <circle
              className="stroke-transparent"
              pathLength="100"
              style={circleStyles}
            />
            <circle
              className="stroke-current"
              pathLength="100"
              strokeDashoffset={(1 - value) * 100}
              style={circleStyles}
            />
          </svg>
        )}
      </div>
    </>
  )
})

CircularProgress.propTypes = {
  color: PropTypes.string,
  indeterminate: PropTypes.bool
}

CircularProgress.defaultProps = {
  color: 'primary',
  indeterminate: false
}

CircularProgress.displayName = 'Actify.CircularProgress'

export default CircularProgress
