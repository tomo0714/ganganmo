import { Title } from '@/components/common/atoms/Title'
import { ShoppingDetailDescription } from '@/components/shopping/atoms/ShoppingDetailDescription'

type ShoppingDetailInfoProps = {
  title: string
  price: string
  description: string
}

export const ShoppingDetailInfo = (props: ShoppingDetailInfoProps) => {
  const { title, price, description } = props
  return (
    <>
      <Title type="h2">{title}</Title>
      <Title type="h2">&yen;{price}</Title>
      <ShoppingDetailDescription description={description} />
    </>
  )
}
