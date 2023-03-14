import { css } from '@emotion/react'
import { CartItemPrice } from '@/components/cart/atoms/CartItemPrice'
import { CartItemTitle } from '@/components/cart/atoms/CartItemTitle'
import { DeleteButton } from '@/components/common/atoms/DeleteButton'

const cartItemInfoStyle = css`
  width: 100%;
  font-size: 12px;
  text-align: right;
`

type CartItemInfoProps = {
  title: string
  price?: string
  onClickDelete: () => void
}

export const CartItemInfo = (props: CartItemInfoProps) => {
  const { title, price, onClickDelete } = props
  return (
    <div css={cartItemInfoStyle}>
      <CartItemTitle title={title} />
      <CartItemPrice price={price} />
      <DeleteButton deleteAction={onClickDelete} />
    </div>
  )
}
