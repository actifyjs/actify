import { Divider, Radio } from 'actify'

export default () => {
  return (
    <>
      <p>Radio without label and singleline</p>
      <div className="flex gap-2">
        <Radio defaultValue="React">
          <Radio.Item value="React" />
          <Radio.Item value="Vue" color="secondary" />
          <Radio.Item value="Next.js" color="error" />
          <Radio.Item value="Nuxt" disabled />
        </Radio>
      </div>
      <Divider />
      <p>Radio with label and multiline</p>
      <div className="flex gap-2">
        <Radio defaultValue="React" className="flex-col">
          <Radio.Item value="React">React</Radio.Item>
          <Radio.Item value="Vue" color="secondary">
            Vue
          </Radio.Item>
          <Radio.Item value="Next.js" color="error">
            Next.js
          </Radio.Item>
          <Radio.Item value="Nuxt" disabled>
            Nuxt
          </Radio.Item>
        </Radio>
      </div>
    </>
  )
}
