import { css } from '@emotion/react'

const shoppingItemPriceStyle = css`
  position: absolute;
  top: 35px;
  left: 10px;
  font-size: 14px;
`
type ShoppingItemPriceProps = {
  price: string
}

export const ShoppingItemPrice = (props: ShoppingItemPriceProps) => {
  const { price } = props
  return <p css={shoppingItemPriceStyle}>&yen;{price}</p>
}
