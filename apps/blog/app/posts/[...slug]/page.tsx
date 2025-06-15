import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Metadata } from 'next'
import { Mdx } from '@/components/mdx-components'
import { Typography } from '@/components/ui/typography'

interface PostProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams(params: PostProps['params']) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slugAsParams === slug.join('/'))

  if (!post) {
    return null
  }

  return post
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert w-full max-w-none">
      <Typography.H1>{post.title}</Typography.H1>
      {post.description && <Typography.Lead>{post.description}</Typography.Lead>}
      <Mdx code={post.body.code} />
    </article>
  )
}
