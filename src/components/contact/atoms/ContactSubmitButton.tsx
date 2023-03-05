import { css } from '@emotion/react'
import { Button } from '@/components/common/atoms/Button'

const ContactSubmitButtonStyle = css`
  margin-top: 30px;
`

export const ContactSubmitButton = () => {
  return (
    <div css={ContactSubmitButtonStyle}>
      <Button type="submit" title="submit" isBlack />
    </div>
  )
}
