import { TabItem, Tabs } from 'actify'

import Divider from './divider'

export default () => {
  return (
    <>
      <Tabs>
        <TabItem title="Actify">actify</TabItem>
        <TabItem title="Ngroker">ngroker</TabItem>
        <TabItem title="Taildoor">taildoor</TabItem>
      </Tabs>
      <Divider />
      <Tabs orientation="vertical">
        <TabItem title="Actify">actify</TabItem>
        <TabItem title="Ngroker">ngroker</TabItem>
        <TabItem title="Taildoor">taildoor</TabItem>
      </Tabs>
    </>
  )
}
