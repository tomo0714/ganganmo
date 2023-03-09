import { css } from '@emotion/react'
import { CartTotalPrice } from '@/components/cart/atoms/CartTotalPrice'
import { CartButtonArea } from '@/components/cart/molecules/CartButtonArea'
import { CartItem } from '@/components/cart/organisms/CartItem'
import { CartEmptyPage } from '@/components/cart/pages/CartEmptyPage'
import { CartPageProps } from '@/types/cart'

const cartStyle = css`
  max-width: 600px;
  padding: 0 20px;
  margin: 0 auto;
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
                <CartItem key={id} onClickDelete={() => onClickDelete(id)} src={imgUrl} title={title} price={price} />
              )
            })}
          </ul>
          <CartTotalPrice totalPrice={totalPrice} />
          <CartButtonArea checkoutUrl={cart.webUrl} />
        </div>
      ) : (
        <CartEmptyPage message="Your cart is empty." />
      )}
    </>
  )
}
