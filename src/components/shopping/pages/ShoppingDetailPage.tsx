import { css } from '@emotion/react'
import { Button } from '@/components/common/atoms/Button'
import { ErrorPage } from '@/components/common/pages/ErrorPage'
import { ShoppingDetailImage } from '@/components/shopping/atoms/ShoppingDetailImage'
import { ShoppingDetailThumbnail } from '@/components/shopping/atoms/ShoppingDetailThumbnail'
import { ShoppingDetailImageWrapper } from '@/components/shopping/molecules/ShoppingDetailImageWrapper'
import { ShoppingDetailInfo } from '@/components/shopping/organisms/ShoppingDetailInfo'
import { ProductProps } from '@/types/shopping'

const detailStyle = css`
  padding: 0 20px;
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
          <ShoppingDetailThumbnail src={product.images[imageIndex].src} alt={product.title} />
          <ShoppingDetailImageWrapper>
            {product.images.map(
              (_img, index) =>
                product.images.length > 1 && (
                  <ShoppingDetailImage
                    key={`${_img.src}_${imageIndex}`}
                    onClick={() => onClickImage(index)}
                    src={_img.src}
                    alt={product.title}
                  />
                )
            )}
          </ShoppingDetailImageWrapper>
          <ShoppingDetailInfo
            title={product.title}
            price={product.variants[0].price}
            description={product.description}
          />
          <Button href="/cart" title="add to cart" onClick={onClickCart} marginTop="60" isBlack />
          <Button href="/" title="back to shopping" marginTop="10" />
        </div>
      )}
    </>
  )
}
