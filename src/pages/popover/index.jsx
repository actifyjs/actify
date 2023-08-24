import { useRef, useState } from 'react'

export default () => {
  const items = [...new Array(36).keys()]

  const [hovered, setHovered] = useState(false)
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  return (
    <ul className="relative grid gap-x-4 gap-y-8 grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
      {items.map((index) => (
        <Item
          key={index}
          {...{
            index,
            setHovered,
            setLeft,
            setTop,
            setWidth,
            setHeight
          }}
        />
      ))}

      <div
        style={{
          left,
          top,
          width,
          height,
          opacity: hovered ? 1 : 0,
          transform: `${hovered ? 'scale(1)' : 'scale(0)'}`
        }}
        className="pointer-events-none transition-all duration-700 absolute after:absolute after:inset-0 after:rounded-lg after:border-4"
      />
    </ul>
  )
}

const Item = (props) => {
  const ref = useRef()
  const { index, setHovered, setLeft, setTop, setWidth, setHeight } = props

  const mouseOver = () => {
    setHovered(true)
    const { offsetLeft, offsetTop, clientWidth, clientHeight } = ref.current
    setLeft(offsetLeft)
    setTop(offsetTop)
    setWidth(clientWidth)
    setHeight(clientHeight)
  }

  const mouseOut = () => {
    setHovered(false)
    const { offsetLeft, offsetTop } = ref.current
    setLeft(offsetLeft)
    setTop(offsetTop)
  }

  return (
    <li
      ref={ref}
      onMouseOut={mouseOut}
      onMouseOver={mouseOver}
      className="cursor-pointer relative rounded-lg bg-[#ddd] grid place-content-center"
    >
      <span className="grid place-content-center p-6">Item {index}</span>
    </li>
  )
}
