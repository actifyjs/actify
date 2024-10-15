import { Label, Radio, RadioGroup } from 'actify'

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>RadioGroup With label</h2>

      <RadioGroup
        label="project"
        name="project"
        defaultValue="taildoor"
        className="flex items-center gap-4"
      >
        <Radio value="actify" />
        <Radio value="ngroker" />
        <Radio value="taildoor" />
      </RadioGroup>

      <h2>Radio With label</h2>

      <RadioGroup name="project" defaultValue="actify">
        <Label className="flex items-center gap-4">
          <Radio value="actify" />
          <span>Actify</span>
        </Label>
        <Label className="flex items-center gap-4">
          <Radio value="ngroker" />
          <span>Ngroker</span>
        </Label>
        <Label className="flex items-center gap-4">
          <Radio value="taildoor" />
          <span>Taildoor</span>
        </Label>
      </RadioGroup>
    </div>
  )
}
