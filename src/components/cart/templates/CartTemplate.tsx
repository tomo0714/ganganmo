import { css } from '@emotion/react'
import { CartTotalPrice } from '@/components/cart/atoms/CartTotalPrice'
import { CartButtonArea } from '@/components/cart/molecules/CartButtonArea'
import { CartItem } from '@/components/cart/organisms/CartItem'

const cartTemplateStyle = css`
  max-width: 600px;
  padding: 0 20px;
  margin: 0 auto;
`

type CartTemplateProps = {
  cart: ShopifyBuy.Cart
  onClickDelete: (id: string) => void
  onClickCheckOut?: () => void
}

export const CartTemplate = (props: CartTemplateProps) => {
  const { cart, onClickDelete, onClickCheckOut } = props
  let totalPrice = 0

  return (
    <div css={cartTemplateStyle}>
      <ul>
        {cart.lineItems.map((item) => {
          const imgUrl = item.customAttributes.find((attr) => attr.key === 'imageUrl')?.value
          const title = item.title
          const price = item.customAttributes.find((attr) => attr.key === 'price')?.value
          const id = item.id.toString()
          totalPrice += Number(price)
          return <CartItem key={id} onClickDelete={() => onClickDelete(id)} src={imgUrl} title={title} price={price} />
        })}
      </ul>
      <CartTotalPrice totalPrice={totalPrice} />
      <CartButtonArea checkoutUrl={cart.webUrl} onClickCheckOut={onClickCheckOut} />
    </div>
  )
}
