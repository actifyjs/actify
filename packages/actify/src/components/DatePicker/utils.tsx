import DatePickerContext from './DatePickerContext'
import React, { useCallback, useContext } from 'react'
import {
  X,
  CalendarDays,
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight
} from 'lucide-react'

import { BG_COLOR, BORDER_COLOR, BUTTON_COLOR, RING_COLOR } from './constants'

interface IconProps {
  className: string
}

interface Button {
  active?: boolean
  padding?: string
  disabled?: boolean
  roundedFull?: boolean
  children: JSX.Element | JSX.Element[]
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const DateIcon: React.FC<IconProps> = ({ className }) => {
  return <CalendarDays className={className} />
}

export const CloseIcon: React.FC<IconProps> = ({ className }) => {
  return <X className={className} />
}

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => {
  return <ChevronLeft className={className} />
}

export const DoubleChevronLeftIcon: React.FC<IconProps> = ({ className }) => {
  return <ChevronsLeft className={className} />
}

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => {
  return <ChevronRight className={className} />
}

export const DoubleChevronRightIcon: React.FC<IconProps> = ({ className }) => {
  return <ChevronsRight className={className} />
}

// eslint-disable-next-line react/display-name,@typescript-eslint/ban-types
export const Arrow = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600"
    />
  )
})

export const SecondaryButton: React.FC<Button> = ({
  children,
  onClick,
  disabled = false
}) => {
  // Contexts
  const { primaryColor } = useContext(DatePickerContext)

  // Functions
  const getClassName: () => string = useCallback(() => {
    const ringColor =
      RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus]
    return `w-full transition-all duration-300 bg-white dark:text-gray-700 font-medium border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 ${ringColor}`
  }, [primaryColor])

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={getClassName()}
    >
      {children}
    </button>
  )
}

export const PrimaryButton: React.FC<Button> = ({
  children,
  onClick,
  disabled = false
}) => {
  // Contexts
  const { primaryColor } = useContext(DatePickerContext)
  const bgColor =
    BG_COLOR['500'][primaryColor as keyof (typeof BG_COLOR)['500']]
  const borderColor =
    BORDER_COLOR['500'][primaryColor as keyof (typeof BORDER_COLOR)['500']]
  const bgColorHover =
    BG_COLOR.hover[primaryColor as keyof typeof BG_COLOR.hover]
  const ringColor =
    RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus]

  // Functions
  const getClassName = useCallback(() => {
    return `w-full transition-all duration-300 ${bgColor} ${borderColor} text-white font-medium border px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 ${bgColorHover} ${ringColor} ${
      disabled ? ' cursor-no-drop' : ''
    }`
  }, [bgColor, bgColorHover, borderColor, disabled, ringColor])

  return (
    <button
      type="button"
      className={getClassName()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const RoundedButton: React.FC<Button> = ({
  children,
  onClick,
  disabled,
  roundedFull = false,
  padding = 'py-[0.55rem]',
  active = false
}) => {
  // Contexts
  const { primaryColor } = useContext(DatePickerContext)

  // Functions
  const getClassName = useCallback(() => {
    const darkClass =
      'dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10'
    const activeClass = active ? 'font-semibold bg-gray-50 dark:bg-white/5' : ''
    const defaultClass = !roundedFull
      ? `w-full tracking-wide ${darkClass} ${activeClass} transition-all duration-300 px-3 ${padding} uppercase hover:bg-gray-100 rounded-md focus:ring-1`
      : `${darkClass} ${activeClass} transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1`
    const buttonFocusColor =
      BUTTON_COLOR.focus[primaryColor as keyof typeof BUTTON_COLOR.focus]
    const disabledClass = disabled ? 'line-through' : ''

    return `${defaultClass} ${buttonFocusColor} ${disabledClass}`
  }, [disabled, padding, primaryColor, roundedFull, active])

  return (
    <button
      type="button"
      className={getClassName()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const VerticalDash = () => {
  // Contexts
  const { primaryColor } = useContext(DatePickerContext)
  const bgColor =
    BG_COLOR['500'][primaryColor as keyof (typeof BG_COLOR)['500']]

  return (
    <div
      className={`bg-blue-500 h-7 w-1 rounded-full hidden md:block ${bgColor}`}
    />
  )
}
