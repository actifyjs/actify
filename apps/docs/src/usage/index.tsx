import { Eye, Code2 } from 'lucide-react'
import { Tabs, Spacer, TooltipGroup } from 'actify'
import { lazy, Suspense, useState, useEffect } from 'react'
import OpenInCodeSandbox from '@/components/OpenInCodeSandbox'
import OpenInStackblitz from '@/components/OpenInStackblitz'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

const Usage = (props) => {
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
      <Tabs value="preview" className="not-prose rounded-lg bg-secondary/10">
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
              <OpenInCodeSandbox title={name} code={rawString} />
              <OpenInStackblitz title={name} code={rawString} />
            </TooltipGroup>
          </Tabs.Header>
        </div>
        <Tabs.Body className="p-2">
          <Tabs.Panel value="preview">
            <LazyComponent name={name} {...rest} />
          </Tabs.Panel>
          <Tabs.Panel value="code">
            <SyntaxHighlighter language="jsx">{rawString}</SyntaxHighlighter>
          </Tabs.Panel>
        </Tabs.Body>
      </Tabs>
    </Suspense>
  )
}
export default Usage
