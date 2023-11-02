import PropTypes from 'prop-types'
import { Content } from './Content'
import { Activator } from './Activator'
import React, { forwardRef } from 'react'
import { BottomSheetsProvider } from './Context'

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, BottomSheetsPropTypes>
 */

const BottomSheetsRoot = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <BottomSheetsProvider ref={ref} {...rest}>
      {children}
    </BottomSheetsProvider>
  )
})

const BottomSheetsPropTypes = {
  style: PropTypes.object,
  open: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

BottomSheetsRoot.propTypes = BottomSheetsPropTypes

BottomSheetsRoot.displayName = 'Actify.BottomSheets'

export const BottomSheets = Object.assign(BottomSheetsRoot, {
  Activator,
  Content
})
