import { atom, RecoilState } from 'recoil'

export const cartCountRecoil: RecoilState<number> = atom({
  key: 'CART_COUNT',
  default: 0
})
