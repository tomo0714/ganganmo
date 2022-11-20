import { css } from '@emotion/react'
import Link from 'next/link'
import { Button } from '@/components/common/atoms/Button'
import { Notification } from '@/components/common/atoms/Notification'
import { Title } from '@/components/common/atoms/Title'
import { ProductProps } from '@/types/shopping'

const detail = css`
  img {
    height: auto;
  }

  p {
    margin-top: 20px;
    text-align: center;
  }
`

const description = css`
  margin-top: 20px;
  text-align: center;
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
            <p>￥{product.variants[0].price}</p>
            <div css={description}>{product.description}</div>
            <Button title="Cart" onClick={onClickCart} marginTop="20" isBlack />
            <Link href="/">
              <a>
                <Button title="← Back to shopping" marginTop="8" />
              </a>
            </Link>
          </div>
          <Notification message="Add to cart!" />
        </>
      )}
    </>
  )
}
