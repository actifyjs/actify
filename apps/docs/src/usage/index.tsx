import { Eye, Code2 } from 'lucide-react'
import { Tabs, Spacer, TooltipGroup } from 'actify'
import { lazy, Suspense, useState, useEffect } from 'react'
import ViewSource from '@components/ViewSource'
import OpenInCodeSandbox from '@/components/OpenInCodeSandbox'
import OpenInStackblitz from '@/components/OpenInStackblitz'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

type UseageProps = {
  name: string
}
const Usage = (props: UseageProps) => {
  const [rawString, setRawString] = useState('')
  const { name, ...rest } = props
  const LazyComponent = lazy(() => import(`./../usage/${name}.tsx`))

  useEffect(() => {
    async function loadData() {
      const raw = await import(`./../usage/${name}.tsx?raw`)
      setRawString(raw.default)
    }
    loadData()
  }, [])

  return (
    <Suspense>
      <Tabs activeTabIndex={0} className="not-prose rounded-lg bg-secondary/10">
        <div className="flex border-b border-[#ccc] dark:border-[#222] w-full">
          <Tabs.Header className="bg-transparent w-full">
            <Tabs.Tab value="preview">
              <Eye size={18} />
              Preview
            </Tabs.Tab>
            <Tabs.Tab value="code">
              <Code2 size={18} />
              Code
            </Tabs.Tab>
            <Spacer />
            <TooltipGroup>
              <ViewSource name={name} />
              <OpenInCodeSandbox title={name} code={rawString} />
              <OpenInStackblitz title={name} code={rawString} />
            </TooltipGroup>
          </Tabs.Header>
        </div>
        <Tabs.Body className="p-2">
          <Tabs.Panel>
            <LazyComponent name={name} {...rest} />
          </Tabs.Panel>
          <Tabs.Panel>
            <SyntaxHighlighter language="jsx">{rawString}</SyntaxHighlighter>
          </Tabs.Panel>
        </Tabs.Body>
      </Tabs>
    </Suspense>
  )
}
export default Usage
