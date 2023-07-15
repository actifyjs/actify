import { cn } from '@/packages/utils'
import color from '@/packages/utils/color'
import { cva } from 'class-variance-authority'
import { forwardRef, useMemo, useState } from 'react'

const variants = cva('relative h-[68px] pt-[48px] pb-[18px] pointer-events-none', {
  variants: {
    variant: {},
    color: color.text
  },
  defaultVariants: {
    variant: '',
    color: 'primary'
  }
})

const Slider = forwardRef((props, ref) => {
  const [value, setValue] = useState(0)
  const { min, max, step, color, children, className, ...rest } = props

  const percent = useMemo(() => {
    const _min = min || 0
    const _max = max || 100
    return (value / _max - _min) * 100
  }, [value])

  return (
    <div {...rest} className={cn(variants({ color, className }))}>
      <input
        ref={ref}
        type="range"
        min={min || 0}
        max={max || 100}
        step={step || 1}
        className="peer pointer-events-auto absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
        onInput={(e) => setValue(e.target.value)}
      />
      {/* label */}
      <i style={{ left: `calc(${percent}% - 14px)` }} className="absolute left-0 top-0 opacity-80">
        <svg width="28" height="34" fill="none" viewBox="0 0 28 34" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 34L4.10051 24.0416C-1.36683 18.5418 -1.36683 9.62475 4.10051 4.12489C9.56784 -1.37497 18.4322 -1.37497 23.8995 4.12489C29.3668 9.62474 29.3668 18.5418 23.8995 24.0416L14 34Z"
          />
        </svg>
        <span className="absolute inset-0 select-none pt-2 text-center text-xs not-italic text-white">{value}</span>
      </i>
      <div className="h-1 rounded-full bg-black/20 dark:bg-white/20"></div>
      {/* active track */}
      <i
        style={{ width: `calc(${percent}% - 10px)` }}
        className="absolute left-0 top-[48px] h-1 bg-current opacity-80"
      />
      {/* handle circle */}
      <i
        style={{ left: `calc(${percent}% - 10px)` }}
        className="absolute top-[38px] block h-5 w-5 rounded-full bg-current "
      />
      {/* focused ring circle */}
      <i
        style={{ left: `calc(${percent}% - 20px)` }}
        className="absolute top-[28px] block h-10 w-10 rounded-full peer-focus:bg-black/25 dark:peer-focus:bg-white/25"
      />
    </div>
  )
})

Slider.displayName = 'Actify.Slider'

export default Slider
