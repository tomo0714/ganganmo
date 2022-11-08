import { css } from '@emotion/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { CustomAttribute, Product } from 'shopify-buy'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import useCart from '@/hooks/useCart'
import { client } from 'src/libs/client'

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

type DetailProps = {
  product?: Product
  errors?: string
}

const DetailPage = (props: DetailProps) => {
  const { product, errors } = props
  const { checkout } = useCart()
  const [popup, setPopup] = useState<boolean>(false)

  const onClickCart = async () => {
    if (product) {
      const quantity = 1
      const variantId: string = product.variants[0].id as string
      const customAttributes: CustomAttribute[] = [
        { key: 'price', value: `${product.variants[0].price}` },
        { key: 'imageUrl', value: `${product.variants[0].image.src}` }
      ]
      await checkout.addItem(variantId, quantity, customAttributes)
    }
    setPopup(true)
  }

  return (
    <>
      {errors ? (
        <p>Error: {errors}</p>
      ) : !product ? (
        <p>Error: {errors}</p>
      ) : (
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
      )}
      {popup && (
        <div
          css={css`
            position: fixed;
            z-index: 100;
            bottom: 30%;
            left: 50%;
            display: flex;
            width: 70%;
            height: 50px;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            background-color: #f9ebd4;
            border-radius: 5px;
            box-shadow: 5px 5px 0 black;
            transform: translate(-50%, -50%);

            p {
              font-weight: bold;
            }

            button {
              font-size: 20px;
            }
          `}
        >
          <p>Product added to cart !</p>
          <button onClick={() => setPopup(false)}>×</button>
        </div>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await client.product.fetchAll()
  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<DetailProps> = async ({ params }) => {
  try {
    const id = params?.id
    if (!id) {
      return { props: { errors: 'not found' } }
    }
    const productRes = await client.product.fetch(id as string)
    const product = JSON.parse(JSON.stringify(productRes))
    return { props: { product: product } }
  } catch (err) {
    return { props: { errors: 'unexpected error' } }
  }
}

export default DetailPage
