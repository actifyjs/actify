import * as Actify from 'actify'
import { Eye, Code2 } from 'lucide-react'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'
import { LiveProvider, LivePreview } from 'react-live'

type CodePreviewProps = {
  code: string
}

const CodePreview = ({ code }: CodePreviewProps) => {
  return (
    <LiveProvider code={code} scope={Actify}>
      <Actify.Tabs
        activeTabIndex={0}
        className="not-prose rounded-lg bg-secondary/10"
      >
        <div className="flex border-b border-[#ccc] dark:border-[#222]">
          <Actify.Tabs.Header className="bg-transparent">
            <Actify.Tabs.Tab value="preview" className="min-w-[120px]">
              <Eye size={18} />
              Preview
            </Actify.Tabs.Tab>
            <Actify.Tabs.Tab value="code" className="min-w-[120px]">
              <Code2 size={18} />
              Code
            </Actify.Tabs.Tab>
          </Actify.Tabs.Header>
        </div>
        <Actify.Tabs.Body className="p-2">
          <Actify.Tabs.Panel>
            <LivePreview className="flex gap-2" />
          </Actify.Tabs.Panel>
          <Actify.Tabs.Panel>
            <SyntaxHighlighter>{code}</SyntaxHighlighter>
          </Actify.Tabs.Panel>
        </Actify.Tabs.Body>
      </Actify.Tabs>
    </LiveProvider>
  )
}

export default CodePreview
