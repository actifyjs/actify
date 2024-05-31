import { MdOutlinedSegmentedButton } from '@material/web/labs/segmentedbutton/outlined-segmented-button'
import React from 'react'
import { createComponent } from '@lit/react'

const SegmentedButtonWebComponent = createComponent({
  react: React,
  tagName: 'md-outlined-segmented-button',
  elementClass: MdOutlinedSegmentedButton
})

const SegmentedButton = ({
  ...rest
}: React.ComponentProps<typeof SegmentedButtonWebComponent>) => {
  return <SegmentedButtonWebComponent {...rest} />
}

export { SegmentedButton }
