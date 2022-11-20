import { Product } from 'shopify-buy'

export type ProductsProps = {
  products?: Product[]
  errors?: string
}

export type ProductProps = {
  product?: Product
  errors?: string
}
