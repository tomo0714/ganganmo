import { css } from '@emotion/react'
import { Button } from '@/components/common/atoms/Button'
import { ShoppingDetailInfo } from '@/components/shopping/molecules/ShoppingDetailInfo'

type ShoppingDetailContentProps = {
  title: string
  price: string
  description: string
  onClickCart: () => void
}

export const ShoppingDetailContent = (props: ShoppingDetailContentProps) => {
  const { title, price, description, onClickCart } = props
  return (
    <div
      css={css`
        @media screen and (min-width: 1000px) {
          width: 560px;
          padding: 60px 0 0 80px;
        }
      `}
    >
      <ShoppingDetailInfo title={title} price={price} description={description} />
      <Button href="/cart" title="add to cart" onClick={onClickCart} marginTop="60" isBlack />
      <Button href="/" title="back to shopping" marginTop="10" />
    </div>
  )
}
