import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative w-full min-w-[200px] my-5 pointer-events-none'
})

const trackVariant = tv({
  base: 'absolute rounded-full -mt-3 bg-primary',
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-5 w-5',
      lg: 'h-7 w-7'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const Slider = React.forwardRef((props, ref) => {
  const {
    min,
    max,
    step,
    size,
    color,
    labeled,
    children,
    className,
    value: valueProp,
    ...rest
  } = props
  const [value, setValue] = React.useState(valueProp * 100 || 0)

  const percent = React.useMemo(() => {
    const _min = min || 0
    const _max = max || 100
    return (value / _max - _min) * 100
  }, [value])

  const handleChange = (e) => {
    setValue(e.target.value)
    rest.onChange && rest.onChange(e)
  }

  return (
    <div className={variants({ className })}>
      <input
        {...rest}
        ref={ref}
        type="range"
        min={min || 0}
        max={max || 100}
        step={step || 1}
        onChange={handleChange}
        className="peer pointer-events-auto w-full h-full absolute opacity-0"
      />
      <div className="h-1 rounded-full overflow-hidden bg-black/20 dark:bg-white/20"></div>

      {/* active track */}
      <i
        style={{ width: `calc(${percent}% - 10px)` }}
        className="rounded-l-full absolute left-0 top-0 h-1 bg-current opacity-80"
      />
      {/* handle circle */}
      <div
        style={{ left: `calc(${percent}% - 10px)` }}
        className={trackVariant({ size })}
      >
        {labeled && (
          <span className="h-full text-xs grid place-content-center select-none">
            {value}
          </span>
        )}
      </div>
      {/* focused ring circle */}
      <i
        style={{ left: `calc(${percent}% - 20px)`, marginTop: '-22px' }}
        className="select-none absolute block h-10 w-10 rounded-full peer-focus:bg-black/25 dark:peer-focus:bg-white/25"
      />
    </div>
  )
})

Slider.displayName = 'Actify.Slider'

export default Slider
