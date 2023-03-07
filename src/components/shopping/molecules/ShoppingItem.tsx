import { css } from '@emotion/react'
import Link from 'next/link'
import { Title } from '@/components/common/atoms/Title'
import { ShoppingItemImage } from '@/components/shopping/atoms/ShoppingItemImage'
import { ShoppingItemPrice } from '@/components/shopping/atoms/ShoppingItemPrice'

const shoppingListStyle = css`
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
    <li css={shoppingListStyle}>
      <Link href={id}>
        <a>
          <div>
            <ShoppingItemImage src={src} alt={title} />
            <Title type="h4">{title}</Title>
            <ShoppingItemPrice price={price} />
          </div>
        </a>
      </Link>
    </li>
  )
}
