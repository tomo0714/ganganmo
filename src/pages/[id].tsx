import { GetStaticPaths, GetStaticProps } from 'next'
import { Product } from 'shopify-buy'
import { client } from '@/libs/client'

type DetailProps = {
  product?: Product
  errors?: string
}

const DetailPage = (props: DetailProps) => {
  if (props.errors) {
    return <p>Error: {props.errors}</p>
  }
  if (!props.product) {
    return <p>Error: Product not found</p>
  }

  return (
    <div>
      <p>{props.product.title}</p>
      <img src={props.product.images[0].src} height={200} alt={props.product.title} />
    </div>
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
