import { toWords as en } from 'to-words/en-US'
import { toWords as nl } from 'to-words/nl-NL'
import type { NumberInput } from 'to-words/types'

export type Language = 'en' | 'nl'
type ToWords = (n: NumberInput) => string
export type Words = {
  toWords: ToWords
  hours: string[]
  minutes: string[]
  seconds: string[]
}
const toWordsMap: Record<Language, ToWords> = { en, nl }

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
