import * as React from 'react'
import clsx from 'clsx'
import type { ElementType, ComponentPropsWithoutRef } from 'react'

function createComponent<Tag extends ElementType>(Comp: Tag, defaultClasses: string) {
  return React.forwardRef<any, ComponentPropsWithoutRef<Tag>>(({ className, ...props }, ref) => {
    // @ts-ignore
    return <Comp ref={ref} className={clsx(defaultClasses, className)} {...props} />
  })
}

const baseHeading = 'scroll-m-20 font-extrabold tracking-tight text-foreground'

export const Typography = {
  H1: createComponent('h1', clsx(baseHeading, 'text-4xl lg:text-5xl')),
  H2: createComponent('h2', clsx(baseHeading, 'mt-10 text-3xl lg:text-4xl')),
  H3: createComponent('h3', clsx(baseHeading, 'mt-8 text-2xl lg:text-3xl')),
  H4: createComponent(
    'h4',
    clsx(baseHeading, 'text-xl font-semibold tracking-tight text-foreground'),
  ),
  P: createComponent('p', 'leading-7 [&:not(:first-child)]:mt-6'),
  Lead: createComponent('p', 'text-xl text-muted'),
  Small: createComponent('small', 'text-sm font-medium leading-none'),
  Muted: createComponent('p', 'text-sm text-muted'),
} as const
