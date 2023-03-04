import { CartItemImage } from '@/components/cart/atoms/CartItemImage'
import { CartItemInfo } from '@/components/cart/molecules/CartItemInfo'
import { CartItemWrapper } from '@/components/cart/organisms/CartItemWrapper'
import { CartItemProps } from '@/types/cart'

export const CartItem = (props: CartItemProps) => {
  const { onClickDelete, src, title, price } = props
  return (
    <CartItemWrapper>
      <CartItemImage src={src} alt={title} />
      <CartItemInfo title={title} price={price} onClickDelete={onClickDelete} />
    </CartItemWrapper>
  )
}
