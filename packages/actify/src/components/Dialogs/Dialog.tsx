import {
  DIALOG_DEFAULT_CLOSE_ANIMATION,
  DIALOG_DEFAULT_OPEN_ANIMATION,
  DialogAnimation
} from './animation'

import React from 'react'
import clsx from 'clsx'
import styles from './actify.module.css'

export interface DialogRef {
  show: () => Promise<void>
  close: (returnValue: string) => Promise<void>
}
interface DialogProps
  extends Omit<React.ComponentProps<'dialog'>, 'ref' | 'content'> {
  ref?: React.Ref<DialogRef>
  type?: 'alert'
  quick?: boolean
  defaultOpen?: boolean
  returnValue?: string
  /** Slots */
  icon?: React.ReactNode
  headline?: React.ReactNode
  actions?: React.ReactNode
  content?: React.ReactNode
  /** Events */
  onOpen?: () => void
  onOpend?: () => void
  onClose?: () => void
  onClosed?: () => void
  onCancel?: () => void
}
const Dialog = (props: DialogProps) => {
  const {
    ref,
    type,
    quick,
    returnValue = '',
    open: propOpen,
    children,
    className,
    icon,
    headline,
    actions,
    content,
    ...rest
  } = props

  const headlineId = `headline${React.useId()}`

  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const scrimRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const headlineRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const actionsRef = React.useRef<HTMLDivElement>(null)

  const scrollerRef = React.useRef<HTMLDivElement>(null)

  const [open, setOpen] = React.useState(false)
  const [isOpening, setIsOpening] = React.useState(false)

  const classes = clsx(
    styles['dialog'],
    headline && styles['has-headline'],
    actions && styles['has-actions'],
    icon && styles['has-icon'],
    className
  )

  const animateDialog = async (animation: DialogAnimation) => {
    // Always cancel the previous animations. Animations can include `fill`
    // modes that need to be cleared when `quick` is toggled. If not, content
    // that faded out will remain hidden when a `quick` dialog re-opens after
    // previously opening and closing without `quick`.

    if (quick) {
      return
    }

    if (
      !dialogRef.current ||
      !scrimRef.current ||
      !containerRef.current ||
      !headlineRef.current ||
      !contentRef.current ||
      !actionsRef.current
    ) {
      return
    }
    const {
      container: containerAnimate,
      dialog: dialogAnimate,
      scrim: scrimAnimate,
      headline: headlineAnimate,
      content: contentAnimate,
      actions: actionsAnimate
    } = animation
    const elementAndAnimation = [
      [dialogRef.current, dialogAnimate ?? []],
      [scrimRef.current, scrimAnimate ?? []],
      [containerRef.current, containerAnimate ?? []],
      [headlineRef.current, headlineAnimate ?? []],
      [contentRef.current, contentAnimate ?? []],
      [actionsRef.current, actionsAnimate ?? []]
    ]
    const animations = []
    for (const [element, animation] of elementAndAnimation) {
      // @ts-ignore
      for (const animateArgs of animation) {
        // @ts-ignore
        const animation = element.animate(...animateArgs)
        animations.push(animation)
      }
    }
    await Promise.all(
      animations.map((animation) =>
        animation.finished.catch(() => {
          // Ignore intentional AbortErrors when calling `animation.cancel()`.
        })
      )
    )
  }

  const closeDialog = async () => {
    setIsOpening(false)
    await animateDialog(DIALOG_DEFAULT_CLOSE_ANIMATION)
    dialogRef.current?.close(returnValue)
    setOpen(false)
  }

  React.useImperativeHandle(
    ref,
    () => ({
      show: async () => {
        setIsOpening(false)

        dialogRef.current?.showModal()
        setOpen(true)
        // Reset scroll position if re-opening a dialog with the same content.
        if (scrollerRef.current) {
          scrollerRef.current.scrollTop = 0
        }
        // Native modal dialogs ignore autofocus and instead force focus to the
        // first focusable child. Override this behavior if there is a child with
        // an autofocus attribute.

        // @ts-ignore
        dialogRef.current?.querySelector('[autofocus]')?.focus()

        await animateDialog(DIALOG_DEFAULT_OPEN_ANIMATION)
        setIsOpening(false)
      },
      close: async () => {
        await closeDialog()
      }
    }),
    []
  )

  React.useEffect(() => {
    setOpen(propOpen ?? false)
  }, [propOpen])

  const handleDialogClick = () => {
    closeDialog()
  }

  const handleClose = () => {
    closeDialog()
  }

  const handleSubmit = (event: React.FormEvent<HTMLDialogElement>) => {
    event.preventDefault()
    closeDialog()
  }

  const handleCancel = (
    event: React.SyntheticEvent<HTMLDialogElement, Event>
  ) => {
    event.preventDefault()
    closeDialog()
  }

  return (
    <div role="presentation" className={styles['host']}>
      <div
        ref={scrimRef}
        className={clsx(styles['scrim'], open && styles['open'])}
      />
      <dialog
        {...rest}
        open={open}
        ref={dialogRef}
        className={classes}
        onClose={handleClose}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        onClick={handleDialogClick}
        aria-labelledby={headlineId}
        role={type == 'alert' ? 'alertdialog' : undefined}
      >
        <div
          ref={containerRef}
          className={styles['container']}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles['icon']} aria-hidden="true">
            {icon}
          </div>
          <div ref={headlineRef} className={styles['headline']}>
            <h2 id={headlineId}>{headline}</h2>
          </div>
          <div ref={scrollerRef} className={styles['scroller']}>
            <div ref={contentRef} className={styles['content']}>
              <div className={clsx(styles['top'], styles['anchor'])} />
              {children}
              <div className={clsx(styles['bottom'], styles['anchor'])} />
            </div>
          </div>
          <div ref={actionsRef} className={styles['actions']}>
            {actions}
          </div>
        </div>
      </dialog>
    </div>
  )
}

Dialog.displayName = 'Actify.Dialog'

export { Dialog }
