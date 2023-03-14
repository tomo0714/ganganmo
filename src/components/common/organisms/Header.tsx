import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CartIcon } from '@/components/common/atoms/CartIcon'
import { Logo } from '@/components/common/atoms/Logo'
import useCart from '@/hooks/useCart'
import { CartCountRecoil } from '@/recoils/CartCountRecoil'

const headerStyle = css`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const Header = () => {
  const [count, setCount] = useState<number>(0)
  const cartCount = useRecoilValue(CartCountRecoil)
  const { cart } = useCart()

  useEffect(() => setCount(cart ? cart.lineItems.length : 0), [cart])
  useEffect(() => setCount(cartCount), [cartCount])

  return (
    <header css={headerStyle}>
      <Logo />
      <CartIcon href="/cart" cartCount={count} />
    </header>
  )
}
