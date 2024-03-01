import { Radio } from 'actify'

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <Radio name="group" value="vue" />
        <Radio name="group" value="react" color="secondary" />
        <Radio name="group" value="angular" color="tertiary" />
        <Radio name="group" value="svelte" color="error" />
        <Radio name="group" disabled />
      </div>

      <div className="flex gap-2">
        <label className="flex items-center">
          <Radio name="actify" value="vue" />
          <span>vue</span>
        </label>
        <label className="flex items-center">
          <Radio name="actify" value="react" color="secondary" />
          <span>react</span>
        </label>
        <label className="flex items-center">
          <Radio name="actify" value="angular" color="tertiary" />
          <span>angular</span>
        </label>
        <label className="flex items-center">
          <Radio name="actify" value="svelte" color="error" />
          <span>svelte</span>
        </label>
      </div>
    </>
  )
}
