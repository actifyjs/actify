import { tv } from 'tailwind-variants'
import { RadioItem } from './RadioItem'
import { RadioProps, RadioProvider } from './RadioContext'

const root = tv({
  base: 'flex gap-2'
})

interface RadioGroupProps extends Omit<RadioProps, 'defaultChecked'> {}

const Radio = (props: RadioGroupProps) => {
  const { className, children, ...rest } = props
  return (
    <div className={root({ className })}>
      <RadioProvider {...rest}>{children}</RadioProvider>
    </div>
  )
}

Radio.displayName = 'Actify.Radio'

export default Object.assign(Radio, {
  Item: RadioItem
})
