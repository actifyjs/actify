import PropTypes from 'prop-types'
import { icons as LucideIcons } from 'lucide-react'
import React, { forwardRef } from 'react'
import { setColor } from '@/packages/utils'
import icons from '@/src/icons.json'

const Icon = forwardRef((props, ref) => {
  const { name, color, size, className, ...rest } = props
  if (!name) {
    return (
      <svg width="33.455" height="36.987" fill="#fff" viewBox="0 0 33.455 36.987" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeWidth="2.5"
          stroke="currentColor"
          transform="translate(-28.272 365)"
          d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
        />
      </svg>
    )
  }
  const isValidIcon = icons.includes(name)
  if (isValidIcon) {
    const LucideIcon = LucideIcons[name]
    return (
      <i className={className}>
        <LucideIcon ref={ref} {...rest} color={setColor(color)} size={size} />
      </i>
    )
  } else {
    return null
  }
})

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Icon.displayName = 'Actify.Icon'

export default Icon
