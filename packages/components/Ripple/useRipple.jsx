import React, { useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'

const useRipple = (ref) => {
  const [ripples, setRipples] = useState([])

  useEffect(() => {
    if (ref.current) {
      const element = ref.current
      const clickHandler = (e) => {
        const rect = element.getBoundingClientRect()
        const top = e.clientY - rect.top
        const left = e.clientX - rect.left
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

  const debounced = useDebounce(ripples, 1000)

  useEffect(() => {
    if (debounced.length) {
      setRipples([])
    }
  }, [debounced.length])

  return ripples?.map((style, i) => {
    return (
      <span
        key={i}
        className="absolute rounded-full bg-inverse-surface/25"
        style={{
          ...style,
          transform: 'scale(0)',
          animation: 'ripple 600ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    )
  })
}

export { useRipple }
