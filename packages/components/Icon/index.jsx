import React, { memo, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { setColor } from '@/packages/utils'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

const variants = tv({
  base: 'relative'
})

const Icon = memo(({ name, color, size, className, ...rest }) => {
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
      <i className={variants({ className })} {...rest}>
        <LucideIcon color={setColor(color)} size={size} />
      </i>
    </Suspense>
  )
})

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOf(Object.keys(dynamicIconImports)).isRequired
}

Icon.displayName = 'Actify.Icon'

export { Icon }
