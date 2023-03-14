import { css } from '@emotion/react'

const errorTemplateStyle = css`
  height: 100vh;
  padding-top: calc(30vh);
`

const errorMessageStyle = css`
  font-weight: bold;
  text-align: center;
`

type ErrorTemplateProps = {
  message?: string
}

export const ErrorTemplate = (props: ErrorTemplateProps) => {
  const { message } = props
  return (
    <div css={errorTemplateStyle}>
      <p css={errorMessageStyle}>{message ? message : 'An unexpected error occurred.'}</p>
    </div>
  )
}
