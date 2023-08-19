import React from 'react'
import '@material/web/labs/navigationdrawer/navigation-drawer-modal'

const NavigationDrawerModal = React.forwardRef((props, ref) => {
  const { width, style, className, children, ...rest } = props
  let styles = {}
  styles['--md-navigation-drawer-modal-container-width'] = width ?? 0

  return (
    <md-navigation-drawer-modal ref={ref} {...rest} class={className} style={{ style, ...styles }}>
      {children}
    </md-navigation-drawer-modal>
  )
})

NavigationDrawerModal.displayName = 'Actify.NavigationDrawerModal'

export default NavigationDrawerModal
