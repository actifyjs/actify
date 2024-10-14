'use client'

import React, { useId } from 'react'

import { ChipProps } from './ChipItem'
import { Elevation } from './../Elevation'
import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import { tv } from 'tailwind-variants'

const root = tv({
  base: [
    '[--container-height:var(--md-assist-chip-container-height,32px)]',
    '[--disabled-label-text-color:var(--md-assist-chip-disabled-label-text-color,var(--md-sys-color-surface))]',
    '[--disabled-label-text-opacity:var(--md-assist-chip-disabled-label-text-opacity,0.38)]',
    '[--elevated-container-color:var(--md-assist-chip-elevated-container-color,var(--md-sys-color-surface-container-low,#f7f2fa))]',
    '[--elevated-container-elevation:var(--md-assist-chip-elevated-container-elevation,1)]',
    '[--elevated-container-shadow-color:var(--md-assist-chip-elevated-container-shadow-color,var(--md-sys-color-shadow,#000))]',
    '[--elevated-disabled-container-color:var(--md-assist-chip-elevated-disabled-container-color,var(--md-sys-color-on-surface,#1d1b20))]',
    '[--elevated-disabled-container-elevation:var(--md-assist-chip-elevated-disabled-container-elevation,0)]',
    '[--elevated-disabled-container-opacity:var(--md-assist-chip-elevated-disabled-container-opacity,0.12)]',
    '[--elevated-focus-container-elevation:var(--md-assist-chip-elevated-focus-container-elevation,1)]',
    '[--elevated-hover-container-elevation:var(--md-assist-chip-elevated-hover-container-elevation,2)]',
    '[--elevated-pressed-container-elevation:var(--md-assist-chip-elevated-pressed-container-elevation,1)]',
    '[--focus-label-text-color:var(--md-assist-chip-focus-label-text-color,var(--md-sys-color-on-surface))]',
    '[--hover-label-text-color:var(--md-assist-chip-hover-label-text-color,var(--md-sys-color-on-surface))]',
    '[--hover-state-layer-color:var(--md-assist-chip-hover-state-layer-color,var(--md-sys-color-on-surface))]',
    '[--hover-state-layer-opacity:var(--md-assist-chip-hover-state-layer-opacity,0.08)]',
    '[--label-text-color:var(--md-assist-chip-label-text-color,var(--md-sys-color-on-surface))]',
    '[--label-text-font:var(--md-assist-chip-label-text-font,var(--md-sys-typescale-label-large-font,var(--md-ref-typeface-plain,Roboto)))]',
    '[--label-text-line-height:var(--md-assist-chip-label-text-line-height,var(--md-sys-typescale-label-large-line-height,1.25rem))]',
    '[--label-text-size:var(--md-assist-chip-label-text-size,var(--md-sys-typescale-label-large-size,0.875rem))]',
    '[--label-text-weight:var(--md-assist-chip-label-text-weight,var(--md-sys-typescale-label-large-weight,var(--md-ref-typeface-weight-medium, 500)))]',
    '[--pressed-label-text-color:var(--md-assist-chip-pressed-label-text-color,var(--md-sys-color-on-surface))]',
    '[--pressed-state-layer-color:var(--md-assist-chip-pressed-state-layer-color,var(--md-sys-color-on-surface))]',
    '[--pressed-state-layer-opacity:var(--md-assist-chip-pressed-state-layer-opacity,0.12)]',
    '[--disabled-outline-color:var(--md-assist-chip-disabled-outline-color,var(--md-sys-color-on-surface))]',
    '[--disabled-outline-opacity:var(--md-assist-chip-disabled-outline-opacity,0.12)]',
    '[--focus-outline-color:var(--md-assist-chip-focus-outline-color,var(--md-sys-color-on-surface))]',
    '[--outline-color:var(--md-assist-chip-outline-color,rgb(var(--md-sys-color-outline)))]',
    '[--outline-width:var(--md-assist-chip-outline-width,1px)]',
    '[--disabled-leading-icon-color:var(--md-assist-chip-disabled-leading-icon-color,var(--md-sys-color-on-surface))]',
    '[--disabled-leading-icon-opacity:var(--md-assist-chip-disabled-leading-icon-opacity,0.38)]',
    '[--focus-leading-icon-color:var(--md-assist-chip-focus-leading-icon-color,var(--md-sys-color-primary))]',
    '[--hover-leading-icon-color:var(--md-assist-chip-hover-leading-icon-color,var(--md-sys-color-primary))]',
    '[--leading-icon-color:var(--md-assist-chip-leading-icon-color,var(--md-sys-color-primary))]',
    '[--icon-size:var(--md-assist-chip-icon-size,18px)]',
    '[--pressed-leading-icon-color:var(--md-assist-chip-pressed-leading-icon-color,var(--md-sys-color-primary))]',
    '[--container-shape-start-start:var(--md-assist-chip-container-shape-start-start,var(--md-assist-chip-container-shape,var(--md-sys-shape-corner-small,8px)))]',
    '[--container-shape-start-end:var(--md-assist-chip-container-shape-start-end,var(--md-assist-chip-container-shape,var(--md-sys-shape-corner-small,8px)))]',
    '[--container-shape-end-end:var(--md-assist-chip-container-shape-end-end,var(--md-assist-chip-container-shape,var(--md-sys-shape-corner-small,8px)))]',
    '[--container-shape-end-start:var(--md-assist-chip-container-shape-end-start,var(--md-assist-chip-container-shape,var(--md-sys-shape-corner-small,8px)))]',
    '[--leading-space:var(--md-assist-chip-leading-space,16px)]',
    '[--trailing-space:var(--md-assist-chip-trailing-space,16px)]',
    '[--icon-label-space:var(--md-assist-chip-icon-label-space,8px)]',
    '[--with-leading-icon-leading-space:var(--md-assist-chip-with-leading-icon-leading-space,8px)]',
    // border
    '[border-start-start-radius:var(--container-shape-start-start)]',
    '[border-start-end-radius:var(--container-shape-start-end)]',
    '[border-end-start-radius:var(--container-shape-end-start)]',
    '[border-end-end-radius:var(--container-shape-end-end)]',
    'inline-flex',
    'h-[var(--container-height)]',
    'cursor-pointer',
    '[-webkit-tap-highlight-color:rgba(0,0,0,0)]',
    '[--md-ripple-hover-color:var(--hover-state-layer-color)]',
    '[--md-ripple-hover-opacity:var(--hover-state-layer-opacity)]',
    '[--md-ripple-pressed-color:var(--pressed-state-layer-color)]',
    '[--md-ripple-pressed-opacity:var(--pressed-state-layer-opacity)]'
  ],
  variants: {
    disabled: {
      true: 'pointer-events-none'
    }
  }
})

const container = tv({
  base: [
    'flex',
    'relative',
    'size-full',
    'box-border',
    'rounded-[inherit]',
    // before
    'before:rounded-[inherit]',
    'before:absolute',
    'before:inset-0',
    'before:pointer-events-none'
  ],
  variants: {
    disabled: {
      true: 'pointer-events-none',
      false: 'cursor-pointer'
    }
  }
})

const outline = tv({
  base: [
    'inset-0',
    'absolute',
    'rounded-[inherit]',
    'pointer-events-none',
    '[border:var(--outline-width)_solid_var(--outline-color)]'
  ],
  variants: {
    disabled: {
      true: [
        '[border-color:var(--disabled-outline-color)]',
        'opacity-[--disabled-outline-opacity]'
      ]
    }
  }
})

const action = tv({
  base: [
    'p-0',
    'flex',
    'relative',
    'no-underline',
    'outline-none',
    '[border:none]',
    'items-baseline',
    'appearance-none',
    '[background:none]',
    'rounded-[inherit]'
  ],
  variants: {
    primary: {
      true: ['ps-[var(--leading-space)]', 'pe-[var(--trailing-space)]']
    },
    hasIcon: {
      true: ''
    }
  },
  compoundVariants: [
    {
      primary: true,
      hasIcon: true,
      className: 'ps-[var(--with-leading-icon-leading-space)]'
    }
  ]
})

const icon = tv({
  base: ['z-[1]', 'flex', 'relative', 'self-center', 'fill-current'],
  variants: {
    leading: {
      true: 'text[--leading-icon-color]'
    }
  }
})

const label = tv({
  base: [
    'flex',
    'z-[1]',
    'h-full',
    'select-none',
    'items-center',
    'text-ellipsis',
    'whitespace-nowrap',
    'font-[--label-text-weight]',
    'text-[--label-text-color]',
    'leading-[--label-text-line-height]',
    '[font-family:var(--label-text-font)]',
    '[font-size:var(--label-text-size)]'
  ],
  variants: {
    disabled: {
      true: [
        'text-[--disabled-label-text-color]',
        'opacity-[--disabled-label-text-opacity]'
      ]
    }
  }
})

const touch = tv({
  base: [
    'h-12',
    'z-[1]',
    'w-full',
    'absolute',
    'inset-[50%_0_0]',
    '-translate-y-1/2'
  ]
})

const ring = tv({
  base: [
    'text-primary',
    '[--md-focus-ring-shape-start-start:var(--container-shape-start-start)]',
    '[--md-focus-ring-shape-start-end:var(--container-shape-start-end)]',
    '[--md-focus-ring-shape-end-end:var(--container-shape-end-end)]',
    '[--md-focus-ring-shape-end-start:var(--container-shape-end-start)]'
  ]
})

interface AssitChipProps extends Omit<ChipProps, 'type'> {}

const AssitChip = (props: AssitChipProps) => {
  const {
    id,
    href,
    target,
    className,
    elevated,
    children,
    disabled = false,
    label: labelString,
    ...rest
  } = props

  const chipId = id || `actify-assit-chip${useId()}`

  const hasIcon = React.Children.toArray(children).find(
    (child) =>
      // @ts-ignore
      child?.type?.displayName == 'Actify.Icon'
  )
    ? true
    : false

  const renderLeadingIcon = () => {
    return (
      <span className={icon({ leading: true })} aria-hidden="true">
        {hasIcon &&
          React.Children.toArray(children).filter(
            // @ts-ignore
            (child) => child?.type?.displayName == 'Actify.Icon'
          )}
      </span>
    )
  }

  const renderPrimaryAction = ({
    href,
    primary
  }: {
    href?: string
    primary: boolean
  }) => {
    return href ? (
      <a
        id={chipId}
        href={href}
        target="_blank"
        className={action({ hasIcon, primary })}
      >
        {renderLeadingIcon()}
        <span className={label({ disabled })}>{labelString}</span>
        <span className={touch()} />
      </a>
    ) : (
      <button
        id={chipId}
        type="button"
        className={action({ hasIcon, primary })}
      >
        {renderLeadingIcon()}
        <span className={label({ disabled })}>{labelString}</span>
        <span className={touch()} />
      </button>
    )
  }

  return (
    <div
      {...rest}
      role="presentation"
      className={root({ disabled, className })}
    >
      <div className={container({ disabled })}>
        {elevated ? (
          <Elevation className="[--md-elevation-level:1]" />
        ) : (
          <span className={outline({ disabled })} />
        )}
        <FocusRing className={ring()} />
        <Ripple id={chipId} disabled={disabled} />
        {renderPrimaryAction({ href, primary: true })}
      </div>
    </div>
  )
}

AssitChip.displayName = 'Actify.AssitChip'

export { AssitChip }
