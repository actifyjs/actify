import { Radio } from 'actify'

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <Radio name="actify" value="vue" />
        <Radio name="actify" value="react" color="pink" />
        <Radio name="actify" value="angular" color="#f26f21" />
        <Radio name="actify" value="svelte" color="rgb(23,213,1)" />
        <Radio name="actify" disabled />
      </div>

      <div className="flex gap-2">
        <label className="flex items-center">
          <Radio name="actify" value="vue" />
          <span>vue</span>
        </label>
        <label className="flex items-center">
          <Radio name="actify" value="react" color="pink" />
          <span>react</span>
        </label>
        <label className="flex items-center">
          <Radio name="actify" value="angular" color="#f26f21" />
          <span>angular</span>
        </label>
        <label className="flex items-center">
          <Radio name="actify" value="svelte" color="rgb(23,213,1)" />
          <span>svelte</span>
        </label>
      </div>
    </>
  )
}
