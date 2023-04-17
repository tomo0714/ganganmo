import { css } from '@emotion/react'
import { Button } from '@/components/common/atoms/Button'

const cartButtonStyle = css`
  width: 48%;
`

type CartButtonProps = {
  href: string
  title: string
  isBlack?: boolean
  onClick?: () => void
}

export const CartButton = (props: CartButtonProps) => {
  const { href, isBlack, title, onClick } = props
  return (
    <li css={cartButtonStyle}>
      <Button href={href} title={title} isBlack={isBlack} onClick={onClick} />
    </li>
  )
}
