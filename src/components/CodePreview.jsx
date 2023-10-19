import * as Actify from 'actify'
import SyntaxHighlighter from '@/src/components/SyntaxHighlighter'
import { LiveProvider, LivePreview } from 'react-live'

const CodePreview = ({ code }) => {
  return (
    <LiveProvider code={code} scope={Actify}>
      <Actify.Tabs
        value="preview"
        className="not-prose rounded-lg bg-secondary/10"
      >
        <div className="flex border-b border-[#ccc] dark:border-[#222]">
          <Actify.Tabs.Header className="bg-transparent">
            <Actify.Tabs.Tab value="preview" className="min-w-[120px]">
              <Actify.Icon name="eye" size={18} />
              Preview
            </Actify.Tabs.Tab>
            <Actify.Tabs.Tab value="code" className="min-w-[120px]">
              <Actify.Icon name="code-2" size={18} />
              Code
            </Actify.Tabs.Tab>
          </Actify.Tabs.Header>
        </div>
        <Actify.Tabs.Body className="p-2">
          <Actify.Tabs.Panel value="preview">
            <LivePreview className="flex gap-2" />
          </Actify.Tabs.Panel>
          <Actify.Tabs.Panel value="code">
            <SyntaxHighlighter language="jsx">{code}</SyntaxHighlighter>
          </Actify.Tabs.Panel>
        </Actify.Tabs.Body>
      </Actify.Tabs>
    </LiveProvider>
  )
}

export default CodePreview
