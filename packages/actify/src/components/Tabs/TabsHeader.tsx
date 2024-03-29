'use client'
import { tv } from 'tailwind-variants'
import React, {
  useRef,
  forwardRef,
  Children,
  isValidElement,
  cloneElement
} from 'react'

const variants = tv({
  base: 'flex gap-2 p-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'
})

type TabRef = React.Ref<HTMLUListElement>
export interface TabsHeaderProps
  extends React.HTMLAttributes<HTMLUListElement> {}

const TabsHeader: React.FC<TabsHeaderProps> = forwardRef(
  (props, ref?: TabRef) => {
    const tabRef = ref || useRef()
    const { children, className, ...rest } = props

    return (
      <nav className="w-full">
        <ul
          {...rest}
          role="tablist"
          ref={tabRef as TabRef}
          className={variants({ className })}
        >
          {Children.map(
            children,
            (child, index) =>
              isValidElement(child) &&
              cloneElement(child, {
                index,
                ...child.props
              })
          )}
        </ul>
      </nav>
    )
  }
)

export { TabsHeader }
