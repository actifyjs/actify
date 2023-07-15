import { twMerge } from 'tailwind-merge'
import { useId, useState, forwardRef } from 'react'

const Switch = forwardRef((props, ref) => {
  const { icon, label, checked, children, className, ...rest } = props
  const [_checked, set_Checked] = useState(checked)
  const id = useId()

  return (
    <div className="inline-flex w-fit items-center gap-2">
      <label htmlFor={id} className="relative cursor-pointer text-primary">
        <input
          hidden
          id={id}
          ref={ref}
          {...rest}
          type="checkbox"
          className="peer"
          defaultChecked={_checked || false}
          onClick={(e) => set_Checked(e.target.checked)}
        />
        <div
          className={twMerge(
            'h-8 w-14 rounded-full border-[2px] border-current shadow-inner peer-checked:bg-current',
            className
          )}
        ></div>
        <i
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-secondary shadow-inner transition-all
              peer-checked:left-[calc(100%-32px)]
              peer-checked:h-6
              peer-checked:w-6
              peer-checked:bg-white
              [&>span]:opacity-0
              [&>span]:peer-checked:opacity-100
              "
        >
          {icon && <span>{icon}</span>}
        </i>
      </label>
      {label && (
        <label htmlFor={id} className="cursor-pointer text-current">
          {label}
        </label>
      )}
    </div>
  )
})

Switch.displayName = 'Actify.Switch'

export default Switch
