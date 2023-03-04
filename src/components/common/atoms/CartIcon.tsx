import { css } from '@emotion/react'
import Link from 'next/link'
import { BiShoppingBag } from 'react-icons/bi'

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
    <Link href={href}>
      <a css={cartStyle}>
        <BiShoppingBag size={21} />
        <span css={cartNumberStyle}>{cartCount}</span>
      </a>
    </Link>
  )
}
