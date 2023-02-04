import { css } from '@emotion/react'
import Link from 'next/link'
import { ProductsProps } from '@/types/shopping'

const noProductStyle = css`
  margin: 100px 0;
  font-weight: bold;
  text-align: center;
`

const shoppingListStyle = css`
  display: grid;
  gap: 7px;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  div {
    position: relative;
    height: 276px;
    background-color: #e8e5e5;
  }

  img {
    position: absolute;
    bottom: 10px;
    height: auto;
  }

  h4 {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 9px;
    font-weight: normal;
  }

  p {
    position: absolute;
    top: 30px;
    left: 10px;
    font-size: 9px;
  }
`

export const ShoppingPage = (props: ProductsProps) => {
  const { products, errors } = props
  const urlEncode = (str: string) => str.replaceAll('/', '%2F')

  return (
    <>
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
                  <div>
                    <img src={product.images[0].src} alt={product.title} />
                    <h4>{product.title}</h4>
                    <p>￥{product.variants[0].price}</p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
