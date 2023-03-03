import { css } from '@emotion/react'
import Link from 'next/link'
import { Button } from '@/components/common/atoms/Button'

export const CartEmptyPage = (props: { message: string }) => {
  const { message } = props
  return (
    <div
      css={css`
        height: 100vh;
        padding: calc(50vh - 134px) 20px 20px 20px;
        margin: 0 auto;
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
          <Button title="back to shopping" marginTop="5" isBlack />
        </a>
      </Link>
    </div>
  )
}
