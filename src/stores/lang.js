import { atom } from 'nanostores'
import es from '../locales/es.json'
import en from '../locales/en.json'

const langs = [ 
  {
    locale: es,
    flag: '🇺🇸',
    id: 'EN'
  },
  {
    locale: en,
    flag: '🇲🇽',
    id: 'ES'
  }
]

const initialState = langs[0]

export const lang = atom(initialState)

export const handleLang = () => {
  lang.get().locale === es ? lang.set(langs[1]) : lang.set(langs[0])
}