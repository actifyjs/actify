import DocPreview from '@/components/DocPreview'
import DocTabs from '@/components/DocTabs'
import DocUsage from '@/components/DocUsage'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

interface MarkdownProps extends React.ComponentProps<'div'> {
  docs: {
    title?: string
    description?: string
    content?: string
  }
  usage: {
    content?: string
    component: string
  }
}
export default function Markdown({ docs, usage }: MarkdownProps) {
  return (
    // @ts-ignore
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      rehypePlugins={[[rehypeRaw], [rehypeSlug], [rehypeAutolinkHeadings]]}
      components={{
        p: ({ children }) => (
          <div className="mb-4">
            <>{children}</>
          </div>
        ), // replace p tag to div tag
        a: ({ node, children, ...props }) => (
          <a className="text-tertiary hover:bg-surface-variant" {...props}>
            <>{children}</>
          </a>
        ),
        pre: ({ children }) => <>{children}</>, // remove pre tag
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              lang={match[1]}
              children={String(children).replace(/\n$/, '')}
            />
          ) : (
            <code
              className="leading-8 before:hidden after:hidden bg-black/10 dark:bg-white/10 rounded-md p-1.5"
              {...props}
            >
              <>{children}</>
            </code>
          )
        },
        // @ts-ignore
        tabs: ({ node, children, ...rest }) => <DocTabs {...rest} />,
        // @ts-ignore
        usage: ({ node, children, ...rest }) => (
          <DocUsage {...usage} {...rest} />
        ),
        // @ts-ignore
        preview: ({ node, children, ...rest }) => <DocPreview {...rest} />
      }}
    >
      {`# ${docs.title} ${docs.description ? '\r\n>' + docs.description : ''}\r\n` +
        docs.content}
    </ReactMarkdown>
  )
}
