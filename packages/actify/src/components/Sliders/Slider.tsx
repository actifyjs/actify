'use client'

import React, { useId, useMemo } from 'react'

import { Elevation } from './../Elevation'
import { FocusRing } from '../FocusRing'
import { Ripple } from './../Ripple'
import styles from './actify.module.css'
import { useInputState } from '../../hooks'

interface SliderProps extends React.ComponentProps<'input'> {
  labeled?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Slider = (props: SliderProps) => {
  const {
    id,
    size,
    min = 0,
    max = 100,
    step = 1,
    color = 'primary',
    value,
    labeled,
    disabled,
    children,
    onChange,
    className,
    defaultValue,
    ...rest
  } = props

  const sliderId = id || `actify-slider${useId()}`

  const [inputValue, setInputValue] = useInputState({
    value,
    defaultValue,
    onChange
  })

  const percent = useMemo(() => {
    if (inputValue) {
      return Number(inputValue) / (Number(max) - Number(min))
    }
    return 0
  }, [inputValue])

  return (
    <div className={styles['slider']} role="presentation">
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
        <input
          {...rest}
          min={min}
          max={max}
          step={step}
          type="range"
          id={sliderId}
          value={inputValue}
          disabled={disabled}
          onChange={setInputValue}
          className={styles['input']}
        />
        <div className={styles['track']} />
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
                <FocusRing id={sliderId} />
                <Ripple id={sliderId} disabled={disabled} />

                <div className={styles['handle-nub']}>
                  <Elevation disabled={disabled} />
                </div>
                {/* labeled */}
                {labeled && (
                  <div className={styles['label']}>
                    <span style={{ zIndex: 1 }}>
                      {inputValue ? parseInt(inputValue.toString()) : 0}
                    </span>
                  </div>
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
