import { FilledField } from '../Field'
import { Icon } from '../Icon'
import { Menu } from '../Menus'
import { OutlinedField } from '../Field'
import React from 'react'
import clsx from 'clsx'
import styles from './actify.module.css'

interface SelectContextProps {
  open: boolean
  setOpen: (open: boolean) => void
  displayText: string
  setDisplayText: (text: string) => void
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void
}
export const SelectContext = React.createContext<SelectContextProps | null>(
  null
)

interface SelectProps extends React.ComponentProps<'div'> {
  label?: string
  disabled?: boolean
  variant?: 'filled' | 'outlined'
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

const Select = (props: SelectProps) => {
  const {
    label,
    disabled,
    onChange,
    children,
    className,
    leadingIcon,
    trailingIcon,
    variant = 'filled'
  } = props

  const labelId = `label${React.useId()}`
  const [open, setOpen] = React.useState(false)
  const [focused, setFocused] = React.useState(false)
  const [displayText, setDisplayText] = React.useState('')

  const populated = React.useMemo(() => !!displayText, [displayText])

  const renderLeadingIcon = () => {
    return leadingIcon ? <>{leadingIcon}</> : null
  }

  const renderTrailingIcon = () => {
    return (
      <span className={clsx(styles['icon'], styles['trailing'])}>
        {trailingIcon ? (
          <>{trailingIcon}</>
        ) : (
          <Icon>{open ? 'arrow_drop_up' : 'arrow_drop_down'}</Icon>
        )}
      </span>
    )
  }

  const renderLabel = () => {
    // need to render &nbsp; so that line-height can apply and give it a
    // non-zero height
    return <div id={labelId}>{displayText || ' '}</div>
  }

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (open || disabled) {
      return
    }

    const isOpenKey =
      event.code === 'Space' ||
      event.code === 'ArrowDown' ||
      event.code === 'ArrowUp' ||
      event.code === 'End' ||
      event.code === 'Home' ||
      event.code === 'Enter'
    // Do not open if currently typing ahead because the user may be typing the
    // spacebar to match a word with a space
    if (isOpenKey) {
      event.preventDefault()
      setOpen(true)
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/#kbd_label
      switch (event.code) {
        case 'Space':
        case 'ArrowDown':
        case 'Enter':
          break
        case 'End':
          break
        case 'ArrowUp':
        case 'Home':
          break
        default:
          break
      }
      return
    }
  }

  const handleClick = () => {
    setOpen(!open)
  }

  let FieldTag = FilledField
  if (variant == 'filled') {
    FieldTag = FilledField
  }
  if (variant == 'outlined') {
    FieldTag = OutlinedField
  }

  return (
    <div
      role="presentation"
      onClick={handleClick}
      className={clsx(styles[`${variant}-select`], className)}
    >
      <span
        onFocus={() => setFocused(true)}
        className={clsx(styles['select'], open && styles['open'])}
      >
        <FieldTag
          label={label}
          role="combobox"
          focused={focused}
          populated={populated}
          aria-haspopup="listbox"
          aria-controls="listbox"
          tabIndex={disabled ? -1 : 0}
          aria-label={props['aria-label']}
          aria-describedby="description"
          aria-expanded={open ? 'true' : 'false'}
          onClick={handleClick}
          onKeyDown={handleKeydown}
          leadingIcon={renderLeadingIcon()}
          trailingIcon={renderTrailingIcon()}
        >
          {renderLabel()}
        </FieldTag>

        <div className="menu-wrapper">
          <SelectContext.Provider
            value={{ open, setOpen, displayText, setDisplayText, onChange }}
          >
            <Menu
              open={open}
              setOpen={setOpen}
              setFocused={setFocused}
              style={
                {
                  width: '100%',
                  '--__menu-min-width': '210px',
                  minWidth: 'var(--__menu-min-width)',
                  maxWidth: 'var(--__menu-max-width, inherit)'
                } as React.CSSProperties
              }
            >
              <>{children}</>
            </Menu>
          </SelectContext.Provider>
        </div>
      </span>
    </div>
  )
}

export { Select }
