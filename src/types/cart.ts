export type Checkout = {
  addItem: (variantId: string, quantity: number, customAttributes: { key: string; value: string }[]) => Promise<void>
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>
  removeItem: (lineItemId: string) => Promise<void>
  buyNow: (variantId: string, quantity: number) => Promise<void>
}

export type CartPageProps = {
  cart: ShopifyBuy.Cart | null
  checkout: Checkout
}

export type CartItemProps = {
  deleteAction: () => void
  imgUrl: string | undefined
  title: string | undefined
  price: string | undefined
}
