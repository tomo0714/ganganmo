import { css } from '@emotion/react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { Product } from 'shopify-buy'
import { Title } from '@/components/Title'
import { client } from 'src/libs/client'

const noProductStyle = css`
  margin: 100px 0;
  font-weight: bold;
  text-align: center;
`

const shoppingListStyle = css`
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
  }
`

type Props = {
  products?: Product[]
  errors?: string
}

const Home: NextPage<Props> = (props) => {
  const { products, errors } = props
  const urlEncode = (str: string) => str.replaceAll('/', '%2F')
  return (
    <>
      <Title>SHOPPING</Title>
      {!products ? (
        <p css={noProductStyle}>{errors}</p>
      ) : products.length === 0 ? (
        <p css={noProductStyle}>Product does not exist ! </p>
      ) : (
        <ul css={shoppingListStyle}>
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
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
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
