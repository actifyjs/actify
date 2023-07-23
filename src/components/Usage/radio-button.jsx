import { RadioButton } from '@/packages/components'

export default () => {
  return (
    <>
      <div className="flex gap-2">
        <RadioButton name="actify" value="vue" />
        <RadioButton name="actify" value="react" color="pink" />
        <RadioButton name="actify" value="angular" color="#f26f21" />
        <RadioButton name="actify" value="svelte" color="rgb(23,213,1)" />
      </div>

      <div className="flex gap-2">
        <label className="flex items-center">
          <RadioButton name="actify" value="vue" />
          <span>vue</span>
        </label>
        <label className="flex items-center">
          <RadioButton name="actify" value="react" color="pink" />
          <span>react</span>
        </label>
        <label className="flex items-center">
          <RadioButton name="actify" value="angular" color="#f26f21" />
          <span>angular</span>
        </label>
        <label className="flex items-center">
          <RadioButton name="actify" value="svelte" color="rgb(23,213,1)" />
          <span>svelte</span>
        </label>
      </div>
    </>
  )
}
