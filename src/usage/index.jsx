import SyntaxHighlighter from '@/packages/components/SyntaxHighlighter'
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
        <div className="flex items-center justify-between border-b border-[#ccc] dark:border-[#222]">
          <TabsHeader className="bg-transparent">
            <Tab value="preview">
              <Icon name="Eye" size={18} />
              Preview
            </Tab>
            <Tab value="code">
              <Icon name="Code" size={18} />
              Code
            </Tab>
          </TabsHeader>
        </div>
        <TabsBody className="p-6">
          <TabPanel value="preview">
            <LazyComponent name={name} {...rest} />
          </TabPanel>
          <TabPanel value="code">
            {!hidecode && <SyntaxHighlighter language="jsx">{rawString}</SyntaxHighlighter>}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </Suspense>
  )
}
export default Usage
