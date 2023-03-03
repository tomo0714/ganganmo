import { css } from '@emotion/react'

const noProductStyle = css`
  font-weight: bold;
  text-align: center;
`

type ErrorPageProps = {
  message: string | undefined
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { message } = props
  return (
    <div
      css={css`
        height: 100vh;
        padding-top: calc(30vh);
      `}
    >
      <p css={noProductStyle}>{message ? message : 'An unexpected error occurred.'}</p>
    </div>
  )
}
