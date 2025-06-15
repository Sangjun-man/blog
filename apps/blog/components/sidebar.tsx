import Link from 'next/link'
import clsx from 'clsx'
import { allPosts } from 'contentlayer/generated'

interface SidebarProps {
  open: boolean
  onToggle: () => void
  widthClass?: string
}

export function Sidebar({ open, onToggle, widthClass = 'w-64' }: SidebarProps) {
  return (
    <aside
      className={clsx(
        'hidden md:block bg-surface border-r border-border h-[calc(100vh-3.5rem)] fixed top-14 left-0 transition-transform duration-200',
        widthClass,
        open ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">Posts</h2>
          <button
            type="button"
            onClick={onToggle}
            className="hidden md:flex h-8 w-8 items-center justify-center rounded-md border border-border bg-overlay text-sm"
            aria-label="Toggle sidebar"
          >
            {open ? '⟨' : '⟩'}
          </button>
        </div>
        <nav className="space-y-2 overflow-y-auto">
          {allPosts.map((post) => (
            <Link
              key={post._id}
              href={`/posts/${post.slugAsParams}`}
              className="block text-sm hover:underline"
            >
              {post.title}
            </Link>
          ))}
        </nav>
      </div>
      {!open && (
        <button
          type="button"
          onClick={onToggle}
          className="hidden md:flex fixed top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-8 w-6 items-center justify-center rounded-r bg-surface border border-border z-40"
          aria-label="Open sidebar"
        >
          ⟩
        </button>
      )}
    </aside>
  )
} 