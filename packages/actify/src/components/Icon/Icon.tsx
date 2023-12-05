'use client'
import { setColor } from './../../utils'
import React, { memo, lazy, Suspense } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface IconProps extends React.SVGAttributes<SVGElement> {
  absoluteStrokeWidth?: boolean
  size?: number | string
}

const Icon: React.FC<IconProps> = memo(
  ({
    name,
    className,
    size = 24,
    strokeWidth = 2,
    color = 'currentColor',
    absoluteStrokeWidth = false,
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

Icon.displayName = 'Actify.Icon'

export default Icon
