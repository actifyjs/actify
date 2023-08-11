import { forwardRef, useState } from 'react'
import { tv } from 'tailwind-variants'
import { Icon, Elevation } from 'actify'

const variants = tv('relative py-[14px] px-4 flex items-center justify-between rounded-[4px]', {
  variants: {
    variant: {},
    color: {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      tertiary: 'bg-tertiary text-white',
      error: 'bg-error text-white'
    },
    longaction: {
      true: 'flex-wrap'
    }
  },
  defaultVariants: {
    variant: '',
    color: 'primary'
  }
})

const Snackbar = forwardRef((props, ref) => {
  const [show, setShow] = useState(true)

  const close = () => {
    setShow(false)
  }

  const { icon, color, action, longaction, children, className, ...rest } = props
  return (
    <div
      ref={ref}
      {...rest}
      style={{
        display: `${show ? 'blcok' : 'none'}`
      }}
      className={variants({ longaction, color, className })}
    >
      <div className="line-clamp-2 flex-grow">{children}</div>
      {action && <div className="-mr-2 ml-1 cursor-pointer px-3 py-[10px]">{action}</div>}
      {icon && <Icon onClick={close} name={icon} />}
      {longaction && <div className="w-full cursor-pointer px-3 py-[14px] text-right">{longaction}</div>}
      <Elevation level="3" />
    </div>
  )
})

Snackbar.displayName = 'Actify.Snackbar'

export default Snackbar
