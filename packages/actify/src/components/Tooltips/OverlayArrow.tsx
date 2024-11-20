'use client'

import {
  ContextValue,
  RenderProps,
  useContextProps,
  useRenderProps
} from './../../utils'
import React, {
  CSSProperties,
  HTMLAttributes,
  RefObject,
  createContext
} from 'react'

import { PlacementAxis } from 'react-aria'

interface OverlayArrowContextValue extends OverlayArrowProps {
  placement: PlacementAxis | null
}

export const OverlayArrowContext = createContext<
  ContextValue<OverlayArrowContextValue, HTMLDivElement>
>({
  placement: 'bottom'
})

export interface OverlayArrowProps
  extends Omit<
      HTMLAttributes<HTMLDivElement>,
      'className' | 'style' | 'children'
    >,
    RenderProps<OverlayArrowRenderProps> {}

export interface OverlayArrowRenderProps {
  /**
   * The placement of the overlay relative to the trigger.
   * @selector [data-placement="left | right | top | bottom"]
   */
  placement: PlacementAxis | null
}

function OverlayArrow({
  ref,
  ...props
}: OverlayArrowProps & { ref?: React.RefObject<HTMLDivElement> }) {
  ;[props, ref as any] = useContextProps(
    props,
    ref as RefObject<HTMLDivElement | null>,
    OverlayArrowContext
  )
  const placement = (props as OverlayArrowContextValue).placement
  const style: CSSProperties = {
    position: 'absolute',
    transform:
      placement === 'top' || placement === 'bottom'
        ? 'translateX(-50%)'
        : 'translateY(-50%)'
  }
  if (placement != null && placement !== 'center') {
    style[placement] = '100%'
  }

  const renderProps = useRenderProps({
    ...props,
    defaultClassName: 'react-aria-OverlayArrow',
    values: {
      placement
    }
  })
  // remove undefined values from renderProps.style object so that it can be
  // spread merged with the other style object
  if (renderProps.style) {
    Object.keys(renderProps.style).forEach(
      (key) =>
        renderProps.style![key as keyof CSSProperties] === undefined &&
        delete renderProps.style![key as keyof CSSProperties]
    )
  }
  return (
    <div
      ref={ref}
      {...props}
      {...renderProps}
      data-placement={placement}
      style={{
        ...style,
        ...renderProps.style
      }}
    />
  )
}

export { OverlayArrow }
