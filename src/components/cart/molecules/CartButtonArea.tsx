import { css } from '@emotion/react'
import { CartButton } from '@/components/cart/atoms/CartButton'

const buttonWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`

type CartButtonAreaProps = {
  checkoutUrl: string
  onClickCheckOut?: () => void
}

export const CartButtonArea = (props: CartButtonAreaProps) => {
  const { checkoutUrl, onClickCheckOut } = props
  return (
    <ul css={buttonWrapperStyle}>
      <CartButton href="/" title="back to shopping" />
      <CartButton href={checkoutUrl} title="checkout" isBlack onClick={onClickCheckOut} />
    </ul>
  )
}
