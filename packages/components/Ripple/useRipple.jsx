import { useDebounce } from 'usehooks-ts'
import { useState, useEffect } from 'react'

const useRipple = (ref) => {
  const [ripples, setRipples] = useState([])
  const debounced = useDebounce(ripples, 1000)

  useEffect(() => {
    if (ref.current) {
      const element = ref.current
      const clickHandler = (e) => {
        var rect = element.getBoundingClientRect()
        var left = e.clientX - rect.left
        var top = e.clientY - rect.top
        const height = element.clientHeight
        const width = element.clientWidth
        const diameter = Math.max(width, height)
        setRipples([
          ...ripples,
          {
            top: top - diameter / 2,
            left: left - diameter / 2,
            height: Math.max(width, height),
            width: Math.max(width, height)
          }
        ])
      }

      element.addEventListener('click', clickHandler)
      return () => {
        element.removeEventListener('click', clickHandler)
      }
    }
  }, [ref, ripples])

  useEffect(() => {
    if (debounced.length) {
      setRipples([])
    }
  }, [debounced.length])

  return ripples?.map((style, i) => {
    return (
      <span
        key={i}
        style={{
          ...style,
          opacity: '25%',
          borderRadius: '50%',
          position: 'absolute',
          transform: 'scale(0)',
          backgroundColor: '#FFFFFF',
          animation: 'ripple 600ms linear'
        }}
      />
    )
  })
}

export default useRipple
