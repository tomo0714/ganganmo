import { css } from '@emotion/react'
import Link from 'next/link'
import { Title } from '@/components/common/atoms/Title'

const LogoStyle = css`
  text-align: center;
`

export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <div css={LogoStyle}>
          <Title type="h1">Yuri Iwamoto</Title> <span>ONLINE STORE</span>
        </div>
      </a>
    </Link>
  )
}
