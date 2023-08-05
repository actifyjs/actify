import { forwardRef } from 'react'
import { Icon } from '@/packages/components'
import '@material/web/labs/navigationtab/navigation-tab'

const NavigationTab = forwardRef((props, ref) => {
  const { activeIcon, inactiveIcon, children, ...rest } = props
  return (
    <md-navigation-tab ref={ref} {...rest}>
      <span slot="activeIcon">{activeIcon && <Icon name="activeIcon" />}</span>
      <span slot="inactiveIcon">{inactiveIcon && <Icon name="inactiveIcon" />}</span>
    </md-navigation-tab>
  )
})

NavigationTab.displayName = 'Actify.NavigationTab'

export default NavigationTab
