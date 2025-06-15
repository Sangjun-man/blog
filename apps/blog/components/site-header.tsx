import Link from 'next/link'
import clsx from 'clsx'
import { ModeToggle } from '@/components/mode-toggle'

export function SiteHeader() {
  return (
    <header
      className={clsx(
        'sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/75 backdrop-blur-sm flex items-center justify-between',
        'dark:border-slate-800/60 dark:bg-slate-950/75',
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-base font-semibold hover:opacity-80">
          MyBlog
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
