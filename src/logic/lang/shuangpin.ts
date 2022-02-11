import { pinyinInitials } from './pinyin'

const initialMap: Record<string, string> = {
  'sh': 'u',
  'ch': 'i',
  'zh': 'v',
  '': 'o',
}

const finalMaps: Record<string, string> = {
  a: 'a',
  ai: 'l',
  an: 'j',
  ang: 'h',
  ao: 'k',
  e: 'e',
  ei: 'z',
  en: 'f',
  eng: 'g',
  i: 'i',
  ia: 'w',
  ian: 'm',
  iang: 'd',
  iao: 'c',
  ie: 'x',
  iong: 's',
  in: 'n',
  ing: ';',
  iu: 'q',
  o: 'o',
  ong: 's',
  ou: 'b',
  u: 'u',
  er: 'r',
  ua: 'w',
  uai: 'y',
  uan: 'r',
  uang: 'd',
  ue: 't',
  ui: 'v',
  un: 'p',
  uo: 'o',
  v: 'y',
  ve: 't',
}

export const shuangpinInitials = 'b p m f d t n l g k h j q r x w y u i v z c s o'.split(/\s/g).sort()
export const shuangpinFinals = Array.from(new Set(Object.values(finalMaps))).sort()

export function toShuangpin(pinyin: string) {
  const initial = pinyinInitials.find(i => pinyin.startsWith(i)) || ''
  const final = pinyin.slice(initial.length)

  const a = initialMap[initial] || initial
  const b = finalMaps[final] || final

  return a + b
}
