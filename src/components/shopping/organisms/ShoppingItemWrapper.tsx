import { css } from '@emotion/react'
import { ReactNode } from 'react'

const shoppingListStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

type ShoppingItemWrapperProps = {
  children: ReactNode
}

export const ShoppingItemWrapper = (props: ShoppingItemWrapperProps) => {
  const { children } = props
  return <ul css={shoppingListStyle}>{children}</ul>
}
