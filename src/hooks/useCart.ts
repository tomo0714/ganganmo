import { useCallback, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Cart } from 'shopify-buy'
import { browserClient } from '@/libs/client'
import { LoadingRecoil } from '@/recoil/LoadingRecoil'
import { Checkout } from '@/types/cart'

const useCart = (): { cart: Cart | null; checkout: Checkout } => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [checkoutId, setCheckoutId] = useState<string>('')
  const setLoadingRecoil = useSetRecoilState(LoadingRecoil)

  /**
   * get checkout id and initialize cart object
   */
  const initializeCart = async () => {
    const id: string | null = localStorage.getItem('checkoutId')
    let newCart: Cart
    let newCheckoutId: string
    if (id) {
      newCart = await browserClient.checkout.fetch(id)
      newCheckoutId = newCart.id as string
    } else {
      newCart = await browserClient.checkout.create()
      newCheckoutId = newCart.id as string
      localStorage.setItem('checkoutId', newCheckoutId)
    }
    setCheckoutId(newCheckoutId)
    setCart(newCart)
  }

  useEffect(() => {
    initializeCart()
  }, [])

  /**
   * add item to cart
   * @param variantId
   * @param quantity
   */
  const addItem = useCallback(
    async (variantId: string, quantity: number, customAttributes: { key: string; value: string }[]) => {
      setLoadingRecoil(true)
      const lineItemsToAdd = [
        {
          variantId: variantId,
          quantity: quantity,
          customAttributes: customAttributes
        }
      ]
      const newCart = await browserClient.checkout.addLineItems(checkoutId, lineItemsToAdd)
      setCart(newCart)
      setLoadingRecoil(false)
    },
    [checkoutId]
  )

  /**
   * update item quantity
   */
  const updateQuantity = useCallback(
    async (lineItemId: string, quantity: number) => {
      const lineItemsToUpdate = [{ id: lineItemId, quantity }]
      const newCart = await browserClient.checkout.updateLineItems(checkoutId, lineItemsToUpdate)
      setCart(newCart)
    },
    [checkoutId]
  )

  /**
   * remove item from cart
   * @param lineItemId
   */
  const removeItem = useCallback(
    async (lineItemId: string) => {
      setLoadingRecoil(true)
      const lineItemIdsToRemove = [lineItemId]
      const newCart: Cart = await browserClient.checkout.removeLineItems(checkoutId, lineItemIdsToRemove)
      setCart(newCart)
      setLoadingRecoil(false)
    },
    [checkoutId]
  )

  /**
   * redirect to checkout page with selected variant
   * @param variantId
   * @param quantity
   */
  const buyNow = useCallback(
    async (variantId: string, quantity: number) => {
      const lineItemsToAdd = [{ variantId: variantId, quantity: quantity }]
      const newCart: Cart = await browserClient.checkout.addLineItems(checkoutId, lineItemsToAdd)
      location.href = newCart.webUrl
    },
    [checkoutId]
  )

  const checkout = {
    addItem,
    updateQuantity,
    removeItem,
    buyNow
  }

  return { cart, checkout }
}

export default useCart
