import React from 'react'
import { Icon } from 'actify'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'px-4 cursor-pointer relative isolate'
})

const ListGroup = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)
  const { style, className, label, children, ...rest } = props

  return (
    <li ref={ref} {...rest} style={style} className={variants({ className })}>
      <div
        className="h-14 flex items-center justify-between"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={() => setOpen(!open)}
      >
        {label}
        <Icon
          name="ChevronDown"
          className={`transition-transform ${open ? 'rotate-90' : ''}`}
        />
      </div>
      {hovered && (
        <motion.div
          layoutId="actify-moving"
          className="h-14 absolute inset-0 bg-secondary/25 z-[-1]"
        />
      )}
      <div
        className={`transition-all duration-300 ease-in-out grid ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="pl-5 overflow-hidden">
          {React.Children.map(
            children,
            (child) =>
              React.isValidElement(child) &&
              React.cloneElement(child, {
                ...child.props
              })
          )}
        </ul>
      </div>
    </li>
  )
})

ListGroup.displayName = 'Actify.ListGroup'

export default ListGroup
