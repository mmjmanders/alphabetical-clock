import { toWords as en } from 'to-words/en-US'
import { toWords as nl } from 'to-words/nl-NL'

export type Language = 'en' | 'nl'
export type Words = {
  hours: {
    [k in Language]: string[]
  }
  minutes: {
    [k in Language]: string[]
  }
  seconds: {
    [k in Language]: string[]
  }
}

export const useWords = (): Words => {
  const minutesAndSecondsEn = [...Array(60).keys()].map((i) => en(i)).sort()
  const minutesAndSecondsNl = [...Array(60).keys()].map((i) => nl(i)).sort()
  return {
    hours: {
      en: [...Array(12).keys()].map((i) => en(i + 1)).sort(),
      nl: [...Array(12).keys()].map((i) => nl(i + 1)).sort(),
    },
    minutes: {
      en: minutesAndSecondsEn,
      nl: minutesAndSecondsNl,
    },
    seconds: {
      en: minutesAndSecondsEn,
      nl: minutesAndSecondsNl,
    },
  }
}
