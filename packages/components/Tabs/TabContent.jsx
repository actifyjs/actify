import { forwardRef } from 'react'

const TabContent = forwardRef((props, ref) => {
  const { list, selected, className, ...rest } = props

  return (
    <ul ref={ref} {...rest} className={className}>
      {list.map((item, index) => (
        <li
          key={index}
          className={`${
            index == selected ? 'block opacity-100' : 'hidden opacity-0'
          } transition-opacity duration-150 ease-linear`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
})

export default TabContent
