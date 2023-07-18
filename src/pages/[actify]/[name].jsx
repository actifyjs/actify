import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Code from '@/packages/components/Code'

export default () => {
  const params = useParams()
  const [attributes, setAttributes] = useState('')
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    async function loadData() {
      const docPath = `../../docs/${params.actify}/${params.name}.md`
      const { attributes, markdown } = await import(docPath)
      setAttributes(attributes)
      setMarkdown(markdown)
    }
    loadData()
  }, [params])

  return (
    <ReactMarkdown
      className="prose max-w-full dark:prose-invert prose-pre:p-0 [&_pre]:!mb-0"
      children={markdown}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <Code code={String(children).replace(/\n$/, '')} language={match[1]} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    />
  )
}
