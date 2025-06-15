import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allPages } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx-components'
import { Typography } from '@/components/ui/typography'

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPageFromParams(_params: PageProps['params']) {
  const params = await _params
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    return null
  }

  return page
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

export default async function PagePage({ params }: any) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8">
      <article className="prose dark:prose-invert mx-auto py-10">
        <Typography.H1>{page.title}</Typography.H1>
        {page.description && <Typography.Lead>{page.description}</Typography.Lead>}
        <Mdx code={page.body.code} />
      </article>
    </div>
  )
}
