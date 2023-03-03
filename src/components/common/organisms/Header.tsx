import { css } from '@emotion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { useRecoilValue } from 'recoil'
import { Logo } from '@/components/common/atoms/Logo'
import { MenuButton } from '@/components/common/atoms/MenuButton'
import useCart from '@/hooks/useCart'
import { cartCountRecoil } from '@/recoil/cartCountRecoil'

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
const cartStyle = css`
  display: flex;
  align-items: center;

  span {
    padding-top: 6px;
    margin-left: 3px;
    font-size: 21px;
  }
`

const isHideManuButton = true
export const Header = () => {
  const [isCross, setIsCross] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const cartCount = useRecoilValue(cartCountRecoil)
  const onClickMenu = () => setIsCross((flag) => !flag)
  const { cart } = useCart()

  useEffect(() => setCount(cart ? cart.lineItems.length : 0), [cart])
  useEffect(() => setCount(cartCount), [cartCount])

  return (
    <header css={headerStyle}>
      {!isHideManuButton && <MenuButton isCross={isCross} onClick={onClickMenu} />}
      <Logo />
      <Link href="/cart">
        <a css={cartStyle}>
          <BiShoppingBag size={21} />
          <span>{count}</span>
        </a>
      </Link>
    </header>
  )
}
