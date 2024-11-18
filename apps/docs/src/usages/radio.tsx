import { Radio, RadioGroup } from 'actify'

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>Radio With label</h2>

      <RadioGroup name="project" aria-label="project" defaultValue="actify">
        <Radio value="actify">Actify</Radio>
        <Radio value="ngroker">Ngroker</Radio>
        <Radio value="taildoor">Taildoor</Radio>
        <Radio value="hugola">Hugola</Radio>
      </RadioGroup>

      <h2>RadioGroup With label</h2>
      <RadioGroup
        label="project"
        name="project"
        defaultValue="taildoor"
        orientation="horizontal"
      >
        <Radio value="actify" aria-label="actify" />
        <Radio value="ngroker" aria-label="ngroker" />
        <Radio value="taildoor" aria-label="taildoor" />
        <Radio value="hugola" aria-label="hugola" />
      </RadioGroup>
    </div>
  )
}
