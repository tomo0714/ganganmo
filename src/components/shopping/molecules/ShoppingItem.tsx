import { css } from '@emotion/react'
import { Title } from '@/components/common/atoms/Title'
import { LinkWrapper } from '@/components/common/molecules/LinkWrapper'
import { ShoppingItemImage } from '@/components/shopping/atoms/ShoppingItemImage'
import { ShoppingItemPrice } from '@/components/shopping/atoms/ShoppingItemPrice'

const shoppingItemStyle = css`
  position: relative;
  width: 49%;
  height: 70vw;
  margin-bottom: 2%;

  h4 {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  @media screen and (min-width: 1000px) {
    width: 24.3%;
    height: 36vw;
    margin-bottom: 1%;
  }
`

type ShoppingItemProps = {
  id: string
  src: string
  title: string
  price: string
}

export const ShoppingItem = (props: ShoppingItemProps) => {
  const { id, src, title, price } = props
  return (
    <li css={shoppingItemStyle}>
      <LinkWrapper href={id}>
        <ShoppingItemImage src={src} alt={title} />
        <Title type="h4">{title}</Title>
        <ShoppingItemPrice price={price} />
      </LinkWrapper>
    </li>
  )
}
