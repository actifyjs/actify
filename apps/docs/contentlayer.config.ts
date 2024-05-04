import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const Usage = defineDocumentType(() => ({
  name: 'Usage',
  filePathPattern: 'usages/**/*.mdx',
  contentType: 'mdx'
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true
    },
    description: {
      type: 'string',
      description: 'The description of the page',
      required: false
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(0).join('/')
    }
  }
}))

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: 'components/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true
    },
    description: {
      type: 'string',
      description: 'The description of the page',
      required: false
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(0).join('/')
    }
  }
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Page, Usage, Component],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypeSlug]]
  }
})
