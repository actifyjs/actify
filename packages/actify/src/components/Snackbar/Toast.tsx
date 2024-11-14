import type { AriaToastProps } from '@react-aria/toast'
import { Elevation } from '../Elevation'
import { Icon } from '../Icon'
import { IconButton } from '../Button'
import React from 'react'
import type { ToastState } from '@react-stately/toast'
import styles from './toast.module.css'
import { useToast } from '@react-aria/toast'

interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>
}

const Toast = <T extends React.ReactNode>({
  state,
  ...props
}: ToastProps<T>) => {
  const ref = React.useRef(null)
  const { toastProps, contentProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref
  )

  return (
    <div {...toastProps} ref={ref} className={styles['toast']}>
      <div {...contentProps} className={styles['toast-content']}>
        <div {...titleProps} className={styles['toast-title']}>
          {props.toast.content}
        </div>
      </div>
      <IconButton {...closeButtonProps} className={styles['close-button']}>
        <Icon>close</Icon>
      </IconButton>
      <Elevation />
    </div>
  )
}

export { Toast }
