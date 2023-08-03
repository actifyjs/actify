import { forwardRef } from 'react'
import { icons } from 'lucide-react'
import { setColor } from '@/packages/utils'

const Icon = forwardRef((props, ref) => {
  const { name, color, size, className } = props
  const LucideIcon = icons[name]

  return (
    <i className={className}>
      <LucideIcon ref={ref} color={setColor(color)} size={size} />
    </i>
  )
})

Icon.displayName = 'Actify.Icon'

export default Icon
