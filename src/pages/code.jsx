import Code from '@/packages/components/Code'

const codeBlock = `import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
const Template = forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div
      ref={ref}
      {...rest}
      className={twMerge('', className)}
    >
      {children}
    </div>
  )
})
export default Template
`

export default () => {
  return <Code code={codeBlock} language="javascript" />
}
