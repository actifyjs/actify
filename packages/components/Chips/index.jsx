import React from 'react'
import PropTypes from 'prop-types'
import { Circle } from 'lucide-react'
import '@material/web/chips/chip-set'
import '@material/web/chips/assist-chip'
import '@material/web/chips/filter-chip'
import '@material/web/chips/input-chip'
import '@material/web/chips/suggestion-chip'

const Chip = (props) => {
  const { type, icon, className, children, ...rest } = props

  return (
    <md-chip-set>
      {type == 'assist' && (
        <md-assist-chip {...rest}>
          <md-icon slot="icon"></md-icon>
        </md-assist-chip>
      )}
      {type == 'filter' && (
        <md-filter-chip {...rest}>
          <md-icon slot="icon">
            <Circle size={18} />
          </md-icon>
        </md-filter-chip>
      )}
      {type == 'input' && (
        <md-input-chip {...rest}>{/* <md-icon slot="icon">{icon && icon}</md-icon> */}</md-input-chip>
      )}
      {type == 'suggestion' && (
        <md-suggestion-chip {...rest}>{/* <md-icon slot="icon">{icon && icon}</md-icon> */}</md-suggestion-chip>
      )}
    </md-chip-set>
  )
}

Chip.propTypes = {
  type: PropTypes.oneOf(['assist', 'filter', 'input', 'suggestion'])
}

Chip.defaultProps = {
  type: 'assist'
}

Chip.displayName = 'Actify.Chip'

export default Chip
