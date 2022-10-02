import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { Product } from 'shopify-buy'
import { client } from 'src/libs/client'

type Props = {
  products: Product[]
}

const urlEncode = (str: string) => str.replaceAll('/', '%2F')

const Home: NextPage<Props> = ({ products }) => {
  return (
    <main>
      <h2>Shopping</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${urlEncode(product.id as string)}`}>
              <a>
                {product.title}
                <img src={product.images[0].src} height={80} alt={product.title} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products: Product[] = await client.product.fetchAll()
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

export default Home
