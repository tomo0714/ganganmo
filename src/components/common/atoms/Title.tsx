import { css } from '@emotion/react'
import { ReactNode } from 'react'

const title = css`
  margin-top: 40px;
  font-size: 16px;
`

export const Title = (props: { children: ReactNode }) => {
  return <h2 css={title}>{props.children}</h2>
}
