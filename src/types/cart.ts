export type Checkout = {
  addItem: (variantId: string, quantity: number, customAttributes: { key: string; value: string }[]) => Promise<void>
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>
  removeItem: (lineItemId: string) => Promise<void>
  buyNow: (variantId: string, quantity: number) => Promise<void>
}

export type CartPageProps = {
  cart: ShopifyBuy.Cart | null
  onClickDelete: (id: string) => void
}

export type CartItemProps = {
  onClickDelete: () => void
  src: string | undefined
  title: string
  price: string | undefined
}
