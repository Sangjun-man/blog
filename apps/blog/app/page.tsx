import { allPosts } from '@/.contentlayer/generated'
import { ArticleList } from '@/components/article-list'

export default function Home() {
  const articles = allPosts.map((post) => ({
    title: post.title,
    description: post.description,
    date: post.date,
    slug: post.slugAsParams,
  }))

  return (
    <div className="mt-10">
      <ArticleList articles={articles} />
    </div>
  )
}
