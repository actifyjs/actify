import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Icon, Ripple } from 'actify'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative inline-flex items-center gap-2 px-4 h-8 rounded-lg text-sm border border-outline no-underline bg-surface hover:bg-surface/10',
  variants: {
    type: {
      assist: '',
      filter: '',
      input: '',
      suggestion: ''
    }
  }
})

const Chip = forwardRef((props, ref) => {
  const [show, setShow] = useState(true)
  const [selected, setSelected] = useState(false)
  const {
    ripple,
    label,
    type,
    color,
    icon,
    style,
    className,
    children,
    ...rest
  } = props

  const handleClick = (e) => {
    rest.onClick?.(e)
    if (type == 'filter') {
      setSelected(!selected)
    }
  }
  // assist and suggestion chip have href
  const Tag = ['assist', 'suggestion'].includes(type) && rest.href ? 'a' : 'div'

  return (
    show && (
      <Tag
        ref={ref}
        {...rest}
        style={style}
        onClick={handleClick}
        className={variants({ type, className })}
      >
        {type == 'filter' && (
          <Icon
            size={18}
            color={color}
            name={`${selected ? 'check' : 'circle'}`}
          />
        )}
        {label}
        {ripple && <Ripple />}
        {type == 'input' && (
          <Icon name="x" size={18} onClick={() => setShow(false)} />
        )}
      </Tag>
    )
  )
})

Chip.propTypes = {
  ripple: PropTypes.bool,
  color: PropTypes.string,
  type: PropTypes.oneOf(['assist', 'filter', 'input', 'suggestion'])
}

Chip.defaultProps = {
  ripple: true,
  type: 'assist',
  color: 'primary'
}

Chip.displayName = 'Actify.Chip'

export { Chip }
