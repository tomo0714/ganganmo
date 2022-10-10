import { css } from '@emotion/react'
import Link from 'next/link'
import { useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { Logo } from '@/components/Logo'
import { MenuButton } from '@/components/MenuButton'

const header = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fff;
`
const cart = css`
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    font-size: 22px;
  }
`

export const Header = () => {
  const [isCross, setIsCross] = useState<boolean>(false)
  const onClickMenu = () => setIsCross((flag) => !flag)

  return (
    <header css={header}>
      <MenuButton isCross={isCross} onClick={onClickMenu} />
      <Logo />
      <Link href={'/cart'}>
        <a css={cart}>
          <BiShoppingBag size={22} />
          <span>0</span>
        </a>
      </Link>
    </header>
  )
}
