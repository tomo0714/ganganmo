import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { CartPage } from '@/components/cart/pages/CartPage'
import useCart from '@/hooks/useCart'
import { cartCountRecoil } from '@/recoil/cartCountRecoil'

const Cart = () => {
  const { cart, checkout } = useCart()
  const setCartCount = useSetRecoilState(cartCountRecoil)

  useEffect(() => {
    setCartCount(cart ? cart.lineItems.length : 0)
  }, [cart])

  return <CartPage cart={cart} checkout={checkout} />
}

export default Cart
