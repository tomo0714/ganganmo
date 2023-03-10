import { css } from '@emotion/react'
import { Button } from '@/components/common/atoms/Button'

const ContactSubmitButtonStyle = css`
  margin-top: 30px;
`

const formErrorMessageStyle = css`
  color: red;
`

type ContactSubumitButtonProps = {
  isFormError: boolean
}

export const ContactSubmitButton = (props: ContactSubumitButtonProps) => {
  const { isFormError } = props
  return (
    <div css={ContactSubmitButtonStyle}>
      {isFormError && <p css={formErrorMessageStyle}>All fields are required.</p>}
      <Button type="submit" title="submit" isBlack />
    </div>
  )
}
