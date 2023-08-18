import Code from '@/packages/components/Code'
import { lazy, Suspense, useState, useEffect } from 'react'
import { Icon, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from 'actify'

const Usage = (props) => {
  const [rawString, setRawString] = useState('')
  const { name, hidecode, ...rest } = props
  const LazyComponent = lazy(() => import(`./../usage/${name}.jsx`))

  useEffect(() => {
    async function loadData() {
      const raw = await import(`./../usage/${name}.jsx?raw`)
      setRawString(raw.default)
    }
    loadData()
  }, [])

  return (
    <Suspense>
      <Tabs value="preview" className="not-prose rounded-lg bg-secondary/10">
        <TabsHeader>
          <Tab value="preview" className="flex gap-2">
            <Icon name="Eye" size={18} />
            Preview
          </Tab>
          <Tab value="code" className="flex gap-2">
            <Icon name="Code" size={18} />
            Code
          </Tab>
        </TabsHeader>
        <TabsBody className="p-6">
          <TabPanel value="preview">
            <LazyComponent name={name} {...rest} />
          </TabPanel>
          <TabPanel value="code">{!hidecode && <Code language="jsx">{rawString}</Code>}</TabPanel>
        </TabsBody>
      </Tabs>
    </Suspense>
  )
}
export default Usage
