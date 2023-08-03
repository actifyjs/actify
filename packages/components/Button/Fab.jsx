import React, { forwardRef } from 'react'
import '@material/web/fab/fab'
import PropTypes from 'prop-types'
import { setColor } from '@/packages/utils'
import Icon from '@/packages/components/Icon'

const Fab = forwardRef((props, ref) => {
  const { style, icon, size, variant, color, className, children, ...rest } = props
  let styles = { ...style }
  color && (styles['--md-fab-icon-color'] = setColor(color))
  return (
    <md-fab ref={ref} {...rest} class={className} style={{ ...styles }}>
      {icon ? (
        <span slot="icon">
          <Icon name={icon} />
        </span>
      ) : (
        <span className="grid place-content-center" color={color} slot="icon">
          {children}
        </span>
      )}
    </md-fab>
  )
})

Fab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['surface', 'primary', 'secondary', 'tertiary'])
}

Fab.defaultProps = {
  size: 'medium',
  color: 'primary',
  variant: 'primary'
}

Fab.displayName = 'Actify.Fab'

export default Fab
