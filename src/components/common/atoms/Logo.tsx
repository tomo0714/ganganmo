import { css } from '@emotion/react'
import { Title } from '@/components/common/atoms/Title'
import { LinkWrapper } from '@/components/common/molecules/LinkWrapper'

const logoStyle = css`
  text-align: center;
`

export const Logo = () => {
  return (
    <LinkWrapper href="/">
      <div css={logoStyle}>
        <Title type="h1">Yuri Iwamoto</Title> <span>ONLINE STORE</span>
      </div>
    </LinkWrapper>
  )
}
