import { css } from '@emotion/react'

const priceStyle = css`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;

  span {
    font-size: 12px;
    font-weight: normal;
  }
`
const taxincStyle = css`
  margin-top: 5px;
`

type CartItemPriceProps = {
  price?: string
}

export const CartItemPrice = (props: CartItemPriceProps) => {
  const { price } = props
  return (
    <>
      <p css={priceStyle}>
        <span>price </span>&yen;{price ? price : 'price is unknown'}
      </p>
      <p css={taxincStyle}>(tax inc)</p>
    </>
  )
}
