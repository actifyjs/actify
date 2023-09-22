import React from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

import DrawerContent from './DrawerContent'
import DrawerActivator from './DrawerActivator'
import { DrawerProvider } from './DrawerContext'

const variants = tv({
  base: 'relative'
})

const DrawerRoot = React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DrawerProvider value={{ ...rest }}>
      <div ref={ref} {...rest} className={variants({ className })}>
        {children}
      </div>
    </DrawerProvider>
  )
})

DrawerRoot.propTypes = {
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
}

DrawerRoot.defaultProps = {
  placement: 'left'
}

export const Drawer = Object.assign(DrawerRoot, {
  Content: DrawerContent,
  Activator: DrawerActivator
})
