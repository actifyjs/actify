import { getAllDocSlugs, getDocData } from '@/lib/doc'

import Markdown from '@/components/Markdown'
import TableOfContents from '@/components/TableOfContents'
import { getFileRaw } from '@/lib/raw'

type PageProps = {
  params: {
    slug: string[]
  }
}

export const generateMetadata = async (props: PageProps) => {
  const params = await props.params;
  const { slug } = params
  const docs = getDocData(slug)

  return {
    title: docs?.title,
    description: docs?.description
  }
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs()
  return slugs
}

export default async function PageLayout(props: PageProps) {
  const params = await props.params;
  const { slug } = params
  const docs = getDocData(slug)

  const filepath = slug.join('/').replace('components/', '')
  const content = await getFileRaw(`./src/usages/${filepath}.tsx`)

  return (
    <article className="prose dark:prose-invert text-sm sm:text-base md:text-lg mb-4 max-w-full prose-pre:p-0 prose-a:no-underline">
      <Markdown docs={docs} usage={{ component: filepath, content }} />
      <TableOfContents markdown={docs.content} />
    </article>
  )
}
