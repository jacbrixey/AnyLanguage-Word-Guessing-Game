import { CONFIG } from './config'

export const VALIDGUESSES = [
  'pinti',
  '\'aaaa',
  "'aaaa",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
