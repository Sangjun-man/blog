import Link from 'next/link'
import clsx from 'clsx'
import { ModeToggle } from '@/components/mode-toggle'

export function SiteHeader() {
  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur-sm flex items-center justify-between px-4',
      )}
    >
      <div className="mx-auto w-full flex h-14 items-center justify-between">
        <Link href="/" className="text-base font-semibold hover:opacity-80">
          Sangjun.world
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
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
