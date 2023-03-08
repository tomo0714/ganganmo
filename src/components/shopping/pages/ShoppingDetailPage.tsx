import { css } from '@emotion/react'
import { ErrorPage } from '@/components/common/pages/ErrorPage'
import { ShoppingDetailContent } from '@/components/shopping/organisms/ShoppingDetailContent'
import { ShoppingDetailPreview } from '@/components/shopping/organisms/ShoppingDetailPreview'
import { ProductProps } from '@/types/shopping'

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

type ShoppingDetailPageProps = ProductProps & {
  onClickCart: () => void
  onClickImage: (index: number) => void
  imageIndex: number
}

export const ShoppingDetailPage = (props: ShoppingDetailPageProps) => {
  const { product, errors, onClickCart, onClickImage, imageIndex } = props
  return (
    <>
      {errors || !product ? (
        <ErrorPage message={errors} />
      ) : (
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
      )}
    </>
  )
}
