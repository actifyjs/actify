import { MdOutlinedSegmentedButtonSet } from '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set'
import React from 'react'
import { createComponent } from '@lit/react'

const SegmentedButtonSetWebComponent = createComponent({
  react: React,
  tagName: 'md-segmented-button-set',
  elementClass: MdOutlinedSegmentedButtonSet
})

const SegmentedButtonSet = ({
  ...rest
}: React.ComponentProps<typeof SegmentedButtonSetWebComponent>) => {
  return <SegmentedButtonSetWebComponent {...rest} />
}

export { SegmentedButtonSet }
