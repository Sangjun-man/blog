import Link from 'next/link'
import clsx from 'clsx'
import  ModeToggle from "@/components/ui/theme-toggle/mode-toggle"

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
          <a
            href="https://github.com/Sangjun-man"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.071 1.532 1.034 1.532 1.034.892 1.532 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.341-2.22-.256-4.555-1.113-4.555-4.945 0-1.092.39-1.987 1.029-2.687-.103-.257-.447-1.29.098-2.69 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.843c.851.004 1.705.115 2.506.337 1.909-1.296 2.748-1.026 2.748-1.026.547 1.4.203 2.433.1 2.69.64.7 1.028 1.595 1.028 2.687 0 3.841-2.337 4.687-4.565 4.938.359.309.678.919.678 1.852 0 1.336-.012 2.414-.012 2.743 0 .269.18.58.688.482A10.025 10.025 0 0022 12.021C22 6.486 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
