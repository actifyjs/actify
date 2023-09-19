import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Ripple } from 'actify'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative inline-flex items-center gap-2 px-4 h-8 rounded-lg text-sm border border-outline no-underline hover:bg-black/10 dark:hover:bg-white/10',
  variants: {
    type: {
      assist: '',
      filter: '',
      input: '',
      suggestion: ''
    }
  }
})

const Chip = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(true)
  const [selected, setSelected] = React.useState(false)
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
    rest?.onClick(e)
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
        className={variants({ type, className })}
        onClick={handleClick}
      >
        {type == 'filter' && (
          <Icon
            name={`${selected ? 'Check' : 'Circle'}`}
            size={18}
            color={color}
          />
        )}
        {label}
        {ripple && <Ripple />}
        {type == 'input' && (
          <Icon
            name="X"
            size={18}
            onClick={() => setShow(false)}
            className="hover:after:rounded-full hover:after:absolute hover:after:-inset-1 hover:after:bg-black/5 dark:hover:after:bg-white/5"
          />
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

export default Chip
