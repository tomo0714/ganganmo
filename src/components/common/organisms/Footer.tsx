import { css } from '@emotion/react'
import { InstagramIcon } from '@/components/common/atoms/InstagramIcon'
import { QuestionIcon } from '@/components/common/atoms/QuestionIcon'
import { ScrollTopIcon } from '@/components/common/atoms/ScrollTopIcon'
import { IconWrapper } from '@/components/common/molecules/IconWrapper'

const FooterStyle = css`
  padding-bottom: 80px;
  margin-top: 120px;
  text-align: center;
`

export const Footer = () => {
  return (
    <footer css={FooterStyle}>
      <IconWrapper>
        {/** TODO: Contact作成後、遷移先を変える */}
        <QuestionIcon href="/" />
        <InstagramIcon href="https://www.instagram.com/gan_gannmo/" />
      </IconWrapper>
      <ScrollTopIcon />
    </footer>
  )
}
