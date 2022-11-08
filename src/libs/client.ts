import Client from 'shopify-buy'

export const client = Client.buildClient({
  domain: process.env.DOMAIN,
  storefrontAccessToken: process.env.ACCESS_TOKEN
})

// ブラウザ用
export const browserClient = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  storefrontAccessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
})
