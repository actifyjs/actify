import React, { useEffect, useRef } from 'react'
import '@material/web/ripple/ripple'
import { cva } from 'class-variance-authority'

const rippleStyles = cva('rounded-[inherit] absolute inset-0 overflow-hidden')

const Ripple = (props) => {
  const ref = useRef()

  useEffect(() => {
    console.log(ref.current)
  }, [])

  const handleClick = (e) => {
    console.log(e)
  }

  return <span ref={ref} className={rippleStyles()}></span>
  // return <md-ripple {...props} />
}

Ripple.displayName = 'Actify.Ripple'

export default Ripple
