import { css } from '@emotion/react'
import { Button } from '@/components/common/atoms/Button'

const buttonWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;

  li {
    width: 48%;
  }
`

type CartButtonAreaProps = {
  checkoutUrl: string
}

export const CartButtonArea = (props: CartButtonAreaProps) => {
  const { checkoutUrl } = props
  return (
    <ul css={buttonWrapperStyle}>
      <li>
        <Button href="/" title="back to shopping" />
      </li>
      <li>
        <Button href={checkoutUrl} title="checkout" isBlack />
      </li>
    </ul>
  )
}
