import { Label, Radio, RadioGroup } from 'actify'

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>Without label</h2>
      <form className="flex gap-6">
        <RadioGroup name="frontend" defaultValue="actify">
          <Radio value="react" />
          <Radio value="vue" />
          <Radio value="svelte" />
        </RadioGroup>
      </form>
      <h2>With label</h2>
      <form className="flex flex-col gap-6">
        <RadioGroup name="stack" defaultValue="actify">
          <Label className="flex items-center gap-2">
            <Radio value="react" />
            <span>React</span>
          </Label>
          <Label className="flex items-center gap-2">
            <Radio value="actify" />
            <span>Actify</span>
          </Label>
          <Label className="flex items-center gap-2">
            <Radio value="ngroker" />
            <span>Ngroker</span>
          </Label>
        </RadioGroup>
      </form>
    </div>
  )
}
