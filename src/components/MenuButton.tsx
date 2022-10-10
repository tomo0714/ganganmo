import { css } from '@emotion/react'

type MenuButtonProps = {
  isCross: boolean
  onClick: () => void
}

export const MenuButton = (props: MenuButtonProps) => {
  const { isCross, onClick } = props
  const menuButtonStyle = css`
    position: relative;
    width: 30px;
    border: none;
    background: none;

    span {
      position: absolute;
      top: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: black;
    }
    ${isCross
      ? `
      span:nth-of-type(1) {
        transform: rotate(22deg);
      }
      span:nth-of-type(2) {
        display: none;
      }
      span:nth-of-type(3) {
        transform: rotate(-22deg);
      }
      `
      : `
      span:nth-of-type(1) {
        top: -5px;
      }
      span:nth-of-type(3) {
        top: 5px;
      }`}
  `
  return (
    <button css={menuButtonStyle} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
