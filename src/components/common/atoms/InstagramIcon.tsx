import { FaInstagram } from 'react-icons/fa'
import { LinkWrapper } from '@/components/common/molecules/LinkWrapper'

type InstagramIconProps = {
  href: string
}

export const InstagramIcon = (props: InstagramIconProps) => {
  const { href } = props
  return (
    <li>
      <LinkWrapper href={href}>
        <FaInstagram />
      </LinkWrapper>
    </li>
  )
}
