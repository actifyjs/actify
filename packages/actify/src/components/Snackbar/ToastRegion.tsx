import type { AriaToastRegionProps } from '@react-aria/toast'
import React from 'react'
import { Toast } from './Toast'
import type { ToastState } from '@react-stately/toast'
import styles from './toast.module.css'
import { useToastRegion } from '@react-aria/toast'

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>
}

const ToastRegion = <T extends React.ReactNode>({
  state,
  ...props
}: ToastRegionProps<T>) => {
  const ref = React.useRef(null)
  const { regionProps } = useToastRegion(props, state, ref)

  return (
    <div {...regionProps} ref={ref} className={styles['toast-region']}>
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  )
}

export { ToastRegion }
