import React, { useEffect, useRef, forwardRef } from 'react'
import '@material/web/labs/navigationbar/navigation-bar'

const NavigationBar = forwardRef((props, ref) => {
  const { children, onChange, ...rest } = props
  const _ref = ref || useRef(null)

  useEffect(() => {
    _ref.current.addEventListener('onActiveIndexChange', onChange)
  }, [])

  return (
    <md-navigation-bar ref={_ref} {...rest}>
      {children}
    </md-navigation-bar>
  )
})

NavigationBar.displayName = 'Actify.NavigationBar'

export default NavigationBar
