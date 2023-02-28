import { css } from '@emotion/react'
import { DeleteButton } from '@/components/common/atoms/DeleteButton'
import { CartItemProps } from '@/types/cart'

const CartItemStyle = css`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #dfdfdf;

  img {
    width: 25%;
    height: 125px;
    margin-right: 30px;
  }
`

export const CartItem = (props: CartItemProps) => {
  const { deleteAction, imgUrl, title, price } = props
  return (
    <div css={CartItemStyle}>
      <img src={imgUrl} alt={title} />
      <div
        css={css`
          width: 100%;
          font-size: 12px;
          text-align: right;

          p:nth-of-type(2) {
            margin-top: 5px;
          }
        `}
      >
        <p>{title}</p>
        <p
          css={css`
            margin-top: 5px;
            font-size: 14px;
            font-weight: bold;

            span {
              font-size: 12px;
              font-weight: normal;
            }
          `}
        >
          <span>price </span>￥{price}
        </p>
        <p>(tax inc)</p>
        <div
          css={css`
            margin-top: 20px;
          `}
        >
          <DeleteButton deleteAction={deleteAction} />
        </div>
      </div>
    </div>
  )
}
