import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@/packages/components'
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
          <span slot="icon">{icon && <Icon name={icon} />}</span>
        </md-assist-chip>
      )}
      {type == 'filter' && (
        <md-filter-chip {...rest}>
          <span slot="icon">
            <Icon name="Circle" size={18} />
          </span>
        </md-filter-chip>
      )}
      {type == 'input' && <md-input-chip {...rest} />}
      {type == 'suggestion' && <md-suggestion-chip {...rest} />}
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
