import { atom, RecoilState } from 'recoil'
import { RecoilKey } from '@/recoil/RecoilKey'

export const cartCountRecoil: RecoilState<number> = atom({
  key: RecoilKey.CART_COUNT,
  default: 0
})
