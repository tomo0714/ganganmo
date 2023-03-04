import Link from 'next/link'
import { FaRegQuestionCircle } from 'react-icons/fa'

type QuestionIconProps = {
  href: string
}

export const QuestionIcon = (props: QuestionIconProps) => {
  const { href } = props
  return (
    <li>
      <Link href={href}>
        <a>
          <FaRegQuestionCircle />
        </a>
      </Link>
    </li>
  )
}
