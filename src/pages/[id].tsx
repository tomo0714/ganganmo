import { GetStaticPaths, GetStaticProps } from 'next'
import { useCallback, useState } from 'react'
import { CustomAttribute, Product } from 'shopify-buy'
import { ErrorTemplate } from '@/components/common/templates/ErrorTemplate'
import { ShoppingDetailTemplate } from '@/components/shopping/templates/ShoppingDetailTemplate'
import useCart from '@/hooks/useCart'
import { client } from 'src/libs/client'

type ProductProps = {
  product?: Product
  errors?: string
}

const ShoppingDetailPage = (props: ProductProps) => {
  const { product, errors } = props
  const { checkout } = useCart()
  const [imageIndex, setImageIndex] = useState<number>(0)

  const onClickCart = useCallback(async () => {
    if (product) {
      const quantity = 1
      const variantId: string = product.variants[0].id as string
      const customAttributes: CustomAttribute[] = [
        { key: 'price', value: `${product.variants[0].price}` },
        { key: 'imageUrl', value: `${product.variants[0].image.src}` }
      ]
      await checkout.addItem(variantId, quantity, customAttributes)
    }
  }, [checkout])

  const onClickImage = useCallback((index: number) => setImageIndex(index), [])

  return (
    <>
      {errors || !product ? (
        <ErrorTemplate message={errors} />
      ) : (
        <ShoppingDetailTemplate
          product={product}
          onClickCart={onClickCart}
          onClickImage={onClickImage}
          imageIndex={imageIndex}
        />
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await client.product.fetchAll()
  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<ProductProps> = async ({ params }) => {
  try {
    const id = params?.id
    if (!id) {
      return { props: { errors: 'not found' } }
    }
    const productRes = await client.product.fetch(id as string)
    const product = JSON.parse(JSON.stringify(productRes))
    return { props: { product: product } }
  } catch (err) {
    return { props: { errors: 'unexpected error' } }
  }
}

export default ShoppingDetailPage
