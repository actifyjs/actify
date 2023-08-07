import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '@/packages/utils'
import { cva } from 'class-variance-authority'
import { setColor } from '@/packages/utils'

const dividerStyles = cva(
  'relative h-[var(--md-divider-thickness)] before:absolute before:inset-0 before:bg-[var(--md-divider-color)] before:h-[var(--md-divider-thickness)] before:w-full',
  {
    variants: {}
  }
)

const Divider = (props) => {
  const { style, color, thickness, className, ...rest } = props
  const styles = { ...style }
  if (color) {
    styles['--md-divider-color'] = setColor(color)
  } else {
    styles['--md-divider-color'] = 'var(--md-sys-color-outline-variant, #cac4d0)'
  }
  if (thickness) {
    styles['--md-divider-thickness'] = thickness + 'px'
  } else {
    styles['--md-divider-thickness'] = '1px'
  }

  return (
    <div
      {...rest}
      style={styles}
      className={cn(
        dividerStyles({
          className
        })
      )}
    ></div>
  )
}

Divider.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOf(PropTypes.number, PropTypes.string)
}

Divider.displayName = 'Actify.Divider'

export default Divider
