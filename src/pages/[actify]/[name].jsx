import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Code from '@/packages/components/Code'
import { Pencil } from 'lucide-react'
import Button from '@/packages/components/Button'
import Usage from '@/src/usage'

export default () => {
  const params = useParams()
  const [markdown, setMarkdown] = useState('')

  const EditOnGitHub = () => {
    return (
      markdown && (
        <Button
          variant="text"
          target="_blank"
          trailing-icon
          href={`https://github.com/actifyjs/actify/blob/main/src/docs/${params.actify}/${params.name}.md`}
        >
          Edit this page on GitHub
          <div slot="icon" className="flex items-center">
            <Pencil />
          </div>
        </Button>
      )
    )
  }

  useEffect(() => {
    async function loadData() {
      const { attributes, markdown } = await import(`../../docs/${params.actify}/${params.name}.md`)
      setMarkdown(markdown)
      document.title = attributes.title + `- ${params.actify} | Actify`
    }
    loadData()
  }, [params])

  return (
    <>
      <ReactMarkdown
        className="prose mb-4 max-w-full dark:prose-invert prose-pre:p-0 [&_pre]:!mb-0"
        children={markdown}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          pre: ({ children }) => <>{children}</>, // remove pre tag
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <Code code={String(children).replace(/\n$/, '')} language={match[1]} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          usage: ({ node, children, ...rest }) => <Usage {...rest} />
        }}
      />
      <EditOnGitHub />
    </>
  )
}
