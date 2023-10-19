import * as Actify from 'actify'
import SyntaxHighlighter from '@/src/components/SyntaxHighlighter'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const CodePreview = ({ code }) => {
  return (
    <LiveProvider code={code} scope={...Actify}>
      <Tabs value="preview" className="not-prose rounded-lg bg-secondary/10">
        <div className="flex border-b border-[#ccc] dark:border-[#222]">
          <Tabs.Header className="bg-transparent">
            <Tabs.Tab value="preview" className="min-w-[120px]">
              <Icon name="eye" size={18} />
              Preview
            </Tabs.Tab>
            <Tabs.Tab value="code" className="min-w-[120px]">
              <Icon name="code-2" size={18} />
              Code
            </Tabs.Tab>
          </Tabs.Header>
        </div>
        <Tabs.Body className="p-2">
          <Tabs.Panel value="preview">
            <LivePreview className="flex gap-2" />
          </Tabs.Panel>
          <Tabs.Panel value="code">
            <SyntaxHighlighter language="jsx">
              <LiveEditor />
            </SyntaxHighlighter>
          </Tabs.Panel>
        </Tabs.Body>
      </Tabs>
    </LiveProvider>
  )
}

export default CodePreview
