import { css } from '@emotion/react'
import Link from 'next/link'
import { Button } from '@/components/common/atoms/Button'
import { Notification } from '@/components/common/atoms/Notification'
import { Title } from '@/components/common/atoms/Title'
import { ProductProps } from '@/types/shopping'

const detail = css`
  padding: 0 20px;

  img {
    height: auto;
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
}

export const ShoppingDetailPage = (props: ShoppingDetailPageProps) => {
  const { product, errors, onClickCart } = props
  return (
    <>
      {errors ? (
        <p>Error: {errors}</p>
      ) : !product ? (
        <p>Error: {errors}</p>
      ) : (
        <>
          <div css={detail}>
            <img src={product.images[0].src} alt={product.title} />
            <Title>{product.title}</Title>
            <p css={priceStyle}>￥{product.variants[0].price}</p>
            <p
              css={css`
                font-size: 14px;
                font-weight: bold;
              `}
            >
              description
            </p>
            <div css={description}>{product.description}</div>
            <Button title="Cart" onClick={onClickCart} marginTop="60" isBlack />
            <Link href="/">
              <a>
                <Button title="← Back to shopping" marginTop="10" />
              </a>
            </Link>
          </div>
          <Notification message="Add to cart!" />
        </>
      )}
    </>
  )
}
