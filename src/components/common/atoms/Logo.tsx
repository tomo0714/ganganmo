import { css } from '@emotion/react'
import Link from 'next/link'

export const Logo = () => {
  /** TODO: Logoは決まり次第差し替え */
  return (
    <Link href={'/'}>
      <a>
        <div
          css={css`
            font-size: 25px;
          `}
        >
          Logo
        </div>
      </a>
    </Link>
  )
}
