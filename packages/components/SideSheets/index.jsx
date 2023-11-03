import PropTypes from 'prop-types'
import { Content } from './Content'
import { Activator } from './Activator'
import React, { forwardRef } from 'react'
import { SideSheetsProvider } from './Context'

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, SideSheetsPropTypes>
 */

const SideSheetsRoot = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <SideSheetsProvider ref={ref} {...rest}>
      {children}
    </SideSheetsProvider>
  )
})

const SideSheetsPropTypes = {
  style: PropTypes.object,
  open: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

SideSheetsRoot.propTypes = SideSheetsPropTypes

SideSheetsRoot.displayName = 'Actify.SideSheets'

export const SideSheets = Object.assign(SideSheetsRoot, {
  Activator,
  Content
})
