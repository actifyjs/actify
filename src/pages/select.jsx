import Code from '@/packages/components/Code'
import Select from '@/packages/components/Select'
import SelectOption from '@/packages/components/Select/SelectOption'

const codeBlock = `
import { Select, SelectOption } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <Select label="filled">
        <SelectOption value="apple" headline="Apple" selected />
        <SelectOption value="banana" headline="Banana" />
        <SelectOption value="kiwi" headline="Kiwi" />
        <SelectOption value="orange" headline="Orange" />
        <SelectOption value="tomato" headline="Tomato" />
      </Select>
      <Select label="outlined" variant="outlined" color="secondary">
        <SelectOption value="apple" headline="Apple" />
        <SelectOption value="banana" headline="Banana" />
        <SelectOption value="kiwi" headline="Kiwi" />
        <SelectOption value="orange" headline="Orange" />
        <SelectOption value="tomato" headline="Tomato" />
      </Select>
    </div>
  )
}
`

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <Select label="filled">
          <SelectOption value="apple" headline="Apple" selected />
          <SelectOption value="banana" headline="Banana" />
          <SelectOption value="kiwi" headline="Kiwi" />
          <SelectOption value="orange" headline="Orange" />
          <SelectOption value="tomato" headline="Tomato" />
        </Select>
        <Select label="outlined" variant="outlined" color="secondary">
          <SelectOption value="apple" headline="Apple" />
          <SelectOption value="banana" headline="Banana" />
          <SelectOption value="kiwi" headline="Kiwi" />
          <SelectOption value="orange" headline="Orange" />
          <SelectOption value="tomato" headline="Tomato" />
        </Select>
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
