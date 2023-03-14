import { css } from '@emotion/react'
import { ShoppingDetailImage } from '@/components/shopping/atoms/ShoppingDetailImage'
import { ShoppingDetailThumbnail } from '@/components/shopping/atoms/ShoppingDetailThumbnail'
import { ShoppingDetailImageWrapper } from '@/components/shopping/molecules/ShoppingDetailImageWrapper'

const shoppingDetailPreviewStyle = css`
  @media screen and (min-width: 1000px) {
    width: 400px;
  }
`

type ShoppingDetailPreviewProps = {
  thumbnailSrc: string
  thumbnailAlt: string
  images: ShopifyBuy.Image[]
  onClickImage: (index: number) => void
}

export const ShoppingDetailPreview = (props: ShoppingDetailPreviewProps) => {
  const { thumbnailSrc, thumbnailAlt, images, onClickImage } = props
  return (
    <div css={shoppingDetailPreviewStyle}>
      <ShoppingDetailThumbnail src={thumbnailSrc} alt={thumbnailAlt} />
      <ShoppingDetailImageWrapper>
        {images.map(
          (_img, index) =>
            images.length > 1 && (
              <ShoppingDetailImage
                key={index}
                onClick={() => onClickImage(index)}
                src={_img.src}
                alt={`productPreviewImage_${index}`}
              />
            )
        )}
      </ShoppingDetailImageWrapper>
    </div>
  )
}
