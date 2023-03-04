import { css } from '@emotion/react'

const cartEmptyMessageStyle = css`
  text-align: center;
`

type CartEmptyMessageProps = {
  message: string
}

export const CartEmptyMessage = (props: CartEmptyMessageProps) => {
  const { message } = props
  return <p css={cartEmptyMessageStyle}>{message}</p>
}
