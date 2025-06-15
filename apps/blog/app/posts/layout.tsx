'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/sidebar'

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true)

  // Close sidebar by default on small screens
  useEffect(() => {
    if (window.innerWidth < 768) setOpen(false)
  }, [])

  return (
    <div className="h-[calc(100vh-3.5rem)] flex">
      <Sidebar open={open} onToggle={() => setOpen((o) => !o)} />
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden md:flex fixed top-1/2 left-0 -translate-y-1/2 translate-x-0 h-8 w-6 items-center justify-center rounded-r bg-surface border border-border z-40"
        >
          ⟩
        </button>
      )}
      <main className="flex-1 overflow-y-auto px-4 md:px-8 pt-14 pb-10 md:pl-64">{children}</main>
    </div>
  )
}
