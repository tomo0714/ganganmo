import { css } from '@emotion/react'
import { ReactNode } from 'react'

const CartItemWrapperStyle = css`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #dfdfdf;
`

type CartItemWrapperProps = {
  children: ReactNode
}

export const CartItemWrapper = (props: CartItemWrapperProps) => {
  const { children } = props
  return (
    <li
      css={css`
        margin-bottom: 20px;
      `}
    >
      <div css={CartItemWrapperStyle}>{children}</div>
    </li>
  )
}
