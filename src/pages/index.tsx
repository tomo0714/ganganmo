import { GetStaticProps, NextPage } from 'next'
import { Product } from 'shopify-buy'
import { ShoppingPage } from '@/components/shopping/pages/ShoppingPage'
import { ProductsProps } from '@/types/shopping'
import { client } from 'src/libs/client'

const Home: NextPage<ProductsProps> = (props) => {
  const { products, errors } = props
  return <ShoppingPage products={products} errors={errors} />
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
