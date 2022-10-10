import { css } from '@emotion/react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { Product } from 'shopify-buy'
import { client } from 'src/libs/client'

const h2 = css`
  font-size: 20px;
  text-align: center;
`

const shoppingList = css`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  h4 {
    margin-top: 10px;
    font-size: 14px;
    font-weight: normal;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
  }
`

type Props = {
  products: Product[]
}

const Home: NextPage<Props> = ({ products }) => {
  const urlEncode = (str: string) => str.replaceAll('/', '%2F')
  return (
    <>
      <h2 css={h2}>Shopping</h2>
      <ul css={shoppingList}>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${urlEncode(product.id as string)}`}>
              <a>
                <img src={product.images[0].src} alt={product.title} />
                <h4>{product.title}</h4>
                <p>￥{product.variants[0].price}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
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
