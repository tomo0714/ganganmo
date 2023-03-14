import Link from 'next/link'
import { ReactNode } from 'react'

type LinkWrapperProps = {
  href: string
  children: ReactNode
}

export const LinkWrapper = (props: LinkWrapperProps) => {
  const { href, children } = props
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}
