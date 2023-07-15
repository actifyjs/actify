import { forwardRef } from 'react'
import Icon from '@/packages/components/Icon'
import '@material/web/labs/navigationtab/navigation-tab'

const NavigationTab = forwardRef((props, ref) => {
  const { activeIcon, inactiveIcon, children, ...rest } = props
  return (
    <md-navigation-tab ref={ref} {...rest}>
      <Icon slot="activeIcon">{activeIcon && <>{activeIcon}</>}</Icon>
      <Icon slot="inactiveIcon">{inactiveIcon && <>{inactiveIcon}</>}</Icon>
    </md-navigation-tab>
  )
})

NavigationTab.displayName = 'Actify.NavigationTab'

export default NavigationTab
