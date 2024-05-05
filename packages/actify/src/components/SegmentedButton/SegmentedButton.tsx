'use client'
import Root from './Root'
import { forwardRef } from 'react'
import { RootProps } from './Root'
import { tv } from 'tailwind-variants'
import { SegmentedButtonProvider } from './Context'

const root = tv({
  base: ['flex', 'font-medium', 'tracking-wide']
})
interface SegmentedButtonProps extends Omit<RootProps, 'onChange'> {
  multiple?: boolean
  activeIndex?: number[]
  onChange?: (_: number[]) => void
  setMutiple?: (value: boolean) => void
  setActiveIndex?: (value: number[]) => void
}

const SegmentedButton = forwardRef<HTMLDivElement, SegmentedButtonProps>(
  (props, ref?) => {
    const {
      color,
      style,
      variant,
      multiple,
      className,
      children,
      onChange,
      activeIndex,
      ripple = true,
      ...rest
    } = props

    return (
      <SegmentedButtonProvider {...{ activeIndex, multiple, onChange }}>
        <div ref={ref} {...rest} style={style} className={root()}>
          <Root {...{ color, ripple, variant }}>{children}</Root>
        </div>
      </SegmentedButtonProvider>
    )
  }
)

SegmentedButton.displayName = 'Actify.SegmentedButton'

export { SegmentedButton }
