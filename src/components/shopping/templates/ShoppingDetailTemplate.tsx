import { css } from '@emotion/react'
import { Product } from 'shopify-buy'
import { ShoppingDetailContent } from '@/components/shopping/organisms/ShoppingDetailContent'
import { ShoppingDetailPreview } from '@/components/shopping/organisms/ShoppingDetailPreview'

const detailStyle = css`
  max-width: 540px;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (min-width: 1000px) {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
  }
`

type ShoppingDetailTemplateProps = {
  product: Product
  onClickCart: () => void
  onClickImage: (index: number) => void
  imageIndex: number
}

export const ShoppingDetailTemplate = (props: ShoppingDetailTemplateProps) => {
  const { product, onClickCart, onClickImage, imageIndex } = props
  return (
    <div css={detailStyle}>
      <ShoppingDetailPreview
        thumbnailSrc={product.images[imageIndex].src}
        thumbnailAlt={product.title}
        images={product.images}
        onClickImage={onClickImage}
      />
      <ShoppingDetailContent
        title={product.title}
        price={product.variants[0].price}
        description={product.description}
        onClickCart={onClickCart}
      />
    </div>
  )
}
