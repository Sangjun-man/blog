import Link from 'next/link'
import dayjs from 'dayjs'

interface Article {
  title: string
  description?: string
  date?: string
  slug: string
}

interface ArticleListProps {
  articles: Article[]
}

export function ArticleList({ articles }: ArticleListProps) {
  if (!articles?.length) return null

  return (
    <ul className="space-y-8">
      {articles.map((article) => (
        <li key={article.slug} className="border-b border-border pb-8 px-2 md:px-0 last:border-0 last:pb-0">
          <article>
            <h2 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight">
              <Link href={`/posts/${article.slug}`} className="hover:underline">
                {article.title}
              </Link>
            </h2>
            {article.description && (
              <p className="text-muted mb-1">{article.description}</p>
            )}
            {article.date && (
              <time className="text-xs text-muted" dateTime={article.date}>
                {dayjs(article.date).format('YYYY.MM.DD')}
              </time>
            )}
          </article>
        </li>
      ))}
    </ul>
  )
} 