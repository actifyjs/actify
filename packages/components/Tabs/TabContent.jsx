import { twMerge } from 'tailwind-merge'
import { useRef, useState, useEffect, forwardRef } from 'react'
import Ripple from '@/packages/components/Ripple'

const TabContent = forwardRef((props, ref) => {
  const { list, selected, className, ...rest } = props
  const _ref = useRef(null) || ref
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      let maxHeight = 0
      const { children } = _ref.current
      for (let i = 0; i < children.length; i++) {
        maxHeight = Math.max(maxHeight, children[i].offsetHeight)
      }
      setHeight(maxHeight)
    }, 1000)
  }, [])

  return (
    <div className="relative w-full rounded-t-none">
      <ul
        ref={_ref}
        {...rest}
        style={{ height: height + 'px' }}
        className={twMerge('relative overflow-hidden', className)}
      >
        {list.map((item, index) => (
          <li
            key={index}
            className={`${index > selected ? 'translate-x-full' : '-translate-x-full'} ${
              index == selected ? 'translate-x-0' : ''
            } absolute inset-0 z-10 h-fit transform transition-transform duration-700 ease-in-out`}
          >
            {item}
          </li>
        ))}
      </ul>
      <Ripple />
    </div>
  )
})

export default TabContent
