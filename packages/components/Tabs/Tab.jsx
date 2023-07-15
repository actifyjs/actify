import '@material/web/tabs/tab'
import { forwardRef } from 'react'

const Tab = forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <md-tab ref={ref} {...rest}>
      {children}
    </md-tab>
  )
})

Tab.displayName = 'Actify.Tab'

export default Tab
