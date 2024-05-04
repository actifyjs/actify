import { notFound } from 'next/navigation'
import { allComponents, Component } from 'contentlayer/generated'

import DocUsage from '@/components/DocUsage'
import { Mdx } from '@/components/Mdx'
import { Toc } from '@/components/Toc'
import { getTableOfContents } from '@/utils/toc.util'

type ComponentProps = {
  params: {
    slug: string[]
  }
}

export const generateMetadata = ({ params }: ComponentProps) => {
  const slug = params.slug?.join('/') || ''
  const component: Component | undefined = allComponents.find(
    (component: Component) => component.slug == `components/${slug}`
  )

  return {
    title: component?.title,
    description: component?.description
  }
}

export function generateStaticParams() {
  return allComponents.map((page: Component) => ({
    slug: page.slug.split('/').slice(1)
  }))
}

const ComponentLayout = async ({ params }: ComponentProps) => {
  const slug = params.slug?.join('/') || ''

  const component: Component | undefined = allComponents.find(
    (page) => page.slug == `components/${slug}`
  )
  if (!component) {
    notFound()
  }
  const toc = await getTableOfContents(component.body.raw)
  return (
    <article className="prose text-sm sm:text-base md:text-lg mb-4 max-w-full dark:prose-invert prose-pre:p-0 [&_a]:no-underline">
      <h1>{component.title}</h1>
      <blockquote>{component.description}</blockquote>
      <DocUsage component={slug} />
      <Mdx code={component.body.code} />
      <Toc toc={toc} />
    </article>
  )
}

export default ComponentLayout
