import React from 'react'

const useResizeObserver = (ref: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const width = ref?.current?.getBoundingClientRect().width
      setWidth(width)
    })
    resizeObserver.observe(ref?.current as Element)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])
  return width
}

export { useResizeObserver }
