import { useCallback } from 'react'
import { ErrorPage } from '@/components/common/pages/ErrorPage'
import { ShoppingItem } from '@/components/shopping/molecules/ShoppingItem'
import { ShoppingItemWrapper } from '@/components/shopping/organisms/ShoppingItemWrapper'
import { ProductsProps } from '@/types/shopping'

export const ShoppingPage = (props: ProductsProps) => {
  const { products, errors } = props
  const urlEncode = useCallback((str: string) => str.replaceAll('/', '%2F'), [])

  return (
    <>
      {!products ? (
        <ErrorPage message={errors} />
      ) : products.length === 0 ? (
        <ErrorPage message="Product does not exist!" />
      ) : (
        <ShoppingItemWrapper>
          {products.map((product) => (
            <ShoppingItem
              key={product.id}
              id={`/${urlEncode(product.id as string)}`}
              src={product.images[0].src}
              title={product.title}
              price={product.variants[0].price}
            />
          ))}
        </ShoppingItemWrapper>
      )}
    </>
  )
}
