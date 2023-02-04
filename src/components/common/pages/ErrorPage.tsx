import { css } from '@emotion/react'
import Link from 'next/link'
import { Button } from '@/components/common/atoms/Button'

export const ErrorPage = (props: { message: string }) => {
  const { message } = props
  return (
    <div
      css={css`
        padding: 30px;
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
          <Button title="← Back to shopping" marginTop="20" />
        </a>
      </Link>
    </div>
  )
}
