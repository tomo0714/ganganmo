import { css } from '@emotion/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Product } from 'shopify-buy'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
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

  return (
    <>
      {errors ? (
        <p>Error: {props.errors}</p>
      ) : !product ? (
        <p>Error: {props.errors}</p>
      ) : (
        <div css={detail}>
          <img src={product.images[0].src} alt={product.title} />
          <Title>{product.title}</Title>
          <p>￥{product.variants[0].price}</p>
          <div css={description}>{product.description}</div>
          <Button title="Cart" url="/cart" marginTop="20" isBlack />
          <Button title="← Back to shopping" marginTop="8" url="/" />
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
