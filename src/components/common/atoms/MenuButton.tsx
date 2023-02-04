import { css } from '@emotion/react'

type MenuButtonProps = {
  isCross: boolean
  onClick: () => void
}

export const MenuButton = (props: MenuButtonProps) => {
  const { isCross, onClick } = props
  const menuButtonStyle = css`
    position: relative;
    width: 15px;
    border: none;
    background: none;

    span {
      position: absolute;
      top: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: black;
      border-radius: 5px;
    }
    ${isCross
      ? `
      span:nth-of-type(1) {
        transform: rotate(45deg);
        width: 15px;
      }
      span:nth-of-type(2) {
        display: none;
      }
      span:nth-of-type(3) {
        transform: rotate(-45deg);
        width: 15px;
      }
      `
      : `
      span:nth-of-type(1) {
        top: -7px;
      }
      span:nth-of-type(3) {
        top: 7px;
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
