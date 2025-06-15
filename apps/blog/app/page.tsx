import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
import { Typography } from '@/components/ui/typography'

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <Typography.H2 className="mt-0">{post.title}</Typography.H2>
          </Link>
          {post.description && <Typography.P>{post.description}</Typography.P>}
        </article>
      ))}
    </div>
  )
}
