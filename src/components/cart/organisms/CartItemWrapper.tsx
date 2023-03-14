import { css } from '@emotion/react'
import { ReactNode } from 'react'

const cartItemWrapperStyle = css`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 20px;
`

type CartItemWrapperProps = {
  children: ReactNode
}

export const CartItemWrapper = (props: CartItemWrapperProps) => {
  const { children } = props
  return <li css={cartItemWrapperStyle}>{children}</li>
}
