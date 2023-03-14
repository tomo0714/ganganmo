import { css } from '@emotion/react'
import { useCallback } from 'react'

const scrollTopIconStyle = css`
  width: 40px;
  height: 40px;
  margin: 80px;
`

export const ScrollTopIcon = () => {
  const onClickScrollTopIcon = useCallback(() => window.scrollTo(0, 0), [])
  return (
    <button css={scrollTopIconStyle} onClick={onClickScrollTopIcon}>
      <img src="/arrowTop.svg" alt="arrowTop" />
    </button>
  )
}
