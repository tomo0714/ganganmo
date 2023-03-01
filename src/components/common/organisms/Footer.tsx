import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaRegQuestionCircle } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer
      css={css`
        height: 50px;
        padding-bottom: 80px;
        margin-top: 120px;
        text-align: center;
      `}
    >
      <ul
        css={css`
          display: flex;
          width: 80px;
          justify-content: space-between;
          margin: 0 auto;
          margin-top: 80px;
          color: #000;
          font-size: 18px;
        `}
      >
        <li>
          {/** TODO: Contact作成後、遷移先を変える */}
          <Link href="/">
            <a>
              <FaRegQuestionCircle />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/gan_gannmo/">
            <a>
              <FaInstagram />
            </a>
          </Link>
        </li>
      </ul>
      <div
        css={css`
          margin-top: 80px;
        `}
      >
        <Image onClick={() => window.scrollTo(0, 0)} src="/arrowTop.svg" alt="arrowTop" width={30} height={30} />
      </div>
    </footer>
  )
}
