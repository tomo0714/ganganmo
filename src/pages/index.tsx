import { GetStaticProps, NextPage } from 'next'
import { Product } from 'shopify-buy'
import { ErrorTemplate } from '@/components/common/templates/ErrorTemplate'
import { ShoppingTemplate } from '@/components/shopping/templates/ShoppingTemplate'
import { client } from 'src/libs/client'

type ShoppingPageProps = {
  products?: Product[]
  errors?: string
}

const Home: NextPage<ShoppingPageProps> = (props) => {
  const { products, errors } = props
  return (
    <>
      {!products ? (
        <ErrorTemplate message={errors} />
      ) : products.length === 0 ? (
        <ErrorTemplate message="Product does not exist!" />
      ) : (
        <ShoppingTemplate products={products} />
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps<ShoppingPageProps> = async () => {
  try {
    const products: Product[] = await client.product.fetchAll(100)
    return {
      props: {
        products: JSON.parse(JSON.stringify(products))
      }
    }
  } catch {
    return {
      props: {
        errors: 'unexpected error'
      }
    }
  }
}

export default Home
