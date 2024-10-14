import React, { useId } from 'react'

import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import { tv } from 'tailwind-variants'

const action = tv({
  base: [
    'p-0',
    'flex',
    'relative',
    'no-underline',
    'outline-none',
    'items-center',
    'justify-center',
    '[border:none]',
    'appearance-none',
    'rounded-[inherit]',
    '[background:none]',
    'ps-[--icon-label-space]',
    'pe-[--with-trailing-icon-trailing-space]'
  ]
})

const icon = tv({
  base: [
    'z-[1]',
    'flex',
    'relative',
    'self-center',
    'fill-current',
    'size-[--icon-size]',
    'text-[--trailing-icon-color]'
  ],
  variants: {
    selected: {
      true: ['text-[--selected-trailing-icon-color]']
    },
    disabled: {
      true: [
        'text-[--disabled-trailing-icon-color]',
        'opacity-[--disabled-trailing-icon-opacity]'
      ]
    }
  }
})

const touch = tv({
  base: [
    'z-[1]',
    'h-12',
    'w-full',
    'absolute',
    'inset-[50%_0_0]',
    '-translate-y-1/2'
  ]
})

interface RemoveButtonProps extends React.ComponentProps<'button'> {
  selected?: boolean
  setHide: (hide: boolean) => void
}

const RemoveButton = (props: RemoveButtonProps) => {
  const { selected, disabled, setHide } = props
  const id = useId()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setHide(true)
  }
  return (
    <button
      id={id}
      tabIndex={-1}
      disabled={disabled}
      onClick={handleClick}
      className={action()}
    >
      <FocusRing />
      <Ripple
        id={id}
        disabled={disabled}
        className="rounded-full self-center mx-auto size-[calc(1.3333333333*var(--icon-size))]"
      />
      <span className={icon({ selected, disabled })} aria-hidden="true">
        <svg viewBox="0 96 960 960">
          <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
        </svg>
      </span>
      <span className={touch()}></span>
    </button>
  )
}

export default RemoveButton
