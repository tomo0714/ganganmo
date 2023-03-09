import { css } from '@emotion/react'
import { CartEmptyMessage } from '@/components/cart/atoms/CartEmptyMessage'
import { Button } from '@/components/common/atoms/Button'

const cartEmptyPageStyle = css`
  max-width: 600px;
  height: 100vh;
  padding: calc(50vh - 134px) 20px 20px 20px;
  margin: 0 auto;
`

type CartEmptyPageProps = {
  message: string
}

export const CartEmptyPage = (props: CartEmptyPageProps) => {
  const { message } = props
  return (
    <div css={cartEmptyPageStyle}>
      <CartEmptyMessage message={message} />
      <Button href="/" title="back to shopping" marginTop="5" isBlack />
    </div>
  )
}
