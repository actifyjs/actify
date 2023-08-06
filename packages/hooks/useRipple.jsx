import { useDebounce } from 'usehooks-ts'
import { useState, useEffect } from 'react'

const useRipple = (ref) => {
  const [ripples, setRipples] = useState([])
  const _debounced = useDebounce(ripples, 1000)

  useEffect(() => {
    if (ref.current) {
      const btn = ref.current
      const clickHandler = (e) => {
        var rect = btn.getBoundingClientRect()
        var left = e.clientX - rect.left
        var top = e.clientY - rect.top
        const height = btn.clientHeight
        const width = btn.clientWidth
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

      btn.addEventListener('click', clickHandler)
      return () => {
        btn.removeEventListener('click', clickHandler)
      }
    }
  }, [ref, ripples])

  useEffect(() => {
    if (_debounced.length) {
      setRipples([])
    }
  }, [_debounced.length])

  return ripples?.map((style, i) => {
    return (
      <span
        key={i}
        style={{
          ...style,
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          opacity: '25%',
          transform: 'scale(0)',
          animation: 'ripple 600ms linear',
          borderRadius: '50%'
        }}
      />
    )
  })
}

export default useRipple
