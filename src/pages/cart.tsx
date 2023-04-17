import { useCallback, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { CartEmptyTemplate } from '@/components/cart/templates/CartEmptyTemplate'
import { CartTemplate } from '@/components/cart/templates/CartTemplate'
import useCart from '@/hooks/useCart'
import { CartCountRecoil } from '@/recoils/CartCountRecoil'

const CartPage = () => {
  const { cart, checkout } = useCart()
  const setCartCount = useSetRecoilState(CartCountRecoil)

  useEffect(() => {
    setCartCount(cart ? cart.lineItems.length : 0)
  }, [cart])

  const onClickCheckOut = useCallback(() => {
    localStorage.removeItem('CHECKOUT_ID')
  }, [])

  const onClickDelete = useCallback(
    (id: string) => {
      checkout.removeItem(id)
    },
    [checkout]
  )

  return (
    <>
      {!cart || !cart.lineItems.length ? (
        <CartEmptyTemplate message="Your cart is empty." />
      ) : (
        <CartTemplate cart={cart} onClickDelete={onClickDelete} onClickCheckOut={onClickCheckOut} />
      )}
    </>
  )
}

export default CartPage
