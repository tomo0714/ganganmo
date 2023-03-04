import { css } from '@emotion/react'
import Link from 'next/link'
import { Title } from '@/components/common/atoms/Title'
import { ShoppingItemImage } from '@/components/shopping/atoms/ShoppingItemImage'
import { ShoppingItemPrice } from '@/components/shopping/atoms/ShoppingItemPrice'

const shoppingListStyle = css`
  position: relative;
  height: 276px;

  h4 {
    position: absolute;
    top: 10px;
    left: 10px;
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
    <li>
      <Link href={id}>
        <a>
          <div css={shoppingListStyle}>
            <ShoppingItemImage src={src} alt={title} />
            <Title type="h4">{title}</Title>
            <ShoppingItemPrice price={price} />
          </div>
        </a>
      </Link>
    </li>
  )
}
