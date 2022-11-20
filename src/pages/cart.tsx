import { CartPage } from '@/components/cart/pages/CartPage'
import useCart from '@/hooks/useCart'

const Cart = () => {
  const { cart, checkout } = useCart()

  return <CartPage cart={cart} checkout={checkout} />
}

export default Cart
