import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { CartEmptyTemplate } from '@/components/cart/templates/CartEmptyTemplate'
import { CartTemplate } from '@/components/cart/templates/CartTemplate'
import useCart from '@/hooks/useCart'
import { cartCountRecoil } from '@/recoil/cartCountRecoil'

const CartPage = () => {
  const { cart, checkout } = useCart()
  const setCartCount = useSetRecoilState(cartCountRecoil)

  useEffect(() => {
    setCartCount(cart ? cart.lineItems.length : 0)
  }, [cart])

  const onClickDelete = (id: string) => {
    checkout.removeItem(id)
  }

  return (
    <>
      {cart && cart.lineItems.length > 0 ? (
        <CartTemplate cart={cart} onClickDelete={onClickDelete} />
      ) : (
        <CartEmptyTemplate message="Your cart is empty." />
      )}
    </>
  )
}

export default CartPage
