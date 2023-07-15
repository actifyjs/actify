import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const AnimationButton = forwardRef((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <button
      ref={ref}
      {...rest}
      className={twMerge(
        'relative z-10 h-14 w-fit overflow-hidden rounded-md px-10 text-2xl text-current before:absolute before:right-0 before:top-0 before:-z-10 before:block before:h-full before:w-0 before:rounded-md before:bg-green-500 before:transition-all before:duration-500 before:ease-in-out after:absolute after:inset-0 after:-z-10 after:rounded-md after:border-2 hover:before:left-0 hover:before:right-auto hover:before:w-full hover:after:opacity-0 hover:after:transition-all hover:after:duration-500',
        className
      )}
    >
      {children}
    </button>
  )
})

export default AnimationButton
