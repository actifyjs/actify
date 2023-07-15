import React from 'react'
import PropTypes from 'prop-types'
import '@material/web/elevation/elevation'

const Elevation = (props) => {
  const { level, ...rest } = props
  return <md-elevation style={{ '--md-elevation-level': level }} {...rest} />
}

Elevation.propTypes = {
  level: PropTypes.oneOf([0, 1, 2, 3, 4, 5, '0', '1', '2', '3', '4', '5'])
}

Elevation.defaultProps = {
  level: 1
}

export default Elevation
