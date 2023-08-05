import PropTypes from 'prop-types'
import { icons as LucideIcons } from 'lucide-react'
import React, { forwardRef } from 'react'
import { setColor } from '@/packages/utils'
import icons from '@/src/icons.json'

const Icon = forwardRef((props, ref) => {
  const { name, color, size, className, ...rest } = props
  const LucideIcon = LucideIcons[name]

  return (
    <i className={className}>
      <LucideIcon ref={ref} {...rest} color={setColor(color)} size={size} />
    </i>
  )
})

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.oneOf(icons),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Icon.displayName = 'Actify.Icon'

export default Icon
