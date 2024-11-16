import {
  AriaSliderThumbProps,
  VisuallyHidden,
  mergeProps,
  useFocusRing,
  useSliderThumb
} from 'react-aria'

import { Elevation } from '../Elevation/Elevation'
import { FocusRing } from '../FocusRing'
import React from 'react'
import { Ripple } from '../Ripple/Ripple'
import { SliderState } from 'react-stately'
import clsx from 'clsx'
import styles from './slider.module.css'

interface ThumbProps extends AriaSliderThumbProps {
  labeled?: boolean
  state: SliderState
  outputProps?: React.OutputHTMLAttributes<HTMLOutputElement>
  trackRef: React.RefObject<null>
}

const Thumb = (props: ThumbProps) => {
  const { labeled, outputProps, state, trackRef, index = 0, name } = props
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

  const { focusProps, isFocused, isFocusVisible } = useFocusRing()

  return (
    <div
      {...thumbProps}
      className={clsx(
        styles['handle'],
        isFocusVisible && styles['focus'],
        isDragging && styles['dragging']
      )}
    >
      <div className={styles['thumb']}>
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
        {isFocusVisible && <FocusRing />}
        <Ripple id={inputProps.id} disabled={state.isDisabled} />
        <Elevation disabled={state.isDisabled} />
        {/* labeled */}
        {labeled && (
          <output
            {...outputProps}
            className={styles['label']}
            style={{
              transform: `translateX(-50%) scale(${isFocused ? 1 : 0})`
            }}
          >
            <span style={{ zIndex: 1 }}>{state.getThumbValueLabel(index)}</span>
          </output>
        )}
      </div>
    </div>
  )
}

export { Thumb }
