'use client'
import React, {
  useState,
  Children,
  forwardRef,
  useContext,
  cloneElement,
  isValidElement
} from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { ChevronDown } from 'lucide-react'
import { ListContext } from './ListContext'

const variants = tv({
  base: 'px-4 cursor-pointer relative isolate'
})

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  label?: string
  icon?: React.ReactNode
}

const ListGroup = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { style, className, label, icon, children, ...rest } = props

  const { layoutId } = useContext(ListContext)

  return (
    <li ref={ref} {...rest} style={style} className={variants({ className })}>
      <div
        className="h-14 flex items-center justify-between"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={() => setOpen(!open)}
      >
        {icon}
        {label}
        <div className={`transition-transform ${open ? 'rotate-90' : ''}`}>
          <ChevronDown />
        </div>
      </div>
      {hovered && (
        <motion.div
          layoutId={layoutId}
          className="h-14 absolute inset-0 bg-secondary/25 z-[-1]"
        />
      )}
      <div
        className={`transition-all duration-300 ease-in-out grid ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="overflow-hidden">
          {Children.map(
            children,
            (child) =>
              isValidElement(child) &&
              cloneElement(child, {
                ...child.props
              })
          )}
        </ul>
      </div>
    </li>
  )
})

ListGroup.displayName = 'Actify.ListGroup'

export { ListGroup }
