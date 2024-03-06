'use client'
import { motion } from 'framer-motion'
import { ChipProps } from './ChipItem'
import { tv } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { Elevation } from '@actify/Elevation'
import { FocusRing } from '@actify/FocusRing'
import { useChip } from './ChipContext'
import RemoveButton from './RemoveButton'
import React, { useState, forwardRef, useId } from 'react'

const root = tv({
  base: [
    '[--container-height:var(--md-assist-chip-container-height,32px)]',
    '[--disabled-label-text-color:var(--md-assist-chip-disabled-label-text-color,rgb(var(--color-on-surface)))]',
    '[--disabled-label-text-opacity:var(--md-assist-chip-disabled-label-text-opacity,0.38)]',
    '[--elevated-container-color:var(--md-assist-chip-elevated-container-color,var(--md-sys-color-surface-container-low,#f7f2fa))]',
    '[--elevated-container-elevation:var(--md-assist-chip-elevated-container-elevation,1)]',
    '[--elevated-container-shadow-color:var(--md-assist-chip-elevated-container-shadow-color,var(--md-sys-color-shadow,#000))]',
    '[--elevated-disabled-container-color:var(--md-assist-chip-elevated-disabled-container-color,var(--color-on-surface,#1d1b20))]',
    '[--elevated-disabled-container-elevation:var(--md-assist-chip-elevated-disabled-container-elevation,0)]',
    '[--elevated-disabled-container-opacity:var(--md-assist-chip-elevated-disabled-container-opacity,0.12)]',
    '[--elevated-focus-container-elevation:var(--md-assist-chip-elevated-focus-container-elevation,1)]',
    '[--elevated-hover-container-elevation:var(--md-assist-chip-elevated-hover-container-elevation,2)]',
    '[--elevated-pressed-container-elevation:var(--md-assist-chip-elevated-pressed-container-elevation,1)]',
    '[--focus-label-text-color:var(--md-assist-chip-focus-label-text-color,rgb(var(--color-on-surface)))]',
    '[--hover-label-text-color:var(--md-assist-chip-hover-label-text-color,rgb(var(--color-on-surface)))]',
    '[--hover-state-layer-color:var(--md-assist-chip-hover-state-layer-color,rgb(var(--color-on-surface)))]',
    '[--hover-state-layer-opacity:var(--md-assist-chip-hover-state-layer-opacity,0.08)]',
    '[--label-text-color:var(--md-assist-chip-label-text-color,rgb(var(--color-on-surface)))]',
    '[--label-text-font:var(--md-assist-chip-label-text-font,var(--md-sys-typescale-label-large-font,var(--md-ref-typeface-plain,Roboto)))]',
    '[--label-text-line-height:var(--md-assist-chip-label-text-line-height,var(--md-sys-typescale-label-large-line-height,1.25rem))]',
    '[--label-text-size:var(--md-assist-chip-label-text-size,var(--md-sys-typescale-label-large-size,0.875rem))]',
    '[--label-text-weight:var(--md-assist-chip-label-text-weight,var(--md-sys-typescale-label-large-weight,var(--md-ref-typeface-weight-medium, 500)))]',
    '[--pressed-label-text-color:var(--md-assist-chip-pressed-label-text-color,rgb(var(--color-on-surface)))]',
    '[--pressed-state-layer-color:var(--md-assist-chip-pressed-state-layer-color,rgb(var(--color-on-surface)))]',
    '[--pressed-state-layer-opacity:var(--md-assist-chip-pressed-state-layer-opacity,0.12)]',
    '[--disabled-outline-color:var(--md-assist-chip-disabled-outline-color,rgb(var(--color-on-surface)))]',
    '[--disabled-outline-opacity:var(--md-assist-chip-disabled-outline-opacity,0.12)]',
    '[--disabled-trailing-icon-color:var(--md-filter-chip-disabled-trailing-icon-color,rgb(var(--color-on-surface)))]',
    '[--disabled-trailing-icon-opacity:var(--md-filter-chip-disabled-trailing-icon-opacity,0.38)]',
    '[--focus-outline-color:var(--md-assist-chip-focus-outline-color,rgb(var(--color-on-surface)))]',
    '[--outline-color:var(--md-assist-chip-outline-color,rgb(var(--color-outline)))]',
    '[--outline-width:var(--md-assist-chip-outline-width,1px)]',
    '[--disabled-leading-icon-color:var(--md-assist-chip-disabled-leading-icon-color,rgb(var(--color-on-surface)))]',
    '[--disabled-leading-icon-opacity:var(--md-assist-chip-disabled-leading-icon-opacity,0.38)]',
    '[--focus-leading-icon-color:var(--md-assist-chip-focus-leading-icon-color,rgb(var(--color-primary)))]',
    '[--hover-leading-icon-color:var(--md-assist-chip-hover-leading-icon-color,rgb(var(--color-primary))]',
    '[--leading-icon-color:var(--md-assist-chip-leading-icon-color,rgb(var(--color-primary)))]',
    '[--icon-size:var(--md-assist-chip-icon-size,18px)]',
    '[--pressed-leading-icon-color:var(--md-assist-chip-pressed-leading-icon-color,rgb(var(--color-primary)))]',
    '[--container-shape-start-start:var(--md-assist-chip-container-shape-start-start,var(--md-assist-chip-container-shape,var(--md-sys-shape-corner-small,8px)))]',
    '[--container-shape-start-end:var(--md-assist-chip-container-shape-start-end,var(--md-assist-chip-container-shape,var(--md-sys-shape-corner-small,8px)))]',
    '[--container-shape-end-end:var(--md-assist-chip-container-shape-end-end,var(--md-assist-chip-container-shape,var(--md-sys-shape-corner-small,8px)))]',
    '[--container-shape-end-start:var(--md-assist-chip-container-shape-end-start,var(--md-assist-chip-container-shape,var(--md-sys-shape-corner-small,8px)))]',
    '[--leading-space:var(--md-assist-chip-leading-space,16px)]',
    '[--trailing-space:var(--md-assist-chip-trailing-space,16px)]',
    '[--icon-label-space:var(--md-assist-chip-icon-label-space,8px)]',
    '[--with-leading-icon-leading-space:var(--md-assist-chip-with-leading-icon-leading-space,8px)]',
    '[--with-trailing-icon-trailing-space:var(--md-filter-chip-with-trailing-icon-trailing-space,8px)]',
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
    '[--md-ripple-pressed-opacity:var(--pressed-state-layer-opacity)]',
    '[--selected-outline-width:var(--md-filter-chip-selected-outline-width,0px)]',
    '[--selected-container-color:var(--md-filter-chip-selected-container-color,rgb(var(--color-secondary-container)))]',
    '[--selected-leading-icon-color:var(--md-filter-chip-selected-leading-icon-color,rgb(var(--color-on-secondary-container)))]'
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
    },
    selected: {
      true: [
        '[--md-ripple-hover-color:var(--selected-hover-state-layer-color)]',
        '[--md-ripple-hover-opacity:var(--selected-hover-state-layer-opacity)]',
        '[--md-ripple-pressed-color:var(--selected-pressed-state-layer-color)]',
        '[--md-ripple-pressed-opacity:var(--selected-pressed-state-layer-opacity)]',
        // before
        'before:[background:var(--selected-container-color)]'
      ]
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
    selected: {
      true: '[border-width:var(--selected-outline-width)]'
    },
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
    },
    removable: {
      true: 'pe-0'
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

const checkmark = tv({
  base: ['size-[--icon-size]', 'text-[var(--selected-leading-icon-color)]']
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
    '[--md-focus-ring-shape-start-start:var(--container-shape-start-start)]',
    '[--md-focus-ring-shape-start-end:var(--container-shape-start-end)]',
    '[--md-focus-ring-shape-end-end:var(--container-shape-end-end)]',
    '[--md-focus-ring-shape-end-start:var(--container-shape-end-start)]'
  ]
})

interface AssitChipProps extends Omit<ChipProps, 'type'> {}

const FilterChip = forwardRef<HTMLDivElement, AssitChipProps>((props, ref) => {
  const {
    href,
    index,
    style,
    target,
    children,
    className,
    elevated = false,
    disabled = false,
    removable = false,
    label: labelString,
    ...rest
  } = props

  const id = useId()
  const chip = useChip()
  const [hide, setHide] = useState(false)
  const selected = chip.selected?.includes(index!)

  const hasIcon = React.Children.toArray(children).find(
    (child) =>
      // @ts-ignore
      child?.type?.displayName == 'Actify.Icon'
  )
    ? true
    : false

  const renderLeadingIcon = () => {
    if (!selected) {
      return (
        hasIcon && (
          <span className={icon({ leading: true })} aria-hidden="true">
            {React.Children.toArray(children).filter(
              // @ts-ignore
              (child) => child?.type?.displayName == 'Actify.Icon'
            )}
          </span>
        )
      )
    }
    return (
      <span className={icon({ leading: true })} aria-hidden="true">
        <svg className={checkmark()} viewBox="0 0 18 18" aria-hidden="true">
          <path d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z" />
        </svg>
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
        id={id}
        href={href}
        target="_blank"
        className={action({ removable, hasIcon, primary })}
      >
        {renderLeadingIcon()}
        <span className={label({ disabled })}>{labelString}</span>
        <span className={touch()}></span>
      </a>
    ) : (
      <button
        id={id}
        type="button"
        className={action({ removable, hasIcon, primary })}
      >
        {renderLeadingIcon()}
        <span className={label({ disabled })}>{labelString}</span>
        <span className={touch()}></span>
      </button>
    )
  }

  const handleClick = () => {
    if (selected) {
      const _index = chip.selected?.findIndex((item) => item == index)
      const _selected = [...chip.selected!]
      _selected.splice(_index as number, 1)
      chip.onChange?.(_selected)
    } else {
      const _selected = [...chip.selected!]
      _selected.push(index!)
      chip.onChange?.(_selected)
    }
  }

  if (hide) {
    return null
  }

  return (
    <div
      {...rest}
      ref={ref}
      style={style}
      role="presentation"
      className={root({ disabled, className })}
    >
      <motion.div
        layout
        onClick={handleClick}
        className={container({ selected, disabled })}
      >
        {elevated ? (
          <Elevation level={1} />
        ) : (
          <span className={outline({ selected, disabled })}></span>
        )}
        <FocusRing id={id} className={ring()} />
        <Ripple id={id} disabled={disabled} />
        {renderPrimaryAction({ href, primary: true })}
        {removable && <RemoveButton disabled={disabled} setHide={setHide} />}
      </motion.div>
    </div>
  )
})

FilterChip.displayName = 'Actify.FilterChip'

export default FilterChip
