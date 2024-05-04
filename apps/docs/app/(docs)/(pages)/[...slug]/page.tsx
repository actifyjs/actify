import { Mdx } from '@/components/Mdx'
import { Toc } from '@/components/Toc'

import { notFound } from 'next/navigation'
import { getTableOfContents } from '@/utils/toc.util'
import { allPages, Page } from 'contentlayer/generated'

type PageProps = {
  params: {
    slug: string[]
  }
}

export const generateMetadata = ({ params }: PageProps) => {
  const slug = params.slug?.join('/') || ''
  const page: Page | undefined = allPages.find(
    (page: Page) => page.slug == `pages/${slug}`
  )

  return {
    title: page?.title,
    description: page?.description
  }
}

export function generateStaticParams() {
  return allPages.map((page: Page) => ({
    slug: page.slug.split('/').slice(1)
  }))
}

const PageLayout = async ({ params }: PageProps) => {
  const slug = params.slug?.join('/') || ''

  const page: Page | undefined = allPages.find(
    (page) => page.slug == `pages/${slug}`
  )
  if (!page) {
    notFound()
  }

  const toc = await getTableOfContents(page.body.raw)

  return (
    <article className="prose text-sm sm:text-base md:text-lg mb-4 max-w-full dark:prose-invert prose-pre:p-0 [&_a]:no-underline">
      <Mdx code={page.body.code} />
      <Toc toc={toc} />
    </article>
  )
}

export default PageLayout
