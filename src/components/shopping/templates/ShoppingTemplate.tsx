import { useCallback } from 'react'
import { Product } from 'shopify-buy'
import { ShoppingItem } from '@/components/shopping/molecules/ShoppingItem'
import { ShoppingItemWrapper } from '@/components/shopping/organisms/ShoppingItemWrapper'

type ShoppingTemplateProps = {
  products: Product[]
}

export const ShoppingTemplate = (props: ShoppingTemplateProps) => {
  const { products } = props
  const urlEncode = useCallback((str: string) => str.replaceAll('/', '%2F'), [])

  return (
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
  )
}
