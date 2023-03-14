import { FaRegQuestionCircle } from 'react-icons/fa'
import { LinkWrapper } from '@/components/common/molecules/LinkWrapper'

type QuestionIconProps = {
  href: string
}

export const QuestionIcon = (props: QuestionIconProps) => {
  const { href } = props
  return (
    <li>
      <LinkWrapper href={href}>
        <FaRegQuestionCircle />
      </LinkWrapper>
    </li>
  )
}
