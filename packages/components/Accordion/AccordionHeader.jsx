import { Icon } from 'actify'
import { tv } from 'tailwind-variants'
import { AccordionContext } from './AccordionContext'
import React, {
  forwardRef,
  isValidElement,
  cloneElement,
  useContext
} from 'react'

const variants = tv({
  base: 'font-black cursor-pointer flex items-center justify-between'
})

const AccordionHeader = forwardRef((props, ref) => {
  const { index, style, className, asChild, children, ...rest } = props
  const { multiple, open, setOpen } = useContext(AccordionContext)

  const handleClick = () => {
    let arr = []
    if (multiple) {
      arr = [...open]
    } else {
      arr = open.map((_, i) => i != index && false)
    }
    arr[index] = !arr[index]
    setOpen(arr)
  }

  // `asChild` allows the user to pass any element as the header
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ref,
      ...rest,
      ...children.props,
      onClick: handleClick,
      className: variants({ className: children.props.className })
    })
  }

  return (
    <div
      {...rest}
      ref={ref}
      style={style}
      onClick={handleClick}
      className={variants({ className })}
    >
      <p>{children}</p>

      <div
        className={`transition-transform duration-300 ${
          open[index] ? 'rotate-90' : 'rotate-0'
        }`}
      >
        <Icon name="chevron-down" />
      </div>
    </div>
  )
})

export { AccordionHeader }
