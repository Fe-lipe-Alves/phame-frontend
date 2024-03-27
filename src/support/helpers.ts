import { Lang, type TLangs } from '@/support/lang/lang'
import type { Dictionary } from '@/support/lang/dictionaries/dictionary'

const _lang = new Lang()

export function setLang(lang: keyof TLangs) {
  _lang.setLang(lang)
}

/**
 * Aplica o texto convertida a partir do dicionário ativo.
 * @param word
 */
export function __(word: keyof Dictionary) {
  return _lang.translate(word)
}
