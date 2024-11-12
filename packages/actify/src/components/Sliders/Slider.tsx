import { AriaSliderProps, useNumberFormatter, useSlider } from 'react-aria'

import { Label } from '../Label/Label'
import React from 'react'
import { Thumb } from './Thumb'
import clsx from 'clsx'
import styles from './slider.module.css'
import { useSliderState } from 'react-stately'

interface SliderProps extends AriaSliderProps {
  labeled?: boolean
  className?: string
  formatOptions?: Record<string, string>
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Slider = (props: SliderProps) => {
  const { labeled, minValue = 0, maxValue = 100 } = props

  const trackRef = React.useRef(null)
  const numberFormatter = useNumberFormatter(props.formatOptions)
  const state = useSliderState({ ...props, numberFormatter })
  const { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  )

  const percent =
    Number(state.getThumbValueLabel(0)) / (Number(maxValue) - Number(minValue))

  return (
    <div
      {...groupProps}
      style={
        {
          '--_tick-count': 100,
          '--_start-fraction': 0,
          '--_end-fraction': percent
        } as React.CSSProperties
      }
      className={clsx(styles['slider'], styles[state.orientation])}
    >
      {/* Create a container for the label and output element. */}
      {props.label && (
        <div className={styles['label-container']}>
          <Label {...labelProps}>{props.label}</Label>
          <output {...outputProps}>{state.getThumbValueLabel(0)}</output>
        </div>
      )}
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        className={clsx(
          styles['track'],
          state.isDisabled && styles['disabled']
        )}
      >
        <Thumb
          index={0}
          state={state}
          labeled={labeled}
          trackRef={trackRef}
          outputProps={outputProps}
        />
      </div>
    </div>
  )
}

export { Slider }
