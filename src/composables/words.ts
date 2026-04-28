import { toWords as en } from 'to-words/en-US'
import { toWords as nl } from 'to-words/nl-NL'
import { toWords as es } from 'to-words/es-ES'
import { toWords as de } from 'to-words/de-DE'
import { toWords as fr } from 'to-words/fr-FR'
import type { NumberInput } from 'to-words/types'

export const languages = ['en', 'nl', 'es', 'de', 'fr'] as const
export type Language = (typeof languages)[number]
type ToWords = (n: NumberInput) => string
export type Words = {
  toWords: ToWords
  hours: string[]
  minutes: string[]
  seconds: string[]
}
const toWordsMap: Record<Language, ToWords> = { en, nl, es, de, fr }

export const useWords = (language: Language): Words => {
  const toWords = toWordsMap[language]

  const minutesAndSeconds = [...Array(60).keys()].map((i) => toWords(i)).sort()
  return {
    toWords,
    hours: [...Array(12).keys()].map((i) => toWords(i + 1)).sort(),
    minutes: minutesAndSeconds,
    seconds: minutesAndSeconds,
  }
}
