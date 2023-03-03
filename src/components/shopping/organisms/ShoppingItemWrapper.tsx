import { css } from '@emotion/react'
import { ReactNode } from 'react'

const shoppingListStyle = css`
  display: grid;
  gap: 7px;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`

type ShoppingItemWrapperProps = {
  children: ReactNode
}

export const ShoppingItemWrapper = (props: ShoppingItemWrapperProps) => {
  const { children } = props
  return <ul css={shoppingListStyle}>{children}</ul>
}
