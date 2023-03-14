import { css } from '@emotion/react'
import { BiShoppingBag } from 'react-icons/bi'
import { LinkWrapper } from '@/components/common/molecules/LinkWrapper'

const cartStyle = css`
  display: flex;
  align-items: center;
`

const cartNumberStyle = css`
  padding-top: 6px;
  margin-left: 3px;
  font-size: 21px;
`

type CartIconProps = {
  href: string
  cartCount: number
}

export const CartIcon = (props: CartIconProps) => {
  const { href, cartCount } = props
  return (
    <LinkWrapper href={href}>
      <div css={cartStyle}>
        <BiShoppingBag size={21} />
        <span css={cartNumberStyle}>{cartCount}</span>
      </div>
    </LinkWrapper>
  )
}
