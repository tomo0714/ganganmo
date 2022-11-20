import { css } from '@emotion/react'
import Link from 'next/link'
import { Title } from '@/components/common/atoms/Title'
import { ProductsProps } from '@/types/shopping'

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

export const ShoppingPage = (props: ProductsProps) => {
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
