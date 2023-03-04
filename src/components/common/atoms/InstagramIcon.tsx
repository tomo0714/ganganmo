import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

type InstagramIconProps = {
  href: string
}

export const InstagramIcon = (props: InstagramIconProps) => {
  const { href } = props
  return (
    <li>
      <Link href={href}>
        <a>
          <FaInstagram />
        </a>
      </Link>
    </li>
  )
}
