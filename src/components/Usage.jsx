import { lazy, Suspense, useState } from 'react'
import Tabs from '@/packages/components/Tabs'
import Tab from '@/packages/components/Tabs/Tab'
import TabContent from '@/packages/components/Tabs/TabContent'

export default ({ name }) => {
  const [selected, setSelected] = useState(0)
  const LazyComponent = lazy(() => import(`../../packages/components/${name}`))

  return (
    <Suspense>
      <div className="not-prose">
        <Tabs selected={selected} onChange={(e) => setSelected(e.target.selected)}>
          <Tab>Default</Tab>
          <Tab>Elevated</Tab>
          <Tab>Tonal</Tab>
          <Tab>Outlined</Tab>
          <Tab>Text</Tab>
        </Tabs>
        <TabContent
          list={[
            <LazyComponent>Button</LazyComponent>,
            <LazyComponent variant="elevated">Button</LazyComponent>,
            <LazyComponent variant="tonal">Button</LazyComponent>,
            <LazyComponent variant="outlined">Button</LazyComponent>,
            <LazyComponent variant="text">Button</LazyComponent>
          ]}
          selected={selected}
        />
      </div>
    </Suspense>
  )
}
