import { GetStaticProps, NextPage } from 'next'
import { Product } from 'shopify-buy'
import { ErrorTemplate } from '@/components/common/templates/ErrorTemplate'
import { ShoppingTemplate } from '@/components/shopping/templates/ShoppingTemplate'
import { client } from 'src/libs/client'

type ProductsProps = {
  products?: Product[]
  errors?: string
}

const Home: NextPage<ProductsProps> = (props) => {
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

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  try {
    const products: Product[] = await client.product.fetchAll()
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
