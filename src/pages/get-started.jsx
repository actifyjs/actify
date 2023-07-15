import Code from '@/packages/components/Code'

const codeBlock = `
yarn add actify
`

export default () => {
  return (
    <div className="mt-4">
      <Code code={codeBlock} language="bash" />
    </div>
  )
}
