import { css } from '@emotion/react'
import { Button } from '@/components/common/atoms/Button'

const contactSuccessStyle = css`
  max-width: 400px;
  height: 100vh;
  padding: calc(30vh - 134px) 20px 20px 20px;
  margin: 0 auto;

  p {
    margin-top: 10px;
    font-family: Oswald, sans-serif;
    font-size: 22px;
    font-style: italic;
    text-align: center;
  }
`

export const ContactSuccessTemplate = () => {
  return (
    <div css={contactSuccessStyle}>
      <p>Thank you for your inquiry. </p>
      <p>Your inquiry has been received.</p>
      <p>We will get back to you as soon as possible.</p>
      <p> Please wait for a while.</p>
      <Button href="/" title="back to shopping" marginTop="50" isBlack />
    </div>
  )
}
