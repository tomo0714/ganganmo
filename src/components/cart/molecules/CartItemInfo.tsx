import { css } from '@emotion/react'
import { DeleteButton } from '@/components/common/atoms/DeleteButton'

const CartItemInfoStyle = css`
  width: 100%;
  font-size: 12px;
  text-align: right;
`

const taxincStyle = css`
  margin-top: 5px;
`

const priceStyle = css`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;

  span {
    font-size: 12px;
    font-weight: normal;
  }
`

type CartItemInfoProps = {
  title: string
  price: string | undefined
  onClickDelete: () => void
}

export const CartItemInfo = (props: CartItemInfoProps) => {
  const { title, price, onClickDelete } = props
  return (
    <div css={CartItemInfoStyle}>
      <p>{title}</p>
      <p css={priceStyle}>
        <span>price </span>&yen;{price ? price : 'price is unknown'}
      </p>
      <p css={taxincStyle}>(tax inc)</p>
      <DeleteButton deleteAction={onClickDelete} />
    </div>
  )
}
