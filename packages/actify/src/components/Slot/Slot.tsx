import React from 'react'
import { mergeRefs } from './../../hooks/mergeRefs'
import { twMerge } from 'tailwind-merge'

/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/

interface SlotProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode
}

const Slot = (props: SlotProps) => {
  const { ref: forwardedRef, children, ...slotProps } = props
  const childrenArray = React.Children.toArray(children)
  const slottable = childrenArray.find(isSlottable)

  if (slottable) {
    // the new element to render is the one passed as a child of `Slottable`
    const newElement = slottable.props.children as React.ReactNode

    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        // because the new element will be the one rendered, we are only interested
        // in grabbing its children (`newElement.props.children`)
        if (React.Children.count(newElement) > 1)
          return React.Children.only(null)
        return React.isValidElement(newElement)
          ? (newElement.props.children as React.ReactNode)
          : null
      } else {
        return child
      }
    })

    return (
      <SlotClone {...slotProps} ref={forwardedRef}>
        {React.isValidElement(newElement)
          ? React.cloneElement(newElement, undefined, newChildren)
          : null}
      </SlotClone>
    )
  }

  return (
    <SlotClone {...slotProps} ref={forwardedRef}>
      {children}
    </SlotClone>
  )
}

Slot.displayName = 'Slot'

/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/

interface SlotCloneProps extends React.ComponentPropsWithoutRef<'div'> {
  ref?: any
  children: React.ReactNode
}

const SlotClone = (props: SlotCloneProps) => {
  const { ref: forwardedRef, children, ...slotProps } = props

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef
        ? mergeRefs(forwardedRef, (children as any).ref)
        : (children as any).ref
    })
  }

  return React.Children.count(children) > 1 ? React.Children.only(null) : null
}

SlotClone.displayName = 'SlotClone'

/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/

const Slottable = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>
}

/* ---------------------------------------------------------------------------------------------- */

type AnyProps = Record<string, any>

function isSlottable(child: React.ReactNode): child is React.ReactElement {
  return React.isValidElement(child) && child.type === Slottable
}

function mergeProps(slotProps: AnyProps, childProps: AnyProps) {
  // all child props should override
  const overrideProps = { ...childProps }

  // parentProps
  let parentProps: AnyProps = {}
  for (const propName in slotProps) {
    const isHandler = /^on[A-Z]/.test(propName)
    if (propName != 'style' && propName != 'className' && !isHandler) {
      parentProps[propName] = slotProps[propName]
      delete slotProps[propName]
    }
  }

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName]
    const childPropValue = childProps[propName]

    const isHandler = /^on[A-Z]/.test(propName)
    if (isHandler) {
      // if the handler exists on both, we compose them
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args)
          slotPropValue(...args)
        }
      }
      // but if it exists only on the slot, we use only this one
      else if (slotPropValue) {
        overrideProps[propName] = slotPropValue
      }
    }
    // if it's `style`, we merge them
    else if (propName === 'style') {
      if (typeof overrideProps[propName] == 'function') {
        overrideProps[propName] = overrideProps[propName]({ ...parentProps })
      } else {
        overrideProps[propName] = { ...slotPropValue, ...childPropValue }
      }
    } else if (propName === 'className') {
      if (typeof overrideProps[propName] == 'function') {
        overrideProps[propName] = overrideProps[propName]({ ...parentProps })
      } else {
        overrideProps[propName] = twMerge(slotPropValue, childPropValue)
      }
    }
  }

  return { ...slotProps, ...overrideProps }
}

const Root = Slot

export {
  Slot,
  Slottable,
  //
  Root
}
export type { SlotProps }
