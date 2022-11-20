import { css } from '@emotion/react'
import { DeleteButton } from '@/components/common/atoms/DeleteButton'
import { CartItemProps } from '@/types/cart'

export const CartItem = (props: CartItemProps) => {
  const { deleteAction, imgUrl, title, price } = props
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        align-items: center;

        img {
          width: 50%;
          margin-right: 30px;
        }
      `}
    >
      <DeleteButton deleteAction={deleteAction} />
      <img src={imgUrl} alt={title} />
      <div
        css={css`
          text-align: center;

          p:nth-of-type(1) {
            font-weight: bold;
          }

          p:nth-of-type(2) {
            margin-top: 5px;
          }
        `}
      >
        <p>{title}</p>
        <p>￥{price}</p>
      </div>
    </div>
  )
}
