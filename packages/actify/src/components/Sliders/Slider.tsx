'use client'

import { AriaSliderProps, useNumberFormatter, useSlider } from 'react-aria'
import React, { useId } from 'react'

import { Elevation } from './../Elevation'
import { FocusRing } from '../FocusRing'
import { Ripple } from './../Ripple'
import { Thumb } from './Thumb'
import clsx from 'clsx'
import styles from './slider.module.css'
import { useSliderState } from 'react-stately'

type SliderProps = {
  labeled?: boolean
  className?: string
  formatOptions?: Record<string, string>
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
} & AriaSliderProps

const Slider = (props: SliderProps) => {
  const {
    id,
    labeled,
    className,
    minValue = 0,
    maxValue = 100,
    isDisabled
  } = props

  const sliderId = id || `actify-slider${useId()}`
  const trackRef = React.useRef(null)
  const numberFormatter = useNumberFormatter(props.formatOptions)
  const state = useSliderState({ ...props, numberFormatter })

  const { groupProps, trackProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  )

  const percent =
    Number(state.getThumbValueLabel(0)) / (Number(maxValue) - Number(minValue))

  return (
    <div
      {...groupProps}
      role="presentation"
      className={clsx(styles['slider'], className)}
    >
      <div
        style={
          {
            '--_tick-count': 100,
            '--_start-fraction': 0,
            '--_end-fraction': percent
          } as React.CSSProperties
        }
        className={styles['container']}
      >
        <div
          {...trackProps}
          ref={trackRef}
          style={{
            position: 'absolute',
            inset: 0
          }}
          className={clsx(state.isDisabled && 'disabled')}
        >
          <Thumb index={0} state={state} trackRef={trackRef} />
        </div>
        <div className={styles['track']}></div>
        <div className={styles['handle-container-padded']}>
          <div className={styles['handle-container-block']}>
            <div className={styles['handle-container']}>
              <div
                style={{
                  zIndex: 1,
                  insetInlineEnd: 'calc(0px - var(--_state-layer-size) / 2)'
                }}
                className={styles['handle']}
              >
                <FocusRing />
                <Ripple id={sliderId} disabled={isDisabled} />

                <div className={styles['handle-nub']}>
                  <Elevation disabled={isDisabled} />
                </div>
                {/* labeled */}
                {labeled && (
                  <output className={styles['label']} {...outputProps}>
                    <span style={{ zIndex: 1 }}>
                      {state.getThumbValueLabel(0)}
                    </span>
                  </output>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Slider.displayName = 'Actify.Slider'

export { Slider }
