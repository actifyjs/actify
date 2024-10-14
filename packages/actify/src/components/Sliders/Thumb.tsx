import {
  AriaSliderThumbProps,
  mergeProps,
  useFocusRing,
  useSliderThumb
} from 'react-aria'

import React from 'react'
import { SliderState } from 'react-stately'
import clsx from 'clsx'
import styles from './slider.module.css'

type ThumbProps = {
  state: SliderState
  trackRef: React.RefObject<null>
} & AriaSliderThumbProps

const Thumb = (props: ThumbProps) => {
  const { state, trackRef, index, name } = props
  const inputRef = React.useRef(null)
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
      name
    },
    state
  )

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <div
      {...thumbProps}
      className={clsx([
        styles['input'],
        isFocusVisible && 'focus',
        isDragging && 'dragging'
      ])}
    >
      <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
    </div>
  )
}

export { Thumb }
