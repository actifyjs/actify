import React from 'react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { setColor } from '@/packages/utils'

const variants = tv({
  base: 'h-1 relative overflow-hidden'
})

const barVariants = tv({
  base: 'absolute animate-[auto_ease_0s_1_normal_none_running_none] transition-transform',
  variants: {
    indeterminate: {
      hidden: 'hidden',
      primary:
        'animate-[2s_linear_0s_infinite_normal_none_running_primary-indeterminate-translate]',
      secondary:
        'animate-[2s_linear_0s_infinite_normal_none_running_secondary-indeterminate-translate]'
    }
  }
})

const barInnerVariants = tv({
  base: 'absolute inset-0 animate-[auto_ease_0s_1_normal_none_running_none] bg-[var(--color, #1976d2)]',
  variants: {
    indeterminate: {
      primary:
        'animate-[2s_linear_0s_infinite_normal_none_running_primary-indeterminate-scale]',
      secondary:
        'animate-[2s_linear_0s_infinite_normal_none_running_secondary-indeterminate-scale]'
    }
  }
})

const LinearProgress = React.forwardRef((props, ref) => {
  const { value, indeterminate, style, color, className, ...rest } = props

  return (
    <div
      ref={ref}
      {...rest}
      style={{ ...style, '--color': setColor(color) }}
      className={variants({ indeterminate, className })}
    >
      <div
        className="absolute inset-0 bg-surface"
        style={{
          transform: 'scaleX(1)',
          transformOrigin: 'left center',
          transition: 'transform 250ms cubic-bezier(0.4, 0, 0.6, 1) 0s'
        }}
      />
      <div
        className={barVariants({
          indeterminate: indeterminate ? 'primary' : null
        })}
        style={{
          blockSize: '100%',
          inlineSize: '100%',
          insetInlineStart: indeterminate ? '-145.167%' : 0,
          backgroundColor: 'var(--color)',
          transition: 'none 0s ease 0s',
          transformOrigin: 'left center',
          transform: `scaleX(${indeterminate ? 1 : value})`
        }}
      >
        <div
          className={barInnerVariants({
            indeterminate: indeterminate ? 'primary' : null
          })}
        ></div>
      </div>
      <div
        style={{
          blockSize: '100%',
          inlineSize: '100%',
          transition: 'none 0s ease 0s',
          backgroundColor: 'var(--color)',
          transformOrigin: 'left center',
          insetInlineStart: '-54.8889%'
        }}
        className={barVariants({
          indeterminate: indeterminate ? 'secondary' : 'hidden'
        })}
      >
        <div
          className={barInnerVariants({
            indeterminate: indeterminate ? 'secondary' : null
          })}
        ></div>
      </div>
    </div>
  )
})

LinearProgress.propTypes = {
  color: PropTypes.string,
  indeterminate: PropTypes.bool
}

LinearProgress.defaultProps = {
  color: 'primary',
  indeterminate: false
}

LinearProgress.displayName = 'Actify.LinearProgress'

export default LinearProgress
