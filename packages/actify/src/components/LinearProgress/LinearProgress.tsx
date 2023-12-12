'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { setColor } from './../../utils'

const variants = tv({
  base: 'h-1 relative overflow-hidden'
})

const barVariants = tv({
  base: 'absolute animate-[auto_ease_0s_1_normal_none_running_none] transition-transform',
  variants: {
    indeterminate: {
      undefined: '',
      hidden: 'hidden',
      primary:
        'animate-[2s_linear_0s_infinite_normal_none_running_primary-indeterminate-translate]',
      secondary:
        'animate-[2s_linear_0s_infinite_normal_none_running_secondary-indeterminate-translate]'
    }
  }
})

const barInnerVariants = tv({
  base: 'absolute inset-0 animate-[auto_ease_0s_1_normal_none_running_none] bg-[--color]',
  variants: {
    indeterminate: {
      primary:
        'animate-[2s_linear_0s_infinite_normal_none_running_primary-indeterminate-scale]',
      secondary:
        'animate-[2s_linear_0s_infinite_normal_none_running_secondary-indeterminate-scale]'
    }
  }
})

interface LinearProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number | string
  color?: string
  indeterminate?: boolean
}

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(
  (props, ref) => {
    const {
      value,
      style,
      color = 'primary',
      indeterminate = false,
      className,
      ...rest
    } = props

    return (
      <>
        <style>
          {`@keyframes primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes primary-indeterminate-translate {
  0% {
    transform: translateX(0px);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0px);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(83.6714%));
  }
  100% {
    transform: translateX(calc(200.611%));
  }
}

@keyframes secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(
      0.205028,
      0.057051,
      0.57661,
      0.453971
    );
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(
      0.152313,
      0.196432,
      0.648374,
      1.00432
    );
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(
      0.257759,
      -0.003163,
      0.211762,
      1.38179
    );
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0px);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(calc(37.6519%));
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(calc(84.3862%));
  }
  100% {
    transform: translateX(calc(160.278%));
  }
}
`}
        </style>
        <div
          ref={ref}
          {...rest}
          style={
            { ...style, '--color': setColor(color) } as React.CSSProperties
          }
          className={variants({ className })}
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
              indeterminate: indeterminate ? 'primary' : undefined
            })}
            style={{
              blockSize: '100%',
              inlineSize: '100%',
              transition: 'none 0s ease 0s',
              transformOrigin: 'left center',
              insetInlineStart: indeterminate ? '-145.167%' : 0,
              transform: `scaleX(${indeterminate ? 1 : Number(value) / 100})`
            }}
          >
            <div
              className={barInnerVariants({
                indeterminate: indeterminate ? 'primary' : undefined
              })}
            ></div>
          </div>
          <div
            style={{
              blockSize: '100%',
              inlineSize: '100%',
              transition: 'none 0s ease 0s',
              transformOrigin: 'left center',
              insetInlineStart: '-54.8889%'
            }}
            className={barVariants({
              indeterminate: indeterminate ? 'secondary' : 'hidden'
            })}
          >
            <div
              className={barInnerVariants({
                indeterminate: indeterminate ? 'secondary' : undefined
              })}
            ></div>
          </div>
        </div>
      </>
    )
  }
)

LinearProgress.displayName = 'Actify.LinearProgress'

export default LinearProgress
