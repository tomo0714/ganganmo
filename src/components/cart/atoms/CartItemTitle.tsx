type CartItemTitleProps = {
  title: string
}

export const CartItemTitle = (props: CartItemTitleProps) => {
  const { title } = props
  return <p>{title}</p>
}
