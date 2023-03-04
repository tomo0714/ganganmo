import { css } from '@emotion/react'

const errorPageStyle = css`
  height: 100vh;
  padding-top: calc(30vh);
`

const errorMessageStyle = css`
  font-weight: bold;
  text-align: center;
`

type ErrorPageProps = {
  message: string | undefined
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { message } = props
  return (
    <div css={errorPageStyle}>
      <p css={errorMessageStyle}>{message ? message : 'An unexpected error occurred.'}</p>
    </div>
  )
}
