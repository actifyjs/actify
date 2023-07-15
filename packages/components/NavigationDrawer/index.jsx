import { forwardRef } from 'react'
import '@material/web/labs/navigationdrawer/navigation-drawer'

const NavigationDrawer = forwardRef((props, ref) => {
  const { width, style, className, children, ...rest } = props
  let styles = {}
  if (width) {
    styles['--md-navigation-drawer-modal-container-width'] = width
  }
  return (
    <md-navigation-drawer ref={ref} {...rest} className={className} style={{ style, ...styles }}>
      {children}
    </md-navigation-drawer>
  )
})

NavigationDrawer.displayName = 'Actify.NavigationDrawer'

export default NavigationDrawer
