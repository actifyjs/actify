import React from 'react'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: 'flex relative p-2 bg-secondary/10 rounded-lg'
})

const TabsHeader = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  const { active } = useTabs()
  const length = React.useMemo(() => children.length, [children])
  const activeIndex = React.useMemo(() => children.findIndex((i) => i.props.value == active))

  return (
    <nav>
      <ul ref={ref} {...rest} role="tablist" className={variants({ className })}>
        {children}
        <div
          style={{ left: `${(100 * activeIndex) / length}%`, width: `${100 / length}%` }}
          className="pointer-events-none transition-all duration-500 absolute h-full after:bg-white/20 after:absolute after:shadow after:left-2 after:right-2 after:top-0 after:bottom-4 after:rounded-md
        "
        ></div>
      </ul>
    </nav>
  )
})

export default TabsHeader
