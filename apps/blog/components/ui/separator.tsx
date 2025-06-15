import * as React from 'react'
import clsx from 'clsx'

export const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation="horizontal"
      className={clsx('my-4 h-px w-full bg-gray-200 dark:bg-gray-700', className)}
      {...props}
    />
  ),
)
