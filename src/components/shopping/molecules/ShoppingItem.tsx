import { css } from '@emotion/react'
import Link from 'next/link'
import { Title } from '@/components/common/atoms/Title'

const shoppingListStyle = css`
  position: relative;
  height: 276px;

  img {
    position: absolute;
    bottom: 10px;
    height: 100%;
  }

  h4 {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  p {
    position: absolute;
    top: 35px;
    left: 10px;
    font-size: 14px;
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
            <img src={src} alt={title} />
            <Title type="h4">{title}</Title>
            <p>&yen;{price}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
