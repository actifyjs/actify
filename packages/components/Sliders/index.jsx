import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Elevation } from 'actify'
import { tv } from 'tailwind-variants'
import useMergedState from 'rc-util/lib/hooks/useMergedState'

const variants = tv({
  base: 'relative flex flex-1 items-center [block-size:40px] pointer-events-none touch-none',
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      error: 'text-error'
    },
    disabled: {
      true: 'text-outline opacity-[.38]'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

/**
 * @type React.ForwardRefRenderFunction<HTMLInputElement, SliderPropTypes>
 */
const Slider = forwardRef((props, ref) => {
  const {
    min = 0,
    max = 100,
    step = 1,
    size,
    color,
    value,
    labeled,
    disabled,
    children,
    onChange,
    className,
    defaultValue,
    ...rest
  } = props

  const [inputValue, setInputValue] = useMergedState(0, {
    value,
    onChange,
    defaultValue
  })

  const handleChange = (e) => {
    if (disabled) {
      return
    }
    setInputValue(e.target.value)
  }

  const percent = useMemo(() => {
    return inputValue / (max - min)
  }, [inputValue])

  return (
    <div
      style={{
        '--size': '40px',
        '--start-fraction': 0,
        '--end-fraction': percent,
        '--tick-count': 100,
        '--with-tick-marks-container-size': '2px'
      }}
      className={variants({ color, disabled, className })}
    >
      <input
        {...rest}
        ref={ref}
        min={min}
        max={max}
        step={step}
        type="range"
        value={inputValue}
        disabled={disabled}
        onChange={handleChange}
        className="peer opacity-0 [-webkit-tap-highlight-color:rgba(0,0,0,0)] absolute w-full h-full m-0 bg-transparent cursor-pointer pointer-events-auto appearance-none"
      />
      {/* track */}
      <div className="absolute inset-0 flex items-center before:absolute before:[block-size:4px] before:rounded-full before:bg-outline before:[inset-inline-start:18px] before:[inset-inline-end:18px] before:[background-size:calc(1%-0.04px)_100%] after:absolute after:[block-size:4px] after:rounded-full after:[clip-path:inset(0_calc(var(--with-tick-marks-container-size)*min((1-var(--end-fraction))*1000000000,1)+(100%-var(--with-tick-marks-container-size)*2)*(1-var(--end-fraction)))_0_calc(var(--with-tick-marks-container-size)*min(var(--start-fraction)*1000000000,1)+(100%-var(--with-tick-marks-container-size)*2)*var(--start-fraction)))] after:bg-current after:[inset-inline-start:18px] after:[inset-inline-end:18px] after:[background-size:calc(1%-0.04px)_100%]"></div>
      {/* handle */}
      <div className="peer-focus-within:[&_.label]:[transform:scale(1)] peer-hover:[&_.rings]:opacity-100 relative [block-size:100%] [inline-size:100%] [padding-inline:20px]">
        <div className="relative [block-size:100%] [inline-size:100%]">
          <div className="absolute [inset-block:0] [inset-inline-start:calc(100%*var(--start-fraction))] [inline-size:calc(100%*(var(--end-fraction)-var(--start-fraction)))]">
            <div className="absolute [block-size:var(--size)] [inline-size:var(--size)] rounded-full flex place-content-center place-items-center z-[1] [inset-inline-end:calc(0px-var(--size)/2)]">
              <div className="absolute w-5 h-5 rounded-full bg-current">
                <Elevation level={1} />
              </div>
              {/* label */}
              {labeled && (
                <div className="label absolute flex p-1 place-content-center place-items-center rounded-full text-xs [inset-block-end:100%] [min-inline-size:28px] [min-block-size:28px] bg-current transition-transform duration-100 [transition-timing-function:cubic-bezier(0.2,0,0,1)] origin-[center_bottom] [transform:scale(0)] before:absolute before:block before:bg-[inherit] before:[inline-size:14px] before:[block-size:14px] before:bottom-[calc(28px/-10)] before:rotate-45 after:absolute after:block after:inset-0 after:rounded-[inherit] after:bg-[inherit]">
                  <span className="z-[1] text-surface">{inputValue}</span>
                </div>
              )}
              {/* ring */}
              {!disabled && (
                <div className="rings opacity-0 absolute rounded-full z-[-1] inset-0 bg-outline/30"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

const SliderPropTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'error']),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Slider.propTypes = SliderPropTypes

Slider.displayName = 'Actify.Slider'

export { Slider }
