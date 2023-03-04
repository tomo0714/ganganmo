import { css } from '@emotion/react'

const totalPriceStyle = css`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;

  span {
    font-size: 12px;
  }
`

type CartTotalPriceProps = {
  totalPrice: number
}

export const CartTotalPrice = (props: CartTotalPriceProps) => {
  const { totalPrice } = props
  return (
    <div
      css={css`
        text-align: right;
      `}
    >
      <p css={totalPriceStyle}>
        <span>total </span>&yen;{totalPrice}
      </p>
      <p>(tax inc)</p>
    </div>
  )
}
