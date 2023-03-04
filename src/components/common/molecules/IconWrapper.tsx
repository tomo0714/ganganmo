import { css } from '@emotion/react'
import { ReactNode } from 'react'

const IconWrapperStyle = css`
  display: flex;
  width: 80px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 80px;
  color: #000;
  font-size: 18px;
`

type IconWrapperProps = {
  children: ReactNode
}

export const IconWrapper = (props: IconWrapperProps) => {
  const { children } = props
  return <ul css={IconWrapperStyle}>{children}</ul>
}
