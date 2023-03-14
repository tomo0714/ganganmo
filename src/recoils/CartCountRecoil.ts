import { atom, RecoilState } from 'recoil'
import { RecoilKey } from '@/recoils/RecoilKey'

export const CartCountRecoil: RecoilState<number> = atom({
  key: RecoilKey.CART_COUNT,
  default: 0
})
