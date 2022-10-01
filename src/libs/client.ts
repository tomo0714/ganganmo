import Client from 'shopify-buy'

export const client = Client.buildClient({
  domain: process.env.DOMAIN,
  storefrontAccessToken: process.env.ACCESS_TOKEN
})
