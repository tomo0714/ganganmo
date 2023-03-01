import { css } from '@emotion/react'
import Link from 'next/link'
import { CartItem } from '@/components/cart/organisms/CartItem'
import { Button } from '@/components/common/atoms/Button'
import { ErrorPage } from '@/components/common/pages/ErrorPage'
import { CartPageProps } from '@/types/cart'

const cartStyle = css`
  padding: 0 20px;
`

const buttonWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;

  li {
    width: 48%;
  }
`

export const CartPage = (props: CartPageProps) => {
  const { cart, onClickDelete } = props
  let totalPrice = 0

  return (
    <>
      {cart && cart.lineItems.length > 0 ? (
        <div css={cartStyle}>
          <ul>
            {cart.lineItems.map((item) => {
              const imgUrl = item.customAttributes.find((attr) => attr.key === 'imageUrl')?.value
              const title = item.title
              const price = item.customAttributes.find((attr) => attr.key === 'price')?.value
              const id = item.id.toString()

              totalPrice += Number(price)
              return (
                <li
                  css={css`
                    margin-bottom: 20px;
                  `}
                  key={id}
                >
                  <CartItem onClickDelete={() => onClickDelete(id)} imgUrl={imgUrl} title={title} price={price} />
                </li>
              )
            })}
          </ul>

          <div
            css={css`
              text-align: right;
            `}
          >
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
              <span>total </span>￥{totalPrice}
            </p>
            <p>(tax inc)</p>
          </div>

          <ul css={buttonWrapperStyle}>
            <li>
              <Link href="/">
                <a>
                  <Button title="back to shopping" />
                </a>
              </Link>
            </li>
            <li>
              <Button
                title="checkout"
                onClick={() => {
                  location.href = cart.webUrl
                }}
                isBlack
              />
            </li>
          </ul>
        </div>
      ) : (
        <ErrorPage message="Cart is empty." />
      )}
    </>
  )
}
