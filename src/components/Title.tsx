import { css } from '@emotion/react'
import { ReactNode } from 'react'

const title = css`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
`

export const Title = (props: { children: ReactNode }) => {
  return <h2 css={title}>{props.children}</h2>
}
