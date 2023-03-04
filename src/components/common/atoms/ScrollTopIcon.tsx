import { css } from '@emotion/react'
import { useCallback } from 'react'

export const ScrollTopIcon = () => {
  const onClickScrollTopIcon = useCallback(() => window.scrollTo(0, 0), [])
  return (
    <button
      css={css`
        width: 40px;
        height: 40px;
        margin: 80px;
      `}
      onClick={onClickScrollTopIcon}
    >
      <img src="/arrowTop.svg" alt="arrowTop" />
    </button>
  )
}
