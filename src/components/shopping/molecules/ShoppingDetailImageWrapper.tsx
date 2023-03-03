import { css } from '@emotion/react'
import { ReactNode } from 'react'

const imageWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
`

type ShoppingDetailImageWrapperProps = {
  children: ReactNode
}

export const ShoppingDetailImageWrapper = (props: ShoppingDetailImageWrapperProps) => {
  const { children } = props
  return <ul css={imageWrapperStyle}>{children}</ul>
}
