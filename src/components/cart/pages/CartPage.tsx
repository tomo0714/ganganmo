import { css } from '@emotion/react'
import { CartItem } from '@/components/cart/organisms/CartItem'
import { Button } from '@/components/common/atoms/Button'
import { ErrorPage } from '@/components/common/pages/ErrorPage'
import { CartPageProps } from '@/types/cart'

export const CartPage = (props: CartPageProps) => {
  const { cart, checkout } = props

  return (
    <>
      {cart && cart.lineItems.length > 0 ? (
        <ul>
          {cart.lineItems.map((item) => {
            const imgUrl = item.customAttributes.find((attr) => attr.key === 'imageUrl')?.value
            const title = item.title
            const price = item.customAttributes.find((attr) => attr.key === 'price')?.value
            const id = item.id.toString()
            const deleteAction = () => checkout.removeItem(id)
            return (
              <li
                css={css`
                  margin-top: 20px;
                `}
                key={id}
              >
                <CartItem deleteAction={deleteAction} imgUrl={imgUrl} title={title} price={price} />
              </li>
            )
          })}
          <Button
            title="Checkout"
            onClick={() => {
              location.href = cart.webUrl
            }}
            marginTop="10px"
            isBlack
          />
        </ul>
      ) : (
        <ErrorPage message="Cart is empty." />
      )}
    </>
  )
}
