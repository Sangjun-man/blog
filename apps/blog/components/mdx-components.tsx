import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { Typography } from '@/components/ui/typography'

const components = {
  h1: Typography.H1,
  h2: Typography.H2,
  h3: Typography.H3,
  h4: Typography.H4,
  p: Typography.P,
  Image,
  Lead: Typography.Lead,
  Small: Typography.Small,
  Muted: Typography.Muted,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
