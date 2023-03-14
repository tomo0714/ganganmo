import { css } from '@emotion/react'
import { Button } from '@/components/common/atoms/Button'

const contactFailedStyle = css`
  max-width: 400px;
  height: 100vh;
  padding: calc(30vh - 134px) 20px 20px 20px;
  margin: 0 auto;

  p {
    margin-top: 10px;
    text-align: center;
  }
`

export const ContactFailedTemplate = () => {
  return (
    <div css={contactFailedStyle}>
      <p>Failed to send message.</p>
      <p>Please try again later</p>
      <Button href="/" title="back to contact" marginTop="50" isBlack />
    </div>
  )
}
