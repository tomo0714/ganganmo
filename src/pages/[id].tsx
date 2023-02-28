import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { CustomAttribute, Product } from 'shopify-buy'
import { ShoppingDetailPage } from '@/components/shopping/pages/ShoppingDetailPage'
import useCart from '@/hooks/useCart'
import { ShowNotificationRecoil } from '@/recoil/showNotification'
import { ProductProps } from '@/types/shopping'
import { client } from 'src/libs/client'

const DetailPage = (props: ProductProps) => {
  const { product, errors } = props
  const { checkout } = useCart()
  const showNotification = useSetRecoilState(ShowNotificationRecoil)
  const [imageIndex, setImageIndex] = useState<number>(0)

  const onClickCart = async () => {
    if (product) {
      const quantity = 1
      const variantId: string = product.variants[0].id as string
      const customAttributes: CustomAttribute[] = [
        { key: 'price', value: `${product.variants[0].price}` },
        { key: 'imageUrl', value: `${product.variants[0].image.src}` }
      ]
      await checkout.addItem(variantId, quantity, customAttributes)
    }
    showNotification(true)
  }

  const onClickImage = (index: number) => setImageIndex(index)

  return (
    <ShoppingDetailPage
      product={product}
      errors={errors}
      onClickCart={onClickCart}
      onClickImage={onClickImage}
      imageIndex={imageIndex}
    />
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

export default DetailPage
