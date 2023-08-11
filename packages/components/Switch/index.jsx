import { tv } from 'tailwind-variants'
import { Icon, Ripple } from 'actify'
import { setColor } from '@/packages/utils'
import React, { useId, useState, forwardRef } from 'react'

const variants = tv({
  base: 'h-8 w-14 rounded-full border-[2px] border-current shadow-inner peer-checked:bg-current'
})

const dotVariants = tv({
  base: 'absolute grid place-content-center left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-secondary shadow-inner transition-all peer-checked:left-[calc(100%-32px)] peer-checked:h-6 peer-checked:w-6 peer-checked:bg-white [&>span]:opacity-0 [&>span]:peer-checked:opacity-100',
  variants: {
    icons: {
      true: 'h-6 w-6 left-1 peer-checked:left-[calc(100%-28px)]'
    }
  }
})

const Switch = forwardRef((props, ref) => {
  const id = useId()
  const { icons, selected, color, children, className, ...rest } = props
  const [checked, setChecked] = useState(selected ?? false)

  const colorVariant = color ?? 'primary'

  return (
    <label htmlFor={id} className="relative cursor-pointer" style={{ color: setColor(colorVariant) }}>
      <input
        hidden
        id={id}
        ref={ref}
        {...rest}
        type="checkbox"
        className="peer"
        defaultChecked={checked}
        onClick={(e) => setChecked(e.target.checked)}
      />
      <div className={variants({ className })}></div>
      <i className={dotVariants({ icons })}>
        {icons && <Icon name={`${checked ? 'Check' : 'X'}`} size={16} color={`${checked ? 'black' : 'white'}`} />}
      </i>
      <Ripple />
    </label>
  )
})

Switch.displayName = 'Actify.Switch'

export default Switch
