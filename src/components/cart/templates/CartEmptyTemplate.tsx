import { css } from '@emotion/react'
import { CartEmptyMessage } from '@/components/cart/atoms/CartEmptyMessage'
import { Button } from '@/components/common/atoms/Button'

const cartEmptyTemplateStyle = css`
  max-width: 600px;
  height: 100vh;
  padding: calc(50vh - 134px) 20px 20px 20px;
  margin: 0 auto;
`

type CartEmptyTemplateProps = {
  message: string
}

export const CartEmptyTemplate = (props: CartEmptyTemplateProps) => {
  const { message } = props
  return (
    <div css={cartEmptyTemplateStyle}>
      <CartEmptyMessage message={message} />
      <Button href="/" title="back to shopping" marginTop="5" isBlack />
    </div>
  )
}
