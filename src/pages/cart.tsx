import { css } from '@emotion/react'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import useCart from '@/hooks/useCart'

const buttonStyle = css`
  display: block;
  width: 100%;
  height: 56px;
  margin: 0 auto;
  margin-top: 20px;
  background: black;
  color: #fff;
  font-size: 20px;
`

const Cart = () => {
  const { cart, checkout } = useCart()

  return (
    <>
      <Title>Cart</Title>
      {cart && cart.lineItems.length > 0 ? (
        <ul>
          {cart.lineItems.map((item) => {
            return (
              <li
                css={css`
                  margin-top: 20px;
                `}
                key={item.title}
              >
                <div
                  css={css`
                    position: relative;
                    display: flex;
                    align-items: center;

                    img {
                      width: 50%;
                      margin-right: 30px;
                    }
                  `}
                >
                  <button
                    css={css`
                      position: absolute;
                      top: 0;
                      right: 0;
                      color: #c3c0c0;
                      font-size: 22px;
                      line-height: 0.5;
                    `}
                    onClick={() => checkout.removeItem(item.id.toString())}
                  >
                    ×
                  </button>
                  <img src={item.customAttributes.find((attr) => attr.key === 'imageUrl')?.value} alt="" />
                  <div
                    css={css`
                      text-align: center;

                      p:nth-of-type(1) {
                        font-weight: bold;
                      }

                      p:nth-of-type(2) {
                        margin-top: 5px;
                      }
                    `}
                  >
                    <p>{item.title}</p>
                    <p>￥{item.customAttributes.find((attr) => attr.key === 'price')?.value}</p>
                  </div>
                </div>
              </li>
            )
          })}
          <button
            css={buttonStyle}
            onClick={() => {
              location.href = cart.webUrl
            }}
          >
            Checkout
          </button>
        </ul>
      ) : (
        <div
          css={css`
            margin: 120px auto 200px;
          `}
        >
          <p
            css={css`
              text-align: center;
            `}
          >
            Your cart is empty !
          </p>
          <Link href="/">
            <a>
              <Button title="Back to shopping" width="240" isBlack />
            </a>
          </Link>
        </div>
      )}
    </>
  )
}

export default Cart
