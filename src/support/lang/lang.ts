import type { Dictionary } from '@/support/lang/dictionaries/dictionary'
import { ptBr } from '@/support/lang/dictionaries/pt-br'
import { es } from '@/support/lang/dictionaries/es'
import { en } from '@/support/lang/dictionaries/en'

export type TLangs = {
  'pt-br': Dictionary,
  es: Dictionary,
  en: Dictionary,
}

export class Lang {
  using: Dictionary
  langs: TLangs = {
    'pt-br': ptBr,
    'es': es,
    'en': en
  }
  static default: (string & keyof TLangs) = 'pt-br'

  constructor() {
    this.using = this.langs[Lang.default]
  }

  setLang(lang: keyof TLangs) {
    this.using = this.langs[lang]
  }

  translate(word: keyof Dictionary) {
    return this.using[word]
  }
}
