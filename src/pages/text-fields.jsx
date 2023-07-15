import Code from '@/packages/components/Code'
import TextField from '@/packages/components/TextFields'

const codeBlock = `
import { TextField } from 'actify'
export default () => {
  return (
    <>
      <TextField label="filled" placeholder="placeholder" />
      <TextField variant="outlined" label="outlined" placeholder="placeholder" />
      <TextField variant="outlined" disabled label="disabled" placeholder="placeholder" />
    </>
  )
}
`

export default () => {
  return (
    <>
      <div className="flex gap-4">
        <TextField label="filled" placeholder="placeholder" />
        <TextField variant="outlined" label="outlined" placeholder="placeholder" />
        <TextField variant="outlined" disabled label="disabled" placeholder="placeholder" />
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
