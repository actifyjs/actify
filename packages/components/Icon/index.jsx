import React, { memo, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { setColor } from '@/packages/utils'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

const Icon = memo(
  ({
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    className,
    ...rest
  }) => {
    if (!dynamicIconImports.hasOwnProperty(name)) {
      return null
    }
    const LucideIcon = lazy(dynamicIconImports[name])

    return (
      <Suspense
        fallback={
          <div style={{ background: 'transparent', width: 24, height: 24 }} />
        }
      >
        <LucideIcon
          {...rest}
          size={size}
          className={className}
          color={setColor(color)}
          strokeWidth={strokeWidth}
          absoluteStrokeWidth={absoluteStrokeWidth}
        />
      </Suspense>
    )
  }
)

Icon.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  absoluteStrokeWidth: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOf(Object.keys(dynamicIconImports)).isRequired
}

Icon.defaultProps = {
  size: 24,
  strokeWidth: 2,
  color: 'currentColor',
  absoluteStrokeWidth: false
}

Icon.displayName = 'Actify.Icon'

export { Icon }
