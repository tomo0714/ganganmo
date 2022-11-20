import { css } from '@emotion/react'
import Link from 'next/link'
import { Button } from '@/components/common/atoms/Button'

export const ErrorPage = (props: { message: string }) => {
  const { message } = props
  return (
    <div
      css={css`
        margin: 120px auto 200px;
      `}
    >
      <p
        css={css`
          text-align: center;
        `}
      >
        {message}
      </p>
      <Link href="/">
        <a>
          <Button title="Back to shopping" width="240" isBlack />
        </a>
      </Link>
    </div>
  )
}
