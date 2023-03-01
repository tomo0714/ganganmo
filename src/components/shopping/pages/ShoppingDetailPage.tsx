import { css } from '@emotion/react'
import Link from 'next/link'
import { Button } from '@/components/common/atoms/Button'
import { Title } from '@/components/common/atoms/Title'
import { ProductProps } from '@/types/shopping'

const detail = css`
  padding: 0 20px;
`
const mainImagesStyle = css`
  width: 100%;
  height: 500px;

  img {
    height: 100%;
  }
`

const imagesStyle = css`
  display: flex;
  flex-wrap: wrap;

  li {
    width: 19%;
    height: 96px;
    margin: 0 0.5% 2%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

const priceStyle = css`
  padding-bottom: 20px;
  border-bottom: 1px solid;
  margin: 20px 0;
  font-size: 16px;
  font-weight: bold;
`

const description = css`
  margin-top: 10px;
  font-size: 12px;
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
        <p>Error: {errors}</p>
      ) : (
        <div css={detail}>
          <div css={mainImagesStyle}>
            <img src={product.images[imageIndex].src} alt={product.title} />
          </div>
          <ul css={imagesStyle}>
            {product.images.map(
              (_img, index) =>
                product.images.length > 1 && (
                  <li key={`${_img.id}_${index}`} onClick={() => onClickImage(index)}>
                    <img src={_img.src} alt={product.title} />
                  </li>
                )
            )}
          </ul>
          <Title>{product.title}</Title>
          <p css={priceStyle}>￥{product.variants[0].price}</p>
          <div css={description}>{product.description}</div>
          <Link href="/cart">
            <a>
              <Button title="add to cart" onClick={onClickCart} marginTop="60" isBlack />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button title="← back to shopping" marginTop="10" />
            </a>
          </Link>
        </div>
      )}
    </>
  )
}
